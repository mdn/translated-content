---
title: Alignement de boîte CSS
short-title: Alignement de boîte
slug: Web/CSS/Guides/Box_alignment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module **d'alignement de boîte CSS** définit les fonctionnalités CSS relatives à l'alignement des boîtes dans leurs conteneurs. Il définit l'alignement des différents modèles de mise en page CSS, y compris la mise en page en bloc, la mise en page en tableau, la mise en page flexible (<i lang="en">flexbox</i>) et la mise en page en grille, créant une méthode d'alignement cohérente dans tout le CSS.

Le module détaille la terminologie de l'alignement, permettant aux propriétés d'alignement d'être utilisées dans plusieurs modules de mise en page, plutôt que d'être limitées à une méthode de mise en page particulière.

L'alignement est lié aux modes d'écriture en ce sens que lorsque nous alignons un élément, nous ne considérons pas si nous l'alignons par rapport aux dimensions physiques de haut, droite, bas et gauche. Au lieu de cela, nous décrivons l'alignement en termes de début et de fin de la dimension particulière sur laquelle nous travaillons. Cela garantit que l'alignement fonctionne de la même manière quel que soit le mode d'écriture du document.

L'alignement du texte et du contenu en ligne est défini respectivement dans le [module de texte CSS](/fr/docs/Web/CSS/Guides/Text) et le [module de disposition en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout).

## Référence

### Propriétés CSS

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("justify-content")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("place-content")}}
- {{CSSxRef("place-items")}}
- {{CSSxRef("place-self")}}
- {{CSSxRef("row-gap")}}

### Types de données

- {{CSSxRef("baseline-position")}}
- {{CSSxRef("content-distribution")}}
- {{CSSxRef("content-position")}}
- {{CSSxRef("overflow-position")}}
- {{CSSxRef("self-position")}}

### Termes et définitions

- {{Glossary("Alignment container", "Bloc d'alignement")}}
- {{Glossary("Alignment subject", "Sujet d'alignement")}}
- [Alignement sur la ligne de base](/fr/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
- [Alignement distribué](/fr/docs/Web/CSS/Guides/Box_alignment/Overview#distributed_alignment)
- {{Glossary("Fallback alignment", "Alignement de repli")}}
- [Alignement positionnel](/fr/docs/Web/CSS/Guides/Box_alignment/Overview#positional_alignment)

## Guides

- [Aperçu de l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
  - : Aperçu des concepts généraux trouvés dans le module d'alignement des boîtes CSS.

- [Alignement des boîtes dans des boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Comment l'alignement des boîtes fonctionne dans le contexte des boîtes flexibles.

- [Alignement des boîtes dans la mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Comment l'alignement des boîtes fonctionne dans le contexte de la mise en page en grille.

- [Alignement des boîtes dans la mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
  - : Comment l'alignement des boîtes fonctionne dans le contexte de la mise en page multi-colonnes.

- [Alignement des boîtes pour la mise en page en bloc, positionnée absolument et en tableau](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
  - : Comment l'alignement des boîtes fonctionne dans le contexte de la mise en page en bloc, y compris les éléments flottants, positionnés et en tableau.

## Concepts associés

- {{CSSxRef("alignment-baseline")}}
- {{CSSxRef("dominant-baseline")}}
- {{CSSxRef("scroll-snap-align")}}
- L'attribut SVG {{SVGAttr("dominant-baseline")}}
- {{Glossary("Cross axis", "Axe transversal")}}
- {{Glossary("Main axis", "Axe principal")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Alignement des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Alignement des boîtes dans la mise en page en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- Le module [mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
