---
title: Encoding API
slug: Web/API/Encoding_API
tags:
  - API
  - Encoding
  - Overview
  - Reference
translation_of: Web/API/Encoding_API
---
{{DefaultAPISidebar("Encoding API")}}{{SeeCompatTable}}

L'`API Encoding` fournit un mecanisme de traitement de texte dans plusieurs {{Glossary("character encoding", "character encodings")}}, incluant les encodings non-{{Glossary("UTF-8")}}.

L'API fournit quatres interfaces: {{domxref("TextDecoder")}}, {{domxref("TextEncoder")}}, {{domxref("TextDecoderStream")}} et {{domxref("TextEncoderStream")}}.

## Interfaces

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## Tutoriels & Outils

- Un [shim](http://code.google.com/p/stringencoding/) permettant d'utiliser cette interface dans les navigateurs ne le supportant pas.
- [`StringView`](/en-US/Add-ons/Code_snippets/StringView) – une représentation de type C des chaînes basée sur des tableaux typés.

## Caracteristiques

| Caracteristiques                 | Statut                       | Commentaire          |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("Encoding")}} | {{Spec2("Encoding")}} | Définition initiale. |

## Compatibilité

### `TextDecoder`

{{Compat("api.TextDecoder")}}

### `TextEncoder`

{{Compat("api.TextEncoder")}}
