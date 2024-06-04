console.log('Hier komt je server voor Sprint 12.')

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'



// Maak een nieuwe express app aan
const app = express()
const baseUrl = 'https://fdnd-agency.directus.app/'
const apiUrl = 'https://fdnd-agency.directus.app/items/frd_site'

// Endpoints 
const sitesAPI = await fetchJson('https://fdnd-agency.directus.app/items//frd_site')

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


// 🗺️ ROUTES > AANMAKEN VOOR DE ACCESDASH

// Homepage site kiezen
app.get('/', function(request, response) {
    response.render('index', {
        sites: sitesAPI.data
    })
	// fetchJson('https://fdnd-agency.directus.app/items/frd_site').then((servicesDataUitDeAPI) => {
	// 	response.render('homepage', {
	// 		services: servicesDataUitDeAPI.data,
	// 		likes: likes
	// 	})
	// });
})

// Detail pagina site
app.get('/detail', function(request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/frd_scans').then((scansDataUitDeAPI) => {
        response.render('detail', {
            scans: scansDataUitDeAPI.data
        })
    });
})



// 🚧 POST > AANMAKEN ALS DIE ER MOET KOMEN



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})