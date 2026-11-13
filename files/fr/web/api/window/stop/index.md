---
title: "Window : méthode stop()"
short-title: stop()
slug: Web/API/Window/stop
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La méthode **`stop()`** de l'interface {{DOMxRef("Window")}} arrête le chargement des ressources supplémentaires dans le contexte de navigation actuel, ce qui équivaut au bouton d'arrêt dans le navigateur.

Puisque les scripts sont exécutés de cette manière, cette méthode ne peut pas interrompre le chargement de son document parent, mais elle arrête ses images, nouvelles fenêtres et autres objets en cours de chargement.

## Syntaxe

```js-nolint
stop()
```

### Paramètres

Aucun.

### Valeur de retour

Aucun ({{JSxRef("undefined")}}).

## Exemples

```js
window.stop();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
