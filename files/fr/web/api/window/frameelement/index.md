---
title: Window.frameElement
slug: Web/API/Window/frameElement
---

{{ApiRef}}

La propriété **`Window.frameElement`** renvoie l'élément (tel que {{HTMLElement("iframe")}} ou {{HTMLElement("object")}}) dans lequel la fenêtre est intégrée.

> **Note :** Malgré le nom de cette propriété, elle fonctionne pour les documents intégrés dans n'importe quel point d'incorporation, y compris {{HTMLElement("object")}}, {{HTMLElement("iframe")}}, ou {{HTMLElement("embed")}}.

## Syntaxe

```js
const frameEl = window.frameElement;
```

### Valeur

L'élément dans lequel la fenêtre est intégrée. Si la fenêtre n'est pas intégrée dans un autre document, ou si le document dans lequel elle est intégrée a un {{glossary("origin")}}, la valeur est {{jsxref("null")}} à la place.

## Exemple

```js
const frameEl = window.frameElement;
// Si nous sommes incorporés, modifiez l'URL de l'élément contenant en 'http://mozilla.org/'
if (frameEl) {
  frameEl.src = "http://mozilla.org/";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.frames")}} renvoie un objet de type tableau, listant les sous-cadres directs de la fenêtre courante.
- {{domxref("window.parent")}} renvoie la fenêtre parente, qui est la fenêtre contenant le `frameElement` de la fenêtre enfant.
