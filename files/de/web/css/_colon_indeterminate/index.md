---
title: ':indeterminate'
slug: Web/CSS/:indeterminate
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Selektoren
  - Web
translation_of: Web/CSS/:indeterminate
---
{{CSSRef}}

## Übersicht

Die `:indeterminate` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert alle `<input type="checkbox">` Elements, deren `indeterminate` [DOM](/de/docs/Web/API) Eigenschaft durch JavaScript auf `true` gesetzt wurde. Darüber hinaus wird sie in manchen Browsern dazu verwendet, {{HTMLElement("progress")}} Elemente in einem Zwischenstatus zu finden.

## Beispiel

```css
input, span {
  background: red;
}

:indeterminate, :indeterminate + span {
  background: limegreen;
}
```

```html
<input type="checkbox"> <span>Der Inhalt dieses Absatzes hat eine grüne Hintergrundfarbe.</span>
```

```js
document.getElementsByTagName("input")[0].indeterminate = true;
```

{{EmbedLiveSample('Beispiel', '100%', 50)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                               | Anmerkung                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-indeterminate', ':indeterminate')}} | {{Spec2('HTML WHATWG')}}     | Keine Änderung                                                    |
| {{SpecName('HTML5 W3C', '#selector-indeterminate', ':indeterminate')}}     | {{Spec2('HTML5 W3C')}}         | Definiert die Semantik bezüglich HTML und Begrenzungsvalidierung. |
| {{SpecName('CSS4 Selectors', '#indeterminate', ':indeterminate')}}         | {{Spec2('CSS4 Selectors')}} | Keine Änderung                                                    |
| {{SpecName('CSS3 UI', '#indeterminate', ':indeterminate')}}                 | {{Spec2('CSS3 UI')}}         | Definiert die Pseudoklasse, aber nicht die dazugehörige Semantik. |

## Browser Kompatibilität

{{Compat("css.selectors.indeterminate")}}
