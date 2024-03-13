---
title: "Attribut HTML : for"
slug: Web/HTML/Attributes/for
---

{{HTMLSidebar}}

L'attribut **`for`** est un attribut autorisé pour [`<label>`](/fr/docs/Web/HTML/Element/label) et [`<output>`](/fr/docs/Web/HTML/Element/output). Lorsqu'il est utilisé sur un élément `<label>`, il indique l'élément de formulaire que ce label décrit. Lorsqu'il est utilisé sur un élément `<output>`, il permet une relation explicite entre les éléments, qui représentent les valeurs, qui sont utilisées dans le résultat représenté par `<output>`.

## Utilisation

Lorsqu'il est utilisé comme attribut de `<label>`, l'attribut `for` a une valeur qui est l'`id` de l'élément de formulaire, auquel il se rapporte.

```html
<label for="username">Votre nom</label> <input type="text" id="username" />
```

Lorsqu'il est utilisé comme attribut de `<output>`, l'attribut `for` a une valeur qui est une liste séparée, par des espaces, des valeurs `id` des éléments, qui sont utilisés pour créer l'output.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Exemples

Voir des exemples d'utilisation sur les pages des éléments pour [`<label>`](/fr/docs/Web/HTML/Element/label) et [`<output>`](/fr/docs/Web/HTML/Element/output).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
