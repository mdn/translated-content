---
title: "HTMLTemplateElement : propriété shadowRootDelegatesFocus"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

La propriété **`shadowRootDelegatesFocus`** de l'interface {{DOMxRef("HTMLTemplateElement")}} reflète la valeur de l'attribut [`shadowrootdelegatesfocus`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) de l'élément HTML {{HTMLElement("template")}} associé.

> [!NOTE]
> Cette propriété n'est pas utile pour les développeur·euse·s, et n'est documentée que pour des raisons de complétion.
> Si un élément `<template>` est utilisé pour créer de manière déclarative un {{DOMxRef("ShadowRoot")}}, alors cet objet et cette propriété n'existent pas.
> Sinon, si un `HTMLTemplateElement` est créé, la valeur de cette propriété n'a pas d'importance, car l'objet n'est pas une racine d'ombre (<i lang="en">shadow root</i> en anglais) et ne peut pas ensuite être transformé en racine d'ombre.

## Valeur

Reflète la valeur de l'attribut [`shadowrootdelegatesfocus`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) de l'élément HTML {{HTMLElement("template")}} associé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`shadowrootdelegatesfocus`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) de l'élément `<template>`
- La propriété {{DOMxRef("ShadowRoot.delegatesFocus")}}
