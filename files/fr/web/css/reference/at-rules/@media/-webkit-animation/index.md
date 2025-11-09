---
title: -webkit-animation
slug: Web/CSS/Reference/At-rules/@media/-webkit-animation
original_slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Tous les navigateurs prennent en charge la propriété [`animation`](/fr/docs/Web/CSS/Reference/Properties/animation#compatibilité_des_navigateurs) sans préfixe. Seuls les navigateurs basés sur WebKit (Safari), et non Chromium, prennent en charge la caractéristique média `-webkit-animation`. Aucun navigateur ne prend en charge `animation` sans préfixe comme requête média. Utilisez plutôt la requête de fonctionnalité [`@supports (animation)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) booléenne [CSS](/fr/docs/Web/CSS) **`-webkit-animation`** est une [extension WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui vaut `true` si les animations CSS {{cssxref("animation")}} préfixées sont prises en charge.

Apple propose [une description dans la référence CSS de Safari <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Cette caractéristique média n'est prise en charge que par WebKit. Si possible, utilisez plutôt une requête de fonctionnalité {{cssxref("@supports")}}.

## Syntaxe

La caractéristique média `-webkit-animation` est un booléen qui vaut `true` si les propriétés d'animation CSS préfixées sont prises en charge _et_ si le navigateur prend en charge les requêtes média sur les propriétés préfixées.

### Valeurs

- `true`
  - : Le navigateur prend en charge les animations CSS {{cssxref("animation")}} préfixées `-webkit`.
- `false`
  - : Le navigateur ne prend pas en charge ces animations CSS préfixées.

## Exemples

### Exemple d'utilisation de -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS à utiliser si les animations préfixées -webkit sont prises en charge ET que le navigateur prend en charge les propriétés préfixées en requête média */
}
```

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- [Page de test sur quirksmode.org <sup>(angl.)</sup>](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} et [utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("@media")}} et [utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} et [utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
