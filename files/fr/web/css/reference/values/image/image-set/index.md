---
title: image-set()
slug: Web/CSS/Reference/Values/image/image-set
original_slug: Web/CSS/image/image-set
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`image-set()`** permet au navigateur de choisir l'image CSS la plus appropriée parmi un ensemble donné, principalement pour les écrans à haute densité de pixels.

La résolution et la bande passante varient selon l'appareil et l'accès au réseau. La fonction `image-set()` fournit la résolution d'image la plus appropriée pour l'appareil de l'utilisateur·ice, en proposant un ensemble d'options d'image — chacune avec une déclaration de résolution associée — parmi lesquelles le navigateur choisit la plus adaptée à l'appareil et aux paramètres. La résolution peut servir de substitut à la taille du fichier&nbsp;: un agent utilisateur sur une connexion mobile lente avec un écran haute résolution peut préférer recevoir des images de plus faible résolution plutôt que d'attendre le chargement d'une image de plus haute résolution.

`image-set()` permet à l'auteur·ice de fournir des options plutôt que de déterminer ce dont chaque utilisateur·ice a besoin individuellement.

## Syntaxe

```css-nolint
/* Sélectionner l'image en fonction de la résolution */
image-set(
  "image1.jpg" 1x,
  "image2.jpg" 2x
);

image-set(
  url("image1.jpg") 1x,
  url("image2.jpg") 2x
);

/* Sélectionner un dégradé en fonction de la résolution */
image-set(
  linear-gradient(blue, white) 1x,
  linear-gradient(blue, green) 2x
);

/* Sélectionner une image en fonction des formats pris en charge */
image-set(
  url("image1.avif") type("image/avif"),
  url("image2.jpg") type("image/jpeg")
);
```

### Valeurs

- `<image>`
  - : Une valeur de type {{CSSxRef("&lt;image&gt;")}} qui peut être n'importe quelle image sauf un ensemble d'image. Autrement dit, la fonction `image-set()` ne peut pas être imbriquée dans une autre fonction `image-set()`.
- `<string>`
  - : Une URL vers une image.
- `<resolution>` {{optional_inline}}
  - : Les unités pour une valeur {{CSSxRef("&lt;resolution&gt;")}} incluent `x` ou `dppx`, pour les unités en points par pixel, `dpi`, pour les unités en points par pouce, et `dpcm` en points par centimètre carré. Chaque image d'un ensemble `image-set()` doit avoir une résolution unique.
- `type(<string>)` {{optional_inline}}
  - : Une chaîne de caractères représentant un type MIME valide, par exemple `"image/jpeg"`.

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations particulières aux outils d'assistance quant aux outils d'assistance. Ainsi, les lecteurs d'écran ne pourront pas annoncer d'informations utiles si l'image contient des informations essentielles à la compréhension de la page. Il faudra inclure une description sémantique sur l'image pour que tous puissent en bénéficier.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Exemples

### Utiliser `image-set()` pour fournir des images d'arrière-plan alternatives

Dans cet exemple, on montre comment utiliser [`image-set()` <sup>(angl.)</sup>](https://drafts.csswg.org/css-images-4/#funcdef-image-set) afin de fournir deux images possibles pour {{cssxref("background-image")}}, le choix étant effectué selon la résolution nécessaire&nbsp;: une version normale et une version haute-résolution.

```html live-sample___image-set-example
<div class="box"></div>
```

```css live-sample___image-set-example
.box {
  width: 400px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: image-set(
    url("https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg")
      1x,
    url("https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg")
      2x
  );
}
```

{{EmbedLiveSample("image-set-example", "", "250px")}}

### Utiliser `image-set()` pour fournir des formats d'image alternatifs

Dans l'exemple qui suit, la fonction `type()` est utilisée afin de servir une image aux formats AVIF et JPEG. Si le navigateur prend en charge le format AVIF, il choisira cette version, sinon il utilisera la version JPEG.

```html live-sample___image-set-type-example
<div class="box"></div>
```

```css live-sample___image-set-type-example
.box {
  width: 400px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: image-set(
    "https://mdn.github.io/shared-assets/images/examples/balloons-landscape.avif"
      type("image/avif"),
    "https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
      type("image/jpeg")
  );
}
```

{{EmbedLiveSample("image-set-type-example", "", "250px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("image")}}
- Le type de donnée {{cssxref("url_value", "&lt;url&gt;")}}
- Le type de donnée {{cssxref("&lt;gradient&gt;")}}
- La fonction {{cssxref("image/image", "image()")}}
- La fonction {{cssxref("element", "element()")}}
- La fonction {{cssxref("cross-fade", "cross-fade()")}}
