---
title: table
slug: Web/API/HTMLTableElement
---

{{ ApiRef() }}

## Interface de l'élément HTML Table

Les objets `table` exposent l'interface [`HTMLTableElement`](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425) ([traduction](http://www.yoyodesign.org/doc/w3c/dom2-html/html.html#ID-64060425)), qui fournit des propriétés et méthodes spécialisées (outre l'interface des objets [element](/fr/docs/Web/API/Element) qu'ils acquièrent également par héritage) pour manipuler la disposition et la présentation des tableaux en HTML.

## Propriétés

- [table.caption](/fr/docs/Web/API/HTMLTableElement/caption)
  - : **caption** renvoie la légende du tableau.
- [table.tHead](/fr/docs/Web/API/HTMLTableElement/tHead)
  - : **tHead** renvoie l'en-tête du tableau.
- [table.tFoot](/fr/docs/Web/API/HTMLTableElement/tFoot)
  - : **tFoot** renvoie le pied du tableau.
- [table.rows](/fr/docs/Web/API/HTMLTableElement/rows)
  - : **rows** renvoie les lignes du tableau.
- [table.tBodies](/fr/docs/Web/API/HTMLTableElement/tBodies)
  - : **tBodies** renvoie les corps du tableau.

<!---->

- [table.align](/fr/docs/Web/API/HTMLTableElement/align) {{ Deprecated_inline() }}
  - : **align** obtient ou définit l'alignement du tableau.
- [table.bgColor](/fr/docs/Web/API/HTMLTableElement/bgColor) {{ Deprecated_inline() }}
  - : **bgColor** obtient ou définit la couleur de fond du tableau.
- [table.border](/fr/docs/Web/API/HTMLTableElement/border) {{ Deprecated_inline() }}
  - : **border** obtient ou défini la bordure du tableau.
- [table.cellPadding](/fr/docs/Web/API/HTMLTableElement/cellPadding)
  - : **cellPadding** obtient ou définit les marges internes (
    _padding_
    ) des cellules.
- [table.cellSpacing](/fr/docs/Web/API/HTMLTableElement/cellSpacing)
  - : **cellSpacing** obtient ou définit l'espace entre les cellules.
- [table.frame](/fr/docs/Web/API/HTMLTableElement/frame)
  - : **frame** spécifie les côtés du tableau ayant une bordure.
- [table.rules](/fr/docs/Web/API/HTMLTableElement/rules)
  - : **rules** spécifie les bordures intérieures visibles.
- [table.summary](/fr/docs/Web/API/HTMLTableElement/summary)
  - : **summary** obtient ou définit le résumé du tableau.
- [table.width](/fr/docs/Web/API/HTMLTableElement/width)
  - : **width** obtient ou définit la largeur du tableau.

## Méthodes

- [table.createTHead](/fr/docs/Web/API/HTMLTableElement/createTHead)
  - : **createTHead** crée un en-tête de tableau.
- [table.deleteTHead](/fr/docs/Web/API/HTMLTableElement/deleteTHead)
  - : **deleteTHead** retire l'en-tête du tableau.
- [table.createTFoot](/fr/docs/Web/API/HTMLTableElement/createTFoot)
  - : **createTFoot** crée un pied de tableau.
- [table.deleteTFoot](/fr/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : **deleteTFoot** retire un pied de tableau.
- [table.createCaption](/fr/docs/Web/API/HTMLTableElement/createCaption)
  - : **createCaption** crée une nouvelle légende pour le tableau.
- [table.deleteCaption](/fr/docs/Web/API/HTMLTableElement/deleteCaption)
  - : **deleteCaption** retire la légende d'un tableau.
- [table.insertRow](/fr/docs/Web/API/HTMLTableElement/insertRow)
  - : **insertRow** insère une nouvelle ligne.
- [table.deleteRow](/fr/docs/Web/API/HTMLTableElement/deleteRow)
  - : **deleteRow** retire une ligne.
