---
title: get RegExp[@@species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@species
---

{{JSRef}}

La propriété accesseur **`RegExp[@@species]`** renvoie le constructeur `RegExp`.

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## Syntaxe

```js
RegExp[Symbol.species];
```

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les objets `RegExp`. Les constructeurs des sous-classes peuvent surcharger ce symbole afin de modifier l'affectation du constructeur.

## Exemples

La propriété `species` renvoie le constructeur par défaut, dans le cas des objets `RegExp`, c'est le constructeur `RegExp` :

```js
RegExp[Symbol.species]; // function RegExp()
```

Pour les objets dérivés (par exemple, une classe `MaRegExp`), la valeur de `species` sera le constructeur `MaRegExp`. Il est possible de surcharger ce comportement afin de renvoyer le constructeur parent `RegExp` :

```js
class MaRegExp extends RegExp {
  // On surcharge species pour renvoyer
  // le constructeur parent RegExp
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
