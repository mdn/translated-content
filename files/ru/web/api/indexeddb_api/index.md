---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB — низкоуровневое API для клиентского хранилища большого объёма структурированных данных, включая файлы/blobs. Эти API используют индексы для обеспечения высоко-производительного поиска данных. Если [DOM Storage](/ru/docs/DOM/Storage) полезен для хранения небольшого количества данных, он менее выгоден для большого числа структурированных данных. IndexedDB предоставляет решение. Это основная страница на MDN, покрывающая IndexedDB — здесь мы предоставляем ссылки к полному списку API и руководствам по использованию, детали поддержки браузерами и некоторые объяснения ключевых концепций.

{{AvailableInWorkers}}

> **Примечание:** IndexedDB API мощные, но могут казаться слишком сложными для простых задач. Если вы предпочитаете простые API, попробуйте библиотеки, такие как [localForage](https://localforage.github.io/localForage/), [dexie.js](http://www.dexie.org/) и [ZangoDB](https://github.com/erikolson186/zangodb), делающие IndexedDB более дружественным.

## Ключевые концепции и использование

IndexedDB транзакционная система базы данных, как SQL-основанная RDBMS. Однако, в отличие от RDBMS, которая использует таблицы с фиксированными колонками, IndexedDB — JavaScript-основанная объектно-ориентированная база данных. IndexedDB позволяет сохранять и возвращать объекты, которые были проиндексированы с **ключом**; любой объект, поддерживаемый [структурированным алгоритмом клонирования](/ru/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) может быть сохранён. Необходимо описать схему базы данных, установить соединение с ней и затем получить и обновить данные за несколько **транзакций**.

- Читайте больше о [Концепции IndexedDB](/ru/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB).
- Изучите асинхронное использование IndexedDB по первоначальным принципам с руководством [Using IndexedDB](/ru/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Найдите рекомендации по разработке, чтобы заставить ваш сайт работать вне сети, на странице [Offline Apps](/en-US/Apps/Build/Offline).

> **Примечание:** Как и большинство решений web-хранения, IndexedDB следует аналогичной [same-origin policy](http://www.w3.org/Security/wiki/Same_Origin_Policy). Поэтому вы имеете доступ к хранилищу данных в пределах одного домена, но не можете получать их с любого другого.

### Синхронность и асинхронность

Выполнение операций использующих IndexedDB происходит асинхронно, т. е. не блокирует приложение. IndexedDB первоначально включал синхронные и асинхронные API. Синхронные API предназначались только для работы с [Web Workers](/ru/docs/Web/Guide/Performance/Using_web_workers), но были удалены из спецификации, потому что было неясно, нужны ли они. Однако, синхронные API могут быть повторно введены, если появится спрос со стороны веб разработчиков.

### Ограничения памяти и критерии освобождения

Существует несколько веб-технологий, которые хранят данные того или иного вида на стороне клиента (т.е. на вашем локальном диске). Под IndexedDB чаще всего подразумевают одно. Процесс, в котором браузер вычисляет сколько места нужно выделить для хранения веб-данных. [Ограничение памяти браузера и критерии освобождения](/ru/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) пытаются объяснить как это работает, по крайней мере в случае с Firefox.

## Интерфейсы

Чтобы получить доступ к базе данных, вызовите метод [`open()`](/ru/docs/Web/API/IDBFactory.open) y атрибута [`indexedDB`](/ru/docs/Web/API/IDBEnvironment.indexedDB) объекта [window](/ru/docs/DOM/window). Этот метод возвращает объект {{domxref("IDBRequest")}} ; асинхронные операции связываются с вызывающим приложением, вызывая события объекта {{domxref("IDBRequest")}} .

### Подключение к базе данных

- {{domxref("IDBEnvironment")}}
  - : Предоставляет доступ к функциям IndexedDB. Реализовано объектами {{domxref("window")}} и {{domxref("worker")}}.
- {{domxref("IDBFactory")}}
  - : Предоставляет доступ к базе данных. Этот интерфейс представлен глобальным объектом [`indexedDB`](/ru/docs/Web/API/IDBEnvironment.indexedDB). Он является точкой входа для API.
- {{domxref("IDBOpenDBRequest")}}
  - : Представляет запрос на открытие базы данных.
- {{domxref("IDBDatabase")}}
  - : Представляет подключение к базе данных. Это единственный способ получить транзакцию в базе данных.

### Получение и изменение данных

- {{domxref("IDBTransaction")}}
  - : Представляет транзакцию. Вы создаёте транзакцию в базе данных, указываете область действия (например, к каким хранилищам объектов вы хотите получить доступ) и определяете тип доступа (только чтение или чтение/запись), который вам нужен.
- {{domxref("IDBRequest")}}
  - : Generic interface that handles database requests and provides access to results.
- {{domxref("IDBObjectStore")}}
  - : Универсальный интерфейс, который обрабатывает запросы к базе данных и предоставляет доступ к результатам.
- {{domxref("IDBIndex")}}
  - : Позволяет получить доступ к подмножеству данных в IndexedDB, но вместо первичного ключа использует индекс для извлечения записи (записей). Иногда это быстрее, чем использование {{domxref("IDBObjectStore")}}.
- {{domxref("IDBCursor")}}
  - : Итерирует по хранилищам объектов и индексам.
- {{domxref("IDBCursorWithValue")}}
  - : Итерирует по хранилищам объектов и индексам и возвращает текущее значение курсора.
- {{domxref("IDBKeyRange")}}
  - : Определяет диапазон ключей, который можно использовать для извлечения данных из базы данных в определённом диапазоне.
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : Определяет диапазон ключей, который можно использовать для извлечения данных из базы данных в определённом диапазоне, отсортированных в соответствии с правилами локали, указанной для определённого индекса (см. [`createIndex()`'s optionalParameters](/ru/docs/Web/API/IDBObjectStore/createIndex#Parameters).). Этот интерфейс не входит в спецификацию 2.0.

### Пользовательские интерфейсы событий

Эта спецификация запускает события со следующим настраиваемым интерфейсом:

- {{domxref("IDBVersionChangeEvent")}}
  - : Интерфейс `IDBVersionChangeEvent` указывает, что версия базы данных изменилась в результате функции обработчика событий {{domxref("IDBOpenDBRequest.onupgradeneeded")}}.

### Устаревшие интерфейсы

Ранняя версия спецификации также определяла эти теперь удалённые интерфейсы. Они все ещё задокументированы на тот случай, если вам понадобится обновить ранее написанный код:

- {{domxref("IDBVersionChangeRequest")}}
  - : Представляет запрос на изменение версии базы данных. С тех пор способ изменения версии базы данных изменился (путём вызова {{domxref("IDBFactory.open")}} без вызова {{domxref("IDBDatabase.setVersion")}}), а интерфейс {{domxref("IDBOpenDBRequest")}} теперь имеет функциональность удалённого {{domxref("IDBVersionChangeRequest")}}.
- {{domxref("IDBDatabaseException")}}
  - : Представляет исключения, которые могут возникнуть при выполнении операций с базой данных.
- {{domxref("IDBTransactionSync")}}
  - : Синхронная версия {{domxref("IDBTransaction")}}.
- {{domxref("IDBObjectStoreSync")}}
  - : Синхронная версия {{domxref("IDBObjectStore")}}.
- {{domxref("IDBIndexSync")}}
  - : Синхронная версия {{domxref("IDBIndex")}}.
- {{domxref("IDBFactorySync")}}
  - : Синхронная версия {{domxref("IDBFactory")}}.
- {{domxref("IDBEnvironmentSync")}}
  - : Синхронная версия {{domxref("IDBEnvironment")}}.
- {{domxref("IDBDatabaseSync")}}
  - : Синхронная версия {{domxref("IDBDatabase")}}.
- {{domxref("IDBCursorSync")}}
  - : Синхронная версия {{domxref("IDBCursor")}}.

## Примеры

- [eLibri:](http://marco-c.github.io/eLibri/) Мощная библиотека и приложение для чтения электронных книг, написанное Марко Кастеллуччо, победителем IndexedDB Mozilla DevDerby.
- [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)): Эталонное приложение для примеров в справочной документации.
- [Storing images and files in IndexedDB](http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [localForage](https://localforage.github.io/localForage/): Polyfill, предоставляющий простое имя: синтаксис значения для клиентского хранилища данных, которое использует IndexedDB в фоновом режиме, но обращается к WebSQL, а затем к localStorage в браузерах, которые не поддерживают IndexedDB.
- [Dexie.js](http://www.dexie.org/): Обёртка для IndexedDB, позволяющая значительно ускорить разработку кода благодаря красивому и простому синтаксису.
- [ZangoDB](https://github.com/erikolson186/zangodb): Интерфейс, подобный MongoDB, для IndexedDB, который поддерживает большинство знакомых функций фильтрации, проекции, сортировки, обновления и агрегирования MongoDB.
- [JsStore](http://jsstore.net/): Оболочка IndexedDB с синтаксисом, подобным SQL.
- [MiniMongo](https://github.com/mWater/minimongo): Клиентский MongoDB, поддерживаемый localStorage, с синхронизацией сервера по http. MiniMongo используется в MeteorJS.
- [PouchDB](https://pouchdb.com/): Клиентская реализация CouchDB в браузере с использованием IndexedDB
- [idb](https://www.npmjs.com/package/idb): Крошечная (\~1,15 КБ) библиотека, которая в основном представляет API IndexedDB, но с небольшими улучшениями, которые имеют большое значение для удобства использования.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): Суперпростое-маленькое (\~600 Б) хранилище ключей на основе Promise, реализованное с помощью IndexedDB
- [sifrr-storage:](https://www.npmjs.com/package/@sifrr/storage) Небольшая (\~2 КБ) библиотека на основе Promise для хранения ключей и значений на стороне клиента. Работает с IndexedDB, localStorage, WebSQL, Cookies. Может автоматически использовать поддерживаемое хранилище, доступное в зависимости от приоритета.
- [lovefield](https://github.com/google/lovefield): Lovefield - это реляционная база данных для веб-приложений. Написана на JavaScript, работает кроссбраузерно. Предоставляет API-интерфейсы, подобные SQL, быстрые, безопасные и простые в использовании.
