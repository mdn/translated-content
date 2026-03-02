---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTableRowElement`** fournit des propriétés et des méthodes spéciales (au-delà de l'interface {{DOMxRef("HTMLElement")}} dont elle dispose également par héritage) pour manipuler la mise en page et la présentation des lignes dans un tableau HTML.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableRowElement.cells")}} {{ReadOnlyInline}}
  - : Retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant les cellules de la ligne. La `HTMLCollection` est dynamique et se met automatiquement à jour lorsque des cellules sont ajoutées ou supprimées.
- {{DOMxRef("HTMLTableRowElement.rowIndex")}} {{ReadOnlyInline}}
  - : Retourne un nombre indiquant la position logique de la ligne dans l'ensemble du tableau. Si la ligne ne fait pas partie d'un tableau, retourne `-1`.
- {{DOMxRef("HTMLTableRowElement.sectionRowIndex")}} {{ReadOnlyInline}}
  - : Retourne un nombre indiquant la position logique de la ligne dans la section du tableau à laquelle elle appartient. Si la ligne ne fait pas partie d'une section, retourne `-1`.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}_.

- {{DOMxRef("HTMLTableRowElement.deleteCell()")}}
  - : Supprime la cellule correspondant à `index`. Si `index` vaut `-1`, la dernière cellule de la ligne est supprimée. Si `index` est inférieur à `-1` ou supérieur au nombre de cellules dans la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.
- {{DOMxRef("HTMLTableRowElement.insertCell()")}}
  - : Retourne un objet {{DOMxRef("HTMLTableCellElement")}} représentant une nouvelle cellule de la ligne. La cellule est insérée dans la collection de cellules juste avant la position `index` donnée dans la ligne. Si `index` vaut `-1`, la nouvelle cellule est ajoutée à la fin de la collection. Si `index` est inférieur à `-1` ou supérieur au nombre de cellules dans la collection, une {{DOMxRef("DOMException")}} avec la valeur `IndexSizeError` est levée.

## Propriétés obsolètes

> [!WARNING]
> Ces propriétés sont obsolètes et ne doivent plus être utilisées. Elles sont documentées principalement pour aider à comprendre d'anciens codes sources.

- {{DOMxRef("HTMLTableRowElement.align")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant une valeur énumérée reflétant l'attribut [`align`](/fr/docs/Web/HTML/Reference/Elements/tr#align). Elle indique l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"` et `"center"`.
- {{DOMxRef("HTMLTableRowElement.bgColor")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la couleur d'arrière-plan des cellules. Elle reflète l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Reference/Elements/tr#bgcolor).
- {{DOMxRef("HTMLTableRowElement.ch")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un seul caractère. Ce caractère sert à aligner toutes les cellules d'une colonne. Elle reflète l'attribut [`char`](/fr/docs/Web/HTML/Reference/Elements/tr#char) et prend par défaut le séparateur décimal associé à la langue, par exemple `'.'` pour l'anglais ou `','` pour le français. Cette propriété était optionnelle et peu prise en charge.
- {{DOMxRef("HTMLTableRowElement.chOff")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un entier indiquant combien de caractères doivent être laissés à droite (pour les écritures de gauche à droite&nbsp;; ou à gauche pour les écritures de droite à gauche) du caractère défini par `HTMLTableRowElement.ch`. Cette propriété était optionnelle et peu prise en charge.
- {{DOMxRef("HTMLTableRowElement.vAlign")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant une valeur énumérée indiquant comment le contenu de la cellule doit être aligné verticalement. Elle reflète l'attribut [`valign`](/fr/docs/Web/HTML/Reference/Elements/tr#valign) et peut avoir l'une des valeurs suivantes&nbsp;: `"top"`, `"middle"`, `"bottom"` ou `"baseline"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("tr")}}.
