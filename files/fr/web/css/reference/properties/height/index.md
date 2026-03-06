---
title: height
slug: Web/CSS/Reference/Properties/height
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`height`** définit la hauteur d'un élément. Par défaut, la propriété définit la hauteur de la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu). Si {{CSSxRef("box-sizing")}} est définie sur `border-box`, elle détermine alors la hauteur de la [zone de bordure](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_bordure).

{{InteractiveExample("Démonstration CSS&nbsp;: height")}}

```css interactive-example-choice
height: 150px;
```

```css interactive-example-choice
height: 6em;
```

```css interactive-example-choice
height: 75%;
```

```css interactive-example-choice
height: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte dont vous pouvez changer la hauteur.
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

Les propriétés {{CSSxRef("min-height")}} et {{CSSxRef("max-height")}} surchargent la propriété `height`.

> [!NOTE]
> En tant que propriété géométrique, `height` s'applique aussi aux éléments SVG {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} et {{SVGElement("foreignObject")}}, avec `auto` résolu à `0` et les valeurs en pourcentage étant relatives à la hauteur de la zone d'affichage SVG pour `<rect>`. La valeur CSS de la propriété `height` surcharge toute valeur d'attribut {{SVGAttr("height")}} définie sur l'élément SVG.

## Syntaxe

```css
/* Valeur avec un mot-clé */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: stretch;

/* Valeurs de type <length> */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--my-anchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* Valeurs de type <percentage> */
height: 75%;

/* Valeurs globales */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la hauteur comme une valeur de distance.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la hauteur comme un pourcentage de la hauteur du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Le navigateur calcule et choisit une hauteur pour l'élément défini.
- {{CSSxRef("max-content")}}
  - : La hauteur intrinsèque préférée.
- {{CSSxRef("min-content")}}
  - : La hauteur intrinsèque minimale.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que [max-content](/fr/docs/Web/CSS/Reference/Values/max-content), c'est-à-dire `min(max-content, max(min-content, stretch))`.

- {{CSSxRef("fit-content_function", "fit-content(&lt;length-percentage&gt;)")}} {{Experimental_Inline}}
  - : Utilise la formule fit-content en remplaçant l'espace disponible par l'argument défini, c'est-à-dire `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`
  - : Définit la hauteur de la [boîte de marge](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_parties_de_la_boîte) de l'élément à la hauteur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Cela tente de faire en sorte que la boîte de marge occupe tout l'espace disponible dans le bloc englobant, se comportant ainsi comme `100%` mais en appliquant la taille résultante à la boîte de marge plutôt qu'à la boîte déterminée par {{CSSxRef("box-sizing")}}.

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `height` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [MDN Comprendre WCAG, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.4 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Définir la hauteur en utilisant des pixels et des pourcentages

#### HTML

```html
<div id="red">
  <span>Je mesure 50 pixels de haut.</span>
</div>
<div id="green">
  <span>Et moi je mesure 25 pixels de haut.</span>
</div>
<div id="parent">
  <div id="child">
    <span>Je suis moitié moins haut que mon parent.</span>
  </div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#red {
  height: 50px;
}

#green {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Résultat

{{EmbedLiveSample("Définir la hauteur en utilisant des pixels et des pourcentages", "auto", 240)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("width")}}
- La propriété {{CSSxRef("box-sizing")}}
- Les propriétés {{CSSxRef("min-height")}}, {{CSSxRef("max-height")}}
- Les propriétés {{CSSxRef("block-size")}}, {{CSSxRef("inline-size")}}
- La fonction {{CSSxRef("anchor-size()")}}
- La fonction {{CSSxRef("clamp()")}}
- La fonction {{CSSxRef("minmax()")}}
- L'attribut SVG {{SVGAttr("height")}}
- [Le modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
