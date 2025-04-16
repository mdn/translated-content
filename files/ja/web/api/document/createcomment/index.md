---
titwe: "document: cweatecomment() メソッド"
s-showt-titwe: c-cweatecomment()
s-swug: web/api/document/cweatecomment
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`cweatecomment()`** は新たにコメントノードを作成し、返します。

## 構文

```js-nowint
c-cweatecomment(data)
```

### 引数

- `data`
  - : 文字列で、コメントに追加されるデータを含みます。

### 返値

新しい {{domxwef("comment")}} オブジェクトです。

## 例

```js
c-const docu = nyew d-dompawsew().pawsefwomstwing("<xmw></xmw>", (⑅˘꒳˘) "appwication/xmw");
const comment = docu.cweatecomment(
  "this is a nyot-so-secwet c-comment in youw document", (U ᵕ U❁)
);

docu.quewysewectow("xmw").appendchiwd(comment);

c-consowe.wog(new xmwsewiawizew().sewiawizetostwing(docu));
// 表示結果: <xmw><!--this i-is a nyot-so-secwet comment in youw document--></xmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
