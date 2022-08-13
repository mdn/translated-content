---
title: Boolean
slug: Glossary/Boolean
translation_of: Glossary/Boolean
---
In der Programmierung ist **Boolean** ein logischer {{Glossary("Type","Datentyp")}}, der nur einen der zwei {{Glossary("Value","Werte")}} `true` oder `false`, _wahr_ oder _falsch_ annehmen kann.

Boolesche Werte sind die Grundlage für die Entscheidung, ob ein Teilbereich des Programms ausgeführt werden soll (`true`) oder nicht (`false`), zum Beispiel bei einem `if`-Block oder einer `for`-Schleife:

    /* JavaScript if */
    if (Bedingung) {
       // auszuführender Programmabschnitt, falls die Bedingung true ergibt
    }

    let i = 1;
    if (i == 1) { // dies ist wahr, true
        console.log("Bedingung ist true");
    } else {
        console.log("Bedingung ist false");
    }



    /* JavaScript for */
    for (Kontrollvariable; Bedingung; Zähler) {
      // auszuführender Abschnitt, solange die Bedingung true ergibt
    }

    for (let i = 0; i < 4; i++) {
      console.log("Ich werde ausgegeben, so lange die Bedingung i < 4 wahr ist.");
    }

## Mehr erfahren

### Allgemein

- {{Interwiki("wikipedia", "Datentyp#Boolean_.28logische_Werte.29", "Boolean")}} auf Wikipedia

### Technik

- Das globale {{jsxref("Boolean")}}-{{Glossary("Object","Objekt")}} in JavaScript
- [JavaScript-Datentypen und -strukturen](/de/docs/Web/JavaScript/Data_structures)
