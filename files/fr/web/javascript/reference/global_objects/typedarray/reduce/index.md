---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
---

{{JSRef}}

La méthode **`reduce()`** applique une fonction sur un accumulateur et chaque valeur du tableau typé (de la gauche vers la droite) afin de réduire le tableau en une seule valeur. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.reduce()")}}. Dans le reste de cet article _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntaxe

```js
typedarray.reduce(callback[, valeurInitiale])
```

### Paramètres

- `callback`

  - : La fonction à exécuter sur chaque valeur du tableau typé. Elle utilise quatre arguments :

    - `valeurPrécédente`
      - : La valeur renvoyée précédemment par l'appel précédent à `callback`. Dans le cadre du premier élément, ce sera `valeurInitiale` si ce paramètre est fourni (voir ci-après).
    - `valeurCourante`
      - : L'élément du tableau typé en cours de traitement
    - `index`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `array`
      - : Le tableau typé pour lequel `reduce` a été appelée.

- `valeurInitiale`
  - : Paramètre optionnel qui correspond à l'objet à utiliser en tant que premier argument pour le premier appel à `callback`.

### Valeur de retour

La valeur obtenue à partir de la réduction du tableau typé.

## Description

`reduce` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau typé (les éléments vides ou supprimés ne sont pas traités). La fonction `callback` utilise quatre arguments : la valeur initiale ou la valeur précédemment calculée, la valeur de l'élément courant, l'indice de l'élément courant et le tableau typé qui est parcouru.

Lors du premier appel à la fonction callback, `valeurPrécédente` et `valeurCourante` peuvent être un ou deux valeurs différentes. Si `valeurInitiale` est fournie, `valeurPrécédente` sera alors égale à `valeurInitiale` et `valeurCourante` sera égale à la première valeur du tableau. Si le paramètre `valeurInitiale` n'est pas utilisé, `valeurPrécédente` sera égale au premier élément du tableau typé et `valeurCourante` sera égale au second élément.

Si le tableau typé est vide et que le paramètre `valeurInitiale` n'a pas été fourni, une exception {{jsxref("TypeError")}} sera levée. SI le tableau typé ne possède qu'un seul élément et que `valeurInitiale` n'a pas été fourni (ou que `valeurInitiale` a été utilisée mais que le tableau typé est vide), la valeur unique sera renvoyée et `callback` ne sera pas appelée.

## Exemples

```js
var total = new Uint8Array([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
// total == 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
