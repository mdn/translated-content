---
title: border-inline-end-style
slug: Web/CSS/Reference/Properties/border-inline-end-style
original_slug: Web/CSS/border-inline-end-style
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline-end-style`** définit le style de la bordure utilisé pour le côté de la fin de l'élément dans l'axe de lecture. Cette propriété logique correspondra à une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} ou à {{cssxref("border-left-style")}} selon les valeurs de {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-end-style")}}

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-style: groove;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Les autres propriétés logiques permettant de définir le style de la bordure sont les suivantes :

- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-inline-start-style")}}.

## Syntaxe

```css
border-inline-end-style: dashed;
border-inline-end-style: dotted;
border-inline-end-style: groove;
```

### Valeurs

- `<'border-style'>`
  - : Le style utilisé pour la ligne de la bordure sur ce côté, voir {{cssxref("border-style")}}

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-inline-end-style: dashed;
}
```

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :
  - {{cssxref("border-top-style")}},
  - {{cssxref("border-right-style")}},
  - {{cssxref("border-bottom-style")}},
  - {{cssxref("border-left-style")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
