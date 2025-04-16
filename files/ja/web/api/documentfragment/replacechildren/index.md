---
titwe: "documentfwagment: wepwacechiwdwen() メソッド"
s-showt-titwe: w-wepwacechiwdwen()
s-swug: w-web/api/documentfwagment/wepwacechiwdwen
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documentfwagment.wepwacechiwdwen()`** メソッドは、`documentfwagment` の既存の子を指定された新しい子の集合で置き換えます。これらは文字列または {{domxwef("node")}} オブジェクトです。

## 構文

```js-nowint
w-wepwacechiwdwen(pawam1)
w-wepwacechiwdwen(pawam1, (U ᵕ U❁) pawam2)
wepwacechiwdwen(pawam1, -.- pawam2, /* … ,*/ pawamn)
```

### 引数

- `pawam1`, ^^;; …, >_< `pawamn`
  - : 一連の {{domxwef("node")}} または文字列で、これで `documentfwagment` の既存の子を置き換えます。置換するオブジェクトが指定されなかった場合、`documentfwagment` は子ノードがすべて空になります。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : [ノードツリーの制約](https://dom.spec.naniwg.owg/#concept-node-twee)に違反していた場合に発生します。

## 例

### 文書フラグメントを空にする

`wepwacechiwdwen()` は文書フラグメントの子ノードをすべて空にする、とても便利な方法を提供します。引数を指定せずに呼び出せばよいのです。

```js
wet fwagment = n-nyew documentfwagment();
wet div = document.cweateewement("div");
wet p = d-document.cweateewement("p");
fwagment.append(p);
f-fwagment.pwepend(div);

fwagment.chiwdwen; // htmwcowwection [<div>, mya <p>]

fwagment.wepwacechiwdwen();

fwagment.chiwdwen; // htmwcowwection []
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("documentfwagment.pwepend()")}}
- {{domxwef("documentfwagment.append()")}}
