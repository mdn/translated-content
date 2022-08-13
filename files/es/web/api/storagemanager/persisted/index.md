---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
tags:
  - Contexto seguro
  - Referencia
  - Storage API
  - metodo
  - persisted()
translation_of: Web/API/StorageManager/persisted
---
{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

La propiedad **`persisted`** de la interfaz {{domxref("StorageManager")}} devuelve una {{jsxref('Promise')}} que se resuelve como `true` si _box mode_ es persistente para el alamacenamiento de su sitio.

## Sintaxis

    navigator.storage.persisted().then(function(persistent) { ... })

### Parámetros

Ninguno.

### Devuelve

Una {{jsxref('Promise')}} que se resuelve como {{jsxref('Boolean')}}.

## Ejemplo

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(function(persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });
```

## Especificaciones

| Especificación                                                                           | Estado                       | Comentario          |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Storage','#dom-storagemanager-persisted','persisted')}} | {{Spec2('Storage')}} | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("api.StorageManager.persisted")}}
