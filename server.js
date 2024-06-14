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

// New 13-06
const site = await fetchJson('https://fdnd-agency.directus.app/items/frd_site')
const allScans = await fetchJson('https://fdnd-agency.directus.app/items/frd_scans')
const nieuwekijkScans = await fetchJson('https://fdnd-agency.directus.app/items/frd_site?filter[scans][_eq]=11&fields=id,title,scans.*')

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
        site: site.data, allScans: allScans.data, nieuwekijkScans: nieuwekijkScans.data
    })
})

// overgenomen :
// Route voor detailpagina van een specifieke site
app.get('/site/:id', async function (request, response) {
    response.render('detail', {
      site: site.data, allScans: allScans.data, nieuwekijkScans: nieuwekijkScans.data 
    })
})


// 🚧 POST > AANMAKEN ALS DIE ER MOET KOMEN



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})