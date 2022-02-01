---
title: L’algorithme de clonage structuré
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
translation_of: Web/API/Web_Workers_API/Structured_clone_algorithm
original_slug: Web/API/Web_Workers_API/algorithme_clonage_structure
---
L’algorithme de clonage structuré est un nouvel algorithme [défini par la spécification HTML5](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data) pour sérialiser les objets JavaScript complexes. Il est plus puissant que [JSON](/en/JSON) en cela qu’il supporte la sérialisation d’objets contenant des graphes cycliques — des objets peuvent faire référence à des objets faisant référence à d’autres objets dans le même graphe. De plus, dans certains cas, l’algorithme de clonage structuré peut être plus efficace que JSON.

L’algorithme, essentiellement, parcourt tous les champs de l’objet original, copiant les valeurs de chaque champ dans un nouvel objet. Si un champ est lui-même un objet avec des champs, ces champs sont parcourus de manière récursive jusqu’à ce que chaque champ et sous-champ aient été copié dans le nouvel objet.

## Avantages par rapport à JSON

Il y a quelques avantages notables à utiliser l’algorithme de clonage structuré plutôt que JSON :

- Le clonage structuré peut copier des objets [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp).
- Le clonage structuré peut copier des objets {{ domxref("Blob") }}, {{ domxref("File") }} et {{ domxref("FileList") }}.
- Le clonage structuré peut copier des objets {{ domxref("ImageData") }}. Les dimensions du {{ domxref("CanvasPixelArray") }} du clone correspondront à celles de l’original, et il recevra une copie des mêmes données de pixels.
- Le clonage structuré copie correctement les objets contenant des graphes de références cycliques.

## Ce qui ne marche pas avec le clonage structuré

- Les objets [`Error`](/en/JavaScript/Reference/Global_Objects/Error) et [`Function`](/en/JavaScript/Reference/Global_Objects/Function) ne peuvent pas être copiés par l’algorithme de clonage structuré ; toute tentative de le faire émettra une exception `DATA_CLONE_ERR`.
- De la même manière, toute tentative de cloner des nœuds DOM émettra une exception `DATA_CLONE_ERR`.
- Certains paramètres d’objets ne sont pas préservés :

  - Le champ `lastIndex` des objets [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp) n’est pas préservé.
  - Les descripteurs de propriétés, accesseurs et mutateurs (ainsi que les fonctionnalités de métadonnées similaires) ne sont pas copiés. Par exemple, si un objet est marqué en lecture seule _via_ un descripteur de propriété, il sera en lecture et écriture dans le clone, car c’est la condition par défaut.
  - La chaîne de prototypes n’est ni parcourue, ni copiée.

## Types supportés

| Type d’objet                                                                        | Notes                                                                                                          |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Tous types primitifs](/en-US/docs/Web/JavaScript/Data_structures#Primitive_values) | À l’exception des symboles                                                                                     |
| Objet [Booléen](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)        |                                                                                                                |
| Objet String                                                                        |                                                                                                                |
| [Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    |                                                                                                                |
| [RegExp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)                | Le champ `lastIndex` n’est pas préservé                                                                        |
| {{ domxref("Blob") }}                                                        |                                                                                                                |
| {{ domxref("File") }}                                                        |                                                                                                                |
| {{ domxref("FileList") }}                                                    |                                                                                                                |
| [ArrayBuffer](/en-US/docs/Web/API/ArrayBuffer)                                      |                                                                                                                |
| [ArrayBufferView](/en-US/docs/Web/API/ArrayBufferView)                              | Ce qui implique tous les [tableaux typés](/en-US/docs/Web/JavaScript/Typed_arrays) tels que `Int32Array`, etc. |
| {{ domxref("ImageData") }}                                                |                                                                                                                |
| [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)                  |                                                                                                                |
| [Object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                | Inclut seulement les objets plats (par ex. depuis un objet littéral)                                           |
| [Map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)                      |                                                                                                                |
| [Set](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)                      |                                                                                                                |

## Alternative : copie profonde

Si vous voulez une **copie profonde** d’un objet (c’est-à-dire une copie récursive de toutes les propriétés imbriquées, en parcourant la chaîne des prototypes), vous devez employer une autre approche. Ce qui suit est un exemple possible.

```js
function clone(objectToBeCloned) {
  // Cas basique.
  if (!(objectToBeCloned instanceof Object)) {
    return objectToBeCloned;
  }

  var objectClone;

  // Filtre les objets spéciaux.
  var Constructor = objectToBeCloned.constructor;
  switch (Constructor) {
    // Implémenter d’autres objets spéciaux ici.
    case RegExp:
      objectClone = new Constructor(objectToBeCloned);
      break;
    case Date:
      objectClone = new Constructor(objectToBeCloned.getTime());
      break;
    default:
      objectClone = new Constructor();
  }

  // Clone chaque propriété.
  for (var prop in objectToBeCloned) {
    objectClone[prop] = clone(objectToBeCloned[prop]);
  }

  return objectClone;
}
```

> **Note :** Cet algorithme ne prend en charge que les objets spéciaux [`RegExp`](/en/JavaScript/Reference/Global_Objects/RegExp), [`Array`](/en/JavaScript/Reference/Global_Objects/Array) et [`Date`](/en/JavaScript/Reference/Global_Objects/Date). Vous pouvez implémenter d’autres cas spéciaux selon vos besoins.

## Voir aussi

- [Spécification HTML5 : Passage sécurisé de données structurées](http://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{ domxref("window.history") }}
- {{ domxref("window.postMessage()") }}
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [Components.utils.cloneInto](/en-US/docs/Components.utils.cloneInto)
