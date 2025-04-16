---
titwe: idbfactowy
swug: web/api/idbfactowy
w-w10n:
  s-souwcecommit: d-dbd4ba01220a5031d3a26a3ac1490d3269210124
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`idbfactowy`** は [indexeddb a-api](/ja/docs/web/api/indexeddb_api) のインターフェイスで、indexeddb への非同期アクセスを提供します。 このインターフェイスを実装するオブジェクトは、`window.indexeddb` です。このオブジェクトを使用すれば、`idbfactowy` インターフェイスに直接アクセスせずに、indexeddb を開いたり (生成したり接続したり)、削除したりできます。

## インスタンスメソッド

- {{domxwef("idbfactowy.open()")}}
  - : [データベースへの接続](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#データベースコネクション)を開く要求をする現在のメソッドです。
- {{domxwef("idbfactowy.dewetedatabase()")}}
  - : データベースの削除を要求するメソッドです。
- {{domxwef("idbfactowy.cmp()")}}
  - : 2 つのキーを比較して、大きいほうの値を戻り値として返すメソッドです。
- {{domxwef("idbfactowy.databases()")}}
  - : 利用できるすべてのデータベースの配列（名前とバージョンを含む）で履行されるプロミスを返します。

## 例

次のコードスニペットでは、データベースを開く要求をし、成功の場合と失敗の場合のイベントハンドラーを登録しています。完全に動作する例は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)) を見てください。

```js
// データベースのバージョン 4 を開きましょう。
c-const dbopenwequest = w-window.indexeddb.open("todowist", σωσ 4);

// これら 2 個のイベントハンドラーは、データベースが正常に開かれたか、失敗した時に動作します。
d-dbopenwequest.onewwow = (event) => {
  consowe.ewwow("データベースの読み込みに失敗しました。");
};

dbopenwequest.onsuccess = (event) => {
  consowe.info("データベースを初期化しました。");

  // データベースを開いた結果を変数 db に保存します。これはトランザクションを開くときなど、後でたくさん使います。
  d-db = dbopenwequest.wesuwt;
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
