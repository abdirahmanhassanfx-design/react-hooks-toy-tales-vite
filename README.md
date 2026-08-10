# Toy Tales

A React CRUD application that lets Andy manage his toy collection. The frontend connects to a `json-server` REST API to perform full Create, Read, Update, and Delete operations.

## Features

- View all toys on page load
- Add a new toy via a form
- Like a toy to increase its like count
- Donate (delete) a toy to remove it from the collection

## Tech Stack

- React (with Hooks: `useState`, `useEffect`)
- Vite
- json-server (mock REST API)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the backend (json-server) on `http://localhost:3001`:

```bash
npm run server
```

3. In a separate terminal, start the React dev server on `http://localhost:5173`:

```bash
npm run dev
```

4. Optionally, run the test suite:

```bash
npm run test
```

## Component Structure

```
App
├── Header
├── ToyForm        (POST /toys)
└── ToyContainer
    └── ToyCard[]  (PATCH /toys/:id, DELETE /toys/:id)
```

- `App` — owns `toys` state; fetches on mount (GET); passes data and callbacks down
- `ToyForm` — controlled form; POSTs new toy; calls `onAddToy` to update state
- `ToyContainer` — maps `toys` array to `ToyCard` components
- `ToyCard` — displays toy details; handles like (PATCH) and donate (DELETE)

## API Endpoints

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| GET    | /toys         | Fetch all toys       |
| POST   | /toys         | Create a new toy     |
| PATCH  | /toys/:id     | Update toy likes     |
| DELETE | /toys/:id     | Delete a toy         |
