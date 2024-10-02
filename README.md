Assignment: Signup, Signin, and Orders Flow
Project Overview: This project implements the signup, signin, and orders page flow using React and integrates the provided API endpoints (/v1/rest-auth/register, /v1/rest-auth/login, and /v1/orders/all-orders).

Main Features:

Signup Flow: Allows users (either customers or restaurants) to register with the API.
Signin Flow: Allows users to log in using their username and password.
Orders Page: Displays all orders filtered by status and payment type (cash or not), highlighting the status, order_version, and cash payment details.
API Routes:

Signup (POST): /v1/rest-auth/register
Signin (POST): /v1/rest-auth/login
Fetch Orders (POST): /v1/orders/all-orders
