---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/indexOf
original_slug: Web/JavaScript/Reference/Objets_globaux/String/indexOf
---
{{JSRef}}

La méthode **`indexOf()`** renvoie l'indice de la première occurence de la valeur cherchée au sein de la chaîne courante (à partir de `indexDébut`). Elle renvoie -1 si la valeur cherchée n'est pas trouvée.

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

> **Note :** Pour la méthode associée aux tableaux, voir la page {{jsxref("Array.prototype.indexOf()")}}.

## Syntaxe

    str.indexOf(valeurRecherchée)
    str.indexOf(valeurRecherchée, indexDébut)

### Paramètres

- `valeurRecherchée`
  - : Une chaîne représentant la valeur qu'on cherche dans la chaîne courante. Si aucune valeur n'est fournie explicitement, [`valeurRecherchée` sera convertie en `"undefined"` et c'est cette chaîne qui sera recherchée](https://tc39.github.io/ecma262/#sec-tostring).
- `indexDébut`
  - : Paramètre optionnel. L'indice à partir duquel commencer la recherche, effectuée du début vers la fin de la liste. Cela peut être n'importe quel entier. La valeur par défaut est 0. Si `indexDébut < 0` la chaîne sera parcourue en entier (ce qui équivaut à utiliser 0). Si `indexDébut >= str.length`, la méthode renverra -1 sauf si `valeurRecherchée` est la chaîne vide, auquel cas, la méthode renverra `str.length`.

### Valeur de retour

L'indice de la première occurrence de la valeur indiquée, `-1` si elle n'est pas trouvée. Si la valeur recherchée est la chaîne vide, une correspondance sera trouvée à n'importe quel index entre `0` et `str.length`.

## Description

Les caractères dans une chaîne de caractères sont indexés de la gauche à la droite. L'indice du premier caractère est 0, celui du dernier caractère (d'une chaîne `str`) est `str.length - 1.`

```js
"Blue Whale".indexOf("Blue");     // retourne  0
"Blue Whale".indexOf("Blute");    // retourne -1
"Blue Whale".indexOf("Whale", 0); // retourne  5
"Blue Whale".indexOf("Whale", 5); // retourne  5
"Blue Whale".indexOf("");         // retourne  0
"Blue Whale".indexOf("", 9);      // retourne  9
"Blue Whale".indexOf("", 10);     // retourne 10
"Blue Whale".indexOf("", 11);     // retourne 10
```

### Sensibilité à la casse

La méthode `indexOf()` est sensible à la casse. Par exemple, l'expression suivante retourne -1 :

```js
"Blue Whale".indexOf("blue") // retourne -1
```

Attention : `0` n'est pas une valeur qui peut être évaluée à `true` et `-1` n'est pas une valeur qui peut être évaluée à `false`. Ainsi, si on souhaite tester si une chaîne de caractères existe au sein d'une autre chaîne de caractères, on procèdera de cette façon (ou on utilisera {{jsxref("String.prototype.includes()")}}

```js
"Blue Whale".indexOf("Blue") != -1; // true
"Blue Whale".indexOf("Bloe") != -1; // false
```

## Exemples

### Utiliser `indexOf()` et `lastIndexOf()`

L'exemple suivant utilise `indexOf()` et `lastIndexOf()` pour localiser différentes valeurs dans la chaîne de caractères "`Brave new world`".

```js
const uneChaîne = "Brave new world"

console.log("Indice du premier w " + uneChaîne.indexOf("w"));
// Affiche 8
console.log("Indice du dernier w " + uneChaîne.lastIndexOf("w"));
// Affiche 10

console.log("Indice du premier 'new' " + uneChaîne.indexOf("new"));
// Affiche 6
console.log("Indice du dernier 'new' " + uneChaîne.lastIndexOf("new"));
// Affiche 6
```

### `indexOf()` et la sensibilité à la casse

L'exemple suivant définit 2 chaînes de caractères. Ces variables contiennent la meme chaîne de caractères sauf que la seconde chaîne de caractères contient des lettres majuscules. La première méthode `writeln` affiche 19. Cependant, comme la méthode `indexOf` est sensible à la casse, la chaîne de caractères "`cheddar`" n'est pas trouvée dans `myCapString`, donc le second résultat affiche -1.

```js
const maChaîne = "brie, reblochon, cheddar";
const maChaîneMajuscules = "Brie, Reblochon, Cheddar";

console.log('maChaîne.indexOf("cheddar") is '+ maChaîne.indexOf("cheddar"));
// Affiche 19
console.log('maChaîneMajuscules.indexOf("cheddar") is ' + maChaîneMajuscules.indexOf("cheddar"));
// Affiche -1
```

### Utiliser `indexOf()` pour compter le nombre d'occurences dans une chaîne de caractères

L'exemple suivant utilise la variable `count` pour stocker le nombre d'occurences de la lettre `x` dans la chaîne de caractère `str` :

```js
const str = "Chaîne x de test x";
let count = 0;
let pos = str.indexOf("x");

while ( pos != -1 ) {
   count++;
   pos = str.indexOf( "x",pos + 1 );
}
console.log(count); // Affiche 2
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.5.4.7', 'String.prototype.indexOf')}}                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.indexOf")}}

## Voir aussi

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
