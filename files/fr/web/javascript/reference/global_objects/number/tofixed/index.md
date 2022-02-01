---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
tags:
  - JavaScript
  - Méthode
  - Number
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toFixed
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/toFixed
---
{{JSRef}}

La méthode **`toFixed()`** permet de formater un nombre en notation à point-fixe.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Syntaxe

    numObj.toFixed([nbChiffres])

### Paramètres

- `nbChiffres` {{optional_inline}}
  - : Le nombre de chiffres qu'on souhaite avoir après le séparateur décimal. Cette valeur peut être comprise, au sens large, entre 0 et 20. Les différentes implémentations peuvent éventuellement supporter des valeurs en dehors de cet intervalle. Si l'argument n'est pas utilisé, la valeur par défaut sera 0.

### Valeur de retour

Une chaîne de caractères qui représente le nombre indiqué avec une notation à point fixe.

### Exceptions causées

- {{jsxref("RangeError")}}
  - : Cette exception est renvoyée si `nbChiffres` est trop grand ou trop petit. Les valeurs comprises, au sens large, entre 0 et 100, n'entraîneront pas de `RangeError`. Les différentes implémentations peuvent ou non supporter des valeurs plus petites et/ou plus grandes.
- {{jsxref("TypeError")}}
  - : Cette exception est renvoyée si cette méthode est invoquée depuis un objet qui n'est pas de type numérique.

## Description

`toFixed()` renvoie une chaîne de caractères représentant `objetNumber` sans notation exponentielle et qui possède exactement `nbChiffres` pour la partie fractionnaire. Le nombre est arrondi si nécessaire et la partie fractionnaire est complétée par des zéros si nécessaire pour obtenir la longueur souhaitée. Si le `objetNumber` est supérieur ou égal à `1e+21`, la méthode utilise simplement {{jsxref("Number.prototype.toString()")}} et renvoie une chaîne en notation exponentielle.

> **Attention :** En raison du standard [IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754) qui est utilisé par JavaScript pour représenter les nombres, tous les nombres décimaux ne sont pas représentés exactement en JavaScript, ce qui peut mener à des résultats inattendus (comme `0.1 + 0.2 === 0.3` qui renvoie `false`).

## Exemples

```js
var numObj = 12345.6789;

numObj.toFixed();       // Renvoie '12346' : arrondi, aucune partie fractionnaire
numObj.toFixed(1);      // Renvoie '12345.7' : arrondi ici aussi
numObj.toFixed(6);      // Renvoie '12345.678900' : des zéros sont ajoutés
(1.23e+20).toFixed(2);  // Renvoie '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Renvoie '0.00'
2.34.toFixed(1);        // Renvoie '2.3'
-2.34.toFixed(1);       // Renvoie -2.3 (en raison de la précédence des opérateurs,
                        // les littéraux de nombres négatifs ne renvoient pas de chaînes)
2.35.toFixed(1);        // Renvoie '2.4' (arrondi supérieur)
2.55.toFixed(1);        // Renvoie '2.5' (cf. l'avertissement ci-avant)
(-2.34).toFixed(1);     // Renvoie '-2.3'
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.5', 'Number.prototype.toFixed')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.toFixed")}}

## Voir aussi

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
