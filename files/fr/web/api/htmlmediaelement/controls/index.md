---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
browser-compat: api.HTMLMediaElement.controls
translation_of: Web/API/HTMLMediaElement/controls
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.controls`** reflète l'attribut HTML [`controls`](/fr/docs/Web/HTML/Element/video#attr-controls) qui vérifie si les contrôles de l'interface utilisateur pour la lecture de l'élément multimédia sont affichés.

### Valeur

Une valeur booléenne. La valeur `true` signifie que les contrôles seront affichés.

## Exemple

```js
let obj = document.createElement('video');
obj.controls = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement).
