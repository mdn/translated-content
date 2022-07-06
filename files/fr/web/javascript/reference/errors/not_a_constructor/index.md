---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_constructor
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Une variable ou un objet a été utilisé comme un constructeur alors que cet objet ou cette variable n'est pas un constructeur. Pour plus d'informations sur les constructeurs, voir la page sur [l'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new).

De nombreux objets globaux tels que {{jsxref("String")}} ou {{jsxref("Array")}}, sont constructibles avec `new`. Cependant, d'autres objets globaux ne le sont pas (leurs propriétés et méthodes sont statiques). Les objets standards natifs suivants ne sont pas des constructeur : {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.

[Les fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Instructions/function*) ne peuvent pas non plus être utilisées comme des constructeurs.

## Exemples

### Exemples invalides

```js example-bad
var Voiture = 1;
new Voiture();
// TypeError: Voiture is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
```

### Créer un constructeur `voiture`

Imaginons qu'on veuille représenter des voitures sous forme d'objets. On appellera ce type `voiture` et on lui ajoutera des propriétés pour le fabricant, le modèle et l'année. Pour cela, on pourra écrire la fonction suivante :

```js
function Voiture(fabriquant, modèle, année) {
  this.fabriquant = fabriquant;
  this.modèle = modèle;
  this.année = année;
}
```

On peut désormais créer un objet `maVoiture` comme ceci :

```js
var maVoiture = new Voiture("Renault", "Twingo", 2006);
```

### Avec les promesses

Lorsqu'on renvoie une promesse immédiatement tenue ou rompue, il n'est pas nécessaire d'utiliser `new Promise()` pour la manipuler. Il faut plutôt utiliser les méthodes statiques {{jsxref("Promise.resolve()")}} ou {{jsxref("Promise.reject()")}} :

```js example-bad
// Dans ce cas on aura une exception
// "this is not a constructor"
return new Promise.resolve(true);
```

```js
// Cette formulation fonctionne mais
// est inutilement longue
return new Promise((resolve, reject) => { resolve(true); });

// On pourra autrement utiliser les
// méthodes statiques
return Promise.resolve(true);
return Promise.reject(false);
```

## Voir aussi

- {{Glossary("constructor")}}
- [L'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new)
