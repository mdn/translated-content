---
title: "Number : propriété statique POSITIVE_INFINITY"
short-title: POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Number.POSITIVE_INFINITY`** représente la valeur d'infini positif.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.POSITIVE_INFINITY")}}

```js interactive-example
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return "Représente un nombre comme Infinity";
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Résultat attendu : 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Résultat attendu : "Représente un nombre comme Infinity"
```

## Valeur

La même que la valeur de la propriété native {{JSxRef("Infinity")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

La valeur `Number.POSITIVE_INFINITY` se comporte légèrement différemment de l'infini au sens mathématique&nbsp;:

- Toute valeur positive, y compris `POSITIVE_INFINITY`, multipliée par `POSITIVE_INFINITY` est `POSITIVE_INFINITY`.
- Toute valeur négative, y compris {{JSxRef("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multipliée par `POSITIVE_INFINITY` est {{JSxRef("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Tout nombre positif divisé par `POSITIVE_INFINITY` est [zéro positif <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Signed_zero) (comme défini dans [IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/IEEE_754)).
- Tout nombre négatif divisé par `POSITIVE_INFINITY` est [zéro négatif <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Signed_zero) (comme défini dans [IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/IEEE_754)).
- Le zéro multiplié par `POSITIVE_INFINITY` est {{JSxRef("NaN")}}.
- {{JSxRef("NaN")}} multiplié par `POSITIVE_INFINITY` est {{JSxRef("NaN")}}.
- `POSITIVE_INFINITY`, divisé par toute valeur négative sauf {{JSxRef("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, est {{JSxRef("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY`, divisé par toute valeur positive sauf `POSITIVE_INFINITY`, est `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divisé par {{JSxRef("Number/NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} ou `POSITIVE_INFINITY`, est {{JSxRef("NaN")}}.
- `Number.POSITIVE_INFINITY > x` est vrai pour tout nombre _x_ qui n'est pas `POSITIVE_INFINITY`.

Vous pouvez utiliser la propriété `Number.POSITIVE_INFINITY` pour indiquer une condition d'erreur qui retourne un nombre fini en cas de succès. Notez, cependant, que {{JSxRef("NaN")}} est plus approprié dans un tel cas.

Comme `POSITIVE_INFINITY` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.POSITIVE_INFINITY`, plutôt que comme une propriété d'une valeur numérique.

## Exemples

### Utiliser `POSITIVE_INFINITY`

Dans l'exemple qui suit, la variable `grandNombre` se voit affecter une valeur supérieure à la valeur maximale. Lorsque l'instruction {{JSxRef("Statements/if...else", "if")}} s'exécute, `grandNombre` a la valeur `Infinity`, donc `grandNombre` est défini sur une valeur plus gérable avant de continuer.

```js
let grandNombre = Number.MAX_VALUE * 2;

if (grandNombre == Number.POSITIVE_INFINITY) {
  grandNombre = retournerUnNombreFini();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique {{JSxRef("Number.NEGATIVE_INFINITY")}}
- La méthode statique {{JSxRef("Number.isFinite()")}}
- La propriété native {{JSxRef("Infinity")}}
- La fonction native {{JSxRef("isFinite()")}}
