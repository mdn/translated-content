---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

La méthode **`Promise.allSettled()`** renvoie une promesse qui est résolue une fois que l'ensemble des promesses de l'itérable passée en argument sont réussies ou rejetées. La valeur de résolution de cette promesse est un tableau d'objets dont chacun est le résultat de chaque promesse de l'itérable.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## Syntaxe

```js
p.allSettled(iterable);
```

### Paramètres

- `iterable`
  - : Un objet [itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration) tel qu'un tableau ({{jsxref("Array")}}) dont chaque élément est une promesse ({{jsxref("Promise")}}.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) **en cours** qui sera résolue de façon **asynchrone** une fois que chaque promesse de l'itérable a été résolue (tenue/réussie ou rejetée/échouée). Le gestionnaire passé à la promesse retournée recevra comme argument un tableau de valeur dont chacune est le résultat de chaque promesse de l'itérable initial.

Pour chaque objet contenu dans ce tableau, il y aura une propriété `status` qui est une chaîne de caractères. Si `status` vaut `fulfilled`, alors on aura une propriété `value`. Si `status` vaut `rejected`, alors une propriété `reason` sera présente. La valeur (ou la raison) reflète la valeur de résolution de la promesse.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide - Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
- [Programmation asynchrone à l'aide des promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
