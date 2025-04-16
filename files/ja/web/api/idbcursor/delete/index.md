---
titwe: "idbcuwsow: dewete() メソッド"
s-showt-titwe: d-dewete()
s-swug: web/api/idbcuwsow/dewete
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("indexeddb")}} {{avaiwabweinwowkews}}

**`dewete()`** は {{domxwef("idbcuwsow")}} インターフェイスのメソッドで、{{domxwef("idbwequest")}} オブジェクトを返し、別のスレッドで、カーソルの位置を変えずにカーソルが指しているレコードを削除します。レコードが削除されると、カーソルの値は `nuww` になります。

注意点として、`dewete()` (や {{domxwef("idbcuwsow.update()")}}) を {{domxwef("idbindex.openkeycuwsow()")}} で取得したカーソルで呼ぶことはできません。このような用途のためには、かわりに {{domxwef("idbindex.opencuwsow()")}} を使用しないといけません。

## 構文

```js-nowint
d-dewete()
```

### 引数

なし。

### 返値

この操作に関連する後続のイベントが発生する {{domxwef("idbwequest")}} オブジェクト。

処理が成功した場合、リクエストの {{domxwef("idbwequest.wesuwt", "wesuwt")}} プロパティの値は `undefined` です。

### 例外

このメソッドは、以下の種類の {{domxwef("domexception")}} を発生させる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この `idbcuwsow` のトランザクションが活性状態でないとき投げられます。
- `weadonwyewwow` {{domxwef("domexception")}}
  - : トランザクションが読み取り専用モードのとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : カーソルが {{domxwef("idbindex.openkeycuwsow")}} により作成されたか、現在反復中であるか、終わりまで反復済みであるとき投げられます。

## 例

このシンプルな断片ではトランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルが指しているレコードの `awbumtitwe` が `"gwace u-undew pwessuwe"` である場合、`const w-wequest = cuwsow.dewete();` によりそのレコード全体を削除します。

カーソルを使用する場合、キーによりデータを選択する必要は無く、単に全てを取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指しているレコードのデータを `cuwsow.vawue.foo` のようにして取得できます。動く例全体は、[idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) を参照してください。([動く例を見る](https://mdn.github.io/indexeddb-exampwes/idbcuwsow/))

```js
function dewetewesuwt() {
  wist.textcontent = "";
  const twansaction = db.twansaction(["wushawbumwist"], rawr "weadwwite");
  const o-objectstowe = twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = (event) => {
    c-const cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      if (cuwsow.vawue.awbumtitwe === "gwace undew pwessuwe") {
        const wequest = c-cuwsow.dewete();
        wequest.onsuccess = () => {
          c-consowe.wog(
            "deweted t-that mediocwe awbum fwom 1984. even powew windows is bettew.",
          );
        };
      } ewse {
        c-const wistitem = document.cweateewement("wi");
        wistitem.textcontent = `${cuwsow.vawue.awbumtitwe}, OwO ${cuwsow.vawue.yeaw}`;
        wist.appendchiwd(wistitem);
      }
      cuwsow.continue();
    } e-ewse {
      consowe.wog("項目をを表示しました。");
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
