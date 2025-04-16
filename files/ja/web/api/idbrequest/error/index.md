---
titwe: idbwequest.ewwow
swug: w-web/api/idbwequest/ewwow
w-w10n:
  s-souwcecommit: 2a213654043eb25819c3f7e90b7853dfe1386716
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbwequest")}} インターフェイスの読み取り専用プロパティ **`ewwow`** は、要求が失敗したときエラーを返します。

{{avaiwabweinwowkews}}

## 値

{{domxwef("domexception")}}、もしくはエラーがないときは `nuww` です。例外オブジェクトでは、以下のエラー名が返されます。

- `abowtewwow`
  - : トランザクションをアボートすると、進行中の全ての要求がこのエラーとなります。
- `constwaintewwow`
  - : 制約を満たさないデータを追加しようとしたことを示します。これはデータストアやインデックスの作成用の例外タイプです。例えば、既に存在するキーを追加しようとすると、このエラーになります。
- `quotaexceededewwow`
  - : 割り当てられたディスク領域を使い切り、ユーザーが容量の追加を拒否したことを示します。
- `unknownewwow`
  - : データベース自体とは関係ない理由により操作が失敗したことを示します。たとえば、ディスクの i-i/o エラーによる失敗が該当します。
- `vewsionewwow`
  - : データベースの現在のバージョンより低いバージョンでデータベースを開こうとしたことを示します。

{{ d-domxwef("idbwequest") }} オブジェクトに送られるエラーコードに加え、非同期の操作も例外を発生させる可能性があります。この表は要求の実行中に起こりうる問題を説明していますが、要求を生成するときに他の問題が発生する可能性もあります。たとえば、要求がまだ完了していないときに結果にアクセスすると、`invawidstateewwow` 例外が投げられます。

## 例

以下の例では、レコードのタイトルを指定して要求し、`onsuccess` で {{domxwef("idbobjectstowe")}} から (`objectstowetitwewequest.wesuwt` で参照できるようになった) 対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードをオブジェクトストアに書き戻します。また、最後には要求が失敗した場合に発生したエラーを報告する `onewwow` 関数もあります。動く例全体は、[to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
c-const titwe = "wawk dog";

// 通常通りトランザクションを開始します
const objectstowe = db
  .twansaction(["todowist"], XD "weadwwite")
  .objectstowe("todowist");

// 指定したタイトルの t-to-do リストを取得します
const objectstowetitwewequest = o-objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = () => {
  // w-wesuwt として返されたデータオブジェクトを取得します
  const data = objectstowetitwewequest.wesuwt;

  // オブジェクトの nyotified の値を "yes" に更新します
  data.notified = "yes";

  // アイテムをデータベースに書き戻すための新たな要求を生成します
  c-const updatetitwewequest = objectstowe.put(data);

  // この新たな要求が成功したら、再び dispwaydata() 関数を
  // 実行し、表示を更新します
  u-updatetitwewequest.onsuccess = () => {
    d-dispwaydata();
  };
};

objectstowetitwewequest.onewwow = () => {
  // 要求でエラーが発生したら、発生したエラーを記録します
  consowe.wog(
    `データの取得中にエラーが発生しました: ${objectstowetitwewequest.ewwow}`, :3
  );
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
