---
title: "Document : propriété activeViewTransition"
short-title: activeViewTransition
slug: Web/API/Document/activeViewTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("DOM")}}

La propriété en lecture seule **`activeViewTransition`** de l'interface {{DOMxRef("Document")}} retourne une instance de {{DOMxRef("ViewTransition")}} représentant une [transition de vue](/fr/docs/Web/API/View_Transition_API) actuellement active sur le document.

La transition de vue ({{DOMxRef("ViewTransition")}}) peut être accédée de différentes manières&nbsp;:

- La valeur de retour de {{DOMxRef("Document.startViewTransition()")}} dans le cas des transitions de vue au sein du même document.
- La propriété `viewTransition` des objets d'évènement {{DOMxRef("Window.pagereveal_event", "pagereveal")}} et {{DOMxRef("Window.pageswap_event", "pageswap")}} dans le cas des transitions de vue entre documents.

Cependant, la propriété `activeViewTransition` fournit un moyen cohérent d'accéder à la transition de vue active dans n'importe quel contexte, sans avoir à se soucier de la sauvegarder pour y accéder facilement plus tard.

## Valeur

Un objet {{DOMxRef("ViewTransition")}} ou `null` s'il n'y a pas de transition de vue active.

## Exemples

```js
// Démarrer une transition de vue
document.startViewTransition(() => {
  // Mettre à jour l'interface utilisateur pour refléter le nouvel état
  updateUI();
});

// Vérifier si une transition de vue est actuellement active
if (document.activeViewTransition) {
  console.log("Une transition de vue est actuellement active");
}

// Réagir à la fin de la transition de vue
document.activeViewTransition.finished.then(() => {
  console.log("Transition de vue terminée");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.startViewTransition()")}}
- L'évènement {{DOMxRef("Window.pagereveal_event", "pagereveal")}}
- L'évènement {{DOMxRef("Window.pageswap_event", "pageswap")}}
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- L'interface {{DOMxRef("ViewTransition")}}
