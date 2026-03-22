---
title: padding-inline-start
slug: Web/CSS/Reference/Properties/padding-inline-start
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-inline-start`** définit le décalage avec le début de la zone de remplissage d'un élément selon le mode d'écriture, la direction et l'orientation du texte.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-inline-start")}}

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-start: 5em;
writing-mode: horizontal-tb;
direction: rtl;
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
/* Valeurs type <length> */
padding-inline-start: 10px; /* Une longueur absolue */
padding-inline-start: 1em; /* Relatif à la taille du texte */

/* Valeurs de type <percentage> */
padding-inline-start: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage exprimée en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut être négative.

## Description

La propriété `padding-inline-start` peut prendre les mêmes valeurs que les propriétés de remplissage physiques telles que {{CSSxRef("padding-top")}}. Cependant, elle peut être équivalente à {{CSSxRef("padding-left")}}, {{CSSxRef("padding-right")}}, `padding-top` ou {{CSSxRef("padding-bottom")}} en fonction des valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Elle est liée à {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}} et {{CSSxRef("padding-inline-end")}}, qui définissent les autres valeurs de remplissage de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage en ligne au début pour le texte vertical

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
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le remplissage en ligne au début pour le texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
