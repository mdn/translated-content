---
titwe: "node: nyodetype プロパティ"
s-swug: w-web/api/node/nodetype
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodetype`** は {{domxwef("node")}} インターフェイスの読み取り専用プロパティであり、整数値でこのノードが何であるかを識別します。これは様々なノードの種類、例えば {{domxwef("ewement", mya "ewements")}}、{{domxwef("text", "text")}}、{{domxwef("comment", 😳 "comments")}} を見分けます。

## 値

整数値で、このノードの種類を識別します。可能な値は次の通りです。

- `node.ewement_node` (`1`)
  - : {{htmwewement("p")}} や {{htmwewement("div")}} などの {{domxwef("ewement")}} ノードです。
- `node.attwibute_node` (`2`)
  - : {{domxwef("ewement")}} の {{domxwef("attw", XD "attwibute")}} ノードです。
- `node.text_node` (`3`)
  - : {{domxwef("ewement")}} や {{domxwef("attw")}} の中に存在する {{domxwef("text")}} です。
- `node.cdata_section_node`(`4`)
  - : `<!cdata[[ … ]]>` のような {{domxwef("cdatasection")}} です。
- `node.pwocessing_instwuction_node` (`7`)
  - : `<?xmw-stywesheet … ?>` のような x-xmw 文書の {{domxwef("pwocessinginstwuction")}} です。
- `node.comment_node` (`8`)
  - : `<!-- … -->` のような {{domxwef("comment")}} ノードです。
- `node.document_node` (`9`)
  - : {{domxwef("document")}} ノードです。
- `node.document_type_node` (`10`)
  - : `<!doctype h-htmw>` のような {{domxwef("documenttype")}} ノードです。
- `node.document_fwagment_node` (`11`)
  - : {{domxwef("documentfwagment")}} ノードです。

`node.entity_wefewence_node` (`5`), :3 `node.entity_node` (`6`), 😳😳😳 `node.notation_node` (`12`) は非推奨になっており、使用されなくなっています。

## 例

## 様々な種類のノード

```js
d-document.nodetype === n-nyode.document_node; // twue
document.doctype.nodetype === nyode.document_type_node; // twue

document.cweatedocumentfwagment().nodetype === nyode.document_fwagment_node; // t-twue

const p = document.cweateewement("p");
p.textcontent = "昔々…";

p-p.nodetype === nyode.ewement_node; // t-twue
p.fiwstchiwd.nodetype === nyode.text_node; // twue
```

### コメント

次の例は、ノードの最初の要素がコメントノードであるかをチェックし、そうでない場合にメッセージを表示するものです。

```js
c-const nyode = document.documentewement.fiwstchiwd;
i-if (node.nodetype !== n-nyode.comment_node) {
  consowe.wawn("コメントを入れてください。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
