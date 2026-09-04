---
title: "HTMLStyleElement : propriété media"
short-title: media
slug: Web/API/HTMLStyleElement/media
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La propriété **`HTMLStyleElement.media`** définit le support de destination prévu pour les informations de style.

## Valeur

Une chaîne de caractères décrivant un seul support ou une liste séparée par des virgules.

## Examples

Supposons que l'en-tête `<head>` contienne ce qui suit&nbsp;:

```html
<style id="inline-style" media="screen, print">
  p {
    color: blue;
  }
</style>
```

Alors&nbsp;:

```js
const style = document.getElementById("inline-style");

console.log(style.media); // 'screen, print'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
