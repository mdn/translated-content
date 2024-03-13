---
title: IDBDatabase
slug: Web/API/IDBDatabase
l10n:
  sourceCommit: 89c582f832c8700f7bccef50dabea59350fe3906
---

{{APIRef("IndexedDB")}}

La interfaz **`IDBDatabase`** de la API de IndexedDB (Base de datos indexada) proporciona una [conexión a una base de datos](/es/docs/Web/API/IndexedDB_API#database_connection); puede usar un objeto `IDBDatabase` para abrir una [transacción](/es/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) en su base de datos y luego crear, manipular y eliminar objetos (datos) en esa base de datos. La interfaz proporciona la única forma de obtener y administrar versiones de la base de datos.

{{AvailableInWorkers}}

> **Nota:** Todo lo que haces en IndexedDB siempre sucede en el contexto de una [transacción](/es/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction), que representa interacciones con datos en la base de datos. Todos los objetos en IndexedDB, incluidos los almacenes de objetos, los índices y los cursores, están vinculados a una transacción en particular. Por lo tanto, no puede ejecutar comandos, acceder a datos o abrir nada fuera de una transacción.

{{InheritanceDiagram}}

## Propiedades de instancia

- {{domxref("IDBDatabase.name")}} {{ReadOnlyInline}}
  - : Una cadena que contiene el nombre de la base de datos conectada.
- {{domxref("IDBDatabase.version")}} {{ReadOnlyInline}}
  - : Un entero de 64 bits que contiene la versión de la base de datos conectada. Cuando se crea una base de datos por primera vez, este atributo es una cadena vacía.
- {{domxref("IDBDatabase.objectStoreNames")}} {{ReadOnlyInline}}
  - : Un {{ domxref("DOMStringList") }} que contiene una lista de los nombres de los [objetos almacenados](/es/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) actualmente en la base de datos conectada.

## Métodos de instancia

Hereda de: [EventTarget](/es/docs/Web/API/EventTarget)

- {{domxref("IDBDatabase.close()")}}
  - : Regresa inmediatamente y cierra la conexión a una base de datos en un hilo separado.
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : Crea y devuelve un nuevo índice o almacén de objetos.
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : Destruye el almacén de objetos con el nombre dado en la base de datos conectada, junto con los índices que hacen referencia a él.
- {{domxref("IDBDatabase.transaction()")}}
  - : Devuelve inmediatamente un objeto de transacción ({{domxref("IDBTransaction")}}) que contiene el método {{domxref("IDBTransaction.objectStore")}}, que puede usar para acceder a su almacén de objetos. Se ejecuta en un hilo separado.

## Eventos

Detecte estos eventos usando `addEventListener()` o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- [`close`](/es/docs/Web/API/IDBDatabase/close_event)

  - : Un evento activado cuando la conexión de la base de datos se cierra inesperadamente.

- [`versionchange`](/es/docs/Web/API/IDBDatabase/versionchange_event)
  - : Un evento activado cuando se solicitó un cambio en la estructura de la base de datos.

Los siguientes eventos están disponibles para `IDBDatabase` mediante el recorrido de eventos desde {{domxref("IDBTransaction")}}:

- `IDBTransaction` [`abort`](/es/docs/Web/API/IDBTransaction/abort_event)
  - : Un evento activado cuando se aborta una transacción.
- `IDBTransaction` [`error`](/es/docs/Web/API/IDBTransaction/error_event)
  - : Un evento que se activa cuando una solicitud devuelve un error y el evento aparece en el objeto de conexión.

## Ejemplo

En el siguiente fragmento de código, abrimos una base de datos de forma asíncrona ({{domxref("IDBFactory")}}), manejamos los casos de éxito y error, y creamos un nuevo almacén de objetos en caso de que se necesite una actualización de ({{ domxref("IDBdatabase") }}). Para ver un ejemplo funcional completo, consulte nuestra aplicación [Notificaciones de tareas](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Abramos nuestra base de datos
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Estos dos manejadores de eventos actúan sobre el objeto IDBDatabase,
// cuando la base de datos se abre con éxito o no
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // almacenar el resultado de abrir la base de datos en
  // la variable db. Esto se usa mucho más adelante.
  db = DBOpenRequest.result;

  // Ejecute la función displayData() para completar la lista
  // de tareas con todos los datos de la lista de tareas que
  // ya están en el IDB
  displayData();
};

// Este evento maneja el evento por el cual se necesita crear
// una nueva versión de la base de datos. O no se ha creado antes,
// o se ha enviado un nuevo número de versión a través de la línea
// window.indexedDB.open anterior.

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>Error loading database.</li>";
  };

  // Cree un objectStore para esta base de datos
  // usando IDBDatabase.createObjectStore

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // definir qué elementos de datos contendrá el objectStore

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Object store created.</li>";
};
```

La siguiente línea abre una transacción en la base de datos, luego abre un almacén de objetos en el que podemos manipular los datos dentro.

```js
const objectStore = db
  .transaction("toDoList", "readwrite")
  .objectStore("toDoList");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Iniciando transacciones: {{domxref("IDBDatabase")}}
- Uso de transacciones: {{domxref("IDBTransaction")}}
- Configuración de un rango de claves: {{domxref("IDBKeyRange")}}
- Recuperar y realizar cambios en sus datos: {{domxref("IDBObjectStore")}}
- Uso de cursores: {{domxref("IDBCursor")}}
- Ejemplo de referencia: [Notificaciones de tareas](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Ver el ejemplo en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)).
