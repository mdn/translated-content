---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
original_slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

> [!NOTE]
> Tous les navigateurs prennent en charge la propriété [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform#compatibilité_des_navigateurs) sans préfixe. Seuls les navigateurs basés sur WebKit (Safari), et non Chromium, prennent en charge la caractéristique média `-webkit-transform-2d`. Aucun navigateur ne prend en charge `transform` sans préfixe ou extension `2d` comme requête média. Utilisez plutôt la requête de fonctionnalité [`@supports (transform)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) booléenne [CSS](/fr/docs/Web/CSS) **`-webkit-transform-2d`** est une [extension WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui vaut `true` si les transformations CSS 2D {{cssxref("transform")}} préfixées et les requêtes média non standard préfixées sont prises en charge.

Apple propose [une description dans la référence CSS de Safari <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntaxe

`-webkit-transform-2d` est une caractéristique média booléenne de [CSS](/fr/docs/Web/CSS) qui vaut `true` si le navigateur prend en charge les transformations CSS 2D {{cssxref("transform")}} préfixées `-webkit`.

### Valeurs

- `true`
  - : Le navigateur prend en charge les transformations CSS 2D préfixées `-webkit`.
- `false`
  - : Les transformations CSS 2D préfixées `-webkit` ne sont pas prises en charge par le navigateur.

## Exemples

### Exemple simple

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Cette caractéristique média n'est prise en charge que par WebKit. La propriété [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform) non préfixée est prise en charge dans tous les navigateurs modernes. Si possible, utilisez plutôt une requête de fonctionnalité {{cssxref("@supports")}}&nbsp;:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Page de test sur quirksmode.org <sup>(angl.)</sup>](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} et [utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} et [utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} et [utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
