---
title: Alignement de repli
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Dans [le module CSS sur l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment), un alignement de repli (<i lang="en">fallback alignement</i>) est indiqué afin de traiter les cas où l'alignement demandé ne peut être respecté. Par exemple, si on indique `justify-content: space-between`, il doit y avoir plus d'un {{Glossary("alignment subject", "sujet d'alignement")}}. Si ce n'est pas le cas, c'est l'alignement de repli qui est utilisé. Cet alignement diffère selon la méthode d'alignement voulue, comme suit&nbsp;:

- Première ligne de base
  - : `start`
- Dernière ligne de base
  - : `safe end`
- Ligne de base
  - : `start`
- Espacement entre les éléments
  - : `flex-start` (début)
- Espacement autour
  - : `center`
- Espacement uniforme
  - : `center`
- Étirement
  - : `flex-start` (début)

## Voir aussi

- [L'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
