🧑‍🍳 User Service
This service handles user registration, viewing online restaurants, placing orders, and submitting ratings for orders and delivery agents.

📦 Tech Stack
Node.js with Express.js

-TypeScript

-Prisma ORM

-PostgreSQL

## How to Run Locally
Clone the repository

git clone <your-repo-url>
cd user-service
Install dependencies

npm install
Set up the database

Create a .env file in the root with the following:

DATABASE_URL=your_postgres_connection_string
Generate Prisma Client

npx prisma generate
Run database migrations

npx prisma migrate dev --name init
Start the server

npm run dev
📁 Project Structure
pgsql
Copy
Edit
user-service/
│
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
## API Endpoints
All routes are prefixed with /users

# Health Check
GET /healthy

Returns: "User Service is healthy"

# Register a New User
POST /users

{
  "name": "Alice",
  "email": "alice@example.com"
}

Returns:
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
🍽️ Get Online Restaurants
GET /users/restaurants/online?hour=14

# Place an Order

POST /users/orders

{
  "userId": 1,
  "restaurantId": 1,
  "items": ["Margherita", "Garlic Bread"],
  "totalPrice": 450
}

Returns:

{
  "id": 12,
  "status": "pending",
  "deliveryAgentId": 5
}

# Submit a Rating
POST /users/ratings

{
  "userId": 1,
  "orderId": 12,
  "deliveryAgentId": 5,
  "rating": 4.5,
  "comment": "Great service!"
}

Returns:

{
  "id": 7,
  "rating": 4.5,
  "comment": "Great service!"
}

## Notes
Ensure the User, Order, and DeliveryAgent records exist before placing an order or submitting a rating.

For testing, use the User Service Postman Collection.
