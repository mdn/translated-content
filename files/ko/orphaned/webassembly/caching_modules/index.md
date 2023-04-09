---
title: Caching compiled WebAssembly modules
slug: orphaned/WebAssembly/Caching_modules
original_slug: WebAssembly/Caching_modules
---

{{WebAssemblySidebar}}

> **경고:** Experimental {{jsxref("WebAssembly.Module")}} IndexedDB serialization은 브라우저로부터의 지원이 종료됩니다. [Firefox bug 1469395](https://bugzil.la/1469395) 와 [spec issue](https://github.com/WebAssembly/spec/issues/821)를 확인해 보세요.

캐싱은 앱 성능 향상에 유용합니다. 컴파일 된 WebAssembly 모듈을 클라이언트에 저장할 수 있으므로 매번 다운로드하거나 컴파일 할 필요가 없습니다. 이 문서에서는 이 문제를 해결하는 모범 사례에 대해 설명합니다.

## Caching via IndexedDB

[IndexedDB](/ko/docs/Web/API/IndexedDB_API)는 클라이언트 측에서 구조화 된 데이터를 저장하고 검색 할 수있는 트랜잭션 데이터베이스 시스템입니다. 텍스트, blobs 및 기타 유형의 복사 가능한 객체를 포함하여 응용 프로그램의 저장된 상태를 로컬에 저장하고 유지하는 데 적합합니다.

여기에는 컴파일 된 wasm 모듈이 포함됩니다. ({{jsxref("WebAssembly.Module")}} JavaScript 객체).

## Setting up a caching library

IndexedDB는 다소 오래된 API이기 때문에 캐싱 코드 작성 속도를 높이고 최신 API와 함께 더 잘 작동하도록 라이브러리 기능을 제공하고자했습니다.

우리의 [wasm-utils.js](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js) 라이브러리 스크립트에서 `instantiateCachedURL()`을 찾을 수 있습니다. 이 함수는 `url`의 wasm 모듈을 `dbVersion` 버전과 함께 가져 오고, 주어진 `importObject`로 인스턴스화한 다음 완료된 wasm 인스턴스로 promise resolving을 리턴합니다. 또한 컴파일 된 wasm 모듈을 캐시하기위한 데이터베이스 작성, 데이터베이스에 새 모듈 저장 시도 및 데이터베이스에서 이전에 캐시 된 모듈 검색하여 다시 다운로드하지 않게 해줍니다.

> **참고:** 지정된 URL뿐만 아니라 전체 사이트의 wasm 캐시는 함수에 전달 된 지정된 `dbVersion`에 의해 버전이 지정됩니다. wasm 모듈 코드가 업데이트되거나 URL이 변경되면 `dbVersion`을 업데이트해야합니다. 이후 `instantiateCachedURL()`을 호출하면 전체 캐시가 지워져 오래된 모듈을 사용하지 않도록 해줍니다.

이 함수는 몇 가지 필수 상수를 정의하여 시작합니다.

```js
function instantiateCachedURL(dbVersion, url, importObject) {
  const dbName = 'wasm-cache';
  const storeName = 'wasm-cache';
```

### Setting up the database

`instantiateCachedURL()` 내부에 포함 된 첫 번째 도우미 함수인 `openDatabase()`은 wasm 모듈을 저장하기위한 객체 저장소를 만들고 `dbVersion`이 업데이트 된 경우 데이터베이스 지우기도합니다. 새 데이터베이스를 resolve한 promise를 반환합니다.

```js
  function openDatabase() {
    return new Promise((resolve, reject) => {
      var request = indexedDB.open(dbName, dbVersion);
      request.onerror = reject.bind(null, 'Error opening wasm cache database');
      request.onsuccess = () => { resolve(request.result) };
      request.onupgradeneeded = event => {
        var db = request.result;
        if (db.objectStoreNames.contains(storeName)) {
            console.log(`Clearing out version ${event.oldVersion} wasm cache`);
            db.deleteObjectStore(storeName);
        }
        console.log(`Creating version ${event.newVersion} wasm cache`);
        db.createObjectStore(storeName)
      };
    });
  }
```

### Looking up modules in the database

다음 함수 `lookupInDatabase()`는 위에 작성한 객체 저장소에서 주어진 URL을 찾는 간단한 promise기반 작업을 제공합니다. resolve - 저장된 컴파일 된 모듈, reject - error.

```js
  function lookupInDatabase(db) {
    return new Promise((resolve, reject) => {
      var store = db.transaction([storeName]).objectStore(storeName);
      var request = store.get(url);
      request.onerror = reject.bind(null, `Error getting wasm module ${url}`);
      request.onsuccess = event => {
        if (request.result)
          resolve(request.result);
        else
          reject(`Module ${url} was not found in wasm cache`);
      }
    });
  }
```

### Storing and instantiating modules

다음으로, 지정된 wasm 모듈을 주어진 데이터베이스에 저장하기 위해 비동기 연산을 시작하는 함수 `storeInDatabase()`를 정의합니다.

```js
  function storeInDatabase(db, module) {
    var store = db.transaction([storeName], 'readwrite').objectStore(storeName);
    var request = store.put(module, url);
    request.onerror = err => { console.log(`Failed to store in wasm cache: ${err}`) };
    request.onsuccess = err => { console.log(`Successfully stored ${url} in wasm cache`) };
  }
```

### Using our helper functions

모든 Promise 기반 헬퍼 함수를 정의하여 IndexedDB 캐시 조회의 핵심 로직을 표현할 수 있습니다. 우선 데이터베이스를 열어서, 주어진 `db`에 저장된 key `url`을 가진 컴파일 된 Module을 이미 가지고 있는지 확인합니다.

```js
  return openDatabase().then(db => {
    return lookupInDatabase(db).then(module => {
```

그렇게하면 주어진 import 객체로 인스턴스를 생성합니다.

```js
      console.log(`Found ${url} in wasm cache`);
      return WebAssembly.instantiate(module, importObject);
    },
```

그렇지 않다면 처음부터 컴파일 한 다음 컴파일 된 모듈을 다음 번에 사용할 URL용 key와 함께 데이터베이스에 저장합니다.

```js
    errMsg => {
      console.log(errMsg);
      return WebAssembly.instantiateStreaming(fetch(url)).then(results => {
        storeInDatabase(db, results.module);
        return results.instance;
      });
    })
  },
```

> **참고:** {{jsxref("WebAssembly.instantiate()")}}가 {{jsxref("WebAssembly.Module()", "Module")}}및 {{jsxref("WebAssembly.Instance()", "Instance")}}를 반환하는 것은 이러한 종류의 사용을위한 것입니다. 모듈은 컴파일 된 코드를 나타내며 IDB에 저장 / 검색되거나 [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage)를 통해 Workers간에 공유 될 수 있습니다. 인스턴스는 상태 저장이며 호출 가능한 JavaScript 함수를 포함하므로 저장 / 공유 할 수 없습니다.

데이터베이스를 여는 것이 실패한 경우 (예 : 사용 권한 또는 할당량으로 인해) 모듈을 가져 와서 간단히 컴파일하고 결과를 저장하지 마십시오 (데이터베이스를 저장할 데이터베이스가 없으므로).

```js
  errMsg => {
    console.log(errMsg);
    return WebAssembly.instantiateStreaming(fetch(url)).then(results => {
      return results.instance
    });
  });
}
```

## Caching a wasm module

위의 라이브러리 함수가 정의되면 wasm 모듈 인스턴스를 가져오고 내보낸 features를 사용할 때 (백그라운드에서 캐싱을 처리하는 동안) 다음 매개 변수를 사용하여 간단하게 호출 할 수 있습니다.

- 캐시 버전 - 위에서 설명한대로 wasm 모듈이 업데이트되거나 다른 URL로 이동하면 업데이트해야합니다.
- 인스턴스화 할 wasm 모듈의 URL.
- 가져오기 한 객체, (필요한 경우).

```js
const wasmCacheVersion = 1;

instantiateCachedURL(wasmCacheVersion, 'test.wasm').then(instance =>
  console.log("Instance says the answer is: " + instance.exports.answer())
).catch(err =>
  console.error("Failure to instantiate: " + err)
);
```

이 예제의 소스 코드는 GitHub에서 [indexeddb-cache.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/indexeddb-cache.html)로 찾을 수 있습니다 ([live](https://mdn.github.io/webassembly-examples/other-examples/indexeddb-cache.html)도 확인해보세요).

## Browser support

현재이 기술은 Firefox와 Edge에서 모두 작동합니다. 둘 다 WebAssembly 모듈의 구조화 된 복제를 지원하기 때문입니다.

Chrome은 WebAssembly 구조화 된 복제 지원 플래그 뒤에 구현 된 지원 기능을 가지고 있지만 일부 염려로 인해 기본적으로 이 기능을 사용하도록 설정하지 않았습니다 (예 : [discussion](https://github.com/WebAssembly/design/issues/972) 참조).

Safari는 아직 구현되지 않았습니다.
