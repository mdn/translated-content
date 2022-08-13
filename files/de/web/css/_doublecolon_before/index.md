---
title: '::before (:before)'
slug: Web/CSS/::before
tags:
  - CSS
  - CSS Pseudoelement
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/::before
---
{{CSSRef}}

## Übersicht

`::before` erzeugt ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), dass das erste Kind des gematchten Elements ist. Es wird oft dazu verwendet, um kosmetische Inhalte unter Verwendung der {{cssxref("content")}} Eigenschaft zu einem Element hinzuzufügen. Dieses Element ist standardmäßig inline.

## Syntax

    /* CSS3 Syntax */
    element::before { Stileigenschaften }

    /* CSS2 veraltete Syntax (nur benötigt, um IE8 zu unterstützen) */
    element:before  { Stileigenschaften }

    /* Fügt Inhalte vor jedem <p> Element ein */
    p::before { content: "Hallo Welt!"; }

Die `::before` Notation (mit zwei Doppelpunkten) wurde in CSS 3 eingeführt, um eine Unterscheidung zwischen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) und [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) einzuführen. Browser unterstützen auch die `:before` Notation, wie sie in CSS 2 eingeführt wurde.

## Beispiele

### Hinzufügen von Anführungszeichen

Ein einfaches Beispiel für die Verwendung von `::before` Pseudoelementen ist das Hinzufügen von Anführungszeichen. Hier werden `::before` und `::after` verwendet, um Anführungszeichen einzufügen.

#### HTML Inhalt

```html
<q>Ein paar Anführungszeichen</q>, sagte er, <q>sind besser als keine</q>.
```

#### CSS Inhalt

```css
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
```

#### Ausgabe

{{EmbedLiveSample('Hinzufügen_von_Anführungszeichen', '500', '50')}}

### Dekoratives Beispiel

Wir können Text oder Bilder innerhalb der {{cssxref("content")}} Eigenschaft fast beliebig stylen.

#### HTML Inhalt

```html
<span class="ribbon">Beachte, wo die orange Box ist.</span>
```

#### CSS content

```css
.ribbon {
  background-color: #5BC8F7;
}

.ribbon::before {
  content: "Sieh dir diese orange Box an.";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}
```

#### Ausgabe

{{EmbedLiveSample('Dekoratives_Beispiel', 450, 60)}}

### Todo-Liste

In diesem Beispiel erstellen wir eine einfache Todo-Liste mit Hilfe von Pseudoelementen. Diese Methode kann oft dazu verwendet werden, kleine Änderungen an der Benutzerschnittstelle hinzuzufügen und die User Experience zu verbessern.

#### HTML Inhalt

```html
<ul>
  <li>Milch kaufen</li>
  <li>Mit Hund Gassi gehen</li>
  <li>Trainieren</li>
  <li>Code schreiben</li>
  <li>Musik spielen</li>
  <li>Entspannen</li>
</ul>
```

#### CSS Inhalt

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #CCFF99;
}

li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript Inhalt

```js
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
```

Das obige Beispiel ist ein Livebeispiel. Beachte, dass keine Symbole verwendet werden und dass der Haken in Wirklichkeit das `::before` ist, dass durch CSS dargestellt wird.

#### Ausgabe

{{EmbedLiveSample('Todo-Liste', 400, 300)}}

## Hinweise

Obwohl die Fehlerbehebungen in Firefox 3.5 bzgl. Positionierung es nicht erlauben, Inhalte als ein separates, vorheriges Geschwisterelement zu erstellen (wie die [CSS Spezifikation](http://www.w3.org/TR/CSS21/generate.html#before-after-content) sagt "The :before and :after pseudo-elements elements interact with other boxes \[...] as if they were real elements inserted just inside their associated element.", etwa: "Die :before- und :after-Pseudo-Elemente interagieren mit anderen Boxen \[...] so als wären sie reale Elemente, die in dem dazugehörigen Element eingefügt wären), können Sie dennoch eingesetzt werden um leichte Verbesserungen in tabellenlosen Layouts (z.B. um ein Element zu zentrieren) zu erhalten. Solange der zu zentrierende Inhalt ein Kindelement ist, können eine vorhergehende und nachfolgende Spalte eingefügt werden ohne eigene Elemente dafür zu verwenden (d.h., es ist eventuell semantisch korrekter, wie unten in dem Beispiel, ein zusätzliches span-Element anstelle jeweils eines leeres div-Elements davor und danach einzufügen). (Und denke immer daran, einem gefloateten Element eine Breite zu geben, andernfalls wird es nicht floaten!)

#### HTML Inhalt

```html
<div class="example">
<span id="floatme">"Davor umflossen" sollte links vom Viewport erstellt werden
und Umfluss in dieser Zeile nicht erlauben, sie unterhalb zu umfließen. Genauso sollte
"Danach umflossen" rechts vom Viewport erscheinen und dieser Zeile nicht erlauben, es unterhalb zu umfließen.</span>
</div>
```

#### CSS Inhalt

```css
#floatme {
  float: left; width: 50%;
}

/* Um eine leere Spalte zu erhalten, einfach den hexadezimalen Wert für einen nicht umbrechenden Leerraum angeben: \a0 als Attributwert für content (verwende \0000a0 wenn weitere Zeichen folgen) */
.example::before {
  content: "Davor umflossen";
  float: left;
  width: 25%
}
.example::after {
  content: "Danach umflossen";
  float: right;
  width:25%
}

/* For styling */
.example::before, .example::after, .first {
  background: yellow;
  color: red;
}
```

#### Ausgabe

{{EmbedLiveSample("Hinweise")}}

## Spezifikationen

| Spezifikation                                                                                                                                | Status                                       | Kommentar                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-before', '::before')}}                                             | {{Spec2('CSS4 Pseudo-Elements')}} | Keine wesentlichen Änderungen zur vorherigen Spezifikation.                   |
| {{Specname("CSS3 Transitions", "#animatable-properties", "Übergänge bei Pseudoelement Eigenschaften")}} | {{Spec2("CSS3 Transitions")}}     | Erlaubt Übergänge bei Eigenschaften, die für Pseudoelemente definiert sind.   |
| {{Specname("CSS3 Animations", "", "Animationen bei Pseudoelement Eigenschaften")}}                                 | {{Spec2("CSS3 Animations")}}         | Erlaubt Animationen bei Eigenschaften, die für Pseudoelemente definiert sind. |
| {{SpecName('CSS3 Selectors', '#gen-content', '::before')}}                                                                 | {{Spec2('CSS3 Selectors')}}         | Führt die Zwei-Doppelpunkte-Syntax ein.                                       |
| {{SpecName('CSS2.1', 'generate.html#before-after-content', '::before')}}                                             | {{Spec2('CSS2.1')}}                     | Ursprüngliche Definition, unter Verwendung der Ein-Doppelpunkt-Syntax         |

## Browser Kompatibililtät

{{Compat("css.selectors.before")}}

## Siehe auch

- {{Cssxref("::after")}}, {{cssxref("content")}}
