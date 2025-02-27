---
title: "HTMLButtonElement : propriété labels"
slug: Web/API/HTMLButtonElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

La propriété en lecture seule **`HTMLButtonElement.labels`** renvoie une liste de nœuds [`NodeList`](/fr/docs/Web/API/NodeList) contenant les éléments [`<label>`](/fr/docs/Web/HTML/Element/label) (les libellés) associés à l'élément [`<button>`](/fr/docs/Web/HTML/Element/button) courant.

### Valeur de retour

Un objet [`NodeList`](/fr/docs/Web/API/NodeList) contenant les éléments `<label>` associés avec l'élément `<button>`.

## Exemple

### HTML

```html
<label id="label1" for="test">Libellé 1</label>
<label id="label2" for="test">Libellé 2</label>
<button id="test">Bouton</button>
<p>
  Les libellés du bouton sont
  <output id="result"></output>
</p>
```

### JavaScript

```js
const button = document.getElementById("test");
for (const label of button.labels) {
  document.getElementById("result").innerText += ` ${label.textContent}`;
}
```

### Résultat

{{EmbedLiveSample("", "100%", 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
