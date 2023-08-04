---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef}}

La méthode **`match()`** permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.

{{EmbedInteractiveExample("pages/js/string-match.html")}}

## Syntaxe

```js
str.match(regexp);
```

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle. Si ce n'est pas un objet de type `RegExp`, celui-ci sera converti en un objet {{jsxref("RegExp")}} grâce à `new RegExp(regexp)`. Si aucun paramètre n'est utilisé, cela renverra un tableau contenant un élément étant la chaîne vide : `[""]`.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) contenant les correspondances et les groupes capturés avec les parenthèses ou {{jsxref("null")}} s'il n'y a pas de correspondance. Le contenu de ce tableau dépend de l'utilisation du marqueur pour la recherche globale `g` :

- Si le marqueur `g` est utilisé, tous les résultats correspondants à l'expression rationnelle complète seront renvoyés mais les groupes capturants ne seront pas renvoyés.
- Si le marqueur `g` n'est pas utilisé, seule la première correspondance et ses groupes capturants seront renvoyés. Dans ce cas, l'élément renvoyé aura des propriétés supplémentaires listées ci-après.

#### Propriétés supplémentaires

Comme indiqué ci-avant, les résultats peuvent contenir certaines propriétés supplémentaires :

- `groups` : un tableau de groupes capturants nommés ou {{jsxref("undefined")}} si aucun groupe capturant n'a été défini. Voir [la page sur les groupes et les intervalles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) pour plus d'informations.
- `index` : l'indice de la chaîne de caractères où a été trouvée la correspondance.
- `input` : une copie de la chaîne sur laquelle a été effectuée la recherche.

## Description

Si l'expression n'utilise pas le drapeau (_flag_) `g`, le résultat obtenu sera le même qu'avec {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.

### Voir aussi : les méthodes de `RegExp`

- Si on souhaite savoir s'il existe des correspondances entre une chaîne de caractères et une expression rationnelle {{jsxref("RegExp")}}, on pourra utiliser {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}.
- Si on ne souhaite obtenir que la première correspondance, on pourra plutôt utiliser {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} à la place.
- Si on souhaite obtenir les groupes correspondants et que le drapeau « global » est activé, il faudra utiliser {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} à la place.

## Exemples

### Utiliser `match()`

Dans l'exemple suivant, on utilise `match()` afin de trouver la chaîne `'Chapitre'` suivie par un ou plusieurs chiffres séparés par des points. L'expression utilisée active le drapeau `i` afin que la casse ne soit pas prise en compte.

```js
var str = "Pour plus d'informations, voir le chapitre 3.4.5.1";
var re = /(chapitre \d+(\.\d)*)/i;
var trouvé = str.match(re);

console.log(trouvé);

// logs ['chapitre 3.4.5.1', 'chapitre 3.4.5.1', '.1']

// 'chapitre 3.4.5.1' est la première correspondance
// 'chapitre 3.4.5.1' est la valeur gardée en mémoire par
// `(chapitre \d+(\.\d)*)`.
// '.1' est la valeur gardée en mémoire par `(\.\d)`.
```

### Utiliser les drapeaux `g` (global) et `i` (ignorer la casse) avec `match()`

Dans cet exemple, on illustre comment utiliser des drapeaux avec l'expression rationnelle qui est un argument de `match()`. Chaque lettre de A à E et de a à e est renvoyée, chacune dans un élément du tableau de résultat.

```js
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var tableau_correspondances = str.match(regexp);

console.log(tableau_correspondances);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### Utiliser un paramètre qui n'est pas une `RegExp`

Lorsque le paramètre passé à la fonction est une chaîne de caractères ou un nombre, il est converti de façon implicite en un objet {{jsxref("RegExp")}} grâce à `new RegExp(obj)`. Si c'est un nombre positif avec le signe +, la méthode `RegExp()` ignorera ce signe.

```js
var str1 = "NaN signifie : qui n'est pas un nombre.";
var str2 = "Mon père a 65 ans.";
str1.match("nombre"); // "nombre" est une chaîne, renvoie ["nombre"]
str1.match(NaN); // NaN est de type number, renvoie ["NaN"]
str2.match(65); // Renvoie ["65"]
str2.match(+65); // Renvoie également ["65"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
