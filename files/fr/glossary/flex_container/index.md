---
title: Conteneur flexible
slug: Glossary/Flex_Container
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Une mise en page {{Glossary("flexbox")}} est définie en utilisant les valeurs `flex` ou `inline-flex` de la propriété `display` sur l'élément parent. Cet élément devient alors un **conteneur flexible** et chacun de ses enfants un {{Glossary("flex item", "élément flexible")}}.

Une valeur `flex` fait que l'élément devient un conteneur flexible de niveau bloc et `inline-flex`, un conteneur flexible de niveau en ligne. Ces valeurs créent un **contexte de mise en forme flexible** pour l'élément, qui est similaire à un contexte de mise en forme de bloc dans la mesure où les flottants ne s'introduiront pas dans le conteneur et les marges du conteneur ne s'effondreront pas avec celles des articles.

### Propriété CSS associées

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("flex")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-flow")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("justify-content")}}

## Voir aussi

- [Concepts de base de Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Alignement des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Inspecteur Flexbox CSS&nbsp;: examiner les mises en page flexbox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
