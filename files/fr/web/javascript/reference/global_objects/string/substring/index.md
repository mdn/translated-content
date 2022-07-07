---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substring
original_slug: Web/JavaScript/Reference/Objets_globaux/String/substring
---
{{JSRef}}

La méthode **`substring()`** retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## Syntaxe

```js
str.substring(indiceA[, indiceB])
```

### Paramètres

- `indiceA`
  - : Un entier compris entre 0 et la longueur de la chaîne.
- `indiceB`
  - : Paramètre optionnel : un entier compris entre 0 et la longueur de la chaine.

### Valeur de retour

Une nouvelle chaîne de caractères qui correspond à la section souhaitée de la chaîne appelante.

## Description

`substring` extrait des caractères de la chaîne courante à partir de `indiceA` jusqu'à `indiceB` (non compris). On a notamment :

- Si `indiceA` est égal à `indiceB`, `substring` retournera une chaîne vide.
- Si `indiceB` est omis, `substring` effectuera l'extraction des caractères jusqu'à la fin de la chaîne.
- Si l'un des deux arguments est négatif ou vaut {{jsxref("NaN")}}, il sera traité comme 0.
- Si l'un des deux arguments est plus grand que `str.length`, il sera traité comme `str.length`.

Si `indiceA` est supérieur à `indiceB`, la fonction `substring()` intervertira ces deux valeurs afin de les traiter comme si elles avaient été passées dans le bon ordre. Par exemple : `str.substring(1, 0) == str.substring(0, 1)`.

## Exemples

### Utiliser `substring()`

Les exemples suivants utilisent la méthode `substring()` pour extraire et afficher des caractères à partir de la chaine "`Mozilla`" :

```js
var uneChaîne = "Mozilla";

// Affiche "Moz"
console.log(uneChaîne.substring(0,3));
console.log(uneChaîne.substring(3,0));

// Affiche "lla"
console.log(uneChaîne.substring(4,7));
console.log(uneChaîne.substring(4));
console.log(uneChaîne.substring(7,4));

// Affiche "Mozill"
console.log(uneChaîne.substring(0,6));

// Affiche "Mozilla"
console.log(uneChaîne.substring(0,7));
console.log(uneChaîne.substring(0,10));
```

### Remplacer une sous-chaîne dans une chaîne

L'exemple suivant remplace une partie d'une chaine. Elle remplace à la fois les caractères individuels et les sous-chaines. La fonction appelée à la fin de cet exemple transforme la chaine "`Brave New World`" en "`Brave New Web`".

```js
function replaceString(oldS, newS, fullS) {
// On remplace oldS avec newS dans fullS
  for (var i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
     fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

Attention : ceci peut résulter en une boucle infinie si `oldS` est elle-même une sous-chaine de `newS` -- par exemple, si on essaie de remplacer "World" par "OtherWorld". Une meilleure solution serait de remplacer les chaines de cette manière :

```js
function replaceString(oldS, newS,fullS){
  return fullS.split(oldS).join(newS);
}
```

Le code ci-dessus sert d'exemple pour les opérations sur les sous-chaines. S'il est nécessaire de remplacer des sous-chaines, la plupart du temps il faudrait préférer l'utilisation de {{jsxref("String.prototype.replace()")}}.

### Différence entre `substring()` et `substr()`

Il existe une légère différence entre les méthodes `substring()` et {{jsxref("String.substr", "substr()")}}. Les deux ne doivent pas être confondues.

Les arguments de la méthode `substring()` représentent les indices de début et de fin sur la chaîne. Pour `substr()`, les arguments représentent l'indice de début et le nombre de caractères à utiliser pour la chaîne résultante.

```js
var texte = "Mozilla";
console.log(texte.substring(2,5)); // => "zil"
console.log(texte.substr(2,3)); // => "zil"
```

### Différences entre `substring()` et `slice()`

Les méthodes `substring()` et {{jsxref("String.slice", "slice()")}} sont très proches mais certaines différences les distinguent, notamment la façon de gérer les arguments négatifs.

La méthode `substring()` échangera les deux arguments si `indiceA` est supérieur à `indiceB` et renverra donc une chaîne de caractères. La méthode {{jsxref("String.slice", "slice()")}} n'échange pas les arguments et renvoie donc une chaîne vide si le premier est supérieur au second :

```js
var text = 'Mozilla';
console.log(text.substring(5, 2)); // => "zil"
console.log(text.slice(5, 2));     // => ""
```

Si l'un ou l'autre des arguments sont négatifs ou valent `NaN`, la méthode `substring()` les traitera comme s'ils valaient `0`.

```js
console.log(text.substring(-5, 2)); // => "Mo"
console.log(text.substring(-5, -2)); // => ""
```

`slice()` traite également `NaN` comme `0`, mais parcourt la chaîne à partir de la fin lorsque des arguments négatifs sont utilisés.

```js
console.log(text.slice(-5, 2)); // => ""
console.log(text.slice(-5, -2)); // => "zil"
```

Pour plus d'exemples sur l'utilisation d'arguments négatifs, voir la page {{jsxref("String.slice", "slice()")}}.

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.15', 'String.prototype.substring')}}                         | {{Spec2('ES5.1')}}     |                                  |
| {{SpecName('ES6', '#sec-string.prototype.substring', 'String.prototype.substring')}}     | {{Spec2('ES6')}}         |                                  |
| {{SpecName('ESDraft', '#sec-string.prototype.substring', 'String.prototype.substring')}} | {{Spec2('ESDraft')}} |                                  |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.substring")}}

## Voir aussi

- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
- {{jsxref("String.prototype.slice()")}}
