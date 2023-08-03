---
title: "::-webkit-meter-suboptimum-value"
slug: Web/CSS/::-webkit-meter-suboptimum-value
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-meter-suboptimum-value`** donne une couleur jaune à l'élément {{HTMLElement("meter")}} lorsque la valeur de l'attribut est en dehors de l'intervalle haut des valeurs.

## Exemples

### CSS

```css
meter::-webkit-meter-suboptimum-value {
  background:
    -webkit-gradient linear,
    left top,
    left bottom;
  height: 100%;
  box-sizing: border-box;
}
```

### HTML

```html
<meter min="0" max="10" value="6">Score sur 10</meter>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 50)}}

> **Note :** Cette fonctionnalité ne sera visible que depuis un navigateur WebKit/Blink.

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
