---
title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
original_slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Deprecated_header}} {{Non-standard_header}}

> [!NOTE]
> Tous les navigateurs prennent en charge la propriété [`transition`](/fr/docs/Web/CSS/Reference/Properties/transition#compatibilité_des_navigateurs) sans préfixe. Seuls les navigateurs basés sur WebKit (Safari), et non Chromium, prennent en charge la caractéristique média `-webkit-transition`. Aucun navigateur ne prend en charge `transition` sans préfixe comme requête média (certains navigateurs prennent en charge {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}). Utilisez plutôt la requête de fonctionnalité [`@supports (transition)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) booléenne non standard [CSS](/fr/docs/Web/CSS) **`-webkit-transition`** est une [extension WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui vaut `true` si le contexte de navigation prend en charge les [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions).

Apple propose [une description dans la référence CSS de Safari <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3)&nbsp;; cette propriété s'appelle désormais `transition` dans la documentation Apple.

> [!NOTE]
> Vous ne devez pas utiliser cette caractéristique média&nbsp;: elle n'a jamais été spécifiée, n'a jamais été largement implémentée et a été [supprimée de la plupart des navigateurs](#compatibilité_des_navigateurs). Utilisez plutôt une requête de fonctionnalité {{cssxref("@supports")}}.

## Syntaxe

```css
@media (-webkit-transition) {
  /* CSS à utiliser si cette caractéristique média et les transitions préfixées sont prises en charge */
}
```

## Exemples

### Utiliser @supports à la place

N'utilisez pas la caractéristique média `-webkit-transition`. Testez plutôt la prise en charge des transitions avec la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) de CSS {{cssxref("@supports")}}&nbsp;:

```css
@supports (transition: initial) {
  /* CSS à utiliser si les transitions sont prises en charge */
}
```

### Exemple obsolète

Avant d'être obsolète, on pouvait utiliser `-webkit-transition` dans le CSS comme ceci&nbsp;:

```css
@media (-webkit-transition) {
  /* CSS à utiliser si les transitions sont prises en charge */
}
```

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Page de test sur quirksmode.org <sup>(angl.)</sup>](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} et [utiliser les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("@media")}} et [utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} et [utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
