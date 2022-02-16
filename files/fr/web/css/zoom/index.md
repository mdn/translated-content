---
title: zoom
slug: Web/CSS/zoom
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/zoom
---
{{CSSRef}}{{Non-standard_header}}

La propriété non-standard **`zoom`** permet de manipuler l'effet d'agrandissement d'un élément. Plutôt que cette propriété non-standard, mieux vaudra utiliser [les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms), si possible. Cependant, contrairement aux transformations CSS, **`zoom`** affecte la taille de l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
zoom: normal;
zoom: reset;

/* VAleurs exprimées en pourcents */
/* Type <percentage> */
zoom: 50%;
zoom: 200%;

/* Valeurs numériques */
/* Type <number> */
zoom: 1.1;
zoom: 0.7;

/* Valeurs globales */
zoom: inherit;
zoom: initial;
zoom: unset;
```

### Valeurs

- `normal`
  - : L'élément est affiché avec sa taille normale.
- `reset` {{non-standard_inline}}

  - : Do not (de)magnify this element if the user applies non-pinch-based zooming (e.g. by pressing

    <kbd>Ctrl</kbd>

    \-

    <kbd>-</kbd>

    ou

    <kbd>Ctrl</kbd>

    \+

    <kbd>+</kbd>

    ) to the document. Only supported by WebKit (and possibly Blink).

- {{cssxref("&lt;percentage&gt;")}}
  - : Le facteur de zoom à appliquer. `100%` est équivalent au mot-clé `normal`. Les valeurs supérieures à `100%` agrandissent l'élément et les valeurs inférieures le réduisent.
- {{cssxref("&lt;number&gt;")}}
  - : Le facteur de zoom à appliquer. La valeur fonctionne de la même façon que les pourcentages :  `1.0` correspond à `normal` (ou `100%`) , les valeurs supérieures à `1.0` agrandissent l'élément et les valeurs inférieures le réduisent.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p.petit {
  zoom: 75%;
}
p.normal {
  zoom: normal;
}
p.gros {
  zoom: 2.5;
}
p {
  display: inline-block;
}
p:hover {
  zoom: reset;
}
```

### HTML

```html
<p class="petit">Petit</p>
<p class="normal">Normal</p>
<p class="gros">Gros</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

Cette propriété n'est pas standard et est née avec Internet Explorer. Apple la décrit [dans la référence CSS pour Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15). Rossen Atanassov, de Microsoft, a dressé [un brouillon de spécification sur GitHub](https://cdn.rawgit.com/atanassov/css-zoom/master/Overview.html)

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.zoom")}}

## Voir aussi

- [L'article de CSS-Tricks sur `zoom`](https://css-tricks.com/almanac/properties/z/zoom/)
- Le descripteur [`zoom`](/fr/docs/conflicting/Web/CSS/@viewport_e065ce90bde08c9679692adbe64f6518) pour la règle @ [`@viewport`](/fr/docs/Web/CSS/@viewport)
- {{bug("390936")}} à propos de l'implémentation de la propriété dans Firefox
