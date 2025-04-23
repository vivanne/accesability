# Annotatie systeem Roger / accesability

## 🗓️ Procesoverzicht

### 🔧 Week 1 – Verkenning & eerste opzet

**To do:**

- [x] Eerste meeting + notities doornemen
- [x] Eerste opzet html
- [x] Idee vormen / to do lijst week 2 maken

**Gebruiker getest?**

- [x] Ja, het was een algemeen gesprek waar we informatie uit konden halen
- [ ] Nee

**Aantekeningen n.a.v. meeting:**

Roger interview 1

- Wie is roger?
- 58 jaar,
- 2- glas
- Juvenile vorm -> erfelijke aandoening

- Lichthinder

Algemeen gebruik van digitale boeken

1. Kun je beschrijven hoe je momenteel digitale boeken leest? Welke software of apparaten gebruik je?

App op telefoon: Passend lezen

2. Wat zijn de grootste uitdagingen die je ervaart bij het lezen van digitale boeken?

3. Gebruik je momenteel specifieke tools, zoals een screen reader? Zo ja, welke en hoe bevallen ze?

Supernova, windows -> voice over goed!

Annoteren en navigeren

5. Hoe maak je nu aantekeningen in digitale boeken? Welke methoden of hulpmiddelen gebruik je?

6. Wat zou voor jou de ideale manier zijn om annotaties te maken? Denk aan spraak, tekst, sneltoetsen, of iets anders.

- Spraak naar tekst was moeilijk.
- Actief bezig zijn met de aantekeningen zorgt voor het onthouden van stof -> denk aan schrijven in schriften
- Andere manier van actief onthouden?
- De tekst natypen????

8. Wat zou voor jou een intuïtieve manier zijn om aantekeningen terug te vinden?

Ervaringen met screen readers

9. Hoe goed werken screen readers voor jou bij het lezen van boeken? Zijn er bepaalde frustraties?

10. Heb je voorkeuren voor de manier waarop informatie wordt voorgelezen? Bijvoorbeeld tempo, stem, of intonatie?

Moet aanpasbaar zijn, iedereen heeft andere snelheid. Lettergroottes en diktes moeten aanpasbaar zijn.

12. Wat zou een screen reader beter kunnen doen om jouw leeservaring te verbeteren?

**Ideeën n.a.v. meeting:**

Inline Notities

- Gebruiker selecteert tekst (via toetsenbord of screenreader commando’s).
- Een toetscombinatie of contextmenu opent een invoerveld.
- Gebruiker kan tekst invoeren en opslaan.
- Audio-feedback bevestigt dat de notitie is opgeslagen.

Toetsenbordvriendelijk

- Sneltoetsen zoals Ctrl + N om een nieuwe notitie toe te voegen.
- Gebruik ARIA-attributen om de actie duidelijk te maken.

Visuele & Auditieve Feedback

- Screenreader leest “Notitie toegevoegd bij [tekst]” voor.
- Notities krijgen een subtiele markering die screenreaders kunnen detecteren.
- GEBRUIK GEEL OP ZWART

**Feedbackgesprek week 1:**

Ik had nog wat moeite met het echt vormen van een idee. Waar moest ik beginnen. Dis is na het feedback gesprek iets duidelijker geworden. Blijkt dat het ook "gefaked" mag worden met een screenreader. Zo zit ik veel minder vast aan de screenreader van apple. Volgende week ga ik beginnen met het markeren van zinnen

**_ Aanwezig? _**

- [x] Ja
- [ ] Nee
  <!-- Wat ging goed, wat kan beter, wat heb je geleerd? -->
  ...

---

### 🧪 Week 2 – Eerste functies & testmoment

**To do:**

- [x] Kleurmarkering implementeren
- [x] Toetscombinaties bedenken en toevoegen
- [x] Js, tabben per zin
- [x] stijl menu bijvoegen
- [x] to do lijst volgende week na meeting

**Gebruiker getest?**

- [x] Ja
- [ ] Nee

**Feedback Roger:**

Het tabben per zin was een succes. Het voelde natuurlijk aan om te markeren per zin (net als vroeger in een schrift met een stabilo).

![Screenshot zinmarkering](/Scherm­afbeelding%202025-04-23%20om%2015.51.32.png)

Verder zou hij wel misschien meerdere kleuren willen gebruiken, en dus een aanpasbare markering hebben. Ook vind hij het fijn om wel een menu te hebben waar je fontsize, weight, lineheight en body margin aan kan passen. 🔴 **Hij benoemde ook dat vooral de leessnelheid heel belangrijk is om aan te passen. De meeste screenreaders gaan van nature wat langzaam, en het sneller kunnen zetten versneld zijn leesproces.** 🔴 Ik moet nog even kijken of het mij lukt om dit te implementeren ivm tijd en gezien ik niet ga werken met een custom google screenreader, maar gewoon die van apple. Font size etc moet zeker wel kunnen lukken. Hiermee ga ik deze week nog aan de slag.

![Screenshot zinmarkering](/Scherm­afbeelding%202025-04-23%20om%2016.04.02.png)

Ook moet ik verder werken aan de inhoudsopgave. Roger vroeg zich af hoe hij makkelijk kon navigeren. Dit had ik nog niet uitgebreid uitgewerkt. Ook was hij bij veel mensen enthausiast over het notities maken zelf. Dit wil ik ook gaan implementeren.

...

**Aanpassingen n.a.v. feedback:**

- Ik ga de inhoudsopgave ook met een shortcut bereikbaar maken
- ik ga werken met de toetsen f en j om het universeel makkelijk te maken om te gebruiken
- Ik wil markeringen kunnen aanpassen qua kleur.
- notities typen + shortcut

---

### 🗂️ Week 3 – Overzicht & notities

**To do:**

- [x] Navigatiemenu/inhoudsopgave in een apart vlak
- [x] Notities toevoegen bij gemarkeerde tekst
- [x] Automatisch toevoegen van markeringen aan het juiste hoofdstuk
- [x] Verschillende kleuren voor het markeren

**Gebruiker getest?**

- [x] Ja
- [ ] Nee

**Feedback Roger:**

Het ging nog een beetje moeilijk met het openen en sluiten van de menu's. dat kwam niet doordat het heel ingewikkeld was (toets f->links en j->rechts), maar omdat de tabbing nog wel fout ging. Dit is iets wat ik nog moet verbeteren. Het moment dat er een menu open stond kon hij nogsteeds overal doorheen tabben wat het moeiljk maakte om het menu ook echt te bereiken. Ik weet nog niet hoe maar ik ga dit wel verbeteren. Verder had hij geen moeite met het maken van markeringen, dit ging hem nogsteeds soepel af.

cmd m was nog moeiljk te vinden soms (ik denk dat dat op zn eigen laptop natuurlijk beter zou gaan, maar om het toch universeel goed bruikbaar te laten zijn ga ik de toets toch aanpassen naar iets anders.)

**Aanpassingen n.a.v. feedback:**

het enige wat ik nog wil toevoegen is dus de tabbing soepel laten gaan. 🔴**En nog het handig opslaan van markeringen en notities.**🔴
als ik tijd over zou hebben (dat denk ik niet, dan ga ik werken met een eigen screenreader die ik kan implementeren.)

cmd m was nog moeiljk te vinden soms (ik denk dat dat op zn eigen laptop natuurlijk beter zou gaan, maar om het toch universeel goed bruikbaar te laten zijn ga ik de toets toch aanpassen naar iets anders.)

---

### ✅ Week 4 – Fine-tuning & eindtest

**To do:**

- [x] Laatste bugs oplossen
- [x] Gebruikerstest met finale versie

**Gebruiker getest?**

- [x] Ja
- [ ] Nee

**Feedback Roger:**

Tevreden! Eenvoudig om mee te werken. laatste bugs van vorige week waren goed opgelost! Menu's zijn makkelijker tabbaar.

...

## 🔴Reflectie

Als ik langer de tijd had gehad dan..:

- had ik misschien met speech to tekst nog iets verwerkt
- had ik de notities ook opgeslagen net als de markeringen
- had ik de inhoudsopgave verbeterd
- had ik het ook mogelijk gemaakt om woorden alleen te markeren ipv zinnen (ivm begrippen)

In de laatste week brak mijn hele code. Waardoor ik bijna anderhalve dag bezig was met het oplossen ervan en ben ik nodige tijd verloren om bepaalde dingen nog extra te doen van het lijstje hierboven.

Gelukkig staat de basis er wel, en was Roger erg tevreden door de simpliciteit en ikzelf ben ook nogsteeds erg trots met wat ik neer heb kunnen zetten.
Het was bijzonder om te ontwerpen voor echt 1 iemand specifiek. Zo kon je heerlijk diep duiken in zijn behoeftes en kon je helemaal losgaan met alle mogelijkheden.

...
