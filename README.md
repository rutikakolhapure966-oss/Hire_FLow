# HireFlow - Applicant Tracking System

A modern, responsive Applicant Tracking System built with React (Vite), Tailwind CSS, Django REST Framework, MySQL, JWT Authentication, and Axios.

## Features

### Candidate Features
- User Registration & Login
- View/Edit Profile
- Browse & Search Jobs
- Apply for Jobs
- Track Application Status
- Download Resume

### Recruiter Features
- Create Company Profile
- Post, Edit & Delete Job Listings
- View Applicants
- Update Application Status
- Manage Job Postings

### Admin Features
- Manage Users
- Manage Job Postings
- View System Statistics

## Tech Stack

**Frontend:**
- React 18+ with Vite
- Tailwind CSS for styling
- Axios for HTTP requests
- JWT for authentication

**Backend:**
- Django REST Framework
- MySQL Database
- JWT Authentication
- Django CORS

## Project Structure

```
Hire_FLow/
├── frontend/              # React + Vite application
├── backend/               # Django REST Framework API
├── docs/                  # Documentation
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- Python 3.9+
- MySQL 8.0+

### Installation

**Backend Setup:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

## API Documentation

See `/docs/API.md` for complete API endpoints documentation.

## Folder Structure

### Frontend Structure
```
frontend/
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── hooks/            # Custom hooks
│   ├── context/          # Context API
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

### Backend Structure
```
backend/
├── manage.py
├── requirements.txt
├── config/               # Django settings
├── apps/
│   ├── users/           # User management
│   ├── jobs/            # Job listings
│   ├── applications/    # Job applications
│   └── companies/       # Company profiles
└── static/
```

## Development

- Follow the RESTful API design patterns
- Use meaningful commit messages
- Implement proper error handling
- Add loading states and validations
- Ensure responsive design

## License

MIT License

## Author

HireFlow Team
