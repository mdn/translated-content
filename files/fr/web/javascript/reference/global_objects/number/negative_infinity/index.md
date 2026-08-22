---
title: "Number : propriété statique NEGATIVE_INFINITY"
short-title: NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Number.NEGATIVE_INFINITY`** représente la valeur d'infini négatif.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.NEGATIVE_INFINITY")}}

```js interactive-example
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return "Représente le nombre comme -Infinity";
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// Sortie attendue : -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// Sortie attendue : "Représente le nombre comme -Infinity"
```

## Valeur

La même que la valeur négative de la propriété native {{JSxRef("Infinity")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

La valeur `Number.NEGATIVE_INFINITY` se comporte légèrement différemment de l'infini mathématique&nbsp;:

- Toute valeur positive, y compris {{JSxRef("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multipliée par `NEGATIVE_INFINITY` est `NEGATIVE_INFINITY`.
- Toute valeur négative, y compris `NEGATIVE_INFINITY`, multipliée par `NEGATIVE_INFINITY` est {{JSxRef("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Toute valeur positive divisée par `NEGATIVE_INFINITY` est un [zéro négatif <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Signed_zero) (comme défini dans [IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/IEEE_754)).
- Toute valeur négative divisée par `NEGATIVE_INFINITY` est un [zéro positif <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Signed_zero) (comme défini dans [IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/IEEE_754)).
- Zéro multiplié par `NEGATIVE_INFINITY` est {{JSxRef("NaN")}}.
- {{JSxRef("NaN")}} multiplié par `NEGATIVE_INFINITY` est {{JSxRef("NaN")}}.
- `NEGATIVE_INFINITY`, divisé par toute valeur négative sauf `NEGATIVE_INFINITY`, est {{JSxRef("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY`, divisé par toute valeur positive sauf {{JSxRef("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, est `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divisé par soit `NEGATIVE_INFINITY` ou {{JSxRef("Number/POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, est {{JSxRef("NaN")}}.
- `x > Number.NEGATIVE_INFINITY` est vrai pour tout nombre _x_ qui n'est pas `NEGATIVE_INFINITY`.

Vous pouvez utiliser la propriété `Number.NEGATIVE_INFINITY` pour indiquer un état d'erreur qui retourne un nombre fini en cas de succès. Notez, cependant, que {{JSxRef("NaN")}} est plus approprié dans un tel cas.

Puisque `NEGATIVE_INFINITY` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.NEGATIVE_INFINITY`, plutôt que comme propriété d'une valeur numérique.

## Exemples

Dans l'exemple qui suit, la variable `petitNombre` se voit affecter une valeur inférieure à la valeur minimale. Lorsque l'instruction {{JSxRef("Statements/if...else", "if")}} est exécutée, `petitNombre` a la valeur `-Infinity`, donc `petitNombre` est défini sur une valeur plus gérable avant de continuer.

```js
let petitNombre = -Number.MAX_VALUE * 2;

if (petitNombre === Number.NEGATIVE_INFINITY) {
  petitNombre = retournerUneValeurFinie();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique {{JSxRef("Number.POSITIVE_INFINITY")}}
- La méthode statique {{JSxRef("Number.isFinite()")}}
- La valeur native {{JSxRef("Infinity")}}
- La fonction native {{JSxRef("isFinite()")}}
