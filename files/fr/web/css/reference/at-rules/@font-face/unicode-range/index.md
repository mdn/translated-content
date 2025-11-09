---
title: unicode-range
slug: Web/CSS/Reference/At-rules/@font-face/unicode-range
original_slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`unicode-range`** pour à la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}}, définit l'intervalle de caractères qui peuvent être représentés par cette police pour la page. Si la page n'utilise aucun caractère de cet intervalle, la police n'est pas téléchargée. Si, au contraire, elle utilise au moins un caractère appartenant à cet intervalle, toute la police est téléchargée.

## Syntaxe

```css
/* Valeurs <unicode-range> */
unicode-range: U+26; /* un seul point de code */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* un intervalle spécifique */
unicode-range: U+4??; /* un intervalle de substitution */
unicode-range: U+0025-00FF, U+4??; /* plusieurs valeurs */
```

### Valeurs

Une valeur de type `<unicode-range>` peut se présenter de trois façons différentes&nbsp;:

- **_Un seul point de code_**
  - : Par exemple `U+26`
- **_Un intervalle spécifique de points de code_**
  - : Par exemple `U+0025-00FF` indique que l'intervalle contient tous les caractères contenus entre les points de code `U+0025` et `U+00FF`
- **_Un intervalle de substitution indiqué par `?`_**
  - : Un intervalle de points de code Unicode indiqué par une valeur contenant un point d'interrogation. Ainsi, `U+4??` signifie «&nbsp;tous les caractères contenus dans l'intervalle entre les points de code `U+400` et `U+4FF`&nbsp;».

## Description

Le but de ce descripteur est de segmenter les ressources liées aux polices afin que le navigateur puisse ne télécharger que les polices dont il a besoin pour le texte d'un document. Ainsi, un site disposant de nombreuses traductions pourrait proposer des ressources distinctes pour l'anglais, le grec et le japonais et seules les ressources nécessaires (dont les fichiers de polices) seraient téléchargées.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser une police différente pour un seul caractère

Dans cet exemple, nous créons un élément {{HTMLElement("div")}} unique, avec une chaîne de texte qui inclut une esperluette que nous voulons styliser avec une police différente. Pour que cela soit évident, nous utiliserons une police sans empattement, _Helvetica_, pour le texte, et une police avec empattement, _Times New Roman_, pour l'esperluette.

Dans le CSS, nous définissons en effet une règle {{cssxref("@font-face")}} complètement séparée qui n'inclut qu'un seul caractère, ce qui signifie que seul ce caractère sera stylisé avec cette police. Nous aurions également pu faire cela en enveloppant l'esperluette dans un {{HTMLElement("span")}} et en appliquant une police différente uniquement à cela, mais cela aurait ajouté un élément et un ensemble de règles supplémentaires.

#### HTML

```html
<div>Toi & Moi = Nous</div>
```

#### CSS

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

#### Résultat

{{EmbedLiveSample("utiliser_une_police_différente_pour_un_seul_caractère", 500, 104)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
