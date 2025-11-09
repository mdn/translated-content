---
title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
original_slug: Web/CSS/@media/shape
l10n:
  sourceCommit: 10f562a8a12f7bbf4b35b21de449c721ed756eb4
---

{{SeeCompatTable}}

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`shape`** peut être utilisée pour tester la forme de l'appareil afin de distinguer les affichages rectangulaires et ronds.

## Syntaxe

La caractéristique `shape` peut prendre une valeur parmi deux valeurs définies : `rect` qui représente un écran rectangulaire ou `round` qui représente un écran circulaire, ovale ou elliptique.

- `rect`
  - : La forme est un rectangle, un carré ou une forme similaire (ex. un rectangle arrondi) qui permet d'utiliser un affichage traditionnel.
- `round`
  - : La forme est arrondie telle un cercle, un ovale ou une ellipse et les dispositions arrondies seront plus appropriées sur ces écrans.

## Exemples

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

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
- Le module d'[affichage arrondi CSS](/fr/docs/Web/CSS/CSS_round_display)
- [Utiliser les variables d'environnement](/fr/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- Le module des [variables d'environnement CSS](/fr/docs/Web/CSS/CSS_environment_variables)
