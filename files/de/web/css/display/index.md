---
title: display
slug: Web/CSS/display
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/display
---
{{ CSSRef() }}

## Übersicht

Die `display` Eigenschaft legt den Typ einer Rendering-Box eines
Elements fest. Für HTML sind die standardmäßigen `display` Werte in
der HTML-Spezifikation beschrieben und in den User- bzw. Browser-Stylesheets
angegeben. Für XML-Dokumente ist der voreingestellte Wert `inline`.

Zusätzlich zu den vielen verschiedenen Anzeigearten erlaubt der Wert
`none` es, ein Element gänzlich auszublenden; wenn none verwendet
wird, werden auch alle Unterelemente ausgeblendet. Das Dokument wird so
dargestellt, als ob das Element nicht im Dokumentenbaum existieren würde.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
display: none;
display: inline;
display: block;
display: contents;
display: list-item;
display: inline-block;
display: inline-table;
display: table;
display: table-cell;
display: table-column;
display: table-column-group;
display: table-footer-group;
display: table-header-group;
display: table-row;
display: table-row-group;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: ruby;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;
display: run-in;

/* Globale Werte */
display: inherit;
display: initial;
display: unset;
```

## Werte

### Basic values (CSS 1)

- `none`

  - : Schaltet die Anzeige eines Elementes aus (das Element hat keinen Effekt mehr
    auf das Layout des Dokumentes). Alle Kindelemente werden ebenfalls nicht
    mehr angezeigt. Das Dokument wird so gerendert als wenn das Element nicht im
    Dokumentenbaum existieren würde.

    Um die Box trotzdem rendern zu lassen, aber den Inhalt unsichtbar zu
    machen, kann die {{cssxref("visibility")}} Eigenschaft verwendet werden.

- `inline`
  - : Es werden eine oder mehrere inline Elementboxen generiert.
- `block`
  - : Es wird eine Blockbox generiert.
- `list-item`
  - : Es wird eine `block` Box für den Inhalt und eine separate
    `inline` Box für die List-Items generiert.

### Extended values (CSS 2.1)

- `inline-block`
  - : Es wird eine `block` Box generiert, welche den umliegenden Inhalt
    umfließen lässt, als wenn es eine einzelne `inline` Box wäre.

### Table model values (CSS 2.1)

- `inline-table`
  - : Verhält sich wie das {{HTMLElement("table")}} HTML Element, aber es wird ein
    `inline` Element generiert.
- `table`
  - : Verhält sich wie das {{HTMLElement("table")}} HTML Element. Es wird eine
    Blockbox generiert.
- `table-caption`
  - : Verhält sich wie das {{HTMLElement("caption")}} HTML Element
- `table-cell`
  - : Verhält sich wie das {{HTMLElement("td")}} HTML Element
- `table-column`
  - : Verhält sich wie das {{HTMLElement("col")}} HTML Element
- `table-column-group`
  - : Verhält sich wie das {{HTMLElement("colgroup")}} HTML Element
- `table-footer-group`
  - : Verhält sich wie das {{HTMLElement("tfoot")}} HTML Element
- `table-header-group`
  - : Verhält sich wie das {{HTMLElement("thead")}} HTML Element
- `table-row`
  - : Verhält sich wie das {{HTMLElement("tr")}} HTML Element
- `table-row-group`
  - : Verhält sich wie das {{HTMLElement("tbody")}} HTML Element

### Flexbox model values ([CSS3](/de/docs/CSS/CSS3 "CSS3"))

- `flex`
  - : Es wird ein Flexbox Container als `block`Element erzeugt.
- `inline-flex`
  - : Es wird ein Flexbox Container als `inline`Element erzeugt.

### Grid box model values ([CSS3](/de/docs/CSS/CSS3 "CSS3")) {{experimental_inline}}

- `grid`
  - : Es wird ein Grid Container als `block`Element erzeugt.
- `inline-grid`
  - : Es wird ein Grid Container als `inline` Element erzeugt.

### Ruby Formatierungsmodell Werte ([CSS3](/de/docs/Web/CSS/CSS3 "CSS3")){{experimental_inline}}

- `ruby`
  - : Das Element verhält sich wie ein Inlineelement und stellt seinen Inhalt
    anhand des Ruby Formatierungsmodells dar. Es verhält sich wie die
    entsprechenden {{HTMLElement("ruby")}} HTML Elemente.
- `ruby-base`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rb")}} Elemente.
- `ruby-text`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rt")}} Elemente.
- `ruby-base-container`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rbc")}} Elemente, die als
    anonyme Boxen generiert wurden.
- `ruby-text-container`
  - : Diese Elemente verhalten sich wie {{HTMLElement("rtc")}} Elemente.

### Experimental values {{experimental_inline}}

- `run-in`
  - : \* Wenn eine `run-in` Box eine `block` Box enthält,
    genau wie `block`.
    - Wenn einer `block` Box eine `run-in` Box folgt,
      wird die `run-in` Box die erste `inline` Box der
      `block` Box.
    - Wenn eine `inline` Box folgt, wird aus der
      `run-in` Box eine `block` Box.
- `contents`
  - : Diese Elemente erzeugen selbst keine spezielle Box. Sie werden durch ihre
    Pseudobox und deren Kindboxen ersetzt.

### Formale Syntax

{{csssyntax}}

## Beispiele

[Live Beispiel](/samples/cssref/display.html "https://developer.mozilla.org/samples/cssref/display.html")

    p.secret  { display: none; }
    <p class="secret">invisible text</p>

## Spezifikation

| Spezifikation                                                                        | Status                           | Anmerkung                                                                                                   |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Display', '#display', 'display')}}                 | {{Spec2('CSS3 Display')}} | `run-in` und `contents` Werte hinzugefügt                                                                   |
| {{SpecName('CSS3 Ruby', '#display', 'display')}}                     | {{Spec2('CSS3 Ruby')}}     | `ruby`, `ruby-base`, `ruby-text`, `ruby-base-container` und `ruby-text-container` Eigenschaften hinzugefügt |
| {{SpecName('CSS3 Grid', '#grid-declaration0', 'display')}}         | {{Spec2('CSS3 Grid')}}     | Grid Box-Modell hinzugefügt                                                                                 |
| {{SpecName('CSS3 Flexbox', '#flex-containers', 'display')}}     | {{Spec2('CSS3 Flexbox')}} | Flexbox-Modell hinzugefügt                                                                                  |
| {{SpecName('CSS2.1', 'visuren.html#display-prop', 'display')}} | {{Spec2('CSS2.1')}}         | Table-Model und `inline-block` hinzugefügt                                                                  |
| {{SpecName('CSS1', '#display', 'display')}}                             | {{Spec2('CSS1')}}         | `none`, `block`, `inline` und `list-item` hinzugefügt                                                       |

## Browser Kompatibilität

{{Compat("css.properties.display", 10)}}

## Siehe auch

- {{cssxref("visibility")}}, {{cssxref("float")}}, {{cssxref("position")}}
- {{cssxref("flex")}}
