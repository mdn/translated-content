---
title: "Document : méthode exitFullscreen()"
short-title: exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fullscreen API")}}

La méthode **`exitFullscreen()`** de l'interface {{DOMxRef("Document")}} demande que l'élément de ce document actuellement affiché en mode plein écran soit retiré du mode plein écran, restaurant l'état précédent de l'écran. Cela annule généralement les effets d'un appel précédent à {{DOMxRef("Element.requestFullscreen()")}}.

## Syntaxe

```js-nolint
exitFullscreen()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est résolue une fois que {{Glossary("user agent", "l'agent utilisateur")}} a terminé de quitter le mode plein écran. Si une erreur se produit lors de la tentative de sortie du mode plein écran, le gestionnaire `catch()` de la promesse est appelé.

## Exemples

Cet exemple permet au document actuel de basculer entre le mode plein écran et le mode normal chaque fois que le bouton de la souris est cliqué à l'intérieur.

```js
document.onclick = (event) => {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document a quitté le mode plein écran"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

> [!NOTE]
> Pour un exemple plus complet, voir les [exemples de `Element.requestFullscreen()`](/fr/docs/Web/API/Element/requestFullscreen#exemples).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
- La méthode {{DOMxRef("Element.requestFullscreen()")}}
- La propriété {{DOMxRef("Document.fullscreenElement")}}
- La pseudo-classe CSS {{CSSxRef(":fullscreen")}} et le pseudo-élément CSS {{CSSxRef("::backdrop")}}
- L'attribut HTML [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) de l'élément HTML {{HTMLElement("iframe")}}
