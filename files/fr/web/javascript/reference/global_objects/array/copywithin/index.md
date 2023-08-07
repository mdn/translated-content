---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

La méthode **`copyWithin()`** effectue une copie superficielle (_shallow copy_) d'une partie d'un tableau sur ce même tableau et le renvoie, sans modifier sa taille.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntaxe

```js
arr.copyWithin(cible);
arr.copyWithin(cible, début);
arr.copyWithin(cible, début, fin);
```

### Paramètres

- `cible`

  - : Indice à partir duquel la séquence sera copiée. Si la valeur est négative, `cible` sera compté à partir de la fin du tableau.

    Si `cible` est supérieur ou égal à `arr.length`, rien ne sera copié. Si `cible` est positionné apès `début`, la séquence copiée sera réduite pour correspondre à `arr.length`.

- `début` {{optional_inline}}
  - : Indice de début de la séquence a copier. Si la valeur est négative, `début` sera compté à partir de la fin du tableau. Si `début` est omis, `copyWithin` copiera à partir du début du tableau (par défaut 0).
- `fin` {{optional_inline}}
  - : Indice de fin de la séquence a copier. `copyWithin` copie jusqu'à `fin` (non-inclusif). Si la valeur est négative, `end` sera compté à partir de la fin du tableau. Si `end` est omis, `copyWithin` copiera jusqu'à la fin du tableau (par défaut `arr.length`).

### Valeur de retour

Le tableau modifié par la méthode.

## Description

La fonction `copyWithin()` fonctionne de la même façon que `memmove` en C/C++. C'est une méthode très performante pour décaler les données d'un {{jsxref("Array")}} ou d'un {{jsxref("TypedArray")}} (dans ce cas, on pourra utiliser {{jsxref("TypedArray/copyWithin", "TypedArray.copyWithin()")}}). La séquence est copiée et collée en une opération. La séquence collée aura les valeurs copiées même si les zones de copiage et de collage se chevauchent.

La fonction `copyWithin()` est intentionnellement générique, il n'est pas nécessaire que `this` soit un objet {{jsxref("Array", "Array")}}.

De plus, `copyWithin()` est une méthode qui modifie l'objet courant. Elle ne modifie pas la longueur de `this`, mais change son contenu et créé de nouvelles propriétés si nécessaire.

## Exemples

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// Les tableaux typés ES2015 sont des sous-classes d'Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// Sur les plates-formes qui ne supportent pas encore ES2015 :
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Prothèse d'émulation (_polyfill_)

Cette méthode a été ajoutée à la spécification ECMAScript 6 et peut ne pas être utilisable dans tous les environnements. Voici un fragment de code qui permet d'émuler cette méthode :

```js
if (!Array.prototype.copyWithin) {
  Object.defineProperty(Array.prototype, "copyWithin", {
    value: function (target, start /*, end*/) {
      // Steps 1-2.
      if (this == null) {
        throw new TypeError("this is null or not defined");
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-8.
      var relativeTarget = target >> 0;

      var to =
        relativeTarget < 0
          ? Math.max(len + relativeTarget, 0)
          : Math.min(relativeTarget, len);

      // Steps 9-11.
      var relativeStart = start >> 0;

      var from =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);

      // Steps 12-14.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);

      // Step 15.
      var count = Math.min(final - from, len - to);

      // Steps 16-17.
      var direction = 1;

      if (from < to && to < from + count) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }

      // Step 18.
      while (count > 0) {
        if (from in O) {
          O[to] = O[from];
        } else {
          delete O[to];
        }

        from += direction;
        to += direction;
        count--;
      }

      // Step 19.
      return O;
    },
    configurable: true,
    writable: true,
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array", "Array")}}
