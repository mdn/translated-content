---
title: NavigatorUAData：getHighEntropyValues() 方法
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`getHighEntropyValues()`** 方法是一个 {{jsxref("Promise")}}，它使用包含用户的*高熵*值的字典对象进行解析代理返回。

> [!NOTE]
> 术语*高熵*和*低熵*是指这些值揭示的有关浏览器的信息量。作为属性返回的值被视为低熵，并且不太可能被用于识别用户。`getHighEntropyValues()` 返回的值可能会揭示更多信息。因此，这些值是通过 {{jsxref("Promise")}} 检索的，从而使浏览器有时间请求用户权限或进行其他检查。

## 语法

```js-nolint
getHighEntropyValues(hints)
```

### 参数

- `hints`

  - : 包含要返回的提示的数组，为以下中的一个或多个：

    - `"architecture"`
    - `"bitness"`
    - `"formFactor"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### 返回值

一个 {{jsxref("Promise")}}，其兑现为包含以下部分或全部值的对象（基于请求的提示）：

- `brands`
  - : 返回包含 `brand` 和 `version` 属性的对象数组，指定浏览器品牌及其版本（与 {{domxref("NavigatorUAData.brands")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#低熵提示)）。
- `mobile`
  - : 如果用户代理在移动设备上运行，则返回 `true`（与 {{domxref("NavigatorUAData.mobile")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA-Mobile")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#低熵提示)）。
- `platform`
  - : 返回一个描述用户代理的运行平台的字符串，例如 `"Windows"`（与 {{domxref("NavigatorUAData.platform")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA-Platform")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#低熵提示)）。
- `architecture`
  - : 一个包含平台架构的字符串。例如，`"x86"`。请注意，当服务器在 {{HTTPHeader("Accept-CH")}} 标头中显式请求该信息后，可以在 {{HTTPHeader("Sec-CH-UA-Arch")}} 标头中将该信息发送到服务器。
- `bitness`
  - : 一个包含平台架构位数的字符串。例如，`"32"` 或 `"64"`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Bitness")}} 标头中将该信息发送到服务器。
- `formFactor`
  - : 一个包含设备外形规格的字符串。例如，`"Tablet"` 或 `"VR"`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Form-Factor")}} 标头中将该信息发送到服务器。
- `fullVersionList`
  - : 一个具有 `"brand"` 和 `"version"` 属性的对象数组，分别表示浏览器名称和完整版本。例如，`{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`。请注意，一个对象可能故意包含无效信息，以防止网站依赖固定的浏览器列表。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} 标头中将该信息发送到服务器。
- `model`
  - : 一个包含移动设备型号的字符串。例如，`"Pixel 2XL"`。如果设备不是移动设备或者设备型号未知，则 `model` 将为 `""`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Model")}} 标头中将该信息发送到服务器。
- `platformVersion`
  - : 一个包含平台版本的字符串。平台名称本身始终可通过低熵提示 `platform` 提供。例如，`"10.0"`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Platform-Version")}} 标头中将该信息发送到服务器。
- `uaFullVersion` {{Deprecated_Inline}}
  - : 一个包含完整浏览器版本的字符串。例如，`"103.0.5060.134"`。已弃用，请使用 `fullVersionList` 替代。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Full-Version")}} 标头中将该信息发送到服务器。
- `wow64`
  - : 一个布尔值，指示用户代理的二进制文件是否在 64 位 Windows 上以 32 位模式运行。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-WoW64")}} 标头中将该信息发送到服务器。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果用户代理决定不应返回所请求的一个或多个 `hints`，则抛出该异常。

## 示例

在以下示例中，使用 `getHighEntropyValues()` 方法请求许多提示。当 promise 兑现时，此信息将打印到控制台。

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platformVersion",
    "fullVersionList",
  ])
  .then((values) => console.log(values));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 这些值也可以通过 HTTP 请求标头获得：
  - [低熵客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#low_entropy_hints)会自动发送：
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - 服务器可以使用 {{HTTPHeader("Accept-CH")}} 标头请求接收后续请求的高熵客户端提示：
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
