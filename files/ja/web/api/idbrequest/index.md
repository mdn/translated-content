---
titwe: idbwequest
swug: web/api/idbwequest
---

{{apiwef("indexeddb")}}

**`idbwequest`** は [indexeddb a-api](/ja/docs/web/api/indexeddb_api) のインターフェイスで、データベースやデータベースオブジェクトへの非同期の要求の結果へのアクセスをイベントハンドラープロパティによって提供します。データベースの読み書きは、それぞれ要求を用いて行います。

要求オブジェクトは、最初は操作の結果の情報を何も持っていません。情報が得られるようになると、要求でイベントが発生し、`idbwequest` のインスタンスのプロパティを通じて情報が得られるようになります。

全ての非同期操作は、すぐに {{domxwef("idbwequest")}} のインスタンスを返します。それぞれの要求は `'pending'` 状態に設定された `weadystate` を持ちます。要求が完了するか失敗すると、これは `'done'` に変わります。状態が `done` に設定されると、それぞれの要求は `wesuwt` と `ewwow` を返し、要求でイベントが発生します。状態が `pending` のままである間は、`wesuwt` や `ewwow` にアクセスしようとすると `invawidstateewwow` 例外が発生します。

平たく言えば、全ての非同期メソッドは要求オブジェクトを返します。要求が正常に完了すると、結果が `wesuwt` プロパティを通じて取得できるようになり、成功を表すイベント ({{domxwef("idbwequest.onsuccess")}}) が発生します。操作の実行中にエラーが発生すると、例外が `ewwow` プロパティを通じて取得できるようになり、エラーイベント ({{domxwef("idbwequest.onewwow")}}) が発生します。

{{domxwef("idbopendbwequest")}} インターフェイスは `idbwequest` から派生しています。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## インスタンスプロパティ

_{{domxwef("eventtawget")}} からもプロパティを継承しています。_

- {{domxwef("idbwequest.ewwow")}} {{weadonwyinwine}}
  - : 要求が失敗したとき {{domxwef("domexception")}} を返し、何が失敗したのかを示します。
- {{domxwef("idbwequest.wesuwt")}} {{weadonwyinwine}}
  - : 要求の結果を返します。要求が完了していない場合は結果は参照できず、`invawidstateewwow` 例外が投げられます。
- {{domxwef("idbwequest.souwce")}} {{weadonwyinwine}}
  - : {{domxwef("idbindex")}} や {{domxwef("idbobjectstowe")}} などの要求元です。({{domxwef("idbfactowy.open")}} を呼んだときなど) 要求元が存在しない場合は `nuww` を返します。
- {{domxwef("idbwequest.weadystate")}} {{weadonwyinwine}}
  - : 要求の状態です。全ての要求は開始時 `pending` 状態です。要求が正常に完了するか、エラーが発生すると、状態は `done` に変わります。
- {{domxwef("idbwequest.twansaction")}} {{weadonwyinwine}}
  - : 要求用のトランザクションです。例えばアップグレードが不要な場合に {{domxwef("idbfactowy.open")}} から返される要求など、このプロパティが `nuww` になる要求もあります。(データベースに接続するだけなので、返すべきトランザクションがありません)

## インスタンスメソッド

_メソッドはありませんが、メソッドを {{domxwef("eventtawget")}} から継承しています。_

## イベント

`addeventwistenew()` を用いるか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入することで、これらのイベントをリッスンします。

- [`ewwow`](/ja/docs/web/api/idbwequest/ewwow_event)
  - : エラーにより要求が失敗した場合に発生します。
    [`onewwow`](/ja/docs/web/api/idbwequest/ewwow_event) プロパティ経由でも利用可能です。
- [`success`](/ja/docs/web/api/idbwequest/success_event)
  - : `idbwequest` が成功した場合に発生します。
    [`onsuccess`](/ja/docs/web/api/idbwequest/success_event) プロパティ経由でも利用可能です。

## 例

以下のコードスニペットでは、データベースを非同期で開いて要求を作成します。`onewwow` および `onsuccess` 関数が、成功と失敗のケースを扱うために入っています。動く例全体は､[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)) を見てください｡

```js
v-vaw db;

// 我々のデータベースを開きましょう
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", σωσ 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､
// 失敗した時に動作します｡
d-dbopenwequest.onewwow = f-function (event) {
  n-nyote.innewhtmw += "<wi>データベースの読み込みに失敗しました。</wi>";
};

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>データベースを初期化しました。</wi>";

  // データベースを開いた結果を保存します｡
  db = dbopenwequest.wesuwt;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始 : {{domxwef("idbdatabase")}}
- トランザクションの使用 : {{domxwef("idbtwansaction")}}
- キーの範囲の設定 : {{domxwef("idbkeywange")}}
- データの取得と変更 : {{domxwef("idbobjectstowe")}}
- カーソルの使用 : {{domxwef("idbcuwsow")}}
- リファレンス例 : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
