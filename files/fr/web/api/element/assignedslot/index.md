---
title: "Element : propriété assignedSlot"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

La propriété en lecture seule **`assignedSlot`** de l'interface {{DOMxRef("Element")}} retourne un objet {{DOMxRef("HTMLSlotElement")}} représentant l'élément HTML {{HTMLElement("slot")}} dans lequel le nœud est inséré.

## Valeur

Une instance de {{DOMxRef('HTMLSlotElement')}}, ou `null` si l'élément n'est pas assigné à un slot, ou si la racine d'ombre associée a été attachée avec son {{DOMxRef("ShadowRoot.mode", "mode")}} défini sur `closed` (voir {{DOMxRef("Element.attachShadow")}} pour plus de détails).

## Exemples

Dans notre [exemple simple de modèle <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([voir en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/simple-template/)), nous créons un exemple trivial d'élément personnalisé appelé `<mon-paragraphe>` dans lequel une racine d'ombre est attachée puis remplie à l'aide du contenu d'un modèle contenant un slot nommé `mon-texte`.

Lorsque `<mon-paragraphe>` est utilisé dans le document, le slot est rempli par un élément assignable en l'incluant à l'intérieur de l'élément avec un attribut [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot) ayant pour valeur `mon-texte`. Voici un exemple&nbsp;:

```html
<mon-paragraphe>
  <span slot="mon-texte">Changeons un peu le texte&nbsp;!</span>
</mon-paragraphe>
```

Dans notre fichier JavaScript, nous obtenons une référence au {{HTMLElement("span")}} montré ci-dessus, puis enregistrons une référence à l'élément `<slot>` original dans lequel le `<span>` a été inséré.

```js
let slottedSpan = document.querySelector("mon-paragraphe span");
console.log(slottedSpan.assignedSlot); // journal '<slot name="mon-texte">'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
