---
title: shape
slug: Web/CSS/@media/shape
---

{{CSSRef}} {{Non-standard_header}}

La caractéristique média **`shape`** peut être utilisée afin de tester la forme d'un appareil pour distinguer les affichages rectangulaires des affichages ronds.

## Syntaxe

La caractéristique `shape` peut prendre une valeur parmi deux valeurs définies : `rect` qui représente un écran rectangulaire ou `round` qui représente un écran circulaire, ovale ou elliptique.

- `rect`
  - : La forme est un rectangle, un carré ou une forme similaire (ex. un rectangle arrondi) qui permet d'utiliser un affichage traditionnel.
- `round`
  - : La forme est arrondie telle un cercle, un ovale ou une ellipse et les dispositions arrondies seront plus appropriées sur ces écrans.

## Exemples

> **Note :** Aucun navigateur n'implémente actuellement cette fonctionnalité.

### Exemple simple

#### HTML

```html
<h1>Coucou le monde !</h1>
```

#### CSS

```css
h1 {
  text-align: left;
}

@media (shape: rect) {
  h1 {
    text-align: left;
  }
}

@media (shape: round) {
  h1 {
    text-align: center;
  }
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Feuille de style spécifique

Ce fragment de code HTML permettra d'appliquer une feuille de style particulière pour les appareils qui ont des écrans arrondis.

```html
<head>
  <link rel="stylesheet" href="default.css" />
  <link
    media="screen and (shape: rect)"
    rel="stylesheet"
    href="rectangle.css" />
  <link media="screen and (shape: round)" rel="stylesheet" href="round.css" />
</head>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
