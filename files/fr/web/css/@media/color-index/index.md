---
title: color-index
slug: Web/CSS/@media/color-index
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/color-index
---
{{CSSRef}}

**`color-index`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) dont la valeur correspond au nombre d'entrées que comporte la palette de couleurs du périphérique de sortie, ou zéro si ce dernier n'en utilise pas.

## Syntaxe

La caractéristique `color-index` est définie sous la forme d'un entier (type {{cssxref("&lt;integer&gt;")}}) et représente le nombre d'entrées de la palette de couleurs de l'appareil d'affichage (ou zéro si l'appareil n'utilise pas une telle palette). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-color-index`** et **`max-color-index`** afin cibler des règles en fonction d'un minimum ou d'un maximum.

## Exemples

### Exemple simple

#### HTML

```html
<p>Un test simple.</p>
```

#### CSS

```css
p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Feuille de style personnalisée

Ce fragment HTML permet d'appliquer une feuille de style spécifique pour les appareils qui disposent d'au moins 256 couleurs.

```html
<link rel="stylesheet" href="http://toto.truc.com/base.css" />
<link rel="stylesheet" media="all and (min-color-index: 256)" href="http://toto.truc.com/feuille_style_couleurs.css" />
```

## Spécifications

| Spécification                                                                            | Etat                                     | Commentaires                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#color-index', 'color-index')}} | {{Spec2('CSS4 Media Queries')}} | La valeur peut désormais être négative (ce qui correspond à un booléen faux). |
| {{SpecName('CSS3 Media Queries', '#color-index', 'color-index')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale, la valeur ne peut pas être négative.                     |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.color-index")}}
