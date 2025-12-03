---
title: ::-webkit-progress-value
slug: Web/CSS/Reference/Selectors/::-webkit-progress-value
original_slug: Web/CSS/::-webkit-progress-value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-progress-value`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de représenter la portion «&nbsp;remplie&nbsp;» de la barre d'un élément {{HTMLElement("progress")}}. C'est un pseudo-élément enfant du pseudo-élément {{cssxref("::-webkit-progress-bar")}}.

> [!NOTE]
> Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("-webkit-appearance")}} vaille `none` sur l'élément `<progress>`.

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
  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-inner-element")}}

- {{cssxref("::-moz-progress-bar")}}
