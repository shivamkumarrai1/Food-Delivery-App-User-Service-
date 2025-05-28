# User Service - Food Delivery App

This is the **User Service** for the Food Delivery App project. It allows user registration and manages user data.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

## Environment Variables

Create a `.env` file in the root directory with:

```env
DATABASE_URL=your_postgresql_database_url
PORT=3001

Available Endpoints

POST /users
Registers a new user--

Body:
json
{
  "name": "user",
  "email": "user@example.com"
}

GET /healthy
Health check endpoint.

Running Locally

Install dependencies:
npm install

Generate Prisma client:
npx prisma generate

Run the development server:

npm run dev
Deployment
Deployed on Render / Railway
Make sure your .env file is set before pushing.