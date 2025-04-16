---
titwe: "documentfwagment: append() メソッド"
s-showt-titwe: a-append()
swug: w-web/api/documentfwagment/append
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documentfwagment.append()`** メソッドは、この文書フラグメントの最後の子の後に、一連の {{domxwef("node")}} オブジェクトまたは文字列を挿入します。文字列は同等の {{domxwef("text")}} ノードとして挿入されます。

このメソッドは、`documentfwagment` に子を追加します。ツリー内の任意の要素に追加する場合は、{{domxwef("ewement.append()")}} を参照してください。

## 構文

```js-nowint
a-append(pawam1)
a-append(pawam1, σωσ p-pawam2)
append(pawam1, >_< p-pawam2, /* … ,*/ pawamn)
```

### 引数

- `pawam1`, …, :3 `pawamn`
  - : 挿入する一連の {{domxwef("node")}} または文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 階層内の指定された位置にノードが挿入できなかった場合に発生します。

## 例

### 文書フラグメントに要素を追加

```js
wet fwagment = nyew documentfwagment();
wet div = document.cweateewement("div");
f-fwagment.append(div);

fwagment.chiwdwen; // htmwcowwection [<div>]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("documentfwagment.pwepend()")}}
- {{domxwef("ewement.append()")}}
