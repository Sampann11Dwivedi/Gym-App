# GymPro

GymPro is a fitness management application designed to help users track their progress, book classes, and achieve their fitness goals. Built with Laravel, React, and Inertia.js, it provides a seamless and interactive user experience.

## Features

- **User Authentication**: Register and log in securely.
- **Dashboard**: View and manage fitness data.
- **Responsive Design**: Optimized for all devices.
- **Video Backgrounds**: Engaging visuals on landing and authentication pages.
- **Height and Weight Tracking**: Input and manage fitness metrics.

## Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React 19, Inertia.js
- **Styling**: TailwindCSS
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/GymPro.git
   cd GymPro

2. Install dependencies:
    composer install
    npm install

3. Set up the environment:
    cp .env.example .env
    php artisan key:generate

4. Configure the database in the .env file:
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=gym
    DB_USERNAME=root
    DB_PASSWORD=your_password

5. Run migrations and seeders:
    php artisan migrate --seed

6. Start the development server:
    npm run dev
    php artisan serve
        or
    composer run dev


Usage
Visit the application at http://localhost:8000.
Register or log in to access the dashboard.
Explore features like height and weight tracking.
Testing
Run unit and feature tests using PHPUnit:

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License. ```