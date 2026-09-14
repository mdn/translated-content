---
title: "Element : propriété elementTiming"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La propriété **`elementTiming`** de l'interface {{DOMxRef("Element")}} identifie les éléments à observer dans l'API {{DOMxRef("PerformanceElementTiming")}}. La propriété `elementTiming` reflète la valeur de l'attribut HTML [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming).

## Valeur

Une chaîne de caractères.

## Exemples

### Journaliser la valeur de `elementTiming`

Dans cet exemple, l'ajout de l'attribut [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming) à l'élément HTML {{HTMLElement("img")}} définit l'image à observer.

```html
<img
  src="image.jpg"
  alt="une belle image"
  elementtiming="grande-image"
  id="monImage" />
```

Vous pouvez obtenir la valeur sous forme de chaîne de caractères de l'attribut HTML `elementtiming` en appelant `el.elementTiming`.

```js
const el = document.getElementById("monImage");
console.log(el.elementTiming); // "grande-image"
```

Pour un exemple plus complet sur l'utilisation de l'API Element Timing, voir {{DOMxRef("PerformanceElementTiming")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("PerformanceElementTiming")}}
- L'attribut HTML [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming)
