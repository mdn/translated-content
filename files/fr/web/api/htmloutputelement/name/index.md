---
title: "HTMLOutputElement : propriété name"
short-title: name
slug: Web/API/HTMLOutputElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLOutputElement")}} indique le nom de l'élément HTML {{HTMLElement("output")}}. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/output#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

```js
const outputElement = document.querySelector("#log");
console.log(`Nom de l'élément : ${outputElement.name}`);
outputElement.name = "sum"; // définit ou met à jour le nom de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLOutputElement.defaultValue")}}
- La propriété {{DOMxRef("HTMLOutputElement.htmlFor")}}
- La propriété {{DOMxRef("HTMLOutputElement.labels")}}
