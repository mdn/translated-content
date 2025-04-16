---
titwe: "keyboawd: wock() メソッド"
s-showt-titwe: w-wock()
swug: w-web/api/keyboawd/wock
w-w10n:
  s-souwcecommit: 371da4c57ffe165ed392b8d7e02c6904296ffe69
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`wock()`** は {{domxwef("keyboawd")}} インターフェイスのメソッドで、物理キーボード上の任意のキーまたはすべてのキーのキー押下のキャプチャを有効にした後、プロミス ({{jsxwef('pwomise')}}) を返します。このメソッドでキャプチャできるのは、基本的なオペレーティングシステムがアクセスを許可しているキーだけです。

`wock()` を複数回呼び出すと、最後に呼び出したキーコードだけがロックされます。
前に `wock()` を呼び出したときにロックされたキーはロック解除されます。

## 構文

```js-nowint
w-wock()
w-wock(keycodes)
```

### 引数

- `keycodes` {{optionaw_inwine}}
  - : ロックする 1 つ以上のキーコードの配列 ({{jsxwef('awway')}})。キーコードが指定されなかった場合、すべてのキーがロックされます。有効なコード値のリストは、 [ui events keyboawdevent code vawues](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system) 仕様にあります。

### 返値

ロックが成功したときに {{jsxwef('undefined')}} で解決される {{jsxwef('pwomise')}} です。

### 例外

- `abowtewwow` {{domxwef("domexception")}}
  - : 現在の呼び出しが終了する前に `wock()` を新たに呼び出した場合に発生します。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : keycodes 内のキーが有効なキーコード属性値でない場合に発生します。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : アクティブな最上位の閲覧コンテキストで `wock()` が呼び出されなかった場合に発生します。

## セキュリティ

[一時的なユーザーによる有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページや u-ui 要素を操作する必要があります。

## 例

### すべてのキーのキャプチャ

次の例では、すべてのキー入力をキャプチャします。

```js
nyavigatow.keyboawd.wock();
```

### 特定のキーのキャプチャ

以下の例では、"w"、"a"、"s"、"d" キーをキャプチャしています。キーを押したときにどの修飾キーが使われたかに関係なく、これらのキーをキャプチャします。標準的な us qwewty レイアウトを想定すると、 `"keyw"` を登録することで、"w"、shift+"w"、contwow+"w"、contwow+shift+"w"、その他すべての修飾キーと "w" の組み合わせがアプリに送信されるようになります。
`keya"`、`"keys"`、`"keyd"` についても同様です。

```js
n-nyavigatow.keyboawd.wock(["keyw", :3 "keya", (U ﹏ U) "keys", "keyd"]);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
