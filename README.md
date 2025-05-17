 # Sitaare MERN-stack Application

## Overview

Sitaare is a MERN-stack full-stack web application designed to provide a platform to fill small amounts of bored time in your day with something interesting. It features beneficiary profiles, a donation flow integrated with Stripe, a Dialogflow chatbot, animations, and responsive design.

This document provides a complete roadmap to set up, run, and deploy the application.

---

## Project Structure

sitaare-mern/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ └── package.json
├── README.md
└── package-lock.json

yaml
Copy
Edit

---

## Roadmap: How to Run the Project

### Step 1: Set Up the Project Structure

1. **Create the Monorepo:**
mkdir sitaare-mern && cd sitaare-mern
git init
Create backend and frontend folders:

bash
Copy
Edit
mkdir backend frontend
Initialize Git repository (if not done yet):

bash
Copy
Edit
git init
Create a README.md in the root directory (this file).

Step 2: Backend Setup
Navigate to backend directory:

bash
Copy
Edit
cd backend
Initialize Node.js and install dependencies:

bash
Copy
Edit
npm init -y
npm install express mongoose dotenv cors stripe
Create folder structure and files:

bash
Copy
Edit
backend/
├── .env
├── server.js
├── models/
│   └── Beneficiary.js
├── routes/
│   ├── profiles.js
│   └── donations.js
└── controllers/
    ├── profilesController.js
    └── donationsController.js
Set up environment variables in .env file:

MONGO_URI=your_mongo_connection_string
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
Implement backend logic
(Use your models, routes, controllers, and server.js as per the roadmap.)

Step 3: Frontend Setup
Navigate to frontend directory:

bash
Copy
Edit
cd ../frontend
Initialize React app and install dependencies:

bash
Copy
Edit
npx create-react-app .
npm install tailwindcss framer-motion react-router-dom
Configure Tailwind CSS
(Follow official Tailwind CSS installation guide)

Setup React routing in src/App.jsx
Add routes for Home, Donate, and Profile pages.

Create pages:

src/pages/Home.jsx — fetch and display profiles

src/pages/Donate.jsx — implement Stripe payment flow

src/pages/Profile.jsx — display individual profiles

Step 4: Additional Features & Polish
Use Framer Motion for animations on pages and profile cards.

Use Lottie to show thank-you animations after donations.

Embed Dialogflow chatbot by adding the script to public/index.html before </body>.

Use Tailwind CSS responsive classes to make the site mobile-friendly.

Step 5: Security, Deployment & Final Touches
(Optional) Add JWT authentication for protected routes.

Validate inputs with express-validator.

Add security middleware such as cors and helmet in backend.

Deploy Backend: AWS Elastic Beanstalk / Heroku with proper environment variables.

Deploy Frontend: Build with npm run build and deploy on AWS S3 + CloudFront, Vercel, or Netlify.

Running the Project Locally
1. Start Backend
Ensure MongoDB is running locally or connect to MongoDB Atlas.

Create .env with:

ini
Copy
Edit
MONGO_URI=your_mongo_connection_string
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Start backend server:

bash
Copy
Edit
npm start
Server will run at http://localhost:5000.

2. Start Frontend
Install frontend dependencies (if not done):

bash
Copy
Edit
cd ../frontend
npm install
Start React development server:

bash
Copy
Edit
npm start
Frontend runs at http://localhost:3000.

Make sure frontend API calls point to http://localhost:5000 or your backend URL.

3. Test the Application
Open http://localhost:3000 in your browser.

Homepage shows beneficiary profiles fetched from backend.

Test donation flow: click Donate, complete Stripe payment, and verify thank-you animation.

Test profile page for individual beneficiary details.

Test Dialogflow chatbot on the frontend.

4. Deployment (Optional)
Backend: Deploy to AWS Elastic Beanstalk, Heroku, or similar.

Frontend: Build React app (npm run build) and deploy to AWS S3 + CloudFront, Vercel, or Netlify.

Troubleshooting
Check NGINX logs (/var/log/nginx/error.log) if using NGINX to serve frontend.

Confirm environment variables are correctly set in deployment platforms.

Ensure backend is accessible from frontend (CORS setup).

Check browser console for errors during development.
 Dialogflow Chatbot Integration
The Sitaare web application integrates a Dialogflow-powered chatbot to enhance user interaction. It provides quick answers to common user queries related to donations, beneficiaries, support, and volunteering.

💬 Supported Chatbot Commands (Exact Sample Inputs)
You can train your Dialogflow intents to respond to the following queries:

Intent Name	Sample User Inputs	Bot Response (Suggested)
Donation_Page_Intent	"How can I donate?"
"Where is the donation page?"	"You can donate by visiting our Donate page. Just click on the 'Donate' button in the menu or go to /donate."
About_Beneficiaries_Intent	"Who are the girls?"
"Who do you support?"	"We support underprivileged girls by connecting them to opportunities and resources. You can view their profiles on the homepage."
Location_Intent	"Where is Sitaare located?"
"Which country are you in?"	"Sitaare is based in India, but we welcome global support!"
Contact_Intent	"How do I contact you?"
"Is there a support number?"	"You can reach out via our contact form or email us at support@sitaare.org."
Volunteer_Intent	"Can I volunteer?"
"I want to help personally"	"We appreciate your willingness to help! Please fill our volunteer form or contact us for more details."

Contact
For any issues, please contact [Shreeyash Jagtap / shreeyashjagtap07@gmail.com].


Thank you for checking out Sitaare MERN-stack project!
