---
title: Document.scripts
slug: Web/API/Document/scripts
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/Document/scripts
---
{{ApiRef}}

Retourne une liste des scripts (éléments {{HTMLElement("script")}}) présents dans le document. L'objet retourné est une liste du type {{domxref("HTMLCollection")}}.

## Syntaxe

```js
var scriptList = document.scripts;
```

La liste `scriptList` est un objet {{domxref("HTMLCollection")}} qu'on peut utiliser comme un tableau pour accéder aux éléments qu'elle contient.

## Exemple

Cet exemple détecte la présence d'éléments {{HTMLElement("script")}} dans le document.

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('HTML WHATWG', '#dom-document-scripts', 'Document.scripts')}} | {{ Spec2('HTML WHATWG') }} |             |

## Compatibilité des navigateurs

{{Compat("api.Document.scripts")}}
