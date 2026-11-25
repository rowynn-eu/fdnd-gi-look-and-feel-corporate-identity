# Gemeenteniconen.nl Redesign - Corporate Identity

<img width="49%" height="auto" alt="2026-11-25 09 21 09 127 0 0 1 de3df3456ed9" src="https://github.com/user-attachments/assets/72e2e76b-ee46-43ba-aa66-ca567e8f6029" />
<img width="49%" height="auto" alt="2026-11-25 09 21 04 127 0 0 1 f67c622a7b9f" src="https://github.com/user-attachments/assets/43dc7f90-293a-4001-a665-530b0c1f19cb" />

Ontwerp en maak voor een opdrachtgever een website op basis van een gedeelde huisstijl stylesheet.

--- 
Huidige versie: https://rowynn-eu.github.io/fdnd-gi-look-and-feel-corporate-identity/  
2de versie:     https://rowynn-eu.github.io/fdnd-gi-all-human-accessible-website/  
1ste versie:    https://rowynn-eu.github.io/fdnd-gi-client-website/  

## Inhoudsopgave

  * [Beschrijving](#beschrijving) 
  * [Gebruik](#gebruik) 
  * [Kenmerken](#kenmerken) 
  * [Bronnen](#bronnen) 
  * [Licentie](#licentie) 

## Beschrijving
Voor OpenGemeenten heb ik een nieuwe ontwerp gemaakt met een [gedeelde stylesheet](https://github.com/rowynn-eu/fdnd-gi-look-and-feel-styleguide), samen gemaakt met [Melissa](https://github.com/melis5016), [Sami](https://github.com/Samielb), [Celeste](https://github.com/celeste0012).

De bedoeling was dat wij als team, een ontwerp kunnen maken dat past binnen een huisstijl.

Verder zijn er ook aandacht punten gebracht aan wettelijke eisen, zoals een privacy pagina en een 404 pagina.


## Gebruik
De website is bedoeld voor ontwikkelaars, ontwerpers, en mensen die verantwoordelijk zijn voor overheidscommunicatie. Op de website kan je **open** en **rechtenvrije** iconen vinden, vergelijken en downloaden. Als secundaire functie kan je ook illustraties vinden die de gebruiker kan stijlen naar hun eigen huisstijl. 


## Kenmerken
De website is gebouwd met [HTML](#HTML), [CSS](#CSS) en [JavaScript](#JavaScript), en bestaat uit acht pagina's. De inhoud van de website is vergelijkbaar met die van de opdrachtgever, alleen wat netter opgeschreven en met werkende functies die vermeld zijn in hun [feature-wishlist](https://github.com/fdnd-agency/gemeenteniconen.nl/wiki/Design-Challenge#feature-wishlist).

### HTML

#### 404 Pagina
<img width="1824" height="1892" alt="2026-11-25 09 45 19 127 0 0 1 a827f4ec4af2" src="https://github.com/user-attachments/assets/3b21e232-aeca-49d2-a1d7-f38fa1763b6a" />

#### Privacy Verklaring Pagina~
<img width="1824" height="5418" alt="2026-11-25 09 43 10 127 0 0 1 fa509db1e678" src="https://github.com/user-attachments/assets/30515d85-70be-4e3d-83d9-a8c80f2c750e" />



### CSS
#### Filters
Filters zijn werkend alleen met HTML en CSS. Dit is gedaan door `:has`, `:checked`, en `:not()`, ontdekt tijdens een code review van het werk van [Celeste en Sanne](https://github.com/celeste0012/look-and-feel-corporate-identity). Dit is eigenlijk een vies trucje, omdat je beter met een database en een JS function het beter kan verwerken. 

https://github.com/user-attachments/assets/b568ee08-9c40-4953-b7b4-bb6c94ac6755

Verder worden de filters ook verborgen op mobiel onder een knop, zodat de gebruiker met 1 klik alle controls kan zien en ook verbergen.

https://github.com/user-attachments/assets/10850445-f6ae-4c0a-972b-9a05bfe69f79



### JavaScript


## Bronnen

- [calc-size()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/calc-size)
- [:is()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:is)
- [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has)
- [:not()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:not)
  [:checked()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:checked)
- [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports)
- [mask](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask)

## Licentie

De instructie vind je in: [WIKI](https://github.com/fdnd-task/look-and-feel-corporate-identity/wiki)

## Definition of done

Deze opdracht is done als:

- [x] Je hebt met een team een styleguide ontworpen en een gedeelde stylesheet gemaakt
- [x] Je maakt gebruik van de gedeelde stylesheet, de CSS cascade, specificity en custom properties
- [x] Je hebt aantoonbaar gebruik gemaakt van Gestalt principes voor de layout en compositie
- [x] Je hebt een formulier met verschillende formulier elementen ontworpen en gemaakt
- [ ] Je hebt gestructureerd en iteratief aan de hand van issues de feedback van de opdrachtgever verwerkt en deze getest voor eindgebruikers
- [ ] Jouw website voldoet aan de huisstijl van de opdrachtgever

This project is licensed under the terms of the [MIT license](./LICENSE).
