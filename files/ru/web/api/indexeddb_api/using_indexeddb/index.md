---
title: Использование IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB — это способ постоянного хранения данных внутри браузера. Поскольку он позволяет создавать веб-приложения с широкими возможностями выполнения запросов независимо от доступности сети, приложения могут работать как в сети, так и в автономном режиме.

## Об этом документе

В этом руководстве рассказывается, как использовать асинхронный API IndexedDB. Если вы не знакомы с IndexedDB, вам следует сначала прочитать статью о [характеристиках и терминологии IndexedDB](/ru/docs/Web/API/IndexedDB_API/Basic_Terminology).

Справочную документацию можно найти в статье [IndexedDB API](/ru/docs/Web/API/IndexedDB_API) и её подразделах. В этой статье описаны типы объектов, используемых IndexedDB, а также методы асинхронного API (синхронный API был удалён из спецификации).

## Типичная схема работы с базой

Обычная последовательность шагов при работе с IndexedDB :

1. Открыть базу данных.
2. Создать хранилище объектов в базе данных, над которой будут выполняться наши операции.
3. Запустить транзакцию и выдать запрос на выполнение какой-либо операции с базой данных, например, добавление или извлечение данных.
4. Ждать завершения операции, обрабатывая событие DOM, на которое должен быть установлен наш обработчик.
5. Сделать что-то с результатами (которые могут быть найдены в возвращаемом по нашему запросу объекте ).

Теперь, получив общее представление, переходим к более конкретным деталям.

## Создание и структурирование хранилища

Так как спецификация пока ещё находится в процессе разработки, то текущие реализации IndexedDB отличаются у различных браузеров и могут содержать имена объектов, включающие в себя префиксы браузеров. Однако, как только стандарт будет принят, префиксы будут удалены. К настоящему моменту префиксы уже удалены в реализациях IndexedDB в Internet Explorer 10, Firefox 16 и Chrome 24. Браузеры, построенные на базе Gecko пока ещё используют префикс `moz,` а браузеры на базе движка `webkit` используют префикс `webkit.`

### Использование экспериментальной версии IndexedDB

Для того, чтобы протестировать ваше веб-приложение на браузерах, которые пока ещё не отказались от префикса, можно воспользоваться следующим кодом:

```js
// проверяем существования префикса.
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// НЕ ИСПОЛЬЗУЙТЕ "var indexedDB = ..." вне функции.
// также могут отличаться и window.IDB* objects: Transaction, KeyRange и тд
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla никогда не создавала префиксов для объектов, поэтому window.mozIDB* не требуется проверять)
```

Имейте в виду, что реализации, в которых всё ещё используются префиксы, могут содержать ошибки, быть неполными или следовать устаревшей спецификации. Поэтому их не рекомендуется использовать в ваших рабочих проектах. Предпочтительнее отказаться от таких браузеров, чем получать от них ошибки:

```js
if (!window.indexedDB) {
  window.alert(
    "Ваш браузер не поддерживает стабильную версию IndexedDB. Такие-то функции будут недоступны",
  );
}
```

### Открытие базы данных

Как-то так:

```js
// Открываем базу данных MyTestDatabase
var request = window.indexedDB.open("MyTestDatabase", 3);
```

Видите? Открытие базы данных, подобно любым другим операциям, запускается запросом.

На самом деле запрос открытия базы данных не приводит к немедленному открытию базы или запуску транзакции. Вызов функции `open()` вернёт объект [`IDBOpenDBRequest`](/ru/docs/Web/API/IDBOpenDBRequest) , содержащий результат (если успешно) или ошибку, которую вы можете обработать как событие. Большинство других асинхронных функций IndexedDB делает то же самое - возвращает объект [`IDBRequest`](/ru/docs/Web/API/IDBRequest) с результатом или ошибкой. Результат функции open всегда возвращает экземпляр объекта `IDBDatabase.`

Второй параметр метода open - это версия базы данных. Версия определяет схему базы данных - хранилище объектов и их структуру . Если база данных ещё не существует, то она создаётся операцией `open,` затем срабатывает триггер события `onupgradeneeded` и после этого ваш обработчик этого события создаёт схему базы данных. Если же база данных уже существует, а вы указываете новый номер версии, то сразу же срабатывает триггер события `onupgradeneeded,` позволяя вам обновить схему базы данных в обработчике. Подробнее об этом см. в [Обновление версии базы данных](#updating_the_version_of_the_database) ниже и на странице {{ domxref("IDBFactory.open") }} справочника

> [!WARNING]
> Версия базы данных имеет внутреннее представление `unsigned long long` number (длинное длинное целое без знака), то есть может принимать очень большие целые значения. Имейте в виду также, что нет смысла использовать в качестве версии базы данных значение с плавающей точкой (float), потому что оно будет сконвертировано в ближайшее меньшее целое. В результате неожиданно может не запуститься транзакция или сработать триггер события `upgradeneeded`. Например, не используйте значение 2.4 как версию базы данных:
>
> ```js
> var request = indexedDB.open("MyTestDatabase", 2.4); // не делайте так, потому что версия будет округлена до 2
> ```

#### Установка обработчиков

Первое, что понадобится сделать практически со всеми запросами, которые вы создаёте - это добавить обработчики событий успеха и ошибки:

```js
request.onerror = function (event) {
  // Сделать что-то при ошибке request.errorCode!
};
request.onsuccess = function (event) {
  // Выполнить какой-то код если запрос успешный request.result!
};
```

Какая из двух функций - `onsuccess()` или `onerror()` - должна быть вызвана? Если всё в порядке - то инициируется событие успеха (это событие DOM, свойство type которого выставлено в `"success"`) с `request` в качестве `target`. Это вызывает запуск функции `onsuccess()` объекта `request` с событием успеха в качестве аргумента. В противном случае, если возникают какие-то проблемы, то происходит событие ошибки (то есть событие DOM, свойство `type` которого установлено в `"error"`) . Это приводит к запуску функции `onerror()` с событием ошибки в качестве аргумента.

IndexedDB API разработан так, чтобы минимизировать необходимость обработки ошибок, поэтому скорее всего вы не встретите много событий ошибки запроса (по крайней мере если вы будете использовать этот API!). Однако при открытии базы данных есть несколько общих условий, которые генерируют события ошибок. Наиболее вероятной проблемой является запрет вашему веб-приложению на создание базы данных, установленный пользователем в браузере. Одной из основных целей разработки IndexedDB - это обеспечение возможности сохранения больших объёмов данных для использования офлайн. (Чтобы узнать, сколько памяти вы можете использовать в разных браузерах, обратитесь к [Ограничениям памяти](/ru/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#storage_limits)).

Конечно же, браузеры стремятся не позволить назойливым рекламным сетям или вредоносным сайтам засорять ваш компьютер. Поэтому при первой попытке любого веб-приложения открыть хранилище IndexedDB, браузер запрашивает разрешение пользователя. Пользователь может выбрать - то ли разрешить, то ли запретить доступ. Кроме этого, в приватных режимах браузеров (частный просмотр для Firefox и режим инкогнито для Chrome), IndexedDB полностью запрещена для использования. Так как цель приватных режимов - не оставлять следов, то открытие базы данных невозможно в таких режимах.

А теперь предположим, что пользователь разрешил вашему запросу создать базу данных и состоялось событие успеха, запустившее обработчик события успеха. Что дальше? Так как ваш запрос был сгенерирован с вызовом метода `indexedDB.open()`, то `request.result` является экземпляром объекта `IDBDatabase` и вы определённо захотите сохранить его для будущего использования. Ваш код может выглядеть примерно так:

```js
var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function (event) {
  alert(
    "Почему вы не позволяете моему веб-приложению использовать IndexedDB?!",
  );
};
request.onsuccess = function (event) {
  db = event.target.result;
};
```

#### Обработка ошибок

Как уже упоминалось выше, события ошибки всплывают. Событие ошибки нацелено (в фазе перехвата) на запрос, который сгенерировал ошибку, затем событие всплывает до уровня транзакции и наконец достигает уровня объекта базы данных. Если вы хотите избежать установки отдельных обработчиков на каждый запрос, то вы можете вместо этого установить один единственный обработчик на объект базы данных, например так:

```js
db.onerror = function (event) {
  // все ошибки выводим в alert
  alert("Database error: " + event.target.errorCode);
};
```

Одной из возможных ошибок при открытии базы данных является `VER_ERR`. Она сигнализирует о том, что версия базы данных, сохранённая на диске, _больше_, чем версия, которую вы пытаетесь открыть. Такая ошибка должна быть в обязательном порядке обработана обработчиком ошибок.

### Создание или обновление версии базы данных

Когда вы создаёте новую базу данных или увеличиваете номер версии существующей базы данных (задавая больший номер версии, чем тот номер, который был вами указан при [Opening a database](#opening_a_database)) запускается событие `onupgradeneeded`. В обработчике этого события вы должны создать хранилище объектов, необходимое для этой версии базы данных:

```js
// Это событие появилось только в самых новых браузерах
request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Создаём хранилище объектов для этой базы данных
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

Версия числа без знака с длиной `long long, может быть очень большим.`

> [!WARNING]
> Так же вы не можете использовать float, его значение будет округлено до ближайшего целого, со всеми вытекающими из этого ошибками:
>
> ```js
> var request = indexedDB.open("MyTestDatabase", 2.4); // Будет округлено до 2
> ```

Когда вы увеличиваете номер версии, будет инициировано событие onupgradeneeded. В этот момент БД будет хранить старые объекты. Но для всякого объекта прошлой версии стоит создать новый объект, совместимый с новой версией. Если вам необходимо исправить существующий объект в БД (например, для изменения keyPath), то вы можете удалить объект и создать его вновь с новыми параметрами (помните, что удаление стирает информацию, так что не забывайте сохранять то, что вам нужно).

### Структура базы данных

Now to structure the database. IndexedDB uses object stores rather than tables, and a single database can contain any number of object stores. Whenever a value is stored in an object store, it is associated with a key. There are several different ways that a key can be supplied depending on whether the object store uses a [key path](/ru/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) or a [key generator](/ru/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator).

The following table shows the different ways the keys are supplied.

| Key Path | Key Generator | Description                                                                                                                                                                                                                                                                                                         |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No       | No            | This object store can hold any kind of value, even primitive values like numbers and strings. You must supply a separate key argument whenever you want to add a new value.                                                                                                                                         |
| Yes      | No            | This object store can only hold JavaScript objects. The objects must have a property with the same name as the key path.                                                                                                                                                                                            |
| No       | Yes           | This object store can hold any kind of value. The key is generated for you automatically, or you can supply a separate key argument if you want to use a specific key.                                                                                                                                              |
| Yes      | Yes           | This object store can only hold JavaScript objects. Usually a key is generated and the value of the generated key is stored in the object in a property with the same name as the key path. However, if such a property already exists, the value of that property is used as key rather than generating a new key. |

You can also create indices on any object store, provided the object store holds objects, not primitives. An index lets you look up the values stored in an object store using the value of a property of the stored object, rather than the object's key.

Additionally, indexes have the ability to enforce simple constraints on the stored data. By setting the unique flag when creating the index, the index ensures that no two objects are stored with both having the same value for the index's key path. So, for example, if you have an object store which holds a set of people, and you want to ensure that no two people have the same email address, you can use an index with the unique flag set to enforce this.

That may sound confusing, but this simple example should illustrate the concepts:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
  // Handle errors.
};
request.onupgradeneeded = function (event) {
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

We can now retrieve the stored customer objects using their `ssn` from the object store directly, or using their name by using the index. To learn how this is done, see the section on [using an index](#using_an_index).

## Adding and removing data

Before you can do anything with your new database, you need to start a transaction. Transactions come from the database object, and you have to specify which object stores you want the transaction to span. Also, you need to decide if you're going to make changes to the database or if you just need to read from it. Although transactions have three modes (read-only, read/write, and versionchange), you're better off using a read-only transaction when you can, because they can run concurrently

### Adding data to the database

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
transaction.oncomplete = function (event) {
  alert("All done!");
};

transaction.onerror = function (event) {
  // Don't forget to handle errors!
};

var objectStore = transaction.objectStore("customers");
for (var i in customerData) {
  var request = objectStore.add(customerData[i]);
  request.onsuccess = function (event) {
    // event.target.result == customerData[i].ssn;
  };
}
```

The `result` of a request generated from a call to `add()` is the key of the value that was added. So in this case, it should equal the `ssn` property of the object that was added, since the object store uses the `ssn` property for the key path. Note that the `add()` function requires that no object already be in the database with the same key. If you're trying to modify an existing entry, or you don't care if one exists already, use the `put()` function.

## Removing data from the database

Removing data is very similar:

```js
var request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = function (event) {
  // It's gone!
};
```

## Getting data from the database

Now that the database has some info in it, you can retrieve it in several ways. First, the simple `get()`. You need to provide the key to retrieve the value, like so:

```js
var transaction = db.transaction(["customers"]);
var objectStore = transaction.objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function (event) {
  // Handle errors!
};
request.onsuccess = function (event) {
  // Do something with the request.result!
  alert("Name for SSN 444-44-4444 is " + request.result.name);
};
```

That's a lot of code for a "simple" retrieval. Here's how you can shorten it up a bit, assuming that you handle errors at the database level:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = function (event) {
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

See how this works? Since there's only one object store, you can avoid passing a list of object stores you need in your transaction and just pass the name as a string. Also, you're only reading from the database, so you don't need a `"readwrite"` transaction. Calling `transaction()` with no mode specified gives you a `"readonly"` transaction. Another subtlety here is that you don't actually save the request object to a variable. Since the DOM event has the request as its target you can use the event to get to the `result` property. Easy, right?!

## Using a cursor

Using `get()` requires that you know which key you want to retrieve. If you want to step through all the values in your object store, then you can use a cursor. Here's what it looks like:

```js
var objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
    cursor.continue();
  } else {
    alert("No more entries!");
  }
};
```

The `openCursor()` function takes several arguments. First, you can limit the range of items that are retrieved by using a key range object that we'll get to in a minute. Second, you can specify the direction that you want to iterate. In the above example, we're iterating over all objects in ascending order. The success callback for cursors is a little special. The cursor object itself is the `result` of the request (above we're using the shorthand, so it's `event.target.result`). Then the actual key and value can be found on the `key` and `value` properties of the cursor object. If you want to keep going, then you have to call `continue()` on the cursor. When you've reached the end of the data (or if there were no entries that matched your `openCursor()` request) you still get a success callback, but the `result` property is `undefined`.

One common pattern with cursors is to retrieve all objects in an object store and add them to an array, like this:

```js
var customers = [];

objectStore.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    alert("Got all customers: " + customers);
  }
};
```

> [!WARNING]
> The following function is not part of the IndexedDB standard!

Mozilla has also implemented `getAll()` to handle this case. It isn't part of the IndexedDB standard, so it may disappear in the future. We've included it because we think it's useful. The following code does precisely the same thing as above:

```js
objectStore.getAll().onsuccess = function (event) {
  alert("Got all customers: " + event.target.result);
};
```

There is a performance cost associated with looking at the `value` property of a cursor, because the object is created lazily. When you use `getAll()`, Gecko must create all the objects at once. If you're just interested in looking at each of the keys, for instance, it is much more efficient to use a cursor than to use `getAll()`. If you're trying to get an array of all the objects in an object store, though, use `getAll()`.

### Using an index

Storing customer data using the SSN as a key is logical since the SSN uniquely identifies an individual. (Whether this is a good idea for privacy is a different question, outside the scope of this article.) If you need to look up a customer by name, however, you'll need to iterate over every SSN in the database until you find the right one. Searching in this fashion would be very slow, so instead you can use an index.

```js
var index = objectStore.index("name");
index.get("Donna").onsuccess = function (event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};
```

The "name" cursor isn't unique, so there could be more than one entry with the `name` set to `"Donna"`. In that case you always get the one with the lowest key value.

If you need to access all the entries with a given `name` you can use a cursor. You can open two different types of cursors on indexes. A normal cursor maps the index property to the object in the object store. A key cursor maps the index property to the key used to store the object in the object store. The differences are illustrated here:

```js
index.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the whole object.
    alert(
      "Name: " +
        cursor.key +
        ", SSN: " +
        cursor.value.ssn +
        ", email: " +
        cursor.value.email,
    );
    cursor.continue();
  }
};

index.openKeyCursor().onsuccess = function (event) {
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

index.openCursor(boundKeyRange).onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the matches.
    cursor.continue();
  }
};
```

Sometimes you may want to iterate in descending order rather than in ascending order (the default direction for all cursors). Switching direction is accomplished by passing `prev` to the `openCursor()` function:

```js
objectStore.openCursor(null, IDBCursor.prev).onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Since the "name" index isn't unique, there might be multiple entries where `name` is the same. Note that such a situation cannot occur with object stores since the key must always be unique. If you wish to filter out duplicates during cursor iteration over indexes, you can pass `nextunique` (or `prevunique` if you're going backwards) as the direction parameter. When `nextunique` or `prevunique` is used, the entry with the lowest key is always the one returned.

```js
index.openKeyCursor(null, IDBCursor.nextunique).onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

## Version changes while a web app is open in another tab

When your web app changes in such a way that a version change is required for your database, you need to consider what happens if the user has the old version of your app open in one tab and then loads the new version of your app in another. When you call `open()` with a greater version than the actual version of the database, all other open databases must explicitly acknowledge the request before you can start making changes to the database. Here's how it works:

```js
var openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = function (event) {
  // If some other tab is loaded with the database, then it needs to be closed
  // before we can proceed.
  alert("Please close all other tabs with this site open!");
};

openReq.onupgradeneeded = function (event) {
  // All other databases have been closed. Set everything up.
  db.createObjectStore(/* ... */);
  useDatabase(db);
};

openReq.onsuccess = function (event) {
  var db = event.target.result;
  useDatabase(db);
  return;
};

function useDatabase(db) {
  // Make sure to add a handler to be notified if another page requests a version
  // change. We must close the database. This allows the other page to upgrade the database.
  // If you don't do this then the upgrade won't happen until the user close the tab.
  db.onversionchange = function (event) {
    db.close();
    alert("A new version of this page is ready. Please reload!");
  };

  // Do stuff with the database.
}
```

## Security

IndexedDB uses the same-origin principle, which means that it ties the store to the origin of the site that creates it (typically, this is the site domain or subdomain), so it cannot be accessed by any other origin.

Third party window content (e.g. {{htmlelement("iframe")}} content) cannot access IndexedDB if the browser is set to [never accept third party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (see [Firefox bug 1147821](https://bugzil.la/1147821)).

## Warning About Browser Shutdown

When the browser shuts down (because the user chose the Quit or Exit option), the disk containing the database is removed unexpectedly, or permissions are lost to the database store, the following things happen:

1. Each transaction on every affected database (or all open databases, in the case of browser shutdown) is aborted with an `AbortError`. The effect is the same as if {{domxref("IDBTransaction.abort()")}} is called on each transaction.
2. Once all of the transactions have completed, the database connection is closed.
3. Finally, the {{domxref("IDBDatabase")}} object representing the database connection receives a {{domxref("IDBDatabase/close_event", "close")}} event. You can use the {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}} event handler to listen for these events, so that you know when a database is unexpectedly closed.

The behavior described above is new, and is only available as of the following browser releases: Firefox 50, Google Chrome 31 (approximately).

Prior to these browser versions, the transactions are aborted silently, and no {{domxref("IDBDatabase/close_event", "close")}} event is fired, so there is no way to detect an unexpected database closure.

Since the user can exit the browser at any time, this means that you cannot rely upon any particular transaction to complete, and on older browsers, you don't even get told when they don't complete. There are several implications of this behavior.

First, you should take care to always leave your database in a consistent state at the end of every transaction. For example, suppose that you are using IndexedDB to store a list of items that you allow the user to edit. You save the list after the edit by clearing the object store and then writing out the new list. If you clear the object store in one transaction and write the new list in another transaction, there is a danger that the browser will close after the clear but before the write, leaving you with an empty database. To avoid this, you should combine the clear and the write into a single transaction.

Second, you should never tie database transactions to unload events. If the unload event is triggered by the browser closing, any transactions created in the unload event handler will never complete. An intuitive approach to maintaining some information across browser sessions is to read it from the database when the browser (or a particular page) is opened, update it as the user interacts with the browser, and then save it to the database when the browser (or page) closes. However, this will not work. The database transactions will be created in the unload event handler, but because they are asynchronous they will be aborted before they can execute.

In fact, there is no way to guarantee that IndexedDB transactions will complete, even with normal browser shutdown. See [Firefox bug 870645](https://bugzil.la/870645). As a workaround for this normal shutdown notification, you might track your transactions and add a `beforeunload` event to warn the user if any transactions have not yet completed at the time of unloading.

At least with the addition of the abort notifications and {{domxref("IDBDatabase.close_event", "IDBDatabase.onclose")}}, you can know when this has happened.

## Полный пример использования IndexedDB

У нас есть полный пример использования IndexedDB API. В примере IndexedDB используется для хранения и получения публикаций.

- [Запустить пример](https://mdn.github.io/dom-examples/indexeddb-api/index.html)
- [Исходный код](https://github.com/mdn/dom-examples/tree/main/indexeddb-api)

## Смотрите также

### Справочники

- [IndexedDB API Reference](/ru/docs/Web/API/IndexedDB_API)
- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- IndexedDB [interface files](https://searchfox.org/mozilla-central/search?q=dom%2FindexedDB%2F.*%5C.idl&path=&case=false&regexp=true) in the Firefox source code

### Учебники и руководства

- [Databinding UI Elements with IndexedDB (2012)](https://web.dev/articles/indexeddb-uidatabinding)
- [IndexedDB — The Store in Your Browser](<https://docs.microsoft.com/previous-versions/msdn10/gg679063(v=msdn.10)>)

### Библиотеки

- [localForage](https://localforage.github.io/localForage/): A Polyfill providing a simple name:value syntax for client-side data storage, which uses IndexedDB in the background, but falls back to Web SQL (deprecated) and then localStorage in browsers that don't support IndexedDB.
- [Dexie.js](https://dexie.org/): A wrapper for IndexedDB that allows much faster code development via nice, simple syntax.
- [JsStore](https://jsstore.net/): A simple and advanced IndexedDB wrapper having SQL like syntax.
- [MiniMongo](https://github.com/mWater/minimongo): A client-side in-memory MongoDB backed by localstorage with server sync over http. MiniMongo is used by MeteorJS.
- [PouchDB](https://pouchdb.com): A client-side implementation of CouchDB in the browser using IndexedDB
- [IDB](https://github.com/jakearchibald/idb): A tiny library that mostly mirrors the IndexedDB API but with small usability improvements.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): A super-simple-small (\~600B) promise-based keyval store implemented with IndexedDB
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Tiny (\~1.3kB) TypeScript facade with promise-based API and automatic migrations.
- [RxDB](https://rxdb.info/): A NoSQL client side database that can be used on top of IndexedDB. Supports indexes, compression and replication. Also adds cross tab functionality and observability to IndexedDB.
