---
title: Comment
slug: Web/API/Comment
tags:
  - API
  - DOM
translation_of: Web/API/Comment
---
{{ ApiRef("DOM") }}

L'interface **`Comment`** représente des annotations textuelles au sein du balisage; même si elles ne sont généralement pas montrées, elles sont disponibles à la lecture dans le code source. Les commentaires sont représentés en HTML et XML avec du contenu entre cette balise '`<!--`' et celle ci '`-->`'. Pour XML, la séquence de caractère suivante '`--`' ne peut être utilisée dans un commentaire.

{{InheritanceDiagram}}

## Propriétés

_Cette interface ne possède pas de propriétés spécifiques, mais en hérite de ses parents, {{domxref("CharacterData")}} et indirectement de {{domxref("Node")}}._

## Constructeur

- {{ domxref("Comment.Comment()", "Comment()") }} {{experimental_inline}}
  - : Retourne un objet `Comment` avec son contenu textuel en paramètre.

## Méthodes

_Cette interface ne possède pas de méthode spécifique, mais en hérite de ses parents, {{domxref("CharacterData")}} et indirectement de {{domxref("Node")}}._

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire                                                    |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#comment', 'Comment')}}                             | {{Spec2('DOM WHATWG')}} | Ajoute le constructeur.                                        |
| {{SpecName('DOM3 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM3 Core')}}     | Pas de changement à partir de {{SpecName('DOM2 Core')}} |
| {{SpecName('DOM2 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM2 Core')}}     | Pas de changement à partir de {{SpecName('DOM1')}}     |
| {{SpecName('DOM1', 'level-one-core.html#ID-1728279322', 'Comment')}} | {{Spec2('DOM1')}}         | Définition initale                                             |

## Compatibilité des navigateurs

{{Compat("api.Comment")}}

## Voir aussi

- [The DOM interfaces index](/en-US/docs/DOM/DOM_Reference)
