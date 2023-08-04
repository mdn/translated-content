---
title: clearInterval()
slug: Web/API/clearInterval
---

{{APIRef("HTML DOM")}}

La méthode globale **`clearInterval()`** permet d'annuler une action répétée minutée initiée via un appel à [`setInterval()`](/fr/docs/Web/API/setInterval). Si le paramètre fourni ne permet pas d'identifier une action lancée précédemment, cette méthode n'a aucun effet.

## Syntaxe

```js
clearInterval(intervalID);
```

### Paramètres

- `intervalID`
  - : L'identifiant de l'intervalle de répétition qu'on souhaite annuler. Cet identifiant est renvoyé lorsqu'on appelle `setInterval()` pour définir l'intervalle de répétition.

On notera que l'ensemble des identifiants utilisés est commun entre ceux fournis par [`setInterval()`](/fr/docs/Web/API/setInterval) et ceux fournis par [`setTimeout()`](/fr/docs/Web/API/setTimeout). Cela signifie qu'on peut, techniquement, utiliser `clearInterval()` et [`clearTimeout()`](/fr/docs/Web/API/clearTimeout) de façon interchangeable. C'est toutefois une mauvaise pratique, qui nuit à la lisibilité du code et à sa maintenabilité.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

Voir [l'exemple `setInterval()`](/fr/docs/Web/API/setInterval#exemples).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`setTimeout`](/fr/docs/Web/API/setTimeout)
- [`setInterval`](/fr/docs/Web/API/setInterval)
- [`clearTimeout`](/fr/docs/Web/API/clearTimeout)
- [`Window.requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame)
