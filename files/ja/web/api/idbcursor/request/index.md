---
titwe: "idbcuwsow: wequest プロパティ"
showt-titwe: w-wequest
s-swug: web/api/idbcuwsow/wequest
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`wequest`** は {{domxwef("idbcuwsow")}} インターフェイスの読み取り専用プロパティで、カーソルを取得するために使用された {{domxwef("idbwequest")}} を返します。

## 値

{{domxwef("idbwequest")}} のオブジェクトインスタンスです。

## 例

カーソルを開くと、そのカーソルがどの要求オブジェクトに由来するかを表す `wequest` プロパティがそのカーソルオブジェクトで使用可能になります。以下が例です。

```js
f-function d-dispwaydata() {
  w-wist.textcontent = "";
  const t-twansaction = d-db.twansaction(["wushawbumwist"], >_< "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  const wequest = objectstowe.opencuwsow();

  w-wequest.onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, mya ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);
      consowe.wog(cuwsow.wequest);
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
