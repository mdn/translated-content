---
title: Window.mozAnimationStartTime
slug: Web/API/Animation/startTime
tags:
  - API
  - HTML DOM
  - Obsolete
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/mozAnimationStartTime
original_slug: Web/API/Window/mozAnimationStartTime
---
{{APIRef("Mozilla Extensions")}}{{Non-standard_Header}}

Renvoie l'heure, en millisecondes depuis l'époque, à laquelle les animations ont commencé maintenant doivent être considérées comme ayant commencé. Cette valeur doit être utilisée à la place, par exemple, [`Date.now()`](/en/JavaScript/Reference/Global_Objects/Date/now), car cette valeur sera la même pour toutes les animations lancées dans cette fenêtre pendant cet intervalle d'actualisation, leur permettant de rester synchronisées les unes avec les autres.

Cela permet également aux animations basées sur JavaScript de rester synchronisées avec les transitions CSS et les animations SMIL déclenchées pendant le même intervalle d'actualisation.

## Syntaxe

    time = window.mozAnimationStartTime;

### Paramètres

- _`time`_ est le temps en millisecondes depuis l'époque à laquelle les animations de la fenêtre actuelle doivent être considérées comme ayant démarré.

## Compatibilité des navigateurs

{{Compat("api.Window.mozAnimationStartTime")}}

## Voir également

- {{domxref("window.mozRequestAnimationFrame()")}}
- {{domxref("window.onmozbeforepaint")}}
