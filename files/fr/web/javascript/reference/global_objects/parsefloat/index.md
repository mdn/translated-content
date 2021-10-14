---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
original_slug: Web/JavaScript/Reference/Objets_globaux/parseFloat
---
{{jsSidebar("Objects")}}

La fonction **`parseFloat()`** permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (_parsing_).

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntaxe

    parseFloat(string)

### Paramètres

- `string`
  - : Une chaîne de caractères la valeur qu'on souhaite analyser et transformer en un nombre flottant.

### Valeur de retour

Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur {{jsxref("NaN")}} qui sera renvoyée.

## Description

`parseFloat` est une fonction non associée à un objet, disponible au plus haut niveau de l'environnement JavaScript.

`parseFloat` analyse l'argument fourni sous la forme d'une chaîne de caractères et renvoie un nombre flottant correspondant. L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +,-, un chiffre, un point ou un exposant. Ce caractère, ainsi que les suivants, seront ignorés. Les blancs en début et en fin de chaîne sont autorisés.

> **Note :** Si on souhaite avoir un outil de conversion plus strict, on pourra utiliser {{jsxref("Number", "Number(<em>valeur</em>)")}} qui utilise une analyse plus stricte et qui fournit {{jsxref("NaN")}} pour les valeurs qui contiennent des caractères invalides, quelle que soit leur position.

Si le premier caractère de la chaîne ne peut pas être converti en un nombre, `parseFloat()` renverra `NaN`.

Pour des raisons arithmétiques, la valeur `NaN` n'est jamais un nombre, quelle que soit la base considérée. On peut utiliser la méthode {{jsxref("isNaN")}} afin de déterminer si le résultat obtenu par `parseFloat()` est `NaN`. Si `NaN` est passé comme valeur lors d'opérations arithmétiques, ces opérations renverront également `NaN` comme résultat.

`parseFloat()` peut également analyser et renvoyer la valeur {{jsxref("Infinity")}} qui représente l'infini numérique. Ici, on pourra utiliser la fonction {{jsxref("isFinite()")}} afin de déterminer si le résultat obtenu est un nombre fini (c'est-à-dire qui n'est ni `Infinity`, ni `-Infinity`, ni `NaN`).

`parseFloat()` peut également analyser un objet si celui-ci implémente la méthode `toString()` ou `valueOf()`. La valeur renvoyée par `parseFloat()` le résultat de `parseFloat()` appliqué à la valeur renvoyée par `toString()` ou `valueOf()` .

`parseFloat()` convertit une valeur {{jsxref("BigInt")}} en une valeur {{jsxref("Number")}} et perd ainsi en précision car toutes les valeurs `BigInt` ne sont pas représentables en `Number`.

## Exemples

### Utiliser `parseFloat()` pour renvoyer un nombre

Les instructions suivantes renvoient toutes la valeur **3.14** :

```js
parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14d'autres caractères non numériques");

var titi = Object.create(null);
titi.valueOf = function () { return "3.14"; };
parseFloat(titi);​​​​​
```

### Utiliser `parseFloat()` pour renvoyer `NaN`

Dans cet exemple, le résultat obtenu est {{jsxref("<code>NaN</code>")}} :

```js
parseFloat("FF2");
```

### `parseFloat` et `BigInt`

```js
parseFloat(900719925474099267n);
// 900719925474099300
```

### Une fonction plus stricte

Si on souhaite éviter de convertir des chaînes qui contiennent des caractères non numériques, on pourra utiliser une expression rationnelle pour filtrer ces valeurs (et obtenir une fonction plus stricte que `parseFloat()`) :

```js
var filterFloat = function (value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN
```

Attention : ce code n'est qu'un exemple et renverra `NaN` pour des valeurs pourtant valides comme `1.` ou `.5`.

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                             | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.1.2.3', 'parseFloat')}}                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-parsefloat-string', 'parseFloat')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-parsefloat-string', 'parseFloat')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.parseFloat")}}

## Voir aussi

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
