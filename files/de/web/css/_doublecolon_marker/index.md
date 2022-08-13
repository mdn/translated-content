---
title: '::marker'
slug: Web/CSS/::marker
tags:
  - CSS
  - CSS Liste
  - Experimental
  - Layout
  - Pseudo-element
  - Referenz
  - Selektor
translation_of: Web/CSS/::marker
---
{{CSSRef}}

Das [CSS](/de/docs/Web/CSS) [pseudo-element](/de/CSS/Pseudo-elements) **`::marker`** wählt das Markierungsfeld eines Listenelements aus, das in der Regel einen Aufzählungspunkt oder eine Zahl enthält. Es funktioniert mit jedem Element oder Pseudo-Element, das angezeigt werden soll: Listenelement [`display: list-item`](/de/docs/Web/CSS/display), wie z.B. die Elemente {{HTMLElement("li")}} und {{HTMLElement("summary")}} elements.

```css
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## Zulässige Eigenschaften

Nur bestimmte CSS-Eigenschaften können in einer Regel mit `::marker` als Selektor verwendet werden:

- Alle [Schrift-Eigenschaften](/de/docs/Web/CSS/CSS_Fonts)
- Die Eigenschaft {{CSSxRef("white-space")}}
- {{CSSxRef("color")}}
- Die Eigenschaften {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} und {{CSSxRef("direction")}}
- Die Eigenschaft {{CSSxRef("content")}}
- Alle [Animations](/de/docs/Web/CSS/CSS_Animations#CSS_Properties)- und [Transitions](/de/docs/Web/CSS/CSS_Transitions#Properties)-Eigenschaften

> **Note:** Die Spezifikation besagt, dass in Zukunft weitere CSS-Eigenschaften unterstützt werden können.

## Syntax

{{CSSSyntax}}

## Beispiel

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Specifications

| Specification                                                                            | Status                                       | Comment                     |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#marker-pseudo', '::marker')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Keine wesentliche Änderung. |
| {{SpecName('CSS3 Lists', '#marker-pseudo', '::marker')}}             | {{Spec2('CSS3 Lists')}}             | Ursprüngliche Definition.   |

## Browser-Kompatibilität

{{Compat("css.selectors.marker")}}

## See also

- HTML-Elemente, die standardmäßig Markierungsfelder haben: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
