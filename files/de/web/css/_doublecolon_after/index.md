---
title: '::after (:after)'
slug: Web/CSS/::after
tags:
  - CSS
  - CSS Pseudoelement
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/::after
---
{{CSSRef}}

## Übersicht

Das `::after` CSS [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) matcht ein virtuelles letztes Kindelement des markierten Elements. Es wird typischerweise dazu verwendet, um kosmetischen Inhalt unter Verwendung der {{cssxref("content")}} CSS Eigenschaft zu einem Element hinzuzufügen. Dieses Element ist standardmäßig inline.

## Syntax

    /* CSS2 Syntax */
    element:after  { Stileigenschaften }

    /* CSS3 Syntax */
    element::after { Stileigenschaften }

Die `::after` Notation (mit zwei Doppelpunkten) wurde in CSS 3 eingeführt, um eine Unterscheidung zwischen [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) und [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) einzuführen. Browser unterstützen auch die `:after` Notation, wie sie in CSS 2 eingeführt wurde.

## Beispiele

### Einfache Verwendung

Lass uns zwei Klassen erstellen: eine für langweilige Absätze und eine für aufregende. Wir können anschließend jeden Absatz markieren, indem wir ein Pseudoelement an dessen Ende setzen.

```html
<p class="boring-text">Hier ist etwas alter, langweiliger Text.</p>
<p>Hier ist etwas mittelmäßiger Text, weder langweilig noch aufregend.</p>
<p class="exciting-text">An MDN mitzuwirken ist einfach und macht Spaß.
Klicke einfach auf den 'BEARBEITEN' Button und füge neue Livebeispiele hinzu oder verbessere bestehende Beispiele.</p>
```

```css
.exciting-text::after {
  content: "<- *Das* ist interessant!";
  color: green;
}

.boring-text::after {
   content: "<- LANGWEILIG!";
   color: red;
}
```

#### Ausgabe

{{EmbedLiveSample('Einfache_Verwendung', 500, 150)}}

### Dekoratives Beispiel

Wir können Text oder Bilder innerhalb der {{cssxref("content")}} Eigenschaft fast beliebig stylen.

```html
<span class="ribbon">Beachte, wo die orange Box ist.</span>
```

```css
.ribbon {
  background-color: #5BC8F7;
}

.ribbon::after {
  content: "Sieh dir diese orange Box an.";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}
```

#### Ausgabe

{{EmbedLiveSample('Dekoratives_Beispiel', 450, 20)}}

### Tooltips

Das folgende Beispiel zeigt die Verwendung des `::after` [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr) CSS Ausdruck und einem [benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Global_attributes#attr-dataset) `data-descr`, um einen rein CSS-basierten, Wörterbuch ähnlichen _Tooltip_ zu erstellen. Sieh dir die Livevorschau unten an oder das [Beispiel auf einer separaten Seite](https://developer.mozilla.org/files/4591/css-only_tooltips.html).

```html
<p>Hier ist ein Livebeispiel des oberen Codes.<br />
  Wir haben ein <span data-descr="Sammlung von Wörtern und Interpunktion">text</span> mit ein paar
  <span data-descr="kleine Popups, welche auch wieder verschwinden">Tooltips</span>.<br />
  Sei nicht schüchtern, beweg die Maus darüber, ums dir <span data-descr="nicht wörtlich nehmen">anzusehen</span>.
</p>
```

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00F;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Ausgabe

{{EmbedLiveSample('Tooltips', 450, 120)}}

## Spezifikationen

| Spezifikation                                                                                                                                | Status                                       | Kommentar                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-after', '::after')}}                                                 | {{Spec2('CSS4 Pseudo-Elements')}} | Keine wesentlichen Änderungen zur vorherigen Spezifikation.                   |
| {{Specname("CSS3 Transitions", "#animatable-properties", "Übergängen bei Pseudoelement Eigenschaften")}} | {{Spec2("CSS3 Transitions")}}     | Erlaubt Übergänge bei Eigenschaften, die für Pseudoelemente definiert sind.   |
| {{Specname("CSS3 Animations", "", "Animationen bei Pseudoelement Eigenschaften")}}                                 | {{Spec2("CSS3 Animations")}}         | Erlaubt Animationen bei Eigenschaften, die für Pseudoelemente definiert sind. |
| {{SpecName('CSS3 Selectors', '#gen-content', '::after')}}                                                                 | {{Spec2('CSS3 Selectors')}}         | Führt die Zwei-Doppelpunkte-Syntax ein.                                       |
| {{SpecName('CSS2.1', 'generate.html#before-after-content', '::after')}}                                             | {{Spec2('CSS2.1')}}                     | Ursprüngliche Definition, unter Verwendung der Ein-Doppelpunkt-Syntax         |

## Browser Kompatibilität

{{Compat("css.selectors.after")}}

## Siehe auch

- {{Cssxref("::before")}}, {{cssxref("content")}}
