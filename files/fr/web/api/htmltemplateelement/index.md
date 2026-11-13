---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: a447d93f8c264d39c49e9f465ad780a81e92ed71
---

{{APIRef("Web Components")}}

L'interface **`HTMLTemplateElement`** permet d'accéder au contenu d'un élément HTML {{HTMLElement("template")}}.

> [!NOTE]
> Un analyseur HTML peut créer soit un `HTMLTemplateElement`, soit un {{DOMxRef("ShadowRoot")}} lorsqu'il analyse un élément {{HTMLElement("template")}}, selon les attributs du `<template>`.
> Si un `HTMLTemplateElement` est créé, les attributs «&nbsp;shadow&nbsp;» sont reflétés depuis le modèle.
> Cependant, ceux-ci ne sont pas utiles, car un `HTMLTemplateElement` n'est pas une racine d'ombre (<i lang="en">shadow root</i> en anglais) et ne peut pas ensuite être transformé en racine d'ombre.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DocumentFragment")}} en lecture seule qui contient le sous-arbre DOM représentant le contenu du modèle de l'élément HTML {{HTMLElement("template")}}.
- {{DOMxRef("HTMLTemplateElement.htmlFor", "htmlFor")}} {{Experimental_Inline}}
  - : Une chaîne de caractères d'agent utilisateur qui reflète l'attribut HTML [`for`](/fr/docs/Web/HTML/Reference/Elements/template#for), contenant l'ID du marqueur d'instruction de traitement à remplacer par le contenu de cet élément `<template>`.
- {{DOMxRef("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : Une chaîne de caractères qui reflète la valeur de l'attribut [`shadowrootmode`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootmode) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootdelegatesfocus`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootclonable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootCustomElementRegistry", "shadowRootCustomElementRegistry")}}
  - : Une chaîne de caractères qui reflète la valeur de l'attribut [`shadowrootcustomelementregistry`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootcustomelementregistry) de l'élément `<template>` associé, indiquant que la racine d'ombre déclarative utilise un {{DOMxRef("CustomElementRegistry")}} avec une portée.
- {{DOMxRef("HTMLTemplateElement.shadowRootSerializable", "shadowRootSerializable")}}
  - : Un booléen qui reflète la valeur de l'attribut [`shadowrootserializable`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootserializable) de l'élément HTML `<template>` associé.
- {{DOMxRef("HTMLTemplateElement.shadowRootSlotAssignment", "shadowRootSlotAssignment")}}
  - : Une chaîne de caractères qui reflète la valeur de l'attribut [`shadowrootslotassignment`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) de l'élément HTML `<template>` associé.

## Méthodes d'instance

_Cette interface hérite des méthodes de {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
