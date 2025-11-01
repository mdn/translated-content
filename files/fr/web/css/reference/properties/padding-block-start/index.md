---
title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
original_slug: Web/CSS/padding-block-start
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-block-start`** définit le début logique de la zone de remplissage d'un élément de bloc. Cette propriété logique est traduite en une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à la propriété {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} ou {{cssxref("padding-left")}} selon les valeurs qui sont utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Elle est à rapprocher des propriétés {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} et {{cssxref("padding-inline-end")}} qui définissent les autres écarts de remplissage logiques d'un élément.

{{InteractiveExample("CSS Demo: padding-block-start")}}

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
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
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
/* Valeurs de longueur */
/* Type <length>       */
padding-block-start: 10px;
padding-block-start: 1em;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-block-start: 5%; /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: unset;
```

### Valeurs

La propriété `padding-block-start` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple et Lorem et IP sum</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :
  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- {{cssxref("writing-mode")}},
- {{cssxref("direction")}},
- {{cssxref("text-orientation")}}
