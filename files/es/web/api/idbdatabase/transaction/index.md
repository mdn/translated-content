---
title: IDBDatabase.transaction()
slug: Web/API/IDBDatabase/transaction
---

{{ APIRef("IndexedDB") }}

El método **`transaction()`** _**`[transacción]`**_ de la interfaz {{domxref("IDBDatabase")}} retorna inmediatamente un objeto de transacción ({{domxref("IDBTransaction")}}) que contiene el método {{domxref("IDBTransaction.objectStore")}}, el cual puedes usar para acceder a tu almacén de objetos.

{{AvailableInWorkers}}

## Sintáxis

```js
var transaccion = db.transaction(["toDoList"], "readwrite");
```

### Retorna

Un objeto {{domxref("IDBTransaction")}}.

### Excepciones

Éste método puede invocar una excepción {{domxref("DOMException")}} de alguno de los siguientes tipos:

| Excepción                        | Descripción                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------ |
| [`InvalidStateError`](/es/docs/) | El método `close()` ha sido llamado previamente en esta instancia de {{domxref("IDBDatabase")}}. |
| `NotFoundError`                  | Un almacén de objetos especificado en el parámetro `storeNames` ha sido borrado o removido.      |
| `TypeError`                      | El valor para el parámetro `mode` es inválido.                                                   |
| `InvalidAccessError`             | La función fue llamada con una lista vacía de nombres de almacenes.                              |

## Ejemplo

En este ejemplo abrimos la conexión a una base de datos, luego usamos `transaction()` para abrir una transacción en dicha base de datos. Para un ejemplo completo, vea nuestra aplicación [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
var db;

// Abrimos nuestra base de datos:
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de datos inicializada.</li>";

  // almacenar el resultado de la apertura de la base de datos en la variable db. Esto es bastante usado más abajo:
  db = DBOpenRequest.result;

  // ejecutar la función displayData() para popular la lista de tareas con los datos "to-do" que existen actualmente en la Base de Datos Indizada (IDB):
  displayData();
};

// abrir una transacción lectura/escritura, lista para añadir los datos:
var transaction = db.transaction(["toDoList"], "readwrite");

// reportar cuando haya éxito al abrir la transacción
transaction.oncomplete = function (event) {
  note.innerHTML +=
    "<li>Transacción completa: modificación a la base de datos finalizada.</li>";
};

transaction.onerror = function (event) {
  note.innerHTML +=
    "<li>Transacción no abierta debido a un error. No se permite duplicar ítems.</li>";
};

// después deberías continuar y hacerle algo a esta base de datos a través del almacén de objetos:
var objectStore = transaction.objectStore("toDoList");
// etc.
```

## Parámetros

- storeNames

  - : Son los nombres de los almacenes de objetos e índices que están en el ámbito de la nueva transacción, declarados como un arreglo de cadenas de texto. Especifíca solamente aquellos a los que necesitas acceso.
    Si necesitas acceder a un solo almacén, puedes especificar su nombre como una cadena. Por tanto las siguientes líneas son equivalentes:

    ```
    var transaction = db.transaction(['my-store-name']);
    var transaction = db.transaction('my-store-name');
    ```

    Si necesitas acceder a todos los almacenes de objetos en la base de datos, puedes usar la propiedad {{domxref("IDBDatabase.objectStoreNames")}}:

    ```
    var transaction = db.transaction(db.objectStoreNames);
    ```

    Pasar un arreglo vació como parámetro arrojará una excepción.

- mode

  - : _Opcional_. Los tipos de acceso que pueden desempeñarse en la transacción. Las transacciones son abiertas en uno de tres modos: `readonly [sólo lectura], readwrite [lectura/escritura],` y `readwriteflush [descarga de lectura/escritura]` (no-estándar, sólo para Firefox). El modo `versionchange [cambio de versión]` no puede ser especificado aquí. Si no provees un parámetro, el modo predeterminado será `readonly [sólo lectura]`. Para evitar ralentizar las cosas, no abras una transacción `readwrite [lectura/escritura]` a menos que realmente necesites escribir en la base de datos.

    Si necesitas abrir un almacén de objetos en modo `readwrite` para cambiar los datos, usa lo siguiente:

    ```js
    var transaction = db.transaction("my-store-name", "readwrite");
    ```

    Desde Firefox 40, las transacciones de IndexedDB tienen garantías de durabilidad relajadas para aumentar el rendimiento (ver [Error 1112702 en Firefox](https://bugzil.la/1112702)), lo cual es el mismo comportamiento de otros navegadores que soportan IndexedDB. Es decir, anteriormente en una transacción `readwrite` el evento {{domxref("IDBTransaction.oncomplete")}} era invocado sólo cuando se garantizaba que todos los datos habían sido vaciados al disco duro. En Firefox 40+ el evento `complete` es accionado después de indicársele al Sistema Operativo que escriba los datos al disco pero esta confirmación podría suceder poco antes de que los datos hayan sido verdaderamente escritos en él. Si bien dicho evento puede entonces ser entregado un poco antes de tiempo, de cualquier modo, existe una pequeña probabilidad de que la entera transacción se pierda si el SO se bloquea o si ha ocurrido una pérdida de energía antes de que los datos efectivamente se descarguen al disco duro. Como esas catastróficas circunstancias son más bien raras, la mayoría de los consumidores no deberían preocuparse demasiado.

    > **Nota:** En Firefox, si deseas asegurar la durabilidad por alguna razón (por ejemplo, que estés almacenando datos críticos que no puedan ser recalculados después) puedes forzar una transacción a descargar al disco antes de invocar el evento `complete` creando una transacción que use un modo experimental `readwriteflush` (no-estándar) (ver {{domxref("IDBDatabase.transaction")}}). Esto actualmente es experimental, y puede usarse únicamente si la configuración `dom.indexedDB.experimental` es igual a `true` en `about:config`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Iniciando transacciones: {{domxref("IDBDatabase")}}
- Usando transacciones: {{domxref("IDBTransaction")}}
- Configurar un rango de llaves: {{domxref("IDBKeyRange")}}
- Recuperando y haciendo cambios a tus datos: {{domxref("IDBObjectStore")}}
- Usando cursores: {{domxref("IDBCursor")}}
- Ejemplo de referencia: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ver ejemplo en vivo](https://mdn.github.io/dom-examples/to-do-notifications/)).
