---
title: color-index
slug: Web/CSS/Reference/At-rules/@media/color-index
original_slug: Web/CSS/@media/color-index
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`color-index`** est utilisée pour tester le nombre d'entrées dans la table de recherche des couleurs du périphérique de sortie.

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
<link
  rel="stylesheet"
  media="(color-index >= 256)"
  href="http://toto.truc.com/feuille_style_couleurs.css" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
