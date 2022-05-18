---
title: IndexedDB
slug: Web/API/IndexedDB_API
tags:
  - API
  - Advanced
  - Database
  - IndexedDB
  - Landing
  - Reference
  - Storage
translation_of: Web/API/IndexedDB_API
---
<div>{{DefaultAPISidebar("IndexedDB")}}</div>

<p><span class="seoSummary"><strong>IndexedDB</strong>는 파일이나 블롭 등 많은 양의 구조화된 데이터를 클라이언트에 저장하기 위한 로우 레벨 API입니다.</span> IndexedDB API는 인덱스를 사용해 데이터를 고성능으로 탐색할 수 있습니다. <a href="/ko/docs/Web/API/Web_Storage_API" title="ko/docs/DOM/Storage">Web Storage</a>는 적은 양의 데이터를 저장하는데 유용하지만 많은 양의 구조화된 데이터에는 적합하지 않은데, 이런 상황에서 IndexedDB를 사용할 수 있습니다. 이 페이지는 MDN에서 IndexedDB에 대한 내용을 다루는 시작 문서로 전체 API 참고서, 사용 안내서, 세부적인 브라우저 지원 상황, 그리고 핵심 개념에 대한 설명을 제공하는 링크를 찾을 수 있습니다.</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>참고</strong>: IndexedDB API는 강력하지만, 간단하게 사용하기엔 좀 복잡해 보일 수 있습니다. 보다 단순한 API를 선호한다면, IndexDB를 좀 더 프로그래머 친화적으로 만들어주는 <a href="https://localforage.github.io/localForage/">localForage</a>, <a href="http://www.dexie.org/">dexie.js</a>, <a href="https://github.com/erikolson186/zangodb">ZangoDB</a>, <a href="https://pouchdb.com/">PouchDB</a>, <a href="https://www.npmjs.com/package/idb">idb</a>, <a href="https://www.npmjs.com/package/idb-keyval">idb-keyval</a>, <a href="http://jsstore.net/">JsStore</a> 같은 라이브러리를 알아보세요.</p>
</div>

<h2 id="핵심_개념과_사용">핵심 개념과 사용</h2>

<p>IndexedDB는 SQL을 사용하는 관계형 데이터베이스(RDBMS)와 같이 트랜잭션을 사용하는 데이터베이스 시스템입니다. 그러나 IndexedDB는 RDBMS의 고정컬럼 테이블 대신 JavaScript 기반의 객체지향 데이터베이스입니다. IndexedDB의 데이터는 인덱스 <strong>키</strong>를 사용해 저장하고 회수할 수 있으며, <a href="/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">구조화된 복사 알고리즘</a>을 지원하는 객체라면 모두 저장할 수 있습니다. 사용하려면 데이터베이스 스키마를 지정하고, 데이터베이스와 통신을 연 후에, 일련의 <strong>트랜잭션</strong>을 통해 데이터를 가져오거나 업데이트해야 합니다.</p>

<ul>
 <li><a href="/ko/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB">IndexedDB의 기본 개념</a>에 대해 더 알아보세요.</li>
 <li><a href="/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB 사용하기</a> 안내서를 통해 IndexedDB의 기초적인 비동기 사용법을 배워보세요.</li>
 <li><a href="/ko/docs/Web/Progressive_web_apps/Offline_Service_workers">서비스 워커를 사용해 PWA가 오프라인에서 동작하게 만들기</a> 문서에서 IndexedDB를 사용해 오프라인 데이터를 저장하고, 서비스 워커를 사용해 오프라인 자산을 저장하는 방법을 살펴보세요.</li>
</ul>

<div class="note">
<p><strong>참고</strong>: 대부분의 웹 저장 솔루션처럼, IndexedDB도 <a href="https://www.w3.org/Security/wiki/Same_Origin_Policy">동일 출처 정책</a>을 따릅니다. 그렇기 때문에, 저장한 데이터는 같은 도메인에서만 접근할 수 있으며 다른 도메인에서는 접근할 수 없습니다.</p>
</div>

<h3 id="동기와_비동기">동기와 비동기</h3>

<p>IndexedDB 작업은 애플리케이션 블록을 방지하기 위해 모두 비동기로 이뤄집니다. 이전엔 동기적 API와 비동기적 API 모두 있었으며, 동기적 API는 <a href="/ko/docs/Web/API/Web_Workers_API/basic_usage">웹 워커</a>에서만 사용할 용도였습니다. 그러나 그 필요성에 대한 의문으로 인해 명세에서 제거된 상황입니다. 다만 충분한 수요가 있다면 동기적 API가 미래에 다시 추가될 수도 있습니다.</p>

<h3 id="저장_용량_한도와_제거_기준">저장 용량 한도와 제거 기준</h3>

<p>하나의 종류 또는 다른 종류의 데이터를 클라이언트 측(즉, 로컬 디스크 상)에 저장하는 웹 기술은 많습니다. IndexedDB는 가장 일반적으로 언급되는 것입니다. 브라우저가 얼마만큼의 공간을 web data storage에 할당할지 그리고 용량이 한계에 도달했을 때 무엇을 지울지의 프로세스는 간단하지 않고, 브라우저마다 다릅니다. <a href="/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria">브라우저 저장 공간 제한과 퇴거 기준</a>을 Firefox의 경우 이 작동 방식을 설명하려고 시도합니다.</p>

<h2 id="인터페이스">인터페이스</h2>

<p>To get access to a database, call <a href="https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory.open"><code>open()</code></a> on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/IDBEnvironment.indexedDB"><code>indexedDB</code></a> attribute of a <a href="https://developer.mozilla.org/en-US/docs/DOM/window">window</a> object. This method returns an {{domxref("IDBRequest")}} object; asynchronous operations communicate to the calling application by firing events on {{domxref("IDBRequest")}} objects.</p>

<h3 id="데이터베이스_연결">데이터베이스 연결</h3>

<dl>
 <dt>{{domxref("IDBEnvironment")}}</dt>
 <dd>Provides access to IndexedDB functionality. It is implemented by the {{domxref("window")}} and {{domxref("worker")}} objects. This interface isn't part of the 2.0 specification.</dd>
 <dt>{{domxref("IDBFactory")}}</dt>
 <dd>Provides access to a database. This is the interface implemented by the global object <a href="https://developer.mozilla.org/en-US/docs/Web/API/IDBEnvironment.indexedDB"><code>indexedDB</code></a> and is therefore the entry point for the API.</dd>
 <dt>{{domxref("IDBOpenDBRequest")}}</dt>
 <dd>Represents a request to open a database.</dd>
 <dt>{{domxref("IDBDatabase")}}</dt>
 <dd>Represents a connection to a database. It's the only way to get a transaction on the database.</dd>
</dl>

<h3 id="데이터_가져오기_및_수정하기">데이터 가져오기 및 수정하기</h3>

<dl>
 <dt>{{domxref("IDBTransaction")}}</dt>
 <dd>Represents a transaction. You create a transaction on a database, specify the scope (such as which object stores you want to access), and determine the kind of access (read only or readwrite) that you want.</dd>
 <dt>{{domxref("IDBRequest")}}</dt>
 <dd>Generic interface that handles database requests and provides access to results.</dd>
 <dt>{{domxref("IDBObjectStore")}}</dt>
 <dd>Represents an object store that allows access to a set of data in an IndexedDB database, looked up via primary key.</dd>
 <dt>{{domxref("IDBIndex")}}</dt>
 <dd>Also allows access to a subset of data in an IndexedDB database, but uses an index to retrieve the record(s) rather than the primary key. This is sometimes faster than using {{domxref("IDBObjectStore")}}.</dd>
 <dt>{{domxref("IDBCursor")}}</dt>
 <dd>Iterates over object stores and indexes.</dd>
 <dt>{{domxref("IDBCursorWithValue")}}</dt>
 <dd>Iterates over object stores and indexes and returns the cursor's current value.</dd>
 <dt>{{domxref("IDBKeyRange")}}</dt>
 <dd>Defines a key range that can be used to retrieve data from a database in a certain range.</dd>
 <dt>{{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}</dt>
 <dd>Defines a key range that can be used to retrieve data from a database in a certain range, sorted according to the rules of the locale specified for a certain index (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex#Parameters"><code>createIndex()</code>'s optionalParameters</a>.). This interface isn't part of the 2.0 specification.</dd>
</dl>

<h3 id="사용자_지정_이벤트_인터페이스">사용자 지정 이벤트 인터페이스</h3>

<p>This specification fires events with the following custom interface:</p>

<dl>
 <dt>{{domxref("IDBVersionChangeEvent")}}</dt>
 <dd>The <code>IDBVersionChangeEvent</code> interface indicates that the version of the database has changed, as the result of an {{domxref("IDBOpenDBRequest.onupgradeneeded")}} event handler function.</dd>
</dl>

<h3 id="폐기된_인터페이스">폐기된 인터페이스</h3>

<p>An early version of the specification also defined these now removed interfaces. They are still documented in case you need to update previously written code:</p>

<dl>
 <dt>{{domxref("IDBVersionChangeRequest")}} {{deprecated_inline}}</dt>
 <dd>Represents a request to change the version of a database. The way to change the version of the database has since changed (by calling {{domxref("IDBFactory.open")}} without also calling {{domxref("IDBDatabase.setVersion")}}), and the interface {{domxref("IDBOpenDBRequest")}} now has the functionality of the removed {{domxref("IDBVersionChangeRequest")}}.</dd>
 <dt>{{domxref("IDBDatabaseException")}} {{deprecated_inline}}</dt>
 <dd>Represents exception conditions that can be encountered while performing database operations.</dd>
 <dt>{{domxref("IDBTransactionSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBTransaction")}}.</dd>
 <dt>{{domxref("IDBObjectStoreSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBObjectStore")}}.</dd>
 <dt>{{domxref("IDBIndexSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBIndex")}}.</dd>
 <dt>{{domxref("IDBFactorySync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBFactory")}}.</dd>
 <dt>{{domxref("IDBEnvironmentSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBEnvironment")}}.</dd>
 <dt>{{domxref("IDBDatabaseSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBDatabase")}}.</dd>
 <dt>{{domxref("IDBCursorSync")}} {{deprecated_inline}}</dt>
 <dd>Sync version of {{domxref("IDBCursor")}}.</dd>
</dl>

<h2 id="예제">예제</h2>

<ul>
 <li><a href="http://marco-c.github.io/eLibri/">eLibri:</a> A powerful library and eBook reader application, written by Marco Castelluccio, winner of the IndexedDB Mozilla DevDerby.</li>
 <li><a href="https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>): The reference application for the examples in the reference docs.</li>
 <li><a href="http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/">Storing images and files in IndexedDB</a></li>
</ul>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://localforage.github.io/localForage/">localForage</a>: A Polyfill providing a simple name:value syntax for client-side data storage, which uses IndexedDB in the background, but falls back to WebSQL and then localStorage in browsers that don't support IndexedDB.</li>
 <li><a href="http://www.dexie.org/">Dexie.js</a>: A wrapper for IndexedDB that allows much faster code development via nice, simple syntax.</li>
 <li><a href="https://github.com/erikolson186/zangodb">ZangoDB</a>: A MongoDB-like interface for IndexedDB that supports most of the familiar filtering, projection, sorting, updating and aggregation features of MongoDB.</li>
 <li><a href="http://jsstore.net/">JsStore</a>: An IndexedDB wrapper with SQL like syntax.</li>
 <li><a href="https://github.com/mWater/minimongo">MiniMongo</a>: A client-side in-memory mongodb backed by localstorage with server sync over http. MiniMongo is used by MeteorJS.</li>
 <li><a href="https://pouchdb.com/">PouchDB</a>: A client-side implementation of CouchDB in the browser using IndexedDB</li>
</ul>
