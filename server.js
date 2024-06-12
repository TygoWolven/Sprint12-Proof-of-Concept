console.log('Hier komt je server voor Sprint 12.')

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Imports the Google Analytics Data API client library.
import {BetaAnalyticsDataClient} from '@google-analytics/data';

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Maak een GET-Route voor de homepagina 
app.get('/', function(request, response) {
	response.render('login')
})

app.get('/home', function(request, response) {
	response.render('home')
})

app.get('/about', function(request, response) {
	response.render('about')
})

app.get('/google', async function(request, response) {
	let propertyId = '301922918';

	// Using a default constructor instructs the client to use the credentials
	// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
	const analyticsDataClient = new BetaAnalyticsDataClient();

	// Runs a simple report.
	const [res] = await analyticsDataClient.runReport({
		property: `properties/${propertyId}`,
		dateRanges: [
		{
			startDate: '2024-06-01',
			endDate: 'today',
		},
		],
		dimensions: [
		{
			name: 'country',
		},
		],
		metrics: [
		{
			name: 'activeUsers',
		},
		],
	});
	response.render('google', {
		rows: res.rows,
	})
})

app.get('/linkedin', function(request, response) {
	response.render('linkedin')
})

app.get('/hotjar', function(request, response) {
	response.render('hotjar')
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})