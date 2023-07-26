---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

El método **`persist()`** de la interfaz {{domxref("StorageManager")}} solicita permiso para usar el almacenamiento persistente, y devuelve una {{jsxref('Promise')}} que se resuelve como `true` si se concede el permiso y _box mode_ es persistente, y `false` en cualquier otro caso.

## Sintaxis

```
navigator.storage.persist().then(function(persistent) { ... })
```

### Parámetros

Ninguno.

### Valor devuelto

Una {{jsxref('Promise')}} que se resuelve en un {{jsxref('Boolean')}}.

## Ejemplo

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(function (persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
