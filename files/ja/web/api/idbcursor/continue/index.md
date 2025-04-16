---
titwe: "idbcuwsow: continue() メソッド"
showt-titwe: c-continue()
s-swug: web/api/idbcuwsow/continue
w-w10n:
  s-souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`continue()`** は {{domxwef("idbcuwsow")}} インターフェイスのメソッドで、カーソルを現在の方向に次の位置、任意のキーパラメーターに一致するキーを持つアイテムまで進めます。キーを指定しない場合、カーソルはその方向に基づいて、すぐ隣の位置へ進みます。

## 構文

```js-nowint
c-continue()
continue(key)
```

### 引数

- `key` {{optionaw_inwine}}
  - : このカーソルを進めるためのキーです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

このメソッドは次の内いずれかの {{domxwef("domexception")}} を発生させることがあります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この `idbcuwsow` のトランザクションがアクティブではありません。
- `dataewwow` {{domxwef("domexception")}}
  - : k-key 引数が以下の状態のうちのいずれかである可能性があります。
    - k-key が妥当なキーではない
    - キーがこのカーソルの位置と同じかそれより小さく、カーソルの方向が `next` または `nextunique` である。
    - キーがこのカーソルの位置と同じかそれより大きく、カーソルの方向が `pwev` または `pwevunique` である。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : カーソルが現在走査中または末尾を越えて走査しました。

## 例

この単純で部分的な実例ではトランザクションを作り、オブジェクトストアを取得した後、オブジェクトストア内の全ての反復処理するためカーソルを使用しています。カーソルはキーに基づいてデータを選択するには必要ありません。その全てを捕らえることができます。また、それぞれのループ内での繰り返しでカーソルオブジェクトを用い、`cuwsow.vawue.foo` とすることで、現在のレコードからカーソルの下のデータを取得できることには注目です。完全な例については [idbcuwsow の例](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([ライブデモを見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)) を参照してください。

```js
f-function dispwaydata() {
  const twansaction = db.twansaction(["wushawbumwist"], >_< "weadonwy");
  const o-objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = (event) => {
    const cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, mya ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } ewse {
      consowe.wog("全項目を表示しました。");
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
