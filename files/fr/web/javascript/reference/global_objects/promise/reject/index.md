---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/reject
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/reject
---
{{JSRef}}

La méthode **`Promise.reject(raison)`** renvoie un objet `Promise` qui est rejeté (la promesse n'est pas tenue) à cause d'une raison donnée.

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## Syntaxe

    Promise.reject(raison);

### Paramètres

- `raison`
  - : La raison pour laquelle la `Promise` n'a pas été tenue.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui est rompue avec la raison passée en argument.

## Description

La fonction statique `Promise.reject` renvoie une `Promise` qui est rejetée. Pour faciliter le débogage (comprendre plus rapidement le problème et sélectionner une erreur précise), il peut être utile que l'argument `raison` soit une instance d'{{jsxref("Error")}}.

## Exemples

```js
Promise.reject(new Error("échec")).then(function() {
  // n'est pas appelée
}, function(erreur) {
  console.log(erreur); // Analyse de la pile d'appels
});
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                    |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.reject', 'Promise.reject')}} | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-promise.reject', 'Promise.reject')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise.reject")}}

## Voir aussi

- {{jsxref("Promise")}}
