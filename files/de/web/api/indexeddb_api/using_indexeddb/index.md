---
title: Verwendung von IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
translation_of: Web/API/IndexedDB_API/Using_IndexedDB
original_slug: Web/API/IndexedDB_API/IndexedDB_verwenden
---
Mit IndexedDB lassen sich Daten innerhalb des Browsers eines Benutzers permanent abzulegen. Es können so Webanwendungen mit funktionsreichen Abfragemöglichkeiten in Anwendungen erstellt werden, die sowohl online als auch offline funktionieren können, da keine Netzwerkfunktionalitäten benötigt werden.

## Über dieses Dokument

Dieses Tutorial bespricht die Verwendung der asynchronen API von IndexedDB. Wenn Sie nicht mit IndexedDB vertraut sind, sollten Sie zuerst den Artikel [Grundkonzepte](/de/docs/IndexedDB/Grundkonzepte_hinter_IndexedDB "Grundkonzepte") lesen.

Eine Referenzdokumentation zur IndexedDB-API finden Sie im Artikel [IndexedDB](/de/docs/IndexedDB "IndexedDB") und dessen Unterseiten, welche die Typen und Objekten dokumentieren, die von IndexedDB verwendet werden, ebenso wie die Methoden von sowohl synchronen als auch asynchronen APIs.

## Grundschema

Das von IndexedDB unterstützte Grundschema sieht folgendermaßen aus:

1. Öffne eine Datenbank und starte eine Transaktion.
2. Erzeuge einen Objektspeicher.
3. Fordere die Ausführung von Datenbankoperationen an, wie das Hinzufügen und Auslesen von Daten.
4. Warte auf die richtige Art von DOM-Ereignis, das auftritt, wenn die Operation beendet ist.
5. Verarbeite die Ergebnisse? (, welche im Anforderungsobjekt gefunden werden können).

Mit dem Wissen über diese Grundkonzepte können wir uns nun konkreteren Dingen zuwenden.

## Erzeugung und Strukturierung des Speichers

Weil sich die Spezifizierung noch in der Entwicklung befindet, verstecken sich aktuelle Implementierungen von IndexedDB unter Browserpräfixen. Bis sich die Spezifizierung verfestigt, könne Browserhersteller unterschiedliche Implementierungen der Standard-IndexedDB-API haben. Aber sobald Konsens auf dem Standard herrscht, implementieren die Hersteller ihn ohne Markierung durch Präfixe. Tatsächlich ist in manchen Implementierungen der Präfix entfernt: Internet Explorer 10, Firefox 16, Chrome 24. Wenn auf Gecko basierende Browser einen Präfix verwenden, dann verwenden sie den Präfix `moz`, während auf WebKit basierende Browser den Präfix `webkit` verwenden.

### Verwendung einer experimentellen Version von IndexedDB

Für den Fall, dass Sie Ihren Code in Browsern verwenden wollen, die noch Präfixe verwenden, können Sie folgenden Code benutzen:

```js
// In der folgenden Zeile sollten Sie die Präfixe einfügen, die Sie testen wollen.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// Verwenden Sie "var indexedDB = ..." NICHT außerhalb einer Funktion.
// Ferner benötigen Sie evtl. Referenzen zu einigen window.IDB* Objekten:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla hat diese Objekte nie mit Präfixen versehen, also brauchen wir kein window.mozIDB*)
```

Beachten Sie, dass Implementierungen, die Präfixe verwenden, fehlerhaft oder unvollständig sein können oder einer alten Version der Spezifizierung folgen können. Deshalb ist es nicht empfohlen, sie im Produktivsystem zu verwenden. In manchen Fällen kann es sinnvoll sein, lieber einen Browser nicht zu unterstützen als zu behaupten, er würde unterstützt, und dann Fehler einzubüßen:

```js
if (!window.indexedDB) {
    window.alert("Ihr Browser unterstützt keine stabile Version von IndexedDB. Dieses und jenes Feature wird Ihnen nicht zur Verfügung stehen.");
}
```

### Öffnen einer Datenbank

Wir starten den ganzen Prozess folgendermaßen:

```js
// Öffnen unserer Datenbank
var request = window.indexedDB.open("MeineTestdatenbank", 3);
```

Sie sehen, das Öffnen einer Datenbank funktioniert wie jede andere Operation – Sie müssen sie „anfordern“.

Die Anforderung zum Öffnen öffnet nicht sofort die Datenbank und startet auch die Transaktion nicht gleich. Der Aufruf zur `open()` Funktion gibt ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest "IDBOpenDBRequest")-Objekt mit Ergebniswert (Erfolg) oder Fehlerwert zurück, die Sie als Ereignis verarbeiten. Die meisten anderen asynchronen Funktionen in IndexedDB machen das gleiche – sie geben ein [`IDBRequest`](/de/docs/Web/API/IDBRequest "IDBRequest")-Objekt mit Ergebnis oder Fehler zurück. Das Ergebnis für die open-Funktion ist eine Instanz einer `IDBDatabase.`

Der zweite Parameter der open-Methode ist die Version der Datenbank. Die Version der Datenbank bestimmt das Datenbankschema – den Objektspeichern und ihrer Strukturen. Wenn die angeforderte Version nicht existiert (weil die Datenbank neu ist, oder weil die Version aktualisiert wurde), wird das Ereignis `onupgradeneeded` ausgelöst, und es lässt sich eine neue Version der Datenbank im Handler für dieses Ereignis erzeugen. Mehr dazu später im Abschnitt [Aktualisieren der Version der Datenbank](#Erstellen_oder_Updaten_der_Datenbank).

#### Erzeugen von Handlern

Das erste, was Sie mit fast allen Anforderungen machen wollen, die Sie erzeugen, ist das Hinzufügen von Handlern für Erfolge und Fehler:

```js
request.onerror = function(event) {
  // Machen Sie etwas mit request.errorCode!
};
request.onsuccess = function(event) {
  // Machen Sie etwas mit request.result!
};
```

Welche der beiden Funktionen, `onsuccess()` oder `onerror()`, wird aufgerufen? Wenn alles fehlerfrei ablief, wird ein Erfolgsereignis (d.h. ein DOM-Ereignis, dessen `type` Eigenschaft auf `"success"` gesetzt ist) mit `request` als `target` ausgelöst. Sobald es ausgelöst wurde, wird die Funktion `onsuccess()` auf `request` ausgelöst mit dem Erfolgsereignis als Argument. Wenn nicht alles fehlerfrei ablief, wird ein Fehlerereignis (d.h. ein DOM-Ereignis, dessen `type` Eigenschaft auf `"error"` gesetzt ist) auf `request` ausgelöst. Dies löst die Funktion `onerror()` aus mit dem Fehlerereignis als Argument.

Die IndexedDB-API ist so entworfen, dass sie die Notwendigkeit zur Fehlerbehandlung minimiert, also werden Sie wahrscheinlich nicht viele Fehlerereignisse sehen (zumindest nicht nachdem Sie sich an die API gewöhnt haben!). Beim Öffnen von Datenbanken jedoch gibt es ein paar typische Zustände, die Fehlerereignisse erzeugen. Das wahrscheinlichste Problem ist, dass der Benutzer festgelegt hat, den Webapps das Erzeugen von Datenbanken nicht zu erlauben. Eines der Hauptentwurfsziele von IndexedDB ist es, das Speichern von großen Datenmengen zur Offline-Verwendung zu erlauben. (Um mehr darüber zu erfahren, wieviel Speicher jedem Browser zur Verfügung steht, lesen Sie [Storage limits](/de/docs/IndexedDB#Storage_limits "Storage_limits")).

Offensichtlich wollen Browser nicht irgendeinem Werbenetzwerk oder einer böswilligen Website erlauben, Ihren Computer zu verschmutzen, deshalb warnen Browser den Benutzer, wenn eine Webapp zum ersten Mal versucht einen IndexedDB-Speicher zu öffnen. Der Benutzer kann wählen, ob er den Zugriff erlaubt oder verbietet. Außerdem ist IndexedDB komplett deaktiviert im Privaten Modus der Browser (Privater Modus für Firefox und Incognito Modus für Chrome). Der Hauptzweck vom Surfen im Privaten Modus ist es, keine Spuren zu hinterlassen, daher schlägt der Versuch fehl, eine Datenbank in diesem Modus zu öffnen.

Nun nehmen wir an, dass der Benutzer Ihren Anfragen erlaubt hat, eine Datenbank zu erstellen, und Sie haben ein Erfolgsereignis erhalten, um den Erfolgs-Callback auszulösen; was kommt als nächstes? Die Anfrage wurde hier mit einem Aufruf von `indexedDB.open()` erzeugt, also ist `request.result` eine Instanz von `IDBDatabase`, und Sie wollen diese auf jeden Fall für später speichern. Ihr Code könnte etwa so aussehen:

```js
var db;
var request = indexedDB.open("MeineTestdatenbank");
request.onerror = function(event) {
  alert("Warum haben Sie meiner Webapp nicht erlaubt IndexedDB zu verwenden?!");
};
request.onsuccess = function(event) {
  db = request.result;
};
```

#### Fehlerbehandlung

Wie bereits oben erwähnt, werden Error events bei entsprechenden Fehlern ausgelöst und in der Objekthierarachie weiter nach oben gereicht. Solche Fehlerereignisse werden zunächst in der entsprechende Anfrage ausgelöst, die den Fehler verursacht hat. Anschließend werden sie zur Transaktion weitergereicht und schließlich zum Datenbankobjekt. Wenn man nicht für jede Anfrage einen Error-Handler schreiben möchte, kann man der Datenbank einen einzigen Error-Handler hinzufügen:

```js
db.onerror = function(event) {
  // Allgemeine Fehlerbehandlung, die für alle Anfragen an die Datenbank gilt.
  alert("Datenbankfehler: " + event.target.errorCode);
};
```

Einer der häufigsten Fehler, die beim Öffnen der Datenbank auftreten, ist `VER_ERR`. Er zeigt an, dass die Versionsnummer der lokal gespeicherten Datenbank _größer_ als die Versionsnummer ist, die man zu öffnen versucht. Ein solcher Fehler muss immer durch eine Fehlerbehandlung berücksichtigt werden.

### Erstellen oder Updaten der Datenbank

Wenn eine neue Version der Datenbank erstellt wird, wird das `onupgradeneeded` Event ausgelöst. In der Handler-Funktion dieses Events musst du für die Erstellung der Datenbankspeicher, welche für diese Version benötigt wird, sorgen:

```js
// Dieses Event ist lediglich in modernen Browsern verfügbar
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Erstelle ein ObjectStore für diese Datenbank
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

The Versionsnummer der Datenbank ist vom Typ `unsigned long long`, so dass sie eine sehr große Ganzzahl sein kann.

> **Warning:** Das Bedeutet auch, dass sie nicht vom Typ float sein darf, ansonsten wird sie zur nächstkleineren Ganzzahl abgerundet, so dass die Transaktion weder starten kann noch ein `upgradeneeded` ausgelöst wird. Beispielsweise sollte man nicht 2.4 als Versionsnummer verwenden:```js
> var request = indexedDB.open("MeineTestdatenbank", 2.4); // don't do this, as the version will be rounded to 2
>
> ```
>
> ```

Wenn man die Versionsnummer der Datenbank erhöht, wird ein `onupgradeneeded` -Ereignis ausgelöst. In diesem Fall übernimmt die neue Datenbank automatisch die Objectstores von der Vorgängerversion der Datenbank, so dass man diese nicht erneut erzeugen muss. Lediglich neue Objectsores müssen angelegt oder nicht mehr gebrauchte der Vorgängerversion gelöscht werden. Wenn man einen bereits existierenden Objectstore ändern will (beispielsweise den keyPath veränden), ist es allerdings notwendig, den alten Objectstore zu löschen und einen neuen anzulegen. (Beachten Sie, dass dies die im Objectstore gespeicherten Informationen löscht, so dass man sie vorher auslesen und an anderer Stelle sichern sollte, bevor man ein Datenbankupgrade durchführt.)

WebKit unterstützt die aktuelle Version dieser Spezifikation, wie sie in Chrome 23+ ausgeliefert wird, ebenso Opera 17+ und IE10+. Andere und ältere Implementierungen unterstützen nicht die aktuelle Version dieser Spezifikation und stellen damit auch noch nicht die Möglichkeit bereit, auf die Methodensignatur `indexedDB.open(name, version).onupgradeneeded` zugreifen zu könenn. Um ältere Versionen einer Datenbank auf neuer Versionen zu aktualisieren, siehe [IDBDatabase reference article](</en/IndexedDB/IDBDatabase#setVersion()_.0A.0ADeprecated> "https://developer.mozilla.org/en/IndexedDB/IDBDatabase#setVersion()_.0A.0ADeprecated").

### Strukturierung der Datenbank

Im Folgenden wird gezeigt, wie man eine die Daten strukturiert. IndexedDB verwendet Objectstores anstatt Tabellen, wobei eine einzelne Datenbank viele verschiedene Objectsores enthalten kann. Jeglicher Wert im Objectstore ist einem bestimmten Schlüssel (key) zugeordnet. Es werden dabei unterschiedliche Arten von Schlüsseln verarbeitet, abhängig davon, ob der Objectstore einen [key path](/en/IndexedDB#gloss_key_path "https://developer.mozilla.org/en/IndexedDB#gloss_key_path") oder einen [key generator](/en/IndexedDB#gloss_key_generator "en/IndexedDB#gloss key generator") benutzt.

Die folgende Tabelle gibt eine Übersicht über die bereitgestellten Arten von Schlüssseln.

| Key Path | Key Generator | Beschreibung                                                                                                                                                                                                                                                                                                          |
| -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nein     | Nein          | Dieser Objectstore kann Daten beliebigen Typs speichern, inklusive primitiven Typen wie Zahlen und Zeichenketten (Strings). Beim Hinzufügen von Werten muss ein separater Schlüssel angegeben werden.                                                                                                                 |
| Ja       | Nein          | Dieser Objectstore kann nur JavaScript-Objekte speichern. Die Objekte müssen ein Attribut haben, dass wie der key path benannt ist.                                                                                                                                                                                   |
| Nein     | Ja            | Dieser Objectstore kann Daten beliebigen Typs speichern. Beim Hinzufügen von Werten kann ein separater Schlüssel angegeben werden. Fehlt der Schlüssel, so wird er generiert.                                                                                                                                         |
| Ja       | Ja            | Dieser Objectstore kann nur JavaScript-Objekte speichern. In der Regel wird der Schlüssel automatisch generiert und als gleichnamiges Attribut im Objekt gespeichert. Falls es jedoch bereits ein Attribut mit dem Namen gibt, so wird der Schlüssel nicht generiert, sondern der Wert des Attributes wird verwendet. |

You can also create indices on any object store, provided the object store holds objects, not primitives. An index lets you look up the values stored in an object store using the value of a property of the stored object, rather than the object's key.

Additionally, indexes have the ability to enforce simple constraints on the stored data. By setting the unique flag when creating the index, the index ensures that no two objects are stored with both having the same value for the index's key path. So, for example, if you have an object store which holds a set of people, and you want to ensure that no two people have the same email address, you can use an index with the unique flag set to enforce this.

That may sound confusing, but this simple example should illustrate the concepts:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // Handle errors.
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Store values in the newly created objectStore.
  for (var i in customerData) {
    objectStore.add(customerData[i]);
  }
};
```

As mentioned previously, `onupgradeneeded` is the only place where you can alter the structure of the database. In it, you can create and delete object stores and build and remove indices.

Object stores are created with a single call to `createObjectStore()`. The method takes a name of the store, and a parameter object. Even though the parameter object is optional, it is very important, because it lets you define important optional properties and refine the type of object store you want to create. In our case, we've asked for an object store named "customers" and defined a keyPath that is the property that makes an individual object in the store unique. That property in this example is "ssn" since a social security number is guaranteed to be unique. "ssn" must be present on every object that is stored in the objectStore.

We've also asked for an index named "name" that looks at the `name` property of the stored objects. As with `createObjectStore()`, `createIndex()` takes an optional `options` object that refines the type of index that you want to create. Adding objects that don't have a `name` property still succeeds, but the object won't appear in the "name" index.

We can now retrieve the stored customer objects using their `ssn` from the object store directly, or using their name by using the index. To learn how this is done, see the section on [using an index](/en/IndexedDB/Using_IndexedDB#Using_an_index "Using IndexedDB#Using an index").

## Hinzufügen und löschen von Daten

Before you can do anything with your new database, you need to start a transaction. Transactions come from the database object, and you have to specify which object stores you want the transaction to span. Also, you need to decide if you're going to make changes to the database or if you just need to read from it. Although transactions have three modes (read-only, read/write, and versionchange), you're better off using a read-only transaction when you can, because they can run concurrently

### Daten zur Datenbank hinzufügen

If you've just created a database, then you probably want to write to it. Here's what that looks like:

```js
var transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can just write:
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

The `transaction()` function takes two arguments (though one is optional) and returns a transaction object. The first argument is a list of object stores that the transaction will span. You can pass an empty array if you want the transaction to span all object stores, but don't do it because the spec says an empty array should generate an InvalidAccessError. If you don't specify anything for the second argument, you get a read-only transaction. Since you want to write to it here you need to pass the `"readwrite"` flag.

Now that you have a transaction you need to understand its lifetime. Transactions are tied very closely to the event loop. If you make a transaction and return to the event loop without using it then the transaction will become inactive. The only way to keep the transaction active is to make a request on it. When the request is finished you'll get a DOM event and, assuming that the request succeeded, you'll have another opportunity to extend the transaction during that callback. If you return to the event loop without extending the transaction then it will become inactive, and so on. As long as there are pending requests the transaction remains active. Transaction lifetimes are really very simple but it might take a little time to get used to. A few more examples will help, too. If you start seeing `TRANSACTION_INACTIVE_ERR` error codes then you've messed something up.

Transactions can receive DOM events of three different types: `error`, `abort`, and `complete`. We've talked about the way that `error` events bubble, so a transaction receives error events from any requests that are generated from it. A more subtle point here is that the default behavior of an error is to abort the transaction in which it occurred. Unless you handle the error by calling `preventDefault()` on the error event, the entire transaction is rolled back. This design forces you to think about and handle errors, but you can always add a catchall error handler to the database if fine grained error handling is too cumbersome. If you don't handle an error event or if you call `abort()` on the transaction, then the transaction is rolled back and an `abort` event is fired on the transaction. Otherwise, after all pending requests have completed, you'll get a `complete` event. If you're doing lots of database operations, then tracking the transaction rather than individual requests can certainly aide your sanity.

Now that you have a transaction, you'll need to get the object store from it. Transactions only let you have an object store that you specified when creating the transaction. Then you can add all the data you need.

```js
// Do something when all the data is added to the database.
transaction.oncomplete = function(event) {
  alert("All done!");
};

transaction.onerror = function(event) {
  // Don't forget to handle errors!
};

var objectStore = transaction.objectStore("customers");
for (var i in customerData) {
  var request = objectStore.add(customerData[i]);
  request.onsuccess = function(event) {
    // event.target.result == customerData[i].ssn;
  };
}
```

The `result` of a request generated from a call to `add()`is the key of the value that was added. So in this case, it should equal the `ssn` property of the object that was added, since the object store uses the `ssn` property for the key path. Note that the `add()` function requires that no object already be in the database with the same key. If you're trying to modify an existing entry, or you don't care if one exists already, use the `put()` function.

## Daten aus der Datenbank löschen

Löschen von Daten ist recht ähnlich:

```js
var request = db.transaction(["customers"], "readwrite")
                .objectStore("customers")
                .delete("444-44-4444");
request.onsuccess = function(event) {
  // It's gone!
};
```

## Daten aus der Datenbank auslesen

Now that the database has some info in it, you can retrieve it in several ways. First, the simple `get()`. You need to provide the key to retrieve the value, like so:

```js
var transaction = db.transaction(["customers"]);
var objectStore = transaction.objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function(event) {
  // Handle errors!
};
request.onsuccess = function(event) {
  // Do something with the request.result!
  alert("Name for SSN 444-44-4444 is " + request.result.name);
};
```

That's a lot of code for a "simple" retrieval. Here's how you can shorten it up a bit, assuming that you handle errors at the database level:

```js
db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = function(event) {
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

See how this works? Since there's only one object store, you can avoid passing a list of object stores you need in your transaction and just pass the name as a string. Also, you're only reading from the database, so you don't need a `"readwrite"` transaction. Calling `transaction()` with no mode specified gives you a `"readonly"` transaction. Another subtlety here is that you don't actually save the request object to a variable. Since the DOM event has the request as its target you can use the event to get to the `result` property. Easy, right?!

## Benutzung eines Cursors

Using `get()` requires that you know which key you want to retrieve. If you want to step through all the values in your object store, then you can use a cursor. Here's what it looks like:

```js
var objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
    cursor.continue();
  }
  else {
    alert("No more entries!");
  }
};
```

The`openCursor()` function takes several arguments. First, you can limit the range of items that are retrieved by using a key range object that we'll get to in a minute. Second, you can specify the direction that you want to iterate. In the above example, we're iterating over all objects in ascending order. The success callback for cursors is a little special. The cursor object itself is the `result` of the request (above we're using the shorthand, so it's `event.target.result`). Then the actual key and value can be found on the `key` and `value` properties of the cursor object. If you want to keep going, then you have to call `continue()` on the cursor. When you've reached the end of the data (or if there were no entries that matched your `openCursor()` request) you still get a success callback, but the `result` property is `undefined`.

One common pattern with cursors is to retrieve all objects in an object store and add them to an array, like this:

```js
var customers = [];

objectStore.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  }
  else {
    alert("Got all customers: " + customers);
  }
};
```

> **Warning:** **Warnung:** Die folgende Funktion ist nicht Teil des IndexedDB Standards.

Mozilla has also implemented `getAll()` to handle this case. It isn't part of the IndexedDB standard, so it may disappear in the future. We've included it because we think it's useful. The following code does precisely the same thing as above:

```js
objectStore.getAll().onsuccess = function(event) {
  alert("Got all customers: " + event.target.result);
};
```

There is a performance cost associated with looking at the `value` property of a cursor, because the object is created lazily. When you use `getAll()`, Gecko must create all the objects at once. If you're just interested in looking at each of the keys, for instance, it is much more efficient to use a cursor than to use `getAll()`. If you're trying to get an array of all the objects in an object store, though, use `getAll()`.

### Benutzung eines Index

Storing customer data using the SSN as a key is logical since the SSN uniquely identifies an individual. (Whether this is a good idea for privacy is a different question, outside the scope of this article.) If you need to look up a customer by name, however, you'll need to iterate over every SSN in the database until you find the right one. Searching in this fashion would be very slow, so instead you can use an index.

```js
var index = objectStore.index("name");
index.get("Donna").onsuccess = function(event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};
```

The "name" cursor isn't unique, so there could be more than one entry with the `name` set to `"Donna"`. In that case you always get the one with the lowest key value.

If you need to access all the entries with a given `name` you can use a cursor. You can open two different types of cursors on indexes. A normal cursor maps the index property to the object in the object store. A key cursor maps the index property to the key used to store the object in the object store. The differences are illustrated here:

```js
index.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the whole object.
    alert("Name: " + cursor.key + ", SSN: " + cursor.value.ssn + ", email: " + cursor.value.email);
    cursor.continue();
  }
};

index.openKeyCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the SSN.
    // No way to directly get the rest of the stored object.
    alert("Name: " + cursor.key + ", SSN: " + cursor.value);
    cursor.continue();
  }
};
```

### Specifying the range and direction of cursors

If you would like to limit the range of values you see in a cursor, you can use a key range object and pass it as the first argument to `openCursor()` or `openKeyCursor()`. You can make a key range that only allows a single key, or one the has a lower or upper bound, or one that has both a lower and upper bound. The bound may be "closed" (i.e., the key range includes the given value) or "open" (i.e., the key range does not include the given value). Here's how it works:

```js
// Only match "Donna"
var singleKeyRange = IDBKeyRange.only("Donna");

// Match anything past "Bill", including "Bill"
var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// Match anything past "Bill", but don't include "Bill"
var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// Match anything up to, but not including, "Donna"
var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

//Match anything between "Bill" and "Donna", but not including "Donna"
var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

index.openCursor(boundKeyRange).onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the matches.
    cursor.continue();
  }
};
```

Sometimes you may want to iterate in descending order rather than in ascending order (the default direction for all cursors). Switching direction is accomplished by passing `prev` to the `openCursor()` function:

```js
objectStore.openCursor(null, IDBCursor.prev).onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Since the "name" index isn't unique, there might be multiple entries where `name` is the same. Note that such a situation cannot occur with object stores since the key must always be unique. If you wish to filter out duplicates during cursor iteration over indexes, you can pass `nextunique` (or `prevunique` if you're going backwards) as the direction parameter. When `nextunique` or `prevunique` is used, the entry with the lowest key is always the one returned.

```js
index.openKeyCursor(null, IDBCursor.nextunique).onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

## Versionsänderung während eine Webapplikation in einem anderen Tab geöffnet ist

When your web app changes in such a way that a version change is required for your database, you need to consider what happens if the user has the old version of your app open in one tab and then loads the new version of your app in another. When you call `open()` with a greater version than the actual version of the database, all other open databases must explicitly acknowledge the request before you can start making changes to the database. Here's how it works:

```js
var openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = function(event) {
  // If some other tab is loaded with the database, then it needs to be closed
  // before we can proceed.
  alert("Please close all other tabs with this site open!");
};

openReq.onupgradeneeded = function(event) {
  // All other databases have been closed. Set everything up.
  db.createObjectStore(/* ... */);
  useDatabase(db);
}

openReq.onsuccess = function(event) {
  var db = event.target.result;
  useDatabase(db);
  return;
}

function useDatabase(db) {
  // Make sure to add a handler to be notified if another page requests a version
  // change. We must close the database. This allows the other page to upgrade the database.
  // If you don't do this then the upgrade won't happen until the user close the tab.
  db.onversionchange = function(event) {
    db.close();
    alert("A new version of this page is ready. Please reload!");
  };

  // Do stuff with the database.
}
```

## Sicherheit

IndexedDB uses the same-origin principle, which means that it ties the store to the origin of the site that creates it (typically, this is the site domain or subdomain), so it cannot be accessed by any other origin.

It's important to note that IndexedDB doesn't work for content loaded into a frame from another site (either {{ HTMLElement("frame") }} or {{ HTMLElement("iframe") }}. This is a security measure. Details as to why this matters are forthcoming. See {{ bug(595307) }}.

## Warnung über die Schließung des Browsers

When the browser shuts down (e.g., when the user selects Exit or clicks the Close button), any pending IndexedDB transactions are (silently) aborted -- they will not complete, and they will not trigger the error handler. Since the user can exit the browser at any time, this means that you cannot rely upon any particular transaction to complete or to know that it did not complete. There are several implications of this behavior.

First, you should take care to always leave your database in a consistent state at the end of every transaction. For example, suppose that you are using IndexedDB to store a list of items that you allow the user to edit. You save the list after the edit by clearing the object store and then writing out the new list. If you clear the object store in one transaction and write the new list in another transaction, there is a danger that the browser will close after the clear but before the write, leaving you with an empty database. To avoid this, you should combine the clear and the write into a single transaction.

Second, you should never tie database transactions to unload events. If the unload event is triggered by the browser closing, any transactions created in the unload event handler will never complete. An intuitive approach to maintaining some information across browser sessions is to read it from the database when the browser (or a particular page) is opened, update it as the user interacts with the browser, and then save it to the database when the browser (or page) closes. However, this will not work. The database transactions will be created in the unload event handler, but because they are asynchronous they will be aborted before they can execute.

In fact, there is no way to guarantee that IndexedDB transactions will complete, even with normal browser shutdown. See {{ bug(870645) }}.

## Vollständiges IndexedDB Beispiel

### HTML Content

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <h1>IndexedDB Demo: storing blobs, e-publication example</h1>
    <div class="note">
      <p>
        Works and tested with:
      </p>
      <div id="compat">
      </div>
    </div>

    <div id="msg">
    </div>

    <form id="register-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label for="pub-title" class="required">
                Title:
              </label>
            </td>
            <td>
              <input type="text" id="pub-title" name="pub-title" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-biblioid" class="required">
                Bibliographic ID:<br/>
                <span class="note">(ISBN, ISSN, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-biblioid" name="pub-biblioid"/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-year">
                Year:
              </label>
            </td>
            <td>
              <input type="number" id="pub-year" name="pub-year" />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <label for="pub-file">
                File image:
              </label>
            </td>
            <td>
              <input type="file" id="pub-file"/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-file-url">
                Online-file image URL:<br/>
                <span class="note">(same origin URL)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-file-url" name="pub-file-url"/>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="button-pane">
        <input type="button" id="add-button" value="Add Publication" />
        <input type="reset" id="register-form-reset"/>
      </div>
    </form>

    <form id="delete-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label for="pub-biblioid-to-delete">
                Bibliographic ID:<br/>
                <span class="note">(ISBN, ISSN, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-biblioid-to-delete"
                     name="pub-biblioid-to-delete" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="key-to-delete">
                Key:<br/>
                <span class="note">(for example 1, 2, 3, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="key-to-delete"
                     name="key-to-delete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-pane">
        <input type="button" id="delete-button" value="Delete Publication" />
        <input type="button" id="clear-store-button"
               value="Clear the whole store" class="destructive" />
      </div>
    </form>

    <form id="search-form">
      <div class="button-pane">
        <input type="button" id="search-list-button"
               value="List database content" />
      </div>
    </form>

    <div>
      <div id="pub-msg">
      </div>
      <div id="pub-viewer">
      </div>
      <ul id="pub-list">
      </ul>
    </div>
```

### CSS Content

```css
body {
  font-size: 0.8em;
  font-family: Sans-Serif;
}

form {
  background-color: #cccccc;
  border-radius: 0.3em;
  display: inline-block;
  margin-bottom: 0.5em;
  padding: 1em;
}

table {
  border-collapse: collapse;
}

input {
  padding: 0.3em;
  border-color: #cccccc;
  border-radius: 0.3em;
}

.required:after {
  content: "*";
  color: red;
}

.button-pane {
  margin-top: 1em;
}

#pub-viewer {
  float: right;
  width: 48%;
  height: 20em;
  border: solid #d092ff 0.1em;
}
#pub-viewer iframe {
  width: 100%;
  height: 100%;
}

#pub-list {
  width: 46%;
  background-color: #eeeeee;
  border-radius: 0.3em;
}
#pub-list li {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;
}

#msg {
  margin-bottom: 1em;
}

.action-success {
  padding: 0.5em;
  color: #00d21e;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.action-failure {
  padding: 0.5em;
  color: #ff1408;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.note {
  font-size: smaller;
}

.destructive {
  background-color: orange;
}
.destructive:hover {
  background-color: #ff8000;
}
.destructive:active {
  background-color: red;
}
```

### JavaScript Content

```js
(function () {
  var COMPAT_ENVS = [
    ['Firefox', ">= 16.0"],
    ['Google Chrome',
     ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support"]
  ];
  var compat = $('#compat');
  compat.empty();
  compat.append('<ul id="compat-list"></ul>');
  COMPAT_ENVS.forEach(function(val, idx, array) {
    $('#compat-list').append('<li>' + val[0] + ': ' + val[1] + '</li>');
  });

  const DB_NAME = 'mdn-demo-indexeddb-epublications';
  const DB_VERSION = 1; // Use a long long for this value (don't use a float)
  const DB_STORE_NAME = 'publications';

  var db;

  // Used to keep track of which view is displayed to avoid to uselessly reload it
  var current_view_pub_key;

  function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Better use "this" than "req" to get the result to avoid problems with
      // garbage collection.
      // db = req.result;
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

      store.createIndex('biblioid', 'biblioid', { unique: true });
      store.createIndex('title', 'title', { unique: false });
      store.createIndex('year', 'year', { unique: false });
    };
  }

  /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  function clearObjectStore(store_name) {
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.clear();
    req.onsuccess = function(evt) {
      displayActionSuccess("Store cleared");
      displayPubList(store);
    };
    req.onerror = function (evt) {
      console.error("clearObjectStore:", evt.target.errorCode);
      displayActionFailure(this.error);
    };
  }

  function getBlob(key, store, success_callback) {
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var value = evt.target.result;
      if (value)
        success_callback(value.blob);
    };
  }

  /**
   * @param {IDBObjectStore=} store
   */
  function displayPubList(store) {
    console.log("displayPubList");

    if (typeof store == 'undefined')
      store = getObjectStore(DB_STORE_NAME, 'readonly');

    var pub_msg = $('#pub-msg');
    pub_msg.empty();
    var pub_list = $('#pub-list');
    pub_list.empty();
    // Reseting the iframe so that it doesn't display previous content
    newViewerFrame();

    var req;
    req = store.count();
    // Requests are executed in the order in which they were made against the
    // transaction, and their results are returned in the same order.
    // Thus the count text below will be displayed before the actual pub list
    // (not that it is algorithmically important in this case).
    req.onsuccess = function(evt) {
      pub_msg.append('<p>There are <strong>' + evt.target.result +
                     '</strong> record(s) in the object store.</p>');
    };
    req.onerror = function(evt) {
      console.error("add error", this.error);
      displayActionFailure(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function(evt) {
      var cursor = evt.target.result;

      // If the cursor is pointing at something, ask for the data
      if (cursor) {
        console.log("displayPubList cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;
          var list_item = $('<li>' +
                            '[' + cursor.key + '] ' +
                            '(biblioid: ' + value.biblioid + ') ' +
                            value.title +
                            '</li>');
          if (value.year != null)
            list_item.append(' - ' + value.year);

          if (value.hasOwnProperty('blob') &&
              typeof value.blob != 'undefined') {
            var link = $('<a href="' + cursor.key + '">File</a>');
            link.on('click', function() { return false; });
            link.on('mouseenter', function(evt) {
                      setInViewer(evt.target.getAttribute('href')); });
            list_item.append(' / ');
            list_item.append(link);
          } else {
            list_item.append(" / No attached file");
          }
          pub_list.append(list_item);
        };

        // Move on to the next object in store
        cursor.continue();

        // This counter serves only to create distinct ids
        i++;
      } else {
        console.log("No more entries");
      }
    };
  }

  function newViewerFrame() {
    var viewer = $('#pub-viewer');
    viewer.empty();
    var iframe = $('<iframe />');
    viewer.append(iframe);
    return iframe;
  }

  function setInViewer(key) {
    console.log("setInViewer:", arguments);
    key = Number(key);
    if (key == current_view_pub_key)
      return;

    current_view_pub_key = key;

    var store = getObjectStore(DB_STORE_NAME, 'readonly');
    getBlob(key, store, function(blob) {
      console.log("setInViewer blob:", blob);
      var iframe = newViewerFrame();

      // It is not possible to set a direct link to the
      // blob to provide a mean to directly download it.
      if (blob.type == 'text/html') {
        var reader = new FileReader();
        reader.onload = (function(evt) {
          var html = evt.target.result;
          iframe.load(function() {
            $(this).contents().find('html').html(html);
          });
        });
        reader.readAsText(blob);
      } else if (blob.type.indexOf('image/') == 0) {
        iframe.load(function() {
          var img_id = 'image-' + key;
          var img = $('<img id="' + img_id + '"/>');
          $(this).contents().find('body').html(img);
          var obj_url = window.URL.createObjectURL(blob);
          $(this).contents().find('#' + img_id).attr('src', obj_url);
          window.URL.revokeObjectURL(obj_url);
        });
      } else if (blob.type == 'application/pdf') {
        $('*').css('cursor', 'wait');
        var obj_url = window.URL.createObjectURL(blob);
        iframe.load(function() {
          $('*').css('cursor', 'auto');
        });
        iframe.attr('src', obj_url);
        window.URL.revokeObjectURL(obj_url);
      } else {
        iframe.load(function() {
          $(this).contents().find('body').html("No view available");
        });
      }

    });
  }

  /**
   * @param {string} biblioid
   * @param {string} title
   * @param {number} year
   * @param {string} url the URL of the image to download and store in the local
   *   IndexedDB database. The resource behind this URL is subjected to the
   *   "Same origin policy", thus for this method to work, the URL must come from
   *   the same origin than the web site/app this code is deployed on.
   */
  function addPublicationFromUrl(biblioid, title, year, url) {
    console.log("addPublicationFromUrl:", arguments);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // Setting the wanted responseType to "blob"
    // http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
    xhr.responseType = 'blob';
    xhr.onload = function (evt) {
                           if (xhr.status == 200) {
                             console.log("Blob retrieved");
                             var blob = xhr.response;
                             console.log("Blob:", blob);
                             addPublication(biblioid, title, year, blob);
                           } else {
                             console.error("addPublicationFromUrl error:",
                                           xhr.responseText, xhr.status);
                           }
                         };
    xhr.send();

    // We can't use jQuery here because as of jQuery 1.8.3 the new "blob"
    // responseType is not handled.
    // http://bugs.jquery.com/ticket/11461
    // http://bugs.jquery.com/ticket/7248
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   xhrFields: { responseType: 'blob' },
    //   success: function(data, textStatus, jqXHR) {
    //     console.log("Blob retrieved");
    //     console.log("Blob:", data);
    //     // addPublication(biblioid, title, year, data);
    //   },
    //   error: function(jqXHR, textStatus, errorThrown) {
    //     console.error(errorThrown);
    //     displayActionFailure("Error during blob retrieval");
    //   }
    // });
  }

  /**
   * @param {string} biblioid
   * @param {string} title
   * @param {number} year
   * @param {Blob=} blob
   */
  function addPublication(biblioid, title, year, blob) {
    console.log("addPublication arguments:", arguments);
    var obj = { biblioid: biblioid, title: title, year: year };
    if (typeof blob != 'undefined')
      obj.blob = blob;

    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
                             "use Firefox");
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      displayPubList(store);
    };
    req.onerror = function() {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }

  /**
   * @param {string} biblioid
   */
  function deletePublicationFromBib(biblioid) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.index('biblioid');
    req.get(biblioid).onsuccess = function(evt) {
      if (typeof evt.target.result == 'undefined') {
        displayActionFailure("No matching record found");
        return;
      }
      deletePublication(evt.target.result.id, store);
    };
    req.onerror = function (evt) {
      console.error("deletePublicationFromBib:", evt.target.errorCode);
    };
  }

  /**
   * @param {number} key
   * @param {IDBObjectStore=} store
   */
  function deletePublication(key, store) {
    console.log("deletePublication:", arguments);

    if (typeof store == 'undefined')
      store = getObjectStore(DB_STORE_NAME, 'readwrite');

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var record = evt.target.result;
      console.log("record:", record);
      if (typeof record == 'undefined') {
        displayActionFailure("No matching record found");
        return;
      }
      // Warning: The exact same key used for creation needs to be passed for
      // the deletion. If the key was a Number for creation, then it needs to
      // be a Number for deletion.
      req = store.delete(key);
      req.onsuccess = function(evt) {
        console.log("evt:", evt);
        console.log("evt.target:", evt.target);
        console.log("evt.target.result:", evt.target.result);
        console.log("delete successful");
        displayActionSuccess("Deletion successful");
        displayPubList(store);
      };
      req.onerror = function (evt) {
        console.error("deletePublication:", evt.target.errorCode);
      };
    };
    req.onerror = function (evt) {
      console.error("deletePublication:", evt.target.errorCode);
      };
  }

  function displayActionSuccess(msg) {
    msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
    $('#msg').html('<span class="action-success">' + msg + '</span>');
  }
  function displayActionFailure(msg) {
    msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
    $('#msg').html('<span class="action-failure">' + msg + '</span>');
  }
  function resetActionStatus() {
    console.log("resetActionStatus ...");
    $('#msg').empty();
    console.log("resetActionStatus DONE");
  }

  function addEventListeners() {
    console.log("addEventListeners");

    $('#register-form-reset').click(function(evt) {
      resetActionStatus();
    });

    $('#add-button').click(function(evt) {
      console.log("add ...");
      var title = $('#pub-title').val();
      var biblioid = $('#pub-biblioid').val();
      if (!title || !biblioid) {
        displayActionFailure("Required field(s) missing");
        return;
      }
      var year = $('#pub-year').val();
      if (year != '') {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (isNaN(year))  {
          displayActionFailure("Invalid year");
          return;
        }
        year = Number(year);
      } else {
        year = null;
      }

      var file_input = $('#pub-file');
      var selected_file = file_input.get(0).files[0];
      console.log("selected_file:", selected_file);
      // Keeping a reference on how to reset the file input in the UI once we
      // have its value, but instead of doing that we rather use a "reset" type
      // input in the HTML form.
      //file_input.val(null);
      var file_url = $('#pub-file-url').val();
      if (selected_file) {
        addPublication(biblioid, title, year, selected_file);
      } else if (file_url) {
        addPublicationFromUrl(biblioid, title, year, file_url);
      } else {
        addPublication(biblioid, title, year);
      }

    });

    $('#delete-button').click(function(evt) {
      console.log("delete ...");
      var biblioid = $('#pub-biblioid-to-delete').val();
      var key = $('#key-to-delete').val();

      if (biblioid != '') {
        deletePublicationFromBib(biblioid);
      } else if (key != '') {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (key == '' || isNaN(key))  {
          displayActionFailure("Invalid key");
          return;
        }
        key = Number(key);
        deletePublication(key);
      }
    });

    $('#clear-store-button').click(function(evt) {
      clearObjectStore();
    });

    var search_button = $('#search-list-button');
    search_button.click(function(evt) {
      displayPubList();
    });

  }

  openDb();
  addEventListeners();

})(); // Immediately-Invoked Function Expression (IIFE)
```

{{ LiveSampleLink('Full_IndexedDB_example', "Test the online live demo") }}

## Nächster Schritt

If you want to start tinkering with the API, jump in to the [reference documentation](/en/IndexedDB "https://developer.mozilla.org/en/IndexedDB") and checking out the different methods.

## Siehe auch

Reference

- [IndexedDB API Reference](/en/IndexedDB "https://developer.mozilla.org/en/IndexedDB")
- [Indexed Database API Specification](http://www.w3.org/TR/IndexedDB/)
- [Using IndexedDB in chrome](/de/docs/IndexedDB/Using_IndexedDB_in_chrome)

Tutorials

- [A simple TODO list using HTML5 IndexedDB](http://www.html5rocks.com/tutorials/indexeddb/todo/). {{Note("This tutorial is based on an old version of the specification and does not work on up-to-date browsers - it still uses the removed <code>setVersion()</code> method.") }}
- [Databinding UI Elements with IndexedDB](http://www.html5rocks.com/en/tutorials/indexeddb/uidatabinding/)

Related articles

- [IndexedDB — The Store in Your Browser](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)

Firefox

- Mozilla [interface files](https://mxr.mozilla.org/mozilla-central/find?text=&string=dom%2FindexedDB%2F.*%5C.idl&regexp=1 "https://mxr.mozilla.org/mozilla-central/find?text=&string=dom/indexedDB/.*\\.idl®exp=1")
