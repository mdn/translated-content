---
title: Copie profonde
slug: Glossary/Deep_copy
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

Une **copie profonde** (<i lang="en">deep copy</i> en anglais) d'un objet est une copie dont les propriétés ne partagent pas les mêmes références (ne pointent pas vers les mêmes valeurs sous-jacentes) que celles de l'objet source à partir duquel la copie a été faite. Par conséquent, lorsque vous modifiez soit la source, soit la copie, vous pouvez être assuré·e que vous ne faites pas changer l'autre objet. Ce comportement contraste avec celui d'une {{Glossary("shallow copy", "copie superficielle")}}, dans lequel les modifications des propriétés imbriquées dans la source ou la copie peuvent également faire changer l'autre objet.

Une copie profonde est généralement implémentée de manière récursive comme suit&nbsp;:

1. Un nouvel objet du même type est créé. La chaîne de prototypes peut ou pas être copiée (et généralement ce n'est pas le cas), mais par exemple, une copie profonde d'un tableau ({{JSxRef("Array")}}) doit donner un tableau ({{JSxRef("Array")}}) et pas autre chose.
2. Pour chaque propriété propre de l'objet original, une propriété avec la même clé et les mêmes descripteurs est définie sur le nouvel objet.
3. La valeur de chaque nouvelle propriété est définie comme une copie profonde de la valeur de la propriété originale. Si la valeur de la propriété est un type primitif, aucune copie n'est effectuée.
4. Toute donnée qui n'est pas exposée en tant que propriété (comme {{JSxRef("Map")}}) est copiée en profondeur, à condition que l'implémentation reconnaisse le type d'objet et sache comment récupérer et définir les données.
5. En général, il existe un certain support pour les références circulaires.

Notez que comme JavaScript n'a pas de mécanisme intégré qui effectue une véritable copie profonde, les implémentations des bibliothèques divergent souvent sur des détails techniques, tels que&nbsp;:

- Si les propriétés non énumérables ou symboliques sont copiées
- Si les propriétés d'accesseur sont copiées en tant qu'accesseurs
- Si les propriétés du prototype sont copiées
- Quelles structures de données prennent en charge la copie des données qui ne sont pas des propriétés

La copie d'un objet dont toutes les propriétés ont des valeurs primitives correspond à la définition d'une copie profonde et d'une {{Glossary("shallow copy", "copie superficielle")}}. Il est quelque peu inutile de parler de la profondeur d'une telle copie, car elle n'a pas de propriétés imbriquées et nous parlons généralement de copie profonde dans le contexte de la modification de propriétés imbriquées.

En JavaScript, les opérations standards intégrées de copie d'objet ([syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), et [`Object.assign()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) ne créent pas de copies profondes (elles créent des copies superficielles).

Une façon de faire une copie profonde d'un objet JavaScript, s'il peut être {{Glossary("serialization", "sérialisé")}}, est d'utiliser {{JSxRef("JSON.stringify()")}} pour convertir l'objet en une chaîne de caractères JSON, puis {{JSxRef("JSON.parse()")}} pour convertir la chaîne de caractères en un nouvel objet JavaScript (complètement nouveau)&nbsp;:

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

Cependant, bien que l'objet dans le code ci-dessus soit suffisamment simple pour être {{Glossary("serialization", "sérialisé")}}, de nombreux objets JavaScript ne sont pas possibles à sérialiser du tout — par exemple, [les fonctions](/fr/docs/Web/JavaScript/Guide/Functions) (avec des fermetures), [les Symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol), les objets qui représentent des éléments HTML dans [l'API DOM HTML](/fr/docs/Web/API/HTML_DOM_API), les données récursives, et bien d'autres cas. Appeler `JSON.stringify()` pour sérialiser les objets dans ces cas échoue. Faire une copie profonde de ces objets nécessite d'autres API ou bibliothèques.

L'API web {{DOMxRef("Window.structuredClone", "structuredClone()")}} crée également des copies profondes et a l'avantage de permettre aux [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) dans la source d'être _transférés_ vers la nouvelle copie, plutôt que simplement clonés. Elle gère également plus de types de données, comme `Error`. Mais notez que `structuredClone()` n'est pas une fonctionnalité du langage JavaScript lui-même — c'est une fonctionnalité des navigateurs et autres hôtes JavaScript qui implémentent les API web. Et appeler `structuredClone()` pour cloner un objet non sérialisable échoue de la même manière qu'appeler `JSON.stringify()` pour le sérialiser.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Deep equality", "Égalité profonde")}}
  - {{Glossary("Shallow copy", "Copie superficielle")}}
- La méthode JavaScript {{DOMxRef("Window.structuredClone()")}}
- La méthode JavaScript {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
