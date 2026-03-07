---
title: "PerformanceNavigationTiming : propriété unloadEventEnd"
short-title: unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
l10n:
  sourceCommit: 62708f419bc2b77535822fd9f9b0fd0912fd2014
---

{{APIRef("Performance API")}}

La propriété en lecture seule **`unloadEventEnd`** retourne un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le temps immédiatement après que le gestionnaire d'évènements {{DOMxRef("Window/unload_event", "unload")}} du document précédent se termine.

## Valeur

La propriété `unloadEventEnd` peut avoir les valeurs suivantes&nbsp;:

- Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le temps immédiatement après que le gestionnaire d'évènements {{DOMxRef("Window/unload_event", "unload")}} du document précédent se termine.
- `0` s'il n'y a pas de document précédent.
- `0` si la page précédente était sur une autre origine.

## Exemples

### Mesurer le temps d'exécution du gestionnaire d'évènements `unload`

La propriété `unloadEventEnd` peut être utilisée pour mesurer combien de temps il faut pour traiter le gestionnaire d'évènements {{DOMxRef("Window/unload_event", "unload")}}.

Cela est utile pour mesurer le temps d'exécution des gestionnaires d'évènements {{DOMxRef("Window/unload_event", "unload")}} de longue durée.

```js
window.addEventListener("unload", (event) => {
  // Du code de longue durée
});
```

Exemple utilisant un {{DOMxRef("PerformanceObserver")}}, qui notifie des nouvelles entrées de performance `navigation` au fur et à mesure qu'elles sont enregistrées dans la timeline de performance du navigateur. Utilisez l'option `buffered` pour accéder aux entrées avant la création de l'observateur.

```js
const observateur = new PerformanceObserver((list) => {
  list.getEntries().forEach((entree) => {
    const tempsEventUnload = entree.unloadEventEnd - entree.unloadEventStart;
    if (tempsEventUnload > 0) {
      console.log(
        `${entree.name} :
          temps d'exécution du gestionnaire d'évènements unload :
          ${tempsEventUnload}ms`,
      );
    }
  });
});

observateur.observe({ type: "navigation", buffered: true });
```

Exemple utilisant {{DOMxRef("Performance.getEntriesByType()")}}, qui ne montre que les entrées de performance `navigation` présentes dans la timeline de performance du navigateur au moment où vous appelez cette méthode&nbsp;:

```js
const entrees = performance.getEntriesByType("navigation");
entrees.forEach((entree) => {
  const tempsEventUnload = entree.unloadEventEnd - entree.unloadEventStart;
  if (tempsEventUnload > 0) {
    console.log(`${entree.name} :
      temps d'exécution du gestionnaire d'évènements unload :
      ${tempsEventUnload}ms`);
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/unload_event", "unload")}}
