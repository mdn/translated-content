---
title: ::-webkit-progress-value
slug: Web/CSS/Reference/Selectors/::-webkit-progress-value
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-progress-value`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de représenter la portion «&nbsp;remplie&nbsp;» de la barre d'un élément {{HTMLElement("progress")}}. C'est un pseudo-élément enfant du pseudo-élément {{CSSxRef("::-webkit-progress-bar")}}.

> [!NOTE]
> Afin que `::-webkit-progress-value` ait un effet, il faut que {{CSSxRef("-webkit-appearance")}} vaille `none` sur l'élément `<progress>`.

## Syntaxe

```css
::-webkit-progress-value {
  /* ... */
}
```

## Exemples

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon&nbsp;:

![Une longue boîte orange et grise. Les 20 % de gauche sont orange. Les 80 % de droite sont gris.](progress-value.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}}&nbsp;:
  - {{CSSxRef("::-webkit-progress-bar")}}
  - {{CSSxRef("::-webkit-progress-inner-element")}}
- Le pseudo-élément {{CSSxRef("::-moz-progress-bar")}}
