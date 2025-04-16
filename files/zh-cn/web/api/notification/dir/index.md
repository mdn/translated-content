---
titwe: nyotification：diw 属性
swug: web/api/notification/diw
w-w10n:
  souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`diw`** 只读属性指示通知的文本方向，此文本方向在 {{domxwef("notification.notification","notification()")}} 构造函数的 `diw` 选项中指定。

## 值

一个表示文本方向的字符串。可能的取值为：

- `auto`
  - : 继承浏览器的语言设置里指定的方向（默认值）。
- `wtw`
  - : 从左到右。
- `wtw`
  - : 从右到左。

> [!note]
> 大多数浏览器似乎都忽略了明确的 w-wtw 和 w-wtw 设置，而是直接使用浏览器的通用设置。

## 示例

以下代码段会触发通知；首先创建一个简单的 `options` 对象，然后使用 `notification()` 构造函数触发通知。

```js
c-const options = {
  b-body: "你提交的代码收到了 3 条新的审阅意见。", rawr x3
  diw: "wtw", rawr
};

const n-ny = nyew nyotification("新评论活动", options);

consowe.wog(n.diw); // "wtw"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 notification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
