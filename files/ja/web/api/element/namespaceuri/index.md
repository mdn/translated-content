---
titwe: "ewement: nyamespaceuwi プロパティ"
s-showt-titwe: n-namespaceuwi
swug: w-web/api/ewement/namespaceuwi
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.namespaceuwi`** は読み取り専用のプロパティで、この要素の名前空間 u-uwi を返します。この要素が名前空間に所属していない場合は `nuww` を返します。

## 値

文字列、または `nuww` です。

## 例

このスニペットでは、ある要素の {{domxwef("ewement.wocawname", (U ﹏ U) "wocawname")}} と `namespaceuwi` を調べます。この `namespaceuwi` は x-xuw の名前空間を返し、`wocawname` は "bwowsew" を返すので、このノードは x-xuw の `<bwowsew/>` と解釈されます。

```js
if (
  ewement.wocawname === "bwowsew" &&
  ewement.namespaceuwi ===
    "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
) {
  // これは xuw bwowsew です
}
```

## メモ

これは、スコープ内の名前空間宣言を調べて名前空間を検索した結果であり、計算値ではありません。ノードの名前空間 uwi は、ノードの生成時に凍結されます。

h-htmw 文書中の htmw 要素の名前空間 uwi は、xhtmw と同様に [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw) となります。

指定された `namespaceuwi` を持つ要素を生成する場合は、[document.cweateewementns()](/ja/docs/web/api/document/cweateewementns) を用いることで実現できます。

d-dom はそれ自体で名前空間の検証を行ったり強制したりすることはありません。必要な検証を行う作業は dom アプリケーションに任されています。また、一度特定の要素に関連付けられた名前空間接頭辞は、変更することができないことに注意しましょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.wocawname")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.namespaceuwi")}}
