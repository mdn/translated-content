---
title: "Document : méthode getAnimations()"
short-title: getAnimations()
slug: Web/API/Document/getAnimations
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

La méthode `getAnimations()` de l'interface {{DOMxRef("Document")}} retourne un tableau de tous les objets {{DOMxRef("Animation")}} actuellement en vigueur dont les éléments cibles sont des descendants du document. Ce tableau inclut les [Animations CSS](/fr/docs/Web/CSS/Guides/Animations), les [Transitions CSS](/fr/docs/Web/CSS/Guides/Transitions) et les [Animations Web](/fr/docs/Web/API/Web_Animations_API).

## Syntaxe

```js-nolint
getAnimations()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets {{DOMxRef("Animation")}}, chacun représentant une animation actuellement associée à des éléments qui sont des descendants du {{DOMxRef("Document")}} sur lequel elle est appelée.

## Exemples

L'extrait de code suivant ralentit toutes les animations sur une page en divisant par deux leur {{DOMxRef("Animation.playbackRate")}}.

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API des animations Web](/fr/docs/Web/API/Web_Animations_API)
- [Les animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- La méthode {{DOMxRef("Element.getAnimations()")}} — Récupérer uniquement les animations sur un seul {{DOMxRef("Element")}} et ses descendants.
- L'interface {{DOMxRef("Animation")}}
