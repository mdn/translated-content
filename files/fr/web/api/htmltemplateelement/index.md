---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

L'interface **`HTMLTemplateElement`** permet d'accéder au contenu d'un élément HTML {{HTMLElement("template")}}.

> [!NOTE]
> Un analyseur HTML peut créer soit un `HTMLTemplateElement`, soit un {{DOMxRef("ShadowRoot")}} lorsqu'il analyse un élément {{HTMLElement("template")}}, selon les attributs du `<template>`.
> Si un `HTMLTemplateElement` est créé, les attributs «&nbsp;shadow&nbsp;» sont reflétés depuis le template.
> Cependant, ceux-ci ne sont pas utiles, car un `HTMLTemplateElement` n'est pas une racine d'ombre (<i lang="en">shadow root</i> en anglais) et ne peut pas ensuite être transformé en racine d'ombre.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DocumentFragment")}} en lecture seule qui contient le sous-arbre DOM représentant le contenu du modèle de l'élément HTML {{HTMLElement("template")}}.
- {{DOMxRef("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : Une chaîne de caractères qui reflète la valeur de l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootdelegatesfocus`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootclonable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootSerializable", "shadowRootSerializable")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootserializable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootserializable) de l'élément HTML `<template>` associé.

## Méthodes d'instance

_Cette interface hérite des méthodes de {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
