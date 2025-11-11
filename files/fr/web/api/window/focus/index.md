---
title: "Window : méthode focus()"
short-title: focus()
slug: Web/API/Window/focus
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Demande à placer la fenêtre au premier plan. Cette opération peut échouer selon les paramètres utilisateur et la fenêtre n'est pas garantie d'être au premier plan avant la fin de l'exécution de cette méthode.

## Syntaxe

```js-nolint
focus()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

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
