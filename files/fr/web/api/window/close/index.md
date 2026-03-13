---
title: "Window : méthode close()"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 2d37dd97bab97f39457bef2d89e7f525362d8602
---

{{APIRef}}

La méthode **`close()`** de l'interface {{DOMxRef("Window")}} ferme la fenêtre courante ou celle sur laquelle elle a été appelée.

Les fenêtres sont _fermables par script_ si elles ont été créées par du contenu web. Cela inclut généralement&nbsp;:

- Fenêtres ouvertes avec {{DOMxRef("Window.open()")}}.
- Fenêtres ouvertes via du contenu web, comme des liens (`<a target="_blank">`) ou des formulaires (`<form target="_blank">`), sans action de modification de l'utilisateur·ice.

Les fenêtres ouvertes par des actions de l'interface du navigateur — comme clic droit → Ouvrir dans un nouvel onglet, <kbd>Ctrl + clic</kbd>, <kbd>Maj + clic</kbd> ou clic du milieu — ne sont souvent pas fermables par script. Elles ne peuvent être fermées que si elles n'ont pas été naviguées (la longueur de l'historique reste 1). Appeler `close()` dans d'autres cas affiche généralement un avertissement dans la console&nbsp;: `Scripts may not close windows that were not opened by script.`

Notez également que `close()` n'a aucun effet lorsqu'elle est appelée sur des objets {{DOMxRef("Window")}} retournés par {{DOMxRef("HTMLIFrameElement.contentWindow")}}.

### Syntaxe

```js-nolint
close()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Fermeture d'une fenêtre ouverte avec `window.open()`

Cet exemple montre une méthode qui ouvre une fenêtre et une seconde qui la ferme&nbsp;; cela montre comment utiliser `Window.close()` pour fermer une fenêtre ouverte par un appel à {{DOMxRef("window.open()")}}.

```js
// Global variable to store a reference to the opened window
let openedWindow;

function openWindow() {
  openedWindow = window.open("more-info.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

## Spécifications

{{Specifications}}

## Browser compatibility

{{Compat}}
