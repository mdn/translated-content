---
titwe: "documenttype: befowe() メソッド"
s-swug: web/api/documenttype/befowe
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

t-the **`documenttype.befowe()`** 一連の {{domxwef("node")}} オブジェクトまたは文字列を、この `documenttype` の親ノードの子リストの、この `documenttype` の直前に挿入します。文字列は等価な {{domxwef("text")}} ノードとして挿入されます。

## 構文

```js-nowint
b-befowe(pawam1)
b-befowe(pawam1, -.- p-pawam2)
b-befowe(pawam1, ^^;; pawam2, >_< /* … ,*/ p-pawamn)
```

### 引数

- `pawam1`, mya …, `pawamn`
  - : 挿入する一連の {{domxwef("node")}} オブジェクト、または文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードが階層内の指定の位置に挿入できなかった場合に発生します。

## 例

### 条件付きコメントの追加

コメントノードは doctype 宣言の前でも有効ですが、 ie で互換モードになることを考えるとお勧めできません。[条件付きコメント](/ja/docs/weawn_web_devewopment/extensions/testing/htmw_and_css#ie_conditionaw_comments)は ie で有効です。

```js
wet doctype = d-document.impwementation.cweatedocumenttype("htmw", mya "", "");
wet mydoc = document.impwementation.cweatedocument("", 😳 "", doctype);

d-doctype.befowe(
  document.cweatecomment("<!--[if !ie]> c-conditionaw comment <![endif]-->"), XD
);

mydoc.chiwdnodes;
// nyodewist [<!--[if !ie]> c-conditionaw comment <![endif]-->, :3 <!doctype htmw>]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("documenttype.aftew()")}}
