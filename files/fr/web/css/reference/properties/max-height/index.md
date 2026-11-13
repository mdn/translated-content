---
title: Propriété CSS `max-height`
short-title: max-height
slug: Web/CSS/Reference/Properties/max-height
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`max-height`** définit la hauteur maximale d'un élément. Elle empêche la [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de la propriété {{CSSxRef("height")}} de devenir supérieure à la valeur définie pour `max-height`.

{{InteractiveExample("Démonstration CSS&nbsp;: max-height")}}

```css interactive-example-choice
max-height: 150px;
```

```css interactive-example-choice
max-height: 7em;
```

```css interactive-example-choice
max-height: 75%;
```

```css interactive-example-choice
max-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la hauteur maximale. <br />Cela
    limitera la hauteur de la boîte, pouvant provoquer un débordement.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

La valeur de `max-height` surcharge la valeur de {{CSSxRef("height")}} mais elle est surchargée par {{CSSxRef("min-height")}}.

## Syntaxe

```css
/* Valeur de type <length> */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--my-anchor self-block, 250px) + 2em);

/* Valeurs de type <percentage> */
max-height: 75%;

/* Valeurs avec un mot-clé */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);
max-height: stretch;

/* Valeurs globales */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: revert-layer;
max-height: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la hauteur maximale (`max-height`) comme une valeur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la hauteur maximale (`max-height`) comme un pourcentage de la hauteur du bloc englobant.
- `none`
  - : Aucune limite à la taille de la boîte.
- {{CSSxRef("max-content")}}
  - : La hauteur maximale (`max-height`) intrinsèque préférée.
- {{CSSxRef("min-content")}}
  - : La hauteur maximale (`max-height`) intrinsèque minimale.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que {{CSSxRef("max-content")}}, c'est-à-dire `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument défini, c'est-à-dire `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Limite la hauteur maximale de la [marge de la boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_composants_dune_boîte) de l'élément à la hauteur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Elle tente de faire en sorte que la marge de la boîte remplisse l'espace disponible dans le bloc englobant, se comportant ainsi de manière similaire à `100%` mais en appliquant la taille résultante à la marge de la boîte plutôt qu'à la boîte déterminée par {{CSSxRef("box-sizing")}}.

    > [!NOTE]
    > Pour vérifier les alias utilisés par les navigateurs pour la valeur `stretch` et son état d'implémentation, consultez la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Accessibilité

Assurez-vous que les éléments définis avec une `max-height` ne sont pas tronqués et/ou ne masquent pas d'autres contenus lorsque la page est zoomée pour augmenter la taille du texte.

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre les critères de succès 1.4.4 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la hauteur maximale en utilisant des valeurs en pourcentage et des mots-clés

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("min-height")}}
- La propriété {{CSSxRef("height")}}
- La propriété {{CSSxRef("max-inline-size")}}
- La propriété {{CSSxRef("max-block-size")}}
- La propriété {{CSSxRef("box-sizing")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
