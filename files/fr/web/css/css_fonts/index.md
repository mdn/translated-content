---
title: CSS Fonts
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS Fonts** est un module CSS qui définit des propriétés relatives aux polices de caractères et la façon dont les ressources des polices sont chargées. Il permet de définir le style d'une police, comme sa famille, sa taille ou sa graisse ainsi que la variante du glyphe à utiliser dans le cas des polices disposant de plusieurs glyphes par caractère. Il permet également de définir la hauteur d'une ligne.

## Exemple simple

L'exemple qui suit illustre l'utilisation simple de propriétés relatives aux polices afin de mettre en forme le texte d'un paragraphe.

### CSS

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

### HTML

```html
<p>
  Alice ne fut pas très-étonnée, tant elle commençait à s’habituer aux
  événements extraordinaires. Tandis qu’elle regardait encore l’endroit que le
  Chat venait de quitter, il reparut tout à coup.
</p>
```

### Résultat

{{EmbedLiveSample('Exemple_simple', '100%', '200')}}

## Exemples utilisant les polices variables

Vous pouvez trouver plusieurs exemples utilisant les polices variables sur [v-fonts.com](https://v-fonts.com/) et [axis-praxis.org](https://www.axis-praxis.org/). Notre [guide sur les polices variables](/fr/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) contient des informations et des exemples d'utilisation.

## Référence

### Propriétés

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### Règles @

- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}

## Guides

- [Mise en forme du texte et utilisation des polices](/fr/docs/Learn/CSS/Styling_text/Fundamentals)
  - : Dans cet article, destiné aux débutants, nous abordons en détail les fonctionnalités pour la mise en forme du texte et la modification de la police.
- [Guide sur les caractéristiques de police OpenType](/fr/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)
  - : Les caractéristiques de police ou variantes font référence à différents glyphes ou styles de caractère contenus dans une police OpenType. Cela inclut notamment les ligatures (des caractères spéciaux qui permettent de combiner des caractères entre eux comme œ qui est la ligature entre o et e), le crénage, etc. Toutes ces caractéristiques sont des caractéristiques OpenType Features et peuvent être utilisées sur le Web grâce à certaines propriétés spécifiques qui permettent un contrôle de bas niveau comme {{cssxref("font-feature-settings")}}. Dans cet article, nous verrons tout ce qu'il faut savoir pour manipuler les caractéristiques OpenType avec CSS.
- [Guide sur les polices variables](/fr/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
  - : Les polices variables sont une évolution de la spécification OpenType qui permet de faire varier différents axes d'une police (provenant d'un seul fichier) plutôt que d'avoir plusieurs polices d'une même fonte. Cet article fournit l'ensemble des informations nécessaires à l'exploration des polices variables.

## Spécifications

{{Specifications}}
