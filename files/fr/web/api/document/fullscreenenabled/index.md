---
title: "Document : propriété fullscreenEnabled"
short-title: fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fullscreen API")}}

La propriété en lecture seule **`fullscreenEnabled`** de l'interface {{DOMxRef("Document")}} indique si le mode plein écran est disponible ou non.

Le mode plein écran n'est disponible que pour une page qui n'a pas de plug-ins en fenêtre dans l'un de ses documents, et si tous les éléments HTML {{HTMLElement("iframe")}} contenant le document ont leur attribut [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) défini.

Bien que cette propriété soit en lecture seule, elle ne lèvera pas d'erreur si elle est modifiée (même en mode strict)&nbsp;; le mutateur est une opération nulle et sera ignoré.

## Valeur

Une valeur booléenne qui est `true` si le document et les éléments qu'il contient peuvent être placés en mode plein écran en appelant {{DOMxRef("Element.requestFullscreen()")}}. Si le mode plein écran n'est pas disponible, cette valeur est `false`.

## Exemples

Dans cet exemple, avant de tenter de passer en mode plein écran pour un élément HTML {{HTMLElement("video")}}, la valeur de `fullscreenEnabled` est vérifiée afin d'éviter de faire la tentative lorsque ce n'est pas disponible.

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log(
      "Votre navigateur ne peut pas utiliser le mode plein écran pour le moment",
    );
  }
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
- La propriété {{DOMxRef("Document.fullscreenElement")}}
- La pseudo-classe {{CSSxRef(":fullscreen")}} et le pseudo-élément {{CSSxRef("::backdrop")}}
- L'attribut HTML [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) de l'élément HTML {{HTMLElement("iframe")}}
