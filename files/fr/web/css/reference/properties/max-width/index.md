---
title: Propriété CSS `max-width`
short-title: max-width
slug: Web/CSS/Reference/Properties/max-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`max-width`** est utilisée pour définir la largeur maximale d'un élément. Elle empêche la [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de la propriété {{CSSxRef("width")}} de devenir supérieure à la valeur définie par `max-width`.

{{InteractiveExample("Démonstration CSS&nbsp;: max-width")}}

```css interactive-example-choice
max-width: 150px;
```

```css interactive-example-choice
max-width: 20em;
```

```css interactive-example-choice
max-width: 75%;
```

```css interactive-example-choice
max-width: 20ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Changez la largeur maximale.
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

`max-width` surcharge {{CSSxRef("width")}}, mais {{CSSxRef("min-width")}} surcharge `max-width`.

## Syntaxe

```css
/* Valeur de type <length> */
max-width: 3.5em;
max-width: anchor-size(--my-anchor inline, 245px);
max-width: calc(anchor-size(width) + 4em);

/* Valeursde type <percentage> */
max-width: 75%;

/* Valeurs avec un mot-clé */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fit-content(20em);
max-width: stretch;

/* Valeurs globales */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: revert-layer;
max-width: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la largeur maximale (`max-width`) avec une valeur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la largeur maximale (`max-width`) en pourcentage de la largeur du bloc englobant.
- `none`
  - : Aucune limite sur la taille de la boîte.
- {{CSSxRef("max-content")}}
  - : La largeur maximale (`max-width`) intrinsèque préférée.
- {{CSSxRef("min-content")}}
  - : La largeur maximale (`max-width`) intrinsèque minimale.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que {{CSSxRef("max-content")}}, c'est-à-dire `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument défini, c'est-à-dire `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Limite la largeur maximale de la [marge de la boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_composants_dune_boîte) de l'élément à la largeur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Elle tente de faire en sorte que la marge remplisse l'espace disponible dans le bloc englobant, se comportant ainsi de manière similaire à `100%`, mais en appliquant la taille résultante à la marge plutôt qu'à la boîte déterminée par {{CSSxRef("box-sizing")}}.

    > [!NOTE]
    > Pour vérifier les alias utilisés par les navigateurs pour la valeur `stretch` et son état d'implémentation, consultez la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `max-width` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.4 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une largeur maximale en pixels

Dans cet exemple, l'élément «&nbsp;enfant&nbsp;» aura la largeur la plus petite entre 150 et celle de l'élément «&nbsp;parent&nbsp;».

#### HTML

```html
<div id="parent">
  <div id="enfant">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#enfant {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### Résultat

{{EmbedLiveSample("Définir une largeur maximale en pixels", 350, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("min-width")}}
- La propriété {{CSSxRef("width")}}
- La propriété {{CSSxRef("max-inline-size")}}
- La propriété {{CSSxRef("max-block-size")}}
- La propriété {{CSSxRef("box-sizing")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
