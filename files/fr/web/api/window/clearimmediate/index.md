---
title: "Window : méthode clearImmediate()"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

Le méthode **`clearImmediate()`** de l'interface {{DOMxRef("Window")}} efface l'action définie par {{DOMxRef("window.setImmediate()")}}.

## Syntaxe

```js-nolint
clearImmediate(immediateID)
```

### Paramètres

- `immediateID`
  - : L'identifiant retourné par la méthode {{DOMxRef("window.setImmediate()")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
let immediateID = setImmediate(() => {
  // Exécute du code
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Spécifications

Ne fait partie d'aucune spécification actuelle.
La spécification [Efficient Script Yielding <sup>(angl.)</sup>](https://w3c.github.io/setImmediate/#si-setImmediate) n'est plus en cours de développement.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `clearImmediate` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#setimmediate)
- La méthode {{DOMxRef("Window.setImmediate()")}}
