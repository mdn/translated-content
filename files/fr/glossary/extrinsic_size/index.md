---
title: Taille extrinsèque
slug: Glossary/Extrinsic_size
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

En CSS, la **taille extrinsèque** d'un élément est déterminée par son contexte de mise en page, c'est-à-dire par des contraintes imposées de l'extérieur de l'élément, sans tenir compte de son contenu. C'est l'opposé de la {{Glossary("intrinsic size", "taille intrinsèque")}} d'un élément, qui est basée sur son contenu.

Le dimensionnement extrinsèque se produit lorsque vous définissez ou contraignez explicitement la taille d'un élément à l'aide de propriétés du [modèle de boîte CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) telles que {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("block-size")}}, {{CSSxRef("inline-size")}}, {{CSSxRef("max-width")}} et {{CSSxRef("min-height")}}.
Par exemple, lorsque vous définissez `width: 200px`, vous définissez une taille extrinsèque.

Les valeurs en pourcentage sont également extrinsèques&nbsp;: elles sont calculées par rapport au [bloc conteneur](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément.
Par exemple, `width: 50%` signifie que la largeur de l'élément sera `50%` de la largeur de son bloc conteneur, quel que soit le contenu de l'élément.

Les éléments de type bloc sont dimensionnés de manière extrinsèque. Lorsqu'aucune largeur n'est spécifiée, la largeur par défaut de l'élément bloc est `auto`, ce qui correspond à `100%` de la largeur de son bloc conteneur.

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Intrinsic size", "Taille intrinsèque")}}
- Le module [dimensionnement des boîtes CSS](/fr/docs/Web/CSS/CSS_box_sizing)
- La spécification [CSS Box Sizing Module Level 3 <sup>(angl.)</sup>](https://drafts.csswg.org/css-sizing-3/#extrinsic)
