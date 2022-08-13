---
title: ol
slug: Web/HTML/Element/ol
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/ol
---
## Übersicht

Das HTML Element _ordered list_ \<ol> wird verwendet, um eine geordnete Liste zu definieren. Die Aufzählung kann in unterschiedlichen Formen geschehen, darunter Buchstaben, römische Zahlen und reguläre Zahlen. Die einzelnen Einträge innerhalb der Liste werden über [Listen](/de/HTML/Element/li "de/HTML/Element/li") ([\<li>](/de/HTML/Element/li "de/HTML/Element/li")) Elemente in das `<ol>` Element eingefügt.

- Element Typ: [block-level](/de/HTML/Block-level_Elemente)
- Erlaubter Inhalt: [li](/de/HTML/Element/li "de/HTML/Element/li")

## Attribute

- {{htmlattrdef("start")}} {{HTMLVersionInline(5)}}

  - : Legt einen Startwert für die Aufzählung der Listeneinträge fest. Dies geschieht unabhängig vom Typ der Nummerierung. Römische Zahlen und Buchstaben können allerdings nicht als Wert angegeben werden, der einzig akzeptierte Wert ist eine Zahl. Um die Aufzählung mit dem Buchstaben "C" zu beginnen, schreibt man einfach: `<ol type="A" start="3">`.

    > **Note:** Das Start-Attribut wurde in HTML4 als deprecated markiert, allerdings in HTML5 wieder integriert.

- {{htmlattrdef("type")}} {{HTMLVersionInline(5)}}
  - : Wird verwendet, um das Aufzählungszeichen der Liste festzulegen. Die Werte sind in der [HTML3.2](/de/HTML3.2 "de/HTML3.2") Spezifikation festgelegt und in der „transitional “ Version von [HTML 4.0/4.01](/de/HTML4.01 "de/HTML4.01") sind `circle`, `disc`, und `square` aufgeführt. Der Browser kann über unterschiedliche Zeichen entscheiden, abhängig vom Grad der Verschachtelung, wenn das type Attribut nicht verwendet wird. Das WebTV Interface unterstützt auch ein `triangle` Zeichen. Dieses Attribut ist veraltet, es sollte die [CSS](/de/CSS "de/CSS") [list-style-type](/de/CSS/list-style-type "de/CSS/list-style-type") Eigenschaft stattdessen verwendet werden.

  > **Note:** Das Type-Attribut wurde in HTML4 als deprecated markiert, allerdings in HTML5 wieder integriert.
- {{htmlattrdef("compact")}} {{ Deprecated_inline() }}

  - : Gibt an, dass die Liste in einer kompakten Form gerendert werden soll. Die Interpretation dieses Attributs hängt vom Browser ab.

    > **Note:** Das Compact-Attribut wurde seit HTML4 als deprecated markiert und sollte nicht weiter benutzt werden.einen ähnlichen Effekt kann man mit der CSS-Eigenschaft {{cssxref("line-height")}} und einem Wert von `80%` erzielen.

## Beispiele

### Einfaches Beispiel

      <ol>
        <li>Erster Eintrag</li>
        <li>Zweiter Eintrag</li>
        <li>Dritter Eintrag</li>
      </ol>

Dieses HTML gibt das Folgende aus:

1. Erster Eintrag
2. Zweiter Eintrag
3. Dritter Eintrag

### Verwendung des `start` Attributs

      <ol start="7">
        <li>Erster Eintrag</li>
        <li>Zweiter Eintrag</li>
        <li>Dritter Eintrag</li>
      </ol>

Dieses HTML gibt das Folgende aus:

{{EmbedLiveSample("", 300, 300)}}

### Verschachtelte Listen

      <ol>
        <li>Erster Eintraf</li>
        <li>Zweiter Eintrag      <!-- Achtung, das schließende </li> Tag wird hier nicht notiert! -->
          <ol>
            <li>Zweiter Eintrag erster Untereintrag</li>
            <li>Zweiter Eintrag zweiter Untereintrag</li>
            <li>Zweiter Eintrag dritter Untereintrag</li>
          </ol>
        </li>                <!-- Hier ist das schließende </li> Tag angegeben! -->
        <li>Dritter Eintrag</li>
      </ol>

Dieses HTML gibt das Folgende aus:

{{EmbedLiveSample("", 300, 300)}}

### Verschachtelte \<ul> und \<ol>

      <ol>
        <li>Erster Eintrag</li>
        <li>Zweiter Eintrag      <!-- Achtung, das schließende </li> Tag wird hier nicht notiert! -->
          <ul>
            <li>Zweiter Eintrag erster Untereintrag</li>
            <li>Zweiter Eintrag zweiter Untereintrag</li>
            <li>Zweiter Eintrag dritter Untereintrag</li>
          </ul>
        </li>                <!-- Hier ist das schließende </li> Tag angegeben! -->
        <li>Dritter Eintrag</li>
      </ol>

Dieses HTML gibt das Folgende aus:

{{EmbedLiveSample("", 300, 300)}}

## Hinweise

Es können so viele Listen, wie man möchte verschachtelt werden, `<ul>` und `<ol>` in jeder Reihenfolge.

Um die Einrückung von Listen zu verändern sollte die [CSS](/de/CSS "de/CSS") [margin](/de/CSS/margin "de/CSS/margin") Eigenschaft verwendet werden.

## Siehe auch

- [HTML List item Element](/de/HTML/Element/li "de/HTML/Element/li")
- [HTML ungeordnete Liste](/de/HTML/Element/ul "de/HTML/Element/ul")
- [CSS list-style Eigenschaft](/de/CSS/list-style "de/CSS/list-style")
- [CSS Counters](/de/CSS_Counters "de/CSS_Counters")

{{HTMLRef}}
