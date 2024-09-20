---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("User-Agent Client Hints API", "用户代理客户端提示 API", "", "nocode")}} 的 **`NavigatorUAData`** 接口返回有关用户的浏览器和操作系统的信息。

通过调用 {{domxref("Navigator.userAgentData")}} 或 {{domxref("WorkerNavigator.userAgentData")}} 返回此对象的实例。因此，该接口没有构造函数。

> [!NOTE]
> 术语*高熵*和*低熵*指的是这些值揭示的有关浏览器的信息量。作为属性返回的值被视为低熵，并且不太可能识别用户。{{domxref("NavigatorUAData.getHighEntropyValues()")}} 返回的值可能会揭示更多信息。因此，这些值是通过 {{jsxref("Promise")}} 检索的，从而使浏览器有时间请求用户权限或进行其他检查。

## 实例属性

- {{domxref("NavigatorUAData.brands")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个包含浏览器名称和版本的品牌信息的数组。
- {{domxref("NavigatorUAData.mobile")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果用户代理在移动设备上运行，则返回 `true`。
- {{domxref("NavigatorUAData.platform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回用户代理运行所在的平台品牌。

## 实例方法

- {{domxref("NavigatorUAData.getHighEntropyValues()")}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其兑现为包含用户代理返回的*高熵*值的字典对象。
- {{domxref("NavigatorUAData.toJSON()")}} {{Experimental_Inline}}
  - : 一个*序列化器*，返回 `NavigatorUAData` 对象的*低熵*属性的 JSON 表示。

## 示例

### 获取浏览器品牌信息

以下示例将 {{domxref("NavigatorUAData.brands")}} 的值打印到控制台。

```js
console.log(navigator.userAgentData.brands);
```

### 返回高熵的信息

在以下示例中，使用 {{domxref("NavigatorUAData.getHighEntropyValues()")}} 方法请求大量提示。当 promise 兑现时，此信息将打印到控制台。

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    console.log(ua);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)
