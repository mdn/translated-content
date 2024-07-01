---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
---

{{ APIRef("HTML DOM") }}

L'interface **`HTMLTableCellElement`** expose des méthodes et des propriétés spécifiques (s'ajoutant à celles fournies par l'interface générique {{domxref("HTMLElement")}}, également disponibles par héritage) pour l'agencement et la gestion de l'apparence des cellules de tableau dans un document HTML, qu'il s'agisse de cellules d'entête ou de données.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.colSpan")}}
  - : Renvoie un entier long positif (`unsigned` `long`) représentant le nombre de colonnes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut [`colspan`](/fr/docs/Web/HTML/Element/td#colspan).
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : Renvoie un entier long positif (`unsigned` `long`) représentant le nombre de lignes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut [`rowspan`](/fr/docs/Web/HTML/Element/td#rowspan).
- {{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}
  - : Renvoie un objet {{domxref("DOMSettableTokenList")}} décrivant la liste des `id` des éléments {{HTMLElement("th")}} représentant les entêtes associés à la cellule. C'est une représentation de l'attribut [`headers`](/fr/docs/Web/HTML/Element/td#headers).
- {{domxref("HTMLTableCellElement.cellIndex")}} {{readonlyInline}}
  - : Renvoie un entier long (`long`) représentant la position de la cellule dans la collection de cellules de l'élement {{HTMLElement("tr")}} auquel elle appartient. Cette propriété renvoie `-1` si la cellule n'appartient à aucun élément `<tr>.`
- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : Renvoie un chaîne {{domxref("DOMString")}} contenant la valeur énumérée de l'attribut [`align`](/fr/docs/Web/HTML/Element/td#align). Cette propriété décrit l'alignement du contenu de la cellule compte tenu du contexte ; ses valeurs possibles sont `"left"`, `"right"`, et `"center"`.
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la couleur de fond des cellules. C'est une représentation de l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Element/td#bgColor).
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un nom regroupant des cellules de manière virtuelle. C'est une représentation de l'attribut obsolète [`axis`](/fr/docs/Web/HTML/Element/td#axis).
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la hauteur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète [`height`](/fr/docs/Web/HTML/Element/td#height).
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la largeur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète [`width`](/fr/docs/Web/HTML/Element/td#width).
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un unique caractère. Ce caractère est celui utilisé pour l'alignement de toutes les cellules d'une même colonne. Il représente l'attribut [`char`](/fr/docs/Web/HTML/Element/td#char) et prend par défaut la valeur du séparateur décimal associé à la langue, par exemple `'.'` pour l'anglais, `ou ','` pour le français. Cette propriété était optionnelle et peu supportée.
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un entier indiquant le nombre de caractères devant être laissés à droite (pour les écritures de gauche à droite ; sinon à gauche pour les écritures de droite à gauche) du caractère défini par `HTMLTableCellElement.ch`. Cette propriété était optionnelle et peu supportée.
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : Renvoie un valeur booléenne {{domxref("Boolean")}} représentant l'attribut [`nowrap`](/fr/docs/Web/HTML/Element/td#nowrap) et indiquant si le contenu de la cellule peut être scindé en plusieurs lignes.
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant une valeur énumérée indiquant le type d'alignement vertical attendu du contenu de la cellule. Cette propriété représente l'attribut [`valign`](/fr/docs/Web/HTML/Element/td#valign) et peut prendre l'une des valeurs suivantes : `"top"`, `"middle"`, `"bottom"`, `ou "baseline"`.

## Méthodes

_Aucune méthode spécifique ; hérite des méthodes de son parent, {{domxref("HTMLElement")}}_.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Éléments HTML implémentant cette interface : {{HTMLElement("th")}} et {{HTMLElement("td")}} par héritage via {{domxref("HTMLTableHeaderCellElement")}} et {{domxref("HTMLTableDataCellElement")}}.
