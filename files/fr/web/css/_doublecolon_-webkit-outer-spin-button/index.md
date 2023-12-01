---
title: "::-webkit-outer-spin-button"
slug: Web/CSS/::-webkit-outer-spin-button
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-outer-spin-button`** peut être utilisé afin de mettre en forme la partie extérieure du sélecteur numérique utilisé pour les éléments {{HTMLElement("input")}} de type `number`.

## Exemples

### CSS

```css
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
```

### HTML

```html
<input type="number" />
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 30)}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink, il ne fait partie d'aucune spécification standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::-webkit-inner-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Mettre en forme les contrôles des formulaires – WebKit (en anglais)](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
