---
title: HTMLCollection
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLCollection`** est constituée d'une collection générique (à la manière d'un tableau similaire à {{JSxRef("Functions/arguments", "arguments")}}) d'éléments (dans l'ordre du document) et offre des méthodes et des propriétés pour sélectionner ces éléments dans la liste.

Une `HTMLCollection` dans le DOM HTML est «&nbsp;dynamique&nbsp;»&nbsp;; elle est automatiquement mise à jour lorsque le document sous-jacent est modifié. Pour cette raison, il est conseillé d'en faire une copie (par exemple, en utilisant {{JSxRef("Array/from", "Array.from")}}) pour itérer si vous ajoutez, déplacez ou supprimez des nœuds.

Cette interface est appelée `HTMLCollection` pour des raisons historiques (avant DOM4, les collections implémentant cette interface pouvaient uniquement êtres constituées d'élements HTML).

Cette interface était une [tentative de créer une liste non modifiable <sup>(angl.)</sup>](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) et continue d'être prise en charge uniquement pour ne pas casser le code qui l'utilise déjà. Les API modernes représentent les structures de liste à l'aide de types basés sur les [tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) JavaScript, ce qui rend de nombreuses méthodes de tableau disponibles, tout en imposant des sémantiques supplémentaires à leur utilisation (comme rendre leurs éléments en lecture seule).

Ces raisons historiques ne signifient pas que vous, en tant que développeur·euse, devez éviter `HTMLCollection`. Vous ne créez pas vous-même d'objets `HTMLCollection`, mais vous les obtenez via des API comme {{DOMxRef("Document.getElementsByClassName()")}}, et ces API ne sont pas obsolètes. Cependant, faites attention aux différences sémantiques avec un véritable tableau.

## Propriétés

- {{DOMxRef("HTMLCollection.length")}} {{ReadOnlyInline}}
  - : Retourne le nombre d'éléments de la collection.

## Méthodes

- {{DOMxRef("HTMLCollection.item()")}}
  - : Retourne le nœud spécifique à l'`index` basé sur zéro donné dans la liste. Retourne `null` si l'`index` est hors de portée.

    Une alternative à l'accès par `collection[i]` (qui retourne `undefined` si `i` est hors limites). Ceci est surtout utile pour les implémentations DOM non JavaScript.

- {{DOMxRef("HTMLCollection.namedItem()")}}
  - : Retourne le nœud spécifique dont l'ID ou, à défaut, le nom correspond à la chaîne de caractères fournie par `name`. La recherche par nom est faite seulement en dernier ressort, uniquement en HTML, et seulement si l'élément référencé supporte l'attribut `name`. Retourne `null` si aucun nœud n'existe pour le nom donné.

    Une alternative à l'accès par `collection[name]` (qui retourne `undefined` si `name` n'existe pas). Ceci est surtout utile pour les implémentations DOM non JavaScript.

## Utilisation en JavaScript

`HTMLCollection` expose aussi directement ses membres comme propriétés, par nom et par index. Les ID HTML peuvent contenir `:` et `.` comme caractères valides, ce qui nécessite d'utiliser la notation entre crochets pour accèder aux propriétés. Actuellement, `HTMLCollections` ne reconnait pas purement les ID numériques, ce qui provoquerait des conflits avec l'accès de `"array-style"`, bien qu'HTML le permette.

Par exemple, en supposant qu'il y ait un élément `<form>` _(formulaire)_ dans le document et que son `id` soit `"myForm"`&nbsp;:

```js
var elem1, elem2;

// document.forms est une HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // affiche : "true" (vrai)

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // affiche : "true"

elem1 = document.forms["named.item.with.periods"];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("NodeList")}}
- Les interfaces {{DOMxRef("HTMLFormControlsCollection")}}, {{DOMxRef("HTMLOptionsCollection")}}
