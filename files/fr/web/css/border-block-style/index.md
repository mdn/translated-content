---
title: border-block-style
slug: Web/CSS/border-block-style
---

{{CSSRef}}

La propriété **`border-block-style`** permet de définir le style pour la bordure sur les côtés d'un élément qui correspondent à l'axe de bloc. Cette propriété logique correspond à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à [`border-top-style`](/fr/docs/Web/CSS/border-top-style) et [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style) ou à [`border-left-style`](/fr/docs/Web/CSS/border-left-style) et [`border-right-style`](/fr/docs/Web/CSS/border-right-style) selon les valeurs des propriétés [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction) et [`text-orientation`](/fr/docs/Web/CSS/text-orientation).

{{EmbedInteractiveExample("pages/css/border-block-style.html")}}

Pour les autres côtés, la bordure peut être mise en forme grâce à la propriété [`border-inline-style`](/fr/docs/Web/CSS/border-inline-style) qui définit [`border-inline-start-style`](/fr/docs/Web/CSS/border-inline-start-style) et [`border-inline-end-style`](/fr/docs/Web/CSS/border-inline-end-style).

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
  - : Le style de la ligne pour la bordure. Voir [`border-style`](/fr/docs/Web/CSS/border-style).

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

- Les propriétés physiques qui correspondent à cette propriété logique&nbsp;: [`border-top-style`](/fr/docs/Web/CSS/border-top-style), [`border-right-style`](/fr/docs/Web/CSS/border-right-style), [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style), [`border-left-style`](/fr/docs/Web/CSS/border-left-style).

- [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction), [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
