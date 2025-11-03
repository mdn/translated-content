---
title: border-inline-style
slug: Web/CSS/Reference/Properties/border-inline-style
original_slug: Web/CSS/border-inline-style
---

{{CSSRef}}

La propriété **`border-inline-style`** permet de définir le style pour la bordure sur les côtés d'un élément qui correspondent à l'axe en ligne. Cette propriété logique correspond à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à [`border-top-style`](/fr/docs/Web/CSS/Reference/Properties/border-top-style) et [`border-bottom-style`](/fr/docs/Web/CSS/Reference/Properties/border-bottom-style) ou à [`border-left-style`](/fr/docs/Web/CSS/Reference/Properties/border-left-style) et [`border-right-style`](/fr/docs/Web/CSS/Reference/Properties/border-right-style) selon les valeurs des propriétés [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction) et [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation).

{{InteractiveExample("CSS Demo: border-inline-style")}}

```css interactive-example-choice
border-inline-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-style: groove;
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

Pour les autres côtés, la bordure peut être mise en forme grâce à la propriété [`border-block-style`](/fr/docs/Web/CSS/Reference/Properties/border-block-style) qui définit [`border-block-start-style`](/fr/docs/Web/CSS/Reference/Properties/border-block-start-style) et [`border-block-end-style`](/fr/docs/Web/CSS/Reference/Properties/border-block-end-style).

## Syntaxe

```css
/* Valeurs de type <'border-style'> */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: revert;
border-inline-style: groove;
```

### Valeur

- `<'border-style'>`
  - : Le style de la ligne pour la bordure. Voir [`border-style`](/fr/docs/Web/CSS/Reference/Properties/border-style).

### Syntaxe formelle

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
  border-inline-style: dashed;
}
```

### Résultat

{{EmbedLiveSample('', 140, 140)}}

## Spécifications

{{Specifications}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques qui correspondent à cette propriété logique&nbsp;: [`border-top-style`](/fr/docs/Web/CSS/Reference/Properties/border-top-style), [`border-right-style`](/fr/docs/Web/CSS/Reference/Properties/border-right-style), [`border-bottom-style`](/fr/docs/Web/CSS/Reference/Properties/border-bottom-style), [`border-left-style`](/fr/docs/Web/CSS/Reference/Properties/border-left-style).
- [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode), [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction), [`text-orientation`](/fr/docs/Web/CSS/Reference/Properties/text-orientation)
