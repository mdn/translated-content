---
title: min-height
slug: Web/CSS/Reference/Properties/min-height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`min-height`** est utilisée afin de définir la hauteur minimale d'un élément. Elle empêche ainsi que la [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de la propriété {{CSSxRef("height")}} devienne inférieure à la valeur définie pour `min-height`.

{{InteractiveExample("Démonstration CSS&nbsp;: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la hauteur minimale.<br />
    Si le contenu dépasse le minimum, la boîte s'agrandira à la hauteur
    nécessaire pour le contenu.
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

La hauteur de l'élément est définie sur la valeur de `min-height` chaque fois que `min-height` est supérieure à {{CSSxRef("max-height")}} ou {{CSSxRef("height")}}.

## Syntaxe

```css
/* Valeur de type <length> */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--my-anchor block, 200px);

/* Valeur de type <percentage> */
min-height: 10%;

/* Valeurs avec un mot-clé */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* Valeurs globales */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la hauteur minimale (`min-height`) comme une valeur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la hauteur minimale (`min-height`) comme un pourcentage de la hauteur du bloc englobant.
- `auto`
  - : Le navigateur calculera et sélectionnera une hauteur minimale (`min-height`) pour l'élément défini.
- {{CSSxRef("max-content")}}
  - : La hauteur minimale (`min-height`) intrinsèque préférée.
- {{CSSxRef("min-content")}}
  - : La hauteur minimale (`min-height`) intrinsèque minimale.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que {{CSSxRef("max-content")}}, c'est-à-dire `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument défini, c'est-à-dire `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Limite la hauteur minimale de la [marge de la boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_composants_dune_boîte) de l'élément à la hauteur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Elle tente de faire en sorte que la marge remplisse l'espace disponible dans le bloc englobant, se comportant ainsi de manière similaire à `100%`, mais en appliquant la taille résultante à la marge plutôt qu'à la boîte déterminée par {{CSSxRef("box-sizing")}}.

    > [!NOTE]
    > Pour vérifier les alias utilisés par les navigateurs pour la valeur `stretch` et son état d'implémentation, consultez la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `min-height`

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("max-height")}}
- La propriété {{CSSxRef("height")}}
- La propriété {{CSSxRef("min-inline-size")}}
- La propriété {{CSSxRef("min-block-size")}}
- La propriété {{CSSxRef("box-sizing")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
