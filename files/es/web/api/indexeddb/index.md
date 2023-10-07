---
title: indexedDB
slug: Web/API/indexedDB
---

{{ APIRef() }}

La propiedad **`indexedDB`** proporciona un mecanismo para que las aplicaciones puedan acceder asíncronamente a las capacidades de las bases de datos indexadas.

## Sintaxis

```js
var DBOpenRequest = self.indexedDB.open("toDoList");
```

### Valor

Un objeto {{domxref("IDBFactory")}}.

## Ejemplo

```
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open('toDoList');
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
 }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Utilización de IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Iniciando transacciones: {{domxref("IDBDatabase")}}
- Usando transacciones: {{domxref("IDBTransaction")}}
- Estableciendo un rango de claves: {{domxref("IDBKeyRange")}}
- Recuperación y edición de tus datos: {{domxref("IDBObjectStore")}}
- Utilización de cursores: {{domxref("IDBCursor")}}
- Ejemplo de referencia: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo _live_](https://mdn.github.io/dom-examples/to-do-notifications/).)
