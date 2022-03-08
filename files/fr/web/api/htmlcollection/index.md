---
title: HTMLCollection
slug: Web/API/HTMLCollection
tags:
  - API
  - DOM
  - Reference
translation_of: Web/API/HTMLCollection
---
{{APIRef("HTML DOM")}}

L'interface **HTMLCollection** est constituée d'une collection générique (à la manière d'un tableau similaire à [arguments](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments)) d'éléments (dans l'ordre du document) et offre des méthodes et des propriétés pour sélectionner ces éléments dans la liste.

**Note:** Cette interface est appelée `HTMLCollection` pour des raisons historiques (avant DOM4, les collections implémentant cette interface pouvaient uniquement êtres constituées d'élements HTML).

Une HTMLCollection dans le DOM HTML est automatiquement mise à jour quand le document concerné change.

## Propriétés

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : Retourne le nombre d'éléments de la collection.

## Méthodes

- {{domxref("HTMLCollection.item()")}}
  - : Retourne le nœud spécifique à l'`index` basé sur zéro donné dans la liste. Retourne `null` si l'`index` est hors de portée.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Retourne le nœud spécifique dont l'ID ou, à défaut, le nom correspond à la chaîne de caractères fournie par `name`. La recherche par nom est faite seulement en dernier ressort, uniquement en HTML, et seulement si l'élément référencé supporte l'attribut `name`. Retourne `null` si aucun nœud n'existe pour le nom donné.

## Utilisation en JavaScript

`HTMLCollection` expose aussi directement ses membres comme propriétés, par nom et par index. Les ID HTML peuvent contenir : et . comme caractères valides, ce qui nécessite d'utiliser la notation entre crochets pour accèder aux propriétés. Actuellement, HTMLCollections ne reconnait pas  purement les ID numériques, ce qui provoquerait des conflits avec l'accès de "array-style" , bien qu'HTML5 le permette.

Par exemple, en supposant qu'il y ait un élément `<form>` _(formulaire)_ dans le document et que son `id` soit `"myForm"`&nbsp;:

```html
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

## Compatibilité des navigateurs

Certains navigateurs se comportent différemment quand il y a plus d'un élément correspondant à la chaîne utilisée comme index (ou l'argument `namedItem`). Firefox 8 se comporte comme spécifié dans DOM 2 et DOM4, en retournant le premier élément correspondant. Les navigateurs WebKit et Internet Explorer, dans ce cas, retournent une autre `HTMLCollection` et Opera retourne un {{domxref("NodeList")}} de tous les éléments correspondants.

## Spécifications

| Specification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#htmlcollection', 'HTMLCollection')}}             | {{ Spec2('DOM WHATWG') }} |                      |
| {{SpecName('DOM2 HTML', 'html.html#ID-75708506', 'HTMLCollection')}}     | {{ Spec2('DOM2 HTML') }} |                      |
| {{SpecName('DOM1', 'level-one-html.html#ID-75708506', 'HTMLCollection')}} | {{ Spec2('DOM1') }}         | Définition initiale. |

## Voir aussi

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
