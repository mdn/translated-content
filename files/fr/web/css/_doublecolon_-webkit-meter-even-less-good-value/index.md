---
title: "::-webkit-meter-even-less-good-value"
slug: Web/CSS/::-webkit-meter-even-less-good-value
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-meter-even-less-good-value`** donne une couleur rouge à l'élément {{HTMLElement("meter")}} lorsque les valeurs de `value` et d'optimum sont dans des intervalles opposés (par exemple : `value` < `low` < `high` < `optimum` ou `value` > `high` > `low` > `optimum`).

## Exemples

### CSS

```css
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}
```

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 50)}}

> **Note :** Cela fonctionnera uniquement pour les navigateurs Webkit/Blink.

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
