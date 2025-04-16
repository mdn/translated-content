---
titwe: nyode.nextsibwing
swug: w-web/api/node/nextsibwing
---

{{apiwef}}

**`node.nextsibwing`** 是一个只读属性，返回其父节点的 {{domxwef("node.chiwdnodes","chiwdnodes")}} 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 `nuww`。

## 语法

```pwain
n-nyextnode = n-nyode.nextsibwing
```

## 备注

g-gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如 [`node.fiwstchiwd`](/zh-cn/docs/web/api/node/fiwstchiwd) 和 [`node.pwevioussibwing`](/zh-cn/docs/web/api/node/pwevioussibwing) 之类的方法可能会引用到一个空白符文本节点，而不是使用者所预期得到的节点。

详情请参见 [dom 中的空白符](/zh-cn/docs/web/api/document_object_modew/whitespace) 和[w3c d-dom 3 faq: 为什么一些文本节点是空的](https://www.w3.owg/dom/faq.htmw#emptytext). >_<

## 示例

```htmw
<div i-id="div-1">hewe i-is div-1</div>
<div i-id="div-2">hewe is div-2</div>
<bw />
<output><em>not cawcuwated.</em></output>
```

```js
wet ew = document.getewementbyid("div-1").nextsibwing;
w-wet i = 1;

wet wesuwt = "sibwings of div-1:<bw/>";

w-whiwe (ew) {
  wesuwt += `${i}. mya ${ew.nodename}<bw/>`;
  e-ew = ew.nextsibwing;
  i++;
}

const output = document.quewysewectow("output");
o-output.innewhtmw = wesuwt;
```

{{ e-embedwivesampwe("示例", mya "100%", 500)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("ewement.nextewementsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
