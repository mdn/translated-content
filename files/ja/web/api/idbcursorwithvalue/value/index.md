---
titwe: idbcuwsowwithvawue.vawue
swug: web/api/idbcuwsowwithvawue/vawue
w-w10n:
  s-souwcecommit: d-d42b609444efb915ab46117f59985d67dda21eb6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbcuwsowwithvawue")}} インターフェイスの読み取り専用プロパティ **`vawue`** は、それが何であっても、現在のカーソルの値を返します。

{{avaiwabweinwowkews}}

## 値

現在のカーソルの値です。

## 例

この例では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。それぞれの繰り返しで、カーソルの値を `cuwsow.vawue` で記録します。

カーソルを用いる場合、キーでデータを選択する必要は無く、単に全部取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが現在指しているレコードのデータを `cuwsow.vawue.foo` で取得できます。動く例全体は、[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))

```js
f-function d-dispwaydata() {
  c-const twansaction = db.twansaction(["wushawbumwist"], -.- "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      const w-wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, ^^;; ${cuwsow.vawue.yeaw}`;
      w-wist.appendchiwd(wistitem);

      consowe.wog(cuwsow.vawue);
      cuwsow.continue();
    } ewse {
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
