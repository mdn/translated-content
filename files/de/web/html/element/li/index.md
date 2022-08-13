---
title: <li>
slug: Web/HTML/Element/li
tags:
  - Element
  - HTML
  - HTML Gruppierender Inhalt
  - Referenz
  - Web
translation_of: Web/HTML/Element/li
---
{{HTMLRef}}

## Übersicht

Das HTML Element _list item_ `<li> `wird verwendet, um einen Listeneintrag innerhalb einer geordneten Liste ({{HTMLElement("ol")}}) oder einer ungeordneten Liste ({{HTMLElement("ul")}}) oder einem Menü ({{HTMLElement("menu")}}) auszuzeichnen. In Menüs und ungeordneten Listen werden Listeneinträge normalerweise mit Aufzählungszeichen dargestellt. In geordneten Listen werden sie normalerweise mit einem aufsteigendem Zähler wie einer Nummer oder einem Buchstaben auf der linken Seite dargestellt.

| [Inhaltskategorien](/de/docs/Web/Guide/HTML/Inhaltskategorien) | Keine                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                               | [Fließender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender+Inhalt)                                                                                                                                                                                           |
| Tagauslassung                                                  | Der Endtag kann weggelassen werden, falls ihm direkt ein weiteres {{HTMLElement("li")}} Element folgt oder falls sein Elternelement keine weiteren Inhalte hat.                                                                                                     |
| Erlaubte Elternelemente                                        | Ein {{HTMLElement("ul")}}, {{HTMLElement("ol")}} oder {{HTMLElement("menu")}} Element. Obwohl es nicht spezifikationsgerechter Verwendung entspricht, kann das veraltete {{HTMLElement("dir")}} ebenfalls als Elternelement verwendet werden. |
| DOM Schnittstelle                                              | {{domxref("HTMLLIElement")}}                                                                                                                                                                                                                                       |

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Globale_Attribute).

- {{htmlattrdef("value")}}

  - : Legt die Zahl fest, mit der die Nummerierung in einem {{HTMLElement("ol")}} Element beginnen soll. Dies geschieht unabhängig vom Typ der Nummerierung. Römische Zahlen und Buchstaben können allerdings nicht als Wert angegeben werden, der einzig akzeptierte Wert ist eine Zahl. Listeneinträge, die dem Eintrag mit dem `value` Attribut folgen, werden die Nummerierung fortführen, die festgelegt wurde. Das `value` Attribut hat für eine ungeordnete Liste keine Bedeutung.

    {{Note("Dieses Attribut wurde in HTML4 missbilligt, jedoch in HTML5 neu eingeführt.")}}> **Note:** **Hinweis:** Vor {{Gecko("9.0")}} wurden negative Werte fälschlicherweise zu 0 konvertiert. Seit {{Gecko("9.0")}} werden alle Ganzzahlwerte korrekt interpretiert.

<!---->

- {{htmlattrdef("type")}} {{Deprecated_inline}}

  - : Dieses Zeichen legt den Aufzählungstyp fest:

    - `a`: Kleinbuchstaben
    - `A`: Großbuchstaben
    - `i`: kleingeschriebene, römische Nummerierung
    - `I`: großgeschriebene römische Nummerierung
    - `1`: ZahlenDie Festlegung eines Typs in einem {{HTMLElement("ol")}} Element wird für das ganze Element verwendet, wenn nicht innerhalb eines `<li>` Elements etwas anderes angegeben wird.

> **Note:** **Hinweis:** Dieses Attribut ist veraltet. Es sollte stattdessen die CSS {{cssxref("list-style-type")}} Eigenschaft verwendet werden.

## Beispiele

```html
<ol>
  <li>Erster Eintrag</li>
  <li>Zweiter Eintrag</li>
  <li>Dritter Eintrag</li>
</ol>
```

Ergibt:

{{EmbedLiveSample("Beispiel_1")}}

```html
<ul>
  <li>Erster Eintrag</li>
  <li>Zweiter Eintrag</li>
  <li>Dritter Eintrag</li>
</ul>
```

Ergibt:

{{EmbedLiveSample("Beispiel_2")}}

Für detailliertere Beispiele siehe die Seiten für {{HTMLElement("ol")}} und {{HTMLElement("ul")}}.

## Spezifikation

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-li-element', '&lt;li&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-li-element.html#the-li-element', '&lt;li&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'lists.html#h-10.2', '&lt;li&gt;')}}                             | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere Listenbezogene HTML-Elemente: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} und das veraltete {{HTMLElement("dir")}};
- CS- Eigenschaften, die besonders nützlich zur Gestaltung des `<li>` Elements sind:

  - die {{cssxref("list-style")}}-Eigenschaft, um festzulegen, wie die Nummerierung dargestellt wird
  - [CSS Counters](https://developer.mozilla.org/Web/Guide/CSS/Counters), um komplexe verschachtelte Listen zu erstellen
  - die {{cssxref("margin")}} Eigenschaft, um den Einzug der Listeneinträge zu steuern
