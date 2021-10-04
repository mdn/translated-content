---
title: StorageManager
slug: Web/API/StorageManager
tags:
  - API
  - Interface
  - NeedsTranslation
  - Persistence
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - TopicStub
  - Usage
translation_of: Web/API/StorageManager
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Storage")}}

The **`StorageManager`** interface of the the [Storage API](/en-US/docs/Web/API/Storage_API) provides an interface for managing persistance permissions and estimating available storage. You can get a reference to this interface using either {{domxref("navigator.storage")}} or {{domxref("WorkerNavigator.storage")}}.

## Methods

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : Returns a {{domxref("StorageEstimate")}} object containing usage and quota numbers for your origin.
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if the user agent is able to persist your site's storage.
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if persistence has already been granted for your site's storage.

## Specifications

| Specification                                                                | Status                       | Comment             |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Storage','#storagemanager','StorageManger')}} | {{Spec2('Storage')}} | Initial definition. |

## Browser compatibility

{{Compat("api.StorageManager")}}
