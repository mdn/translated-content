---
title: ':nth-child'
slug: Web/CSS/:nth-child
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:nth-child
---
{{CSSRef}}

## Übersicht

Die `:nth-child(an+b)` [CSS](/de/docs/CSS "CSS") [Pseudo-Klasse](/de/docs/CSS/Pseudo-classes "Pseudo-classes") passt auf ein Element, das im Dokumentbaum `an+b-1` Geschwisterknoten vor sich hat, wobei **n** einen gegebenen positiven Wert oder den Wert 0 hat. Zudem muss das Element einen Elternknoten haben. Einfacher ausgedrückt: Beginnend bei einem Startindex b trifft der Selector auf jedes n-te folgende Element zu.

Einige Beispiele:

- `1n+0`, oder einfach `n`, trifft auf jedes Kindelement zu.
- `2n+0`, oder einfach 2n, würde auf die Kindelemente 2, 4, 6, 8, etc. zutreffen. Hier kann auch einfach das Schlüsselwort `even` verwendet werden.
- `2n+1` würde auf die Elemente 1, 3, 5, 7, etc. zutreffen. Hier gibt es auch eine Kurzform: Das Schlüsselwort `odd`.
- `3n+4` würde auf die folgenden Elemente zutreffen: 4, 7, 10, 13, etc.

Die Werte `a` und `b` müssen beide Integer sein, und der Index des ersten Kindelements eines Knotens ist 1. In anderen Worten, diese Klasse trifft auf alle Kindelemente zu, deren Index Teil der Menge { an + b; n = 0, 1, 2, ... } ist.

Ein beliebter Anwendungsfall ist das Auswählen jeder zweiten Reihe in einer Tabelle.

## Syntax

    element:nth-child(an + b) { style properties }

## Beispiele

### Beispielselektoren

- `tr:nth-child(2n+1)`
  - : Wählt die ungeraden Reihen einer HTML-Tabelle aus.
- `tr:nth-child(odd)`
  - : Wählt die ungeraden Reihen einer HTML-Tabelle aus.
- `tr:nth-child(2n)`
  - : Wählt die geraden Reihen einer HTML-Tabelle aus.
- `tr:nth-child(even)`
  - : Wählt die geraden Reihen einer HTML-Tabelle aus.
- `span:nth-child(0n+1)`
  - : Selektiert ein span Element, welches das erste Kind seines Elternknotens ist. Dies entspricht dem {{Cssxref(':first-child')}} Selector.
- `span:nth-child(1)`
  - : Entspricht dem vorherigen Beispiel.
- `span:nth-child(-n+3)`
  - : Erzielt einen Treffer, wenn das Element vom Typ span ist und zudem eines der ersten drei Kinder seines Elternknotens ist.

### Gesamtbeispiel

Im folgenden ein HTML-Beispiel:

```html
<p><code>span:nth-child(2n+1)</code>, <em>ohne</em> ein <code>&lt;em&gt;</code>
 unter den Kindelementen. Element 1, 3, 5, und 7 sind ausgewählt, wie erwartet.</p>

<div class="first">
      <span>Dieses span ist ausgewählt</span>
      <span>Dieses span is nicht. :(</span>
      <span>Wie sieht's mit diesem aus?</span>
      <span>Und dieses?</span>
      <span>Noch ein Beispiel</span>
      <span>Und noch eins</span>
      <span>Zu guter Letzt</span>
</div>

<p><code>span:nth-child(2n+1)</code>, <em>mit</em> einem <code>&lt;em&gt;</code>
 unter den Kindelementen. Element 1, 5, und 7 sind ausgewählt. 3 wird beim Zählen berücksichtigt
 weil es ein Kind ist, aber es ist nicht ausgewählt, weil es kein
<code>&lt;span&gt;</code> ist.</p>

<div class="second">
      <span>Dieses span ist ausgewählt!</span>
      <span>Dieses span nicht. :(</span>
      <em>Dieses ist ein em.</em>
      <span>Wie sieht's mit diesem aus?</span>
      <span>Und dieses?</span>
      <span>Noch ein Beispiel</span>
      <span>Und noch eins</span>
      <span>Zu guter Letzt</span>
</div>

<p><code>span:nth-of-type(2n+1)</code>, <em>mit</em> einem <code>&lt;em&gt;</code>
 unter den Kindern. Element 1, 4, 6, und 8 sind ausgewählt. 3 ist
 nicht bei der Zählung berücksichtigt oder ausgewählt, weil es ein <code>&lt;em&gt;</code> ist,
und kein <code>&lt;span&gt;</code>, und <code>nth-of-type</code> selektiert nur
 Kinder dieses Typs. Das <code>&lt;em&gt;</code> wird übersprungen und ignoriert.
</p>

<div class="third">
      <span>Dieses span ist ausgewählt!</span>
      <span>Dieses span nicht. :(</span>
      <em>Dieses ist ein em.</em>
      <span>Wie sieht's mit diesem aus?</span>
      <span>Und dieses?</span>
      <span>Noch ein Beispiel</span>
      <span>Und noch eins</span>
      <span>Zu guter Letzt</span>
</div>
```

...dieses CSS wird verwendet...

```css
html {
  font-family: sans-serif;
}

span, div em {
  padding: 10px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n+1),
.second span:nth-child(2n+1),
.third span:nth-of-type(2n+1) {
  background-color: lime;
}
```

...und erzeugt folgendes Resultat:

{{EmbedLiveSample('Gesamtbeispiel','100%', '550')}}

## Spezifikationen

| Spezifikation                                                                            | Status                               | Kommentar                |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#nth-child-pseudo', ':nth-child')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#nth-child-pseudo', ':nth-child')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.nth-child")}}

## Siehe auch

- {{cssxref(":nth-of-type")}}
