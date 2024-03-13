---
title: Window.back()
slug: Web/API/Window/back
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

La méthode obsolète et non standard `back()` sur l'objet {{domxref("window")}} renvoie la fenêtre à l'élément précédent de l'historique. Il s'agissait d'une méthode spécifique à Firefox et a été supprimée dans Firefox 31.

> **Note :** Utilisez plutôt la méthode standard {{domxref("history.back")}}.

## Syntaxe

```js
window.back();
```

### Paramètres

Aucun.

### Valeur de retour

`undefined`.

## Exemple

Cet exemple simple gère un clic sur un bouton "Retour" en rappelant `back()`.

```js
function boutonRetour() {
  if (peutRevenirEnArriere) {
    window.back();
  }
}
```

## Spécification

Cela ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

Cette méthode non standard n'a été implémentée que dans Firefox et a été supprimée dans Firefox 31.

## Voir aussi

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
