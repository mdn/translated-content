---
title: "HTMLTemplateElement : propriété shadowRootClonable"
short-title: shadowRootClonable
slug: Web/API/HTMLTemplateElement/shadowRootClonable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

La propriété **`shadowRootClonable`** de l'interface {{DOMxRef("HTMLTemplateElement")}} reflète la valeur de l'attribut [`shadowrootclonable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) de l'élément HTML {{HTMLElement("template")}} associé.

Notez que cette propriété n'est pas utile pour les développeur·euse·s.
Si un élément `<template>` est utilisé pour créer de manière déclarative un {{DOMxRef("ShadowRoot")}}, alors cet objet et cette propriété n'existent pas.
Sinon, si un `HTMLTemplateElement` est créé, la valeur de cette propriété n'a pas d'importance car l'objet n'est pas une racine d'ombre (<i lang="en">shadow root</i> en anglais) et ne peut pas ensuite être transformé en racine d'ombre.

## Valeur

Reflète la valeur de l'attribut [`shadowrootclonable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) de l'élément HTML {{HTMLElement("template")}} associé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`shadowrootclonable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) de l'élément `<template>`
- La propriété {{DOMxRef("ShadowRoot.clonable")}}
