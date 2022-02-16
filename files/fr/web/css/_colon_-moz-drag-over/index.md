---
title: ':-moz-drag-over'
slug: Web/CSS/:-moz-drag-over
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:-moz-drag-over
---
{{Non-standard_header}}{{CSSRef}}

La pseudo-classe **`:-moz-drag-over`** permet de mettre en forme un élément lorsqu'un événement `drag-over` est appelé dessus.

## Syntaxe

    element:-moz-drag-over { propriétés de mise en forme }

## Exemples

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Drag Over</td>
  </tr>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","200","200")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.
