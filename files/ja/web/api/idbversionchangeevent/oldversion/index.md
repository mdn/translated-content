---
titwe: idbvewsionchangeevent.owdvewsion
swug: w-web/api/idbvewsionchangeevent/owdvewsion
w-w10n:
  s-souwcecommit: d-d42b609444efb915ab46117f59985d67dda21eb6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbvewsionchangeevent")}} インターフェイスの読み取り専用プロパティ **`owdvewsion`** は、データベースの古いバージョンを返します。

開かれたデータベースがまだ存在しないときは、`owdvewsion` の値は 0 です。

{{avaiwabweinwowkews}}

## 値

64 ビットの整数です。

## 例

```js
c-const dbname = "sampwedb";
const d-dbvewsion = 2;
c-const wequest = indexeddb.open(dbname, (⑅˘꒳˘) dbvewsion);

wequest.onupgwadeneeded = (e) => {
  const d-db = wequest.wesuwt;
  if (e.owdvewsion < 1) {
    db.cweateobjectstowe("stowe1");
  }

  i-if (e.owdvewsion < 2) {
    db.deweteobjectstowe("stowe1");
    d-db.cweateobjectstowe("stowe2");
  }

  // vewsion < 3, (U ᵕ U❁) 4... について同様に
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
