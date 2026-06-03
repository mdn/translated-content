---
title: "Window : méthode moveBy()"
short-title: moveBy()
slug: Web/API/Window/moveBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

La méthode **`moveBy()`** de l'interface {{DOMxRef("Window")}} déplace la fenêtre actuelle d'une quantité spécifiée.

> [!NOTE]
> Cette fonction déplace la fenêtre par rapport à sa position actuelle. En revanche, {{DOMxRef("window.moveTo()")}} déplace la fenêtre vers une position absolue.

## Syntaxe

```js-nolint
moveBy(deltaX, deltaY)
```

### Paramètres

- `deltaX`
  - : La quantité de pixels pour déplacer la fenêtre horizontalement.
    Les valeurs positives déplacent vers la droite, tandis que les valeurs négatives déplacent vers la gauche.
- `deltaY`
  - : La quantité de pixels pour déplacer la fenêtre verticalement. Les valeurs positives déplacent vers le bas, tandis que les valeurs négatives déplacent vers le haut.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple déplace la fenêtre de 10 pixels vers la droite et de 10 pixels vers le haut.

```js
function budge() {
  moveBy(10, -10);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

À partir de Firefox 7, les sites Web ne peuvent plus déplacer une fenêtre de navigateur [dans les cas suivants <sup>(angl.)</sup>](https://bugzil.la/565541#c24)&nbsp;:

1. Vous ne pouvez pas déplacer une fenêtre ou un onglet qui n'a pas été créé par {{DOMxRef("Window.open()")}}.
2. Vous ne pouvez pas déplacer une fenêtre ou un onglet lorsqu'il se trouve dans une fenêtre avec plus d'un onglet.

> [!NOTE]
> Cette fonction pourrait ne pas déplacer la fenêtre de manière synchrone.
> Dans certains environnements (comme Wayland ou les appareils mobiles), il se peut qu'elle ne déplace pas du tout la fenêtre. Actuellement, il n'existe aucun moyen d'écouter un évènement de déplacement, voir [Ticket #7693 du Groupe de travail CSS <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/7693).

## Voir aussi

- La méthode {{DOMxRef("Window.moveTo()")}}
