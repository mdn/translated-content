---
title: Client.frameType
slug: Web/API/Client/frameType
tags:
  - API
  - Client
  - Experimental
  - Property
  - Reference
  - ServiceWorker
  - frameType
translation_of: Web/API/Client/frameType
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La propriété **`frameType`** (accessible en lecture seule) de l'interface {{domxref("Client")}} indique le type de contexte de navigation du {{domxref("Client")}} courant. Cette valeur peut être `auxiliary`, `top-level`, `nested`, ou `none`.

## Syntaxe

```js
var myFrameType = Client.frameType;
```

## Exemple

```js
TBD
```

## Spécifications

| Spécification                                                                            | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#client-frametype', 'frameType')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Client.frameType")}}
