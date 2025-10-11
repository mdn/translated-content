---
title: "HTMLImageElement&nbsp;: propriété currentSrc"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`currentSrc`** de {{domxref("HTMLImageElement")}} indique l'URL de l'image actuellement affichée dans l'élément HTML {{HTMLElement("img")}} qu'elle représente.

## Valeur

Une chaîne de caractères indiquant l'URL complète de l'image actuellement visible dans l'élément {{HTMLElement("img")}} représenté par un `HTMLImageElement`. Ceci est utile lorsque vous fournissez plusieurs options d'image à l'aide des propriétés {{domxref("HTMLImageElement.sizes", "sizes")}} et/ou {{domxref("HTMLImageElement.srcset")}}. `currentSrc` permet de déterminer quelle image parmi celles proposées a été sélectionnée par le navigateur.

## Exemples

Dans cet exemple, deux tailles différentes sont proposées pour une image d'horloge. L'une fait 200px de large et l'autre 400px. L'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) indique que l'image doit être affichée à 50&nbsp;% de la largeur du document si la zone d'affichage (<i lang="en">viewport</i> en anglais) fait moins de 400px de large&nbsp;; sinon, l'image est affichée à 90&nbsp;% de la largeur du document.

### HTML

```html
<img
  src="/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png"
  alt="Horloge"
  srcset="
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width &lt;= 400px) 50%, 90%" />
```

### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Image de 200px utilisée !"
  : "Image de 400px utilisée.";
document.body.appendChild(p);
```

### Résultat

{{EmbedLiveSample("exemples", 640, 370)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
