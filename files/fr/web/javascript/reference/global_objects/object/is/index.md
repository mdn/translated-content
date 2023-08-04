---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef}}

La méthode **`Object.is()`** permet de déterminer si deux valeurs sont [les mêmes](/fr/docs/Web/JavaScript/Guide/Égalité_en_JavaScript).

## Syntaxe

```js
Object.is(value1, value2);
```

### Paramètres

- `valeur1`
  - : La première valeur à comparer.
- `valeur2`
  - : La seconde valeur à comparer.

### Valeur de retour

Un booléen indiquant si les arguments ont la même valeur.

## Description

`Object.is()` permet de déterminer si deux valeurs sont [identiques](/fr/docs/Web/JavaScript/Guide/Égalité_en_JavaScript). Deux valeurs sont considérées identiques si :

- elles sont toutes les deux {{jsxref("undefined")}}
- elles sont toutes les deux {{jsxref("null")}}
- elles sont toutes les deux `true` ou toutes les deux `false`
- elles sont des chaînes de caractères de la même longueur et avec les mêmes caractères (dans le même ordre)
- elles sont toutes les deux le même objet
- elles sont des nombres et

  - sont toutes les deux égales à `+0`
  - sont toutes les deux égales à `-0`
  - sont toutes les deux égales à {{jsxref("NaN")}}
  - sont non-nulles, ne sont pas `NaN` et ont toutes les deux la même valeur

Attention, ce n'est pas la même égalité qu'avec l'opérateur {{jsxref("Opérateurs/Opérateurs_de_comparaison", "==", "#.C3.89galit.C3.A9_simple_(.3D.3D)")}}. L'opérateur == applique différentes conversions à chaque opérande (si ils ne sont pas du même type) avant de tester l'égalité (d'où le comportement `"" == false` qui donne `true`), `Object.is` ne convertit aucune des deux valeurs.

Cette égalité est également différente de l'égalité stricte qu'on peut avoir avec l'opérateur {{jsxref("Opérateurs/Opérateurs_de_comparaison", "===", "#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}. L'opérateur === (et également l'opérateur ==) considère que `-0` et `+0` sont égales et que {{jsxref("Number.NaN")}} n'est pas égal à {{jsxref("NaN")}}.

## Exemples

```js
Object.is("toto", "toto"); // true
Object.is(window, window); // true

Object.is("toto", "truc"); // false
Object.is([], []); // false

var toto = { a: 1 };
var truc = { a: 1 };
Object.is(toto, toto); // true
Object.is(toto, truc); // false

Object.is(null, null); // true

// Cas aux limites (cas spéciaux)
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```

## Prothèse d'émulation (_polyfill_)

```js
if (!Object.is) {
  Object.is = function (v1, v2) {
    // Algorithme SameValue
    if (v1 === v2) {
      //Étapes 1-5, 7-10
      //Étapes 6.b-6.b +0 !=-0
      return v1 !== 0 || 1 / v1 === 1 / v2;
    } else {
      //Étapes 6.a: NaN == NaN
      return v1 !== v1 && v2 !== v2;
    }
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide JavaScript : L'égalité en JavaScript](/fr/docs/Web/JavaScript/Guide/Égalité_en_JavaScript) qui illustre les trois manières de comparer en JavaScript
- {{jsxref("Opérateurs/Opérateurs_de_comparaison","Les opérateurs de comparaison","",1)}}
