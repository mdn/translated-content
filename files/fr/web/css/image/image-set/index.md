---
title: image-set()
slug: Web/CSS/image/image-set
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`image-set()`** est une méthode permettant au navigateur de sélectionner l'image la plus appropriée parmi un ensemble d'images. Elle s'avère notamment utile pour les écrans à haute densité de pixels.

La résolution et la bande passante varient selon l'appareil et l'accès au réseau dont on dispose. La fonction `image-set()` permet au navigateur de sélectionner l'image avec la résolution la mieux adaptée aux conditions. Cette fonction reçoit différentes options d'images qui sont chacune une image avec une déclaration de résolution. La résolution sera généralement couplée avec la taille du fichier associé. Ainsi, un agent utilisateur conscient que la bande passante est faible pourra privilégier une image à faible résolution plutôt que d'attendre longtemps le chargement d'une image à plus haute résolution.

Cette fonction permet ainsi à l'auteur du document de fournir différentes options plutôt que de laisser l'utilisatrice ou l'utilisateur payer les conséquences.

## Syntaxe

```css
image-set() = image-set( <image-set-option># )
où <image-set-option> = [ <image> | <string> ] <resolution> et
      <string> est une <url>
```

### Valeurs

- `<image>`
  - : Une valeur de type [`<image>`](/fr/docs/Web/CSS/image) qui peut être n'importe quelle image sauf un ensemble d'image. Autrement dit, la fonction `image-set()` ne peut pas être imbriquée dans une autre fonction `image-set()`.
- `<string>`
  - : Une URL vers une image.
- `<resolution>` {{optional_inline}}
  - : Les unités pour une valeur [`<resolution>`](/fr/docs/Web/CSS/resolution) incluent `x` ou `dppx`, pour les unités en points par pixel, `dpi`, pour les unités en points par pouce, et `dpcm` en points par centimètre carré. Chaque image d'un ensemble `image-set()` doit avoir une résolution unique.
- `type(<string>)` {{optional_inline}}
  - : Une chaîne de caractères représentant un type MIME valide, par exemple `"image/jpeg"`.

## Exemples

### Utiliser `image-set()` pour fournir des images d'arrière-plan alternatives

Dans cet exemple, on montre comment utiliser `image-set()` afin de fournir deux images possibles pour [`background-image`](/fr/docs/Web/CSS/background-image), le choix étant effectué selon la résolution nécessaire&nbsp;: une version normale et une version haute-résolution.

{{EmbedGHLiveSample("css-examples/images/image-set.html", '100%', 600)}}

> **Note :** Dans cet exemple, la version préfixée avec `-webkit` est également utilisée pour prendre en charge Chrome et Safari. Dans Firefox 90, l'implémentation permet d'avoir `-webkit-image-set()` comme alias pour `image-set()` (afin de fournir une compatibilité si la propriété standard n'avait pas été ajoutée à la feuille de style).

### Utiliser `image-set()` pour fournir des formats d'image alternatifs

Dans l'exemple qui suit, la fonction `type()` est utilisée afin de servir une image aux formats AVIF et JPEG. Si le navigateur prend en charge le format AVIF, il choisira cette version, sinon il utilisera la version JPEG.

{{EmbedGHLiveSample("css-examples/images/image-set-type.html", '100%', 600)}}

#### Fournir un format de secours

Il n'y a pas de méthode de recours native en l'absence de prise en charge de `image-set()`. Aussi, pour inclure une propriété [`background-image`](/fr/docs/Web/CSS/background-image) destinée aux navigateurs qui n'implémentent pas cette fonction, on pourra ajouter une déclaration séparée, avant celle qui utilise `image-set()`.

```css
.box {
  background-image: url("large-balloons.jpg");
  background-image: image-set(
    "large-balloons.avif" type("image/avif"),
    "large-balloons.jpg" type("image/jpeg")
  );
}
```

## Accessibilité

Les navigateurs ne fournissent pas d'informations particulières aux outils d'assistance quant aux outils d'assistance. Ainsi, les lecteurs d'écran ne pourront pas annoncer d'informations utiles si l'image contient des informations essentielles à la compréhension de la page. Il faudra inclure une description sémantique sur l'image pour que tous puissent en bénéficier.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<image>`](/fr/docs/Web/CSS/image)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`url()`](/fr/docs/Web/CSS/url)
- [`<gradient>`](/fr/docs/Web/CSS/gradient)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
