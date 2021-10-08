---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
tags:
  - API
  - Affichage
  - DOM
  - Méthodes
  - Plein écran
translation_of: Web/API/Document/exitFullscreen
---
{{ApiRef("Fullscreen API")}}

La méthode **`Document.exitFullscreen()`** extrait le document du mode plein écran ; elle est utilisée pour inverser les effets d'un appel au mode plein écran réalisé avec la méthode {{domxref("Element.requestFullscreen()")}}.

> **Note :** Si un autre élément était précédemment en mode plein écran lorsque l'élément en cours a été placé en mode plein écran, cet élément précédent reprend le mode plein écran. Une "pile" d'éléments en plein écran est maintenue par le navigateur à cette fin.

## Syntaxe

    document.exitFullscreen();

## Exemple

```js
// Click bascule en mode plein écran
document.onclick = function (event) {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
};
```

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Fullscreen", "#dom-document-exitfullscreen", "Document.exitFullscreen()")}} | {{Spec2("Fullscreen")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Document.exitFullscreen")}}

## Voir aussi

- [Utiliser le mode plein écran](/fr/docs/Web/Guide/DOM/Using_full_screen_mode)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
