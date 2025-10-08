---
title: "Attribut HTML : elementtiming"
short-title: elementtiming
slug: Web/HTML/Reference/Attributes/elementtiming
original_slug: Web/HTML/Attributes/elementtiming
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`elementtiming`** sert à indiquer qu'un élément doit être suivi par des objets {{domxref("PerformanceObserver")}} utilisant le type `"element"`. Pour plus de détails, voir l'interface {{domxref("PerformanceElementTiming")}}.

Cet attribut peut être appliqué aux éléments HTML {{htmlelement("img")}}, {{SVGElement("image")}} à l'intérieur d'un {{SVGElement("svg")}}, aux images d'affiche des éléments {{htmlelement("video")}}, aux éléments ayant une {{cssxref("background-image")}}, et aux éléments contenant des nœuds de texte, comme un {{htmlelement("p")}}.

Dans le DOM, cet attribut est reflété par la propriété {{domxref("Element.elementTiming")}}.

## Notes d'utilisation

La valeur donnée pour `elementtiming` devient un identifiant pour l'élément observé.

```html
<img alt="alt" src="img.jpg" elementtiming="étiquette pour l'élément" />
```

De bons candidats pour les éléments que vous pourriez vouloir observer sont&nbsp;:

- L'image principale d'un article.
- Le titre d'un article de blog.
- Les images dans un carrousel pour un site d'achat.
- L'image de l'affiche de la vidéo principale d'une page.

## Exemples

```html
<img
  alt="Alt pour l'image principale d'un article de blog"
  src="my-massive-image.jpg"
  elementtiming="Image principale" />

<p elementtiming="important-text">Quelques informations importantes.</p>
```

## Voir aussi

- {{domxref("PerformanceElementTiming")}}
- {{domxref("Element.elementTiming")}}
