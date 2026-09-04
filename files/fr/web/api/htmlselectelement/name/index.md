---
title: "HTMLSelectElement : propriété name"
short-title: name
slug: Web/API/HTMLSelectElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLSelectElement")}} indique le nom de l'élément HTML {{HTMLElement("select")}}. Elle reflète l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/select#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

```js
const selectElement = document.querySelector("#planets");
console.log(`Nom de l'élément : ${selectElement.name}`);
selectElement.name = "galaxies"; // définit ou met à jour le nom de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLSelectElement.value")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedIndex")}}
- La propriété {{DOMxRef("HTMLSelectElement.options")}}
