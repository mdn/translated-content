---
title: HTMLMetaElement：media 属性
slug: Web/API/HTMLMetaElement/media
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.media`** 属性允许为 `theme-color` 元数据指定媒体。

`theme-color` 属性允许在支持此属性的浏览器和操作系统中设置浏览器工具栏或 UI 的颜色。`media` 属性允许为不同的 `media` 值设置不同的主题颜色。

## 值

一个字符串。

## 示例

### 为暗色模式设置主题色

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`theme-color`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name#html_规范中定义的标准元数据名称)，`content` 属性设置为 `#3c790a`，`media` 属性设置为 `prefers-color-scheme: dark`，并把元素附加到文档 `<head>` 上。当用户在操作系统中指定暗色模式时，可以使用 `media` 属性设置不同的 `theme-color`：

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### 通过设备尺寸设置主题色

大部分 meta 属性仅可使用一次，然而如果提供唯一的 `media` 值，则 `theme-color` 可以多次使用。

这个例子添加两个带有 `theme-color` 的 meta 元素；一个用于所有设备，另一个用于小屏幕。匹配 `media` 查询的顺序很重要，因此应在文档中稍晚添加更具体的查询，如下所示：

```js
// 为所有设备添加主题色
const meta1 = document.createElement("meta");
meta1.name = "theme-color";
meta1.content = "#ffffff";
document.head.appendChild(meta1);

// 为小设备添加主题色
const meta2 = document.createElement("meta");
meta2.name = "theme-color";
meta2.media = "(max-width: 600px)";
meta2.content = "#000000";
document.head.appendChild(meta2);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("meta")}}
- [媒体查询的可能值](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)
