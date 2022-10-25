---
title: WindowOrWorkerGlobalScope.indexedDB
slug: Web/API/indexedDB
translation_of: Web/API/WindowOrWorkerGlobalScope/indexedDB
original_slug: Web/API/WindowOrWorkerGlobalScope/indexedDB
---
{{ APIRef() }}

La propiedad **`indexedDB`** del mixin {{domxref("WindowOrWorkerGlobalScope")}} proporciona un mecanismo para que las aplicaciones puedan acceder asíncronamente a las capacidades de las bases de datos indexadas.

## Sintaxis

```js
var DBOpenRequest = self.indexedDB.open('toDoList');
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

| Especificación                                                                                                   | Estado                           | Comentario                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| {{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}} | {{Spec2('IndexedDB 2')}} | Definido en un `WindowOrWorkerGlobalScope` parcial en la última especificación. |
| {{SpecName('IndexedDB', '#widl-IDBEnvironment-indexedDB', 'indexedDB')}}                 | {{Spec2('IndexedDB')}}     | Definición inicial.                                                             |

## Compatibilidad de Navegadores

{{Compat("api.indexedDB")}}

## Ver también

- [Utilización de IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Iniciando transacciones: {{domxref("IDBDatabase")}}
- Usando transacciones: {{domxref("IDBTransaction")}}
- Estableciendo un rango de claves: {{domxref("IDBKeyRange")}}
- Recuperación y edición de tus datos: {{domxref("IDBObjectStore")}}
- Utilización de cursores: {{domxref("IDBCursor")}}
- Ejemplo de referencia: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([ver ejemplo _live_](http://mdn.github.io/to-do-notifications/).)
