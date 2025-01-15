---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
---

{{ApiRef("Fullscreen API")}}

La méthode **`Document.exitFullscreen()`** extrait le document du mode plein écran ; elle est utilisée pour inverser les effets d'un appel au mode plein écran réalisé avec la méthode {{domxref("Element.requestFullscreen()")}}.

> [!NOTE]
> Si un autre élément était précédemment en mode plein écran lorsque l'élément en cours a été placé en mode plein écran, cet élément précédent reprend le mode plein écran. Une "pile" d'éléments en plein écran est maintenue par le navigateur à cette fin.

## Syntaxe

```js
document.exitFullscreen();
```

## Exemple

```js
// Click bascule en mode plein écran
document.onclick = function (event) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser le mode plein écran](/fr/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- [`allowfullscreen`](/fr/docs/Web/HTML/Element/iframe#allowfullscreen)
