---
title: "HTMLSelectElement : méthode item()"
short-title: item()
slug: Web/API/HTMLSelectElement/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("HTML DOM")}}

La méthode **`item()`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne l'élément ({{DOMxRef("Element")}}) correspondant à l'interface {{DOMxRef("HTMLOptionElement")}} dont la position dans la liste des options correspond à l'indice donné en paramètre, ou `null` s'il n'y en a pas.

En JavaScript, utiliser la syntaxe de crochets de tableau avec un `unsigned long`, comme `selectElt[index]`, est équivalent à `selectElt.namedItem(index)`.

## Syntaxe

```js-nolint
item(index)
// ou collection[index]
```

### Paramètres

- `index`
  - : Un entier non négatif représentant la position de l'option dans la liste.

### Valeur de retour

Un objet {{DOMxRef("HTMLOptionElement")}} ou `null`.

## Exemples

### HTML

```html
<form>
  <select id="myFormControl">
    <option id="o1">Opt 1</option>
    <option id="o2">Opt 2</option>
  </select>
</form>
```

### JavaScript

```js
// Retourne l'objet HTMLOptionElement représentant #o2
elem1 = document.forms[0]["myFormControl"][1];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLSelectElement")}} qui l'implémente.
