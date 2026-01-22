---
title: Copie profonde
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **copie profonde** (<i lang="en">deep copy</i> en anglais) d'un objet est une copie dont les propriétés ne partagent pas les mêmes références (ne pointent pas vers les mêmes valeurs sous-jacentes) que celles de l'objet source à partir duquel la copie a été faite. Par conséquent, lorsque vous modifiez soit la source, soit la copie, vous pouvez être assuré·e que vous ne faites pas changer l'autre objet. Ce comportement contraste avec celui d'une {{Glossary("shallow copy", "copie superficielle")}}, dans lequel les modifications des propriétés imbriquées dans la source ou la copie peuvent également faire changer l'autre objet.

Deux objets `o1` et `o2` sont _structurellement équivalents_ si leurs comportements observés sont les mêmes. Ces comportements incluent&nbsp;:

1. Les propriétés de `o1` et `o2` ont les mêmes noms dans le même ordre.
2. Les valeurs de leurs propriétés sont structurellement équivalentes.
3. Leurs chaînes de prototypes sont structurellement équivalentes (bien que lorsque nous traitons l'équivalence structurelle, ces objets soient généralement des objets simples, c'est-à-dire qu'ils héritent tous deux de `Object.prototype`).

Des objets structurellement équivalents peuvent être soit le même objet (`o1 === o2`), soit des _copies_ (`o1 !== o2`). Comme les valeurs primitives équivalentes sont toujours égales, vous ne pouvez pas en faire des copies.

Nous pouvons maintenant définir plus formellement les copies profondes comme&nbsp;:

1. Ce ne sont pas le même objet (`o1 !== o2`).
2. Les propriétés de `o1` et `o2` ont les mêmes noms dans le même ordre.
3. Les valeurs de leurs propriétés sont des copies profondes l'une de l'autre.
4. Leurs chaînes de prototypes sont structurellement équivalentes.

Les copies profondes peuvent ou non avoir leurs chaînes de prototypes copiées (et souvent ce n'est pas le cas). Mais deux objets avec des chaînes de prototypes structurellement non équivalentes (par exemple, l'un est un tableau et l'autre un objet simple) ne sont jamais des copies l'un de l'autre.

La copie d'un objet dont toutes les propriétés ont des valeurs primitives correspond à la définition d'une copie profonde et d'une {{Glossary("shallow copy", "copie superficielle")}}. Il est quelque peu inutile de parler de la profondeur d'une telle copie, car elle n'a pas de propriétés imbriquées et nous parlons généralement de copie profonde dans le contexte de la modification de propriétés imbriquées.

En JavaScript, les opérations standards intégrées de copie d'objet ([syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), et [`Object.assign()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) ne créent pas de copies profondes (elles créent des copies superficielles).

Une façon de faire une copie profonde d'un objet JavaScript, s'il peut être {{Glossary("serialization", "sérialisé")}}, est d'utiliser {{JSxRef("JSON.stringify()")}} pour convertir l'objet en une chaîne JSON, puis {{JSxRef("JSON.parse()")}} pour convertir la chaîne en un nouvel objet JavaScript (complètement nouveau)&nbsp;:

```js
const listeDesIngedients = ["pâtes", { list: ["oeufs", "farine", "eau"] }];
const copieProfondeListeDesIngredients = JSON.parse(
  JSON.stringify(listeDesIngedients),
);
```

Comme une copie profonde ne partage aucune référence avec son objet source, toute modification apportée à la copie profonde n'affecte pas l'objet source.

```js
// On change la valeur de la propriété 'list' dans copieProfondeListeDesIngredients.
copieProfondeListeDesIngredients[1].list = ["farine de riz", "eau"];
// La propriété 'list' ne change pas dans listeDesIngedients.
console.log(listeDesIngedients[1].list);
// Array(3) [ "oeufs", "farine", "eau" ]
```

Cependant, bien que l'objet dans le code ci-dessus soit suffisamment simple pour être {{Glossary("serialization", "sérialisable")}}, de nombreux objets JavaScript ne sont pas sérialisables du tout — par exemple, [les fonctions](/fr/docs/Web/JavaScript/Guide/Functions) (avec des fermetures), [les Symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol), les objets qui représentent des éléments HTML dans l'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API), les données récursives, et bien d'autres cas. Appeler `JSON.stringify()` pour sérialiser les objets dans ces cas échouera. Il n'y a donc aucun moyen de faire des copies profondes de tels objets.

L'API web {{DOMxRef("Window.structuredClone", "structuredClone()")}} crée également des copies profondes et a l'avantage de permettre aux [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) dans la source d'être _transférés_ vers la nouvelle copie, plutôt que simplement clonés. Elle gère également plus de types de données, comme `Error`. Mais notez que `structuredClone()` n'est pas une fonctionnalité du langage JavaScript lui-même — c'est une fonctionnalité des navigateurs et autres hôtes JavaScript qui implémentent les API web. Et appeler `structuredClone()` pour cloner un objet non sérialisable échouera de la même manière qu'appeler `JSON.stringify()` pour le sérialiser.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Shallow copy", "Copie superficielle")}}
- La méthode JavaScript {{DOMxRef("Window.structuredClone()")}}
- La méthode JavaScript {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
