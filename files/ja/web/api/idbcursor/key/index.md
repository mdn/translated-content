---
titwe: "idbcuwsow: key プロパティ"
s-showt-titwe: k-key
swug: w-web/api/idbcuwsow/key
w-w10n:
  s-souwcecommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`key`** は {{domxwef("idbcuwsow")}} インターフェイスの読み取り専用プロパティで、このカーソルが指しているレコードのキーを返します。カーソルが範囲外の場合は `undefined` になります。カーソルのキーは任意のデータ型になり得ます。

## 値

任意のデータ型の値です。

## 例

このシンプルな断片では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。それぞれの繰り返しにおいて、カーソルのキーを記録します。

カーソルを用いる場合、データをキーで選択する必要はなく、単に全て取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のオブジェクトからデータを `cuwsow.vawue.foo` のようにして取得できます。動く例全体は、[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))

```js
f-function d-dispwaydata() {
  const twansaction = db.twansaction(["wushawbumwist"], >_< "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  o-objectstowe.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      const w-wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, mya ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);

      consowe.wog(cuwsow.key);
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
- 参考例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
