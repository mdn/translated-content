---
title: '-webkit-mask-repeat'
slug: Web/CSS/mask-repeat
tags:
  - CSS
translation_of: Web/CSS/mask-repeat
translation_of_original: Web/CSS/-webkit-mask-repeat
original_slug: Web/CSS/-webkit-mask-repeat
---
{{CSSRef}}{{Non-standard_header}}

## Übersicht

Die `-webkit-mask-repeat` Eigenschaft gibt an, ob und wie ein Maskenbild wiederholt (gekachelt) wird.

{{cssinfo}}

## Syntax

```css
/* Einzelne Schlüsselwortwerte */
-webkit-mask-repeat: repeat;
-webkit-mask-repeat: repeat-x;
-webkit-mask-repeat: repeat-y;
-webkit-mask-repeat: no-repeat;

/* Mehrer Schlüsselwortwerte */
-webkit-mask-repeat: repeat, repeat-x, no-repeat;

/* Globale Werte */
-webkit-mask-repeat: inherit;
-webkit-mask-repeat: initial;
-webkit-mask-repeat: unset;
```

## Werte

- repeat
  - : Das Maskenbild wird horizontal und vertikal wiederholt.
- repeat-x
  - : Das Maskenbild wird nur horizontal wiederholt.
- repeat-y
  - : Das Maskenbild wird nur vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht wiederholt; nur eine Kopie des Maskenbildes wird gezeichnet. Der Rest des Inhalts des maskierten Elements wird nicht dargestellt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
.exampleone {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat: repeat-x;
}

.exampletwo {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat: no-repeat;
}
```

### Unterstützung mehrerer Maskenbilder

Für jedes Maskenbild kann ein unterschiedlicher `<repeat-style>` Wert angegeben werden, der durch Kommas getrennt wird:

```css
.examplethree {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat: repeat-x, repeat-y;
}
```

Jedes Bild wird dem zugehörigen Wiederholungsstil zugeordnet, vom zuerst bis zum zuletzt angegebenen.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-clip")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-image")}}, {{cssxref("-webkit-mask-composite")}}
