---
title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
original_slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) booléenne [CSS](/fr/docs/Web/CSS) **`-webkit-transform-3d`** est une [extension WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui vaut `true` si les transformations CSS 3D {{cssxref("transform")}} préfixées sont prises en charge.

> [!NOTE]
> Cette caractéristique média est actuellement [prise en charge par la plupart des navigateurs](#compatibilité_des_navigateurs). Si possible, utilisez plutôt une requête de fonctionnalité {{cssxref("@supports")}}.

## Syntaxe

`-webkit-transform-3d` est une caractéristique média booléenne de [CSS](/fr/docs/Web/CSS) qui vaut `true` si le navigateur prend en charge les transformations CSS 3D {{cssxref("transform")}} préfixées `-webkit`.

### Valeurs

- `true`
  - : Le navigateur prend en charge les transformations CSS 3D préfixées `-webkit` et les requêtes média préfixées non standard.
- `false`
  - : Les transformations CSS 3D préfixées `-webkit` ne sont pas prises en charge par le navigateur.

## Exemples

### Exemples de requêtes média avec -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Une meilleure méthode pour vérifier la prise en charge par le navigateur consiste à utiliser une requête de fonctionnalité&nbsp;:

```css
@supports (transform-style) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Page de test sur quirksmode.org <sup>(angl.)</sup>](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} et [utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} et [utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} et [utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
