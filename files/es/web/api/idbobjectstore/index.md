---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("IndexedDB")}}

La interfaz **`IDBObjectStore`** de la [API de IndexedDB](/es/docs/Web/API/IndexedDB_API) representa un almacén de objetos en una base de datos. Los registros dentro de un almacén de objetos se ordenan según sus claves. Esta clasificación permite una rápida inserción, búsqueda y recuperación ordenada.

{{AvailableInWorkers}}

## Propiedades de instancia

- {{domxref("IDBObjectStore.indexNames")}} {{ReadOnlyInline}}
  - : Una lista de los nombres de [índices](/es/docs/Web/API/IndexedDB_API/Basic_Terminology#index) en objetos en este almacén de objetos.
- {{domxref("IDBObjectStore.keyPath")}} {{ReadOnlyInline}}
  - : La [ruta clave](/es/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) de este almacén de objetos. Si este atributo es `null`, la aplicación debe proporcionar una clave para cada operación de modificación.
- {{domxref("IDBObjectStore.name")}}
  - : El nombre de este almacén de objetos.
- {{domxref("IDBObjectStore.transaction")}} {{ReadOnlyInline}}
  - : El objeto {{domxref("IDBTransaction")}} al que pertenece este almacén de objetos.
- {{domxref("IDBObjectStore.autoIncrement")}} {{ReadOnlyInline}}
  - : El valor del indicador de incremento automático para este almacén de objetos.

## Métodos de instancia

- {{domxref("IDBObjectStore.add()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, crea un [clon estructurado](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) de `value`, y almacena el valor clonado en el almacén de objetos. Esto es para agregar nuevos registros a un almacén de objetos.
- {{domxref("IDBObjectStore.clear()")}}
  - : Crea y devuelve inmediatamente un objeto {{domxref("IDBRequest")}} y borra este almacén de objetos en un subproceso separado. Esto es para eliminar todos los registros actuales de un almacén de objetos.
- {{domxref("IDBObjectStore.count()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, devuelve el número total de registros que coinciden con la clave proporcionada o {{domxref("IDBKeyRange")}}. Si no se proporcionan argumentos, devuelve el número total de registros en el almacén.
- {{domxref("IDBObjectStore.createIndex()")}}
  - : Crea un nuevo índice durante una actualización de versión y devuelve un nuevo objeto {{domxref("IDBIndex")}} en la base de datos conectada.
- {{domxref("IDBObjectStore.delete()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, elimina el almacen de objetos seleccionado por la clave especificada. Esto es para eliminar registros individuales de un almacén de objetos.
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : Destruye el índice especificado en la base de datos conectada, utilizado durante una actualización de versión.
- {{domxref("IDBObjectStore.get()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, devuelve el almacén de objetos seleccionado por la clave especificada. Esto es para recuperar registros específicos de un almacén de objetos.
- {{domxref("IDBObjectStore.getKey()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, recupera y devuelve la clave de registro del objeto en el almacen de objetos que coincide con el parámetro especificado.
- {{domxref("IDBObjectStore.getAll()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} recupera todos los objetos en el almacén de objetos que coincidan con el parámetro especificado o todos los objetos en el almacén si no se proporcionan parámetros.
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} recupera claves de registro para todos los objetos en el almacén de objetos que coincidan con el parámetro especificado o todos los objetos en el almacén si no se proporcionan parámetros.
- {{domxref("IDBObjectStore.index()")}}
  - : Abre un índice de este almacén de objetos después del cual puede, por ejemplo, usarse para devolver una secuencia de registros ordenados por ese índice usando un cursor.
- {{domxref("IDBObjectStore.openCursor()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, devuelve un nuevo objeto {{domxref("IDBCursorWithValue")}}. Se utiliza para iterar a través de un almacén de objetos por clave principal con un cursor.
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, devuelve un nuevo {{domxref("IDBCursor")}}. Se utiliza para iterar a través de un almacén de objetos con una clave.
- {{domxref("IDBObjectStore.put()")}}
  - : Devuelve un objeto {{domxref("IDBRequest")}} y, en un subproceso separado, crea un [clon estructurado](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) de `value`, y almacena el valor clonado en el almacén de objetos. Esto es para actualizar los registros existentes en un almacén de objetos cuando el modo de transacción es `readwrite`.

## Ejemplo

Este ejemplo muestra una variedad de usos diferentes de los almacenes de objetos, desde actualizar la estructura de datos con {{domxref("IDBObjectStore.createIndex")}} dentro de una función `onupgradeneeded`, hasta agregar un nuevo elemento a nuestro almacén de objetos con {{domxref("IDBObjectStore.add")}}. Para ver un ejemplo funcional completo, consulte nuestra aplicación [Notificaciones de tareas](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Abramos nuestra base de datos
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // Almacenar el resultado de abrir la base de datos en db.
  db = DBOpenRequest.result;
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

  // Crear un objectStore para esta base de datos

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

// Crear un nuevo elemento para agregar al almacen de objetos
const newItem = [
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

// abra una transacción de base de datos de lectura/escritura,
// lista para agregar los datos
const transaction = db.transaction(["toDoList"], "readwrite");

// informe sobre el éxito de la transacción completa, cuando todo esté hecho
transaction.oncomplete = (event) => {
  note.innerHTML += "<li>Transaction completed.</li>";
};

transaction.onerror = (event) => {
  note.innerHTML +=
    "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
};

// crear un almacén de objetos en la transacción
const objectStore = transaction.objectStore("toDoList");
// haga una solicitud para agregar nuestro objeto newItem al almacén de objetos
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Request successful .</li>";
};
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
