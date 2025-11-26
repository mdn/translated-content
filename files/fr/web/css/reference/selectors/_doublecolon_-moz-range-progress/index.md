---
title: ::-moz-range-progress
slug: Web/CSS/Reference/Selectors/::-moz-range-progress
original_slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-range-progress`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente la partie inférieure de la _piste_ (c'est-à-dire la rainure) dans laquelle l'indicateur glisse dans un élément {{HTMLElement("input")}} de type `range`. Cette partie correspond aux valeurs inférieures à la valeur actuellement sélectionnée par le _curseur_ (c'est-à-dire le bouton virtuel).

> [!NOTE]
> Si `::-moz-range-progress` est utilisé sur autre chose qu'un élément `<input type="range">`, il n'aura aucun effet.

## Syntaxe

```css
::-moz-range-progress {
  /* ... */
}
```

## Exemples

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 50)}}

Une barre de progression mise en forme avec cette déclaration devrait ressembler à&nbsp;:

![La barre de progression est un carré vert épais à gauche du curseur et une fine ligne grise à droite. Le curseur est un cercle dont le diamètre correspond à la hauteur de la zone verte.](screen_shot_2015-12-04_at_20.14.48.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments utilisés par Gecko qui permettent de mettre en forme les autres parties d'un élément {{HTMLElement("input")}} de type `range`&nbsp;:
  - {{cssxref("::-moz-range-thumb")}} représente l'indicateur qui glisse dans la rainure.
  - {{cssxref("::-moz-range-track")}} représente la rainure dans laquelle le curseur glisse.

- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs <sup>(angl.)</sup>](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode&nbsp;: Mettre en forme les pistes et curseurs <sup>(angl.)</sup>](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
