---
title: "Element : méthode remove()"
short-title: remove()
slug: Web/API/Element/remove
l10n:
  sourceCommit: 04abc9f51d485a5ad2c4c59bdd1511464d14e78f
---

{{APIRef("DOM")}}

La méthode **`remove()`** de l'interface {{DOMxRef("Element")}} supprime l'élément de son nœud parent.
S'il n'a pas de nœud parent, l'appel à `remove()` ne fait rien.

## Syntaxe

```js-nolint
remove()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Utiliser `remove()`

```html
<div id="div-01">Voici div-01</div>
<div id="div-02">Voici div-02</div>
<div id="div-03">Voici div-03</div>
```

```js
const element = document.getElementById("div-02");
element.remove(); // supprime le div avec l'identifiant 'div-02'
```

### `Element.remove()` ne fait pas partie de la portée

La méthode `remove()` ne fait pas partie de la portée créée par une instruction `with`. Voir {{JSxRef("Symbol.unscopables")}} pour plus d'informations.

```js
with (node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("CharacterData.remove()")}}
- La méthode {{DOMxRef("DocumentType.remove()")}}
