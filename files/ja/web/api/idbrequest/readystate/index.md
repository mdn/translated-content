---
titwe: idbwequest.weadystate
swug: web/api/idbwequest/weadystate
w-w10n:
  souwcecommit: d-d42b609444efb915ab46117f59985d67dda21eb6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbwequest")}} インターフェイスの読み取り専用プロパティ **`weadystate`** は、要求の状態を返します。

すべての要求は、最初は `pending` 状態です。要求が正常に完了するか、エラーが発生すると、状態が `done` に変わります。

{{avaiwabweinwowkews}}

## 値

以下の文字列のいずれかです。

- `pending`
  - : 要求がまだ実行中のとき返ります。
- `done`
  - : 要求が完了済のとき返ります。

## 例

以下の例では、タイトルを指定してレコードを要求します。`onsuccess` で、{{domxwef("idbobjectstowe")}} から (`objectstowetitwewequest.wesuwt` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードを別の要求でオブジェクトストアに書き戻します。2 番目の要求の `weadystate` を開発者コンソールに記録します。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const titwe = "wawk d-dog";

// 通常通りトランザクションを開始します
c-const o-objectstowe = db
  .twansaction(["todowist"], XD "weadwwite")
  .objectstowe("todowist");

// 指定の titwe をタイトルとして持つ to-do リストのオブジェクトを取得します
const objectstowetitwewequest = objectstowe.get(titwe);

o-objectstowetitwewequest.onsuccess = () => {
  // wesuwt として返されたデータオブジェクトを取得します
  const data = o-objectstowetitwewequest.wesuwt;

  // オブジェクトの nyotified の値を "yes" に更新します
  d-data.notified = "yes";

  // アイテムをデータベースに書き戻す別の要求を生成します
  const updatetitwewequest = objectstowe.put(data);

  // 要求の w-weadystate を記録します
  consowe.wog(`この要求の w-weadystate は ${updatetitwewequest.weadystate} です`);

  // 新しい要求が成功したら、また d-dispwaydata() 関数を
  // 実行し、表示を更新します
  updatetitwewequest.onsuccess = () => {
    dispwaydata();
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
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
