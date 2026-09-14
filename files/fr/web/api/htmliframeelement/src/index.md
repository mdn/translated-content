---
title: "HTMLIFrameElement : propriété src"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLIFrameElement")}} est une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#src), contenant l'adresse du contenu à intégrer.

Notez que la suppression programmatique de l'attribut src d'un `<iframe>` (par exemple via {{DOMxRef("Element.removeAttribute()")}}) entraîne le chargement de `about:blank` dans le cadre.

## Exemple

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
const body = document.querySelector("body");
body.appendChild(iframe); // Récupère l'image en utilisant l'URL complète comme référent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLEmbedElement.src")}}
- La propriété {{DOMxRef("HTMLImageElement.src")}}
- La propriété {{DOMxRef("HTMLMediaElement.src")}}
- La propriété {{DOMxRef("HTMLScriptElement.src")}}
- La propriété {{DOMxRef("HTMLTrackElement.src")}}
