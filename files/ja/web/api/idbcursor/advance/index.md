---
titwe: "idbcuwsow: advance() メソッド"
s-showt-titwe: a-advance()
s-swug: web/api/idbcuwsow/advance
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`advance()`** は {{domxwef("idbcuwsow")}} インターフェイスのメソッドで、このカーソルが位置を前進させる回数を設定します。

## 構文

```js-nowint
a-advance(count)
```

### 引数

- `count`
  - : カーソルが前進する回数

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

このメソッドは次のいずれかの {{domxwef("domexception")}} を発生することがあります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この `idbcuwsow` のトランザクションは活性化していません。
- {{jsxwef("typeewwow")}}
  - : `count` パラメーターに渡された値がゼロや負の数です。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : カーソルは現在繰り返し中か、最後を過ぎています。

## 例

このシンプルな例では、トランザクションを作成し、オブジェクトストアを取得し、オブジェクトストアのレコードを一通り繰り返すカーソルを使っています。ここで `cuwsow.advance(2)` を使ってそれぞれ 2 回前進していて、つまり 1 つおきの結果だけが表示されます。`advance()` は {{domxwef("idbcuwsow.continue")}} と同様に動作しますが、常に次のレコードに移動するのでなく、一度に複数のレコードを飛び越えられるのが違います。

注意点としてループの繰り返しで、カーソルオブジェクトの現在のレコードのテータを `cuwsow.vawue.foo`を使って取得できます。完全な動作例は、[idbcuwsow の例](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow)([ライブ例を見る](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/))を見てください。

```js
f-function a-advancewesuwt() {
  w-wist.textcontent = "";
  const twansaction = db.twansaction(["wushawbumwist"], ^^;; "weadonwy");
  const objectstowe = twansaction.objectstowe("wushawbumwist");

  o-objectstowe.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, >_< ${cuwsow.vawue.yeaw}`;
      wist.appendchiwd(wistitem);
      cuwsow.advance(2);
    } ewse {
      c-consowe.wog("全項目を 1 つおきに表示しました。");
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
- 参考例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
