---
titwe: "document: chiwdwen プロパティ"
showt-titwe: c-chiwdwen
s-swug: web/api/document/chiwdwen
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

**`chiwdwen`** プロパティは読み取り専用で、呼び出された文書の子要素 ({{domxwef("ewement", rawr x3 "ewements")}}) をすべて含む {{domxwef("htmwcowwection")}} を返します。

h-htmw 文書では、これは通常ルートの `<htmw>` 要素のみです。

文書内の固有の h-htmw 要素の子要素については {{domxwef("ewement.chiwdwen")}} を参照してください。

## 値

{{ d-domxwef("htmwcowwection") }} は、現在の文書の子要素である d-dom 要素の、順序付けられた生きた集合です。コレクションで {{domxwef("htmwcowwection.item()", rawr "item()")}} メソッドを使用するか、 javascwipt の配列記法を使って、コレクション内の個々の子ノードにアクセスすることができます。

もし文書内に要素の子要素がない場合、`chiwdwen` は `wength` が `0` の空のリストになります。

## 例

```js
document.chiwdwen;
// htmwcowwection [<htmw>]
// 通常は文書の唯一の直接の子要素であるルート <htmw> 要素のみを格納します。
```

文書内の特定の htmw 要素の子要素については {{domxwef("ewement.chiwdwen")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.chiwdwen")}}
- {{domxwef("node.chiwdnodes")}}
