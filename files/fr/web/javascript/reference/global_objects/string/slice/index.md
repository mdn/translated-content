---
title: "String : méthode slice()"
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`slice()`** des valeurs {{JSxRef("String")}} extrait une section de cette chaîne de caractères et la retourne comme une nouvelle chaîne de caractères, sans modifier la chaîne de caractères originale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.slice()", "taller")}}

```js interactive-example
const str = "Le rapide renard brun saute par-dessus le chien paresseux.";

console.log(str.slice(39));
// Résultat attendu : "le chien paresseux."

console.log(str.slice(3, 21));
// Résultat attendu : "rapide renard brun"

console.log(str.slice(-10));
// Résultat attendu : "paresseux."

console.log(str.slice(-16, -11));
// Résultat attendu : "chien"
```

## Syntaxe

```js-nolint
slice(indexStart)
slice(indexStart, indexEnd)
```

### Paramètres

- `indexStart`
  - : L'indice du premier caractère à inclure dans la sous-chaîne de caractères retournée.
- `indexEnd` {{Optional_Inline}}
  - : L'indice du premier caractère à exclure de la sous-chaîne de caractères retournée.

### Valeur retournée

Une nouvelle chaîne de caractères contenant la section extraite de la chaîne de caractères.

## Description

`slice()` extrait le texte d'une chaîne de caractères et retourne une nouvelle chaîne de caractères.

`slice()` extrait jusqu'à, mais sans inclure, `indexEnd`. Par exemple, `str.slice(4, 8)` extrait du cinquième caractère jusqu'au huitième caractère (caractères d'indices `4`, `5`, `6` et `7`)&nbsp;:

```plain
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| L | e |   | m | i | r | r | o | i | r |

                  i   r   r   o
                 _______________
                      ↑
                    Résultat
```

- Si `indexStart >= str.length`, une chaîne de caractères vide est retournée.
- Si `indexStart < 0`, l'indice est compté à partir de la fin de la chaîne de caractères. Plus formellement, dans ce cas, la sous-chaîne de caractères commence à `max(indexStart + str.length, 0)`.
- Si `indexStart` est omis, `undefined` ou ne peut pas être [converti en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique), il est traité comme `0`.
- Si `indexEnd` est omis ou `undefined`, ou si `indexEnd >= str.length`, `slice()` extrait jusqu'à la fin de la chaîne de caractères.
- Si `indexEnd < 0`, l'indice est compté à partir de la fin de la chaîne de caractères. Plus formellement, dans ce cas, la sous-chaîne de caractères se termine à `max(indexEnd + str.length, 0)`.
- Si `indexEnd <= indexStart` après normalisation des valeurs négatives (c'est-à-dire que `indexEnd` représente un caractère qui se trouve avant `indexStart`), une chaîne de caractères vide est retournée.

## Exemples

### Utiliser la méthode `slice()` pour créer une nouvelle chaîne de caractères

L'exemple suivant utilise `slice()` pour créer une nouvelle chaîne de caractères.

```js
const chaine1 = "Le matin est déjà là."; // La longueur de chaine1 est de 21.
const chaine2 = chaine1.slice(1, 8);
const chaine3 = chaine1.slice(4, -2);
const chaine4 = chaine1.slice(13);
const chaine5 = chaine1.slice(30);
console.log(chaine2); // e matin
console.log(chaine3); // atin est déjà l
console.log(chaine4); // déjà là.
console.log(chaine5); // ""
```

### Utiliser la méthode `slice()` avec des indices négatifs

L'exemple suivant utilise `slice()` avec des indices négatifs.

```js
const chaine = "Le matin est déjà là.";
chaine.slice(-3); // 'là.'
chaine.slice(-3, -1); // 'là'
chaine.slice(0, -1); // 'Le matin est déjà là'
chaine.slice(3, -1); // 'matin est déjà là'
```

Cet exemple compte à rebours depuis la fin de la chaîne de caractères de `11` pour trouver l'indice de début et en avant depuis le début de la chaîne de caractères de `16` pour trouver l'indice de fin.

```js
console.log(chaine.slice(-11, 16)); // "st déj"
```

Ici, on compte en avant depuis le début de la chaîne de caractères de `11` pour trouver l'indice de début et en arrière depuis la fin de la chaîne de caractères de `7` pour trouver l'indice de fin.

```js
console.log(chaine.slice(11, -7)); // "t d"
```

Ces arguments comptent à rebours depuis la fin de la chaîne de caractères de `5` pour trouver l'indice de début et à rebours depuis la fin de la chaîne de caractères de `1` pour trouver l'indice de fin.

```js
console.log(chaine.slice(-5, -1)); // "à là"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("String.prototype.substr()")}}
- La méthode {{JSxRef("String.prototype.substring()")}}
- La méthode {{JSxRef("Array.prototype.slice()")}}
