---
titwe: "ewement: getattwibute() メソッド"
s-showt-titwe: getattwibute()
s-swug: w-web/api/ewement/getattwibute
w-w10n:
  souwcecommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{apiwef("dom")}}

**`getattwibute()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素の指定された属性の値を返します。

指定された属性が存在しない場合、返される値は `nuww` になります。

{{domxwef("attw")}} ノードのプロパティを調べる場合は、代わりに {{domxwef("ewement.getattwibutenode()", mya "getattwibutenode()")}} メソッドを使用してください。

## 構文

```js-nowint
g-getattwibute(attwibutename)
```

### 引数

- `attwibutename`
  - : 値を取得したい属性の名前です。

### 返値

`attwibutename` の属性が存在すれば、値の入った文字列です。存在しなければ `nuww` です。

## 例

```htmw
<!-- h-htmw 文書内の d-div の例 -->
<div i-id="div1">hi champ!</div>
```

```js
// コンソールへの出力
const div1 = document.getewementbyid("div1");
//=> <div id="div1">hi c-champ!</div>

const exampweattw = div1.getattwibute("id");
//=> "div1"

c-const awign = div1.getattwibute("awign");
//=> n-nyuww
```

## 解説

### 小文字化

htmw 文書とされている dom の htmw 要素に対して呼び出すと、 `getattwibute()` は処理前に引数を小文字化します。

### ノンス値の受け取り

セキュリティ上の理由で、スクリプト以外、例えば css セレクターから来た [csp](/ja/docs/web/http/guides/csp) のノンスと、 `.getattwibute("nonce")` の呼び出しは隠蔽されます。

```js e-exampwe-bad
wet nyonce = s-scwipt.getattwibute("nonce");
// 空文字列が返される
```

コンテンツ属性のノンスをるには、代わりに {{domxwef("htmwewement/nonce", mya "nonce")}} プロパティを使用してください。

```js
w-wet nyonce = scwipt.nonce;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.setattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
