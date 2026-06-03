---
title: "Document : propriété fullscreenElement"
short-title: fullscreenElement
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fullscreen API")}}

La propriété en lecture seule **`fullscreenElement`** de l'interface {{DOMxRef("Document")}} retourne l'élément ({{DOMxRef("Element")}}) qui est actuellement affiché en mode plein écran dans ce document, ou `null` si le mode plein écran n'est pas actuellement utilisé.

Bien que cette propriété soit en lecture seule, elle ne générera pas d'erreur si elle est modifiée (même en mode strict)&nbsp;: le mutateur est une opération nulle et sera ignoré.

## Valeur

L'objet {{DOMxRef("Element")}} qui est actuellement en mode plein écran&nbsp;; si le mode plein écran n'est pas actuellement utilisé par le `document`, la valeur retournée est `null`. Si plusieurs éléments sont en mode plein écran, l'élément le plus haut (le plus récemment demandé) est retourné.

## Exemples

Cet exemple présente une fonction, `isVideoInFullscreen()`, qui examine la valeur retournée par `fullscreenElement`&nbsp;; si le document est en mode plein écran (`fullscreenElement` n'est pas `null`) et que la propriété {{DOMxRef("Node.nodeName", "nodeName")}} de l'élément en plein écran est `VIDEO`, indiquant un élément HTML {{HTMLElement("video")}}, la fonction retourne `true`, indiquant que la vidéo est en mode plein écran.

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement?.nodeName === "VIDEO") {
    return true;
  }
  return false;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
- La méthode {{DOMxRef("Element.requestFullscreen()")}}
- La méthode {{DOMxRef("Document.exitFullscreen()")}}
- La pseudo-classe {{CSSxRef(":fullscreen")}} et le pseudo-élément {{CSSxRef("::backdrop")}}
- L'attribut HTML [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) de l'élément HTML {{HTMLElement("iframe")}}
