import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Stripe with secret key from environment variables
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware to serve static files and parse JSON
app.use(express.static('public'));
app.use(express.json());

// API route to create checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name
      },
      unit_amount: item.price * 100 // Stripe uses cents, so multiply by 100
    },
    quantity: item.quantity
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/cancel.html`
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong creating the checkout session' });
  }
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
