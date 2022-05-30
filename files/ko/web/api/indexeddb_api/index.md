---
title: IndexedDB API
slug: Web/API/IndexedDB_API
tags:
  - API
  - Advanced
  - Database
  - IndexedDB
  - Landing
  - Reference
  - Storage
---
{{DefaultAPISidebar("IndexedDB")}}

IndexedDB는 파일이나 블롭 등 많은 양의 구조화된 데이터를 클라이언트에 저장하기 위한 로우 레벨 API입니다. IndexedDB API는 인덱스를 사용해 데이터를 고성능으로 탐색할 수 있습니다. [Web Storage](/ko/docs/Web/API/Web_Storage_API)는 적은 양의 데이터를 저장하는데 유용하지만 많은 양의 구조화된 데이터에는 적합하지 않은데, 이런 상황에서 IndexedDB를 사용할 수 있습니다. 이 페이지는 MDN에서 IndexedDB에 대한 내용을 다루는 시작 문서로 전체 API 참고서, 사용 안내서, 세부적인 브라우저 지원 상황, 그리고 핵심 개념에 대한 설명을 제공하는 링크를 찾을 수 있습니다.
{{AvailableInWorkers}}

> **참고:** IndexedDB API는 강력하지만, 간단하게 사용하기엔 좀 복잡해 보일 수 있습니다. 보다 단순한 API를 선호한다면, [See also](#see_also)섹션의 라이브러리를 알아보세요. IndexedDB를 좀 더 프로그래머 친화적으로 만들어줍니다.

## 핵심 개념과 사용

IndexedDB는 SQL을 사용하는 관계형 데이터베이스(RDBMS)와 같이 트랜잭션을 사용하는 데이터베이스 시스템입니다. 그러나 IndexedDB는 RDBMS의 고정컬럼 테이블 대신 JavaScript 기반의 객체지향 데이터베이스입니다. IndexedDB의 데이터는 인덱스 **키**를 사용해 저장하고 검색할 수 있으며, [구조화된 복사 알고리즘](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 지원하는 객체라면 모두 저장할 수 있습니다. 사용하려면 데이터베이스 스키마를 지정하고, 데이터베이스와 통신을 연 후에, 일련의 **트랜잭션**을 통해 데이터를 가져오거나 업데이트해야 합니다.

- [IndexedDB 주요 특성 및 기본 용어 (en-US)](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology)에 대해 더 알아보세요.
- [IndexedDB 사용하기](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB) 안내서를 통해 IndexedDB의 기초적인 비동기 사용법을 배워보세요.
- [서비스 워커를 사용해 PWA가 오프라인에서 동작하게 만들기](/ko/docs/Web/Progressive_web_apps/Offline_Service_workers) 문서에서 IndexedDB를 사용해 오프라인 데이터를 저장하고, 서비스 워커를 사용해 오프라인 자산을 저장하는 방법을 살펴보세요.

> **참고:** 대부분의 웹 저장 솔루션처럼, IndexedDB도 [동일 출처 정책](https://www.w3.org/Security/wiki/Same_Origin_Policy)을 따릅니다. 그렇기 때문에, 저장한 데이터는 같은 도메인에서만 접근할 수 있으며 다른 도메인에서는 접근할 수 없습니다.

### 동기와 비동기

IndexedDB 작업은 애플리케이션 블록을 방지하기 위해 모두 비동기로 이뤄집니다.

### 저장 용량 한도와 제거 기준

하나의 종류 또는 다른 종류의 데이터를 클라이언트 측(즉, 로컬 디스크 상)에 저장하는 웹 기술은 많습니다. IndexedDB는 가장 일반적으로 언급되는 것입니다. 브라우저가 얼마만큼의 공간을 web data storage에 할당할지 그리고 용량이 한계에 도달했을 때 무엇을 지울지의 프로세스는 간단하지 않고, 브라우저마다 다릅니다. [브라우저 저장 공간 제한과 축출 기준 (en-US)](/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)을 Firefox의 경우에 이것이 어떻게 작동하는지 설명하려고 시도합니다.


## 인터페이스

데이터베이스에 접속하기 위해서는 [window](/ko/docs/Web/API/Window) 객체의 [`indexedDB` (en-US)](/en-US/docs/Web/API/indexedDB) 속성에서 [`open()` (en-US)](/en-US/docs/Web/API/IDBFactory/open)을 호춣해야 합니다. 이 메소드는 {{domxref("IDBRequest")}} 객체를 반환합니다. 비동기 작업은 {{domxref("IDBRequest")}} 객체에서 이벤트를 발생시켜 호출한 애플리케이션과 통신합니다.

### 데이터베이스에 연결하기

- {{domxref("IDBFactory")}}
  - : 데이터베이스 접속을 제공합니다. 이것은 전역 개체 {{domxref("indexedDB")}}에 의해 구현된 인터페이스이므로 API의 진입점입니다.
- {{domxref("IDBOpenDBRequest")}}
  - : 데이터베이스 열기 요청을 나타냅니다.
- {{domxref("IDBDatabase")}}
  - : 데이터베이스에 대한 연결을 나타냅니다. 이것은 데이터베이스에서 트랜잭션을 얻는 유일한 방법입니다.

### 데이터 검색 및 수정

- {{domxref("IDBTransaction")}}
  - : 트랜잭션을 나타냅니다. 데이터베이스에서 트랜잭션을 만들고, 범위(예: 액세스하려는 개체 저장소)를 지정하고 원하는 액세스 유형(읽기 전용 또는 읽기 쓰기)을 결정합니다.
- {{domxref("IDBRequest")}}
  - : 데이터베이스 요청을 처리하고 결과에 대한 액세스를 제공하는 일반 인터페이스입니다.
- {{domxref("IDBObjectStore")}}
  - : 기본 키를 통해 조회된 IndexedDB 데이터베이스의 데이터 집합에 대한 액세스를 허용하는 객체 저장소를 나타냅니다.
- {{domxref("IDBIndex")}}
  - : 또한 IndexedDB 데이터베이스의 데이터 하위 집합에 대한 액세스를 허용하지만 기본 키가 아닌 인덱스를 사용하여 레코드를 검색합니다. 이는 때때로 {{domxref("IDBObjectStore")}}를 사용하는 것보다 빠릅니다.
- {{domxref("IDBCursor")}}
  - : 객체 저장소 및 인덱스를 반복합니다.
- {{domxref("IDBCursorWithValue")}}
  - : 객체 저장소 및 인덱스를 반복하고 커서의 현재 값을 반환합니다.
- {{domxref("IDBKeyRange")}}
  - : 특정 범위의 데이터베이스에서 데이터를 검색할 때 사용할 수 있는 키 범위를 정의합니다.
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : 특정 인덱스에 대해 지정된 로케일 규칙에 따라 정렬된 특정 범위의 데이터베이스에서 데이터를 검색하는 데 사용할 수 있는 키 범위를 정의합니다. ([`createIndex()`'의 선택적 파라미터 (en-US)](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters)를 보세요) 이 인터페이스는 2.0 사양의 일부가 아닙니다.

### 사용자 정의 이벤트 인터페이스

이 사양은 다음 사용자 정의 인터페이스로 이벤트를 발생시킵니다.

- {{domxref("IDBVersionChangeEvent")}}
  - : `IDBVersionChangeEvent` 인터페이스는 {{domxref("IDBOpenDBRequest.upgradeneeded_event", "IDBOpenDBRequest.onupgradeneeded")}} 이벤트 핸들러 함수의 결과로 데이터베이스 버전이 변경되었음을 나타냅니다.

## 예시

- [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/)): 참조 문서의 예제에 대한 참조 응용 프로그램입니다.

## 명세

| 명세                                                      |
| -------------------------------------------------------- |
| [Indexed Database API](https://w3c.github.io/IndexedDB/) |

## See also

- [localForage](https://localforage.github.io/localForage/): Polyfill은 백그라운드에서 IndexedDB를 사용하는 클라이언트 측 데이터 저장을 위한 간단한 이름:값 구문을 제공합니다. 그러나 IndexedDB를 지원하지 않는 브라우저에서는 WebSQL로 폴백한 다음 localStorage로 폴백합니다.
- [Dexie.js](https://dexie.org/): 멋지고 간단한 구문을 통해 훨씬 더 빠른 코드 개발을 허용하는 IndexedDB용 래퍼입니다
- [ZangoDB](https://github.com/erikolson186/zangodb): MongoDB의 익숙한 필터링, 프로젝션, 정렬, 업데이트 및 집계 기능을 대부분 지원하는 MongoDB와 유사한 IndexedDB용 인터페이스입니다.
- [JsStore](https://jsstore.net/): SQL과 같은 구문을 사용하는 IndexedDB 래퍼입니다.
- [MiniMongo](https://github.com/mWater/minimongo): http를 통한 서버 동기화와 함께 localstorage에서 지원하는 클라이언트 측 in-memory mongodb입니다. MiniMongo는 MeteorJS에서 사용됩니다.
- [PouchDB](https://pouchdb.com): IndexedDB를 사용하여 브라우저에서 CouchDB의 클라이언트 측을 구현한 라이브러리입니다.
- [idb](https://www.npmjs.com/package/idb): IndexedDB API를 대부분 미러링하는 작은(\~1.15k) 라이브러리이지만 사용성에 큰 차이를 만드는 작은 개선 사항이 있습니다.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): IndexedDB로 구현된 매우 간단하고 작은(\~600B) promise 기반 keyval 저장소입니다.
- [sifrr-storage:](https://www.npmjs.com/package/@sifrr/storage) 클라이언트 측 키-값 저장을 위한 작은(\~2kB) promise 기반 라이브러리입니다. IndexedDB, localStorage, WebSQL, 쿠키와 함께 작동합니다. 우선 순위에 따라 사용 가능한 지원 스토리지를 자동으로 사용할 수 있습니다.
- [lovefield](https://github.com/google/lovefield): Lovefield는 웹 앱을 위한 관계형 데이터베이스입니다. JavaScript로 작성되었으며 크로스 브라우저에서 작동합니다. 빠르고 안전하며 사용하기 쉬운 SQL과 유사한 API를 제공합니다.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): 작고 (\~1.3kB) 정적 타입 유형의 promise 기반 API와 자동 마이그레이션의 기능이 있는 라이브러리입니다.
