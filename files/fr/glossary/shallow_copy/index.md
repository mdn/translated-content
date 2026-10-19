---
title: Copie superficielle
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

Une **copie superficielle** d'un objet est une copie dont les propriétés partagent les mêmes {{Glossary("object reference", "références")}} (pointent vers les mêmes valeurs sous-jacentes) que celles de l'objet source à partir duquel la copie a été réalisée. Ainsi, lorsque vous modifiez l'objet source ou la copie, vous pouvez également provoquer une modification de l'autre objet. Ce comportement contraste avec celui d'une {{Glossary("deep copy", "copie profonde")}}, où la source et la copie sont totalement indépendantes.

Une copie superficielle est généralement implémentée de la manière suivante&nbsp;:

1. Un nouvel objet du même type est créé. La chaîne de prototypes est presque toujours préservée. Par exemple, copier profondément un objet {{JSxRef("Map")}} doit produire un objet {{JSxRef("Map")}} et pas autre chose.
2. Pour chaque propriété propre de l'objet original, une propriété avec la même clé est définie sur le nouvel objet.
3. La valeur de chaque nouvelle propriété est définie sur la même référence que la valeur de la propriété originale. Si la valeur de la propriété est une primitive, aucune copie n'est effectuée.
4. Toutes les données qui ne sont pas exposées en tant que propriétés (comme {{JSxRef("Map")}}) sont transférées, mais sans copier les références d'objet à l'intérieur des données, à condition que l'implémentation reconnaisse le type d'objet et sache comment récupérer et définir les données.

Notez que, comme JavaScript n'a pas de mécanisme intégré qui effectue une copie superficielle générique (les mécanismes existants ne supposent que des types d'objets spécifiques comme les objets simples ou les tableaux), les implémentations des bibliothèques divergent souvent sur des détails techniques, tels que&nbsp;:

- Que les propriétés non énumérables ou symboliques sont copiées
- Que les descripteurs de propriétés sont copiés
- Que les propriétés accesseurs sont copiées en tant qu'accesseurs
- Quelles structures de données prennent en charge la copie des données qui ne sont pas des propriétés

La copie d'un objet dont toutes les propriétés ont des valeurs primitives correspond à la définition d'une {{Glossary("deep copy", "copie profonde")}} et d'une copie superficielle. Il est peu pertinent de parler de profondeur pour ce type de copie, car il n'a pas de propriétés imbriquées et on évoque généralement la copie profonde dans le contexte de la modification de propriétés imbriquées.

Pour une copie superficielle, seules les propriétés de premier niveau sont copiées, pas les valeurs des objets imbriqués. Ainsi&nbsp;:

- Réaffecter les propriétés de premier niveau de la copie n'affecte pas l'objet source.
- Réaffecter les propriétés des objets imbriqués de la copie affecte l'objet source.

En JavaScript, toutes les opérations standards de copie d'objet ([syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), et [`Object.assign()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) créent des copies superficielles plutôt que des copies profondes.

Considérez l'exemple suivant, où un tableau `ingredientsList` est créé, puis un objet `ingredientsListCopy` est créé en copiant ce tableau `ingredientsList`.

```js
const ingredientsList = ["nouilles", { list: ["œufs", "farine", "eau"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["nouilles",{"list":["œufs","farine","eau"]}]
```

La réaffectation de la valeur d'une propriété imbriquée est visible dans les deux objets.

```js
ingredientsListCopy[1].list = ["farine de riz", "eau"];
console.log(ingredientsList[1].list);
// Tableau [ "farine de riz", "eau" ]
```

La réaffectation de la valeur d'une propriété de premier niveau (l'index `0` dans ce cas) n'est visible que dans l'objet modifié.

```js
ingredientsListCopy[0] = "nouilles de riz";
console.log(ingredientsList[0]); // nouilles
console.log(JSON.stringify(ingredientsListCopy));
// ["nouilles de riz",{"list":["farine de riz","eau"]}]
console.log(JSON.stringify(ingredientsList));
// ["nouilles",{"list":["farine de riz","eau"]}]
```

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Deep equality", "Égalité profonde")}}
  - {{Glossary("Deep copy", "Copie profonde")}}
