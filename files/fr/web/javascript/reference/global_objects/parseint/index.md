---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`parseInt()`** analyse un argument de type chaîne de caractères et retourne un entier exprimé dans la [base <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Radix) définie (la base dans les systèmes de numération mathématiques).

{{InteractiveExample("Démonstration JavaScript&nbsp;: parseInt()")}}

```js interactive-example
console.log(parseInt("123"));
// 123 (base 10 par défaut)
console.log(parseInt("123", 10));
// 123 (base 10 définie explicitement)
console.log(parseInt("   123 "));
// 123 (les espaces blancs sont ignorés)
console.log(parseInt("077"));
// 77 (les zéros initiaux sont ignorés)
console.log(parseInt("1.9"));
// 1 (la partie décimale est tronquée)
console.log(parseInt("ff", 16));
// 255 (hexadécimal en minuscules)
console.log(parseInt("0xFF", 16));
// 255 (hexadécimal en majuscules avec le préfixe "0x")
console.log(parseInt("xyz"));
// NaN (l'entrée ne peut pas être convertie en entier)
```

## Syntaxe

```js-nolint
parseInt(string)
parseInt(string, radix)
```

### Paramètres

- `string`
  - : Une chaîne de caractères commençant par un entier. Les {{Glossary("whitespace", "espaces blancs")}} en début de cette chaîne de caractères sont ignorés.
- `radix` {{Optional_Inline}}
  - : Un entier compris entre `2` et `36` qui représente la _base_ (le système de numération) de la `string`. Il est converti en un [entier sur 32 bits](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_en_nombre_à_largeur_fixe)&nbsp;; s'il est non nul et en dehors de l'intervalle \[2, 36] après conversion, la fonction retourne toujours `NaN`. Si `0` ou non fourni, la base est déduite de la valeur de `string`. Soyez prudent — cela ne correspond pas toujours à la valeur par défaut `10`&nbsp;! La [description ci-dessous](#description) explique plus en détail ce qui se passe lorsque `radix` n'est pas fourni.

### Valeur de retour

Un entier obtenu à partir de la chaîne de caractères `string` fournie, ou {{JSxRef("NaN")}} lorsque

- la base (`radix`) en tant qu'entier sur 32 bits est inférieure à `2` ou supérieure à `36`, ou
- le premier caractère non blanc ne peut pas être converti en nombre.

> [!NOTE]
> JavaScript ne fait pas la distinction entre les «&nbsp;nombres à virgule flottante&nbsp;» et les «&nbsp;entiers&nbsp;» au niveau du langage. `parseInt()` et {{JSxRef("parseFloat()")}} ne diffèrent que par leur comportement d'analyse, mais pas nécessairement par leurs valeurs de retour. Par exemple, `parseInt("42")` et `parseFloat("42")` retourne la même valeur&nbsp;: un nombre ({{JSxRef("Number")}}) 42.

## Description

La fonction `parseInt` [convertit son premier argument en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), analyse cette chaîne de caractères, puis retourne un entier ou `NaN`.

Si la valeur retournée n'est pas `NaN`, elle correspond à l'entier obtenu en interprétant le premier argument comme un nombre selon la base `radix` définie. (Par exemple, une base `radix` égale à `10` correspond à un nombre décimal, `8` à un nombre octal, `16` à un nombre hexadécimal, et ainsi de suite.)

L'argument `radix` est [converti en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique). S'il n'est pas fourni, ou si sa valeur devient 0, `NaN` ou `Infinity` (`undefined` est converti en `NaN`), JavaScript suppose ce qui suit&nbsp;:

1. Si l'entrée `string`, avec suppression des espaces blancs et des signes `+`/`-` éventuels en début de ligne, commence par `0x` ou `0X` (un zéro suivi d'un X minuscule ou majuscule), la base `radix` est supposée être `16` et le reste de la chaîne de caractères est analysé comme un nombre hexadécimal.
2. Si l'entrée `string` commence par n'importe quelle autre valeur, la base est `10` (décimale).

> [!NOTE]
> Les autres préfixes comme `0b`, qui sont valides dans les [littéraux numériques](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#binaire), sont traités comme des chiffres normaux par `parseInt()`. `parseInt()` ne traite pas non plus les chaînes de caractères commençant par un caractère `0` comme des valeurs octales. Le seul préfixe que `parseInt()` reconnaît est `0x` ou `0X` pour les valeurs hexadécimales — tout le reste est analysé comme une valeur décimale si `radix` est manquant. {{JSxRef("Number/Number", "Number()")}} ou {{JSxRef("BigInt/BigInt", "BigInt()")}} peuvent être utilisés à la place pour analyser ces préfixes.

Si la base est `16`, `parseInt()` permet à la chaîne de caractères d'être éventuellement préfixée par `0x` ou `0X` après le caractère de signe optionnel (`+`/`-`).

Si la valeur de la base (convertie si nécessaire) n'est pas comprise dans l'intervalle \[2, 36] (inclus), `parseInt` retourne `NaN`.

Pour les bases supérieures à `10`, les lettres de l'alphabet indiquent des chiffres supérieurs à `9`. Par exemple, pour les nombres hexadécimaux (base `16`), on utilise `A` à `F`. Les lettres ne sont pas sensibles à la casse.

`parseInt` comprend exactement deux signes&nbsp;: `+` pour positif et `-` pour négatif. Cela se fait comme première étape de l'analyse après la suppression des espaces blancs. Si aucun signe n'est trouvé, l'algorithme passe à l'étape suivante&nbsp;; sinon, il supprime le signe et exécute l'analyse du nombre sur le reste de la chaîne de caractères.

Si `parseInt` rencontre un caractère dans la chaîne de caractères d'entrée qui n'est pas un chiffre valide dans la base `radix` définie, il l'ignore ainsi que tous les caractères suivants et retourne la valeur entière analysée jusqu'à ce point. Par exemple, `parseInt("2", 2)` retourne `NaN`, car `2` n'est pas un chiffre valide dans le système binaire. De même, bien que `1e3` encode techniquement un entier (et est correctement analysé en entier `1000` par {{JSxRef("parseFloat()")}}), `parseInt("1e3", 10)` retourne `1`, car `e` n'est pas un chiffre valide en base 10. Comme `.` n'est pas non plus un chiffre, la valeur de retour est toujours un entier.

Si le premier caractère ne peut pas être converti en nombre avec la base `radix` en cours d'utilisation, `parseInt` retourne `NaN`. Les espaces blancs en début de chaîne de caractères sont autorisés.

Pour les opérations arithmétiques, la valeur `NaN` n'est un nombre dans aucune base. Vous pouvez appeler la fonction [`Number.isNaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) pour déterminer si le résultat de `parseInt` est `NaN`. Si `NaN` est utilisé dans des opérations arithmétiques, le résultat de l'opération est également `NaN`.

Comme les grands nombres utilisent le caractère `e` dans leur représentation sous forme de chaîne de caractères (par exemple, `6.022e23` pour 6.022 × 10<sup>23</sup>), utiliser `parseInt` pour tronquer les nombres produit des résultats inattendus lorsqu'il est utilisé sur des nombres très grands ou très petits. `parseInt` ne doit _pas_ être utilisé comme substitut de {{JSxRef("Math.trunc()")}}.

Pour convertir un nombre en sa représentation sous forme de chaîne de caractères dans une base particulière, utilisez [`thatNumber.toString(radix)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).

Comme `parseInt()` retourne un nombre, il peut souffrir d'une perte de précision si l'entier représenté par la chaîne de caractères est [en dehors de la plage sûre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger). La fonction {{JSxRef("BigInt/BigInt", "BigInt()")}} permet d'analyser avec précision des entiers de longueur arbitraire, en retournant un {{JSxRef("BigInt")}}.

## Exemples

### Utiliser la fonction `parseInt()`

Les exemples suivants retournent tous **`15`**&nbsp;:

```js
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt("015", 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Les exemples suivants retournent **`NaN`**&nbsp;:

```js
parseInt("Coucou", 8); // Ce sont des lettres et pas des chiffres
parseInt("546", 2); // Ces chiffres ne sont pas valides pour une représentation
// binaire
```

Les exemples suivants retournent tous **`-15`**&nbsp;:

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt("-17", 8);
parseInt("-15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

Les exemples suivants retournent tous **`4`**&nbsp;:

```js
parseInt("4e2", 10);
parseInt("4.7", 10);
```

L'exemple suivant retourne **`224`**&nbsp;:

```js
parseInt("0e0", 16);
```

La fonction `parseInt()` ne prend pas en charge les valeurs {{JSxRef("BigInt")}}. Elle s'arrête au caractère `n` et traite la chaîne de caractères qui précède comme un entier normal, ce qui peut entraîner une perte de précision.

```js example-bad
parseInt("900719925474099267n");
// 900719925474099300
```

Vous devez plutôt transmettre la chaîne de caractères à la fonction {{JSxRef("BigInt/BigInt", "BigInt()")}}, sans le caractère `n` final.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

`parseInt` ne fonctionne pas avec les [séparateurs numériques](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séparateurs_numériques)&nbsp;:

```js example-bad
parseInt("123_456"); // 123
```

### Utiliser `parseInt()` sur des valeurs qui ne sont pas des chaînes de caractères

`parseInt()` peut donner des résultats intéressants lorsqu'on travaille sur des valeurs qui ne sont pas des chaînes de caractères combinées à une base élevée&nbsp;; par exemple, `36` (ce qui rend tous les caractères alphanumériques des chiffres valides).

```js
parseInt(null, 36); // 1112745 : La chaîne de caractères "null" est 1112745 en base 36
parseInt(undefined, 36); // 86464843759093 : La chaîne de caractères "undefined" est 86464843759093 en base 36
```

En général, il est déconseillé d'utiliser `parseInt()` sur des valeurs qui ne sont pas des chaînes de caractères, en particulier pour l'utiliser comme substitut de {{JSxRef("Math.trunc()")}}. Cela peut fonctionner sur de petits nombres&nbsp;:

```js
parseInt(15.99, 10); // 15
parseInt(-15.1, 10); // -15
```

Cependant, cela ne fonctionne que parce que la représentation sous forme de chaîne de caractères de ces nombres utilise une notation fractionnaire de base (`"15.99"`, `"-15.1"`), où `parseInt()` s'arrête au niveau du point décimal. Les nombres supérieurs ou égaux à 1e+21 ou inférieurs ou égaux à 1e-7 utilisent une notation exponentielle (`"1.5e+22"`, `"1.51e-8"`) dans leur représentation sous forme de chaîne de caractères, et `parseInt()` s'arrête au niveau du caractère `e` ou du point décimal, qui vient toujours après le premier chiffre. Cela signifie que pour les nombres grands et petits, `parseInt()` retourne un entier à un chiffre&nbsp;:

```js example-bad
parseInt(4.7 * 1e22, 10); // Un nombre très grand devient 4
parseInt(0.00000000000434, 10); // Un nombre très petit devient 4

parseInt(0.0000001, 10); // 1
parseInt(0.000000123, 10); // 1
parseInt(1e-7, 10); // 1
parseInt(1000000000000000000000, 10); // 1
parseInt(123000000000000000000000, 10); // 1
parseInt(1e21, 10); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction native {{JSxRef("parseFloat()")}}
- Le constructeur {{JSxRef("Number/Number", "Number()")}}
- La méthode statique {{JSxRef("Number.parseFloat()")}}
- La méthode statique {{JSxRef("Number.parseInt()")}}
- La fonction native {{JSxRef("isNaN()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
- La méthode {{JSxRef("Object.prototype.valueOf()")}}
- Le constructeur {{JSxRef("BigInt/BigInt", "BigInt()")}}
