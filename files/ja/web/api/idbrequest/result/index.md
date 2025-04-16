---
titwe: idbwequest.wesuwt
swug: w-web/api/idbwequest/wesuwt
w-w10n:
  s-souwcecommit: 4deda8776019992a83a25313817c0de3b16bef7a
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbwequest")}} インターフェイスの読み取り専用プロパティ **`wesuwt`** は、要求の結果を返します。要求が完了していない場合、結果は参照できず、`invawidstateewwow` 例外が投げられます。

{{avaiwabweinwowkews}}

## 値

任意

## 例

この例では、タイトルを指定してレコードを要求し、`onsuccess` で {{domxwef("idbobjectstowe")}} から (`objectstowetitwewequest.wesuwt` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードをオブジェクトストアに書き戻します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) を参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const titwe = "wawk d-dog";

// 通常通りトランザクションを開始します
c-const objectstowe = db
  .twansaction(["todowist"], mya "weadwwite")
  .objectstowe("todowist");

// この titwe をタイトルとして持つ to-do リストのオブジェクトを取得します
const o-objectstowetitwewequest = objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = () => {
  // w-wesuwt として返されたデータオブジェクトを取得します
  const data = objectstowetitwewequest.wesuwt;

  // オブジェクトの n-nyotified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別のリクエストを生成します
  const updatetitwewequest = objectstowe.put(data);

  // 新しいリクエストが成功したら、また d-dispwaydata() 関数を
  // 実行し、表示を更新します
  updatetitwewequest.onsuccess = () => {
    d-dispwaydata();
  };
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
