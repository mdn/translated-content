---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
---

{{jsSidebar("Objects")}}

La propriété globale **`undefined`** représente la valeur primitive [`undefined`](/fr/docs/Glossary/undefined). Cette valeur est l'[un des types primitifs](/fr/docs/Web/JavaScript/Data_structures#le_type_indéfini) de JavaScript.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Syntaxe

```js
undefined;
```

## Description

`undefined` est une propriété de _l'objet global_, c'est-à-dire qu'elle est accessible globalement. La valeur initiale d'`undefined` est la valeur primitive [`undefined`](/fr/docs/Glossary/undefined).

Dans les navigateurs modernes (JavaScript 1.8.5 / Firefox 4+), d'après la spécification ECMAScript 5, `undefined` est une propriété non-configurable et non accessible en écriture. Si, toutefois, elle peut être modifiée dans l'environnement utilisé, il faut éviter de l'écraser.

Une variable pour laquelle aucune valeur n'a été assignée sera de type `undefined`. Une méthode ou instruction renvoie également `undefined` si la variable à évaluer n'a pas de valeur assignée. Une fonction renvoie `undefined` si aucune valeur n'a été [renvoyée](/fr/docs/Web/JavaScript/Reference/Statements/return).

> **Attention :** Puisque `undefined` n'est pas un [mot réservé du langage JavaScript](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#mots-clés), il peut être utilisé comme [identifiant](/fr/docs/Glossary/Identifier) (nom de variable) dans toute portée autre que la portée globale. Ceci est une très mauvaise idée pour la lisibilité du code et sa maintenabilité.
>
> ```js example-bad
> // À NE PAS FAIRE
>
> // affiche "toto string" dans la console
> (function () {
>   const undefined = "toto";
>   console.log(undefined, typeof undefined);
> })();
>
> // affiche "toto string" dans la console
> (function (undefined) {
>   console.log(undefined, typeof undefined);
> })("toto");
> ```

## Exemples

### L'égalité stricte et `undefined`

Il est possible d'utiliser `undefined` et les opérateurs stricts pour l'égalité et l'inégalité strictes afin de déterminer si une variable a une valeur affectée. Dans le code qui suit, la variable `x` n'est pas initialisée et la première instruction `if` sera évaluée à `true` (vrai).

```js
let x;
if (x === undefined) {
  // ces instructions seront exécutées
} else {
  // ces instructions ne seront pas exécutées
}
```

> **Note :** L'opérateur d'égalité stricte doit être utilisé ici plutôt que l'opérateur _d'égalité simple_. En effet, `x == undefined` vérifie également si `x` vaut `null`, tandis que l'égalité stricte ne le fait pas. `null` n'est pas équivalent à `undefined`.
>
> Voir la page sur les [opérateurs de comparaison](/fr/docs/Web/JavaScript/Reference/Operators) pour plus de détails.

### L'opérateur `typeof` et `undefined`

L'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) peut également être utilisé&nbsp;:

```js
let x;
if (typeof x === "undefined") {
  // ces instructions seront exécutées
}
```

Une des raisons pour utiliser l'opérateur [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) est qu'il ne renverra pas d'erreur si la variable n'a pas été définie&nbsp;:

```js
// x n'a pas encore été défini
if (typeof x === "undefined") {
  // donnera true sans erreur
  // ces instructions seront exécutées
}

if (x === undefined) {
  // déclenche une ReferenceError
}
```

Il existe toutefois une autre alternative. Puisque JavaScript utilise la portée statique, on saura qu'une variable a été déclarée si elle est définie dans un contexte englobant.

La portée globale est rattachée à [l'objet global](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis), alors on peut vérifier l'existence d'une variable dans le contexte global en examinant la présence d'une propriété sur _l'objet global_ via l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in). Par exemple&nbsp;:

```js
if ("x" in window) {
  // ces instructions seront exécutées uniquement
  // si x est défini dans la portée globale
}
```

### L'opérateur `void` et `undefined`

L'opérateur [`void`](/fr/docs/Web/JavaScript/Reference/Operators/void) est une troisième solution.

```js
let x;
if (x === void 0) {
  // ces instructions seront exécutées
}

// y n'a pas été défini avant
if (y === void 0) {
  // déclenche une Uncaught ReferenceError: y is not defined
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les [valeurs primitives](/fr/docs/Glossary/Primitive) de JavaScript
- [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null)
