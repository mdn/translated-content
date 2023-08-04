---
title: Window.defaultStatus
slug: Web/API/Window/defaultStatus
---

{{ APIRef() }}{{deprecated_header}}

Obtient / définit le texte de la barre d'état pour la fenêtre donnée.

## Syntaxe

```js
var sMsg = window.defaultStatus;
window.defaultStatus = sMsg;
```

### Paramètres

- `sMsg` est une chaîne contenant le texte à afficher par défaut dans la barre d'état.

## Exemple

```html
<html>
  <body onload="window.defaultStatus='salut!';"/>
  <button onclick="window.confirm('Êtes-vous sûr de vouloir quitter?');">confirmer</button>
  </body>
</html>
```

## Notes

Pour définir le statut une fois la fenêtre ouverte, utilisez {{domxref("window.status")}}.

## Spécification

HTML5
