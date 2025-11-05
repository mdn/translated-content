---
title: ::-webkit-progress-bar
slug: Web/CSS/Reference/Selectors/::-webkit-progress-bar
original_slug: Web/CSS/::-webkit-progress-bar
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-progress-bar`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui représente l'ensemble de la barre d'un élément {{HTMLElement("progress")}}. Normalement, celui-ci n'est visible que pour la partie de la barre qui n'est pas remplie car, par défaut, il est affiché sous le pseudo-élément {{cssxref("::-webkit-progress-value")}}. C'est un pseudo-élément fils du pseudo-élément {{cssxref("::-webkit-progress-inner-element")}} et c'est le pseudo-élément parent du pseudo-élément {{cssxref("::-webkit-progress-value")}}.

> [!NOTE]
> Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("appearance")}} vaille `none` sur l'élément `<progress>`.

## Syntaxe

```css
::-webkit-progress-bar {
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

::-webkit-progress-bar {
  background-color: orange;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon&nbsp;:

![La barre de progression est une barre horizontale d'environ la hauteur d'une lettre. Les 20 % à gauche sont verts. Les 80 % à droite sont orange.](progress-bar.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}}&nbsp;:
  - {{cssxref("::-webkit-progress-value")}}
  - {{cssxref("::-webkit-progress-inner-element")}}

- {{cssxref("::-moz-progress-bar")}}
