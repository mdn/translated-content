---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef}}

La propriété **`length`** représente la longueur d'une chaine de caractères, exprimée en nombre de points de code UTF-16. C'est une propriété accessible en lecture seule.

{{EmbedInteractiveExample("pages/js/string-length.html")}}

## Syntaxe

```js
str.length;
```

## Description

Cette propriété renvoie le nombre de « codets » (ou unités de code ou bien _code units_ en anglais) d'une chaîne de caractères [UTF-16](https://fr.wikipedia.org/wiki/UTF-16). Le format utilisé pour représenter les chaînes de caractères en JavaScript utilise un seul codet sur 16 bits pour représenter la plupart des caractères communs. En revanche, pour représenter les caractères plus rares, deux codets seront utilisés : la valeur renvoyée par `length` ne correspondra alors pas au nombre de caractères dans la chaîne.

ECMAScript 2016 (la septième édition) établit une longueur maximale de `2^53 - 1` éléments. Auparavant, aucune longueur maximale n'était spécifiée. Pour Firefox, les chaînes ont une longueur maximale de `2^30-2` caractères (environ 1 Go). Pour les versions de Firefox antérieures à Firefox 65, la taille maximale était de de `2^28-1` (environ 256 Mo).

Pour une chaine vide, on aura `length` égal à 0.

La propriété statique `String.length` renvoie la valeur 1.

## Exemples

### Utiliser `String.length`

```js
const x = "Mozilla";
const vide = "";

console.log(x + " mesure " + x.length + " codets");
/* "Mozilla mesure 7 codets" */

console.log("La chaîne vide a une longueur de " + vide.length);
/* "La chaîne vide a une longueur de 0" */
```

### Affecter une valeur à `length`

```js
const maChaine = "Sloubi";
// Lorsqu'on tente d'affecter une valeur à la propriété length
// rien d'observable ne se produit

maChaine.length = 3;
console.log(maChaine); /* Sloubi */
console.log(maChaine.length); // 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La propriété JavaScript `String.length` et l'internationalisation des applications web](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications) (en anglais)
