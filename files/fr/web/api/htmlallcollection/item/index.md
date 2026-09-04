---
title: "HTMLAllCollection : méthode item()"
short-title: item()
slug: Web/API/HTMLAllCollection/item
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}

La méthode **`item()`** de l'interface {{DOMxRef("HTMLAllCollection")}} retourne l'élément situé au décalage défini dans la collection, ou l'élément dont la valeur de l'attribut `id` ou `name` correspond à la chaîne de caractères donnée.

## Syntaxe

```js-nolint
item(nameOrIndex)
```

### Paramètres

- `nameOrIndex`
  - : Si ce paramètre est un entier, ou une chaîne de caractères pouvant être convertie en entier, il représente alors la position de l'objet {{DOMxRef("Element")}} à retourner. Les éléments apparaissent dans une `HTMLAllCollection` dans le même ordre qu'ils apparaissent dans le code source du document. Si le paramètre est une chaîne de caractères qui ne peut pas être convertie en entier, il sera interprété comme le `name` ou `id` de l'élément à retourner.

### Valeur de retour

Si `nameOrIndex` représente un index, `item()` retourne l'objet {{DOMxRef("Element")}} à l'index défini, ou `null` si `nameOrIndex` est inférieur à zéro ou supérieur ou égal à la propriété `length`. Si `nameOrIndex` représente un nom, `item()` retourne la même valeur que {{DOMxRef("HTMLAllCollection/namedItem", "namedItem()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLCollection.item()")}}
