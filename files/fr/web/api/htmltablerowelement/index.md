---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
---

{{ APIRef("HTML DOM") }}

L'interface **`HTMLTableRowElement`** fournit des propriétés et des méthodes spéciales (au-delà de l'interface {{domxref("HTMLElement")}} dont elle dispose également par héritage) pour manipuler la mise en page et la présentation des lignes dans un tableau HTML.

{{InheritanceDiagram(600, 120)}}

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableRowElement.align")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} contenant une valeur énumérée reflétant l'attribut [`align`](/fr/docs/Web/HTML/Element/tr#align). Il indique l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"`, et `"center"`.
- {{domxref("HTMLTableRowElement.bgColor")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} contenant la couleur de fond des cellules. Il reflète l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Element/tr#bgColor) attribute.
- {{domxref("HTMLTableRowElement.cells")}} {{readonlyInline}}
  - : Renvoie une {{domxref("HTMLCollection")}} en direct contenant les cellules de la ligne. La `HTMLCollection` est active et est automatiquement mise à jour lorsque des cellules sont ajoutées ou supprimées.
- {{domxref("HTMLTableRowElement.ch")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} contenant un seul caractère. Ce caractère est celui sur lequel aligner toutes les cellules d'une colonne. Il reflète [`char`](/fr/docs/Web/HTML/Element/tr#char) et par défaut les points décimaux associés à la langue, par exemple `'.'` pour l'anglais, ou `','` pour le français. Cette propriété était facultative et n'était pas très bien prise en charge.
- {{domxref("HTMLTableRowElement.chOff")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} contenant un entier indiquant combien de caractère doivent être laissés à droite (pour les scripts de gauche à droite; ou à gauche pour les scripts de droite à gauche) du caractère défini par `HTMLTableRowElement.ch`. Cette propriété était facultative et n'était pas très bien prise en charge.
- {{domxref("HTMLTableRowElement.rowIndex")}} {{readonlyInline}}
  - : Renvoie une valeur `long` qui donne la position logique de la ligne dans la table entière. Si la ligne ne fait pas partie d'une table, renvoie `-1`.
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{readonlyInline}}
  - : Renvoie une valeur `long` qui donne la position logique de la ligne dans la section de table à laquelle elle appartient. Si la ligne ne fait pas partie d'une section, renvoie `-1`.
- {{domxref("HTMLTableRowElement.vAlign")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} représentant une valeur énumérée indiquant comment le contenu de la cellule doit être aligné verticalement. Il reflète l'attribut [`valign`](/fr/docs/Web/HTML/Element/tr#valign) et peut avoir l'une des valeurs suivantes : `"top"`, `"middle"`, `"bottom"`, ou `"baseline"`.

## Méthodes

_Hérite des méthodes de son parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableRowElement.deleteCell()")}}
  - : Supprime la cellule à la position donnée dans la ligne. Si la position donnée est supérieure (ou égale car elle commence à zéro) au nombre de cellules dans la ligne, ou est inférieure à `0`, elle déclenche une {{domxref("DOMException")}} avec la valeur `IndexSizeError`.
- {{domxref("HTMLTableRowElement.insertCell()")}}
  - : Insère une nouvelle cellule juste avant la position donnée dans la ligne. Si la position donnée n'est pas donnée ou est `-1`, elle ajoute la cellule à la ligne. Si la position donnée est supérieure (ou égale car elle commence à zéro) au nombre de cellules dans la ligne, ou est inférieure à `-1`, elle déclenche une {{domxref("DOMException")}} avec la valeur `IndexSizeError`. Renvoie une référence à un [HTMLTableCellElement \[en-US\]](/fr/docs/Web/API/HTMLTableCellElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface : {{HTMLElement("tr")}}.
