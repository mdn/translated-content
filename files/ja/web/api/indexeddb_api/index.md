---
title: IndexedDB API
slug: Web/API/IndexedDB_API
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB は、ファイルや blob を含む大量の構造化データをクライアント側で保存するための低レベル API です。この API はインデックスを使用して、高パフォーマンスなデータの検索を行うことができます。[Web Storage](/ja/docs/Web/API/Web_Storage_API) は比較的少量のデータを保存するのに有用ではありますが、構造化された非常に多くのデータを扱うには不十分です。IndexedDB が解決策を提供します。ここでは、完全な API リファレンスと使用ガイド、ブラウザーの対応の詳細、および重要な概念の説明へのリンクを提供します。

{{AvailableInWorkers}}

> **メモ:** IndexedDB API は強力ですが、シンプルな用途にはとても複雑に見えるかもしれません。シンプルな API が好ましいのであれば、[関連情報](#see_also)の節にある IndexedDB をプログラマーにとって扱いやすくするライブラリーを試してみてください。

## 主要概念と使用法

IndexedDB は SQL ベースの RDBMS に似たトランザクショナルデータベースシステムです。しかし、SQL ベース の RDBMS が固定された列を持つテーブルを使用するのに対して、IndexedDB は JavaScript ベースのオブジェクト指向データベースです。IndexedDB では、**キー**でインデックス付けされたオブジェクトを保存および取り出すことができます。[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)に対応した、任意のオブジェクトを保存することができます。データベースのスキーマを定義し、データベースへの接続を確立し、そして一連の**トランザクション**でデータの取り出しや更新を行う必要があります。

- [IndexedDB の主な特徴と基本用語](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology)についてはこちらをご覧ください。
- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)のガイドで、で、非同期的に IndexedDB を使用する方法を基本原理から学びます。
- データをオフラインで保存するための IndexedDB と、資産をオフラインで保存するためのサービスワーカーを組み合わせる方法は、 [サービスワーカーにより PWA をオフラインで動作させる](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)で概説しています。

> **メモ:** たいていのウェブストレージ技術と同様に、IndexedDB も[同一オリジンポリシー](https://www.w3.org/Security/wiki/Same_Origin_Policy)に従います。よって、保存済みデータは同一ドメイン内からアクセスできますが、異なるドメインにまたがってデータへアクセスすることはできません。

### 同期と非同期

IndexedDB を扱う操作は非同期に実行しますので、他のアプリケーションを妨げません。 IndexedDB は元々同期 API と非同期 API の両方を提供していました。同期 API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)内でのみの使用を意図していましたが、必要性に疑問があったため仕様から削除されました。ただし、同期 API はウェブ開発者から十分な要望がある場合は、将来再び導入される可能性があります。

### ストレージの上限と破棄基準

クライアント側 (すなわちローカルディスク) に何らかのデータを保存するウェブ技術はいくつかあります。IndexedDB はそのような技術としてもっともよく語られます。ブラウザーがどれだけの容量をウェブデータストレージに割り当てるかや、容量の上限に達したときにどのデータを削除するかのプロセスは単純ではなく、またブラウザーにより異なります。[ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)で、少なくとも Firefox ではどのようにしているかの解説を試みています。

## インターフェイス

データベースへのアクセスを行いたい場合は、[window](/ja/docs/Web/API/Window) オブジェクトの [`indexedDB`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB) 属性上で [`open()`](/ja/docs/Web/API/IDBFactory/open) を呼び出してください。このメソッドは {{domxref("IDBRequest")}} オブジェクトを返します。{{domxref("IDBRequest")}} オブジェクト上で発行されたイベントによってアプリケーションが呼び出されることにより、非同期操作が行われます。

### データベースへの接続

- {{domxref("IDBEnvironment")}}
  - : IndexedDB 機能へのアクセスを提供します。{{domxref("window")}} および {{domxref("worker")}} オブジェクトによって実装されています。このインターフェイスは 2.0 仕様の一部ではありません。
- {{domxref("IDBFactory")}}
  - : データベースへのアクセスを提供します。{{domxref("WindowOrWorkerGlobalScope/indexedDB", "indexedDB")}} グローバルオブジェクトによって実装されており、従って API へのエントリーポイントになります。
- {{domxref("IDBOpenDBRequest")}}
  - : データベースを開くリクエストを表します。
- {{domxref("IDBDatabase")}}
  - : データベース接続を表します。データベースとのトランザクション処理を行うためのみに使用されます。

### データの取り出しと変更

- {{domxref("IDBTransaction")}}
  - : トランザクションを表します。(アクセスしたいオブジェクトストアの) スコープを指定し、(読み取り専用または読み書き可能といった) アクセスの種類を定義して、データベースへのトランザクションを作成します。
- {{domxref("IDBRequest")}}
  - : データベースへのリクエストの処理、および結果へのアクセスを提供する汎用インターフェイスです。
- {{domxref("IDBObjectStore")}}
  - : IndexedDB 内のデータセットにアクセスできるオブジェクトストアを表し、主キーを使用して探索します。
- {{domxref("IDBIndex")}}
  - : こちらも IndexedDB データベース内のデータのサブセットにアクセスできますが、レコードの探索に主キーではなくインデックスを使用します。{{domxref("IDBObjectStore")}} より高速に動作する場合があります。
- {{domxref("IDBCursor")}}
  - : オブジェクトストアとインデックスを反復処理します。
- {{domxref("IDBCursorWithValue")}}
  - : オブジェクトストアとインデックスを反復処理して、カーソルの現在の値を返します。
- {{domxref("IDBKeyRange")}}
  - : データベースから一定の範囲のデータを取り出すために使用可能な、キーの範囲を定義します。
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : データベースから一定の範囲のデータを取り出すために使用可能な、インデックス用に指定したロケール ([`createIndex()` の optionalParameters](/ja/docs/Web/API/IDBObjectStore/createIndex#parameters) をご覧ください) の規則によって並べ替えたキーの範囲を定義します。

### カスタムイベントインターフェイス

本仕様では、以下のカスタムインターフェイスでイベントが発生します。

- {{domxref("IDBVersionChangeEvent")}}
  - : `IDBVersionChangeEvent` インターフェイスは、{{domxref("IDBOpenDBRequest.onupgradeneeded")}} イベントハンドラー関数によってデータベースのバージョンが変更されたことを表します。

### 廃止インターフェイス

仕様の早期段階では、以下のようなインターフェイスを定義していましたが、既に削除されています。以前書かれたコードを更新する必要がある場合のために、ドキュメントを残しています。

- {{domxref("IDBDatabaseException")}} {{deprecated_inline}}
  - : データベース操作が実行されている間に発生した例外状況を表します。
- {{domxref("IDBTransactionSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBTransaction")}} です。
- {{domxref("IDBObjectStoreSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBObjectStore")}} です。
- {{domxref("IDBIndexSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBIndex")}} です。
- {{domxref("IDBFactorySync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBFactory")}} です。
- {{domxref("IDBEnvironmentSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBEnvironment")}} です。
- {{domxref("IDBDatabaseSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBDatabase")}} です。
- {{domxref("IDBCursorSync")}} {{deprecated_inline}}
  - : 同期版の {{domxref("IDBCursor")}} です。

## 例

- [eLibri:](https://marco-c.github.io/eLibri/) Marco Castelluccio が作成した、高度なライブラリおよび電子書籍リーダーアプリケーションです。IndexedDB Mozilla DevDerby の最優秀作品です。
- [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([ライブデモ](https://mdn.github.io/to-do-notifications/)): リファレンスドキュメントで例示している、参考アプリケーションです。
- [Storing images and files in IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

## 仕様書

| 仕様書                                                   |
| -------------------------------------------------------- |
| [Indexed Database API](https://w3c.github.io/IndexedDB/) |

## 関連情報

- [localForage](https://localforage.github.io/localForage/): クライアント側のデータストレージ向けに、シンプルな name:value 形式の構文を提供するポリフィルです。バックグラウンドで IndexedDB を使用しますが、IndexedDB をに対応していないブラウザーでは WebSQL や localStorage にフォールバックします。
- [Dexie.js](https://dexie.org/): 優良でシンプルな構文により高速なコード開発を可能にする、IndexedDB のラッパーです。
- [ZangoDB](https://github.com/erikolson186/zangodb): IndexedDB の MongoDB ライクなインターフェイスで、MongoDB でおなじみのフィルターリング、射影、ソート、アップデート、集計をサポートしています。
- [JsStore](https://jsstore.net/): SQL 風の構文による IndexedDB のラッパーです。
- [MiniMongo](https://github.com/mWater/minimongo): クライアント側のインメモリーの mongodb で localstorage と server sync over http を元にしたもの。MiniMongo は MeteorJS で使われています。
- [PouchDB](https://pouchdb.com): クライアント側のブラウザー内の CouchDB 実装で IndexedDB を使っています。
- [idb](https://www.npmjs.com/package/idb): IndexedDB API をほぼ反映した小さな (\~1.15k) ライブラリーですが、使いやすさを大きく変える小さな改良が加えられています。
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): IndexedDB で実装された超シンプルで小さな (\~600B) プロミスベースのキーバリューストア
- [sifrr-storage:](https://www.npmjs.com/package/@sifrr/storage) クライアントサイドのキーバリューストレージ用の小さな (\~2kB) プロミスベースのライブラリーです。IndexedDB、localStorage、WebSQL、Cookie で動作します。優先度に基づいて、対応しているストレージを自動的に使用できます。
- [lovefield](https://github.com/google/lovefield): Lovefield は、ウェブアプリケーション用のリレーショナルデータベースです。 JavaScript で書かれており、クロスブラウザーで動作します。SQL ライクな API を提供しており、高速で安全、かつ簡単に使用できます。
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): 小さな (\~1.3kB) TypeScript のファサードで、プロミスベースの API と自動マイグレーションを備えています。
