---
title: IDBObjectStore.add
slug: Web/API/IDBObjectStore/add
---

{{ APIRef("IDBObjectStore") }}

El metodo `add()` de la interfaz {{domxref("IDBObjectStore")}} retorna un objeto {{domxref("IDBRequest")}}, y, un hilo separado, crea un [clone estructurado](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) del valor, y almacena el valor clonado en el almacén de objetos. Esto es para agregar nevos registros a un almacén de objetos.

Para determinar si la operación de agregar fue completada satisfactoriamente, escucha el evento `complete` de la transaccion en adicion al evento `success` de la peticion `IDBojectStore.add`, porque la transaccion y todavía puede fallar después de lanzar el evento success. En otras palabras, el eventos success sólo es lanzado cuando la transacción ha sido puesta en cola satisfactoriamente.

El método agregar es un método de _sólo inserción_. Si un registro ya existe en el almacén de objetos con el argumento `key` como su clave, entonces un error `ConstrainError` es lanzado en el objeto petición devuelto. Para actualizar registros existentes, debes usar el método {{domxref("IDBObjectStore.put")}} en su lugar.

## Sintaxis

```js
var request = objectStore.add(myItem, optionalKey);
```

### Retorno

Un objeto {{domxref("IDBRequest")}} en el que los eventos subsecuentes relacionados a esta operación son lanzados.

### Excepciones

Este método puede generar un {{domxref("DOMException")}} con un {{domxref("DOMError")}} de uno de los siguiente tipos:

- `ReadOnlyError`
  - : La transacción asociada con esta operación está en un [modo](/es/docs/Web/API/IDBTransaction#mode_constants) de sólo lectura.
- `TransactionInactiveError`
  - : Esta transacción de [`IDBObjectStore`](/es/docs/Web/API/IDBObjectStore)'s está inactiva.
- `DataError`

  - : Cualquiera de los siguientes condiciones aplica:

    - El almacén de objetos usa llaves en línea o tiene un generador de llaves, y una argumento llave fue proporcionado.
    - El almacén de objetos usa llaves fuera de línea y no tiene un generador de llaves, y un argumento llave fue proporcionado.
    - El almacén de objetos usa llaves en línea pero no un generador de llaves, y la ruta de la llave del almacén de objetos no da una llave válida.
    - El argumento llave fue proporcionado pero no contiene una llave válida.

- `InvalidStateError`
  - : El [`IDBObjectStore`](/es/docs/Web/API/IDBObjectStore) ha sido borrado o removido.
- `DataCloneError`
  - : Los datos siendo almacenados no pueden ser clonados por el algoritmo de clonado estructurado interno.

## Ejemplo

En el siguiente código, abrimos una transacción read/write en nuestra base de datos y agregado algunos datos al almacén de datos usando `add()`. También ten en cuenta que las funciones adjuntas a los manejadores de eventos de la transacción para informar en la salida de la apertura de transacciones en el evento de éxito o falla. Para un ejemplo completo funcionando, mira nuestra aplicación [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Abrimos nuestra base de datos
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // Almacenar el resultado de la apertura de la base de datos en la variable db. Esta es usada mucho después
  db = DBOpenRequest.result;

  // Ejecuta la función addData() para agregar los datos
  addData();
};

function addData() {
  // Crea un nuevo objeto listo para ser insertado en la IDB
  var newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // Inicia una transacción de lectura/escritura db transaction, lista para agregar los datos
  var transaction = db.transaction(["toDoList"], "readwrite");

  // Informa sobre el éxito de la inicio de la transacción
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>Transaction completed: database modification finished.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
  };

  // Crea una almacén de objetos en la transacción
  var objectStore = transaction.objectStore("toDoList");

  // Agrega nuestro objeto newItem al almacén de objetos
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function (event) {
    //Informa sobre el éxito de nuestro nuevo elemento en la base de datos
    note.innerHTML += "<li>New item added to database.</li>";
  };
}
```

## Parámetros

- value
  - : El valor para ser almacenado.
- key
  - : La llave a usar para identificar el registro. Si no es especificada, el resultado es nulo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Iniciando transacciones: {{domxref("IDBDatabase")}}
- Usando transacciones: {{domxref("IDBTransaction")}}
- Estableciendo un rango de llaves: {{domxref("IDBKeyRange")}}
- Obteniendo y haciendo cambios a tus datos: {{domxref("IDBObjectStore")}}
- Usando cursores: {{domxref("IDBCursor")}}
- Ejemplo de referencia: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo](https://mdn.github.io/dom-examples/to-do-notifications/).)
