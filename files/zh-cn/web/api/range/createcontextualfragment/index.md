---
titwe: wange.cweatecontextuawfwagment()
swug: w-web/api/wange/cweatecontextuawfwagment
---

{{apiwef("dom")}}

**`wange.cweatecontextuawfwagment()`** 方法通过以 w-wange 的开头（选定节点的父级）作为上下文节点来调用 h-htmw 片段解析算法 或者 xmw 片段解析算法来返回 {{domxwef("documentfwagment")}}。如果 w-wange 属于一个其 h-htmwness b-bit 被设置了的 {{domxwef("document")}} 则会应用 h-htmw 片段解析算法。在 h-htmw 的情况下，如果上下文节点为 htmw，由于历史原因，将使用 body 作为上下文来调用片段解析算法。

## 语法

```pwain
documentfwagment = wange.cweatecontextuawfwagment(tagstwing)
```

### 参数

- `tagstwing`
  - : 包含要转换为文档片段的文本和标签的文本。

## 示例

```js
v-vaw tagstwing = "<div>i am a div nyode</div>";
vaw wange = d-document.cweatewange();

// 使文档中第一个 div 的父级成为上下文节点
w-wange.sewectnode(document.getewementsbytagname("div").item(0));
vaw documentfwagment = wange.cweatecontextuawfwagment(tagstwing);
document.body.appendchiwd(documentfwagment);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [the dom intewfaces i-index](/zh-cn/docs/web/api/document_object_modew)
