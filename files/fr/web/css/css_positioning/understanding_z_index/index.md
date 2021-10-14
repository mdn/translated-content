---
title: Comprendre z-index en CSS
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index
original_slug: Web/CSS/Comprendre_z-index
---
{{CSSRef}}{{PreviousMenuNext("","Web/CSS/Comprendre_z-index/Empilement_sans_z-index", "Web/CSS/Comprendre_z-index")}}

Généralement, les pages HTML sont vues comme des objets en deux dimensions et le texte, les images et les autres éléments sont disposés sans se chevaucher. Il y a un seul flux de rendu, et tous les éléments connaissent la place occupée par les autres.

> _Dans CSS 2.1, chaque boîte a une position dans les 3 dimensions. En plus de leurs positions horizontale et verticale, les boîtes sont disposées sur un axe Z et sont disposées les unes sur les autres. Les positions sur l'axe Z sont particulièrement importantes lorsque deux boîtes se chevauchent visuellement._

Source : [Section 9.9.1. de CSS 2.1 - La présentation en couches](https://www.w3.org/TR/CSS2/visuren.html#z-index)

Cela signifie que les règles de style CSS permettent de positionner des boîtes sur différentes couches, la couche « normale » étant la couche située en 0 sur l'axe Z. La position de chaque couche sur l'axe Z est exprimée par un nombre entier qui représente l'ordre d'empilement pour le rendu visuel. Plus cet entier sera grand, plus la couche sera haute dans la pile. Cette valeur se contrôle via la propriété CSS {{cssxref("z-index")}}.

`z-index` peut sembler simple d'utilisation : il ne s'agit que d'une seule propriété, exprimée avec un entier et un comportement plutôt simple de prime abord. Cependant, lorsque `z-index` est appliquée à des hiérarchies complexes d'éléments HTML, son comportement peut vite devenir difficile à appréhender, voire imprévisible. Ceci est dû aux règles complexes d'empilement.

Ces articles ont pour but d'expliquer ces règles, de proposer quelques simplifications et de nombreux exemples.

1.  [L'empilement sans `z-index`](/fr/docs/Web/CSS/Comprendre_z-index/Empilement_sans_z-index) : Règles d'empilement par défaut
2.  [L'empilement et `float`](/fr/docs/Web/CSS/Comprendre_z-index/Empilement_et_float) : Comportement des éléments flottants
3.  [Ajouter `z-index`](/fr/docs/Web/CSS/Comprendre_z-index/Ajout_de_z-index) : Utiliser `z-index` pour modifier l'empilement par défaut
4.  [L'empilement de couches](/fr/docs/Web/CSS/Comprendre_z-index/Empilement_de_couches) : Remarques sur l'empilement de couches
5.  [Exemple d'empilement n°1](/fr/docs/Web/CSS/Comprendre_z-index/Exemple_1) : Hiérarchie HTML à 2 niveaux, `z-index` sur le dernier niveau
6.  [Exemple d'empilement n°2](/fr/docs/Web/CSS/Comprendre_z-index/Exemple_2) : Hiérarchie HTML à 2 niveaux, `z-index` sur tous les éléments
7.  [Exemple d'empilement n°3](/fr/docs/Web/CSS/Comprendre_z-index/Exemple_3) : Hiérarchie HTML à 3 niveaux, `z-index` sur le deuxième niveau

{{PreviousMenuNext("","Web/CSS/Comprendre_z-index/Empilement_sans_z-index", "Web/CSS/Comprendre_z-index")}}
