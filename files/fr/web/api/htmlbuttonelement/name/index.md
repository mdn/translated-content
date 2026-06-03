---
title: "HTMLButtonElement : propriété name"
short-title: name
slug: Web/API/HTMLButtonElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLButtonElement")}} indique le nom de l'élément HTML {{HTMLElement("button")}} ou la chaîne vide si l'élément n'a pas de nom. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/button#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

```js
const buttonElement = document.querySelector("#monBouton");
console.log(`Nom de l'élément : ${buttonElement.name}`);
buttonElement.name = "nouveauNom";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLButtonElement.value")}}
- {{DOMxRef("HTMLButtonElement.type")}}
