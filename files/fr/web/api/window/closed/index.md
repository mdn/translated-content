---
title: window.closed
slug: Web/API/Window/closed
---

{{ ApiRef() }}

### Résumé

Cette propriété indique si la fenêtre référencée est fermée ou non.

### Syntaxe

```js
isClosed = window.closed;
```

Cette propriété est en lecture seule.

### Valeur renvoyée

- `isClosed`
  - : Un booléen. Les valeurs possibles sont&nbsp;:

<!---->

- `false`&nbsp;: La fenêtre est ouverte.
- `true`&nbsp;: La fenêtre a été fermée.

### Exemples

#### Chargement d'une page dans la fenêtre principale depuis un popup

L'exemple suivant montre comment un popup peut transmettre un choix de l'utilisateur à la fenêtre principale en y ouvrant une URL différente. Mais il faut d'abord vérifier que la fenêtre principale et encore ouverte.

```js
if (!window.opener.closed) {
  // La fenêtre principale est encore là,
  // on peut donc y charger une autre page
  window.opener.location.href = newURL;
}
```

#### Appel d'une fonction dans un popup ouvert précédemment

Dans cette exemple, la fonction `refreshPopupWindow()` appelle une fonction dans le popup pour rafraichir son contenu. Cependant, si le popup n'a pas encore été ouvert ou si l'utilisateur l'a fermé, un nouveau popup est ouvert.

```js
var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // Le popup a déjà été ouvert et il l'est encore.
    // On peut donc appeler sa fonction doRefresh().
    popupWindow.doRefresh();
  } else {
    // Il est nécessaire d'ouvrir d'abord le popup.
    popupWindow = window.open("popup.html");
  }
}
```

### Spécification

DOM Level 0. `window.closed` ne fait partie d'aucune spécification ou recommandation technique du W3C.

### Référence supplémentaire

- [window.closed sur MSDN](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/reference/properties/closed.asp)
