---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
---

{{APIRef("IndexedDB")}}

The `IDBObjectStore` interface of the [IndexedDB API](/en/IndexedDB) represents an [object store](/en/IndexedDB#gloss_object_store) in a database. Records within an object store are sorted according to their keys. This sorting enables fast insertion, look-up, and ordered retrieval.

## Methods

- {{domxref("IDBObjectStore.add")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) of the `value`, and stores the cloned value in the object store. This is for adding new records to an object store.
- {{domxref("IDBObjectStore.clear")}}
  - : Creates and immediately returns an {{domxref("IDBRequest")}} object, and clears this object store in a separate thread. This is for deleting all current records out of an object store.
- {{domxref("IDBObjectStore.delete")}}
  - : returns an {{domxref("IDBRequest")}} object, and, in a separate thread, deletes the current object store. This is for deleting individual records out of an object store.
- {{domxref("IDBObjectStore.get")}}
  - : returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns the object store selected by the specified key. This is for retrieving specific records from an object store.
- {{domxref("IDBObjectStore.createIndex")}}
  - : Creates a new index during a version upgrade, returning a new {{domxref("IDBIndex")}} object in the connected database.
- {{domxref("IDBObjectStore.deleteIndex")}}
  - : Destroys the specified index in the connected database, used during a version upgrade.
- {{domxref("IDBObjectStore.index")}}
  - : Opens an index from this object store after which it can, for example, be used to return a sequence of records sorted by that index using a cursor.
- {{domxref("IDBObjectStore.put")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) of the `value`, and stores the cloned value in the object store. This is for updating existing records in an object store when the transaction's mode is `readwrite`.
- {{domxref("IDBObjectStore.openCursor")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns a new {{domxref("IDBCursorWithValue")}} object. Used for iterating through an object store by primary key with a cursor.

## Properties

- {{domxref("IDBObjectStore.indexNames")}} {{readonlyInline}}
  - : A list of the names of [indexes](/en/IndexedDB#gloss_index) on objects in this object store.
- {{domxref("IDBObjectStore.keyPath")}} {{readonlyInline}}
  - : The [key path](/en/IndexedDB#gloss_key_path) of this object store. If this attribute is null, the application must provide a key for each modification operation.
- {{domxref("IDBObjectStore.name")}} {{readonlyInline}}
  - : The name of this object store.
- {{domxref("IDBObjectStore.transaction")}} {{readonlyInline}}
  - : The name of the transaction to which this object store belongs.
- {{domxref("IDBObjectStore.autoIncrement")}} {{readonlyInline}}
  - : The value of the auto increment flag for this object store.

## Obsolete methods

- {{domxref("IDBObjectStore.openKeyCursor")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns a new {{domxref("IDBCursorWithValue")}}. Used for iterating through an object store with a key. However, this is now handled by {{domxref("IDBObjectStore.openCursor")}}, if a value is specified.

## Example

This example shows a variety of different uses of ObjectStores, from updating the data structure with {{domxref("IDBObjectStore.createIndex")}} inside an `onupgradeneeded` function, to adding a new item to our object store with {{domxref("IDBObjectStore.add")}}. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Database initialised.</li>";

  // store the result of opening the database in the db variable.
  db = DBOpenRequest.result;
};

// This event handles the event whereby a new version of the database needs to be created
// Either one has not been created before, or a new version number has been submitted via the
// window.indexedDB.open line above
DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function (event) {
    note.innerHTML += "<li>Error loading database.</li>";
  };

  // Create an objectStore for this database

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Object store created.</li>";
};

// Create a new item to add in to the object store
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

// open a read/write db transaction, ready for adding the data
var transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of opening the transaction
transaction.oncomplete = function (event) {
  note.innerHTML += "<li>Transaction opened for task addition.</li>";
};

transaction.onerror = function (event) {
  note.innerHTML +=
    "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
};

// create an object store on the transaction
var objectStore = transaction.objectStore("toDoList");
// add our newItem object to the object store
var objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = function (event) {
  note.innerHTML += "<li>New item added to database.</li>";
};
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
