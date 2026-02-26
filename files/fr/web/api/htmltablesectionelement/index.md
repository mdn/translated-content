---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTableSectionElement`** fournit des propriétés et des méthodes spéciales (au-delà de l'interface {{DOMxRef("HTMLElement")}} dont elle dispose également par héritage) pour manipuler la mise en page et la présentation des sections, c'est-à-dire les en-têtes, pieds et corps ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("tbody")}}) dans un tableau HTML.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableSectionElement.align")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant une valeur énumérée reflétant l'attribut [`align`](/fr/docs/Web/HTML/Reference/Elements/tr#align). Elle indique l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"` et `"center"`.
- {{DOMxRef("HTMLTableSectionElement.rows")}} {{ReadOnlyInline}}
  - : Retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant les lignes de la section. La `HTMLCollection` est dynamique et se met automatiquement à jour lorsque des lignes sont ajoutées ou supprimées.
- {{DOMxRef("HTMLTableSectionElement.ch")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un seul caractère. Ce caractère sert à aligner toutes les cellules d'une colonne. Elle reflète l'attribut [`char`](/fr/docs/Web/HTML/Reference/Elements/tr#char) et prend par défaut le séparateur décimal associé à la langue, par exemple `'.'` pour l'anglais ou `','` pour le français. Cette propriété était optionnelle et peu prise en charge.
- {{DOMxRef("HTMLTableSectionElement.chOff")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un entier indiquant combien de caractères doivent être laissés à droite (pour les écritures de gauche à droite&nbsp;; ou à gauche pour les écritures de droite à gauche) du caractère défini par `HTMLTableRowElement.ch`. Cette propriété était optionnelle et peu prise en charge.
- {{DOMxRef("HTMLTableSectionElement.vAlign")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant une valeur énumérée indiquant comment le contenu de la cellule doit être aligné verticalement. Elle reflète l'attribut [`valign`](/fr/docs/Web/HTML/Reference/Elements/tr#valign) et peut avoir l'une des valeurs suivantes&nbsp;: `"top"`, `"middle"`, `"bottom"` ou `"baseline"`.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableSectionElement.deleteRow()")}}
  - : Supprime la ligne correspondant à l'`index` donné en paramètre dans la section. Si la valeur d'`index` est `-1`, la dernière ligne est supprimée&nbsp;; si elle est inférieure à `-1` ou supérieure au nombre de lignes dans la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.
- {{DOMxRef("HTMLTableSectionElement.insertRow()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableRowElement")}} représentant une nouvelle ligne de la section. Elle l'insère dans la collection de lignes juste avant l'élément HTML {{HTMLElement("tr")}} à la position d'`index` donnée. Si `index` vaut `-1`, la nouvelle ligne est ajoutée à la fin de la collection. Si `index` est inférieur à `-1` ou supérieur au nombre de lignes dans la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML qui implémentent cette interface&nbsp;: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}} et {{HTMLElement("tbody")}}.
