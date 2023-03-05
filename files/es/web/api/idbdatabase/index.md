---
title: IDBDatabase
slug: Web/API/IDBDatabase
---

{{APIRef("IndexedDB")}}

The **`IDBDatabase`** interface of the IndexedDB API provides a [connection to a database](/es/docs/IndexedDB#database_connection); you can use an `IDBDatabase` object to open a [transaction](/es/docs/IndexedDB#gloss_transaction) on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database.

{{AvailableInWorkers}}

> **Nota:** Everything you do in IndexedDB always happens in the context of a [transaction](/es/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_transaction), representing interactions with data in the database. All objects in IndexedDB — including object stores, indexes, and cursors — are tied to a particular transaction. Thus, you cannot execute commands, access data, or open anything outside of a transaction.

## Methods

Inherits from: [EventTarget](/es/docs/DOM/EventTarget)

- {{domxref("IDBDatabase.close()")}}
  - : Returns immediately and closes the connection to a database in a separate thread.
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : Creates and returns a new object store or index.
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : Destroys the object store with the given name in the connected database, along with any indexes that reference it.
- {{domxref("IDBDatabase.transaction()")}}
  - : Immediately returns a transaction object ({{domxref("IDBTransaction")}}) containing the {{domxref("IDBTransaction.objectStore")}} method, which you can use to access your object store. Runs in a separate thread.

## Properties

- {{domxref("IDBDatabase.name")}} {{readonlyInline}}
  - : A {{ domxref("DOMString") }} that contains the name of the connected database.
- {{domxref("IDBDatabase.version")}} {{readonlyInline}}
  - : A [64-bit integer](</es/docs/NSPR_API_Reference/Long_Long_(64-bit)_Integers>) that contains the version of the connected database. When a database is first created, this attribute is an empty string.
- {{domxref("IDBDatabase.objectStoreNames")}} {{readonlyInline}}
  - : A {{ domxref("DOMStringList") }} that contains a list of the names of the [object stores](/es/docs/IndexedDB#gloss_object_store) currently in the connected database.

### Event handlers

- {{domxref("IDBDatabase.onabort")}}
  - : Fires when access of the database is aborted.
- {{domxref("IDBDatabase.onclose")}}
  - : Fires when the [`close`](/es/docs/Web/Reference/Events/close) event occurs; this happens when the database is unexpectedly closed, such as during application shutdown.
- {{domxref("IDBDatabase.onerror")}}
  - : Fires when access to the database fails.
- {{domxref("IDBDatabase.onversionchange")}}
  - : Fires when a database structure change ({{domxref("IDBOpenDBRequest.onupgradeneeded")}} event or {{domxref("IDBFactory.deleteDatabase()")}} was requested elsewhere (most probably in another window/tab on the same computer). This is different from the version change transaction (see {{domxref("IDBVersionChangeEvent")}}), but it is related.

## Example

In the following code snippet, we open a database asynchronously ({{domxref("IDBFactory")}}), handle success and error cases, and create a new object store in the case that an upgrade is needed ({{ domxref("IDBdatabase") }}). For a complete working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```
// Let us open our database
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);

  // these two event handlers act on the IDBDatabase object, when the database is opened successfully, or not
  DBOpenRequest.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  DBOpenRequest.onsuccess = function(event) {
    note.innerHTML += '<li>Database initialised.</li>';

    // store the result of opening the database in the db variable. This is used a lot later on
    db = DBOpenRequest.result;

    // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
    displayData();
  };

  // This event handles the event whereby a new version of the database needs to be created
  // Either one has not been created before, or a new version number has been submitted via the
  // window.indexedDB.open line above

  DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>Error loading database.</li>';
    };

    // Create an objectStore for this database using IDBDatabase.createObjectStore

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // define what data items the objectStore will contain

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '<li>Object store created.</li>';
  };
```

This next line opens up a transaction on the Database, then opens an object store that we can then manipulate the data inside of.

```js
    var objectStore = db.transaction('toDoList').objectStore('toDoList');
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
