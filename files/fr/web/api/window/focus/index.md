---
title: "Window : méthode focus()"
short-title: focus()
slug: Web/API/Window/focus
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Demande à placer la fenêtre au premier plan. Cette opération peut échouer selon les paramètres utilisateur et la fenêtre n'est pas garantie d'être au premier plan avant la fin de l'exécution de cette méthode.

## Syntaxe

```js-nolint
focus()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
if (clicked) {
  window.focus();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
