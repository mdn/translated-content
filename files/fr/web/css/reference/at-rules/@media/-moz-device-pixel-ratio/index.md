---
title: -moz-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio
original_slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}} {{Deprecated_header}}

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`-moz-device-pixel-ratio`** (spécifique à Gecko) permet d'appliquer des styles en fonction du nombre de pixels physiques par pixel CSS.

> [!WARNING]
> N'utilisez pas cette caractéristique. Préférez la caractéristique [`resolution`](/fr/docs/Web/CSS/Reference/At-rules/@media/resolution) avec l'unité `dppx`.

> [!NOTE]
> Cette caractéristique média est aussi implémentée par WebKit sous le nom `-webkit-device-pixel-ratio`. Les préfixes min et max sont nommés `min--moz-device-pixel-ratio` et `max--moz-device-pixel-ratio` chez Gecko, mais `-webkit-min-device-pixel-ratio` et `-webkit-max-device-pixel-ratio` chez WebKit.

## Syntaxe

- {{cssxref("&lt;number&gt;")}}
  - : Nombre de pixels physiques par pixel CSS.

**Média&nbsp;:** {{cssxref("@media")}}<br />
**Accepte les préfixes min/max&nbsp;:** oui

## Exemples

### Exemple de compatibilité de base

`-moz-device-pixel-ratio` peut être utilisé pour la compatibilité avec les versions de Firefox antérieures à 16, et en complément de `-webkit-device-pixel-ratio` pour les navigateurs basés sur WebKit qui ne prennent pas en charge `dppx`.

Exemple&nbsp;:

```css
/* D'abord, pour les navigateurs basés sur WebKit */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Anciennes versions de Firefox (avant la version 16) */,
  (min-resolution: 2dppx) /* Méthode standard */,
  (min-resolution: 192dpi); /* Repli dppx */
```

> [!NOTE]
> Voir cet [article du CSSWG <sup>(angl.)</sup>](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) pour les bonnes pratiques de compatibilité concernant `resolution` et `dppx`.

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
