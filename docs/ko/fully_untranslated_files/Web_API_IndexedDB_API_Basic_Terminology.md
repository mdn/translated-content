---
title: IndexedDB key characteristics and basic terminology
slug: Web/API/IndexedDB_API/Basic_Terminology
---

{{DefaultAPISidebar("IndexedDB")}}

이 문서에서는 IndexedDB의 주요 특성을 설명하고, IndexedDB API를 이해하는 데 관련된 몇 가지 필수적인 용어를 소개합니다.

유용한 문서들:

- API 사용법에 대한 상세한 튜토리얼을 원한다면 [IndexedDB 사용하기](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB)를 확인해보세요.
- IndexedDB API의 참조 문서를 원한다면, [IndexedDB API](/ko/docs/Web/API/IndexedDB_API) 문서와 IndexedDB에서 사용되는 객체 타입에 대한 하위 문서들을 확인하세요.
- 브라우저가 어떻게 백그라운드에서 데이터를 저장하는지에 대한 더 자세한 정보는 [Browser storage quotas and eviction criteria](/ko/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)에서 확인하세요.

## 주요 특성

IndexedDB는 데이터를 사용자의 브라우저에 영구적으로 저장하는 방법입니다. 네트워크 가용성에 관계 없이 풍부한 쿼리 기능을 갖춘 웹 어플리케이션을 만들 수 있기 때문에, 온라인과 오프라인에서 모두 동작합니다. IndexedDB는 대규모 데이터(예: 도서관의 DVD 목록)를 저장하고 지속적인 인터넷 연결을 필요로 하지 않는 작업(예: 메일 클라이언트, 투두 리스트, 메모장)을 위한 어플리케이션에 유용합니다.

IndexedDB는 "키"로 인덱싱된 객체를 저장하고 검색할 수 있습니다. 데이터베이스의 모든 변화는 트랜잭션 내에서 일어납니다. 대부분의 웹 스토리지 솔루션처럼, IndexedDB는 [동일 출처 정책](https://www.w3.org/Security/wiki/Same_Origin_Policy)을 따릅니다. 그래서 어떤 도메인에서 저장된 데이터는 다른 도메인에서 접근할 수 없습니다.

만약 다른 종류의 데이터베이스를 사용하고 있다면, IndexedDB를 사용하면서 당황할 수 있습니다. 그렇기 때문에 IndexedDB의 다음 주요 특성들을 염두에 두어야 합니다:

- **IndexedDB 데이터베이스는 키-값 쌍을 저장합니다.** 값은 복잡한 구조의 객체일 수 있고, 키는 그러한 객체의 프로퍼티일 수 있습니다. 인덱스는 빠른 검색이나 정렬된 열거를 위해 객체의 아무 프로퍼티나 사용하여 생성할 수 있습니다. 키는 이진 객체일 수 있습니다.
- **IndexedDB는 트랜잭션 데이터베이스 모델에 기반합니다.** IndexedDB에서 일어나는 모든 일은 [트랜잭션](#transaction) 내에서 일어납니다. IndexedDB API는 인덱스, 테이블, 커서 등을 나타내는 다양한 객체를 제공하지만, 이 객체들은 모두 특정 트랜잭션에 얽매여 있습니다. 그러므로, 트랜잭션 밖에서 명령을 실행하거나 커서를 열 수 없습니다. 트랜잭션은 지정된 수명이 있기 때문에 종료된 후에 트랜잭션을 사용하려고 시도하면 예외를 발생시킵니다. 또한, 트랜잭션은 자동으로 커밋되며 수동으로 커밋될 수 없습니다.

  이 트랜잭션 모델은 유저가 웹 어플리케이션을 두 개의 다른 탭에서 동시에 열었을 때를 고려하면 매우 유용합니다. 트랜잭션 작업이 없으면, 두 인스턴스는 서로의 변경에 개입할 수 있습니다. 만약 데이터베이스의 트랜잭션이 친숙하지 않다면, [트랜잭션에 대한 Wikipedia 문서](https://en.wikipedia.org/wiki/Database_transaction)를 읽어보세요. 정의 섹션에서 [트랜잭션](#transaction) 문서도 확인해보세요.

- **IndexedDB API는 대체로 비동기적입니다.** API는 값을 반환하여 데이터를 제공하지 않습니다. 대신 콜백 함수를 전달해야 합니다. 동기적으로 데이터베이스에 값을 "저장"하거나, 데이터베이스에서 값을 "검색"할 수 없습니다. 대신, 데이터베이스 동작이 일어날 것을 "요청"합니다. 동작이 끝나면 DOM 이벤트가 발생하게 되고, 해당 이벤트의 타입을 통해 동작이 성공했는지 실패했는지를 알 수 있습니다. 처음에는 조금 복잡하게 들리겠지만, 이 방식에는 안전장치가 내장되어 있습니다. 이것은 [XMLHttpRequest](/ko-KR/docs/Web/API/XMLHttpRequest)가 동작하는 방식과 크게 다르지 않습니다.
- **IndexedDB는 많은 요청을 사용합니다.** 요청은 앞서 언급했던 성공 또는 실패 DOM 이벤트를 받는 객체를 말합니다. 이 객체는 `onsuccess`와 `onerror` 프로퍼티를 가지며, `addEventListener()`와 `removeEventListener()`를 호출할 수 있습니다. 또한 요청의 상태를 나타내는 `readyState`, `result`, `errorCode`와 같은 프로퍼티를 가집니다. `result` 프로퍼티는 요청이 어떻게 생성되었는지(예: `IDBCursor`의 인스턴스 또는 데이터베이스에 추가한 어떤 값의 키)에 따라 특별하게 동작합니다.
- **IndexedDB는 결과를 사용할 수 있을 때 DOM 이벤트를 통해 통지합니다.** DOM 이벤트는 항상 `type` 프로퍼티를 가집니다 (IndexedDB에서는 거의 대부분 `"success"` 또는 `"error"`로 설정됩니다.). DOM 이벤트는 이벤트가 향하는 곳이 어디인지를 나타내는 `target` 프로퍼티도 가집니다. 대부분의 경우에, 이벤트의 `target` 프로퍼티는 데이터베이스 동작의 결과로 생성된 `IDBRequest` 객체를 가리킵니다. 성공 이벤트는 버블링을 일으키지 않으며, 취소될 수 없습니다. 에러 이벤트는 반대로 버블링을 일으키고, 취소될 수도 있습니다. 에러 이벤트는 취소되지 않는 한 실행 중인 모든 트랜잭션을 중단하므로 이는 매우 중요합니다.
- **IndexedDB는 객체지향적입니다.** IndexedDB는 행과 열의 컬렉션으로 대표되는 테이블을 사용하는 관계형 데이터베이스가 아닙니다. 이는 어플리케이션을 설계하고 구축하는 방식에 영향을 끼치는 중요하고 근본적인 차이입니다.

  전통적인 관계형 데이터 저장소에서는 데이터 행의 컬렉션과 명명된 자료형의 데이터 열을 저장하는 테이블을 갖습니다. 반면에 IndexedDB는 특정 타입의 데이터를 저장할 객체 저장소를 생성하고, 자바스크립트 객체를 저장소에 저장합니다. 각 객체 저장소는 쿼리와 순회를 효율적으로 만들어주는 인덱스 컬렉션을 갖습니다. 만약 객체지향 데이터베이스 관리 시스템에 친숙하지 않다면, [객체지향 데이터베이스에 대한 Wikipedia 문서](https://en.wikipedia.org/wiki/Object_database)를 읽어보세요.

- **IndexedDB does not use Structured Query Language (SQL).** It uses queries on an index that produces a cursor, which you use to iterate across the result set. If you are not familiar with NoSQL systems, read the [Wikipedia article on NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB adheres to a same-origin policy**. An origin is the domain, application layer protocol, and port of a URL of the document where the script is being executed. Each origin has its own associated set of databases. Every database has a name that identifies it within an origin.

  The security boundary imposed on IndexedDB prevents applications from accessing data with a different origin. For example, while an app or a page in `http://www.example.com/app/` can retrieve data from `http://www.example.com/dir/`, because they have the same origin, it cannot retrieve data from `http://www.example.com:8080/dir/` (different port) or `https://www.example.com/dir/` (different protocol), because they have different origins.

  > **Note:** Third party window content (e.g. {{htmlelement("iframe")}} content) can access the IndexedDB store for the origin it is embedded into, unless the browser is set to [never accept third party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (see [Firefox bug 1147821](https://bugzil.la/1147821).)

### Limitations

IndexedDB is designed to cover most cases that need client-side storage. However, it is not designed for a few cases like the following:

- Internationalized sorting. Not all languages sort strings in the same way, so internationalized sorting is not supported. While the database can't store data in a specific internationalized order, you can sort the data that you've read out of the database yourself. Note, however, that [locale-aware sorting](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) has been allowed with an experimental flag enabled (currently for Firefox only) since Firefox 43.
- Synchronizing. The API is not designed to take care of synchronizing with a server-side database. You have to write code that synchronizes a client-side indexedDB database with a server-side database.
- Full text searching. The API does not have an equivalent of the `LIKE` operator in SQL.

In addition, be aware that browsers can wipe out the database, such as in the following conditions:

- The user requests a wipe out. Many browsers have settings that let users wipe all data stored for a given website, including cookies, bookmarks, stored passwords, and IndexedDB data.
- The browser is in private browsing mode. Some browsers, have "private browsing" (Firefox) or "incognito" (Chrome) modes. At the end of the session, the browser wipes out the database.
- The disk or quota limit has been reached.
- The data is corrupt.
- An incompatible change is made to the feature.

The exact circumstances and browser capabilities change over time, but the general philosophy of the browser vendors is to make the best effort to keep the data when possible.

## Core terminology

This section defines and explains core terminology relevant to understanding the IndexedDB API.

### Database

#### database

A repository of information, typically comprising one or more [_object stores_](#object_store). Each database must have the following:

- Name. This identifies the database within a specific origin and stays constant throughout its lifetime. The name can be any string value (including an empty string).
- Current [_version_](#version). When a database is first created, its version is the integer 1 if not specified otherwise. Each database can have only one version at any given time.

#### database connection

An operation created by opening a _[database](#database)_. A given database can have multiple connections at the same time.

#### durable

In Firefox, IndexedDB used to be **durable**, meaning that in a readwrite transaction a {{domxref("IDBTransaction.complete_event", "complete")}} event was fired only when all data was guaranteed to have been flushed to disk.

As of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see [Webkit bug 1112702](https://bugzil.la/1112702)), which is the same behavior as other IndexedDB-supporting browsers. In this case the {{domxref("IDBTransaction.complete_event", "complete")}} event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare, most consumers should not need to concern themselves further.

> **Note:** In Firefox, if you wish to ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.) This is currently experimental, and can only be used if the `dom.indexedDB.experimental` pref is set to `true` in `about:config`.

#### index

An index is a specialized object store for looking up records in another object store, called the _referenced object store_. The index is a persistent key-value storage where the value part of its records is the key part of a record in the referenced object store. The records in an index are automatically populated whenever records in the referenced object store are inserted, updated, or deleted. Each record in an index can point to only one record in its referenced object store, but several indexes can reference the same object store. When the object store changes, all indexes that refer to the object store are automatically updated.

Alternatively, you can also look up records in an object store using the [key](#key).

To learn more on using indexes, see [Using IndexedDB](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). For the reference documentation on index, see [IDBKeyRange](/ko/docs/Web/API/IDBKeyRange).

#### object store

The mechanism by which data is stored in the database. The object store persistently holds records, which are key-value pairs. Records within an object store are sorted according to the _[keys](#key)_ in an ascending order.

Every object store must have a name that is unique within its database. The object store can optionally have a _[key generator](#key_generator)_ and a _[key path](#key_path)_. If the object store has a key path, it is using _[in-line keys](#in-line_key)_; otherwise, it is using _[out-of-line keys](#out-of-line_key)_.

For the reference documentation on object store, see {{domxref("IDBObjectStore")}}.

#### request

The operation by which reading and writing on a database is done. Every request represents one read or write operation.

#### transaction

An atomic set of data-access and data-modification operations on a particular database. It is how you interact with the data in a database. In fact, any reading or changing of data in the database must happen in a transaction.

A database connection can have several active transactions associated with it at a time, so long as the writing transactions do not have overlapping [_scopes_](#scope). The scope of transactions, which is defined at creation, determines which object stores the transaction can interact with and remains constant for the lifetime of the transaction. So, for example, if a database connection already has a writing transaction with a scope that just covers the `flyingMonkey` object store, you can start a second transaction with a scope of the `unicornCentaur` and `unicornPegasus` object stores. As for reading transactions, you can have several of them — even overlapping ones.

Transactions are expected to be short-lived, so the browser can terminate a transaction that takes too long, in order to free up storage resources that the long-running transaction has locked. You can abort the transaction, which rolls back the changes made to the database in the transaction. And you don't even have to wait for the transaction to start or be active to abort it.

The three modes of transactions are: `readwrite`, `readonly`, and `versionchange`. The only way to create and delete object stores and indexes is by using a [`versionchange`](/ko/docs/Web/API/IDBDatabase/versionchange_event) transaction. To learn more about transaction types, see the reference article for [IndexedDB](/ko/docs/Web/API/IndexedDB_API).

Because everything happens within a transaction, it is a very important concept in IndexedDB. To learn more about transactions, especially on how they relate to versioning, see {{domxref("IDBTransaction")}}, which also has reference documentation.

#### version

When a database is first created, its version is the integer 1. Each database has one version at a time; a database can't exist in multiple versions at once. The only way to change the version is by opening it with a greater version than the current one.

### Key and value

#### in-line key

A key that is stored as part of the stored value. It is found using a _key path_. An in-line key can be generated using a generator. After the key has been generated, it can then be stored in the value using the key path or it can also be used as a key.

#### key

A data value by which stored values are organized and retrieved in the object store. The object store can derive the key from one of three sources: a _[key generator](#key_generator)_, a _[key path](#key_path)_, or an explicitly specified value. The key must be of a data type that has a number that is greater than the one before it. Each record in an object store must have a key that is unique within the same store, so you cannot have multiple records with the same key in a given object store.

A key can be one of the following types: [string](/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date), float, a binary blob, and [array](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array). For arrays, the key can range from an empty value to infinity. And you can include an array within an array.

Alternatively, you can also look up records in an object store using the _[index](#index)._

#### key generator

A mechanism for producing new keys in an ordered sequence. If an object store does not have a key generator, then the application must provide keys for records being stored. Generators are not shared between stores. This is more a browser implementation detail, because in web development, you don't really create or access key generators.

#### key path

Defines where the browser should extract the key from in the object store or index. A valid key path can include one of the following: an empty string, a JavaScript identifier, or multiple JavaScript identifiers separated by periods or an array containing any of those. It cannot include spaces.

#### out-of-line key

A key that is stored separately from the value being stored.

#### value

Each record has a value, which could include anything that can be expressed in JavaScript, including [boolean](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined), and null.

When an object or array is stored, the properties and values in that object or array can also be anything that is a valid value.

[Blobs](/ko/docs/Web/API/Blob) and files can be stored, cf. [specification](https://w3c.github.io/IndexedDB/).

### Range and scope

#### cursor

A mechanism for iterating over multiple records with a _key range_. The cursor has a source that indicates which index or object store it is iterating. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. For the reference documentation on cursors, see {{domxref("IDBCursor")}}.

#### key range

A continuous interval over some data type used for keys. Records can be retrieved from object stores and indexes using keys or a range of keys. You can limit or filter the range using lower and upper bounds. For example, you can iterate over all values of a key between x and y.

For the reference documentation on key range, see {{domxref("IDBKeyRange")}}.

#### scope

The set of object stores and indexes to which a transaction applies. The scopes of read-only transactions can overlap and execute at the same time. On the other hand, the scopes of writing transactions cannot overlap. You can still start several transactions with the same scope at the same time, but they just queue up and execute one after another.

## Next steps

With an understanding of IndexedDB's key characteristics and core terminology under our belts, we can get to more concrete stuff. For a tutorial on how to use the API, see [Using IndexedDB](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## See also

- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB API Reference](/ko/docs/Web/API/IndexedDB_API)
- [Using IndexedDB](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — The Store in Your Browser](<https://docs.microsoft.com/previous-versions/msdn10/gg679063(v=msdn.10)>)
