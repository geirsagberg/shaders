# Shader-Workshop

## Kjøring av prosjektet

1. Kjør `npm install`
2. Kjør `npm start`
3. Naviger til URL-en som dukker opp i konsollen

## Oppgaver

Oppgavene under er forslag til ting som kan være gøy å prøve seg på, og kan løses i valgfri rekkefølge. De er i utgangspunktet sortert slik at de blir vanskeligere og vanskeligere.

Oppgave 1, 2 og 3 innebærer i utgangspunktet kun fragment shaders, og det skal ikke være nødvendig å redigere vertex shaderen for å løse disse. Oppgave 4, 5 og 6 introduserer 3D, og det blir nødvendig å gjøre endringer i vertex shaderen. Oppgave 5 og 6 antar at du allerede har løst oppgave 4, men vil du hoppe rett til disse er det lov å ta utgangspunkt i løsningsforslaget til oppgave 4.

For flere av oppgavene kan det være nyttig å ta en titt på eksemplene på [https://thebookofshaders.com/10/](https://thebookofshaders.com/).

### 1. Tilfeldig støy 📣
Vi begynner enkelt: Vis tilfeldig støy på skjermen kun ved hjelp av en fragment shader!

> **Tips:** GLSL har en innebygd funksjon `noise(x)` 🤫

### 2. Tegn en firkant ⬜

Kun støy blir litt kjedelig i lengden – prøv å i stedet tegne en firkant! Farge velger du selv ☺️

### 3. Tegn en sirkel ⚪

Firkanter er heller ikke så veldig spennende. Hva med å tegne en sirkel i stede?

> **Tips:** Likningen for en sirkel er (x - x<sub>1</sub>)<sup>2</sup> + (y - y<sub>1</sub>)<sup>2</sup> = r<sup>2</sup>, hvor (x<sub>1</sub>, y<sub>1</sub>) er sentrum, r er radius, og (x, y) er et punkt på sirkelen.

### 4. På tide med litt 3D 🧊
Vi kan jo ikke holde oss til å bare tegne enkle todimensjonale former! La oss i stedet prøve oss på litt ordentlig 3D 😎

Scenen i koden inneholder allerede en kube. Faktisk har shaderene vi har skrevet til nå blitt kjørt for denne kuben! Problemet er at vertex shaderen vår ikke håndterer 3D-projeksjon, og derfor har vi kun fått et 2D-bilde. Dette skal vi gjøre noe med nå!

> **Tips:** Projeksjon i vertex shaderen er egentlig bare en nokså enkel matrisemultiplikasjon med en `projectionMatrix`, en `modelViewMatrix` og posisjonen til vertexen vi behandler – og de to matrisene finnes allerede som variabler i vertex shaderen!
