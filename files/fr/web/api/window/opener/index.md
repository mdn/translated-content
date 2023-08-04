---
title: Window.opener
slug: Web/API/Window/opener
---

{{APIRef("HTML DOM")}}

La propriété **`opener`**, rattachée à l'interface [`Window`](/fr/docs/Web/API/Window), renvoie une référence à la fenêtre ayant ouvert la fenêtre courante, que ce soit avec [`open()`](/fr/docs/Web/API/Window/open), ou via une navigation avec un lien doté d'un attribut [`target`](/fr/docs/Web/HTML/Element/a#attr-target).

Autrement dit, si la fenêtre `A` ouvre la fenêtre `B`, `B.opener` renvoie `A`.

## Valeur

Un objet semblable à un objet [`Window`](/fr/docs/Web/API/Window) qui fait référence à la fenêtre ayant ouvert la fenêtre courante (avec [`window.open()`](/fr/docs/Web/API/Window/open), ou avec un lien doté d'un attribut [`target`](/fr/docs/Web/HTML/Element/a#attr-target)). Si la fenêtre n'a pas été ouverte par un lien ou créée par une autre fenêtre, la propriété renvoie [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null).

Si l'ouvreur n'a pas la même origine que la page courante, les fonctionnalités de cet objet seront limitées. Ainsi, les variables et fonction associés à l'objet `window` ne seront pas accessibles. Toutefois, la navigation vers la fenêtre ouvrante est possible, autrement dit que la fenêtre ouverte peut ouvrir une URL dans l'onglet ou la fenêtre d'origine. Dans certains cas, cela peut permettre de l'hameçonnage où une page de confiance, ouverte par la fenêtre originale est remplacée par une page d'hameçonnage par la page nouvellement ouverte.

Dans les cas suivants, le navigateur ne renseigne pas `window.opener`, mais le laisse à [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null)&nbsp;:

- Si [`rel="noopener"`](/fr/docs/Web/HTML/Element/a#attr-rel) est présent sur le lien ou si on a passé `noopener` via le paramètre [`windowFeatures`](/fr/docs/Web/API/Window/open).
- Si la fenêtre a été ouverte avec un lien dont l'attribut [`target`](/fr/docs/Web/HTML/Element/a#attr-target) vaut `_blank`, à moins qu'il ait été explicitement demandé avec with [`rel="opener"`](/fr/docs/Web/HTML/Element/a#attr-rel).
- Si l'en-tête [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) possède la valeur `same-origin`. La nouvelle fenêtre étant chargée dans un contexte de navigation différent, elle n'aura pas de référence à la fenêtre ouvrante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
