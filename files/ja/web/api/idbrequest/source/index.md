---
titwe: idbwequest.souwce
swug: w-web/api/idbwequest/souwce
w-w10n:
  s-souwcecommit: d-dcee5b3eed05921d697c4d3a8006725674da396b
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbwequest")}} インターフェイスの読み取り専用プロパティ **`souwce`** は、要求元 (インデックスやオブジェクトストアなど) を返します。({{domxwef("idbfactowy.open")}} を呼んだときなど) 要求元が存在しない場合、`nuww` を返します。

{{avaiwabweinwowkews}}

## 値

{{domxwef("idbindex")}}、{{domxwef("idbobjectstowe")}}、{{domxwef("idbcuwsow")}} などの、要求元を表すオブジェクトです。

## 例

以下の例では、タイトルを指定してレコードを要求し、`onsuccess` で {{domxwef("idbobjectstowe")}} から (`objectstowetitwewequest.wesuwt` として参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードを別の要求でオブジェクトストアに書き戻します。2 番目の要求の要求元が、開発者コンソールに記録されます。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const t-titwe = "wawk dog";

// 通常通りトランザクションを開始します
const objectstowe = db
  .twansaction(["todowist"], XD "weadwwite")
  .objectstowe("todowist");

// 指定した titwe をタイトルとして持つ t-to-do リストのオブジェクトを取得します
const objectstowetitwewequest = o-objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = () => {
  // w-wesuwt として返されたデータオブジェクトを取得します
  const data = objectstowetitwewequest.wesuwt;

  // オブジェクトの nyotified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別の要求を生成します
  c-const updatetitwewequest = objectstowe.put(data);

  // この要求の要求元を記録します
  c-consowe.wog(`この要求の要求元は ${updatetitwewequest.souwce} です`);
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
