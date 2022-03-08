---
title: performance.onresourcetimingbufferfull
slug: conflicting/Web/API/Performance/resourcetimingbufferfull_event
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance web
translation_of: Web/API/Performance/onresourcetimingbufferfull
original_slug: Web/API/Performance/onresourcetimingbufferfull
---
{{APIRef("Resource Timing API")}}

La propriété **`onresourcetimingbufferfull`** est un gestionnaire d'événements qui sera appelé lorsque l'événement [`resourcetimingbufferfull`](/fr/docs/Web/API/Performance/resourcetimingbufferfull_event) est déclenché. Ce déclenchement a lieu lorsque le tampon de performance de synchronisation des ressources du navigateur est plein.

{{AvailableInWorkers}}

## Syntaxe

```js
  callback = performance.onresourcetimingbufferfull = buffer_full_cb;
```

### Valeur de retour

- `callback`
  - : Un {{event("Event_handlers", "event handler")}} qui est invoqué lorsque l'événement [`resourcetimingbufferfull`](/fr/docs/Web/API/Performance/resourcetimingbufferfull_event) est déclenché.

## Exemple

L'exemple suivant définit une fonction de rappel sur la propriété `onresourcetimingbufferfull`.

```js
function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Définit un rappel si le tampon de ressources est rempli.
  performance.onresourcetimingbufferfull = buffer_full;
}
```

## Spécifications

| Spécification                                                                                                                                                | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Resource Timing', '#dom-performance-onresourcetimingbufferfull',
        'onresourcetimingbufferfull')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Performance.onresourcetimingbufferfull")}}

## Voir aussi

- Événément [`resourcetimingbufferfull`](/fr/docs/Web/API/Performance/resourcetimingbufferfull_event)
- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
