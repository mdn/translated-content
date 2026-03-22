---
title: padding-block
slug: Web/CSS/Reference/Properties/padding-block
l10n:
  sourceCommit: c3c0f615b9b35e1ce3c799927eb21732b2f05926
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`padding-block`** définit le remplissage logique au début et à la fin de l'axe de bloc d'un élément, ce qui correspond aux propriétés de remplissage physiques en fonction du mode d'écriture, de la direction et de l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: padding-block")}}

```css interactive-example-choice
padding-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block: 2em 4em;
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

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-block-end")}}

## Syntaxe

```css
/* Valeurs de type <length> */
padding-block: 10px 20px; /* Des longueurs absolues */
padding-block: 1em 2em; /* Des longueurs relatives à la taille du texte */
padding-block: 10px; /* Une seule valeur définit le remplissage des deux côtés */

/* Valeurs de type <percentage> */
padding-block: 5% 2%; /* relative to the nearest block container's width */

/* Valeurs globales */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: revert-layer;
padding-block: unset;
```

La propriété `padding-block` peut être définie avec une ou deux valeurs. Si une seule valeur est donnée, elle est utilisée comme valeur pour {{CSSxRef("padding-block-start")}} et {{CSSxRef("padding-block-end")}}. Si deux valeurs sont données, la première est utilisée pour {{CSSxRef("padding-block-start")}} et la seconde pour {{CSSxRef("padding-block-end")}}.

### Valeurs

La propriété `padding-block` peut prendre les mêmes valeurs que la propriété {{CSSxRef("padding-top")}}.

## Description

Les valeurs de remplissage définies par `padding-block` peuvent être équivalentes aux propriétés {{CSSxRef("padding-top")}} et {{CSSxRef("padding-bottom")}} ou aux propriétés {{CSSxRef("padding-right")}} et {{CSSxRef("padding-left")}}, en fonction des valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

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
  writing-mode: vertical-rl;
  padding-block: 20px 40px;
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
