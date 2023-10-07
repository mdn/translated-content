---
title: border-inline-style
slug: Web/CSS/border-inline-style
---

{{CSSRef}}

La propriété **`border-inline-style`** permet de définir le style pour la bordure sur les côtés d'un élément qui correspondent à l'axe en ligne. Cette propriété logique correspond à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à [`border-top-style`](/fr/docs/Web/CSS/border-top-style) et [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style) ou à [`border-left-style`](/fr/docs/Web/CSS/border-left-style) et [`border-right-style`](/fr/docs/Web/CSS/border-right-style) selon les valeurs des propriétés [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction) et [`text-orientation`](/fr/docs/Web/CSS/text-orientation).

{{EmbedInteractiveExample("pages/css/border-inline-style.html")}}

Pour les autres côtés, la bordure peut être mise en forme grâce à la propriété [`border-block-style`](/fr/docs/Web/CSS/border-block-style) qui définit [`border-block-start-style`](/fr/docs/Web/CSS/border-block-start-style) et [`border-block-end-style`](/fr/docs/Web/CSS/border-block-end-style).

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
  - : Le style de la ligne pour la bordure. Voir [`border-style`](/fr/docs/Web/CSS/border-style).

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

- Les propriétés physiques qui correspondent à cette propriété logique&nbsp;: [`border-top-style`](/fr/docs/Web/CSS/border-top-style), [`border-right-style`](/fr/docs/Web/CSS/border-right-style), [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style), [`border-left-style`](/fr/docs/Web/CSS/border-left-style).
- [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction), [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
