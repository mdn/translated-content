---
title: element.getElementsByTagName
slug: Web/API/Element/getElementsByTagName
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
translation_of: Web/API/Element/getElementsByTagName
---
{{APIRef("DOM")}}

La méthode **`Element.getElementsByTagName()`** retourne une liste des éléments portant le [nom de balise](/fr/docs/Web/API/Element/tagName) donné. La recherche porte sur le sous-arbre de l'élément spécifié, à l'exception de cet élément lui-même. La liste retournée est _live_, c'est à dire qu'elle se met à jour automatiquement à chaque changement de l'arbre DOM. Par conséquent, il n'est pas nécessaire d'appeller plusieurs fois `Element.getElementsByTagName()` avec le même élément et les mêmes arguments.

Quand elle est appelée sur un élément HTML dans un document HTML, `getElementsByTagName` place son argument en minuscule avant de continuer. Cela n'est pas souhaitable lorsque vous tentez de faire correspondre des éléments SVG «&nbsp;<i lang="en">camel-case</i>&nbsp;» dans une sous-arborescence dans un document HTML. [`Element.getElementsByTagNameNS`](/fr/docs/Web/API/Element/getElementsByTagNameNS) fonctionne dans ce cas.

`Element.getElementsByTagName` est similaire à {{domxref("Document.getElementsByTagName()")}}, à part que sa recherche est limitée aux éléments qui sont des descendants de l'élément spécifié.

## Syntaxe

    elements = element.getElementsByTagName(tagName)

- `elements` est une {{domxref("HTMLCollection")}} contenant les éléments trouvés, dans l'ordre dans lequel ils apparaissent dans le sous-arbre. Si aucun élément n'a été trouvé, la `HTMLCollection` est vide.
- `element` est l'élément depuis lequel la recherche doit commencer. Notez que seuls les descendants de cet élément feront partie des résultats, mais pas l'élément lui-même.
- `tagName` est le nom qualifié à rechercher. La chaîne spéciale `"*"` représente tous les éléments possibles. Pour la compatibilité avec XHTML, les minuscules doivent être utilisées.

## Exemple

```js
// vérifie l'alignement sur un nombre de cellules dans un tableau.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    var status = cells[i].getAttribute("data-status");
    if ( status == "open" ) {
        // saisit les données
    }
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                           | Commentaire                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-getelementsbytagname', 'Element.getElementsByTagName()')}} | {{Spec2('DOM WHATWG')}} | Change la valeur de retour de {{domxref("NodeList")}} à{{domxref("HTMLCollection")}} |
| {{SpecName('DOM3 Core', 'core.html#ID-1938918D', 'Element.getElementsByTagName()')}}                 | {{Spec2('DOM3 Core')}}     | Pas de changement par rapport à {{SpecName('DOM2 Core')}}                                         |
| {{SpecName('DOM2 Core', 'core.html#ID-1938918D', 'Element.getElementsByTagName()')}}                 | {{Spec2('DOM2 Core')}}     | Pas de changement par rapport à {{SpecName('DOM1')}}                                             |
| {{SpecName('DOM1', 'level-one-core.html#ID-1938918D', 'Element.getElementsByTagName()')}}         | {{Spec2('DOM1')}}         | Définition initiale                                                                                      |

## Compatibilité des navigateurs

{{Compat("api.Element.getElementsByTagName")}}
