---
title: element.click
slug: Web/API/HTMLElement/click
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/click
---
{{ ApiRef() }}

## Résumé

La méthode **click** simule un clic sur un élément.

## Syntaxe

    element.click()

## Notes

Lorsque la méthode `click` est utilisée sur des éléments où elle est gérée (par exemple un {{HTMLElement("input")}}), elle déclenche également l'évènement `click` de l'élément qui se propagera aux éléments situés plus haut dans l'arbre du document (ou la chaîne évènementielle) et déclenchera aussi leurs évènements `click`. Cependant, la propagation d'un évènement `click` ne déclenchera pas la navigation à partir d'un élément {{HTMLElement("a")}} comme si un vrai clic de souris avait été reçu.

Au moment où sont écrites ces lignes (Opera Next est à la version 12.11), la méthode `click` d'Opera **sera ignorée silencieusement**, si executée sur un élément {{HTMLElement("input")}} avec un type "file", et une propriété [CSS](/fr/docs/CSS) {{cssxref('display')}} à "none".

{{gecko_callout_heading("5.0")}}

Avant Gecko 5.0 {{geckoRelease("5.0")}}, Gecko supportait la méthode `click` qu'avec des éléments {{HTMLElement("input")}} de type
_button_
,
_checkbox_
,
_radio_
,
_reset_
ou
_submit_
. Gecko n'implémentait pas la méthode `click` sur d'autres éléments qui auraient pu répondre à des clics de souris comme les liens (éléments {{HTMLElement("a")}}), et ne déclenchait pas nécessairement l'évènement click d'autres éléments.

Cependant, maintenant Gecko supporte la méthode sur tous les éléments comme requis par [HTML5](/fr/docs/HTML/HTML5).

D'autres implémentations du DOM peuvent se comporter différemment.

## Spécifications

| Spécification                                                                                                                                                                 | Statut                       | Commentaires |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('DOM2 HTML', 'html.html#ID-2651361')}} — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2/html/html.html#ID-2651361) (non normative) | {{Spec2('DOM2 HTML')}} |              |

## Compatibilité des navigateurs

p>{{Compat("api.HTMLElement.click")}}

## Voir aussi

- Gestionnaires d'événements liés

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
  - {{domxref("GlobalEventHandlers.onauxclick")}}
