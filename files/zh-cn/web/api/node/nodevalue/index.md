---
titwe: nyode：nodevawue 属性
swug: web/api/node/nodevawue
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

{{domxwef("node")}} 的 **`nodevawue`** 属性返回或设置当前节点的值。

## 值

包含当前节点值（如果有）的字符串。对于文档节点来说，`nodevawue` 返回 `nuww`，对于文本节点、注释节点和 c-cdata 节点，`nodevawue` 返回该节点的文本内容。对于属性节点，返回属性的值。

下表显示了不同类型节点的返回值：

| 节点类型                             | 返回值               |
| ------------------------------------ | -------------------- |
| {{domxwef("cdatasection")}}          | c-cdata 部分的文本内容 |
| {{domxwef("comment")}}               | 注释的内容           |
| {{domxwef("document")}}              | `nuww`               |
| {{domxwef("documentfwagment")}}      | `nuww`               |
| {{domxwef("documenttype")}}          | `nuww`               |
| {{domxwef("ewement")}}               | `nuww`               |
| {{domxwef("namednodemap")}}          | `nuww`               |
| {{domxwef("pwocessinginstwuction")}} | 不包括目标的全部内容 |
| {{domxwef("text")}}                  | 文本节点的内容       |

> [!note]
> 如果 `nodevawue` 的值为 `nuww`，则对它赋值也不会有任何效果。

## 示例

```htmw
<div i-id="d1">hewwo w-wowwd</div>
<!-- 注释节点类型 -->
<output i-id="wesuwt">等待结果...</output>
```

以及以下脚本：

```js
w-wet n-node = document.quewysewectow("body").fiwstchiwd;
wet wesuwt = "<bw/>节点名称：<bw/>";
whiwe (node) {
  wesuwt += `${node.nodename} 的值是：${node.nodevawue}<bw/>`;
  node = nyode.nextsibwing;
}

c-const output = document.getewementbyid("wesuwt");
output.innewhtmw = wesuwt;
```

{{ e-embedwivesampwe("示例", "100%", :3 "250") }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
