---
title: Alignement de recours
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 35bb8cea8badfbc1b3fffbd0ade2699893dc8fe1
---

{{GlossarySidebar}}

Dans [le module CSS sur l'alignement des boîtes](/fr/docs/Web/CSS/CSS_box_alignment), un alignement de recours (<i lang="en">fallback alignement</i>) est indiqué afin de traiter les cas où l'alignement demandé ne peut être respecté. Par exemple, si on indique `justify-content: space-between`, il doit y avoir plus d'un [sujet d'alignement](/fr/docs/Glossary/Alignment_Subject). Si ce n'est pas le cas, c'est l'alignement de recours qui est utilisé. Cet alignement diffère selon la méthode d'alignement voulue, comme suit&nbsp;:

| Alignement souhaité | Alignement de recours |
| ------------------- | --------------------- |
| `first baseline`    | `start`               |
| `last baseline`     | `safe end`            |
| `baseline`          | `start`               |
| `space-between`     | `flex-start`          |
| `space-around`      | `center`              |
| `space-evenly`      | `center`              |
| `stretch`           | `flex-start`          |

## Voir aussi

- [La section de MDN sur le module de spécification CSS sur l'alignement des boîtes](/fr/docs/Web/CSS/CSS_box_alignment)
