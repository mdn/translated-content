---
title: "HTMLElement : propriété accessKeyLabel"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`accessKeyLabel`** de l'interface {{DOMxRef("HTMLElement")}} retourne une chaîne de caractères contenant la touche d'accès attribuée par le navigateur à l'élément (si elle existe)&nbsp;; sinon, elle retourne une chaîne vide.

## Exemples

### JavaScript

```js
const btn = document.getElementById("btn1");
const shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ` [${shortcutLabel.toUpperCase()}]`;

btn.onclick = () => {
  const feedback = document.createElement("output");
  feedback.textContent = "Pressé !";
  btn.insertAdjacentElement("afterend", feedback);
};
```

### HTML

```html
<button accesskey="h" title="Légende" id="btn1">Survolez-moi</button>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.accessKey")}}
- L'attribut universel [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey)
