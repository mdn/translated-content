---
title: padding-inline-end
slug: Web/CSS/Reference/Properties/padding-inline-end
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`padding-inline-end`** définit le remplissage logique en fin de ligne d'un élément, qui se traduit par un remplissage physique en fonction du mode d'écriture, de la directions et de l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-inline-end")}}

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-end: 5em;
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
/* Valeurs de type <length> */
padding-inline-end: 10px; /* Une longueur absolue */
padding-inline-end: 1em; /* Une longueur relative à la taille du texte */

/* Valeurs de type <percentage> */
padding-inline-end: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de remplissage en tant que valeur fixe. Cette valeur ne peut pas être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de remplissage en pourcentage, relative à [la taille en ligne](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout) (_largeur_ dans une langue horizontale) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut pas être négative.

## Description

La propriété `padding-inline-end` prend les mêmes valeurs que les propriétés de remplissage physique telles que {{CSSxRef("padding-top")}}. Cependant, elle peut être équivalente à {{CSSxRef("padding-right")}}, {{CSSxRef("padding-left")}}, `padding-top` ou {{CSSxRef("padding-bottom")}} en fonction des valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Elle est liée à {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}} et {{CSSxRef("padding-inline-start")}}, qui définissent les autres valeurs de remplissage de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage en fin de ligne pour le texte vertical

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
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le remplissage en fin de ligne pour le texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
