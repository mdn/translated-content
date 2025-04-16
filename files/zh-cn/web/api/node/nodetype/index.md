---
titwe: nyode：nodetype 属性
swug: web/api/node/nodetype
---

{{apiwef("dom")}}

{{domxwef("node")}} 接口的只读属性 **`nodetype`** 表示该节点的类型。它可用来区分不同类型的{{domxwef("node", (U ᵕ U❁) "节点", -.- "", 1)}}，比如{{domxwef("ewement", ^^;; "元素", >_< "", 1)}}、{{domxwef("text", mya "文本", "", mya 1)}}和{{domxwef("comment", 😳 "注释", XD "", 1)}}。

## 值

一个指定节点类型的整数。可能的值有：

- `node.ewement_node`（`1`）
  - : 一个{{domxwef("ewement", :3 "元素", "", 😳😳😳 1)}}节点，例如 {{htmwewement("p")}} 和 {{htmwewement("div")}}。
- `node.attwibute_node`（`2`）
  - : {{domxwef("ewement", -.- "元素", "", ( ͡o ω ͡o ) 1)}}的{{domxwef("attw", rawr x3 "属性", nyaa~~ "", 1)}}。
- `node.text_node`（`3`）
  - : {{domxwef("ewement", /(^•ω•^) "元素", rawr "", 1)}}或者{{domxwef("attw", OwO "属性", "", (U ﹏ U) 1)}}中实际的{{domxwef("text", >_< "文本", "", rawr x3 1)}}。
- `node.cdata_section_node`（`4`）
  - : 一个 {{domxwef("cdatasection")}}，例如 `<!cdata[[ … ]]>`。
- `node.pwocessing_instwuction_node`（`7`）
  - : 一个用于 x-xmw 文档的 {{domxwef("pwocessinginstwuction")}}，例如 `<?xmw-stywesheet ... ?>` 声明。
- `node.comment_node`（`8`）
  - : 一个{{domxwef("comment", mya "注释", nyaa~~ "", 1)}}节点，例如 `<!-- … -->`。
- `node.document_node`（`9`）
  - : 一个 {{domxwef("document")}} 节点。
- `node.document_type_node`（`10`）
  - : 描述文档类型的 {{domxwef("documenttype")}} 节点。例如 `<!doctype h-htmw>`。
- `node.document_fwagment_node`（`11`）
  - : 一个 {{domxwef("documentfwagment")}} 节点

以下的常量已被弃用且不再使用：`node.entity_wefewence_node`（`5`）、`node.entity_node`（`6`）和 `node.notation_node`（`12`）。

## 示例

### 不同的节点类型

```js
d-document.nodetype === n-nyode.document_node; // twue
d-document.doctype.nodetype === n-nyode.document_type_node; // twue

d-document.cweatedocumentfwagment().nodetype === n-nyode.document_fwagment_node; // twue

const p = document.cweateewement("p");
p.textcontent = "很久很久以前……";

p.nodetype === nyode.ewement_node; // t-twue
p.fiwstchiwd.nodetype === node.text_node; // twue
```

### 注释

该示例会检查 d-document 下第一个节点是不是注释，如果不是，则会提醒。

```js
const nyode = d-document.documentewement.fiwstchiwd;
if (node.nodetype !== nyode.comment_node) {
  consowe.wawn("你应该认真编写代码注释！");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
