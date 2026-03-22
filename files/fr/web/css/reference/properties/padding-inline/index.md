---
title: padding-inline
slug: Web/CSS/Reference/Properties/padding-inline
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`padding-inline`** définit le remplissage logique au début et à la fin de l'axe en ligne d'un élément, ce qui correspond aux propriétés de remplissage physiques en fonction du mode d'écriture, de la direction et de l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-inline")}}

```css interactive-example-choice
padding-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline: 15px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline: 5% 20%;
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

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

## Syntaxe

```css
/* Valeurs de type <length> */
padding-inline: 10px 20px; /* Des longueurs absolues */
padding-inline: 1em 2em; /* Des longueurs relatives à la taille du texte */
padding-inline: 10px; /* Une seule valeur définit le remplissage des deux côtés */

/* Valeurs de type <percentage> */
padding-inline: 5% 2%; /* Des longueurs relatives à la taille du bloc englobant */

/* Valeurs globales */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: revert-layer;
padding-inline: unset;
```

La propriété `padding-inline` peut être définie avec une ou deux valeurs. Si une seule valeur est donnée, elle est utilisée comme valeur pour {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}. Si deux valeurs sont données, la première est utilisée pour {{CSSxRef("padding-inline-start")}} et la seconde pour {{CSSxRef("padding-inline-end")}}.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage exprimée avec une valeur absolue. Cette valeur ne peut être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage exprimée en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block). Cette valeur ne peut être négative.

## Description

Les valeurs de remplissage définies par `padding-inline` peuvent être équivalentes aux propriétés {{CSSxRef("padding-top")}} et {{CSSxRef("padding-bottom")}} ou aux propriétés {{CSSxRef("padding-right")}} et {{CSSxRef("padding-left")}}, en fonction des valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage en ligne pour le texte vertical

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
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le remplissage en ligne pour le texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
