# MonkSquare E-commerce Website

Welcome to the MonkSquare E-commerce Website! This project is a small local e-commerce brand designed to showcase and sell our unique products. You can visit our Instagram page [here](https://www.instagram.com/monksquare.in/).

![MonkSquare Banner](./public/images/monksqLogo1.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

MonkSquare is an e-commerce website built using modern web technologies to provide a seamless shopping experience. Users can browse products, authenticate securely, and make payments with ease.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Bundler:** Vite
- **Authentication:** Firebase
- **Payment Integration:** Stripe

## Features

- **Product Display:** Browse through our catalog of unique products.
- **User Authentication:** Secure sign-in and sign-up using Firebase.
- **Secure Payments:** Integrated Stripe for secure payment processing.
- **Responsive Design:** Mobile-friendly design to provide a great user experience on all devices.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the Repository:**

   git clone https://github.com/yourusername/monksquare.git
   cd monksquare

Install Dependencies:


npm install

Firebase Setup:

Create a Firebase project here.
Add your project configuration to your JavaScript file:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

Stripe Setup:

Create a Stripe account here.

Add your Stripe public key to your JavaScript file:

const stripe = Stripe('YOUR_PUBLIC_KEY');

Running the Project

Start the development server:


npm run dev
Your app will be available at http://localhost:3000.


## Usage

1. **Navigate to the main page**:

    Open your browser and go to `http://localhost:3000` (or the URL provided by your development server).

2. **Sign In or Sign Up**:

    Click on the `SIGN IN` or `SIGN UP` links to create an account or log in.

3. **Browse Products**:

    Explore the available products and add them to your cart.

4. **Add to Cart**:

    Click on the `Add to Cart` button for any product you wish to purchase. If you are not logged in, you will be redirected to the sign-in page.

5. **Checkout**:

    Proceed to the checkout page and complete the payment process using Stripe.

## Contributing

We welcome contributions to enhance MonkSquare! To contribute, please follow these steps:

1. **Fork the repository**:

    Click the `Fork` button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Clone your fork**:

    ```sh
    git clone https://github.com/your-username/monksquare.git
    ```

3. **Create a branch for your feature or bug fix**:

    ```sh
    git checkout -b feature/your-feature-name
    ```

4. **Make your changes**:

    Implement your feature or fix the bug.

5. **Commit your changes**:

    ```sh
    git commit -m "Description of your changes"
    ```

6. **Push to your branch**:

    ```sh
    git push origin feature/your-feature-name
    ```

7. **Open a Pull Request**:

    Go to the original repository on GitHub and create a pull request from your forked repository.
    Harsh Singh
