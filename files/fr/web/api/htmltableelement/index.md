---
title: table
slug: Web/API/HTMLTableElement
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLTableElement
---
{{ ApiRef() }}

## Interface de l'élément HTML Table

Les objets `table` exposent l'interface [`HTMLTableElement`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425) ([traduction](http://www.yoyodesign.org/doc/w3c/dom2-html/html.html#ID-64060425)), qui fournit des propriétés et méthodes spécialisées (outre l'interface des objets [element](/fr/docs/DOM/element) qu'ils acquièrent également par héritage) pour manipuler la disposition et la présentation des tableaux en HTML.

## Propriétés

- [table.caption](/fr/docs/DOM/table.caption)
  - : **caption** renvoie la légende du tableau.
- [table.tHead](/fr/docs/DOM/table.tHead)
  - : **tHead** renvoie l'en-tête du tableau.
- [table.tFoot](/fr/docs/DOM/table.tFoot)
  - : **tFoot** renvoie le pied du tableau.
- [table.rows](/fr/docs/DOM/table.rows)
  - : **rows** renvoie les lignes du tableau.
- [table.tBodies](/fr/docs/DOM/table.tBodies)
  - : **tBodies** renvoie les corps du tableau.

<!---->

- [table.align](/fr/docs/DOM/table.align) {{ Deprecated_inline() }}
  - : **align** obtient ou définit l'alignement du tableau.
- [table.bgColor](/fr/docs/DOM/table.bgColor) {{ Deprecated_inline() }}
  - : **bgColor** obtient ou définit la couleur de fond du tableau.
- [table.border](/fr/docs/DOM/table.border) {{ Deprecated_inline() }}
  - : **border** obtient ou défini la bordure du tableau.
- [table.cellPadding](/fr/docs/DOM/table.cellPadding)
  - : **cellPadding** obtient ou définit les marges internes (
    _padding_
    ) des cellules.
- [table.cellSpacing](/fr/docs/DOM/table.cellSpacing)
  - : **cellSpacing** obtient ou définit l'espace entre les cellules.
- [table.frame](/fr/docs/DOM/table.frame)
  - : **frame** spécifie les côtés du tableau ayant une bordure.
- [table.rules](/fr/docs/DOM/table.rules)
  - : **rules** spécifie les bordures intérieures visibles.
- [table.summary](/fr/docs/DOM/table.summary)
  - : **summary** obtient ou définit le résumé du tableau.
- [table.width](/fr/docs/DOM/table.width)
  - : **width** obtient ou définit la largeur du tableau.

## Méthodes

- [table.createTHead](/fr/docs/DOM/table.createTHead)
  - : **createTHead** crée un en-tête de tableau.
- [table.deleteTHead](/fr/docs/DOM/table.deleteTHead)
  - : **deleteTHead** retire l'en-tête du tableau.
- [table.createTFoot](/fr/docs/DOM/table.createTFoot)
  - : **createTFoot** crée un pied de tableau.
- [table.deleteTFoot](/fr/docs/DOM/table.deleteTFoot)
  - : **deleteTFoot** retire un pied de tableau.
- [table.createCaption](/fr/docs/DOM/table.createCaption)
  - : **createCaption** crée une nouvelle légende pour le tableau.
- [table.deleteCaption](/fr/docs/DOM/table.deleteCaption)
  - : **deleteCaption** retire la légende d'un tableau.
- [table.insertRow](/fr/docs/DOM/table.insertRow)
  - : **insertRow** insère une nouvelle ligne.
- [table.deleteRow](/fr/docs/DOM/table.deleteRow)
  - : **deleteRow** retire une ligne.
