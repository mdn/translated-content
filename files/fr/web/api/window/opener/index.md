---
title: "Window : propriété opener"
short-title: opener
slug: Web/API/Window/opener
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`opener`** de l'interface {{DOMxRef("Window")}} retourne une référence à la fenêtre ayant ouvert la fenêtre courante, que ce soit avec {{DOMxRef("Window.open", "open()")}}, ou via une navigation avec un lien doté d'un attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target).

Autrement dit, si la fenêtre `A` ouvre la fenêtre `B`, `B.opener` retourne `A`.

## Valeur

Un objet semblable à un objet {{DOMxRef("Window")}} qui fait référence à la fenêtre ayant ouvert la fenêtre courante (avec {{DOMxRef("Window.open()")}}, ou avec un lien doté d'un attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target)). Si la fenêtre n'a pas été ouverte par un lien ou créée par une autre fenêtre, la propriété retourne [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null).

Si l'ouvreur n'a pas la même origine que la page courante, les fonctionnalités de cet objet seront limitées. Ainsi, les variables et fonction associés à l'objet `window` ne seront pas accessibles. Toutefois, la navigation vers la fenêtre ouvrante est possible, autrement dit que la fenêtre ouverte peut ouvrir une URL dans l'onglet ou la fenêtre d'origine. Dans certains cas, cela peut permettre de l'hameçonnage où une page de confiance, ouverte par la fenêtre originale est remplacée par une page d'hameçonnage par la page nouvellement ouverte.

Pour être exact, pour les objets opener cross-origin, les propriétés suivantes sont disponibles&nbsp;:

- {{DOMxRef("Window.window", "window")}}
- {{DOMxRef("Window.self", "self")}}
- {{DOMxRef("Window.location", "location")}}&nbsp;: avec uniquement les propriétés {{DOMxRef("Location.replace")}} et {{DOMxRef("Location.href")}} disponibles
- {{DOMxRef("Window.close", "close")}}
- {{DOMxRef("Window.closed", "closed")}}
- {{DOMxRef("Window.focus", "focus")}}
- {{DOMxRef("Window.blur", "blur")}}
- {{DOMxRef("Window.frames", "frames")}}
- {{DOMxRef("Window.length", "length")}}
- {{DOMxRef("Window.top", "top")}}
- `opener`
- {{DOMxRef("Window.parent", "parent")}}
- {{DOMxRef("Window.postMessage", "postMessage")}}
- `window[0]`, `window[1]`, etc.

De plus, il existe quelques propriétés&nbsp;: [`then`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#possibilités), {{JSxRef("Symbol/toStringTag", "[Symbol.toStringTag]")}}, {{JSxRef("Symbol/hasInstance", "[Symbol.hasInstance]")}}, {{JSxRef("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}, qui sont utilisées par diverses opérations JavaScript. Ces propriétés ont pour valeur `undefined`. Toutes les autres propriétés génèrent une `SecurityError` {{DOMxRef("DOMException")}} lorsqu'elles sont accessibles.

Dans les cas suivants, le navigateur ne renseigne pas `window.opener`, mais le laisse à [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null)&nbsp;:

- Si [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Elements/a#rel) est présent sur le lien ou si on a passé `noopener` via le paramètre [`windowFeatures`](/fr/docs/Web/API/Window/open).
- Si la fenêtre a été ouverte avec un lien dont l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target) vaut `_blank`, à moins qu'il ait été explicitement demandé avec with [`rel="opener"`](/fr/docs/Web/HTML/Reference/Elements/a#rel).
- Si l'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}} possède la valeur `same-origin`. La nouvelle fenêtre étant chargée dans un contexte de navigation différent, elle n'aura pas de référence à la fenêtre ouvrante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
