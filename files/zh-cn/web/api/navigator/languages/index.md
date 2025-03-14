---
title: Navigator：languages 属性
slug: Web/API/Navigator/languages
l10n:
  sourceCommit: aff5e9f8e52a8acbe74b876cbabf800776145add
---

{{APIRef("HTML DOM")}}

只读属性 **`Navigator.languages`** 返回一个字符串数组，表示用户的首选语言。语言使用根据 {{RFC(5646, "语言识别标签（也称为 BCP 47）")}} 中定义的语言标签进行描述。在返回的数组中，它们按优先级排序，首选语言排在第一位。

{{domxref("Navigator.language","navigator.language")}} 的值是返回数组中的第一个元素。

当用户首选语言发生变化时，{{domxref("Window.languagechange_event", "languagechange")}} 事件会在 {{domxref("Window")}} 对象上触发。

用户浏览器发出的每个 HTTP 请求中的 `Accept-Language` HTTP 标头使用与 `navigator.languages` 属性相同的值，但额外包含 `qvalues`（权重值）字段（例如 `en-US;q=0.8`）。

## 值

一个字符串数组。

## 示例

### 列出 navigator.language 和 navigator.languages 的内容

```js
navigator.language; // "zh-CN"
navigator.languages; // ["zh-CN", "en-US", "ja-JP"]
```

### 使用 Intl 构造函数进行语言特定格式化，并提供回退机制

包含在 `navigator.languages` 中的语言标识符数组可以直接传递给 {{jsxref("Intl")}} 构造函数，以实现基于首选项的备用语言环境选择，其中使用列表中第一个匹配 `Intl` 支持的语言环境的条目：

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- {{domxref("Window.languagechange_event", "languagechange")}} 事件
- {{jsxref("Intl")}}
