---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/random
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/random
---
{{JSRef}}

La fonction **`Math.random()`** renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle `[0, 1[` (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle. La graine (_seed_) du générateur est choisie par l'algorithme et ne peut pas être choisie ou réinitialisée par l'utilisateur.

{{EmbedInteractiveExample("pages/js/math-random.html")}}

> **Note :** `Math.random()` **ne fournit pas** de nombres aléatoires propres à une cryptographie sécurisée. Les résultats de cette méthode ne doivent pas être utilisées dans des applications liées à la sécurité. À la place, on préfèrera utiliser l'API Web Crypto et plus précisément la méthode {{domxref("RandomSource.getRandomValues()", "window.crypto.getRandomValues()")}}.

## Syntaxe

    Math.random()

### Valeur de retour

Un nombre flottant pseudo-aléatoire, généré entre 0 (inclus) et 1 (exclu)

## Exemples

En JavaScript, les nombres sont représentés comme des nombres flottants selon la norme IEEE 754 et les arrondis sont pris aux plus près. Aussi, les intervalles revendiqués par les fonctions ci-après (en dehors de `Math.random()`) ne sont pas théoriquement et précisément exacts. Si on utilise des bornes supérieures très grande (2^53 ou plus), il est alors possible, dans de très rares cas, d'obtenir la borne supérieure comme résultat alors que celle-ci devrait être exclue de l'intervalle.

### Obtenir un nombre aléatoire entre 0 et 1

```js
// On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
function getRandom() {
  return Math.random();
}
```

### Obtenir un nombre aléatoire dans un intervalle

```js
// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Obtenir un entier aléatoire dans un intervalle ouvert à droite

```js
// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
```

> **Attention :** Utiliser `Math.round()` entraînerait une distribution non-uniforme et réduirait le caractère aléatoire de la méthode.

### Obtenir un entier aléatoire dans un intervalle fermé

```js
// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
```

## Spécifications

| Spécification                                                                | État                         | Commentaires                                                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0 (UNIX) et 1.1 (toutes plateformes). |
| {{SpecName('ES5.1', '#sec-15.8.2.14', 'Math.random')}}     | {{Spec2('ES5.1')}}     |                                                                                          |
| {{SpecName('ES6', '#sec-math.random', 'Math.random')}}     | {{Spec2('ES6')}}         |                                                                                          |
| {{SpecName('ESDraft', '#sec-math.random', 'Math.random')}} | {{Spec2('ESDraft')}} |                                                                                          |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.random")}}
