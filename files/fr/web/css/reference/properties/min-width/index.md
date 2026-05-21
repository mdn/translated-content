---
title: Propriété CSS `min-width`
short-title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`min-width`** est utilisée pour définir la largeur minimale d'un élément donné. Elle empêche [la valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de la propriété {{CSSxRef("width")}} de devenir inférieure à la valeur définie par `min-width`.

{{InteractiveExample("Démonstration CSS&nbsp;: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Changer la largeur minimale.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

La largeur de l'élément sera la valeur de la propriété `min-width` si celle-ci est supérieure à {{CSSxRef("max-width")}} ou à {{CSSxRef("width")}}.

## Syntaxe

```css
/* Valeur de type <length> */
min-width: 3.5em;

/* Valeurs de type <percentage> */
min-width: 10%;

/* Valeurs avec un mot-clé */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);
min-width: stretch;

/* Valeurs globales */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la largeur minimale (`min-width`) comme une valeur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la largeur minimale (`min-width`) comme un pourcentage de la largeur du bloc englobant.
- `auto`
  - : La valeur par défaut. La source de la valeur automatique pour l'élément défini dépend de sa valeur d'affichage. Pour les boîtes de type bloc, les boîtes en ligne, les blocs en ligne et toutes les boîtes de mise en page de tableau, `auto` se résout à `0`.

    Pour les {{Glossary("Flex_Item", "éléments flexibles")}} et les éléments de grille, la valeur minimale de largeur est soit la taille suggérée définie, comme la valeur de la propriété `width`, la taille transférée, calculée si l'élément a un `aspect-ratio` défini et que la hauteur est une taille définie, sinon, la taille `min-content` est utilisée. Si l'élément flexible ou de grille est un {{Glossary("scroll container", "conteneur défilant")}}, ou si un élément de grille s'étend sur plus d'une piste de colonne flexible, la taille minimale automatique est `0`.

- {{CSSxRef("max-content")}}
  - : La largeur minimale (`min-width`) intrinsèque préférée.
- {{CSSxRef("min-content")}}
  - : La largeur minimale (`min-width`) intrinsèque minimale.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que {{CSSxRef("max-content")}}, c'est-à-dire `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument défini, c'est-à-dire `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Limite la largeur minimale de la [marge de la boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_composants_dune_boîte) de l'élément à la largeur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Elle tente de faire en sorte que la marge de la boîte remplisse l'espace disponible dans le bloc englobant, se comportant ainsi de manière similaire à `100%`, mais en appliquant la taille résultante à la marge de la boîte plutôt qu'à la boîte déterminée par {{CSSxRef("box-sizing")}}.

    > [!NOTE]
    > Pour vérifier les alias utilisés par les navigateurs pour la valeur `stretch` et son état d'implémentation, consultez la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la largeur minimale d'un élément

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("max-width")}}
- La propriété {{CSSxRef("width")}}
- La propriété {{CSSxRef("min-inline-size")}}
- La propriété {{CSSxRef("min-block-size")}}
- La propriété {{CSSxRef("box-sizing")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
