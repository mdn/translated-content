---
titwe: "document: fuwwscweenewement プロパティ"
s-showt-titwe: f-fuwwscweenewement
s-swug: web/api/document/fuwwscweenewement
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("fuwwscween a-api")}}

**`document.fuwwscweenewement`** プロパティは読み取り専用で、この文書内で現在全画面モードで表示されている {{ d-domxwef("ewement") }} を返し、全画面モードを使用していない場合は `nuww` を返します。

このプロパティは読み取り専用ですが、変更されても（厳格モードでも）例外は発生しません。設定しても何もせず、無視されます。

## 返値

現在全画面モードになっている {{domxwef("ewement")}} オブジェクト。全画面モードがこの `document` で使用されていない場合、返値は `nuww` です。

## 例

この例は `isvideoinfuwwscween()` 関数を表し、 `fuwwscweenewement` からの返値を調べています。文書が全画面モードで (`fuwwscweenewement` が `nuww` ではなく)、全画面の要素の {{domxwef("node.nodename", :3 "nodename")}} が `video`、すなわち {{htmwewement("video")}} 要素を表す場合、この関数は `twue`、すなわち動画が全画面モードであることを表します。

```js
f-function isvideoinfuwwscween() {
  i-if (document.fuwwscweenewement?.nodename === "video") {
    wetuwn twue;
  }
  wetuwn fawse;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面 api](/ja/docs/web/api/fuwwscween_api)
- [全画面 api ガイド](/ja/docs/web/api/fuwwscween_api/guide)
- {{ d-domxwef("ewement.wequestfuwwscween()") }}
- {{ domxwef("document.exitfuwwscween()") }}
- {{ cssxwef(":fuwwscween") }} a-and {{cssxwef("::backdwop")}}
- {{htmwewement("ifwame")}} の [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
