---
title: "String : méthode indexOf()"
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`indexOf()`** des valeurs {{JSxRef("String")}} recherche dans cette chaîne de caractères et retourne l'indice de la première occurrence de la sous-chaîne de caractères définie. Elle prend une position de départ optionnelle et retourne la première occurrence de la sous-chaîne de caractères définie à un indice supérieur ou égal au nombre défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.indexOf()", "taller")}}

```js interactive-example
const paragraph =
  "Je pense que le chien de Ruth est plus mignon que ton chien !";

const searchTerm = "chien";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `L'indice de la première occurrence de « ${searchTerm} » est ${indexOfFirst}`,
);
// Résultat attendu : "L'indice de la première occurrence de « chien » est 16"

console.log(
  `L'indice de la deuxième occurrence de « ${searchTerm} » est ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Résultat attendu : "L'indice de la deuxième occurrence de « chien » est 54"
```

## Syntaxe

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### Paramètres

- `searchString`
  - : La sous-chaîne de caractères à rechercher. Toutes les valeurs sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` fait que `indexOf()` recherche la chaîne de caractères `"undefined"`, ce qui est rarement ce que vous voulez.

- `position` {{Optional_Inline}}
  - : La méthode retourne l'indice de la première occurrence de la sous-chaîne de caractères définie à une position supérieure ou égale à `position`, qui par défaut vaut `0`. Si `position` est supérieure à la longueur de la chaîne de caractères appelante, la méthode ne recherche pas du tout dans la chaîne de caractères appelante. Si `position` est inférieure à zéro, la méthode se comporte comme si `position` vaut `0`.
    - `'le monde bonjour'.indexOf('o', -5)` retourne `4` — parce que cela fait que la méthode se comporte comme si le deuxième argument vaut `0`, et la première occurrence de `o` à une position supérieure ou égale à `0` est à la position `4`.

    - `'le monde bonjour'.indexOf('monde', 12)` retourne `-1` — parce que, bien qu'il soit vrai que la sous-chaîne de caractères `monde` se trouve à l'indice `11`, cette position n'est pas supérieure ou égale à `12`.

    - `'le monde bonjour'.indexOf('o', 99)` retourne `-1` — parce que `99` est supérieur à la longueur de `le monde bonjour`, ce qui fait que la méthode ne recherche pas du tout dans la chaîne de caractères.

### Valeur de retour

L'indice de la première occurrence de `searchString` trouvée, ou `-1` si rien n'est trouvé.

#### Valeur de retour lors de l'utilisation d'une chaîne de caractères de recherche vide

La recherche d'une chaîne de caractères de recherche vide produit des résultats étranges. Sans second argument, ou avec un second argument dont la valeur est inférieure à la longueur de la chaîne de caractères appelante, la valeur de retour est la même que celle du second argument&nbsp;:

```js
"bonjour le monde".indexOf(""); // retourne 0
"bonjour le monde".indexOf("", 0); // retourne 0
"bonjour le monde".indexOf("", 3); // retourne 3
"bonjour le monde".indexOf("", 8); // retourne 8
```

Cependant, si le deuxième argument a une valeur supérieure ou égale à la longueur de la chaîne de caractères, la valeur retournée correspond à la longueur de cette chaîne de caractères&nbsp;:

```js
"bonjour le monde".indexOf("", 16); // retourne 16
"bonjour le monde".indexOf("", 19); // retourne 16
"bonjour le monde".indexOf("", 22); // retourne 16
```

Dans le premier cas, la méthode se comporte comme si elle trouve une chaîne de caractères vide juste après la position définie dans le deuxième argument. Dans le second cas, la méthode se comporte comme si elle trouve une chaîne de caractères vide à la fin de la chaîne de caractères d'appel.

## Description

Les chaînes de caractères sont indexées à partir de zéro&nbsp;: l'indice du premier caractère d'une chaîne de caractères est `0`, et l'indice du dernier caractère d'une chaîne de caractères est la longueur de la chaîne de caractères moins 1.

```js
"Baleine Bleue".indexOf("Baleine"); // retourne  0
"Baleine Bleue".indexOf("Licorne"); // retourne -1
"Baleine Bleue".indexOf("Bleue", 0); // retourne  8
"Baleine Bleue".indexOf("Bleue", 5); // retourne  8
"Baleine Bleue".indexOf("Baleine", 7); // retourne -1
"Baleine Bleue".indexOf(""); // retourne  0
"Baleine Bleue".indexOf("", 9); // retourne  9
"Baleine Bleue".indexOf("", 11); // retourne 11
"Baleine Bleue".indexOf("", 15); // retourne 13
```

La méthode `indexOf()` tient compte de la casse. Par exemple, l'expression suivante retourne `-1`&nbsp;:

```js
"Baleine Bleue".indexOf("bleue"); // returns -1
```

### Vérifier les occurrences

Lorsqu'on vérifie si une sous-chaîne de caractères spécifique se trouve dans une chaîne de caractères, la manière correcte de le faire est de tester si la valeur de retour est `-1`&nbsp;:

```js
"Baleine Bleue".indexOf("Bleue") !== -1; // true ; a trouvé 'Bleue' dans 'Baleine Bleue'
"Baleine Bleue".indexOf("Licorne") !== -1; // false ; il n'y a pas de 'Licorne' dans 'Baleine Bleue'
```

## Exemples

### Utiliser la méthode `indexOf()`

L'exemple suivant utilise `indexOf()` pour localiser des sous-chaînes de caractères dans la chaîne de caractères `"Un nouveau monde"`.

```js
const chaine = "Un nouveau monde";

console.log(chaine.indexOf("n")); // 1
console.log(chaine.indexOf("nouveau")); // 3
```

### `indexOf()` et la sensibilité de la casse

L'exemple suivant définit deux variables de type chaîne de caractères.

Les variables contiennent la même chaîne de caractères, sauf que la deuxième chaîne de caractères contient des lettres majuscules. La première méthode {{DOMxRef("console/log_static", "console.log()")}} affiche `19`. Mais comme la méthode `indexOf()` est sensible à la casse, la chaîne de caractères `"cheddar"` n'est pas trouvée dans `maChaineCaracteresMaj`, donc la deuxième méthode `console.log()` affiche `-1`.

```js
const maChaineCaracteres = "brie, pepper jack, cheddar";
const maChaineCaracteresMaj = "Brie, Pepper Jack, Cheddar";

console.log(maChaineCaracteres.indexOf("cheddar")); // 19
console.log(maChaineCaracteresMaj.indexOf("cheddar")); // -1
```

### Utiliser `indexOf()` pour compter les occurrences d'une lettre dans une chaîne de caractères

L'exemple suivant assigne à `compte` le nombre d'occurrences de la lettre `e` dans la chaîne de caractères `chaine`&nbsp;:

```js
const chaine = "Être, ou ne pas être, telle est la question.";
let compte = 0;
let position = chaine.indexOf("e");

while (position !== -1) {
  compte++;
  position = chaine.indexOf("e", position + 1);
}

console.log(compte); // 7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("String.prototype.includes()")}}
- La méthode {{JSxRef("String.prototype.split()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
