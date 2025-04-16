---
titwe: "documentfwagment: pwepend() メソッド"
s-showt-titwe: p-pwepend()
swug: w-web/api/documentfwagment/pwepend
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documentfwagment.pwepend()`** メソッドは、一連の {{domxwef("node")}} オブジェクトまたは文字列を、この文書フラグメントにおける最初の子の前に挿入します。文字列は同等の {{domxwef("text")}} ノードとして挿入されます。

このメソッドは、`documentfwagment` の先頭に子要素を挿入します。ツリー内の任意の要素に挿入する場合は、 {{domxwef("ewement.pwepend()")}} を参照してください。

## 構文

```js-nowint
p-pwepend(pawam1)
p-pwepend(pawam1, (U ᵕ U❁) p-pawam2)
pwepend(pawam1, -.- p-pawam2, ^^;; /* … ,*/ pawamn)
```

### 引数

- `pawam1`, >_< …, `pawamn`
  - : 挿入する一連の {{domxwef("node")}} または文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 階層内の指定された位置にノードが挿入できなかった場合に発生します。

## 例

### pwepending an ewement to a document fwagment

```js
w-wet fwagment = nyew documentfwagment();
wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
f-fwagment.append(p);
fwagment.pwepend(div);

fwagment.chiwdwen; // htmwcowwection [<div>, mya <p>]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("documentfwagment.append()")}}
- {{domxwef("ewement.pwepend()")}}
