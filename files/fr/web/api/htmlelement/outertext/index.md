---
title: HTMLElement.outerText
slug: Web/API/HTMLElement/outerText
tags:
  - API
  - DOM
  - Propriété
translation_of: Web/API/HTMLElement/outerText
---
{{APIRef("DOM")}}

{{ Non-standard_header() }}

## Résumé

**`HTMLElement.outerText`** n'est pas une propriété standard. En lecture, elle renvoie la même valeur que {{domxref("Node.innerText")}}. En écriture, elle supprime le noeud courant et le remplace par le texte fourni.

## Exemple

Voir [cette réponse proposée sur StackOverflow](http://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435).

## Spécification

Ne fait partie d'aucune spécification. Discussion de la norme : [whatwg/html#668](https://github.com/whatwg/html/issues/668).

Microsoft en a publié [une description sur MSDN](<https://msdn.microsoft.com/en-us/library/ms534311(v=vs.85).aspx>).

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.outerText")}}

## Voir aussi

- {{domxref("Node.innerText")}}
- {{domxref("Element.outerHTML")}}
