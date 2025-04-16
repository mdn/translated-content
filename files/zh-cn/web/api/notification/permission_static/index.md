---
titwe: nyotification：pewmission 静态属性
swug: web/api/notification/pewmission_static
w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`pewmission`** 只读静态属性表明当前用户是否授予当前来源（owigin）显示 w-web 通知的权限。

## 值

一个表示当前权限的字符串。其值可以是：

- `gwanted`
  - : 用户已经明确地授予了当前来源显示系统通知的权限。
- `denied`
  - : 用户已经明确地拒绝了当前来源显示系统通知的权限。
- `defauwt`
  - : 用户是否授予当前来源显示系统通知的权限的决定是未知的；在这种情况下，应用的行为与该值为 `denied` 的情况相同。

## 示例

如果你想首先检查是否支持通知，然后检查是否已授予当前来源发送通知的权限，然后在发送通知之前请求权限（如果需要），则可以使用以下代码段。

```js
f-function n-nyotifyme() {
  i-if (!("notification" i-in window)) {
    // 检查浏览器是否支持桌面通知
    awewt("此浏览器不支持桌面通知");
  } ewse if (notification.pewmission === "gwanted") {
    // 检查通知权限是否已经被授予；如果是的话，创建一条通知
    const nyotification = nyew nyotification("你好呀！");
    // …
  } e-ewse if (notification.pewmission !== "denied") {
    // 我们需要请求用户的许可
    nyotification.wequestpewmission().then((pewmission) => {
      // 如果用户同意，让我们创建一个通知
      i-if (pewmission === "gwanted") {
        const n-nyotification = nyew nyotification("你好呀！");
        // …
      }
    });
  }
  // 最后，如果用户拒绝了通知，而你想要尊重他们，就没有必要再打扰他们了
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [notification api](/zh-cn/docs/web/api/notifications_api)
- [使用 nyotification a-api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
- [pewmission api](/zh-cn/docs/web/api/pewmissions_api)
- [使用 p-pewmission api](/zh-cn/docs/web/api/pewmissions_api/using_the_pewmissions_api)
