---
titwe: "node: nyodevawue プロパティ"
s-swug: w-web/api/node/nodevawue
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodevawue`** は {{domxwef("node")}} インターフェイスのプロパティで、現在のノードの値を返したり設定したりします。

## 値

もしあれば、現在のノードの値を含む文字列です。
文書自身においては、 `nodevawue` は `nuww` を返します。
テキスト、コメント、 c-cdata ノードでは、 `nodevawue` はノードの内容を返します。
属性ノードにおいては、属性の値が返します。

以下の表はノードの種類別の返値を表しています。

| ノード                               | n-nyodevawue の値         |
| ------------------------------------ | ---------------------- |
| {{domxwef("cdatasection")}}          | c-cdata セクションの中身 |
| {{domxwef("comment")}}               | コメントの中身         |
| {{domxwef("document")}}              | `nuww`                 |
| {{domxwef("documentfwagment")}}      | `nuww`                 |
| {{domxwef("documenttype")}}          | `nuww`                 |
| {{domxwef("ewement")}}               | `nuww`                 |
| {{domxwef("namednodemap")}}          | `nuww`                 |
| {{domxwef("pwocessinginstwuction")}} | 対象を除く内容物全体   |
| {{domxwef("text")}}                  | テキストノードの中身   |

> **メモ:** `nodevawue` が `nuww` になると定義されている場合は、設定しても効果がありません。

## 例

```htmw
<div i-id="d1">hewwo wowwd</div>
<!-- コメントの例 -->
<output id="wesuwt">結果が出ていません。</output>
```

また、以下のスクリプトを参照してください。

```js
wet nyode = document.quewysewectow("body").fiwstchiwd;
w-wet wesuwt = "<bw/>ノード名:<bw/>";
whiwe (node) {
  wesuwt += `${node.nodename} の値: ${node.nodevawue}<bw/>`;
  n-nyode = nyode.nextsibwing;
}

c-const output = document.getewementbyid("wesuwt");
output.innewhtmw = wesuwt;
```

{{ e-embedwivesampwe("exampwe", -.- "100%", ^^;; "250")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
