---
title: "HTMLImageElement&nbsp;: propriété currentSrc"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`currentSrc`** de {{DOMxRef("HTMLImageElement")}} indique l'URL de l'image sélectionnée par le navigateur pour être chargée.

## Valeur

Une chaîne de caractères indiquant l'URL complète de l'image actuellement sélectionnée par le navigateur pour être chargée. Si l'image utilise l'attribut {{DOMxRef("HTMLImageElement.srcset", "srcset")}}, `currentSrc` permet de déterminer quelle image parmi celles fournies a été sélectionnée par le navigateur. La valeur de la propriété n'est pas liée au fait que l'image ait été chargée avec succès ou non.

## Exemples

### Tester quelle image est chargée

Dans cet exemple, deux tailles différentes sont proposées pour une image d'horloge. L'une fait 200px de large et l'autre 400px. L'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) indique que l'image doit être affichée à 50% de la largeur du document si la zone d'affichage (<i lang="en">viewport</i> en anglais) fait moins de 400px de large&nbsp;; sinon, l'image est affichée à 90% de la largeur du document.

#### HTML

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

#### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Image de 200px utilisée !"
  : "Image de 400px utilisée.";
document.body.appendChild(p);
```

#### Résultat

{{EmbedLiveSample("Tester quelle image est chargée", 640, 370)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.src")}}
- La propriété {{DOMxRef("HTMLImageElement.srcSet")}}
