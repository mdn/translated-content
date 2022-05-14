---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLTableCellElement
---
{{ APIRef("HTML DOM") }}

L'interface **`HTMLTableCellElement`** expose des méthodes et des propriétés spécifiques (s'ajoutant à celles fournies par l'interface générique {{domxref("HTMLElement")}}, également disponibles par héritage) pour l'agencement et la gestion de l'apparence des cellules de tableau dans un document HTML, qu'il s'agisse de cellules d'entête ou de données.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.colSpan")}}
  - : Renvoie un entier long positif (`unsigned` `long`) représentant le nombre de colonnes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut {{htmlattrxref("colspan", "td")}}.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : Renvoie un entier long positif (`unsigned` `long`) représentant le nombre de lignes sur lesquelles doit s'étendre cette cellule. C'est une représentation de l'attribut {{htmlattrxref("rowspan", "td")}}.
- {{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}
  - : Renvoie un objet {{domxref("DOMSettableTokenList")}} décrivant la liste des `id` des éléments {{HTMLElement("th")}} représentant les entêtes associés à la cellule. C'est une représentation de l'attribut {{htmlattrxref("headers", "td")}}.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{readonlyInline}}
  - : Renvoie un entier long (`long`) représentant la position de la cellule dans la collection de cellules de l'élement {{HTMLElement("tr")}} auquel elle appartient. Cette propriété renvoie`-1` si la cellule n'appartient à aucun élément `<tr>.`
- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : Renvoie un chaîne {{domxref("DOMString")}} contenant la valeur énumérée de l'attribut {{htmlattrxref("align", "td")}}. Cette propriété décrit l'alignement du contenu de la cellule compte tenu du contexte ; ses valeurs possibles sont `"left"`, `"right"`, et `"center"`.
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la couleur de fond des cellules. C'est une représentation de l'attribut obsolète {{htmlattrxref("bgColor", "td")}}.
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un nom regroupant des cellules de manière virtuelle. C'est une représentation de l'attribut obsolète {{htmlattrxref("axis", "td")}}.
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la hauteur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète {{htmlattrxref("height", "td")}}.
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant la valeur en pixels de la largeur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète {{htmlattrxref("width", "td")}}.
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un unique caractère. Ce caractère est celui utilisé pour l'alignement de toutes les cellules d'une même colonne. Il représente l'attribut {{htmlattrxref("char", "td")}} et prend par défaut la valeur du séparateur décimal associé à la langue, par exemple `'.'` pour l'anglais, `ou ','` pour le français. Cette propriété était optionnelle et peu supportée.
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant un entier indiquant le nombre de caractères devant être laissés à droite (pour les écritures de gauche à droite ; sinon à gauche pour les écritures de droite à gauche) du caractère défini par `HTMLTableCellElement.ch`. Cette propriété était optionnelle et peu supportée.
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : Renvoie un valeur booléenne {{domxref("Boolean")}} représentant l'attribut {{htmlattrxref("nowrap", "td")}} et indiquant si le contenu de la cellule peut être scindé en plusieurs lignes.
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : Renvoie une chaîne {{domxref("DOMString")}} contenant une valeur énumérée indiquant le type d'alignement vertical attendu du contenu de la cellule. Cette propriété représente l'attribut {{htmlattrxref("valign", "td")}} et peut prendre l'une des valeurs suivantes : `"top"`, `"middle"`, `"bottom"`, `ou "baseline"`.

## Méthodes

_Aucune méthode spécifique ; hérite des méthodes de son parent, {{domxref("HTMLElement")}}_.

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}} | {{Spec2('HTML WHATWG')}} | Aucune modification depuis {{SpecName("HTML5 W3C")}}.                                                                                                                                                                                                                                                                                                                                                                              |
| {{SpecName('HTML5 W3C', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}}     | {{Spec2('HTML5 W3C')}}     | Les propriétés suivantes sont devenues obsolètes : `align`, `axis`, `bgColor`, `height`, `width`, `ch`, `chOff`, `noWrap`, `et vAlign`. La propriété `headers` est maintenant en lecture seule et renvoie un objet {{domxref("DOMSettableTokenList")}} au lieu d'une simple chaîne {{domxref("DOMString")}}. Les propriétés `colspan` et `rowspan` renvoient maintenant des entiers long positifs (`unsigned long)`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-82915075', 'HTMLTableCellElement')}}                         | {{Spec2('DOM2 HTML')}}     | La propriété `cellIndex` est maintenant accessible en lecture seule.                                                                                                                                                                                                                                                                                                                                                                      |
| {{SpecName('DOM1', 'level-one-html.html#ID-82915075', 'HTMLTableCellElement')}}                     | {{Spec2('DOM1')}}         | Définition initiale.                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Compatibilité des navigateurs

{{Compat("api.HTMLTableCellElement")}}

## Voir aussi

- Éléments HTML implémentant cette interface   : {{HTMLElement("th")}} et {{HTMLElement("td")}} par héritage via {{domxref("HTMLTableHeaderCellElement")}} et {{domxref("HTMLTableDataCellElement")}}.
