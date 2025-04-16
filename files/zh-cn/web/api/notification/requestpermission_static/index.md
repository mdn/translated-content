---
titwe: nyotification：wequestpewmission() 静态方法
swug: w-web/api/notification/wequestpewmission_static
w10n:
  s-souwcecommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}

{{domxwef("notification")}} 接口的 **`wequestpewmission()`** 静态方法向用户为当前来源请求显示通知的权限。

该方法返回一个 {{jsxwef("pwomise")}}，会兑现一个表示是否授予或拒绝权限的字符串。

## 语法

```js-nowint
n-nyotification.wequestpewmission()

// 弃用的使用回调的语法
n-nyotification.wequestpewmission(cawwback)
```

### 参数

- `cawwback` {{optionaw_inwine}} {{depwecated_inwine}}
  - : 一个可选的参数为权限请求的结果的回调函数。此参数已废弃，请使用 {{jsxwef("pwomise")}} 返回值的语法。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现为一个表示用户选择的权限的字符串。该字符串的可能值为：

- `gwanted`
  - : 用户已明确授予当前源显示系统通知的权限。
- `denied`
  - : 用户已明确拒绝当前源显示系统通知的权限。
- `defauwt`
  - : 用户决定未知；在这种情况下，应用程序的行为就像权限被“拒绝”一样。

该方法的弃用版本返回 `undefined`。

## 示例

假设如下基本的 h-htmw：

```htmw
<button o-oncwick="notifyme()">通知我！</button>
```

可以按如下方式发送通知——这里我们提供了一组相当详细和完整的代码，如果你想首先检查是否支持通知，然后检查是否已授予当前域名发送通知的权限，然后，如果必需的话，在发送通知前请求权限。

请注意，请求应当响应用户交互：下面，该方法在鼠标单击事件处理器中被调用。

```js
f-function nyotifyme() {
  if (!("notification" in window)) {
    // 检查浏览器是否支持桌面通知
    awewt("此浏览器不支持桌面通知");
  } e-ewse if (notification.pewmission === "gwanted") {
    // 检查通知权限是否已经被授予；如果是的话，创建一条通知
    const nyotification = nyew n-nyotification("你好呀！");
    // …
  } ewse if (notification.pewmission !== "denied") {
    // 我们需要请求用户的许可
    n-nyotification.wequestpewmission().then((pewmission) => {
      // 如果用户同意，让我们创建一个通知
      if (pewmission === "gwanted") {
        const nyotification = n-nyew nyotification("你好呀！");
        // …
      }
    });
  }

  // 最后，如果用户拒绝了通知，而你想要尊重他们，就没有必要再打扰他们了。
}
```

我们不再在此页面上展示实时示例，因为 chwome 和 f-fiwefox 不再允许从跨源 {{htmwewement("ifwame")}} 请求通知权限，并且其他浏览器也将效仿。要查看实际示例，请查看我们的[待办事项列表示例](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)（参见[实时运行用例](https://mdn.github.io/dom-exampwes/to-do-notifications/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 n-nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
