---
title: "Window : propriété frameElement"
short-title: frameElement
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

La propriété **`frameElement`** de l'interface {{DOMxRef("Window")}} retourne un élément HTML (tel que {{HTMLElement("iframe")}} ou {{HTMLElement("object")}}) dans lequel la fenêtre est intégrée.

> [!NOTE]
> Malgré le nom de cette propriété, elle fonctionne pour les documents intégrés dans n'importe quel point d'incorporation, y compris {{HTMLElement("object")}}, {{HTMLElement("iframe")}}, ou {{HTMLElement("embed")}}.

## Valeur

L'élément dans lequel la fenêtre est intégrée. Si la fenêtre n'est pas intégrée dans un autre document, ou si le document dans lequel elle est intégrée a une {{Glossary("origin", "origine")}} différente, la valeur est [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) à la place.

## Exemples

```js
const frameEl = window.frameElement;
// Si nous sommes incorporés, modifiez l'URL de l'élément contenant en 'http://mozilla.org/'
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("window.frames")}} retourne un objet de type tableau, listant les sous-cadres directs de la fenêtre courante.
- {{DOMxRef("window.parent")}} retourne la fenêtre parente, qui est la fenêtre contenant le `frameElement` de la fenêtre enfant.
