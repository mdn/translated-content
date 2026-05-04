---
title: "Window : méthode cancelAnimationFrame()"
short-title: cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
l10n:
  sourceCommit: 9bf78e9898a1bf51a67e33f8e82276fca575979d
---

{{APIRef}}

La méthode **`cancelAnimationFrame()`** de l'interface {{DOMxRef("Window")}} annule une demande de trame d'animation précédemment programmée avec un appel à {{DOMxRef("window.requestAnimationFrame()")}}.

## Syntaxe

```js-nolint
cancelAnimationFrame(requestID)
```

### Paramètres

- `requestID`
  - : L'identifiant retourné par l'appel à {{DOMxRef("window.requestAnimationFrame()")}} qui a généré la fonction de rappel.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const debut = document.timeline.currentTime;

let maRequete;

function etape(timestamp) {
  const progres = timestamp - debut;
  d.style.left = `${Math.min(progres / 10, 200)}px`;
  if (progres < 2000) {
    // c'est important de mettre à jour l'identifiant de la requête à chaque appel de requestAnimationFrame
    maRequete = requestAnimationFrame(etape);
  }
}
maRequete = requestAnimationFrame(etape);
// l'annulation utilise le dernier identifiant de requête
cancelAnimationFrame(maRequete);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.requestAnimationFrame()")}}
- La méthode {{DOMxRef("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
