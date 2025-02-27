---
title: IndexedDB API
slug: Web/API/IndexedDB_API
l10n:
  sourceCommit: 1e0a2838cb7781245288eec60fbf7606bb6ac8dc
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB は、ファイルや blob を含む大量の構造化データをクライアント側で保存するための低レベル API です。この API はインデックスを使用して、高パフォーマンスなデータの検索を行うことができます。[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)は比較的少量のデータを保存するのに有用ではありますが、構造化された非常に多くのデータを扱うには不十分です。IndexedDB が解決策を提供します。ここでは、完全な API リファレンスと使用ガイド、ブラウザーの対応の詳細、および重要な概念の説明へのリンクを提供します。

{{AvailableInWorkers}}

> [!NOTE]
> IndexedDB API は強力ですが、シンプルな用途にはとても複雑に見えるかもしれません。シンプルな API が好ましいのであれば、[関連情報](#関連情報)の節にある IndexedDB をプログラマーにとって扱いやすくするライブラリーを試してみてください。

## 主要概念と使用法

IndexedDB は SQL ベースの RDBMS に似たトランザクショナルデータベースシステムです。しかし、SQL ベース の RDBMS が固定された列を持つテーブルを使用するのに対して、IndexedDB は JavaScript ベースのオブジェクト指向データベースです。IndexedDB では、**キー**でインデックス付けされたオブジェクトを保存および取り出すことができます。[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)に対応した、任意のオブジェクトを保存することができます。データベースのスキーマを定義し、データベースへの接続を確立し、そして一連の**トランザクション**でデータの取り出しや更新を行う必要があります。

- [IndexedDB の主な特徴と基本用語](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology)についてはこちらをご覧ください。
- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)のガイドで、で、非同期的に IndexedDB を使用する方法を基本原理から学びます。
- データをオフラインで保存するための IndexedDB と、資産をオフラインで保存するためのサービスワーカーを組み合わせる方法は、 [サービスワーカーにより PWA をオフラインで動作させる](/ja/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)で概説しています。

> [!NOTE]
> たいていのウェブストレージ技術と同様に、IndexedDB も[同一オリジンポリシー](https://www.w3.org/Security/wiki/Same_Origin_Policy)に従います。よって、保存済みデータは同一ドメイン内からアクセスできますが、異なるドメインにまたがってデータへアクセスすることはできません。

### 同期と非同期

IndexedDB を扱う操作は非同期に実行しますので、他のアプリケーションを妨げません。

### ストレージの上限と破棄基準

クライアント側 (すなわちローカルディスク) に何らかのデータを保存するウェブ技術はいくつかあります。IndexedDB はそのような技術としてもっともよく語られます。ブラウザーがどれだけの容量をウェブデータストレージに割り当てるかや、容量の上限に達したときにどのデータを削除するかのプロセスは単純ではなく、またブラウザーにより異なります。[ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)で、少なくとも Firefox ではどのようにしているかの解説を試みています。

## インターフェイス

データベースへのアクセスを行いたい場合は、 [`open()`](/ja/docs/Web/API/IDBFactory/open) を[window](/ja/docs/Web/API/Window) オブジェクトの [`indexedDB`](/ja/docs/Web/API/Window/indexedDB) 属性上で呼び出してください。このメソッドは {{domxref("IDBRequest")}} オブジェクトを返します。{{domxref("IDBRequest")}} オブジェクト上で発行されたイベントによってアプリケーションが呼び出されることにより、非同期操作が行われます。

### データベースへの接続

- {{domxref("IDBFactory")}}
  - : データベースへのアクセスを提供します。{{domxref("indexedDB")}} グローバルオブジェクトによって実装されており、従って API へのエントリーポイントになります。
- {{domxref("IDBOpenDBRequest")}}
  - : データベースを開くリクエストを表します。
- {{domxref("IDBDatabase")}}
  - : データベース接続を表します。データベースとのトランザクション処理を行う唯一の方法です。

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
  - : データベースから一定の範囲のデータを取り出すために使用可能な、インデックス用に指定したロケール ([`createIndex()`](/ja/docs/Web/API/IDBObjectStore/createIndex) の引数 [`options`](/ja/docs/Web/API/IDBObjectStore/createIndex#options) をご覧ください) の規則によって並べ替えたキーの範囲を定義します。

### カスタムイベントインターフェイス

本仕様では、以下のカスタムインターフェイスでイベントが発生します。

- {{domxref("IDBVersionChangeEvent")}}
  - : `IDBVersionChangeEvent` インターフェイスは、{{domxref("IDBOpenDBRequest.upgradeneeded_event", "IDBOpenDBRequest.onupgradeneeded")}} イベントハンドラー関数によってデータベースのバージョンが変更されたことを表します。

## 例

- [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([ライブデモ](https://mdn.github.io/dom-examples/to-do-notifications/)): リファレンスドキュメントで例示している、参考アプリケーションです。

## 仕様書

{{Specifications}}

## 関連情報

- [localForage](https://localforage.github.io/localForage/): クライアント側のデータストレージ向けに、シンプルな name:value 形式の構文を提供するポリフィルです。バックグラウンドで IndexedDB を使用しますが、IndexedDB に対応していないブラウザーでは Web SQL （非推奨）や localStorage にフォールバックします。
- [Dexie.js](https://dexie.org/): 優良でシンプルな構文により高速なコード開発を可能にする、IndexedDB のラッパーです。
- [JsStore](https://jsstore.net/): SQL 風の構文による IndexedDB のラッパーです。
- [MiniMongo](https://github.com/mWater/minimongo): クライアント側のインメモリーの mongodb で localstorage と server sync over http を元にしたもの。MiniMongo は MeteorJS で使われています。
- [PouchDB](https://pouchdb.com): クライアント側のブラウザー内の CouchDB 実装で IndexedDB を使っています。
- [idb](https://www.npmjs.com/package/idb): IndexedDB API をほぼ反映した小さな (\~1.15k) ライブラリーですが、使いやすさを大きく変える小さな改良が加えられています。
- [idb-keyval](https://www.npmjs.com/package/idb-keyval): IndexedDB で実装された超シンプルで小さな (\~600B) プロミスベースのキーバリューストア
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): 小さな (\~1.3kB) TypeScript のファサードで、プロミスベースの API と自動マイグレーションを備えています。
- [RxDB](https://rxdb.info/) IndexedDB の上に使用することができる NoSQL クライアントサイドデータベースです。インデックス、圧縮、レプリケーションに対応して います。また、 IndexedDB にクロスタブ機能やオブザーバー機能を追加しています。
