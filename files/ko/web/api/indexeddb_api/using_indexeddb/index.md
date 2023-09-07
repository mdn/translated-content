---
title: IndexedDB 사용하기
slug: Web/API/IndexedDB_API/Using_IndexedDB
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB는 사용자의 브라우저에 데이터를 영구적으로 저장할 수 있는 방법 중 하나입니다. IndexedDB를 사용하여 네트워크 상태에 상관없이 풍부한 쿼리 기능을 이용할 수 있는 웹 어플리케이션을 만들 수 있기 때문에, 여러분의 웹 어플리케이션은 온라인과 오프라인 환경에서 모두 동작할 수 있습니다.

## 이 문서에 대하여

여러분은 이 튜토리얼에서 IndexedDB의 비동기 방식(asynchronous) API에 대해 훑어볼 수 있습니다. 만약 IndexedDB가 생소하다면, [IndexedDB key characteristics and basic terminology](/ko/docs/Web/API/IndexedDB_API/Basic_Terminology) 를 먼저 읽어보는 것이 좋습니다.

IndexedDB API에 대한 참조(reference) 문서를 원한다면, [IndexedDB API](/ko/docs/Web/API/IndexedDB_API) 항목과 하위 페이지를 보십시오. 이 문서에서는 IndexedDB에서 사용되는 객체의 종류와, 동기식(synchrounous), 비동기식(asynchronous) API에 대해서 기술하고 있습니다.

## 기본 패턴

IndexedDB가 권장하는 기본 패턴은 다음과 같습니다:

1. 데이터베이스를 엽니다.
2. 객체 저장소(Object store)를 생성합니다.
3. 트랜젝션(Transaction)을 시작하고, 데이터를 추가하거나 읽어들이는 등의 데이터베이스 작업을 요청합니다.
4. DOM 이벤트 리스너를 사용하여 요청이 완료될때까지 기다립니다.
5. (요청 객체에서 찾을 수 있는) 결과를 가지고 무언가를 합니다.

그러면 이제, 이런 큰 개념을 익히면 더 구체적인 것을 할 수 있습니다.

## 저장소를 생성하고 구성하기

### Indexed DB 의 실험적인 버전을 사용해보기

접두어를 사용하는 브라우저에서 코드를 테스트하려는 경우 다음 코드를 사용할 수 있습니다.

```js
// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
```

접두어를 사용하여 구현하는 것은 버그가 있거나 불완전하거나 이전 버전의 사양을 따르는 경우가 있습니다. 따라서 프로덕션 상태의 코드에선 사용하지 않는 것을 권장합니다. 제대로 지원하지 않는 브라우저를 지원하게 구현하여 실패하는 것보다 미지원 하는 것이 바람직할 수 있습니다.:

```js
if (!window.indexedDB) {
  window.alert(
    "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.",
  );
}
```

### 데이터베이스 열기

우리는 밑의 프로그래밍 코드로 시작할 것입니다:

```js
// 내 데이터 베이스를 열도록 요청하자
var request = window.indexedDB.open("MyTestDatabase");
```

보셨나요? 데이터베이스 접속은 다른 operation 들과 비슷합니다 — 당신은 "요청(request)" 하면 됩니다.

open 요청은 데이터베이스를 즉시 열거나 즉시 트랜잭션을 시작하지 않습니다. `open()` 함수를 호출하면 이벤트로 처리한 결과(성공 상태)나 오류 값이 있는 [`IDBOpenDBRequest`](/ko/docs/IndexedDB/IDBOpenDBRequest) 객체를 반환합니다. IndexedDB의 다른 비동기 함수 대부분은 결과 또는 오류가 있는 [`IDBRequest`](/ko/docs/IndexedDB/IDBRequest) 객체를 반환합니다. `open()` 함수의 결과는 [`IDBDatabase`](/ko/docs/IndexedDB/IDBDatabase) 의 인스턴스입니다.

open 메소드의 두번째 매개 변수는 데이터베이스의 버전입니다. 데이터베이스의 버전은 데이터베이스 스키마를 결정합니다. 데이터베이스 스키마는 데이터베이스 안의 객체 저장소와 그것들의 구조를 결정합니다. 데이터베이스가 아직 존재하지 않으면, open operation에 의해 생성되고, 그 다음 `onupgradeneeded` 이벤트가 트리거되고 이 이벤트 안에서 데이터베이스 스키마를 작성합니다. 데이터베이스가 존재하지만 업그레이드 된 버전 번호를 지정하는 경우 `onupgradeneeded` 이벤트가 트리거되고 해당 핸들러에 업데이트된 스키마를 제공할 수 있습니다. 자세한 내용은 나중에 아래의 [데이터베이스의 버전 업데이트](#데이터베이스의_버전_생성_또는_업데이트)와 {{ domxref("IDBFactory.open") }} 페이지를 참조하십시오.

> **경고:** **중요**: 버전 번호는 `unsigned long long` 숫자입니다. 이는 버전 번호는 매우 큰 정수가 되어야한다는 의미입니다. 또한 부동 소수점을 사용할 수 없다는 것을 의미합니다. 그렇지 않으면 가장 가까운 정수로 변환되어 트랜잭션이 시작되지 않거나 `upgradeneeded` 이벤트가 트리거 되지 않습니다. 예를 들어, 2.4와 같은 버전 번호를 사용하지 마십시오:
> `var request = indexedDB.open("MyTestDatabase", 2.4); // don't do this, as the version will be rounded to 2`

#### 제어 객체 생성

첫번째로 당신이 하려는 모든 요청에 대해 성공했을 때 그리고 에러가 발생했을 때 제어를 할 객체를 요청해야 됩니다:

```js
request.onerror = function (event) {
  // request.errorCode 에 대해 무언가를 한다!
};
request.onsuccess = function (event) {
  // request.result 에 대해 무언가를 한다!
};
```

`onsuccess()` 또는 `onerror()` 두 함수 중 어떤 함수가 호출될까요? 모든 것이 성공하면, success 이벤트 (즉, `type` 속성이`"success"` 로 설정된 DOM 이벤트)가 `request`를 `target`으로 발생합니다. 일단 실행되면, `request` 의 `onsuccess()` 함수는 success 이벤트를 인수로 트리거됩니다. 반면, 문제가 있는 경우, 오류 이벤트 (즉 `type` 속성이`"error"` 로 설정된 DOM 이벤트)는 `request`에서 발생합니다. 이 오류 이벤트를 인수로 `onerror()` 함수가 트리거됩니다.

The IndexedDB API는 오류 처리의 필요성을 최소화하도록 설계되었기 때문에 많은 오류 이벤트를 볼 수는 없을 것입니다. (적어도 API에 익숙하지 않은 경우). 그러나 데이터베이스를 여는 경우 오류 이벤트를 발생하는 몇 가지 일반적인 조건이 있습니다. 가장 많은 문제는 사용자가 웹 응용 프로그램에 데이터베이스를 만들 수 있는 권한을 주지 않기로 결정한 것입니다. IndexedDB의 주요 설계 목표 중 하나는 많은 양의 데이터를 오프라인에서 사용할 수 있도록 하는 것입니다. (각 브라우저에서 저장할 수 있는 저장 용량에 대한 자세한 내용은 [Storage limits](/ko/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#Storage_limits) 를 참조하십시오.)

일부 광고 네트워크나 악의적인 웹 사이트가 컴퓨터를 오염시키는 것을 브라우저는 원하지 않기 때문에 브라우저는 특정 웹 응용 프로그램이 처음으로 저장용 IndexedDB를 열려고 할 때 사용자에게 메시지를 보냅니다. 사용자가 액세스를 허용하거나 거부할 수 있습니다. 또한, 개인정보 보호 모드의 브라우저에서 IndexedDB 공간은 시크릿 세션이 닫힐 때까지 메모리 내에서만 지속됩니다. (Firefox의 개인정보 보호 브라우징 모드와 Chrome 의 시크릿 모드가 있지만, Firefox 의 경우 2015년 11월 현재 아직 미구현([Firefox bug 781982](https://bugzil.la/781982) 참조)이므로, 개인정보 보호 브라우징 모드의 Firefox에서는 IndexedDB를 사용할 수 없습니다).

이제, 사용자가 데이터베이스 생성 요청을 허용하여 success 콜백을 트리거하는 success 이벤트를 받았다고 가정합니다; 그 다음은 무엇을 해야할까요? 이 요청은 `indexedDB.open()`을 호출하여 생성되었고, `request.result` 는 `IDBDatabase` 의 인스턴스이므로, 이후에 이것을 사용하기 위해 저장하기 원할 것은 확실합니다. 코드는 다음과 같이 할 수 있습니다:

```js
var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function (event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function (event) {
  db = request.result;
};
```

#### 에러 처리

위에서 언급한 바와 같이, 오류 이벤트는 버블링됩니다. 오류 이벤트는 오류를 생성한 request를 대상으로하며, 이벤트는 트랜잭션으로 버블링되고, 마지막으로 데이터베이스 객체로 버블링됩니다. 모든 요청에 에러 처리를 피하고 싶은 경우, 아래와 같이 하나의 오류 핸들러를 데이터베이스 객체에 추가하여 대신할 수 있습니다:

```js
db.onerror = function (event) {
  // Generic error handler for all errors targeted at this database's
  // requests!
  alert("Database error: " + event.target.errorCode);
};
```

데이터베이스를 열 때 자주 발생하는 오류 중 하나가 `VER_ERR`가 있습니다. 이는 디스크에 저장된 데이터베이스의 버전이 현재 코드에서 지정된 버전 번호보다 큼을 나타냅니다. 이 오류는 항상 오류 처리기에서 처리해야합니다.

### 데이터베이스의 버전 생성 또는 업데이트

<a id="데이터베이스의_버전_생성_또는_업데이트" name="데이터베이스의_버전_생성_또는_업데이트"></a>새로운 데이터베이스를 만들거나 기존 데이터베이스의 버전 번호를 높일 때([데이터베이스 열기](#데이터베이스_열기)시, 이전 버전보다 높은 버전 번호를 지정하면), `onupgradeneeded` 가 트리거되고 `request.result`(즉, 아래의 예제 : `db`)에 설정된 `onversionchange` 이벤트 핸들러에 [IDBVersionChangeEvent](/ko/docs/Web/API/IDBVersionChangeEvent) 객체가 전달됩니다. `upgradeneeded` 이벤트 처리기에서 이 버전의 데이터베이스에 필요한 객체 저장소를 만들어야합니다:

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = function (event) {
  // Save the IDBDatabase interface
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

이 경우 데이터베이스에는 이전 버전의 데이터베이스에 있는 객체 저장소가 이미 있으므로, 이전 버전의 객체 저장소를 다시 만들 필요가 없습니다. 여러분은 새로운 객체 저장소를 만들거나 더 이상 필요하지 않은 이전 버전의 객체 저장소만 삭제하면 됩니다. 기존 객체 저장소를 변경(예, `keyPath`를 변경) 해아 하는 경우, 이전 객체 저장소를 삭제하고 새 옵션으로 다시 만들어야합니다. (이것은 객체 저장소의 정보를 삭제하니 주의하십시오! 해당 정보를 보존해야하는 경우 데이터베이스를 업그레이드하기 전에 해당 정보를 읽고 다른 곳에 저장해야 합니다.)

이미 존재하는 이름으로 객체 저장소를 만들려고 하면 (또는 존재하지 않는 객체 저장소를 삭제하려고 하면) 오류가 발생합니다.

`onupgradeneeded` 이벤트가 성공적으로 끝나면, 데이터베이스 열기 요청의 `onsuccess` 핸들러가 트리거 됩니다.

### 데이터베이스 구성

이제 데이터베이스를 구축합니다. IndexedDB는 테이블이 아닌 객체 저장소를 사용하며 하나의 데이터베이스는 여러 개의 객체 저장소를 포함할 수 있습니다. 값을 객체 저장소에 저장할 때마다 값은 키와 연관됩니다. 객체 저장소가 [키 경로](/ko/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) 또는 [키 생성기](/ko/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) 옵션의 사용 여부에 따라 키를 제공할 수 있는 여러 가지 방법이 있습니다.

다음 표는 키가 제공되는 다양한 방법을 보여줍니다:

| 키 경로 (`keyPath`) | 키 생성기 (`autoIncrement`) | Description                                                                                                                                                                                                                                                            |
| ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No                  | No                          | 이 객체 저장소는 숫자 및 문자열과 같은 원시 값을 포함한 모든 종류의 값을 보유 할 수 있습니다. 새 값을 추가 할 때 마다 별도의 키 인수를 공급해야합니다.                                                                                                                 |
| Yes                 | No                          | 이 객체 저장소는 JavaScript 객체만 포함 할 수 있습니다. 객체에는 키 경로와 같은 이름의 속성이 있어야합니다.                                                                                                                                                            |
| No                  | Yes                         | 이 객체 저장소는 모든 종류의 값을 보유할 수 있습니다. 키가 자동으로 생성됩니다. 또한 특정 키를 사용하려는 경우 별도의 키 인수를 공급할 수 있습니다.                                                                                                                    |
| Yes                 | Yes                         | 이 객체 저장소는 JavaScript 객체만 포함 할 수 있습니다. 일반적으로 키가 자동으로 생성되고 생성된 키의 값은 키 경로와 동일한 이름을 가진 속성의 객체에 저장됩니다. 그러나 그러한 속성이 이미 존재하는 경우, 새로운 키를 생성하는 것이 아닌 속성의 값을 키로 사용됩니다. |

객체 저장소가 기본이 아닌 객체를 보유하고 있으면 객체 저장소에서 인덱스를 만들 수 있습니다. 인덱스를 사용하면 객체의 키가 아닌 저장된 객체의 속성 값을 사용하여 객체 저장소에 저장된 값을 검색할 수 있습니다.

또한, 인덱스에는 저장된 데이터에 대한 간단한 제약 조건을 적용 할 수 있는 기능이 있습니다. 인덱스를 작성할 때 고유(unique) 플래그를 설정하면, 인덱스는 인덱스의 키 경로에 대해 동일한 값을 갖는 두 개의 객체가 저장되지 않도록 보장합니다. 따라서 예를 들자면, 사람 집단을 보유하고 있는 객체 저장소가 있고, 두 사람이 동일한 email 주소를 갖지 못 한다는 것을 보장하려는 경우, 이를 강제하기 위해 고유(unique) 플래그 설정한 인덱스를 사용하면 됩니다.

이 부분은 혼란스러울 수도 있으므로 간단한 예제를 들어 설명하겠습니다. 먼저, 다음의 예에서 사용할 고객 데이터를 정의하겠습니다:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
```

물론, 모든 사람이 사회 보장 번호(ssn)를 가지지 않기 때문에 ssn을 기본 키(primary key)로 지정하지 않을겁니다. 그리고 나이를 저장하는 대신 주로 생년월일을 저장하겠지만, 이러한 점은 편의를 위해 무시하고 지나가겠습니다.

이제 자료를 저장하기 위해 indexedDB를 생성하는 과정을 보겠습니다:

```js
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
  // Handle errors.
};
request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = function (event) {
    // Store values in the newly created objectStore.
    var customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach(function (customer) {
      customerObjectStore.add(customer);
    });
  };
};
```

이전에 적었듯이, `onupgradeneeded` 는 데이터베이스의 구조를 변경할 수 있는 곳에 위치해야합니다. 이 이벤트 안에서 객체 저장소를 만들거나 삭제하고, 인덱스를 만들거나 지울 수 있습니다.

객체 저장소는 `createObjectStore()`를 한번 호출함으로써 생성됩니다. 이 메소드는 저장소의 이름과 파라미터 객체를 인자로 받습니다. 파라미터 객체는 선택적으로 사용할 수 있지만, 이는 중요한 설정들을 정의하고 만들고자하는 객체 저장소의 타입을 정의하기 때문에 매우 중요합니다. 이번 예시에서, 우리는 객체 저장소의 이름을 "customers"로 짓고 개별 객체들이 유일하게 저장되도록 만들어주는 특성인 `keyPath`를 정의합니다. 그리고 사회 보장 번호(ssn)는 고유함이 보장되기 때문에, `keyPath`로 예제의 ssn 프로퍼티를 사용하며 ssn은 `objectStore` 에 저장되는 모든 객체에 반드시 포함되어야 합니다.
우리는 또한 저장된 객체의 `name` 프로퍼티를 찾기 위한 인덱스 "name"을 요청합니다.
또한 `createObjectStore()`, `createIndex()` 도 생성하려는 인덱스의 종류를 결정하는 선택적인 객체인 `options` 을 인자로 받습니다. `name` 프로퍼티가 없는 객체를 추가할 수는 있지만, 이 경우 그 객체는 "name" 인덱스에 나타나지 않습니다.

이제 우리는 저장된 customer 객체를 가져오기 위해 `ssn` 을 이용하여 객체 저장소로부터 바로 가져오거나, 인덱스에서 그들의 이름을 이용해 가져올 수 있습니다. 이 과정이 어떻게 이루어지는지 배우기 위해, [using an index](/en/IndexedDB/Using_IndexedDB#Using_an_index) 섹션을 확인할 수 있습니다.

### 키 생성기 사용하기

객체 저장소를 생성할 때 `autoIncrement` 플래그를 설정함으로써 키 생성기를 활성화할 수 있습니다. 기본값으로 이 플래그는 설정되지 않습니다.

키 생성기가 활성화되면, 객체 저장소에 값을 추가할 때 키가 자동으로 추가됩니다. 처음 생성되면 키 생성기의 값은 항상 1로 설정되고, 새로 생성되는 키는 기본적으로 이전 키에서 1을 더한 값이 됩니다. 키 생성기의 값은 트랜잭션이 취소되는 등 데이터베이스 작업이 복구되는게 아닌 한 절대 작아지지 않습니다. 그래서 레코드를 지우거나 객체 저장소의 모든 레코드를 지우더라도 해당 객체 저장소의 키 생성기에는 영향을 끼치지 않습니다.

우리는 아래와 같이 키 생성기와 함께 객체 저장소를 생성할 수 있습니다:

```js
// Open the indexedDB.
var request = indexedDB.open(dbName, 3);

request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Create another object store called "names" with the autoIncrement flag set as true.
  var objStore = db.createObjectStore("names", { autoIncrement: true });

  // Because the "names" object store has the key generator, the key for the name value is generated automatically.
  // The added records would be like:
  // key : 1 => value : "Bill"
  // key : 2 => value : "Donna"
  customerData.forEach(function (customer) {
    objStore.add(customer.name);
  });
};
```

키 생성기와 관련된 보다 많은 정보는 ["W3C Key Generators"](http://www.w3.org/TR/IndexedDB/#key-generator-concept) 를 참고해 주십시오.

## 데이터 추가, 검색 및 제거

새 데이터베이스에서 작업을 하기전에, 트랜잭션을 시작할 필요가 있습니다. 트랜잭션은 데이터베이스 객체 단위로 작동하므로 트랜잭션을 사용할 객체 저장소를 지정해줘야합니다. 트랜잭션에 들어오고 나면, 자료가 있는 객체 저장소에 접근할 수 있고 요청을 만들 수 있습니다. 다음으로, 데이터베이스에 변경점을 만들지, 혹은 읽기만 할지 결정해야합니다. 트랜잭션은 다음의 3가지 모드가 있습니다: `readonly`, `readwrite`, 그리고 `versionchange`.

객체 저장소나 인덱스를 만들거나 삭제하는 작업을 포함하여 데이터베이스의 "schema"나 구조를 변경하기 위해서 트랜잭션은 반드시 `versionchange` 여야 합니다. 이 트랜잭션은 {{domxref("IDBFactory.open")}} 메소드를 `version` 과 함께 호출할 경우 시작됩니다.

이미 존재하는 객체 저장소의 레코드를 읽기 위해서 트랜잭션은 `readonly` 혹은 `readwrite` 모드이면 됩니다. 이미 존재하는 객체 저장소에 변경점을 기록하기 위해서는 트랜잭션이 반드시 `readwrite` 모드여야합니다. 특정 트랜잭션은 {{domxref("IDBDatabase.transaction")}} 으로 열 수 있습니다. 이 메소드는 접근하고 싶은 객체 저장소들의 배열로 정의된 범위인 `storeNames`와 트랜잭션의 모드`mode` (`readonly` 혹은 `readwrite`), 2개의 인자를 받습니다. 이 메소드는 객체 저장소에 접근할 수 있는 {{domxref("IDBIndex.objectStore")}} 메소드를 포함한 트랜잭션 객체를 반환합니다. 모드가 지정되지 않는다면 기본적으로 트랜잭션은 `readonly` 모드로 열립니다.

> **참고:** As of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see [Firefox bug 1112702](https://bugzil.la/1112702).) Previously in a `readwrite` transaction {{domxref("IDBTransaction.oncomplete")}} was fired only when all data was guaranteed to have been flushed to disk. In Firefox 40+ the `complete` event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The `complete`event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare most consumers should not need to concern themselves further. If you must ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.

트랜잭션에서 적합한 범위와 모드를 사용함으로써 자료 접근을 빠르게 할 수 있습니다. 여기 두개의 팁이 있습니다:

- 범위를 지정할 때, 필요한 객체 저장소만 정하십시오. 이 방식은 겹치지 않는 범위의 트랜잭션들을 동시에 처리할 수 있게 해줍니다.
- `readwrite` 모드는 필요할때만 사용하십시오. 겹친 범위에 대해 `readonly` 트랜잭션은 동시에 실행될 수 있지만, `readwrite` 트랜잭션은 객체 저장소에 오직 한개만 작동할 수 있습니다. 더 자세한 내용은 [Basic Concepts](/ko/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB) 글에 있는 _[transactions](/ko/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#Database)_ 정의를 참고하십시오.

### 데이터베이스에 데이터 추가

데이터베이스를 만들었다면, 데이터를 추가하고 싶을겁니다. 데이터 추가는 이렇게 할 수 있습니다:

```js
var transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can just write:
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

`transaction()` 함수는 2개(1개는 옵션)의 인자를 받고 트랜잭션 객체를 반환합니다. 첫번째 인자는 트랜잭션이 확장될 객체 저장소의 목록입니다. 모든 객체 저장소에 대해 트랜잭션을 확장하고 싶다면 빈 배열을 넘겨줄 수 있습니다. 두번째 인자로 아무것도 넘기지 않는다면, 읽기 전용 트랜잭션이 반환됩니다. 쓰기 작업을 하고 싶다면, `readwrite` 플래그를 넘겨줘야 합니다.

계속해서 트랜잭션을 사용하기 위해서는 트랜잭션의 생애 주기에 대해 이해할 필요가 있습니다. 트랜잭션은 이벤트 루프(Event loop)와 매우 밀접하게 연관되어 있습니다. 만일 당신이 트랜잭션을 만들어 놓고 사용하지 않은 채 이벤트 루프로 돌아가게 된다면 트랜잭션은 비활성화 상태가 됩니다. 트랜잭션을 활성화 상태로 유지하는 유일한 방법은 트랜잭션에 그것을 요청하는 것 뿐입니다. 요청이 완료되면 DOM 이벤트가 발생하며, 트랜잭션에 대한 요청이 성공했다는 가정 하에 해당 요청에 대한 콜백(Callback)이 일어나기 전까지 트랜잭션의 수명을 연장할 수 있습니다. 만일 당신이 트랜잭션에 대한 연장 요청 없이 이벤트 루프로 돌아가려 한다면 트랜잭션은 곧 비활성화가 된 후, 계속해서 비활성 상태를 유지할 것입니다. 트랜잭션에 대한 요청이 계속되는 한 트랜잭션은 활성화 상태를 유지합니다. 트랜잭션의 생애 주기는 매우 단순하지만 당신이 이에 적응하는 데에는 다소 시간이 걸릴 수 있습니다. 다른 예제 몇 개를 더 확인하는 것을 권장합니다. 만일 당신의 프로그램에서 `TRANSACTION_INACTIVE_ERR` 라는 에러 코드가 나타나기 시작한다면, 뭔가 잘못되기 시작한 것입니다.

트랜잭션은 다음 세 개의 DOM 이벤트를 받을 수 있습니다: `error`, `abort`, 그리고 `complete`. 우리는 `error` 이벤트가 어떻게 버블링되는지에 대해 이미 이야기했으며, 이에 따라서 트랜잭션은 요청으로부터 발생하는 모든 에러 이벤트를 받아들입니다. 여기서 더욱 애매한 점은 에러를 처리하는 가장 기본적인 방식이 에러가 발생한 트랜잭션을 취소하는 것이라는 점입니다. 당신이 우선 `stopPropagation()`을 이용해 에러를 처리하고 난 후에 다른 행동을 하려고 해도, 전체 트랜잭션은 이미 롤백된 상황일 것입니다. 이러한 디자인은 당신이 에러 처리에 대해서 생각하도록 강제하지만, 만일 잘 정제된 에러 핸들링을 모든 트랜잭션에 만드는 것이 너무 번거롭다면 당신은 데이터베이스에 항상 캐치올 에러 핸들러(catchall error handler)를 추가하도록 설정할 수 있습니다. 당신이 만약 에러를 제어하지 않았거나 트랜잭션에서 `abort()`를 호출할 경우, 트랜잭션은 롤백되고 `abort` 이벤트는 취소될 것입니다. 반면, 트랜잭션에 대한 모든 요청이 정상적으로 처리되었을 경우엔 `complete` 이벤트를 반환합니다. 만일 당신이 매우 많은 데이터베이스 작업을 수행하고 있다면, 데이터베이스에 대한 개별 요청을 추적하는것보단 트랜잭션을 추적하는 것이 정신 건강에 이로울 것입니다.

이제 당신이 트랜잭션을 만들었고, 당신은 그 트랜잭션을 통해 오브젝트 스토어에 접근해야 하는 상황이라고 가정해 봅시다. 트랜잭션은 당신이 트랜잭션을 만들 때 지정한 오브젝트 스토어만 사용할 수 있게 해줍니다. 그러고 나면 당신은 원하는 모든 데이터를 그곳에 추가할 수 있습니다.

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
    // event.target.result == customerData[i].ssn
  };
}
```

호출에서 `add()`까지의 과정에서 생성된 트랜잭션의 `result`는 추가된 데이터의 키와 같습니다. 따라서 이 경우, 오브젝트 스토어가 `ssn` 속성을 키 패스로 사용하기 때문에 추가된 데이터의 `ssn` 속성과 같은 값을 가질 것입니다. `add()` 함수를 사용할 때 같은 키를 가진 데이터가 데이터베이스 안에 존재하지 않아야 한다는 점에 주의하십시오. 만일 당신이 이미 존재하는 데이터를 수정하고 싶거나, 혹은 이미 데이터가 있건 말건 상관 없다면 문서 아래쪽의 [Updating an entry in the database](#updating_an_entry_in_the_database) 부분에서 소개하는 `put()` 함수를 사용하십시오.

### 데이터베이스로부터 데이터를 지우기

데이터 삭제는 아주 익숙한 그 방식대로 하시면 됩니다:

```js
var request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = function (event) {
  // It's gone!
};
```

### 데이터베이스로부터 데이터 가져오기

이제 데이터베이스 안에 정보도 들어 있겠다, 몇 가지 방법을 통해 정보를 가져와 봅시다. 가장 먼저, 가장 단순한 `get()`을 사용해 봅시다. 데이터를 가져오기 위해 당신은 키를 제공해야합니다. 이렇게:

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

"단순히" 가져오는 것 치고는 코드가 좀 많군요. 당신이 데이터베이스 수준에서 에러를 제어하고 있다면, 아래와 같이 간략화할 수도 있습니다:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = function (event) {
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

어떻게 작동하는지 보이시나요? 오브젝트 스토어가 하나 뿐이기 때문에, 당신의 트랜잭션에서 필요한 오브젝트 스토어들의 리스트를 보낼 필요 없이 그냥 이름만 String으로 보내면 됩니다. 또한, 당신은 데이터베이스에서 읽기만 했기 때문에, `"readwrite"` 트랜잭션은 필요하지 않습니다. `transaction()`을 특정한 모드 설정 없이 그냥 부를 경우엔 기본적으로 `"readonly"` 트랜잭션이 됩니다. 또 하나 신비한 점은 당신은 요청한 오브젝트를 따로 특정한 변수에 저장하지 않았다는 점입니다. DOM 이벤트는 요청을 대상으로 할 때 이벤트를 사용하여 `result`의 값을 불러올 수 있습니다.

범위 제한과 모드 설정에 따라 데이터 접근 속도를 빠르게 할 수 있다는 점을 주목하십시오. 여기 몇개의 팁이 있습니다:

- 범위([scope](#scope))를 정의할 때, 당신이 필요로 하는 오브젝트 스토어만 지정하십시오. 이렇게 하면, 범위가 중복되지 않는 한 여러 개의 트랜잭션을 동시에 실행할 수 있습니다.
- `readwrite` 모드는 반드시 필요할 때만 사용하십시오. `readonly` 모드는 범위가 중복되더라도 동시에 실행 가능하지만, `readwrite` 모드는 한 오브젝트 스토어에 대해 동시에 하나밖에 실행할 수 없습니다. 더욱 자세한 정보는, 기본 개념서의 트랜잭션의 정의 항목([transactions in the Basic Concepts article](/ko/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_transaction))을 참조하십시오.

### 데이터베이스의 내용을 업데이트하기

이제 우리는 몇 개의 데이터를 꺼냈습니다. 이 데이터를 업데이트하고 다시 IndexedDB에 집어넣는 것은 매우 간단합니다. 이전 예제를 약간 업데이트해 봅시다:

```js
var objectStore = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function (event) {
  // Handle errors!
};
request.onsuccess = function (event) {
  // Get the old value that we want to update
  var data = event.target.result;

  // update the value(s) in the object that you want to change
  data.age = 42;

  // Put this updated object back into the database.
  var requestUpdate = objectStore.put(data);
  requestUpdate.onerror = function (event) {
    // Do something with the error
  };
  requestUpdate.onsuccess = function (event) {
    // Success - the data is updated!
  };
};
```

이제 우리는 `objectStore`를 만들고 사회보장번호(SSN)가 (`444-44-4444`)인 고객 레코드를 요청했습니다. 그리고 우리는 그 결과를 변수(`data`)에 넣고, 이 객체의 `age` 속성을 업데이트하여, 두 번째 요청(`requestUpdate`)을 만들어 고객 레코드를 다시 `objectStore`에 집어넣어 이전 값을 덮어썼습니다.

> **참고:** 이 때 우리는 `readwrite` 모드를 사용해야 합니다. 우리가 지금 한 것은 단순히 데이터를 읽어오는 게 아니라, 다시 쓰는 것이기 때문입니다.

### 커서 사용하기

`get()`을 사용하려면 검색하려는 키를 알고 있어야 합니다. 객체 저장소(object store)의 모든 값을 탐색하려면 커서를 사용할 수 있습니다. 아래는 커서를 사용하는 방법입니다:

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

`openCursor()` 함수는 몇 가지 인자를 받습니다. 첫 번째로, 아래에서 곧 다룰 키 범위 객체(key range object)를 사용하여 검색할 항목의 범위를 제한할 수 있습니다. 두 번째로, 반복할 방향을 지정할 수 있습니다. 위 예제에서는 오름차순으로 모든 객체를 반복합니다. 커서들에 대한 성공 콜백함수는 약간 특이합니다. 커서 자체가 이벤트의 `결과` 입니다 (위 예에서는 축약 표현을 사용하므로 `event.target.result`입니다). 그런 다음 실제 키와 값을 커서 객체의 `key`와 `value` 속성에서 찾을 수 있습니다. 계속 진행하려면 커서에서 continue()를 호출해야 합니다. 데이터의 끝에 도달했거나 `openCursor()` 요청과 일치하는 항목이 없는 경우에도 여전히 성공 콜백이 호출되지만 `result` 속성은 `undefined`입니다.

커서를 사용하는 일반적인 패턴 중 하나는 객체 저장소의 모든 객체를 검색하여 array에 추가하는 것입니다. 다음과 같이 작성할 수 있습니다:

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

> **참고:** **Note**: Mozilla는 이런 경우를 처리하기 위해 getAll()을 구현했습니다(그리고 함께 구현한 `getAllKeys()`는 현재 about:config의 `dom.indexedDB.experimental` 설정 뒤에 숨겨져 있습니다.). 이들은 IndexedDB 표준은 아니기 때문에 추후 사라질 수 있습니다. 하지만 우리는 이것들이 유용하다고 생각하기 때문에 포함시켰습니다. 다음 코드는 위 코드와 정확히 같이 동작합니다.:`js objectStore.getAll().onsuccess = function(event) { alert("Got all customers: " + event.target.result); };` 커서의 `value` 속성을 살펴보는 것은 성능상의 비용이 발생합니다. 왜냐하면 해당 객체는 지연 생성되기 때문입니다. 예를 들어 `getAll()` 을 사용할 때, Gecko는 모든 객체를 한 번에 생성합니다. 만약 키 각각을 보는 것에만 관심이 있다면, 커서를 사용하는 것이 `getAll()`을 사용하는 것 보다 훨씬 효율적입니다. 반면에 객체 저장소의 모든 객체 배열을 가져오려는 경우에는 `getAll()`을 사용하세요.

### index 사용하기

고객 데이터를 저장할 때 사회보장번호(SSN)를 키로 사용하는 것은 논리적입니다. 왜냐하면 SSN은 각 개인을 고유 식별하기 때문입니다. (이것이 사생활 보호에 좋은 생각인지는 이 아티클의 범위를 벗어난 다른 문제입니다.) 그러나 이름으로 고객을 찾아야 하는 경우 데이터베이스의 모든 SSN을 반복하여 올바른 SSN을 찾아야 합니다. 이러한 방식으로 검색하면 매우 느리기 때문에 인덱스를 대신 사용할 수 있습니다.

```js
// 먼저, request.onupgradeneeeded로 index를 생성해주세요:
// objectStore.createIndex("name", "name");
// 그렇지 않을 경우 DOMException이 발생합니다.

var index = objectStore.index("name");

index.get("Donna").onsuccess = function (event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};
```

"name"은 고유하지 않기 때문에 `name`값이 `"Donna"`로 설정된 항목이 하나 이상 있을 수 있습니다. 이 경우 항상 가장 낮은 키 값인 결과 하나만 얻게 됩니다.

특정 `name`값을 가진 모든 항목에 액세스해야 하는 경우 cursor를 사용할 수 있습니다. 인덱스들 마다 두 가지 다른 종류의 cursor를 열 수 있습니다. 일반적인 커서는 인덱스 속성을 객체 저장소의 객체에 매핑합니다. 그리고 키 커서는 객체를 객체 저장소에 저장하기 위해 사용된 키에 인덱스를 매핑합니다. 이러한 차이점은 다음과 같습니다.:

```js
// 일반적인 커서를 사용해서 고객 레코드 전체를 가져오기
index.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key는 "Bill"과 같은 이름이며, cursor.value는 객체 전체를 의미합니다.
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

// 키 커서를 사용해서 고객 레코드 객체 키를 가져오기
index.openKeyCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key는 "Bill"과 같은 이름이며, cursor.value는 사회보장번호(SSN)입니다.
    // 저장된 객체의 나머지 부분을 직접적으로 가져올 방법은 없습니다.
    alert("Name: " + cursor.key + ", SSN: " + cursor.primaryKey);
    cursor.continue();
  }
};
```

### 커서들의 범위와 방향을 특정하기

`openCursor()` 또는 `openKeyCursor()`의 첫 번째 인자로 사용할 수 있는 키 범위 객체(key range object)를 사용하여 커서에서 볼 값의 범위를 제한할 수 있습니다. 단일 키만 허용하도록 하는 key range를 만들거나 하한 또는 상한값이 있는 key range를 만들 수 있습니다. 또는 하한 및 상한 값이 모두있는 key range를 만들 수 있습니다. 범위는 "closed"(즉, key range가 주어진 값까지 포함)거나 "open"(즉, key range가 주어진 값은 포함하지 않음)일 수 있습니다. 다음은 key range가 작동하는 방식입니다:

```js
// "Donna"만을 조회
var singleKeyRange = IDBKeyRange.only("Donna");

// "Bill"을 포함한, "Bill" 이후 모든 값을 조회
var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// "Bill"을 제외한, "Bill" 다음 모든 값을 조회
var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// "Donna"를 제외한, 이전 모든 값을 조회
var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// "Donna"를 제외한, "Bill"과 "Donna" 사이 모든 값을 조회
var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

// 위 키 범위 중 하나를 사용하려면, openCursor()/openKeyCursor()에 첫 번째 인자로 넘겨주세요.
index.openCursor(boundKeyRange).onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // 조회된 값으로 무언가 수행한다.
    cursor.continue();
  }
};
```

Sometimes you may want to iterate in descending order rather than in ascending order (the default direction for all cursors). Switching direction is accomplished by passing `prev` to the `openCursor()` function:

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

If you just want to specify a change of direction but not constrain the results shown, you can just pass in null as the first argument:

```js
objectStore.openCursor(null, "prev").onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Since the "name" index isn't unique, there might be multiple entries where `name` is the same. Note that such a situation cannot occur with object stores since the key must always be unique. If you wish to filter out duplicates during cursor iteration over indexes, you can pass `nextunique` (or `prevunique` if you're going backwards) as the direction parameter. When `nextunique` or `prevunique` is used, the entry with the lowest key is always the one returned.

```js
index.openKeyCursor(null, "nextunique").onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

Please see "[IDBCursor Constants](/ko/docs/Web/API/IDBCursor?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBCursor#Constants)" for the valid direction arguments.

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

You should also listen for `VersionError` errors to handle the situation where already opened apps may initiate code leading to a new attempt to open the database, but using an outdated version.

## Security

IndexedDB uses the same-origin principle, which means that it ties the store to the origin of the site that creates it (typically, this is the site domain or subdomain), so it cannot be accessed by any other origin.

Third party window content (e.g. {{htmlelement("iframe")}} content) can access the IndexedDB store for the origin it is embedded into, unless the browser is set to [never accept third party cookies](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) (see [Firefox bug 1147821](https://bugzil.la/1147821).)

## Warning about browser shutdown

When the browser shuts down (because the user chose the Quit or Exit option), the disk containing the database is removed unexpectedly, or permissions are lost to the database store, the following things happen:

1. Each transaction on every affected database (or all open databases, in the case of browser shutdown) is aborted with an `AbortError`. The effect is the same as if {{domxref("IDBTransaction.abort()")}} is called on each transaction.
2. Once all of the transactions have completed, the database connection is closed.
3. Finally, the {{domxref("IDBDatabase")}} object representing the database connection receives a {{event("close")}} event. You can use the {{domxref("IDBDatabase.onclose")}} event handler to listen for these events, so that you know when a database is unexpectedly closed.

The behavior described above is new, and is only available as of the following browser releases: Firefox 50, Google Chrome 31 (approximately).

Prior to these browser versions, the transactions are aborted silently, and no {{event("close")}} event is fired, so there is no way to detect an unexpected database closure.

Since the user can exit the browser at any time, this means that you cannot rely upon any particular transaction to complete, and on older browsers, you don't even get told when they don't complete. There are several implications of this behavior.

First, you should take care to always leave your database in a consistent state at the end of every transaction. For example, suppose that you are using IndexedDB to store a list of items that you allow the user to edit. You save the list after the edit by clearing the object store and then writing out the new list. If you clear the object store in one transaction and write the new list in another transaction, there is a danger that the browser will close after the clear but before the write, leaving you with an empty database. To avoid this, you should combine the clear and the write into a single transaction.

Second, you should never tie database transactions to unload events. If the unload event is triggered by the browser closing, any transactions created in the unload event handler will never complete. An intuitive approach to maintaining some information across browser sessions is to read it from the database when the browser (or a particular page) is opened, update it as the user interacts with the browser, and then save it to the database when the browser (or page) closes. However, this will not work. The database transactions will be created in the unload event handler, but because they are asynchronous they will be aborted before they can execute.

In fact, there is no way to guarantee that IndexedDB transactions will complete, even with normal browser shutdown. See [Firefox bug 870645](https://bugzil.la/870645). As a workaround for this normal shutdown notification, you might track your transactions and add a `beforeunload` event to warn the user if any transactions have not yet completed at the time of unloading.

At least with the addition of the abort notifications and {{domxref("IDBDatabase.onclose")}}, you can know when this has happened.

## Locale-aware sorting

Mozilla has implemented the ability to perform locale-aware sorting of IndexedDB data in Firefox 43+. By default, IndexedDB didn't handle internationalization of sorting strings at all, and everything was sorted as if it were English text. For example, b, á, z, a would be sorted as:

- a
- b
- z
- á

which is obviously not how users want their data to be sorted — Aaron and Áaron for example should go next to one another in a contacts list. Achieving proper international sorting therefore required the entire dataset to be called into memory, and sorting to be performed by client-side JavaScript, which is not very efficient.

This new functionality enables developers to specify a locale when creating an index using {{domxref("IDBObjectStore.createIndex()")}} (check out its parameters.) In such cases, when a cursor is then used to iterate through the dataset, and you want to specify locale-aware sorting, you can use a specialized {{domxref("IDBLocaleAwareKeyRange")}}.

{{domxref("IDBIndex")}} has also had new properties added to it to specify if it has a locale specified, and what it is: `locale` (returns the locale if any, or null if none is specified) and `isAutoLocale` (returns `true` if the index was created with an auto locale, meaning that the platform's default locale is used, `false` otherwise.)

> **참고:** This feature is currently hidden behind a flag — to enable it and experiment, go to <a>about:config</a> and enable `dom.indexedDB.experimental`.

## Full IndexedDB example

### HTML Content

```html
<script
  type="text/javascript"
  src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<h1>IndexedDB Demo: storing blobs, e-publication example</h1>
<div class="note">
  <p>Works and tested with:</p>
  <div id="compat"></div>
</div>

<div id="msg"></div>

<form id="register-form">
  <table>
    <tbody>
      <tr>
        <td>
          <label for="pub-title" class="required"> Title: </label>
        </td>
        <td>
          <input type="text" id="pub-title" name="pub-title" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-biblioid" class="required">
            Bibliographic ID:<br />
            <span class="note">(ISBN, ISSN, etc.)</span>
          </label>
        </td>
        <td>
          <input type="text" id="pub-biblioid" name="pub-biblioid" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-year"> Year: </label>
        </td>
        <td>
          <input type="number" id="pub-year" name="pub-year" />
        </td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <label for="pub-file"> File image: </label>
        </td>
        <td>
          <input type="file" id="pub-file" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-file-url">
            Online-file image URL:<br />
            <span class="note">(same origin URL)</span>
          </label>
        </td>
        <td>
          <input type="text" id="pub-file-url" name="pub-file-url" />
        </td>
      </tr>
    </tbody>
  </table>

  <div class="button-pane">
    <input type="button" id="add-button" value="Add Publication" />
    <input type="reset" id="register-form-reset" />
  </div>
</form>

<form id="delete-form">
  <table>
    <tbody>
      <tr>
        <td>
          <label for="pub-biblioid-to-delete">
            Bibliographic ID:<br />
            <span class="note">(ISBN, ISSN, etc.)</span>
          </label>
        </td>
        <td>
          <input
            type="text"
            id="pub-biblioid-to-delete"
            name="pub-biblioid-to-delete" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="key-to-delete">
            Key:<br />
            <span class="note">(for example 1, 2, 3, etc.)</span>
          </label>
        </td>
        <td>
          <input type="text" id="key-to-delete" name="key-to-delete" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="button-pane">
    <input type="button" id="delete-button" value="Delete Publication" />
    <input
      type="button"
      id="clear-store-button"
      value="Clear the whole store"
      class="destructive" />
  </div>
</form>

<form id="search-form">
  <div class="button-pane">
    <input
      type="button"
      id="search-list-button"
      value="List database content" />
  </div>
</form>

<div>
  <div id="pub-msg"></div>
  <div id="pub-viewer"></div>
  <ul id="pub-list"></ul>
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
    ["Firefox", ">= 16.0"],
    [
      "Google Chrome",
      ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support",
    ],
  ];
  var compat = $("#compat");
  compat.empty();
  compat.append('<ul id="compat-list"></ul>');
  COMPAT_ENVS.forEach(function (val, idx, array) {
    $("#compat-list").append("<li>" + val[0] + ": " + val[1] + "</li>");
  });

  const DB_NAME = "mdn-demo-indexeddb-epublications";
  const DB_VERSION = 1; // Use a long long for this value (don't use a float)
  const DB_STORE_NAME = "publications";

  var db;

  // Used to keep track of which view is displayed to avoid uselessly reloading it
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
      var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("biblioid", "biblioid", { unique: true });
      store.createIndex("title", "title", { unique: false });
      store.createIndex("year", "year", { unique: false });
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
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.clear();
    req.onsuccess = function (evt) {
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
    req.onsuccess = function (evt) {
      var value = evt.target.result;
      if (value) success_callback(value.blob);
    };
  }

  /**
   * @param {IDBObjectStore=} store
   */
  function displayPubList(store) {
    console.log("displayPubList");

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readonly");

    var pub_msg = $("#pub-msg");
    pub_msg.empty();
    var pub_list = $("#pub-list");
    pub_list.empty();
    // Resetting the iframe so that it doesn't display previous content
    newViewerFrame();

    var req;
    req = store.count();
    // Requests are executed in the order in which they were made against the
    // transaction, and their results are returned in the same order.
    // Thus the count text below will be displayed before the actual pub list
    // (not that it is algorithmically important in this case).
    req.onsuccess = function (evt) {
      pub_msg.append(
        "<p>There are <strong>" +
          evt.target.result +
          "</strong> record(s) in the object store.</p>",
      );
    };
    req.onerror = function (evt) {
      console.error("add error", this.error);
      displayActionFailure(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function (evt) {
      var cursor = evt.target.result;

      // If the cursor is pointing at something, ask for the data
      if (cursor) {
        console.log("displayPubList cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;
          var list_item = $(
            "<li>" +
              "[" +
              cursor.key +
              "] " +
              "(biblioid: " +
              value.biblioid +
              ") " +
              value.title +
              "</li>",
          );
          if (value.year != null) list_item.append(" - " + value.year);

          if (
            value.hasOwnProperty("blob") &&
            typeof value.blob != "undefined"
          ) {
            var link = $('<a href="' + cursor.key + '">File</a>');
            link.on("click", function () {
              return false;
            });
            link.on("mouseenter", function (evt) {
              setInViewer(evt.target.getAttribute("href"));
            });
            list_item.append(" / ");
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
    var viewer = $("#pub-viewer");
    viewer.empty();
    var iframe = $("<iframe />");
    viewer.append(iframe);
    return iframe;
  }

  function setInViewer(key) {
    console.log("setInViewer:", arguments);
    key = Number(key);
    if (key == current_view_pub_key) return;

    current_view_pub_key = key;

    var store = getObjectStore(DB_STORE_NAME, "readonly");
    getBlob(key, store, function (blob) {
      console.log("setInViewer blob:", blob);
      var iframe = newViewerFrame();

      // It is not possible to set a direct link to the
      // blob to provide a mean to directly download it.
      if (blob.type == "text/html") {
        var reader = new FileReader();
        reader.onload = function (evt) {
          var html = evt.target.result;
          iframe.load(function () {
            $(this).contents().find("html").html(html);
          });
        };
        reader.readAsText(blob);
      } else if (blob.type.indexOf("image/") == 0) {
        iframe.load(function () {
          var img_id = "image-" + key;
          var img = $('<img id="' + img_id + '"/>');
          $(this).contents().find("body").html(img);
          var obj_url = window.URL.createObjectURL(blob);
          $(this)
            .contents()
            .find("#" + img_id)
            .attr("src", obj_url);
          window.URL.revokeObjectURL(obj_url);
        });
      } else if (blob.type == "application/pdf") {
        $("*").css("cursor", "wait");
        var obj_url = window.URL.createObjectURL(blob);
        iframe.load(function () {
          $("*").css("cursor", "auto");
        });
        iframe.attr("src", obj_url);
        window.URL.revokeObjectURL(obj_url);
      } else {
        iframe.load(function () {
          $(this).contents().find("body").html("No view available");
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
   *   the same origin as the web site/app this code is deployed on.
   */
  function addPublicationFromUrl(biblioid, title, year, url) {
    console.log("addPublicationFromUrl:", arguments);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    // Setting the wanted responseType to "blob"
    // http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
    xhr.responseType = "blob";
    xhr.onload = function (evt) {
      if (xhr.status == 200) {
        console.log("Blob retrieved");
        var blob = xhr.response;
        console.log("Blob:", blob);
        addPublication(biblioid, title, year, blob);
      } else {
        console.error(
          "addPublicationFromUrl error:",
          xhr.responseText,
          xhr.status,
        );
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
    if (typeof blob != "undefined") obj.blob = blob;

    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == "DataCloneError")
        displayActionFailure(
          "This engine doesn't know how to clone a Blob, " + "use Firefox",
        );
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      displayPubList(store);
    };
    req.onerror = function () {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }

  /**
   * @param {string} biblioid
   */
  function deletePublicationFromBib(biblioid) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.index("biblioid");
    req.get(biblioid).onsuccess = function (evt) {
      if (typeof evt.target.result == "undefined") {
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

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readwrite");

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function (evt) {
      var record = evt.target.result;
      console.log("record:", record);
      if (typeof record == "undefined") {
        displayActionFailure("No matching record found");
        return;
      }
      // Warning: The exact same key used for creation needs to be passed for
      // the deletion. If the key was a Number for creation, then it needs to
      // be a Number for deletion.
      req = store.delete(key);
      req.onsuccess = function (evt) {
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
    msg = typeof msg != "undefined" ? "Success: " + msg : "Success";
    $("#msg").html('<span class="action-success">' + msg + "</span>");
  }
  function displayActionFailure(msg) {
    msg = typeof msg != "undefined" ? "Failure: " + msg : "Failure";
    $("#msg").html('<span class="action-failure">' + msg + "</span>");
  }
  function resetActionStatus() {
    console.log("resetActionStatus ...");
    $("#msg").empty();
    console.log("resetActionStatus DONE");
  }

  function addEventListeners() {
    console.log("addEventListeners");

    $("#register-form-reset").click(function (evt) {
      resetActionStatus();
    });

    $("#add-button").click(function (evt) {
      console.log("add ...");
      var title = $("#pub-title").val();
      var biblioid = $("#pub-biblioid").val();
      if (!title || !biblioid) {
        displayActionFailure("Required field(s) missing");
        return;
      }
      var year = $("#pub-year").val();
      if (year != "") {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (isNaN(year)) {
          displayActionFailure("Invalid year");
          return;
        }
        year = Number(year);
      } else {
        year = null;
      }

      var file_input = $("#pub-file");
      var selected_file = file_input.get(0).files[0];
      console.log("selected_file:", selected_file);
      // Keeping a reference on how to reset the file input in the UI once we
      // have its value, but instead of doing that we rather use a "reset" type
      // input in the HTML form.
      //file_input.val(null);
      var file_url = $("#pub-file-url").val();
      if (selected_file) {
        addPublication(biblioid, title, year, selected_file);
      } else if (file_url) {
        addPublicationFromUrl(biblioid, title, year, file_url);
      } else {
        addPublication(biblioid, title, year);
      }
    });

    $("#delete-button").click(function (evt) {
      console.log("delete ...");
      var biblioid = $("#pub-biblioid-to-delete").val();
      var key = $("#key-to-delete").val();

      if (biblioid != "") {
        deletePublicationFromBib(biblioid);
      } else if (key != "") {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (key == "" || isNaN(key)) {
          displayActionFailure("Invalid key");
          return;
        }
        key = Number(key);
        deletePublication(key);
      }
    });

    $("#clear-store-button").click(function (evt) {
      clearObjectStore();
    });

    var search_button = $("#search-list-button");
    search_button.click(function (evt) {
      displayPubList();
    });
  }

  openDb();
  addEventListeners();
})(); // Immediately-Invoked Function Expression (IIFE)
```

{{ LiveSampleLink('Full_IndexedDB_example', "Test the online live demo") }}

## See also

Further reading for you to find out more information if desired.

### Reference

- [IndexedDB API Reference](/en/IndexedDB)
- [Indexed Database API Specification](http://www.w3.org/TR/IndexedDB/)
- IndexedDB [interface files](https://mxr.mozilla.org/mozilla-central/find?text=&string=dom%2FindexedDB%2F.*%5C.idl&regexp=1) in the Firefox source code

### Tutorials and guides

- [Databinding UI Elements with IndexedDB](http://www.html5rocks.com/en/tutorials/indexeddb/uidatabinding/)
- [IndexedDB — The Store in Your Browser](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)

### Libraries

- [localForage](https://localforage.github.io/localForage/): A Polyfill providing a simple name:value syntax for client-side data storage, which uses IndexedDB in the background, but falls back to WebSQL and then localStorage in browsers that don't support IndexedDB.
- [dexie.js](http://www.dexie.org/): A wrapper for IndexedDB that allows much faster code development via nice, simple syntax.
- [ZangoDB](https://github.com/erikolson186/zangodb): A MongoDB-like interface for IndexedDB that supports most of the familiar filtering, projection, sorting, updating and aggregation features of MongoDB.
- [JsStore](http://jsstore.net/): A simple and advanced IndexedDB wrapper having SQL like syntax.
