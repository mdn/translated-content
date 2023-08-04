---
title: "RangeError: radix must be an integer"
slug: Web/JavaScript/Reference/Errors/Bad_radix
---

{{jsSidebar("Errors")}}

## Message

```
RangeError: invalid argument (Edge)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
RangeError: toString() radix argument must be between 2 and 36 (Chrome)
```

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

C'est le paramètre utilisé avec la méthode {{jsxref("Number.prototype.toString()")}} ou avec la méthode {{jsxref("BigInt.prototype.toString()")}} pour indiquer la base de conversion qui est en cause. Ce paramètre, optionnel, doit être un nombre entier, compris entre 2 et 36 qui inique la base du système numérique dans lequel on veut représenter les valeurs numériques.

Pourquoi limiter la base à 36 ? Lorsqu'une base est supérieure à 10, on utilise les caractères de l'alphabet pour représenter les chiffres. Or, l'alphabet latin ne possède que 26 caractères. En utilisant donc les 10 chiffres arabes et ces caractères, on possède 36 caractères pour représenter les chiffres d'un nombre.

Généralement, on emploie cette méthode avec des bases fréquemment utilisées :

- 2 pour [les nombres binaires](https://fr.wikipedia.org/wiki/Système_binaire),
- 8 pour [les nombres octaux](https://fr.wikipedia.org/wiki/Système_octal),
- 10 pour [les nombres décimaux](https://fr.wikipedia.org/wiki/Système_décimal),
- 16 pour [les nombres hexadécimaux](https://fr.wikipedia.org/wiki/Système_hexadécimal).

## Examples

### Exemples invalides

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// On ne peut pas utiliser une telle
// chaîne pour du formatage :
(12071989).toString("MM-dd-yyyy");
```

### Exemples valides

```js example-good
(42).toString(2); // "101010" (binary)
(13).toString(8); // "15"     (octal)
(0x42).toString(10); // "66"     (decimal)
(100000).toString(16); // "186a0"  (hexadecimal)
```

## Voir aussi

- {{jsxref("Number.prototype.toString()")}}
