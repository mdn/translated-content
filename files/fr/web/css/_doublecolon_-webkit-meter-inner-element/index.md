---
title: "::-webkit-meter-inner-element"
slug: Web/CSS/::-webkit-meter-inner-element
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-meter-inner-element`** est un pseudo-élément qui permet de sélectionner et d'appliquer des styles au conteneur d'un élément {{htmlelement("meter")}}.

## Exemples

### CSS

```css
meter {
  /* Réinitialise l'apparence par défaut */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px solid #aaa;
}
```

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 50)}}

> **Note :** Cela ne fonctionne que pour les navigateurs Webkit/Blink.

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
