---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
---

{{cssref}}

Le descripteur **`unicode-range`**, associé à la règle @ [`@font-face`](/fr/docs/Web/CSS/@font-face), définit l'intervalle de caractères qui peuvent être représentés par cette police pour la page. Si la page n'utilise aucun caractère de cet intervalle, la police n'est pas téléchargée. Si, au contraire, elle utilise au moins un caractère appartenant à cet intervalle, toute la police est téléchargée.

## Syntaxe

```css
/* Valeurs <unicode-range> */
unicode-range: U+26; /* un seul point de code         */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* un intervalle spécifique      */
unicode-range: U+4??; /* un intervalle de substitution */
unicode-range: U+0025-00FF, U+4??; /* plusieurs valeurs             */
```

### Valeurs

Une valeur de type `<unicode-range>` peut se présenter de trois façons différentes&nbsp;:

- Un seul point de code

  - : Par exemple `U+26`

- Un intervalle spécifique de points de code

  - : Par exemple `U+0025-00FF` indique que l'intervalle contient tous les caractères contenus entre les points de code `U+0025` et `U+00FF`

- Un intervalle de substitution indiqué par `?`

  - : Un intervalle de points de code Unicode indiqué par une valeur contenant un point d'interrogation. Ainsi, `U+4??` signifie «&nbsp;tous les caractères contenus dans l'intervalle entre les points de code `U+400` et `U+4FF`&nbsp;».

## Description

Le but de ce descripteur est de segmenter les ressources liées aux polices afin que le navigateur puisse ne télécharger que les polices dont il a besoin pour le texte d'un document. Ainsi, un site disposant de nombreuses traductions pourrait proposer des ressources distinctes pour l'anglais, le grec et le japonais et seules les ressources nécessaires (dont les fichiers de polices) seraient téléchargées.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

Dans cet exemple, on crée un élément HTML [`<div>`](/fr/docs/Web/HTML/Element/div) pour lequel on veut que l'esperluette soit mise en forme avec une police différente. Pour que le résultat soit apparent, on utilisera une police sans empattement pour le texte (_Helvetica_) et une police avec des empattements (_Times New Roman_) pour l'esperluette.

### HTML

```html
<div>Me & You = Us</div>
```

### CSS

Dans la feuille de style CSS, on définit une règle [`@font-face`](/fr/docs/Web/CSS/@font-face) qui n'inclue qu'un seul caractère. Cela signifie que seul ce caractère sera affiché avec cette police. On aurait également pu encadrer l'esperluette dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) et appliquer une autre règle sur cet élément, mais on aurait alors eu un balisage plus lourd et une règle spécifique en plus sur la feuille de style.

```css
@font-face {
  font-family: "Ampersand";
  src: local("Times New Roman");
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: Ampersand, Helvetica, sans-serif;
}
```

### Résultat

{{EmbedLiveSample("", 500,104)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-display`](/fr/docs/Web/CSS/@font-face/font-display)
- [`font-family`](/fr/docs/Web/CSS/@font-face/font-family)
- [`font-stretch`](/fr/docs/Web/CSS/@font-face/font-stretch)
- [`font-style`](/fr/docs/Web/CSS/@font-face/font-style)
- [`font-weight`](/fr/docs/Web/CSS/@font-face/font-weight)
- [`font-variant`](/fr/docs/Web/CSS/@font-face/font-variant)
- [`font-feature-settings`](/fr/docs/Web/CSS/font-feature-settings)
- [`font-variation-settings`](/fr/docs/Web/CSS/@font-face/font-variation-settings)
- [`src`](/fr/docs/Web/CSS/@font-face/src)
