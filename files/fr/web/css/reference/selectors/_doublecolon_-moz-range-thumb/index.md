---
title: ::-moz-range-thumb
slug: Web/CSS/Reference/Selectors/::-moz-range-thumb
original_slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-range-thumb`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente le curseur qui se déplace le long de la piste dans un élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) de type `range` et qui permet de modifier la valeur numérique associée.

> [!NOTE]
> Utiliser `::-moz-range-thumb` avec un autre élément que `<input type="range">` n'aura aucun effet.

## Syntaxe

```css
::-moz-range-thumb {
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
input[type="range"]::-moz-range-thumb {
  background-color: green;
}
```

### Résultat

{{EmbedLiveSample("", 300, 50)}}

Une barre de progression mise en forme avec ces règles devrait ressembler à&nbsp;:

![Un élément 'input type=range' avec un curseur vert](screen_shot_2015-12-04_at_13.30.08.png)

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments utilisés par Gecko qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("input")}} de type `range`&nbsp;:
  - {{cssxref("::-moz-range-track")}} représente la rainure dans laquelle le curseur glisse.
  - {{cssxref("::-moz-range-progress")}} représente la partie inférieure de la rainure.

- Les pseudo-éléments utilisés par les autres navigateurs&nbsp;:
  - {{cssxref("::-webkit-slider-thumb")}}, pseudo-élément pris en charge par WebKit et Blink (Safari, Chrome et Opera)

- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs <sup>(angl.)</sup>](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode&nbsp;: Mettre en forme les pistes et curseurs <sup>(angl.)</sup>](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
