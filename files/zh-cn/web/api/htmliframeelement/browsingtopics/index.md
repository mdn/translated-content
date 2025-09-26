---
title: HTMLIFrameElement：browsingTopics 属性
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> 此特性目前遭到两家浏览器厂商反对。有关反对详情，请参阅[标准立场](/zh-CN/docs/Web/API/Topics_API#标准立场)部分。

{{domxref("HTMLIFrameElement")}} 接口的 **`browsingTopics`** 属性是一个指定当前用户选择的主题应与之关联的 {{htmlelement("iframe")}} 源请求一起以 {{httpheader("Sec-Browsing-Topics")}} 标头发送的布尔值。这反映了 `browsingtopics` HTML 属性。

有关更多详细信息，请参阅[使用 Topics API](/zh-CN/docs/Web/API/Topics_API/Using)。

## 值

一个布尔值，默认值为 `false`；将其设置为 `true` 可使与 `<iframe>` 相关联的源请求携带一个包含当前用户选定主题的 {{httpheader("Sec-Browsing-Topics")}} 标头。

## 示例

### 获取

将 `browsingtopics` 设置为 `true`，然后以声明方式加载 `<iframe>` 的内容：

```html
<iframe browsingtopics title="广告容器" src="adtech1.example"> ... </iframe>
```

通过脚本记录 `browsingTopics` 值：

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // 将在支持的浏览器中返回 true
```

### 设置

指定最小的 `<iframe>`：

```html
<iframe> ... </iframe>
```

将 `browsingtopics` 设置为 `true`，然后通过脚本加载 `<iframe>` 内容：

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "广告容器";
iframeElem.src = "adtech1.example";
```

## 规范

此特性不属于官方标准，尽管它被定义在 [Topics API 非官方建议草案](https://patcg-individual-drafts.github.io/topics/)中。

## 浏览器兼容性

{{Compat}}

## 参见

- [Topics API](/zh-CN/docs/Web/API/Topics_API)
