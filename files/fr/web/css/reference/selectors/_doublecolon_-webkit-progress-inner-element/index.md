---
title: ::-webkit-progress-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-progress-inner-element
original_slug: Web/CSS/::-webkit-progress-inner-element
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-progress-inner-element`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui représente le cadre extérieur de l'élément {{HTMLElement("progress")}}. C'est un pseudo-élément parent du pseudo-élément {{cssxref("::-webkit-progress-bar")}}.

> [!NOTE]
> Afin que `::-webkit-progress-value` ait un effet, il faut que {{cssxref("appearance")}} vaille `none` sur l'élément `<progress>`.

## Syntaxe

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Exemples

Ces exemples ne fonctionnent que sur Blink et WebKit.

### Ajouter une bordure noire autour de la barre de progression

Dans cet exemple, une bordure noire de 2px est ajoutée autour de la barre de progression.

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

### Résultat

{{EmbedLiveSample("ajouter_une_bordure_noire_autour_de_la_barre_de_progression", 200, 50)}}

Une barre de progression avec la mise en forme ci-avant sera affichée de cette façon&nbsp;:

![La barre de progression est une longue boîte verte et grise avec une bordure noire. Les 20 % gauches de la boîte sont verts. Les 80 % droits sont gris.](-webkit-progress-inner-element_example.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments relatifs à WebKit/Blink qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("progress")}}&nbsp;:
  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
