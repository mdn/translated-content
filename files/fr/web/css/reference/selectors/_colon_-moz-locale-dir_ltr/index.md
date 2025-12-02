---
title: :-moz-locale-dir(ltr)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_ltr
original_slug: Web/CSS/:-moz-locale-dir_ltr
---

{{Non-standard_header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-locale-dir(ltr)`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond à un élément si l'interface utilisateur est affichée de gauche à droite. Ceci est déterminé par la préférence `intl.uidirection.`_`locale`_ (où _`locale`_ est le language courant) qui est fixé à "ltr".

> [!NOTE]
> Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins du langage de l'utilisateur·ice. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte le langage de l'utilisateur·ice par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétée par les spécificités du langage.

> [!WARNING]
> Ce sélecteur ne fonctionne pas pour les documents l'HTML&nbsp;; il fait correspondre toujours, peu importe si le langage de l'UI va de gauche à droite ou de droite à gauche.

## Syntaxe

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Exemples

Cet exemple ne fonctionne pas si vous n'utilisez pas Firefox, et peut ne pas fonctionner même dans Firefox en raison d'un problème lié au sélecteur qui ne fonctionne pas correctement avec le contenu HTML. Il a été conçu pour être utilisé avec `XUL`.

### HTML

```html
<p>Sur une interface allant de gauche à droite, ce texte devrait être rouge.</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- {{cssxref(":dir",":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
