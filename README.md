# Capstone: Restaurant Reservation System
This is an application that demonstrates the ability to keep track of customer reservations and stores the information in a database. It was developed with HTML, CSS, JavaScript, React, PostgreSQL, Express, and Knex.

## Screenshots
### Dashboard
[![dashboard2.png](https://i.postimg.cc/VNfv2qRz/dashboard2.png)](https://postimg.cc/zyQqgR6Q)

### Search
#### The search allows a user to find a matching customer using their provided phone number.
[![search.png](https://i.postimg.cc/pXBBwHb8/search.png)](https://postimg.cc/WhhrZx4b)

### New Reservation
#### This form allows a user to place a reservation for a specified date and time.
[![reservation.png](https://i.postimg.cc/3xXH5Wr1/reservation.png)](https://postimg.cc/FYH60rLk)

### New Table
#### This form allows a user to create a table that can be used to show all available seating.
[![newTable.png](https://i.postimg.cc/NFRws07Q/newTable.png)](https://postimg.cc/XBNPx4zP)

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
