---
title: Window.stop()
slug: Web/API/Window/stop
---

{{APIRef}}

**`window.stop()`** arrête le chargment des ressources supplémentaires dans le contexte de navigation actuel, ce qui équivaut au bouton d'arrêt dans le navigateur.

En raison de la manière dont les scripts sont exécutés, cette méthode ne peut pas interrompre le chargement de son document parent, mais elle arrêtera ses images, nouvelles fenêtres et autres objets en cours de chargement.

## Syntaxe

```js
window.stop();
```

## Exemple

```js
window.stop();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
