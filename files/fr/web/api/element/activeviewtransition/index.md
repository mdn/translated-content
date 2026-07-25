---
title: "Element : propriété activeViewTransition"
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

La propriété en lecture seule **`activeViewTransition`** de l'interface {{DOMxRef("Element")}} retourne une instance de {{DOMxRef("ViewTransition")}} représentant la [transition de vue](/fr/docs/Web/API/View_Transition_API) actuellement active sur un élément. Elle fournit un moyen cohérent d'accéder à une [transition de vue limitée à l'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped) active sans avoir besoin d'enregistrer une référence pour plus tard.

Une [transition de vue limitée à l'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped) peut également être accédée par la valeur de retour de {{DOMxRef("Element.startViewTransition()")}}.

## Valeur

Une instance de {{DOMxRef("ViewTransition")}} ou `null` si l'élément n'a pas de transition de vue active.

## Exemples

### Utilisation simple

Cet exemple montre comment utiliser `activeViewTransition` pour obtenir une référence à une transition de vue en cours.

```js
const monElement = document.querySelector(".mon-element");

// …

function gererVT() {
  const vt = monElement.startViewTransition(() => {
    changerQuelquechoseDuDOM();
  });
}

// Retourne une référence à vt si la transition est toujours en cours
monElement.activeViewTransition;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.startViewTransition()")}}
- La propriété {{DOMxRef("Document.activeViewTransition")}}
- [Utiliser les transitions de vue limitées à l'élément](/fr/docs/Web/API/View_Transition_API/Using_element-scoped)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- L'interface {{DOMxRef("ViewTransition")}}
