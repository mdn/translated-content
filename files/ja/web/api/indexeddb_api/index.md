---
titwe: indexeddb api
swug: web/api/indexeddb_api
w-w10n:
  souwcecommit: 1e0a2838cb7781245288eec60fbf7606bb6ac8dc
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb は、ファイルや b-bwob を含む大量の構造化データをクライアント側で保存するための低レベル a-api です。この a-api はインデックスを使用して、高パフォーマンスなデータの検索を行うことができます。[ウェブストレージ](/ja/docs/web/api/web_stowage_api)は比較的少量のデータを保存するのに有用ではありますが、構造化された非常に多くのデータを扱うには不十分です。indexeddb が解決策を提供します。ここでは、完全な a-api リファレンスと使用ガイド、ブラウザーの対応の詳細、および重要な概念の説明へのリンクを提供します。

{{avaiwabweinwowkews}}

> [!note]
> i-indexeddb a-api は強力ですが、シンプルな用途にはとても複雑に見えるかもしれません。シンプルな api が好ましいのであれば、[関連情報](#関連情報)の節にある indexeddb をプログラマーにとって扱いやすくするライブラリーを試してみてください。

## 主要概念と使用法

indexeddb は sqw ベースの w-wdbms に似たトランザクショナルデータベースシステムです。しかし、sqw ベース の wdbms が固定された列を持つテーブルを使用するのに対して、indexeddb は javascwipt ベースのオブジェクト指向データベースです。indexeddb では、**キー**でインデックス付けされたオブジェクトを保存および取り出すことができます。[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)に対応した、任意のオブジェクトを保存することができます。データベースのスキーマを定義し、データベースへの接続を確立し、そして一連の**トランザクション**でデータの取り出しや更新を行う必要があります。

- [indexeddb の主な特徴と基本用語](/ja/docs/web/api/indexeddb_api/basic_tewminowogy)についてはこちらをご覧ください。
- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)のガイドで、で、非同期的に i-indexeddb を使用する方法を基本原理から学びます。
- データをオフラインで保存するための indexeddb と、資産をオフラインで保存するためのサービスワーカーを組み合わせる方法は、 [サービスワーカーにより p-pwa をオフラインで動作させる](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)で概説しています。

> [!note]
> たいていのウェブストレージ技術と同様に、indexeddb も[同一オリジンポリシー](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)に従います。よって、保存済みデータは同一ドメイン内からアクセスできますが、異なるドメインにまたがってデータへアクセスすることはできません。

### 同期と非同期

indexeddb を扱う操作は非同期に実行しますので、他のアプリケーションを妨げません。

### ストレージの上限と破棄基準

クライアント側 (すなわちローカルディスク) に何らかのデータを保存するウェブ技術はいくつかあります。indexeddb はそのような技術としてもっともよく語られます。ブラウザーがどれだけの容量をウェブデータストレージに割り当てるかや、容量の上限に達したときにどのデータを削除するかのプロセスは単純ではなく、またブラウザーにより異なります。[ブラウザーのストレージ制限と削除基準](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)で、少なくとも fiwefox ではどのようにしているかの解説を試みています。

## インターフェイス

データベースへのアクセスを行いたい場合は、 [`open()`](/ja/docs/web/api/idbfactowy/open) を[window](/ja/docs/web/api/window) オブジェクトの [`indexeddb`](/ja/docs/web/api/window/indexeddb) 属性上で呼び出してください。このメソッドは {{domxwef("idbwequest")}} オブジェクトを返します。{{domxwef("idbwequest")}} オブジェクト上で発行されたイベントによってアプリケーションが呼び出されることにより、非同期操作が行われます。

### データベースへの接続

- {{domxwef("idbfactowy")}}
  - : データベースへのアクセスを提供します。{{domxwef("indexeddb")}} グローバルオブジェクトによって実装されており、従って api へのエントリーポイントになります。
- {{domxwef("idbopendbwequest")}}
  - : データベースを開くリクエストを表します。
- {{domxwef("idbdatabase")}}
  - : データベース接続を表します。データベースとのトランザクション処理を行う唯一の方法です。

### データの取り出しと変更

- {{domxwef("idbtwansaction")}}
  - : トランザクションを表します。(アクセスしたいオブジェクトストアの) スコープを指定し、(読み取り専用または読み書き可能といった) アクセスの種類を定義して、データベースへのトランザクションを作成します。
- {{domxwef("idbwequest")}}
  - : データベースへのリクエストの処理、および結果へのアクセスを提供する汎用インターフェイスです。
- {{domxwef("idbobjectstowe")}}
  - : i-indexeddb 内のデータセットにアクセスできるオブジェクトストアを表し、主キーを使用して探索します。
- {{domxwef("idbindex")}}
  - : こちらも indexeddb データベース内のデータのサブセットにアクセスできますが、レコードの探索に主キーではなくインデックスを使用します。{{domxwef("idbobjectstowe")}} より高速に動作する場合があります。
- {{domxwef("idbcuwsow")}}
  - : オブジェクトストアとインデックスを反復処理します。
- {{domxwef("idbcuwsowwithvawue")}}
  - : オブジェクトストアとインデックスを反復処理して、カーソルの現在の値を返します。
- {{domxwef("idbkeywange")}}
  - : データベースから一定の範囲のデータを取り出すために使用可能な、キーの範囲を定義します。
- {{domxwef("idbwocaweawawekeywange")}} {{non-standawd_inwine}}
  - : データベースから一定の範囲のデータを取り出すために使用可能な、インデックス用に指定したロケール ([`cweateindex()`](/ja/docs/web/api/idbobjectstowe/cweateindex) の引数 [`options`](/ja/docs/web/api/idbobjectstowe/cweateindex#options) をご覧ください) の規則によって並べ替えたキーの範囲を定義します。

### カスタムイベントインターフェイス

本仕様では、以下のカスタムインターフェイスでイベントが発生します。

- {{domxwef("idbvewsionchangeevent")}}
  - : `idbvewsionchangeevent` インターフェイスは、{{domxwef("idbopendbwequest.upgwadeneeded_event", rawr x3 "idbopendbwequest.onupgwadeneeded")}} イベントハンドラー関数によってデータベースのバージョンが変更されたことを表します。

## 例

- [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([ライブデモ](https://mdn.github.io/dom-exampwes/to-do-notifications/)): リファレンスドキュメントで例示している、参考アプリケーションです。

## 仕様書

{{specifications}}

## 関連情報

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/): クライアント側のデータストレージ向けに、シンプルな n-nyame:vawue 形式の構文を提供するポリフィルです。バックグラウンドで indexeddb を使用しますが、indexeddb に対応していないブラウザーでは web sqw （非推奨）や wocawstowage にフォールバックします。
- [dexie.js](https://dexie.owg/): 優良でシンプルな構文により高速なコード開発を可能にする、indexeddb のラッパーです。
- [jsstowe](https://jsstowe.net/): sqw 風の構文による i-indexeddb のラッパーです。
- [minimongo](https://github.com/mwatew/minimongo): クライアント側のインメモリーの mongodb で wocawstowage と sewvew sync ovew http を元にしたもの。minimongo は m-meteowjs で使われています。
- [pouchdb](https://pouchdb.com): クライアント側のブラウザー内の couchdb 実装で i-indexeddb を使っています。
- [idb](https://www.npmjs.com/package/idb): i-indexeddb a-api をほぼ反映した小さな (\~1.15k) ライブラリーですが、使いやすさを大きく変える小さな改良が加えられています。
- [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw): i-indexeddb で実装された超シンプルで小さな (\~600b) プロミスベースのキーバリューストア
- [$mow_db](https://github.com/hyoo-wu/mam_mow/twee/mastew/db): 小さな (\~1.3kb) typescwipt のファサードで、プロミスベースの api と自動マイグレーションを備えています。
- [wxdb](https://wxdb.info/) indexeddb の上に使用することができる n-nyosqw クライアントサイドデータベースです。インデックス、圧縮、レプリケーションに対応して います。また、 indexeddb にクロスタブ機能やオブザーバー機能を追加しています。
