---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTableCellElement`** fournit des propriétés et méthodes particulières (en plus de l'interface {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler la disposition et la présentation des cellules de tableau, qu'il s'agisse de cellules d'en-tête ({{HTMLElement("th")}}) ou de cellules de données ({{HTMLElement("td")}}), dans un document HTML.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableCellElement.abbr")}}
  - : Une chaîne de caractères pouvant être utilisée sur les éléments `<th>` (et non sur {{HTMLElement("td")}}), définissant un libellé alternatif pour la cellule d'en-tête. Ce libellé alternatif peut être utilisé dans d'autres contextes, par exemple lors de la description des en-têtes associés à une cellule de données. Il sert à proposer un terme plus court, notamment pour les lecteurs d'écran&nbsp;; c'est un outil précieux pour l'accessibilité. Généralement, la valeur de `abbr` est une abréviation ou un acronyme, mais il peut s'agir de tout texte approprié au contexte.
- {{DOMxRef("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : Un nombre représentant la position de la cellule dans le tableau {{DOMxRef("HTMLTableRowElement.cells", "cells")}} de l'élément HTML {{HTMLElement("tr")}} auquel la cellule appartient. Si la cellule n'appartient à aucun `<tr>`, il retourne `-1`.
- {{DOMxRef("HTMLTableCellElement.colSpan")}}
  - : Un nombre positif indiquant le nombre de colonnes que cette cellule doit couvrir&nbsp;; cela permet à la cellule d'occuper l'espace sur plusieurs colonnes du tableau. Cela reflète l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan).
- {{DOMxRef("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DOMTokenList")}} décrivant une liste d'`id` des éléments {{HTMLElement("th")}} qui représentent les entêtes associés à la cellule. Cela reflète l'attribut [`headers`](/fr/docs/Web/HTML/Reference/Elements/td#headers).
- {{DOMxRef("HTMLTableCellElement.rowSpan")}}
  - : Un nombre positif indiquant le nombre de lignes que cette cellule doit couvrir&nbsp;; cela permet à la cellule d'occuper l'espace sur plusieurs lignes du tableau. Cela reflète l'attribut [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan).
- {{DOMxRef("HTMLTableCellElement.scope")}}
  - : Une chaîne de caractères indiquant la portée d'une cellule {{HTMLElement("th")}}. Les valeurs possibles pour `scope` sont&nbsp;: `col`, `colgroup`, `row`, `rowgroup` ou la chaîne vide (`""`).

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}_.

## Deprecated properties

> [!WARNING]
> These properties have been deprecated and should no longer be used. They are documented primarily to help understand older code bases.

- {{DOMxRef("HTMLTableCellElement.align")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la valeur énumérée de l'attribut [`align`](/fr/docs/Web/HTML/Reference/Elements/td#align). Cette propriété décrit l'alignement du contenu de la cellule compte tenu du contexte&nbsp;; ses valeurs possibles sont `"left"`, `"right"`, et `"center"`. Utilisez plutôt la propriété CSS {{CSSxRef("text-align")}}.
- `HTMLTableCellElement.axis` {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un nom regroupant des cellules de manière virtuelle. C'est une représentation de l'attribut obsolète [`axis`](/fr/docs/Web/HTML/Reference/Elements/td#axis).
- {{DOMxRef("HTMLTableCellElement.bgColor")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la couleur de fond des cellules. C'est une représentation de l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Reference/Elements/td#bgcolor).
- {{DOMxRef("HTMLTableCellElement.ch")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un unique caractère. Ce caractère est celui utilisé pour l'alignement de toutes les cellules d'une même colonne. Il représente l'attribut [`char`](/fr/docs/Web/HTML/Reference/Elements/td#char) et prend par défaut la valeur du séparateur décimal associé à la langue, par exemple `'.'` pour l'anglais, `ou ','` pour le français. Cette propriété était optionnelle et peu supportée.
- {{DOMxRef("HTMLTableCellElement.chOff")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant un entier indiquant le nombre de caractères devant être laissés à droite (pour les écritures de gauche à droite&nbsp;; sinon à gauche pour les écritures de droite à gauche) du caractère défini par `HTMLTableCellElement.ch`. Cette propriété était optionnelle et peu supportée.
- `HTMLTableCellElement.height` {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la valeur en pixels de la hauteur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète [`height`](/fr/docs/Web/HTML/Reference/Elements/td#height).
- {{DOMxRef("HTMLTableCellElement.noWrap")}} {{Deprecated_Inline}}
  - : Un booléen représentant l'attribut `nowrap` et indiquant si le contenu de la cellule peut être scindé en plusieurs lignes.
- {{DOMxRef("HTMLTableCellElement.vAlign")}} {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant une valeur énumérée indiquant le type d'alignement vertical attendu du contenu de la cellule. Cette propriété représente l'attribut [`valign`](/fr/docs/Web/HTML/Reference/Elements/td#valign) et peut prendre l'une des valeurs suivantes&nbsp;: `"top"`, `"middle"`, `"bottom"`, `ou "baseline"`. Utilisez plutôt la propriété CSS {{CSSxRef("vertical-align")}}.
- `HTMLTableCellElement.width` {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant la valeur en pixels de la largeur de l'empreinte de la cellule. C'est une représentation de l'attribut obsolète [`width`](/fr/docs/Web/HTML/Reference/Elements/td#width). Utilisez plutôt la propriété CSS {{CSSxRef("width")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML implémentant cette interface&nbsp;: {{HTMLElement("th")}} et {{HTMLElement("td")}}
