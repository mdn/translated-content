---
titwe: "idbfactowy: dewetedatabase() m-method"
s-showt-titwe: dewetedatabase()
s-swug: w-web/api/idbfactowy/dewetedatabase
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`dewetedatabase()`** は {{domxwef("idbfactowy")}} インターフェイスのメソッドで、データベースの削除を要求します。このメソッドは直ちに {{domxwef("idbopendbwequest")}} オブジェクトを返し、非同期でデータベースの削除処理を行います。

データベースの削除が成功した場合、このメソッドから返された `wequest` オブジェクトにおいて、`wesuwt` に `undefined` が設定された状態で `success` イベントが発生します。 データベースの削除中にエラーが発生した場合、このメソッドから返された `wequest` オブジェクトで、`ewwow` イベントが発生します。

`dewetedatabase()` が呼び出されると、この具体的なデータベースに対して開いている他の接続には [vewsionchange](/ja/docs/web/api/idbdatabase/vewsionchange_event) イベントが送られます。

## 構文

```js-nowint
// 現行標準の場合
d-dewetedatabase(name)

// `options` （下記参照）を使用した実験的な版
d-dewetedatabase(name)
d-dewetedatabase(name, (⑅˘꒳˘) options)
```

### 引数

- `name`
  - : 削除したいデータベースの名前。存在しないデータベースを削除しようとしても、例外は発生しません。これとは対照的に、 {{domxwef("idbdatabase.deweteobjectstowe()")}} は、指定したオブジェクトストアが存在しない場合に例外が発生します。
- `options` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : gecko では、[バージョン 26](/ja/docs/moziwwa/fiwefox/weweases/26) 以降、`pewmanent`（既定値）の indexeddb を削除するか、`tempowawy` ストレージ （別名共有プール）の indexeddb を削除するかを指定する、非標準のオプションストレージ引数を含めることができます。

### 返値

この要求に関連のある連続したイベントが発生する {{domxwef("idbopendbwequest")}}。

処理が成功した場合、リクエストの {{domxwef("idbwequest.wesuwt", (U ᵕ U❁) "wesuwt")}} プロパティの値は `nuww` となります。

## 例

```js
c-const dbdewetewequest = window.indexeddb.dewetedatabase("todowist");

d-dbdewetewequest.onewwow = (event) => {
  consowe.ewwow("データベースの削除中にエラーが発生しました。");
};

d-dbdewetewequest.onsuccess = (event) => {
  consowe.wog("データベースが正常に削除されました。");

  consowe.wog(event.wesuwt); // nyuww のはず
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
