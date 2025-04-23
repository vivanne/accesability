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

**Gebruiker getest?**

- [x] Ja
- [ ] Nee

**Feedback gebruiker:**

Het tabben per zin was een succes. Het voelde natuurlijk aan om te markeren per zin (net als vroeger in een schrift met een stabilo).

![Screenshot zinmarkering](/Scherm­afbeelding%202025-04-23%20om%2015.51.32.png)

Verder zou hij wel misschien meerdere kleuren willen gebruiken, en dus een aanpasbare markering hebben. Ook vind hij het fijn om wel een menu te hebben waar je fontsize, weight, lineheight en body margin aan kan passen. 🔴 **Hij benoemde ook dat vooral de leessnelheid heel belangrijk is om aan te passen. De meeste screenreaders gaan van nature wat langzaam, en het sneller kunnen zetten versneld zijn leesproces.** 🔴 Ik moet nog even kijken of het mij lukt om dit te implementeren ivm tijd en gezien ik niet ga werken met een custom google screenreader, maar gewoon die van apple. Font size etc moet zeker wel kunnen lukken. Hiermee ga ik deze week nog aan de slag.

![Screenshot zinmarkering](/Scherm­afbeelding%202025-04-23%20om%2016.04.02.png)

...

**Aanpassingen n.a.v. feedback:**

<!-- Wat heb je aangepast op basis van de test? -->

---

### 🗂️ Week 3 – Overzicht & notities

**To do:**

- [ ] Navigatiemenu bouwen (per hoofdstuk)
- [ ] Automatisch toevoegen van markeringen aan het juiste hoofdstuk
- [ ] Notities toevoegen bij gemarkeerde tekst
- [ ] Screenreader-ondersteuning verbeteren

**Gebruiker getest?**

- [ ] Ja
- [ ] Nee

**Feedback gebruiker:**

<!-- Wat vond hij goed / wat werkte niet? -->

...

**Aanpassingen n.a.v. feedback:**

<!-- Wat heb je aangepast op basis van de test? -->

...

**Reflectie week 3:**

<!-- Wat ging goed, wat kan beter, wat heb je geleerd? -->

...

---

### ✅ Week 4 – Fine-tuning & eindtest

**To do:**

- [ ] Laatste bugs oplossen
- [ ] Gebruikerstest met finale versie
- [ ] Toetsenbordbediening controleren en verbeteren
- [ ] Consistentie in layout en structuur verbeteren

**Gebruiker getest?**

- [ ] Ja
- [ ] Nee

**Feedback gebruiker:**

<!-- Wat vond hij goed / wat werkte niet? -->

...

**Aanpassingen n.a.v. feedback:**

<!-- Wat heb je aangepast op basis van de test? -->

...

**Reflectie week 4:**

<!-- Wat ging goed, wat kan beter, wat heb je geleerd? -->

...
