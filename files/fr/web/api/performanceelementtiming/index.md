---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
---

{{SeeCompatTable}}{{Non-Standard_Header}}{{APIRef("Element Timing API")}}

L'interface **`PerformanceElementTiming`** de l'API [Element Timing API](/fr/docs/Web/API/Element_timing_API) rapporte les informations de timing sur un élément spécifique identifié par l'auteur de la page. Par exemple, elle peut fournir des informations sur l'image principale d'un article.

## Propriétés

- [`PerformanceElementTiming.element`](/fr/docs/Web/API/PerformanceElementTiming/element) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un [`Element`](/fr/docs/Web/API/Element) représentant l'élément pour lequel nous retournons des informations.
- [`PerformanceElementTiming.id`](/fr/docs/Web/API/PerformanceElementTiming/id) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un [`DOMString`](/fr/docs/Web/API/DOMString) qui est l'identifiant (attribut [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id)) de l'élément.
- [`PerformanceElementTiming.identifier`](/fr/docs/Web/API/PerformanceElementTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Une [`DOMString`](/fr/docs/Web/API/DOMString) qui est la valeur de l'attribut [`elementtiming`](/fr/docs/Web/HTML/Attributes/elementtiming) de l'élément.
- [`PerformanceElementTiming.intersectionRect`](/fr/docs/Web/API/PerformanceElementTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un [`DOMRectReadOnly`](/fr/docs/Web/API/DOMRectReadOnly) qui est le rectangle de l'élément dans la fenêtre d'affichage.
- [`PerformanceElementTiming.loadTime`](/fr/docs/Web/API/PerformanceElementTiming/loadTime) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec l'heure de chargement de l'élément.
- [`PerformanceElementTiming.naturalHeight`](/fr/docs/Web/API/PerformanceElementTiming/naturalHeight) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un entier de 32 bits non signé (_unsigned long_) qui est la hauteur intrinsèque de l'image si cela est appliqué à une image, 0 pour le texte.
- [`PerformanceElementTiming.naturalWidth`](/fr/docs/Web/API/PerformanceElementTiming/naturalWidth) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un entier de 32 bits non signé (_unsigned long_) qui est la largeur intrinsèque de l'image si cela est appliqué à une image, 0 pour le texte.
- [`PerformanceElementTiming.renderTime`](/fr/docs/Web/API/PerformanceElementTiming/renderTime) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec le renderTime de l'élément.
- [`PerformanceElementTiming.url`](/fr/docs/Web/API/PerformanceElementTiming/url) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Une [`DOMString`](/fr/docs/Web/API/DOMString) qui est l'URL initiale de la demande de ressources pour les images, 0 pour le texte.

## Méthodes

- [`PerformanceElementTiming.toJSON()`](/fr/docs/Web/API/PerformanceElementTiming/toJSON) {{Experimental_Inline}} {{Non-Standard_Inline}}
  - : Génère une description JSON de l'objet.

## Exemples

Dans cet exemple, nous avons deux éléments qui sont observés. Nous utilisons l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, l'observation de l'élément [`PerformanceEntry.entrytype`](/fr/docs/Web/API/PerformanceEntry/entryType) `element` afin d'utiliser l'interface `PerformanceElementTiming`.

Deux entrées seront affichées dans la console. La première contenant les détails de l'image, la seconde les détails du nœud texte.

```html
<img src="image.jpg" elementtiming="big-image" />
<p elementtiming="text" id="text-id">le texte ici</p>
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    console.log(entry);
  });
});
observer.observe({ entryTypes: ["element"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
