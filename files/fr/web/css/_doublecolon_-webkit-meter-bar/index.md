---
title: "::-webkit-meter-bar"
slug: Web/CSS/::-webkit-meter-bar
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-meter-bar`** est un pseudo-élément spécifique à WebKit et permet de mettre en forme l'arrière-plan d'un élément {{HTMLElement("meter")}}.

## Exemples

### CSS

```css
meter {
  /* On réinitialise l'apparence par défaut */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-bar {
  background: #eee;
  box-shadow: 0 2px 3px rgba (0, 0, 0, 0.2) inset;
  border-radius: 3px;
}
```

### HTML

```html
<meter min="0" max="10" value="6">Score sur 10</meter>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

> **Note :** Cela fonctionnera uniquement pour les navigateurs Webkit/Blink.

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}} :

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [Les extensions CSS WebKit](/fr/docs/Web/CSS/Webkit_Extensions)
