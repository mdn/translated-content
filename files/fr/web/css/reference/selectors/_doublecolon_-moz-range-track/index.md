---
title: ::-moz-range-track
slug: Web/CSS/Reference/Selectors/::-moz-range-track
original_slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-range-track`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente la _piste_ (c'est-à-dire la rainure) dans laquelle l'indicateur glisse dans un élément {{HTMLElement("input")}} de type `range`.

> [!NOTE]
> `::-moz-range-track` n'aura aucun effet s'il est utilisé sur autre chose qu'un élément `<input type="range">`.

## Syntaxe

```css
::-moz-range-track {
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
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Résultat

{{EmbedLiveSample(Exemples", 300, 50)}}

Une barre de progression mise en forme de cette façon devrait ressembler à&nbsp;:

![Un intervalle avec une piste verte.](screen_shot_2015-12-04_at_10.14.34.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments utilisés par Gecko qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("input")}} de type `range`&nbsp;:
  - {{cssxref("::-moz-range-thumb")}} représente le curseur qui se déplace le long de la piste.
  - {{cssxref("::-moz-range-progress")}} représente la partie inférieure de la rainure.

- Les pseudo-éléments utilisés par les autres navigateurs&nbsp;:
  - {{cssxref("::-webkit-slider-runnable-track")}}, pseudo-élément pris en charge par WebKit et Blink (Safari, Chrome et Opera).

- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs <sup>(angl.)</sup>](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode&nbsp;: Mettre en forme les pistes et curseurs <sup>(angl.)</sup>](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
