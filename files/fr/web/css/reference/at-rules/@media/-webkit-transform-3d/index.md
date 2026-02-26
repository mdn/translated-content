---
title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) booléenne [CSS](/fr/docs/Web/CSS) **`-webkit-transform-3d`** est une [extension WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui vaut `true` si les transformations CSS 3D {{CSSxRef("transform")}} préfixées sont prises en charge.

> [!NOTE]
> Cette caractéristique média est actuellement [prise en charge par la plupart des navigateurs](#compatibilité_des_navigateurs). Si possible, utilisez plutôt une requête de fonctionnalité {{CSSxRef("@supports")}}.

## Syntaxe

`-webkit-transform-3d` est une caractéristique média booléenne de [CSS](/fr/docs/Web/CSS) qui vaut `true` si le navigateur prend en charge les transformations CSS 3D {{CSSxRef("transform")}} préfixées `-webkit`.

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

- La caractéristique média {{CSSxRef("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- La caractéristique média {{CSSxRef("@media/-webkit-transition", "-webkit-transition")}}
- La caractéristique média {{CSSxRef("@media/-webkit-animation", "-webkit-animation")}}
- [Page de test sur quirksmode.org <sup>(angl.)</sup>](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- La propriété {{CSSxRef("transform")}} et [utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- La règle {{CSSxRef("@media")}} et [utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La règle {{CSSxRef("@supports")}} et [utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
