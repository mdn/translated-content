---
title: '::-webkit-meter-optimum-value'
slug: Web/CSS/::-webkit-meter-optimum-value
translation_of: Web/CSS/::-webkit-meter-optimum-value
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-meter-optimum-value`** permet de mettre en forme l'élément {{HTMLElement("meter")}} lorsque la valeur de son attribut tombe dans l'intervalle haut. La couleur appliquée par défaut est le vert.

## Exemples

### CSS

```css
meter::-webkit-meter-bar {
  background : none;
  background-color : whiteSmoke;
  box-shadow : 0 5px 5px -5px #333 inset;
}

meter::-webkit-meter-optimum-value {
  box-shadow: 0 5px 5px -5px #999 inset;
}
```

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 50)}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-webkit-meter-optimum-value")}}

## Voir aussi

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
