URL Shortener
A simple URL shortener built with Express.js. This project provides API endpoints to shorten URLs, redirect to the original URL using the shortened version, and view analytics for URL visits. It does not have any view files and can be tested using tools like Postman.

Features
Shorten URL: Provide a long URL and get a shortened version.
Redirect to Original URL: Use the shortened URL to redirect to the original one.
Analytics: View the visit count and history for shortened URLs.
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd url-shortner
Install dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
Usage
Endpoints
1. Shorten URL
POST /shorten
Request Body (JSON):

json
Copy code
{
  "url": "https://example.com"
}
Response (JSON):

json
Copy code
{
  "shortenedUrl": "http://<your-server>/short/abc123"
}
2. Redirect to Original URL
GET /short/:shortCode

Replace :shortCode with the code received from the /shorten endpoint.
This will redirect to the original URL.
3. Analytics
GET /analytics

Response includes visit count and history of shortened URLs.
Example Usage with Postman
Import the endpoints into Postman.
Use the POST endpoint to shorten URLs.
Use the GET endpoint for redirection or to view analytics.
Project Details
Framework: Express.js
No frontend files (pure backend API).
Steps to Run
Download the project.
Install dependencies using npm install.
Start the server with npm start.
Happy Coding! 🚀
Feel free to modify this as needed!
