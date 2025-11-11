---
title: Notification：dir 属性
slug: Web/API/Notification/dir
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`dir`** 只读属性指示通知的文本方向，此文本方向在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `dir` 选项中指定。

## 值

一个表示文本方向的字符串。可能的取值为：

- `auto`
  - : 继承浏览器的语言设置里指定的方向（默认值）。
- `ltr`
  - : 从左到右。
- `rtl`
  - : 从右到左。

> [!NOTE]
> 大多数浏览器似乎都忽略了明确的 ltr 和 rtl 设置，而是直接使用浏览器的通用设置。

## 示例

以下代码段会触发通知；首先创建一个简单的 `options` 对象，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  dir: "rtl",
};

const n = new Notification("新评论活动", options);

console.log(n.dir); // "rtl"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
