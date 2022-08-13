---
title: ':active'
slug: Web/CSS/:active
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:active
---
{{CSSRef}}

## Übersicht

Die [Pseudoklasse](/de/docs/CSS/Pseudo-classes "Pseudo-classes") `:active` entspricht jedem Element, das vom Benutzer aktiviert wurde. Beim Mauszeiger ist das die Zeitspanne, wo die Taste gedrückt gehalten wird. Deshalb wird sie meistens bei den Elementen {{HTMLElement("a")}} und {{HTMLElement("button")}} Eingesetzt, kann aber auch für jedes andere Element genutzt werden.

Die Stile können von weiteren Pseudoklassen überschrieben werden: {{cssxref(":link")}}, {{cssxref(":hover")}} und {{cssxref(":visited")}}. Deshalb ist es wichtig, die _LVHA-Reihenfolge_ einzuhalten: `:link` — `:visited` — `:hover` — `:active`.

> **Note:** **Hinweis:** Auf Systemen mit Mäusen mit mehreren Knöpfen, definiert CSS 3, dass die `:active` Pseudoklasse nur dem Hauptknopf zugewiesen wird; bei Mäusen für Rechtshänder ist dies typischerweise der linkeste Knopf.

## Beispiel

### HTML

```html
<body>
    <h1>:active CSS selector example</h1>
    <p>The following link will turn lime during the time you click it and release the click: <a href="#">Mozilla Developer Network</a>.</p>
</body>
```

### CSS

```css
body { background-color: #ffffc9 }
a:link { color: blue } /* unbesuchte Links */
a:visited { color: purple } /* besuchte Links*/
a:hover { font-weight: bold } /* Benutzer fährt mit der Maus darüber */
a:active { color: lime } /* aktive Links */
```

{{EmbedLiveSample('Beispiel', 600, 140)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                               | Kommentar               |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------- |
| {{SpecName('CSS4 Selectors', '#active-pseudo', ':active')}}                 | {{Spec2('CSS4 Selectors')}} | Keine Änderung          |
| {{SpecName('CSS3 Selectors', '#useraction-pseudos', ':active')}}             | {{Spec2('CSS3 Selectors')}} | Keine Änderung          |
| {{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':active')}} | {{Spec2('CSS2.1')}}             | Keine Änderung          |
| {{SpecName('CSS1', '#anchor-pseudo-classes', ':active')}}                     | {{Spec2('CSS1')}}             | Standard Wert definiert |

## Browser Kompatibilität

{{Compat("css.selectors.active")}}

## Siehe auch

- Weitere Link-Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}} und {{cssxref(":hover")}}.
