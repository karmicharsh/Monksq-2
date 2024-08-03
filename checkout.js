import { loadStripe } from '@stripe/stripe-js';
import { getCartProductFromLS } from './getCartProducts';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51PjPytSCT0QiQeJ59rQ3g7I2bEJmFKSfzzL06IslDWZVPr206MxW68TcpPaBm9uoAUUV42Q3x1kcHlNyttFsnzL700Z2KhqOpS');

document.getElementById('checkout-button').addEventListener('click', async () => {
  const cartProducts = getCartProductFromLS();
  
  const items = cartProducts.map(product => ({
    name: product.name,
    quantity: product.quantity,
    price: product.price * 100 // Stripe expects price in cents
  }));

  try {
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const session = await response.json();
    const stripe = await stripePromise;

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while processing your payment.');
  }
});
