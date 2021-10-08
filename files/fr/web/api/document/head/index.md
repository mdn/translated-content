---
title: document.head
slug: Web/API/Document/head
tags:
  - DOM
  - Document
  - HTML5
translation_of: Web/API/Document/head
---
Retourne l'élément {{HTMLElement("head")}} du document courant. S'il y a plus d'un élément \<head>, le premier est retourné.

## Syntaxe

    var objRef = document.head;

## Exemple

```js
// en HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert( document.head === document.querySelector("head") ); // true
```

## Notes

`document.head` est en lecture seule. Essayer d'assigner une valeur à cettre propriété échouera en silence ou lancera une `TypeError` si le mode strict d'ECMAScript est activé dans un navigateur Gecko.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('HTML5.1','dom.html#dom-document-head','Document.head')}}     | {{Spec2('HTML5.1')}}     |                     |
| {{SpecName('HTML5 W3C','dom.html#dom-document-head','Document.head')}}     | {{Spec2('HTML5 W3C')}}     |                     |
| {{SpecName('HTML WHATWG','dom.html#dom-document-head','Document.head')}} | {{Spec2('HTML WHATWG')}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.Document.head")}}

## Voir aussi

- {{domxref("document.body")}}
