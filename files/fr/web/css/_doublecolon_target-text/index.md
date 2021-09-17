---
title: '::target-text'
slug: Web/CSS/::target-text
translation_of: Web/CSS/::target-text
browser-compat: css.selectors.target-text
---
{{CSSRef}}{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) [CSS](/en-US/docs/Web/CSS) **`::target-text`** représente le texte vers lequel l'écran vient de défiler, dans le cas où le navigateur prend en charge les fragments `scroll-to-text`. Il permet aux auteurs de mettre en valeur cette section de texte.

```css
::target-text {
  background-color: pink;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### Mise en valeur de scroll-to-text

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
}
```

Pour voir ce code CSS en action, suivez ce lien vers la [démonstration de scroll-to-text](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Text fragments (en anglais)](https://web.dev/text-fragments/)
