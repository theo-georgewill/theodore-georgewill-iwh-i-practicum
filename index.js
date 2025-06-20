require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.path}`);
  next();
});

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS; 
const CUSTOM_OBJECT_TYPE = process.env.CUSTOM_OBJECT_TYPE;

// ✅ ROUTE 1: Homepage - List custom object records
app.get('/', async (req, res) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=name,bio,role`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.get(url, { headers });
        const records = response.data.results;
        res.render('homepage', { title: 'Game Characters', records });
    } catch (error) {
        console.error(error?.response?.data || error.message);
        res.send('Error fetching data.');
    }
});

// ✅ ROUTE 2: Form to add new custom object
app.get('/update-cobj', (req, res) => {
    res.render('updates', { title: 'Update Custom Object Form | HubSpot I Practicum' });
});

// ✅ ROUTE 3: Create new record via form
app.post('/update-cobj', async (req, res) => {
    const { name, bio, role } = req.body;

    const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=name,bio,role`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    const data = {
        properties: {
            name,
            bio,
            role
        }
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('Successfully created object:', response.data);
        res.redirect('/');
        

    } catch (error) {
        console.error('Error creating record:', error?.response?.data || error.message);
        res.send('Error creating record.');
    }
});


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
