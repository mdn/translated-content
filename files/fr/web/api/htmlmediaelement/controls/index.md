---
title: "HTMLMediaElement : propriété controls"
short-title: controls
slug: Web/API/HTMLMediaElement/controls
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`controls`** de l'interface {{DOMxRef("HTMLMediaElement")}} reflète l'attribut HTML [`controls`](/fr/docs/Web/HTML/Reference/Elements/video#controls) qui vérifie si les contrôles de l'interface utilisateur pour la lecture de l'élément multimédia sont affichés.

## Valeur

Une valeur booléenne. La valeur `true` signifie que les contrôles seront affichés.

## Exemples

```js
const obj = document.createElement("video");
obj.controls = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.controls`
