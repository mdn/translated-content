---
title: -webkit-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio
original_slug: Web/CSS/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`-webkit-device-pixel-ratio`** est une caractéristique média non-standard, alternative à la caractéristique média standard {{cssxref("@media/resolution", "resolution")}}.

> [!NOTE]
> Si possible, utilisez plutôt la requête de caractéristique média standard {{cssxref("@media/resolution", "resolution")}}. Bien que cette caractéristique préfixée soit propre à WebKit, d'autres moteurs de navigateur peuvent la prendre en charge. Voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous.

## Syntaxe

La caractéristique `-webkit-device-pixel-ratio` se définit avec une valeur de type {{cssxref("&lt;number&gt;")}}. Il s'agit d'une caractéristique d'intervalle&nbsp;: on peut donc aussi utiliser les variantes préfixées **`-webkit-min-device-pixel-ratio`** et **`-webkit-max-device-pixel-ratio`** pour interroger respectivement une valeur minimale ou maximale.

### Valeurs

- {{cssxref("&lt;number&gt;")}}
  - : Le nombre de pixels physiques pour chaque pixel ([`px`](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_absolues)) CSS. Bien que la valeur soit un nombre et ne permette pas d'utiliser des unités, l'unité implicite est [`dppx`](/fr/docs/Web/CSS/Reference/Values/resolution#unités).

## Implémentation

```css
/* Unité dppx implicite */
@media (-webkit-min-device-pixel-ratio: 2) {
  /* … */
}
/* équivalent à */
@media (min-resolution: 2dppx) {
  /* … */
}

/* De même */
@media (-webkit-max-device-pixel-ratio: 2) {
  /* … */
}
/* équivalent à */
@media (max-resolution: 2dppx) {
  /* … */
}
```

## Exemples

### HTML

```html
<p>Voici un test pour la densité de pixel de votre appareil.</p>
```

### CSS

```css
/* Résolution exacte */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* Résolution minimale */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* Résolution maximale */
@media (-webkit-max-device-pixel-ratio: 3) {
  p {
    background: yellow;
  }
}
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("resolution")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Article du W3C pour éviter le préfixe <sup>(angl.)</sup>](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
