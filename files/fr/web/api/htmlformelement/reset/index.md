---
title: "HTMLFormElement : méthode reset()"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`reset()`** de l'interface {{DOMxRef("HTMLFormElement")}} restaure les valeurs par défaut d'un élément de formulaire. Cette méthode a le même effet que le clic sur le contrôle [`<input type="reset">`](/fr/docs/Web/HTML/Reference/Elements/input/reset) du formulaire.

Si un contrôle de formulaire (comme un bouton de réinitialisation) a pour nom ou un identifiant <i lang="en">reset</i>, il masquera la méthode de réinitialisation du formulaire. Il ne réinitialise pas d'autres attributs dans l'entrée, tels que `disabled`.

Notez que si {{DOMxRef("Element.setAttribute", "setAttribute()")}} est appelé pour définir la valeur d'un attribut particulier, un appel ultérieur à `reset()` ne réinitialisera pas l'attribut à sa valeur par défaut, mais plutôt le conservera à la valeur que l'appel {{DOMxRef("Element.setAttribute", "setAttribute()")}} lui a attribuée.

## Syntaxe

```js-nolint
reset()
```

### Paramètres

Aucun.

### Valeur de retour

Aucun ({{JSxRef("undefined")}}).

## Exemple

```js
document.getElementById("myform").reset();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
