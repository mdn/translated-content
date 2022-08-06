---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/reduceRight
---
{{JSRef}}

La méthode **`reduceRight()`** applique une fonction sur un accumulateur et chaque valeur du tableau typé (de la droite vers la gauche) afin de réduire le tableau en une seule valeur. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.reduceRight()")}}. Dans le reste de cet article _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Syntaxe

```js
typedarray.reduceRight(callback[, valeurInitiale])
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
      - : Le tableau typé pour lequel `reduceRight` a été appelée.

- `valeurInitiale`
  - : Paramètre optionnel qui correspond à l'objet à utiliser en tant que premier argument pour le premier appel à `callback`.

### Valeur de retour

La valeur obtenue à partir de la réduction du tableau typé.

## Description

La méthode `reduceRight` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau typé (les éléments vides ou supprimés ne sont pas traités). La fonction `callback` utilise quatre arguments : la valeur initiale ou la valeur précédemment calculée, la valeur de l'élément courant, l'indice de l'élément courant et le tableau typé qui est parcouru.

L'appel à `reduceRight` utilisant la fonction `callback` ressemble à :

```js
typedarray.reduceRight(function(valeurPrécédente, valeurCourante, index, typedarray) {
  // ...
});
```

Lors du premier appel à la fonction callback, `valeurPrécédente` et `valeurCourante` peuvent être un ou deux valeurs différentes. Si `valeurInitiale` est fournie, `valeurPrécédente` sera alors égale à `valeurInitiale` et `valeurCourante` sera égale à la première valeur du tableau. Si le paramètre `valeurInitiale` n'est pas utilisé, `valeurPrécédente` sera égale au premier élément du tableau typé et `valeurCourante` sera égale au second élément.

Si le tableau typé est vide et que le paramètre `valeurInitiale` n'a pas été fourni, une exception {{jsxref("TypeError")}} sera levée. SI le tableau typé ne possède qu'un seul élément et que `valeurInitiale` n'a pas été fourni (ou que `valeurInitiale` a été utilisée mais que le tableau typé est vide), la valeur unique sera renvoyée et `callback` ne sera pas appelée.

## Exemples

```js
var total = new Uint8Array([0, 1, 2, 3]).reduceRight(function(a, b) {
  return a + b;
});
// total == 6
```

## Spécifications

| Spécification                                                                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-%typedarray%.prototype.reduceRight', '%TypedArray%.prototype.reduceRight')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.reduceRight', '%TypedArray%.prototype.reduceRight')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.reduceRight")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
