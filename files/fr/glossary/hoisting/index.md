---
title: Hoisting (remontée)
short-title: Hoisting
slug: Glossary/Hoisting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En JavaScript, l'anglicisme **<i lang="en">hoisting</i>**, qu'on peut traduire en «&nbsp;remontée&nbsp;» (voire plus littéralement en «&nbsp;hissage&nbsp;») correspond au déplacement de la _déclaration_ de fonctions, variables ou classes en haut de leur portée avant l'exécution du code.

Le hissage/la remontée n'est pas un terme défini de façon normative dans la spécification ECMAScript. La spécification définit un groupe de déclarations comme [_HoistableDeclaration_ <sup>(angl.)</sup>](https://tc39.es/ecma262/#prod-HoistableDeclaration), mais cela inclut uniquement les déclarations [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/fr/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function), et [`async function*`](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). La remontée est souvent associée aux déclarations [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var) d'une façon légèrement différente. Généralement, on regroupe les différents comportements suivants sous ce terme&nbsp;:

1. Être capable d'utiliser la valeur d'une variable dans sa portée avant la ligne où elle est déclarée («&nbsp;remontée de variable&nbsp;»)
2. Être capable de référence une variable dans sa portée avant la ligne où elle est déclarée, sans que cela déclenche une exception [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), mais où la valeur obtenue est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) («&nbsp;remontée de déclaration&nbsp;»)
3. La déclaration de la variable entraîne des changements de comportement dans la portée avant la ligne où elle est déclarée.

Les déclarations sans mot-clé préalable sont remontées selon le premier comportement. Les déclarations avec `var` sont remontées selon le deuxième comportement. Enfin, les déclarations avec [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let), [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), et [`class`](/fr/docs/Web/JavaScript/Reference/Statements/class) (parfois désignées comme _déclarations lexicales_) sont remontées selon le troisième comportement.

On peut également considérer que `let`, `const`, et `class` ne déclenchent pas de remontée en raison de [la zone morte temporaire](/fr/docs/Web/JavaScript/Reference/Statements/let#zone_morte_temporaire_temporal_dead_zone_tdz_et_les_erreurs_liées_à_let) qui interdit toute utilisation de la variable avant sa déclaration. Cette différence d'interprétation est acceptable, car le terme n'est pas précisément normé dans la spécification. Toutefois, la zone morte temporaire peut entraîner d'autres modifications observables dans la portée, suggérant ainsi une certaine forme de remontée&nbsp;:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Si la déclaration `const x = 2` n'était pas remontée du tout (autrement si le seul effet produit avait lieu lors de l'exécution), l'instruction `console.log(x)` devrait être capable de lire la valeur de `x` de la portée parente. Toutefois, la déclaration `const` touche quand même la portée dans laquelle elle est définie et l'instruction `console.log(x)` lit la valeur du `x` provenant de la déclaration `const x = 2`, qui n'est pas encore initialisé et déclenche donc une exception [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). Cela étant écrit, on peut considérer l'absence de remontée comme l'absence d'effet de bord utile.

On notera que ce qui suit n'est pas une forme de remontée&nbsp;:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Comme la portée des déclarations `var` n'est pas limitée aux blocs, il n'y a pas d'accès avant déclaration ici.

Pour plus d'informations à ce sujet, voir&nbsp;:

- La remontée pour `var`/`let`/`const` dans [le guide sur la grammaire et les types en JavaScript](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#remontée_de_variables_hoisting)
- La remontée pour `function` dans [le guide sur les fonctions](/fr/docs/Web/JavaScript/Guide/Functions#remontée_des_fonctions)
- La remontée pour `class` dans [le guide sur les classes](/fr/docs/Web/JavaScript/Guide/Using_classes#remontée_des_déclarations_de_classe)
- La remontée pour `import` dans [le module javascript](/fr/docs/Web/JavaScript/Guide/Modules#remontée_des_déclarations_de_import)

## Voir aussi

- [L'instruction `var`](/fr/docs/Web/JavaScript/Reference/Statements/var)
- [L'instruction `let`](/fr/docs/Web/JavaScript/Reference/Statements/let)
- [L'instruction `const`](/fr/docs/Web/JavaScript/Reference/Statements/const)
- [L'instruction `function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [L'instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import)
