---
title: Document.documentURI
slug: Web/API/Document/documentURI
tags:
  - API
  - DOM
  - Document
  - Propriétés
  - URI
translation_of: Web/API/Document/documentURI
---
{{ApiRef("DOM")}}

La propriété **`documentURI`** de l'interface {{domxref("Document")}} renvoie l'emplacement du document sous forme "string" (_chaîne de caractères_).

Initialement, la spécification DOM3 définissait cet attribut en lecture/écriture. Dans la norme actuelle DOM, il est en lecture seule.

## Syntaxe

    var string = document.documentURI;

## Notes

Les documents HTML ont une propriété {{domxref("document.URL")}} qui renvoie la même valeur. Contrairement à l'`URL`, `documentURI` est disponible pour tous les types de documents.

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-documenturi','documentURI')}} | {{Spec2('DOM WHATWG')}} |                     |
| {{SpecName('DOM3 Core', '#Document3-documentURI', 'documentURI')}}     | {{Spec2('DOM3 Core')}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Document.documentURI")}}
