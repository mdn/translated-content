---
title: "PerformanceResourceTiming : propriété deliveryType"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`deliveryType`** est une chaîne de caractères indiquant comment la ressource a été délivrée — par exemple depuis le cache ou avec une pré-récupération de navigation.

## Valeur

Une chaîne de caractères, qui peut prendre l'une des valeurs suivantes&nbsp;:

- `"cache"`
  - : La ressource a été récupérée depuis le cache.
- `"navigational-prefetch"` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : La ressource a été récupérée à partir d'une réponse pré-récupérée stockée dans un cache en mémoire avec [l'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API).
- `""` (chaîne de caractères vide)
  - : Retourne une chaîne de caractères vide si aucun des types de livraison ci-dessus ne s'applique.

## Exemples

### Filtrer les ressources

La propriété `deliveryType` peut être utilisée pour obtenir uniquement certaines entrées de chronologie de ressources&nbsp;; par exemple, uniquement celles qui ont été mises en cache.

L'exemple suivant utilise un {{DOMxRef("PerformanceObserver")}} pour notifier les nouvelles entrées de performance de type `resource` au fur et à mesure qu'elles sont enregistrées dans la chronologie de performance du navigateur. L'option `buffered` permet d'accéder aux entrées antérieures à la création de l'observateur.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

L'exemple suivant utilise {{DOMxRef("Performance.getEntriesByType()")}}, qui n'affiche que les entrées de performance de type `resource` présentes dans la chronologie de performance du navigateur au moment de l'appel de la méthode.

```js
const scripts = performance
  .getEntriesByType("resource")
  .filter((entry) => entry.deliveryType === "cache");
console.log(scripts);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
