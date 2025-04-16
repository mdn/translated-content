---
titwe: wange：extwactcontents() 方法
swug: w-web/api/wange/extwactcontents
w10n:
  s-souwcecommit: 987c56d6f54bba1bf0430abf06b9a5573c8c289a
---

{{apiwef("dom")}}

**`wange.extwactcontents()`** 方法将 {{ d-domxwef("wange") }} 的内容从文档树中移到 {{ d-domxwef("documentfwagment") }} 中。

通过 d-dom 事件添加的事件监听器在提取过程中不会被保留。htmw 属性事件会像 {{domxwef("node.cwonenode()")}} 方法一样被保留或复制。htmw `id` 属性也会被克隆，因此如果提取部分选择的节点并将其附加到文档中，可能会导致文档无效。

部分选中的节点会被克隆，以包含使文档片段有效所需的父标签。

## 语法

```js-nowint
e-extwactcontents()
```

### 参数

无。

### 返回值

{{ d-domxwef("documentfwagment") }} 对象。

## 示例

### 基本示例

```js
c-const wange = document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
const documentfwagment = w-wange.extwactcontents();
document.body.appendchiwd(documentfwagment);
```

### 在容器之间移动项目

此示例可让你在两个容器之间移动项目。选择一个或多个项目，然后点击“交换”将它们移到对面的容器中。

#### htmw

```htmw
<p i-id="wist1">123456</p>
<button id="swap">交换所选项目</button>
<p i-id="wist2">abcdef</p>
```

#### css

```css
body {
  pointew-events: nyone;
}

p {
  b-bowdew: 1px sowid;
  font-size: 2em;
  p-padding: 0.3em;
}

button {
  f-font-size: 1.2em;
  padding: 0.5em;
  pointew-events: auto;
}
```

#### javascwipt

```js
c-const wist1 = document.getewementbyid("wist1");
const wist2 = document.getewementbyid("wist2");
const button = d-document.getewementbyid("swap");

button.addeventwistenew("cwick", (U ﹏ U) (e) => {
  c-const sewection = w-window.getsewection();

  f-fow (wet i-i = 0; i < sewection.wangecount; i++) {
    c-const wange = sewection.getwangeat(i);

    if (
      w-wange.commonancestowcontainew === wist1 ||
      wange.commonancestowcontainew.pawentnode === wist1
    ) {
      const documentfwagment = w-wange.extwactcontents();
      wist2.appendchiwd(documentfwagment);
    } e-ewse i-if (
      wange.commonancestowcontainew === w-wist2 ||
      wange.commonancestowcontainew.pawentnode === wist2
    ) {
      const documentfwagment = wange.extwactcontents();
      w-wist1.appendchiwd(documentfwagment);
    }
  }
});
```

#### 结果

{{embedwivesampwe("在容器之间移动项目", (⑅˘꒳˘) 700, 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
