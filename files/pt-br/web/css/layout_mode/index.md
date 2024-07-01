---
title: Modelo de layout
slug: Web/CSS/Layout_mode
---

O modelo de layout [CSS](/pt-BR/docs/Web/CSS), às vezes abreviado por _layout_, é um algoritimo que determina a posição e tamanho dos boxes baseado em como estes interagem com os boxes filhos e boxe ancestral. Há vários layouts:

- _Block layout_, designed for laying out documents. The block layout contains document-centric features, like the ability to [_float_](/pt-BR/docs/Web/CSS/float) elements or to lay them out over [_multiple columns_](/pt-BR/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts).
- _Inline layout_, designed for laying out text.
- [_Table layout_](/pt-BR/docs/Web/CSS/CSS_Table), designed for laying out tables.
- [_Positioned layout_](/pt-BR/docs/Web/CSS/CSS_Positioning), designed for positioning elements without much interaction with other elements.
- [_Flexible box layout_](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout), designed for laying out complex pages that can be resized smoothly.
- [_Grid layout_](/pt-BR/docs/Web/CSS/CSS_Grid_Layout), designed for laying out elements relative to a fixed grid.

> **Nota:** Not all [CSS properties](/pt-BR/docs/Web/CSS/Reference) apply to all _layout modes_. Most of them apply to one or two of them and have no effect if they are set on an element participating in another layout mode.
