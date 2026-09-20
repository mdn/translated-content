---
title: Disposition des boîtes flexibles CSS
short-title: Disposition des boîtes flexibles
slug: Web/CSS/Guides/Flexible_box_layout
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Le module **de disposition des boîtes flexibles CSS** définit un modèle de boîte CSS optimisé pour la conception d'interfaces utilisateur et la disposition des éléments dans une seule dimension. Dans le modèle de disposition flexible, les éléments enfants d'un conteneur flexible peuvent être disposés dans n'importe quelle direction et peuvent «&nbsp;s'adapter&nbsp;» en taille, soit en s'étendant pour remplir l'espace inutilisé, soit en se rétrécissant pour éviter de déborder de leur élément parent. L'alignement horizontal et vertical des éléments enfants peut être facilement modifié.

## Disposition des boîtes flexibles en action

Dans l'exemple suivant, un conteneur a été défini avec la propriété `display: flex`, ce qui signifie que les trois éléments enfants deviennent des éléments flexibles. La valeur de `justify-content` a été définie sur `space-between` afin d'espacer les éléments de manière uniforme sur l'axe principal. Un espace égal est placé entre chaque élément, les éléments de gauche et de droite étant alignés sur les bords du conteneur flexible. Vous pouvez également voir que les éléments s'étirent sur l'axe secondaire, en raison de la valeur par défaut de `align-items` qui est `stretch`. Les éléments s'étirent à la hauteur du conteneur flexible, ce qui les fait apparaître aussi grands que l'élément le plus grand.

```html live-sample___simple-example
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
</div>
```

```css live-sample___simple-example
body {
  font-family: sans-serif;
}

.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: space-between;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
}
```

{{EmbedLiveSample("simple-example")}}

## Référence

### Propriétés

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-flow")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-line-count")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("justify-content")}}

### Termes du glossaire

- {{Glossary("Flexbox", "Boîtes flexibles")}}
- {{Glossary("Flex container", "Conteneur flexible")}}
- {{Glossary("Flex item", "Objet flexible")}}
- {{Glossary("Main axis", "Axe principal")}}
- {{Glossary("Cross axis", "Axe secondaire")}}
- {{Glossary("Flex")}}

## Guides

- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Un aperçu de la fonctionnalité des boîtes flexibles.
- [Relation des boîtes flexibles avec d'autres méthodes de mise en page](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Comment les boîtes flexibles se rapportent aux autres méthodes de mise en page et aux autres spécifications CSS.
- [Aligner les éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Comment les propriétés d'alignement des boîtes fonctionnent avec les boîtes flexibles.
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Explication des différentes façons de changer l'ordre et la direction des éléments, et des problèmes potentiels liés à cette opération.
- [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Explication des propriétés `flex-grow`, `flex-shrink` et `flex-basis`.
- [Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Comment créer des conteneurs flexibles avec plusieurs lignes et contrôler l'affichage des éléments dans ces lignes.
- [Cas d'utilisation typiques des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Modèles de conception courants qui sont des cas d'utilisation typiques des boîtes flexibles.
- [Disposition CSS&nbsp;: boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : Apprenez à utiliser la mise en page en boîtes flexibles pour créer des mises en page web.
- [Alignement des boîtes dans les boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Détaille les fonctionnalités de [l'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment) qui sont spécifiques aux boîtes flexibles.

## Concepts associés

Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("place-content")}}
- {{CSSxRef("place-items")}}

Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("row-gap")}}

Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("aspect-ratio")}}
- La valeur {{CSSxRef("max-content")}}
- La valeur {{CSSxRef("min-content")}}
- La valeur {{CSSxRef("fit-content")}}
- L'entrée de glossaire {{Glossary("intrinsic size", "Taille intrinsèque")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module [des modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes)
- [Utiliser la syntaxe à mots-clés multiples avec l'affichage CSS](/fr/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)
