---
title: ':focus'
slug: Web/CSS/:focus
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Selektoren
  - Web
translation_of: Web/CSS/:focus
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS)[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") `:focus` steht für Elemente, welche mit einem Eingabegerät, wie z. B. der Tastatur, fokusiert wurden.

## Syntax

    element:focus { ... }

## Beispiele

```css
.first-name:focus {
  color: red;
}

.last-name:focus {
  color: lime;
}
```

```html
<input class="first-name" value="Dieser Text wird rot, wenn das Textfeld den Fokus erhält">
<input class="last-name" value="Dieser Text wird grün, wenn das Textfeld den Fokus erhält">
```

{{EmbedLiveSample('Beispiele', '100%', 40)}}

## Spezifikationen

| Spezifikation                                                                                                    | Status                               | Kommentar                |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#focus-pseudo', ':focus')}}                                     | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':focus')}} | {{Spec2('CSS3 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':focus')}}                 | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.focus")}}

## Siehe auch

- {{cssxref(":focus-within")}}
