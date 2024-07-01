---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---

{{JSRef}}

La propriété **`Number.NEGATIVE_INFINITY`** représente l'infini négatif.

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}{{js_property_attributes(0,0,0)}}

## Description

La valeur de `Number.NEGATIVE_INFINITY` est égale à l'opposé de la valeur fournie par la propriété {{jsxref("Infinity")}} de l'objet global.

Cette valeur se comporte différemment de l'infini mathématique :

- Toute valeur positive, y compris {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multipliée par `NEGATIVE_INFINITY` sera égale à `NEGATIVE_INFINITY`.
- Toute valeur négative, y compris `NEGATIVE_INFINITY`, multipliée par `NEGATIVE_INFINITY` sera égale à `POSITIVE_INFINITY`.
- Zéro multiplié par `NEGATIVE_INFINITY` sera égal à {{jsxref("NaN")}}.
- NaN multiplié par `NEGATIVE_INFINITY` sera égal à `NaN`.
- `NEGATIVE_INFINITY`, divisé par n'importe quelle valeur négative, à l'exception de `NEGATIVE_INFINITY`, sera égal à `POSITIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divisé par n'importe quelle valeur positive à l'exception de `POSITIVE_INFINITY`, sera égal à `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divisé par `NEGATIVE_INFINITY` ou `POSITIVE_INFINITY`, sera égal à `NaN`.
- Tout nombre positif divisé par `NEGATIVE_INFINITY` sera égal au zéro négatif.
- Tout nombre négatif divisé par `NEGATIVE_INFINITY` sera égal au zéro positif.

La propriété `Number.NEGATIVE_INFINITY` peut être utilisée pour indiquer une erreur sur un test renvoyant normalement un nombre fini. On notera cependant que la méthode {{jsxref("isFinite")}} est plus pertinente dans ce cas.

`Number.NEGATIVE_INFINITY` est une propriété statique de {{jsxref("Number")}} et on utilisera directement `Number.NEGATIVE_INFINITY` plutôt que comme une propriété d'un objet (instance) {{jsxref("Number")}}.

## Exemples

Dans l'exemple qui suit, on affecte une variable inférieure à la valeur numérique minimale à la variable `petitNombre`. Lorsque l'instruction conditionnelle `if` est exécutée, `petitNombre` possède la valeur "`-Infinity`", on modifie donc la valeur de `petitNombre` afin qu'il puisse être géré.

```js
var petitNombre = -Number.MAX_VALUE * 2;

if (petitNombre === Number.NEGATIVE_INFINITY) {
  petitNombre = renvoyerUneValeurFinie();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity", "Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
