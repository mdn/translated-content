---
title: "Window : méthode resizeBy()"
short-title: resizeBy()
slug: Web/API/Window/resizeBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

La méthode **`resizeBy()`** de l'interface {{DOMxRef("Window")}} redimensionne la fenêtre actuelle à une taille définie.

## Syntaxe

```js-nolint
resizeBy(xDelta, yDelta)
```

### Paramètres

- `xDelta`
  - : Le nombre de pixels pour agrandir la fenêtre horizontalement.
- `yDelta`
  - : Le nombre de pixels pour agrandir la fenêtre verticalement.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
// Réduit la fenêtre
window.resizeBy(-200, -200);
```

## Notes

Cette méthode redimensionne la fenêtre par rapport à sa taille actuelle. Pour redimensionner la fenêtre en termes absolus, utilisez {{DOMxRef("window.resizeTo()")}}.

### Créer et redimensionner une fenêtre externe

Pour des raisons de sécurité, il n'est plus possible dans Firefox pour un site Web de modifier la taille par défaut d'une fenêtre dans un navigateur si la fenêtre n'a pas été créée par `window.open()` ou contient plusieurs onglets. Consultez le tableau de compatibilité pour plus de détails sur le changement.

Même si vous créez une fenêtre avec `window.open()` **elle n'est pas redimensionnable par défaut.** Pour rendre la fenêtre redimensionnable, vous devez l'ouvrir avec le paramètre `"resizable"` .

```js
// Créer une fenêtre redimensionnable
myExternalWindow = window.open(
  "http://myurl.domain",
  "myWindowName",
  "resizable",
);

// Redimensionner la fenêtre à 500 x 500
myExternalWindow.resizeTo(500, 500);

// Rendre la fenêtre relativement plus petit à 400 x 400
myExternalWindow.resizeBy(-100, -100);
```

La fenêtre que vous créez doit respecter la politique de même origine. Si la fenêtre que vous ouvrez n'est pas dans la même origine que la fenêtre actuelle, vous ne pourrez pas redimensionner ni accéder aux informations sur cette fenêtre / cet onglet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
> Cette fonction pourrait ne pas redimensionner la fenêtre de manière synchrone.
> Dans certains environnements (comme les mobiles), elle pourrait ne pas redimensionner la fenêtre du tout. Vous pouvez écouter l'évènement {{DOMxRef("Window/resize_event", "resize")}} pour voir si/quand la fenêtre a été redimensionnée.
