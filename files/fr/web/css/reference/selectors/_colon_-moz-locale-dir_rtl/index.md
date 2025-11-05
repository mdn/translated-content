---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_rtl
original_slug: Web/CSS/:-moz-locale-dir_rtl
---

{{Non-standard_header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-locale-dir(rtl)`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond à un élément si l'interface utilisateur est affichée de droite à gauche. Elle est déterminée par la préférence `intl.uidirection.locale` (où `locale` est la langue courante) qui est fixée à `"rtl"`.

> [!NOTE]
> Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins de la langue de l'utilisateur. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte la langue de l'utilisateur·ice par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétées par les spécificités de la langue.

> [!WARNING]
> Ce sélecteur ne fonctionne pas correctement pour des documents HTML ; il ne fait jamais correspondre, peu importe si la langue de l'interface utilisateur va de gauche à droite ou de droite à gauche.

## Syntaxe

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Exemples

Cet exemple ne fonctionnera pas si vous n'utilisez pas Firefox, et pourrait ne pas fonctionner correctement même dans Firefox en raison d'un problème lié à l'utilisation de ce sélecteur en HTML.

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### HTML

```html
<p>En utilisant une interface de droite à gauche, ce texte sera rouge.</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
