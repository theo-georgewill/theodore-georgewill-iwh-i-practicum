# HubSpot IWH Practicum – CRM Integration Project 🚀

This repository contains my completed project for the **Integrating With HubSpot I: Foundations** course on HubSpot Academy.

It is one of two requirements for earning the **Integrating With HubSpot I: Foundations certification**, alongside passing the official exam (≥ 75%).

> ✅ [Course Practicum Instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en)

---

## 🔗 HubSpot Developer Test Account

Here is the link to my **custom object** view in my HubSpot developer test account:

➡️ [View Custom Object in HubSpot](https://app.hubspot.com/contacts/146338661/objects/144023838/views/all/list)

---

## ✨ Project Overview

This project demonstrates how to integrate a Node.js/Express web app with the **HubSpot CRM API** using OAuth 2.0 authentication. It includes:

- HubSpot OAuth2 flow
- Custom object creation and updating
- Express routes and Pug templates
- API calls using Axios
- A simple frontend rendered via Pug

This implementation fulfills the practicum requirements and serves as a live example of HubSpot API integration best practices.

---

## 🧠 Features Implemented

- ✅ OAuth2 authorization flow with HubSpot
- ✅ 2+ Express routes: homepage, create, update
- ✅ 1+ Pug templates for rendering views
- ✅ Custom object records fetched and displayed
- ✅ Secure `.env` config (no secrets pushed to GitHub)

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Server framework
- **Pug** – Templating engine for HTML rendering
- **Axios** – API calls to HubSpot CRM
- **Dotenv** – Manage environment variables
- **Git & GitHub** – Version control and collaboration

---

## ⚙️ Getting Started Locally

Clone this repository and set up your environment:

```bash
git clone https://github.com/theo-georgewill/hubspot-iwh-practicum.git
cd hubspot-iwh-practicum
npm install
Create a .env file in the root directory with the following variables:

ini
Copy
Edit
HUBSPOT_CLIENT_ID=yourClientId
HUBSPOT_CLIENT_SECRET=yourClientSecret
HUBSPOT_REDIRECT_URI=http://localhost:3000/oauth/callback
Start the app:

bash
Copy
Edit
npm start
Then open your browser and visit:
http://localhost:3000/