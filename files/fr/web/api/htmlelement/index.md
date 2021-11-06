---
title: HTMLElement
slug: Web/API/HTMLElement
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement
---
{{ApiRef}}

## Interface des éléments HTML

`HTMLElement` est une interface abstraite pour le [DOM](/fr/docs/DOM), héritée par tous les éléments HTML.

## Propriétés

| Nom                                                                                                       | Type                                 | Description                                                                    |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------ |
| {{domxref("element.accessKey", "accessKey")}} {{HTMLVersionInline(5)}}             | {{domxref("DOMString")}}     | La touche de navigation clavier assignée à l'élément.                          |
| {{domxref("element.accessKeyLabel", "accessKeyLabel")}} {{HTMLVersionInline(5)}} | {{domxref("DOMString")}}     | Une chaîne de caractères définissant la touche de navigation clavier assignée. |
| {{domxref("element.className", "className")}}                                              | {{domxref("DOMString")}}     | Le nom de la classe [CSS](/fr/docs/CSS) définie pour l'élément.                |
| {{domxref("element.dataset", "dataset")}} {{HTMLVersionInline(5)}}                 | {{domxref("DOMStringMap")}} | Un tableau associatif des attributs  `data-*` de l'élément.                    |
| {{domxref("element.dir", "dir")}}                                                              | {{domxref("DOMString")}}     | L'attribut `dir` de l'élément.                                                 |
| {{domxref("element.id", "id")}}                                                                  | {{domxref("DOMString")}}     | L'ID de l'élément.                                                             |
| {{domxref("element.lang", "lang")}}                                                          | {{domxref("DOMString")}}     | L'attribut  `lang` de l'élément.                                               |
| {{domxref("element.title", "title")}}                                                          | {{domxref("DOMString")}}     | L'attribut `title` de l'élément.                                               |

## Méthodes

| Nom et paramètres                                                                         | Renvoie | Description                                                    |
| ----------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| {{domxref("element.blur()", "blur()")}} {{HTMLVersionInline(5)}}     | `void`  | Retire le focus clavier de l'élément actuellement sélectionné. |
| {{domxref("element.click()", "click()")}} {{HTMLVersionInline(5)}} | `void`  | Envoie un évènement `click` à l'élément.                       |
| {{domxref("element.focus()", "focus()")}} {{HTMLVersionInline(5)}} | `void`  | Place le focus clavier sur l'élément.                          |

## Spécification

| Spécification                                                                                    | Statut                           | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'elements.html#htmlelement', 'HTMLElement')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement")}}

## Voir aussi

- {{domxref("Element")}}
