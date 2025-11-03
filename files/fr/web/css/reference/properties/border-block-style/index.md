---
title: border-block-style
slug: Web/CSS/Reference/Properties/border-block-style
original_slug: Web/CSS/border-block-style
---

{{CSSRef}}

La propriété **`border-block-style`** permet de définir le style pour la bordure sur les côtés d'un élément qui correspondent à l'axe de bloc. Cette propriété logique correspond à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à [`border-top-style`](/fr/docs/Web/CSS/Reference/Properties/border-top-style) et [`border-bottom-style`](/fr/docs/Web/CSS/Reference/Properties/border-bottom-style) ou à [`border-left-style`](/fr/docs/Web/CSS/Reference/Properties/border-left-style) et [`border-right-style`](/fr/docs/Web/CSS/Reference/Properties/border-right-style) selon les valeurs des propriétés [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction) et [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation).

{{InteractiveExample("CSS Demo: border-block-style")}}

```css interactive-example-choice
border-block-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-style: groove;
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

Pour les autres côtés, la bordure peut être mise en forme grâce à la propriété [`border-inline-style`](/fr/docs/Web/CSS/Reference/Properties/border-inline-style) qui définit [`border-inline-start-style`](/fr/docs/Web/CSS/Reference/Properties/border-inline-start-style) et [`border-inline-end-style`](/fr/docs/Web/CSS/Reference/Properties/border-inline-end-style).

## Syntaxe

```css
/* Valeurs de type <'border-style'> */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Valeurs globales */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: unset;
```

### Valeur

- `<'border-style'>`
  - : Le style de la ligne pour la bordure. Voir [`border-style`](/fr/docs/Web/CSS/Reference/Properties/border-style).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="texteExemple">Texte exemple</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.texteExemple {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-block-style: dashed;
}
```

### Résultat

{{EmbedLiveSample('', 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques qui correspondent à cette propriété logique&nbsp;: [`border-top-style`](/fr/docs/Web/CSS/Reference/Properties/border-top-style), [`border-right-style`](/fr/docs/Web/CSS/Reference/Properties/border-right-style), [`border-bottom-style`](/fr/docs/Web/CSS/Reference/Properties/border-bottom-style), [`border-left-style`](/fr/docs/Web/CSS/Reference/Properties/border-left-style).

- [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction), [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation)
