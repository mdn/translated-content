---
title: WindowOrWorkerGlobalScope.clearInterval()
slug: Web/API/clearInterval
tags:
  - API
  - Méthode
  - Reference
  - WindowOrWorkerGlobalScope
  - clearInterval
translation_of: Web/API/WindowOrWorkerGlobalScope/clearInterval
original_slug: Web/API/WindowOrWorkerGlobalScope/clearInterval
---
{{APIRef("HTML DOM")}}

La méthode **`clearInterval()`**, rattachée au _mixin_ {{domxref("WindowOrWorkerGlobalScope")}}, permet d'annuler une action répétée minutée initiée via un appel à {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}}.

## Syntaxe

    scope.clearInterval(intervalID)

### Paramètres

- `intervalID`
  - : L'identifiant de l'intervalle de répétition qu'on souhaite annuler. Cet identifiant est renvoyé lorsqu'on appelle `setInterval()` pour définir l'intervalle de répétition.

On notera que l'ensemble des identifiants utilisés est commun entre ceux fournis par {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} et ceux fournis par {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}}. Cela signifie qu'on peut, techniquement, utiliser `clearInterval()` et {{domxref("WindowOrWorkerGlobalScope.clearTimeout", "clearTimeout()")}} de façon interchangeable. C'est toutefois une mauvaise pratique, qui nuit à la lisibilité du code et à sa maintenabilité.

### Valeur de retour

{{jsxref("undefined")}}

## Exemples

Voir [l'exemple `setInterval()`](/fr/docs/Web/API/WindowTimers/setInterval#Exemples).

## Spécifications

| Spécification                                                                                                                                    | État                             | Commentaires                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-clearinterval', 'WindowOrWorkerGlobalScope.clearInterval()')}} | {{Spec2("HTML WHATWG")}} | Cette méthode a été déplacée sur le _mixin_ `WindowOrWorkerGlobalScope`. |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-clearinterval', 'clearInterval()')}}                                 | {{Spec2('HTML WHATWG')}} |                                                                          |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.clearInterval")}}

## Voir aussi

- {{domxref("WindowOrWorkerGlobalScope.setTimeout")}}
- {{domxref("WindowOrWorkerGlobalScope.setInterval")}}
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
