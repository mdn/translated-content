---
title: HTMLContentElement
slug: Web/API/HTMLContentElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Web Components
translation_of: Web/API/HTMLContentElement
---
{{ APIRef("Web Components") }}

L'interface **`HTMLContentElement`** represente un élément HTML {{HTMLElement("content")}}, utilisé dans le [Shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM).

## Propriétés

_Cette interface hérite des propriétés de {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.select")}}
  - : Une {{domxref("DOMString")}} qui renvoie le {{ htmlattrxref("select", "content") }} d'un attribut HTML. La valeur de retour est une liste de sélecteurs CSS séparés par des virgules. Ils récupèrent le contenu à inserer à la place de l'élément `<content>`.

## Méthodes

_Cette interface hérite des methodes de {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : Retourne un {{domxref("NodeList")}} statique du {{glossary("distributed nodes")}} associé avec l'élément `<content>`.

## Spécifications

| Spécification                                                                    | Statut                           | Commentaire |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('Shadow DOM', '#the-content-element', 'content')}} | {{Spec2('Shadow DOM')}} |             |

## Compatibilité des navigateurs

{{Compat("api.HTMLContentElement")}}

## Voir aussi

- L'élement HTML {{HTMLElement("content")}}, qui implémente cette interface.
- [Shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM)
