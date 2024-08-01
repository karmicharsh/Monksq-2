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

Usage:
Browse Products: Navigate through the product pages to view our items.
Create an Account: Sign up or log in using Firebase authentication.
Make a Purchase: Add items to your cart and proceed to checkout using Stripe for secure payments.

We welcome contributions to improve our project! If you would like to contribute, please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

License:

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for visiting MonkSquare! Follow us on Instagram for the latest updates.