---
title: IDBCursor
slug: Web/API/IDBCursor
---

{{APIRef("IndexedDB")}}

La interfaz **`IDBCursor`** de la [IndexedDB API](/es/docs/IndexedDB) representa un [cursor](/es/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_cursor) para atravesar o iterar varios registros de una base de datos.

El cursor tiene una fuente que indica el índice o el almacén de objetos sobre el que se está iterando. Tiene una posición dentro del rango y se mueve en una dirección que aumenta o disminuye en el orden de las Keys de registro. El cursor permite a una aplicación procesar asincrónicamente todos los registros del rango del cursor.

Puede tener un número ilimitado de cursores al mismo tiempo. Siempre se obtiene el mismo objeto `IDBCursor` que representa un cursor determinado. Las operaciones se realizan en el índice subyacente o en el almacén de objetos.

{{AvailableInWorkers}}

## Methods

- {{domxref("IDBCursor.advance()")}}
  - : Establece el número de veces que un cursor debe mover su posición hacia adelante.
- {{domxref("IDBCursor.continue()")}}
  - : Avanza el cursor a la siguiente posición a lo largo de su dirección, hasta el elemento cuya `key` coincide con el parámetro clave opcional.

<!---->

- {{domxref("IDBCursor.delete()")}}

  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un hilo separado, elimina el registro en la posición del cursor, sin cambiar la posición del cursor. Esto se puede utilizar para borrar registros específicos.

    {{domxref("IDBCursor.update()")}}

    Devuelve un objeto {{domxref("IDBRequest")}} y, en un hilo separado, actualiza el valor en la posición actual del cursor en el almacén de objetos. Esto se puede utilizar para actualizar registros específicos.

## Propiedades

- {{domxref("IDBCursor.source")}} {{readonlyInline}}
  - : Devuelve {{domxref("IDBObjectStore")}} o {{domxref("IDBIndex")}}} que el cursor está iterando. Esta función nunca devuelve nulo o lanza una excepción, incluso si el cursor está siendo iterado, ha iterado más allá de su final, o su transacción no está activa.
- {{domxref("IDBCursor.direction")}} {{readonlyInline}}
  - : Devuelve la dirección de desplazamiento del cursor. Ver [Constants](#const_next) para valores posibles.
- {{domxref("IDBCursor.key")}} {{readonlyInline}}
  - : Devuelve la `key` del registro en la posición del cursor. Si el cursor está fuera de su rango, se fija en `undefined`. La `key` del cursor puede ser de cualquier tipo de datos.
- {{domxref("IDBCursor.primaryKey")}} {{readonlyInline}}
  - : Devuelve la `key` primaria efectiva actual del cursor. Si el cursor está siendo iterado o ha iterado fuera de su rango, se fija en `undefined`. La `key` principal del cursor puede ser cualquier tipo de datos.

## Constants

{{ deprecated_header(13) }}

> **Advertencia:** These constants are no longer available — they were removed in Gecko 25. You should use the string constants directly instead. ([Error 891944 en Firefox](https://bugzil.la/891944))

- `NEXT`: `"next"` : The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards (monotonically increasing in the order of keys).
- `NEXTUNIQUE` : `"nextunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
- `PREV`: `"prev"` : The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves downwards (monotonically decreasing in the order of keys).
- `PREVUNIQUE`: `"prevunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.

## Ejemplo

En este simple fragmento creamos una transacción, recuperamos un almacén de objetos y usamos un cursor para iterar todos los registros del almacén de objetos. El cursor no nos obliga a seleccionar los datos en base a una `key`; podemos simplemente cogerlos todos. También tenga en cuenta que en cada iteración del bucle, puede tomar datos del registro actual bajo el objeto del cursor utilizando `cursor.value.foo`. Para un ejemplo completo de funcionamiento, vea nuestro [IDBCursor example](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

```js
function displayData() {
  var transaction = db.transaction(["rushAlbumList"], "readonly");
  var objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML = cursor.value.albumTitle + ", " + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Using IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
