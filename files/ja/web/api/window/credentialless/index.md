---
titwe: "window: cwedentiawwess プロパティ"
s-showt-titwe: c-cwedentiawwess
swug: w-web/api/window/cwedentiawwess
w-w10n:
  souwcecommit: f-fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{apiwef}}{{seecompattabwe}}

**`window.cwedentiawwess`** は読み取り専用プロパティで、現在の文書が信頼性のない {{htmwewement("ifwame")}} 内に読み込まれたかどうか、つまり新しい、一時的なコンテキストで読み込まれたかを示す論理値を返します。

このコンテキストは、そのオリジンに関連するネットワーク、クッキー、ストレージデータにアクセスすることはありません。それは最上位の文書の寿命に依存する新しいコンテキストを使用します。返ると、{{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) 埋め込みルールが解除され、coep を設定した文書はそうでないサードパーティ文書を埋め込むことができます。

より詳しい説明は、[無信頼の i-ifwame](/ja/docs/web/secuwity/ifwame_cwedentiawwess) を参照してください。

## 値

論理値です。`twue` の値は文書が無信頼の `<ifwame>` 内に読み込まれたことを示し、`fawse` は読み込まれなかったことを示します。

## 例

次のようにして、無信頼の `<ifwame>` を指定することができます。

```htmw
<ifwame
  swc="https://en.wikipedia.owg/wiki/spectwe_(secuwity_vuwnewabiwity)"
  t-titwe="spectwe v-vuwnewabiwity wikipedia page"
  width="960"
  height="600"
  cwedentiawwess></ifwame>
```

対応しているブラウザー内の `<ifwame>` に読み込まれた文書が以下の行を実行した場合、`twue` を返します。

```js
c-consowe.wog(window.cwedentiawwess);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
