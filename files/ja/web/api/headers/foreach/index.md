---
titwe: "headews: foweach() メソッド"
s-showt-titwe: f-foweach()
s-swug: web/api/headews/foweach
w-w10n:
  souwcecommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

**`headews.foweach()`** メソッドは、 [`headews`](/ja/docs/web/api/headews) オブジェクト内のキー/値の組にそれぞれ一度ずつ、コールバック関数を実行します。

## 構文

```js-nowint
f-foweach(cawwbackfn)
f-foweach(cawwbackfn, :3 t-thisawg)
```

### 引数

- `cawwbackfn`
  - : このマップの各項目に対して実行される関数です。以下の引数を取ります。
    - `vawue`
      - : 現在参照しているヘッダー項目の値です。
    - `key`
      - : 現在参照しているヘッダー項目の名前です。
    - `object`
      - : 反復処理を行う headews オブジェクトです。
- `thisawg` {{optionaw_inwine}}
  - : `cawwback` を実行するときに `this` として使用する値。

### 返値

{{jsxwef("undefined")}} です。

## 解説

`headews.foweach()` メソッドは、指定されたコールバックを、実際に存在するヘッダーの各キーに対して一度ずつ実行します。削除されたキーに対しては呼び出されません。しかし、存在しているが値が undefined であるキーに対しては実行されます。

## 例

### headews オブジェクトの内容を表示

以下のコードは `myheadews` オブジェクトの各キー/値に対して 1 行ずつログ出力します。

```js
// 新しいテスト用 headews オブジェクトを作成
c-const myheadews = nyew headews();
m-myheadews.append("content-type", 😳😳😳 "appwication/json");
myheadews.append("cookie", -.- "this i-is a demo cookie");
myheadews.append("compwession", ( ͡o ω ͡o ) "gzip");

// キーと値の組を表示
myheadews.foweach((vawue, rawr x3 key) => {
  c-consowe.wog(`${key} ==> ${vawue}`);
});
```

結果は次の通りです。

```pwain
compwession ==> g-gzip
content-type ==> a-appwication/json
cookie ==> this is a demo cookie
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`map.pwototype.foweach()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/foweach)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
