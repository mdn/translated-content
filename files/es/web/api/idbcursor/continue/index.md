---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
---

{{APIRef("IndexedDB")}}

El siguiente método de la {{domxref("IDBCursor")}} interfaz, avanza el cursor hacia la siguiente posición a lo largo de su dirección, para el elemento cuya tecla marque la opción de una tecla parámetro. si ninguna tecla es especificada, el cursor avanzará hacia la siguiente posición, basado en su dirección actual.

{{AvailableInWorkers}}

## Sintaxis

```js
cursor.continue(optionalKey);
```

### Parámetros

- _Tecla opcional_
  - : La tecla para posisionar al cursor en.

### Excepciones

Este método puede plantear un{{domxref("DOMException")}} con una {{domxref("DOMError")}} de uno de los siguientes tipos:

- `TransactionInactiveError`
  - : Esta transacción en el Cursor IDB está inactiva.
- `DataError`

  - : El parámetro de una tecla podría tener una de las siguientes condiciones:

    - La tecla no es una tecla valida.
    - La tecla está más atrás o en el mismo sitio que la posición del cursor y además la dirección del cursor es la siguiente o la única siguiente.
    - La tecla está más adelante o en el mismo sitio que la posición del cursor y además la dirección del cursor es previa o la única previa.

- `InvalidStateError`
  - : El cursor está siendo reiterado o se ha reiterado mas allá de su final.

## Ejemplo

En este simple fragmento nosotros creamos una transacción, recuperar un objeto del almacen, despues usamos un cursor para interactuar a traves de todos los registros en almacen de objetos. El cursor no requiere que nosotros seleccionemos los datos basados en una tecla; podemos tomarlo todo. También es importante resaltar que en cada interacción de la cadena, puedes tomar datos desde el registro actual debajo del objeto del cursor usando` ``cursor.value.foo`. Para dar un ejemplo completo, puedes mirar nuestra [IDBCursor example](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

```
function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Te puede interesar

- [Using IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
