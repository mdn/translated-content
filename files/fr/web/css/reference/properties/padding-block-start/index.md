---
title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-block-start`** définit le début logique de la zone de remplissage d'un élément de bloc. Cette propriété logique est traduite en une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-block-start")}}

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Loin dans les régions inexplorées de l'extrémité démodée du bras spiral
      occidental de la Galaxie se trouve un petit soleil jaune négligé.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
padding-block-start: 10px; /* Une longueur absolue */
padding-block-start: 1em; /* Une longueur relative à la taille du texte */

/* Valeurs de type <percentage> */
padding-block-start: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage exprimé en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut être négative.

## Description

La propriété `padding-block-start` prend les mêmes valeurs que les propriétés de remplissage physiques telles que {{CSSxRef("padding-top")}}. Cependant, elle peut être équivalente à `padding-top`, {{CSSxRef("padding-bottom")}}, {{CSSxRef("padding-left")}}, ou {{CSSxRef("padding-right")}} en fonction des valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Elle est liée à {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}, qui définissent les autres valeurs de remplissage de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage de bloc pour le texte vertical

#### HTML

```html
<div>
  <p class="texteExemple">Texte d'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.texteExemple {
  writing-mode: vertical-lr;
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le remplissage de bloc pour le texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
