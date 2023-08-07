---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---

{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaîne de caractères qui représente les éléments du tableau. Les éléments sont convertis en chaînes de caractères grâce à leurs méthodes `toLocaleString` et chacune de ces chaînes est séparée des autres avec un séparateur propre à la locale courante (par exemple une virgule ou un point).

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}

## Syntaxe

```js
arr.toLocaleString();
arr.toLocaleString(locales);
arr.toLocaleString(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}
  - : Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`. Pour plus de détails quant à la forme et l'interprétation de l'argument `locales`, on consultera la page {{jsxref("Intl")}}.
- `options` {{optional_inline}}
  - : Un objet qui contient des propriétés de configuration. Pour les nombres, consulter {{jsxref("Number.prototype.toLocaleString()")}}, pour les dates, consulter {{jsxref("Date.prototype.toLocaleString()")}}.

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau.

## Exemples

### Utiliser les arguments `locales` et `options`

Les éléments du tableau sont converties en chaînes de caractères via leurs méthodes `toLocaleString()`.

- `Object` : {{jsxref("Object.prototype.toLocaleString()")}}
- `Number` : {{jsxref("Number.prototype.toLocaleString()")}}
- `Date` : {{jsxref("Date.prototype.toLocaleString()")}}

Ici, on voit qu'on affiche le symbole de la devise de la locale pour chacun des éléments (nombres ou chaînes de caractères) du tableau `prix` :

```js
var prix = ["￥7", 500, 8123, 12];
prix.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

Pour plus d'exemples, on peut se référer aux pages {{jsxref("Intl")}}, {{jsxref("NumberFormat")}} et {{jsxref("DateTimeFormat")}}.

## Prothèse d'émulation (_polyfill_)

```js
// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, "toLocaleString", {
    value: function (locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length >>> 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ",";

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return "";
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r =
        firstElement == null
          ? ""
          : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r =
          nextElement == null
            ? ""
            : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    },
  });
}
```

S'il faut absolument prendre en charge les moteurs JavaScript qui ne supportent pas {{jsxref("Object.defineProperty()")}}, mieux vaut ne pas ajouter de prothèse pour les méthodes `Array.prototype` car elles ne peuvent pas être rendues non-énumérables.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
