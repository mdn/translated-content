---
title: ul
slug: Web/HTML/Element/ul
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/ul
---
## Übersicht

Das HTML Element _unordered list_ \<ul> wird verwendet um eine ungeordnete Liste darzustellen. Eine Sammlung von Einträgen, die keine nummerische Ordung aufweisen bzw. deren Aufzählung bedeutungslos ist. Die einzelnen Einträge der Liste werden durch das [list item](/de/HTML/Element/li "de/HTML/Element/li") ([\<li>](/de/HTML/Element/li "de/HTML/Element/li")) Element definiert, welches das einzige Element ist, was innerhalb eines `<ul>` Tag stehen darf.

- Element Typ: [block-level](/de/HTML/Block-level_Elemente "de/HTML/Block-level_Elemente")
- Erlaubter Inhalt: [li](/de/HTML/Element/li "de/HTML/Element/li")

## Attribute

- type {{ Deprecated_inline() }}
  - : Wird verwendet, um das Aufzählungszeichen der Liste festzulegen. Die Werte sind in der [HTML3.2](/de/HTML3.2 "de/HTML3.2") Spezifikation festgelegt und in der „transitional“ Version von [HTML 4.0/4.01](/de/HTML4.01 "de/HTML4.01") sind `circle`, `disc`, und `square` aufgeführt. Der Browser kann über unterschiedliche Zeichen entscheiden, abhängig vom Grad der Verschachtelung, wenn das type Attribut nicht verwendet wird. Das WebTV Interface unterstützt auch ein `triangle` Zeichen. Dieses Attribut ist veraltet, es sollte die [CSS](/de/CSS "de/CSS") [list-style-type](/de/CSS/list-style-type "de/CSS/list-style-type") Eigenschaft stattdessen verwendet werden.

<!---->

- compact {{ Deprecated_inline() }}
  - : Gibt an, dass die Liste in einer kompakten Form gerendert werden soll. Die Interpretation dieses Attributs hängt vom Browser ab.

## Beispiele

### Einfaches Beispiel

      <ul>
        <li>Erster Eintrag</li>
        <li>Zweiter Eintrag</li>
        <li>Dritter Eintrag</li>
      </ul>

Dieses HTML gibt das Folgende aus:

- Erster Eintrag
- Zweiter Eintrag
- Dritter Eintrag

### Verschachtelte Listen

      <ul>
        <li>Erster Eintraf</li>
        <li>Zweiter Eintrag      <!-- Achtung, das schließende </li> Tag wird hier nicht notiert! -->
          <ul>
            <li>Zweiter Eintrag erster Untereintrag</li>
            <li>Zweiter Eintrag zweiter Untereintrag</li>
            <li>Zweiter Eintrag dritter Untereintrag</li>
          </ul>
        </li>                <!-- Hier ist das schließende </li> Tag angegeben! -->
        <li>Dritter Eintrag</li>
      </ul>

Dieses HTML gibt das Folgende aus:

- Erster Eintrag
- Zweiter Eintrag

  - Zweiter Eintrag erster Untereintrag
  - Zweiter Eintrag zweiter Untereintrag
  - Zweiter Eintrag dritter Untereintrag

- Dritter Eintrag

### Verschachtelte \<ul> und \<ol>

      <ul>
        <li>Erster Eintrag</li>
        <li>Zweiter Eintrag      <!-- Achtung, das schließende </li> Tag wird hier nicht notiert! -->
          <ol>
            <li>Zweiter Eintrag erster Untereintrag</li>
            <li>Zweiter Eintrag zweiter Untereintrag</li>
            <li>Zweiter Eintrag dritter Untereintrag</li>
          </ol>
        </li>                <!-- Hier ist das schließende </li> Tag angegeben! -->
        <li>Dritter Eintrag</li>
      </ul>

Dieses HTML gibt das Folgende aus:

- Erster Eintrag
- Zweiter Eintrag

  1.  Zweiter Eintrag erster Untereintrag
  2.  Zweiter Eintrag zweiter Untereintrag
  3.  Zweiter Eintrag dritter Untereintrag

- Dritter Eintrag

## Hinweise

Es können so viele Listen, wie man möchte verschachtelt werden, `<ul>` und `<ol>` in jeder Reihenfolge.

Um die Einrückung von Listen zu verändern sollte die [CSS](/de/CSS "de/CSS") [margin](/de/CSS/margin "de/CSS/margin") Eigenschaft verwendet werden.

## Siehe auch

- [HTML List item Element](/de/HTML/Element/li "de/HTML/Element/li")
- [HTML geordnete Liste](/de/HTML/Element/ol "de/HTML/Element/ol")
- [CSS list-style Eigenschaft](/de/CSS/list-style "de/CSS/list-style")
- [CSS Counters](/de/CSS_Counters "de/CSS_Counters")

{{ languages({ "en":"en/HTML/Element/ul", "ja":"de/HTML/Element/ul", "pl":"pl/HTML/Element/ul"}) }}
