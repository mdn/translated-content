---
title: Copie superficielle
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **copie superficielle** d'un objet est une copie dont les propriétés partagent les mêmes {{Glossary("object reference", "références")}} (pointent vers les mêmes valeurs sous-jacentes) que celles de l'objet source à partir duquel la copie a été réalisée. Ainsi, lorsque vous modifiez l'objet source ou la copie, vous pouvez également provoquer une modification de l'autre objet. Ce comportement contraste avec celui d'une {{Glossary("deep copy", "copie profonde")}}, où la source et la copie sont totalement indépendantes.

Plus formellement, deux objets `o1` et `o2` sont des copies superficielles si&nbsp;:

1. Ce ne sont pas le même objet (`o1 !== o2`).
2. Les propriétés de `o1` et `o2` ont les mêmes noms dans le même ordre.
3. Les valeurs de leurs propriétés sont égales.
4. Leurs chaînes de prototypes sont égales.

Voir aussi la définition de _{{Glossary("deep copy", "équivalence structurelle")}}_.

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

La réaffectation de la valeur d'une propriété imbriquée sera visible dans les deux objets.

```js
ingredientsListCopy[1].list = ["farine de riz", "eau"];
console.log(ingredientsList[1].list);
// Tableau [ "farine de riz", "eau" ]
```

La réaffectation de la valeur d'une propriété de premier niveau (l'index `0` dans ce cas) ne sera visible que dans l'objet modifié.

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
  - {{Glossary("Deep copy", "Copie profonde")}}
