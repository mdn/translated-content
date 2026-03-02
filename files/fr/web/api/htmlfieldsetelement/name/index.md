---
title: "HTMLFieldSetElement : propriété name"
short-title: name
slug: Web/API/HTMLFieldSetElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} indique le nom de l'élément {{HTMLElement("fieldset")}}. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/fieldset#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

```js
const fs = document.querySelector("fieldset");
console.log(`Nom de l'élément : ${fs.name}`);
fs.name = "billing"; // définit ou met à jour le nom de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLFieldSetElement.elements")}}
- La propriété {{DOMxRef("HTMLFieldSetElement.disabled")}}
- L'interface {{DOMxRef("HTMLLegendElement")}}
- L'interface {{DOMxRef("HTMLFormElement")}}
- L'élément HTML {{HTMLElement("fieldset")}}
- L'élément HTML {{HTMLElement("legend")}}
- L'élément HTML {{HTMLElement("form")}}
