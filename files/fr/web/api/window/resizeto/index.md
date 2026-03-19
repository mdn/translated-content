---
title: "Window : méthode resizeTo()"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

La méthode **`resizeTo()`** de l'interface {{DOMxRef("Window")}} redimensionne dynamiquement la fenêtre.

## Syntaxe

```js-nolint
resizeTo(width, height)
```

### Paramètres

- `width`
  - : Un entier représentant la nouvelle largeur externe ({{DOMxRef("window.outerWidth", "outerWidth")}}) en
    pixels (y compris les barres de défilement, les barres de titre, etc.).
- `height`
  - : Un entier représentant la nouvelle hauteur externe ({{DOMxRef("window.outerHeight","outerHeight")}}) en pixels (y compris les barres de défilement, les barres de titre, etc.).

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cette fonction redimensionne la fenêtre de manière à ce qu'elle occupe un quart de l'écran disponible. Consultez les propriétés {{DOMxRef("Screen.availWidth")}} et {{DOMxRef("Screen.availHeight")}}.

```js
function quart() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

Note&nbsp;: Il n'est pas possible de redimensionner une fenêtre ou un onglet qui n'a pas été créé par **`window.open()`**. Il n'est également pas possible de redimensionner lorsque la fenêtre contient plusieurs onglets.

> [!NOTE]
> Cette fonction pourrait ne pas redimensionner la fenêtre de manière synchrone.
> Dans certains environnements (comme les mobiles), elle pourrait ne pas redimensionner la fenêtre du tout. Vous pouvez écouter l'évènement {{DOMxRef("Window/resize_event", "resize")}} pour voir si/quand la fenêtre a été redimensionnée.

## Voir aussi

- La méthode {{DOMxRef("window.resizeBy()")}}
