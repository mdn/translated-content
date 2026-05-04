---
title: "Window : propriété closed"
short-title: closed
slug: Web/API/Window/closed
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef}}

La propriété en lecture seule **`closed`** de l'interface {{DOMxRef("Window")}} indique si la fenêtre référencée est fermée ou non.

## Valeur

Une valeur booléenne. Valeurs possibles&nbsp;:

- `true`&nbsp;: La fenêtre a été fermée.
- `false`&nbsp;: La fenêtre est ouverte.

## Exemples

### Changer l'URL d'une fenêtre depuis une fenêtre contextuelle

L'exemple suivant montre comment une fenêtre contextuelle peut changer l'URL de la fenêtre qui l'a ouverte. Avant d'essayer de changer l'URL, il vérifie que la fenêtre courante a un opener à l'aide de la propriété {{DOMxRef("window.opener")}} et que l'opener n'est pas fermé&nbsp;:

```js
// Vérifie qu'un opener existe et n'est pas fermé
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "https://www.mozilla.org";
}
```

Notez que les fenêtres contextuelles ne peuvent accéder qu'à la fenêtre qui les a ouvertes.

### Rafraîchir une fenêtre contextuelle ouverte précédemment

Dans cet exemple, la fonction `refreshPopupWindow()` appelle la méthode `reload()` de l'objet location de la fenêtre contextuelle pour rafraîchir ses données. Si la fenêtre contextuelle n'a pas encore été ouverte ou si l'utilisateur·ice l'a fermée, une nouvelle fenêtre est ouverte.

```js
let popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // La fenêtre contextuelle est ouverte, on la rafraîchit
    popupWindow.location.reload(true);
  } else {
    // Ouvre une nouvelle fenêtre contextuelle
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
