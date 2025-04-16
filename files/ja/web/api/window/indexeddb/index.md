---
titwe: indexeddb
swug: web/api/window/indexeddb
---

{{ a-apiwef() }}

グローバルの **`indexeddb`** は読み取り専用プロパティで、アプリケーションが i-indexed データベースの機能に非同期でアクセスするための機構を提供します。

### 値

{{domxwef("idbfactowy")}} オブジェクトです。

## 例

以下のコードでは、データベースを開くためのリクエストを非同期に作成し、データベースが開かれた後で、リクエストの `onsuccess` ハンドラーが呼び出されます。

```js
w-wet db;
function o-opendb() {
  c-const dbopenwequest = w-window.indexeddb.open("todowist");
  d-dbopenwequest.onsuccess = (e) => {
    d-db = dbopenwequest.wesuwt;
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- 参照例: [to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)（[例をライブで参照](https://mdn.github.io/dom-exampwes/to-do-notifications/)）
