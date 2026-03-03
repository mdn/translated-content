---
title: "HTMLSelectElement : méthode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLSelectElement/namedItem
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("HTML DOM")}}

La méthode **`namedItem()`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne un objet {{DOMxRef("HTMLOptionElement")}} correspondant à l'élément {{DOMxRef("HTMLOptionElement")}} dont le `name` ou l'`id` correspond au nom défini, ou `null` si aucune option ne correspond.

En JavaScript, utiliser `selectElt.namedItem('value')` est équivalent à `selectElt.options.namedItem('value')`.

## Syntaxe

```js-nolint
namedItem(str)
```

### Paramètres

- `str`
  - : Une chaîne de caractères représentant le `name` ou l'`id` de l'option.

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
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.namedItem("o1"); // Retourne l'objet HTMLOptionElement représentant #o1
```

Mais, vous ne pouvez pas écrire&nbsp;:

```js
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.o1; // Retourne undefined
elem1 = selectElt["o1"]; // Retourne undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLSelectElement")}} qui l'implémente.
