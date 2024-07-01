---
title: L'opérateur void
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

L'**opérateur `void`** permet d'évaluer une _expression_ donnée et de renvoyer `undefined`.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html")}}

## Syntaxe

```js
void expression;
```

## Description

Cet opérateur permet d'évaluer des expressions retournant une valeur là où on attend une expression qui vaut {{jsxref("undefined")}}.

L'opérateur `void` est souvent utilisé pour obtenir la valeur `undefined`, généralement avec "`void(0)`" (qui est l'équivalent de "`void 0`"). Pour ce cas d'exemple, on aurait très bien pu utiliser la variable globale {{jsxref("undefined")}}.

Attention à [la précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Opérateurs/Précédence_des_opérateurs) et notamment de celle de `void`, si besoin, on pourra utiliser des parenthèses pour clarifier la résolution de l'expression :

```js
void 2 == "2"; // renvoie false
void (2 === "2"); // renvoie undefined
```

## Expressions de fonction appelées immédiatement

Lorsqu'on utilise tout un script dans une fonction qu'on évalue immédiatement, `void` peut être utilisé pour que le mot-clé `function` soit traité comme une expression plutôt que comme une déclaration.

```js
void (function iife() {
  var toto = function () {};
  var machin = function () {};
  var truc = function () {
    toto();
    machin();
  };
  var bidule = function () {};

  truc();
  bidule();
})();
```

## Les URI JavaScript

Lorsqu'un navigateur utilise une URI avec `javascript:`, le code de l'URI est évalué et le résultat remplace le contenu de la page, sauf si la valeur renvoyée vaut {{jsxref("Objets_globaux/undefined","undefined")}}. L'utilisateur `void` peut alors être utilisé pour renvoyer cette valeur. Par exemple :

```html
<a href="javascript:void(0);"> Cliquer ici (sans effet) </a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Cliquer ici pour rendre le fond vert
</a>
```

Malgré cela, il n'est pas recommandé d'utiliser le pseudo-protocole `javascript:`, on lui préférera des méthodes moins risquées et moins intrusives comme les gestionnaires d'événements.

## Fonctions fléchées sans valeur de retour

Les fonctions fléchées raccourcissent la syntaxe pour obtenir la valeur d'une fonction avec le résultat d'une expression qui constitue le corps de la fonction. Ainsi, la fonction renvoie nécessairement une valeur. Aussi, convertir une base de code afin d'utiliser des fonctions fléchées peut avoir certains effets de bord lorsqu'on souhaite qu'une fonction soit simplement exécutée mais pas que sa valeur de retour interfère avec le reste.

Pour éviter de transmettre cette valeur de retour, on pourra utiliser l'opérateur `void` :

```js
button.onclick = () => void faireQQc();
```

Ainsi, la valeur de retour de la fonction `faireQQc` sera bloquée par `void` et c'est `undefined` qui sera la valeur de retour de la fonction fléchée. Cela s'avère utile si on change l'API de `faireQQc` par exemple et qu'on souhaite éviter les effets de bord causés par cette modification.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("undefined")}}
