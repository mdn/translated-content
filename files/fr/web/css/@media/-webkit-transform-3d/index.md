---
title: -webkit-transform-3d
slug: Web/CSS/@media/-webkit-transform-3d
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-transform-3d`** est une [caractéristique média](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries#cibler_des_caractéristiques_média) booléenne non-standard qui indique si les transformations CSS en 3D (cf. {{cssxref("transform")}}) préfixées sont prises en charge par le navigateur.

> [!NOTE]
> Cette caractéristique est uniquement prise en charge par WebKit et Blink. Une méthode alternative standard consiste à utiliser {{cssxref("@supports")}} à la place.

## Exmple

```css
@media (-webkit-transform-3d) {
  .toto {
    transform-style: preserve-3d;
  }
}

@media (-webkit-transform-3d: 1) {
  .toto {
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
- [Page de test sur quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
