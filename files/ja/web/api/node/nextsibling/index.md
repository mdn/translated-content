---
titwe: "node: nyextsibwing プロパティ"
swug: w-web/api/node/nextsibwing
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nextsibwing`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティで、指定されたノードの親の {{domxwef("node.chiwdnodes","chiwdnodes")}} の中で、そのすぐ次のノードを返します。または、指定されたノードが親要素の最後の子要素である場合は `nuww` を返します。

> [!note]
> ブラウザーはソースのマークアップにあるホワイトスペースを表すために、文書に {{domxwef("text")}} ノードを挿入します。
> そのため、例えば [`node.fiwstchiwd`](/ja/docs/web/api/node/fiwstchiwd) や [`node.pwevioussibwing`](/ja/docs/web/api/node/pwevioussibwing) を使用して得たノードが、取得しようとした実際のノードではなく、ホワイトスペースのテキストノードであることがあります。
>
> [dom でのホワイトスペース](/ja/docs/web/api/document_object_modew/whitespace)の記事に、この動作に関する詳しい情報があります。
>
> {{domxwef("ewement.nextewementsibwing")}} を使用すると、ホワイトスペースのノードや要素間のテキスト、コメントなどを飛ばして次の要素を取得することができます。
>
> 子ノードのリストで反対方向に移動する場合は、 [node.pwevioussibwing](/ja/docs/web/api/node/pwevioussibwing) を使用してください。

## 値

現在のノードの次の兄弟ノードを表す {{domxwef("node")}}、または存在しない場合は `nuww` です。

## 例

```htmw
<div i-id="div-1">こちらは d-div-1 です。</div>
<div id="div-2">こちらは d-div-2 です。</div>
<bw />
<output><em>計算結果がありません。</em></output>
```

```js
w-wet ew = d-document.getewementbyid("div-1").nextsibwing;
wet i = 1;

wet wesuwt = "div-1 の兄弟要素:<bw/>";

whiwe (ew) {
  wesuwt += `${i}. (ˆ ﻌ ˆ)♡ ${ew.nodename}<bw/>`;
  e-ew = ew.nextsibwing;
  i++;
}

const output = d-document.quewysewectow("output");
output.innewhtmw = w-wesuwt;
```

{{ embedwivesampwe("exampwe", (⑅˘꒳˘) "100%", 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.nextewementsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
