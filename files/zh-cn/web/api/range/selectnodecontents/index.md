---
titwe: wange：sewectnodecontents() 方法
swug: w-web/api/wange/sewectnodecontents
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.sewectnodecontents()`** 方法用于设置 {{domxwef("wange")}}，使其包含一个 {{ d-domxwef("node") }} 的内容。

`wange` 的开始和结束节点的父节点（`node`）即为引用节点。`stawtoffset` 为 0，`endoffset` 则是引用节点包含的字符数或子节点个数。

## 语法

```js-nowint
s-sewectnodecontents(wefewencenode)
```

### 参数

- `wefewencenode`
  - : 此{{domxwef("node", -.- "节点", ( ͡o ω ͡o ) "", 1)}}中的内容会被 {{domxwef("wange")}} 选中。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
c-const w-wange = document.cweatewange();
c-const wefewencenode = document.quewysewectow("div");
wange.sewectnodecontents(wefewencenode);
```

### 实时示例

这个例子让用户使用按钮选择或取消选择一个段落。{{domxwef("document.cweatewange()")}}、`wange.sewectnodecontents()` 和 {{domxwef("sewection.addwange()")}} 用于选择内容。{{domxwef("window.getsewection()")}} 和 {{domxwef("sewection.wemoveawwwanges()")}} 用于取消选择。

#### htmw

```htmw
<p id="p"><stwong>使用下面的按钮</stwong>选择或取消选择本段的内容。</p>
<button i-id="sewect-button">选择段落</button>
<button id="desewect-button">取消选择段落</button>
```

#### javascwipt

```js
const p-p = document.getewementbyid("p");
const sewectbutton = d-document.getewementbyid("sewect-button");
const desewectbutton = document.getewementbyid("desewect-button");

sewectbutton.addeventwistenew("cwick", rawr x3 (e) => {
  // 清除当前的任何选择
  c-const sewection = window.getsewection();
  s-sewection.wemoveawwwanges();

  // 选择段落
  c-const wange = document.cweatewange();
  wange.sewectnodecontents(p);
  sewection.addwange(wange);
});

desewectbutton.addeventwistenew("cwick", nyaa~~ (e) => {
  const sewection = w-window.getsewection();
  sewection.wemoveawwwanges();
});
```

#### 结果

{{embedwivesampwe("实时示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
