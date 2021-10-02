---
title: Window.mozPaintCount
slug: Web/API/Window/mozPaintCount
tags:
  - API
  - API:Mozilla Extensions
  - Déprécié
  - HTML DOM
  - NeedsExample
  - Non-standard
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/mozPaintCount
---
{{APIRef("Mozilla Extensions")}}{{Non-standard_Header}}{{Obsolete_Header("Gecko72")}}{{Gecko_MinVersion_Header("2.0")}}

Renvoie le nombre de fois où le document actuel a été peint à l'écran dans cette fenêtre.

## Syntaxe

    var paintCount = window.mozPaintCount;

- `paintCount` stocke la valeur de la propriété `window.mozPaintCount`.
- La valeur `window.mozPaintCount` est `longue`, et commence à zéro lorsque le document est créé pour la première fois, en incrémentant de un à chaque fois que le document est peint.

## Spécification

Ne fait partie d'aucune spécification ou recommandation du W3C.

## Compatibilité des navigateurs

{{Compat("api.Window.mozPaintCount")}}
