> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Fresk Digital Statistics Dashboard
 
## Login Pagina
![image](https://github.com/TygoWolven/Sprint12-Proof-of-Concept/assets/144010858/d63344d1-4a81-4e2d-b372-e461b131e5e6)

## Home Pagina
![image](https://github.com/TygoWolven/Sprint12-Proof-of-Concept/assets/144010858/efe533a5-1c43-43ad-8eff-cccd9b458f36)

## Geen Data Pagina
![image](https://github.com/TygoWolven/Sprint12-Proof-of-Concept/assets/144010858/b2a6adee-9dee-44f8-b4ea-ae7ac55b6cdc)

## Inhoudsopgave

  * [Over het project](#over-het-project)
  * [Tools](#tools)
  * [Installatie](#installatie)
  * [Licentie](#licentie)

## Over het project
Voor deze opdracht hebben we van _Fresk Digital_ de missie gekregen om een dashboard te maken waarin statistieken te vinden zijn uit de ``API's`` van _Google, Hotjar en Linkedin_. Deze statistieken gaan over de officiele website van _Fresk_ zelf. Dit dashboard zal alleen gebruikt worden door de _medewerkers_.

## Tools
Binnen dit project is er gebruik gemaakt van de volgende code-talen:
- HTML 
- CSS
- JS 
- EJS
- NodeJS 
- Express

## Installatie
Om dit project over te nemen moet je de volgende stappen nemen:

> Clone deze repository naar je editor.

> Open de Terminal en voor de volgende ``commands`` uit.

````EJS
npm install
````

> Voeg in de ``server.js`` de volgende regel toe om de Google API te linken.

````EJS
import {BetaAnalyticsDataClient} from '@google-analytics/data';
````

> Vraag toegang voor het ``.env`` bestand en de ``js.credentials``.

> Voeg deze bestanden toe aan de repository, en pas vervolgens in de ``package.json`` het volgende aan.

````EJS
  "scripts": {
    "start": "node --env-file=.env server.js"
  },
````

Nu zou alles gesetteld moeten zijn en kun je de server starten met de volgende command.

````EJS
npm start
````

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
