---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
original_slug: Web/JavaScript/Reference/Objets_globaux/parseInt
---
{{jsSidebar("Objects")}}

La fonction **`parseInt()`** analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

> **Attention :** On veillera à bien utiliser le second paramètre de la fonction pour éviter toute ambiguité sur la base numérique utilisée.

## Syntaxe

    parseInt(string, base);

### Paramètres

- `string`
  - : La valeur qu'on souhaite analyser et convertir. Si l'argument `string` n'est pas une chaîne de caractères, elle sera convertie en une chaîne (grâce à l'opération abstraite [`ToString`](https://www.ecma-international.org/ecma-262/6.0/#sec-tostring)) . Les blancs contenus au début de l'argument sont ignorés.
- `base`

  - : Un entier compris entre 2 et 36 qui représente la [base](https://fr.wikipedia.org/wiki/Base_%28arithm%C3%A9tique%29) utilisée pour la valeur représentée dans la chaîne. La base communément utilisée est la base décimale et on utilisera donc `10` dans ce cas pour ce paramètre.

    > **Attention :** La base par défaut n'est pas 10. Ce paramètre doit toujours être utilisé, en effet s'il n'est pas spécifié, le comportement de la fonction n'est pas garanti et peut varier d'une plate-forme à une autre.

    Voir cependant la description ci-après qui explicite le comportement par défaut attendu.

### Valeur de retour

Un entier obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet d'obtenir un nombre d'après la base fournie, ce sera {{jsxref("NaN")}} qui sera renvoyé.

## Description

La fonction `parseInt()` convertit le premier argument en une chaîne, l'analyse et renvoie un entier ou `NaN`. Si la valeur renvoyée n'est pas `NaN`, ce sera l'entier représentant le nombre contenu dans la chaîne dans la base donnée. Une base 10 est utilisée pour la base décimale, 8 pour la base octale, 16 pour la base hexadécimale. Pour les bases supérieures à `10`, les lettres de l'alphabet latin seront utilisées pour représenter les chiffres supérieurs à `9`. Par exemple, pour la base hexadécimale, on utilisera les lettres `A` à `F`.

Si, lors de l'analyse de la chaîne, `parseInt()` rencontre un caractère qui n'est pas un chiffre dans la base donnée, ce caractère, ainsi que les suivants seront ignorés. `parseInt()` tronque les nombres fournies en valeurs entières (attention donc lorsque les chaînes utilisent une notation scientifique : "4e2" donnera la valeur 4 en base 10 et pas 400). Les espaces en début et en fin de chaîne sont autorisés.

Si la base fournie vaut {{jsxref("undefined")}} ou 0 (ou si elle n'est pas utilisée comme paramètre), le moteur JavaScript procèdera comme suit :

- Si l'argument `string` commence avec "0x" ou "0X", la base considérée sera la base 16 (hexadécimale) et le reste de la chaîne sera analysé et converti.
- Si l'argument `string` commence avec "0", la base considérée sera la base 8 (octale) ou la base 10 (décimale). La base exacte qui sera choisie dépendra de l'implémentation. ECMAScript 5 définit que la base 10 doit être utilisée. Cependant, cela n'est pas supporté par tous les navigateurs. C'est pour cette raison qu'il faut **toujours spécifier une base lorsqu'on utilise `parseInt()`**.
- Si l'argument `string` commence avec une autre valeur, la base considérée sera la base 10.

Si le premier caractère de la chaîne de caractères ne peut pas être converti, `parseInt()` renverra `NaN`.

Pour des raisons arithmétiques, la valeur {{jsxref("NaN")}} n'est un nombre pour aucune base. La fonction {{jsxref("Objets_globaux/isNaN", "isNaN()")}} peut être utilisée pour déterminer si le résultat obtenu par `parseInt()` vaut `NaN`. Si `NaN` est utilisé dans une opération arithmétique, le résultat de cette opération sera aussi `NaN` (on dit que `NaN` est une valeur « toxique »).

Pour convertir un nombre en une chaîne de caractères dans une base donnée, on utilisera `monEntier.toString(base)`.

`parseInt` convertira les valeurs {{jsxref("BigInt")}} en {{jsxref("Number")}} et de la précision sera perdue lors de ce traitement.

## Exemples

Les exemples suivants renvoient tous **`15`** :

```js
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10); // attention parseInt(015, 10); renvoie 13
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Les exemples suivants renvoient **`NaN`** :

```js
parseInt("Coucou", 8); // Ce sont des lettres et pas des chiffres
parseInt("546", 2);    // Ces chiffres ne sont pas valides pour une représentation
                       // binaire
```

Les exemples suivants renvoient tous **`-15`** :

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10)
parseInt("-17", 8);
parseInt("-15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

Les exemples suivants renvoient tous **`4`** :

```js
parseInt("4e2", 10);
parseInt("4.7", 10);
```

L'exemple suivant renvoie  **`224`** :

```js
parseInt("0e0", 16);
```

On perdra en précision si on manipule un grand entier ({{jsxref("BigInt")}}) :

```js
parseInt(900719925474099267n); // 900719925474099300
```

## Interpréter une base octale quand aucun paramètre de base n'est fourni

Bien que cela soit fortement déconseillé par ECMAScript 3 et que cela soit interdit par ECMAScript 5, de nombreuses implémentations interprètent une chaîne numérique qui commence par `0` comme une valeur exprimée dans la base octale. Les instructions qui suivent peuvent avoir un résultat octal ou décimal selon les implémentations. **Pour cette raison, il faut toujours définir une base lorsqu'on utilise cette fonction.**

```js
parseInt("0e0"); // 0
parseInt("08");  // 0, '8' n'est pas un chiffre octal.
```

### ECMAScript 5 supprime l'interprétation octale

La spécification ECMAScript 5 indique, au sujet de la fonction `parseInt()`, que les valeurs commençant par `0` ne doivent plus être considérées comme des valeurs octales. ECMAScript 5 indique :

La fonction `parseInt` produit une valeur entière définie par le contenu de la chaîne selon la base fournie. Les blancs en début de chaîne sont ignorés. Si la base spécifiée est `0`, la base décimale sera prise en compte sauf si le nombre représenté commence par la paire de caractères `0x` ou `0X` auquel cas la base 16 sera prise en compte.

Sur cet aspect, ECMAScript 3 diffère car il permet l'interprétation octale (bien qu'il la déconseille).

De nombreuses implémentations n'ont pas adopté ce comportement en 2013. Pour cette raison (les anciens environnements et navigateurs doivent être supportés), il faut **toujours définir le paramètre pour la base**.

## Une fonction plus stricte

Il est parfois utile d'avoir une fonction de conversion plus stricte. Pour cela, on peut utiliser une expression rationnelle :

```js
filterInt = function (value) {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                 | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.1.2.2', 'parseInt')}}                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-parseint-string-radix', 'parseInt')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-parseint-string-radix', 'parseInt')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.parseInt")}}

## Voir aussi

- {{jsxref("Objets_globaux/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Objets_globaux/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
