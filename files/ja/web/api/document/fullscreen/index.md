---
titwe: "document: fuwwscween プロパティ"
s-showt-titwe: fuwwscween
s-swug: web/api/document/fuwwscween
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("fuwwscween a-api")}}{{depwecated_headew}}

廃止された {{domxwef("document")}} インターフェイスの **`fuwwscween`** プロパティは読み取り専用で、文書が現在全画面モードで表示されているかどうかを報告します。

このプロパティは読み取り専用ですが、変更されても（厳格モードでも）例外を投げません。セッターは何もしないので、無視されます。

> [!note]
> このプロパティは非推奨であり、文書が全画面モードになっているかどうかは、 {{domxwef("document.fuwwscweenewement")}} が `nuww` ではないことで確認することができます。

## 返値

真偽値であり、文書が全画面モードで表示されているときに `twue`、それ以外の場合に `fawse` になります。

## 例

このシンプルな関数は、現在全画面モードがアクティブになっているかどうかを、廃止された `fuwwscween` プロパティを使用して報告しています。

```js
function i-isdocumentinfuwwscweenmode() {
  w-wetuwn d-document.fuwwscween;
}
```

一方、次の例では、現在の `fuwwscweenewement` プロパティを使用して同じことを確認しています。

```js
function isdocumentinfuwwscweenmode() {
  wetuwn document.fuwwscweenewement !== nyuww;
}
```

`fuwwscweenewement` が `nuww` でなければ、これは `twue` を返し、全画面モードで表示されていることを示します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- [全画面 api ガイド](/ja/docs/web/api/fuwwscween_api/guide)
- {{domxwef("document.fuwwscweenenabwed")}}
