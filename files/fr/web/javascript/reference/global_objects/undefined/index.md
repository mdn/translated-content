---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/undefined
original_slug: Web/JavaScript/Reference/Objets_globaux/undefined
---
{{jsSidebar("Objects")}}

La propriété globale **`undefined`** représente la valeur `undefined`_._ Cette valeur est l'[un des types primitifs de JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Le_type_ind.C3.A9fini).

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Syntaxe

    undefined

## Description

`undefined` est une propriété de _l'objet global_, c'est-à-dire qu'elle est accessible globalement. La valeur initiale d'`undefined` est la valeur primitive `undefined`.

Dans les navigateurs modernes, d'après la spécification ECMAScript 5, `undefined` est une propriété non-configurable et non accessible en écriture. Si, toutefois, elle peut être modifiée dans l'environnement utilisé, il faut éviter de l'écraser.

Une variable pour laquelle aucune valeur n'a été assignée sera de type `undefined`. Une méthode ou instruction renvoie également `undefined` si la variable à évaluer n'a pas de valeur assignée. Une fonction renvoie `undefined` si aucune valeur n'a été {{jsxref("Instructions/return", "retournée","",1)}}.

> **Attention :** Puisque `undefined` n'est pas un [mot réservé du langage JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Mots-cl.C3.A9s), il peut être utilisé comme [identifiant](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Variables) (nom de variable) dans toute portée autre que la portée globale. Ceci est une très mauvaise idée pour la lisibilité du code et sa maintenabilité.
>
> ```js
> // À NE PAS FAIRE
>
> // écrit "toto string" dans la console
> (function() { var undefined = 'toto'; console.log(undefined, typeof undefined); })();
>
> // écrit "toto string" dans la console
> (function(undefined) { console.log(undefined, typeof undefined); })('toto');
> ```

## Exemples

### L'égalité stricte et `undefined`

Il est possible d'utiliser `undefined` et les opérateurs stricts pour l''égalité et l'inégalité strictes afin de déterminer si une variable a une valeur affectée. Dans le code qui suit, la variable `x` n'est pas initialisée et la première instruction `if` sera évaluée à `true` (vrai).

```js
var x;
if (x === undefined) {
   // ces instructions seront exécutées
}
if (x !== undefined) {
   // ces instructions ne seront pas exécutées
}
```

> **Note :** L'opérateur d'égalité stricte doit être utilisé ici plutôt que l'opérateur d'égalité simple. En effet, `x == undefined` vérifie également si `x` vaut `null`, tandis que l'égalité stricte ne le fait pas. `null` n'est pas équivalent à `undefined`. Voir la page sur les {{jsxref("Opérateurs/Opérateurs_de_comparaison","opérateurs de comparaison","",1)}} pour plus de détails.

### L'opérateur `typeof` et `undefined`

L'opérateur {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}} peut également être utilisé :

```js
var x;
if (typeof x == 'undefined') {
   // ces instructions seront exécutées
}
```

Une des raisons pour utiliser {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}} est qu'il ne renverra pas d'erreur si la variable n'a pas été définie :

```js
// x n'a pas encore été défini
if (typeof x === 'undefined') { // donnera true sans erreur
   // ces instructions seront exécutées
}

if (x === undefined) { // déclenche une ReferenceError

}
```

### L'opérateur `void` et `undefined`

L'opérateur {{jsxref("Opérateurs/L_opérateur_void", "void")}} est une troisième solution.

```js
var x;
if (x === void 0) {
   // ces instructions seront exécutées
}

// y n'a pas été défini avant
if (y === void 0) {
   // déclenche une ReferenceError: y is not defined
   // (contrairement à `typeof`)
}
```

## Spécifications

| Spécification                                                            | État                         | Commentaires                                          |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1', '#sec-4.3.9', 'undefined')}}             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.1.1.3', 'undefined')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-undefined', 'undefined')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-undefined', 'undefined')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.undefined")}}
