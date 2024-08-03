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
- **Backend:** NodeJs, Express
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
To get a local copy of this project up and running, follow these steps:

1. **Clone the Repository**:
    - Open your terminal.
    - Run the following command to clone the repository to your local machine:

    ```sh
    git clone https://github.com/username/monksquare.git
    ```

2. **Navigate to the Project Directory**:
    - Change to the project directory with the following command:

    ```sh
    cd monksquare
    ```

3. **Install Dependencies**:
    - Ensure you have Node.js and npm installed on your machine.
    - Run the following command to install the project dependencies:

    ```sh
    npm install
    ```

4. **Start the Development Server**:
    - Use the following command to start the development server with Vite:

    ```sh
    npm run dev
    ```

5. **Open the Project in Your Browser**:
    - Once the development server is running, open your browser and go to:

    ```
    http://localhost:5173
    ```

    (The URL might vary depending on the configuration provided by Vite. Check your terminal for the exact URL.)
## Usage

1. **Navigate to the main page**:

    Open your browser and go to `http://localhost:5173` (or the URL provided by your development server).

2. **Sign In or Sign Up**:

    Click on the `SIGN IN` or `SIGN UP` links to create an account or log in.

3. **Browse Products**:

    Explore the available products and add them to your cart.

4. **Add to Cart**:

    Click on the `Add to Cart` button for any product you wish to purchase. If you are not logged in, you will be redirected to the sign-in page.

5. **Checkout**:

    Proceed to the checkout page and complete the payment process using Stripe.
    For the backend created a server.js file that creates a checkout session .
    ```sh
    npm install express stripe dotenv ejs
    ```
    Install nodemon for better use .

    To run the backend server:
    ```sh
    node server.js
    ```


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
    
