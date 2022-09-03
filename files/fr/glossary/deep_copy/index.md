---
title: Copie profonde
slug: Glossary/Deep_copy
---
{{MDNSidebar}}

Une **copie profonde** d'un objet est une copie dont les propriétés ne partagent pas les mêmes références (ne pointent pas vers les mêmes valeurs sous-jacentes) que celles de l'objet source de laquelle la copie a été faite. Par conséquent, lorsque vous modifiez la source ou la copie, vous pouvez être assuré que vous ne modifiez pas également l'autre objet&nbsp;; c'est-à-dire que vous ne provoquerez pas involontairement des modifications inattendues de la source ou de la copie. Ce comportement contraste avec celui d'une [copie superficielle](/fr/docs/Glossary/Shallow_copy), dans lequel les modifications apportées à la source ou à la copie peuvent également entraîner la modification de l'autre objet (car les deux objets partagent les mêmes références).

En JavaScript, les opérations de copie d'objet intégrées standards comme la ([syntaxe de décomposition](/fr/docs/web/javascript/reference/Operators/spread_syntax), [`Array.prototype.concat()`](/fr/docs/web/javascript/reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), et [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)) ne créent pas de copies profondes (au lieu de cela, ils créent des copies superficielles).

Une façon de faire une copie complète d'un objet JavaScript, s'il peut être [sérialisé](/fr/docs/glossary/serialization), est d'utilisé {{jsxref("JSON.stringify()")}} pour convertir l'objet en une chaîne JSON, puis {{jsxref("JSON.parse()")}} pour reconvertir la chaîne en un (entièrement nouveau) objet JavaScript :

```js
let liste_ingredients = ["nouilles", {"liste": ["œufs", "farine", "eau"]}];
let liste_ingredients_copieprofonde = JSON.parse(JSON.stringify(liste_ingredients));

// Modifier la valeur de la propriété 'liste' dans liste_ingredients_copieprofonde
liste_ingredients_copieprofonde[1].liste = ["farine de riz", "water"];
// La propriété 'liste' ne change pas dans liste_ingredients
console.log(liste_ingredients[1].liste);
// Array(3) [ "œufs", "farine", "eau" ]
```

Comme le montre le code ci-dessus, étant donné qu'une copie complète ne partage aucune référence avec son objet source, toute modification apportée à la copie complète n'affecte pas l'objet source.

Cependant, alors que l'objet dans le code ci-dessus est assez simple pour être [sérialisable](/fr/docs/Glossary/Serialization), de nombreux objets JavaScript ne sont pas du tout sérialisables - par exemple, les [fonctions](/fr/docs/Web/JavaScript/Guide/Functions) (avec des fermetures), les [symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol), les objets qui représentent des éléments HTML dans le [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API), les données récursives, et bien d'autres cas. L'appel de `JSON.stringify()` pour sérialiser les objets échouera dans ce cas. Il n'y a donc aucun moyen de faire des copies complètes de tels objets.

Pour les objets qui _sont_ sérialisables, vous pouvez également utiliser le [`structuredClone()`](/en-US/docs/Web/API/structuredClone) méthode pour créer des copies profondes. `structuredClone()` a l'avantage de permettre {{Glossary("transferable objects")}} dans la source pour être _transféré_ vers la nouvelle copie, plutôt que simplement cloné. Mais notez que `structuredClone()` n'est pas une fonctionnalité du langage JavaScript lui-même - c'est plutôt une fonctionnalité des navigateurs et de tout autre environnement d'exécution de JavaScript qui implémente un objet global comme [`window`](/en-US/docs/Web /API/Fenêtre). Et appeler `structuredClone()` pour cloner un objet non sérialisable échouera de la même manière que l'appel de `JSON.stringify()` pour le sérialiser échouera.

## Pour approfondir

- [Copie superficielle](/fr/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/fr/docs/Web/API/structuredClone)
