---
title: "Window : méthode moveTo()"
short-title: moveTo()
slug: Web/API/Window/moveTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

La méthode **`moveTo()`** de l'interface {{DOMxRef("Window")}} déplace la fenêtre actuelle vers les coordonnées définies.

> [!NOTE]
> Cette fonction déplace la fenêtre vers un emplacement absolu. En revanche, {{DOMxRef("window.moveBy()")}} déplace la fenêtre par rapport à sa position actuelle.

## Syntaxe

```js-nolint
moveTo(x, y)
```

### Paramètres

- `x`
  - : La coordonnée horizontale vers laquelle déplacer la fenêtre.
- `y`
  - : La coordonnée verticale vers laquelle déplacer la fenêtre.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple déplace la fenêtre vers le coin supérieur gauche de l'écran.

```js
function origin() {
  window.moveTo(0, 0);
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

- La méthode {{DOMxRef("Window.moveBy()")}}
