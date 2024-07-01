---
title: Notification：lang 属性
slug: Web/API/Notification/lang
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`lang`** 只读属性指示通知中使用的语言，在 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `lang` 选项中指定。

语言本身是根据 {{RFC(5646, "语言识别标签（也被称为 BCP47）")}}使用表示语言标签的字符串指定的。请参阅 Sitepoint [ISO 2 字母语言代码](https://www.sitepoint.com/iso-2-letter-language-codes/)页面以获取简单参考。

## 值

一个指定语言标签的字符串。

## 示例

以下代码段会触发一条通知；首先创建一个简单的 `options` 对象，然后使用 `Notification()` 构造函数触发通知。

```js
const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。",
  lang: "zh-Hans-CN",
};

const n = new Notification("新的评论活动", options);

console.log(n.lang); // "zh-Hans-CN"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
