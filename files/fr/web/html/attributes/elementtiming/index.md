---
title: "Attribut HTML : elementtiming"
slug: Web/HTML/Attributes/elementtiming
---

{{HTMLSidebar}}

L'attribut **`elementtiming`** est utilisé pour indiquer qu'un élément est marqué pour le suivi par l'API [Element Timing](/fr/docs/Web/API/PerformanceElementTiming). Cet attribut peut être appliqué aux éléments [`<img>`](/fr/docs/Web/HTML/Element/img), [`<image>`](/fr/docs/Web/SVG/Element/image) à l'intérieur d'un [`<svg>`](/fr/docs/Web/SVG/Element/svg), aux vignettes des éléments [`<video>`](/fr/docs/Web/HTML/Element/video), aux éléments qui ont un [`background-image`](/fr/docs/Web/CSS/background-image) et aux éléments contenant des noeuds de texte, comme un [paragraphe (`<p>)`](/fr/docs/Web/HTML/Element/p).

## Utilisation

La valeur donnée pour `elementtiming` devient un identifiant pour l'élément observé.

```html
<img alt="alt" src="img.jpg" elementtiming="étiquette pour l'élément" />
```

De bons candidats pour les éléments que vous pourriez vouloir observer sont :

- L'image principale d'un article.
- Le titre d'un article de blog.
- Les images dans un carrousel pour un site d'achat.
- L'image de l'affiche de la vidéo principale d'une page.

## Exemples

```html
<img alt="Alt pour l'image principale d'un article de blog"
     src="my-massive-image.jpg"
     elementtiming="Image principale">

<p elementtiming="important-text">Quelques informations importantes.</p">
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Métriques personnalisées](https://web.dev/custom-metrics/) (en anglais)
