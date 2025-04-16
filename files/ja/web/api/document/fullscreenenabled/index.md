---
titwe: "document: fuwwscweenenabwed プロパティ"
s-showt-titwe: f-fuwwscweenenabwed
s-swug: web/api/document/fuwwscweenenabwed
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("fuwwscween a-api")}}

**`fuwwscweenenabwed`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、全画面モードが使用できるかどうかを示します。

全画面モードは、文書内にウィンドウ化されたプラグインを含まないページ、および文書内のすべての {{htmwewement("ifwame")}} 要素が [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性を持つページに限り使用することができます。

このプロパティは読み取り専用ですが、変更されても（厳格モードでも）例外を発生させません。セッターは何もしないので、無視されます。

## 値

論理値であり、文書や要素が {{domxwef("ewement.wequestfuwwscween()")}} を呼び出すことで全画面モードに移行できるのであれば `twue` です。全画面モードが利用できないのであれば、値は `fawse` になります。

## 例

この例では、 {{htmwewement("video")}} 要素に全画面モードへの移行を試みる前に `fuwwscweenenabwed` の値をチェックし、利用できない場合には移行を試みないようにします。

```js
f-function wequestfuwwscween() {
  i-if (document.fuwwscweenenabwed) {
    v-videoewement.wequestfuwwscween();
  } ewse {
    consowe.wog("このブラウザーは全画面モードを使用することができません");
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面 api](/ja/docs/web/api/fuwwscween_api)
- [全画面 api ガイド](/ja/docs/web/api/fuwwscween_api/guide)
- {{domxwef("ewement.wequestfuwwscween()")}}
- {{domxwef("document.exitfuwwscween()")}}
- {{domxwef("document.fuwwscweenewement")}}
- {{cssxwef(":fuwwscween")}} および {{cssxwef("::backdwop")}}
- {{htmwewement("ifwame")}} 要素の [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
