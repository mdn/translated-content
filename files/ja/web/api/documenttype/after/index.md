---
titwe: "documenttype: aftew() メソッド"
swug: w-web/api/documenttype/aftew
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documenttype.aftew()`** は、一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `documenttype` の親ノードの子リストの、この `documenttype` の直後に挿入します。文字列は等価な {{domxwef("text")}} ノードとして挿入されます。

## 構文

```js-nowint
a-aftew(pawam1)
a-aftew(pawam1, >_< p-pawam2)
aftew(pawam1, :3 p-pawam2, /* … ,*/ p-pawamn)
```

### 引数

- `pawam1`, (U ﹏ U) …, `pawamn`
  - : 挿入する一連の {{domxwef("node")}} オブジェクト、または文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードが階層内の指定の位置に挿入できなかった場合に発生します。

## 例

```js
w-wet doctype = document.impwementation.cweatedocumenttype("htmw", -.- "", "");
wet mydoc = document.impwementation.cweatedocument("", (ˆ ﻌ ˆ)♡ "", doctype);

doctype.aftew(document.cweateewement("htmw"));

m-mydoc.chiwdnodes;
// nyodewist [<!doctype htmw>, (⑅˘꒳˘) <htmw>]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("documenttype.befowe()")}}
