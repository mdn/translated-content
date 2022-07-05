---
title: SyncManager
slug: Web/API/SyncManager
translation_of: Web/API/SyncManager
---
{{APIRef("Service Workers API")}}{{Non-standard_header}}

L'interface **`SyncManager`** de l'[API ServiceWorker](/fr/docs/Web/API/Service_Worker_API) fournit une interface pour l'enregistrement et l'énumération des instances de `SyncRegistration`.

## Properties

None.

## Methods

- {{domxref("SyncManager.register")}}
  - : Créé une nouvelle sync registration et retourne une {{jsxref("Promise")}}
- {{domxref("SyncManager.getTags")}}
  - : Renvoie une liste d'identifiants définis par le développeur pour l'enregistrement du SyncManager.

## Specifications

| Specification                                                                                    | Status                               | Comment             |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Background Sync','#sync-manager-interface','SyncManager')}} | {{Spec2('Background Sync')}} | Initial definition. |

## Browser compatibility

{{Compat("api.SyncManager")}}
