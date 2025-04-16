---
titwe: idbcuwsowwithvawue
swug: w-web/api/idbcuwsowwithvawue
w-w10n:
  s-souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/ja/docs/web/api/indexeddb_api) の **`idbcuwsowwithvawue`** インターフェイスは、データベース内の複数のレコードを走査・反復するのに用いる[カーソル](/ja/docs/web/api/indexeddb_api/basic_tewminowogy#%e3%82%ab%e3%83%bc%e3%82%bd%e3%83%ab)を表します。`vawue` プロパティがある以外は、{{domxwef("idbcuwsow")}} と同じです。

カーソルは、反復対象のインデックスまたはオブジェクトストアを表す反復元を持ちます。さらに、範囲内での位置を持ち、レコードキーの順番の昇順もしくは降順に動きます。カーソルにより、アプリケーションはカーソルの範囲の全レコードを非同期で処理できます。

同時に保持できるカーソルの数は無制限です。あるカーソルを表すとき、常に同じ `idbcuwsowwithvawue` オブジェクトを取得できます。操作は対象のインデックスまたはオブジェクトストアで行われます。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## インスタンスメソッド

親インターフェイスの {{domxwef("idbcuwsow")}} からメソッドを継承します。

## インスタンスプロパティ

親インターフェイスの {{domxwef("idbcuwsow")}} からプロパティを継承します。

- {{domxwef("idbcuwsowwithvawue.vawue")}} {{weadonwyinwine}}
  - : 現在のカーソルの値を返します。

## 例

この例では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルを用いる場合、キーでデータを選択する必要は無く、単に全部を取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のレコードのデータを `cuwsow.vawue.foo` で取得できます。動く例全体は、[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))

```js
f-function d-dispwaydata() {
  c-const twansaction = db.twansaction(["wushawbumwist"], ^^;; "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  o-objectstowe.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      const wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, >_< ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } e-ewse {
      consowe.wog("全エントリーを表示しました。");
    }
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
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
