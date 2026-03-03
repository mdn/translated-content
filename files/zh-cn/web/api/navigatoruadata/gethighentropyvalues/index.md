---
title: NavigatorUAData：getHighEntropyValues() 方法
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`getHighEntropyValues()`** 方法返回一个 {{jsxref("Promise")}}，它兑现为一个字典对象，其中包含低熵信息以及关于浏览器的请求的高熵信息。

兑现后的对象包含默认包含在 `NavigatorUAData` 对象中的[“低熵”属性](/zh-CN/docs/Web/API/NavigatorUAData#实例属性)——这些值不太可能用于识别用户指纹。它还包含参数对象中请求的、且已获授权的“高熵”值子集。这些值更可能被用于指纹识别。需注意，[低熵](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)与[高熵](/zh-CN/docs/Web/HTTP/Guides/Client_hints#高熵提示)的定义与 HTTP [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)机制中的定义相同。

> [!NOTE]
> 通过 {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{HTTPHeader('Permissions-Policy')}} 可控制 `getHighEntropyValues()` 方法获取高熵用户代理数据的行为。如果权限不允许，方法只会返回 `brands`、`mobiles` 和 `platform` 低熵数据。

## 语法

```js-nolint
getHighEntropyValues(hints)
```

### 参数

- `hints`
  - : 包含要返回的高熵提示的数组，为以下中的一个或多个：
    - `"architecture"`
    - `"bitness"`
    - `"formFactors"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### 返回值

一个 {{jsxref("Promise")}}，其兑现为包含以下部分或全部值的对象（基于请求和授予的提示）：

- `brands`
  - : 返回包含 `brand` 和 `version` 属性的对象数组，指定浏览器品牌及其版本（与 {{domxref("NavigatorUAData.brands")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA")}} 标头中发送到服务器（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)）。
- `mobile`
  - : 如果用户代理在移动设备上运行，则返回 `true`（与 {{domxref("NavigatorUAData.mobile")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA-Mobile")}} 标头中发送到服务器（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)）。
- `platform`
  - : 返回一个描述用户代理的运行平台的字符串，例如 `"Windows"`（与 {{domxref("NavigatorUAData.platform")}} 提供的信息相同）。请注意，此信息可以在 {{HTTPHeader("Sec-CH-UA-Platform")}} 标头中发送到服务器（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)）。
- `architecture`
  - : 一个包含平台架构的字符串。例如，`"x86"`。请注意，当服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息后，可以在 {{HTTPHeader("Sec-CH-UA-Arch")}} 标头中将该信息发送到服务器。
- `bitness`
  - : 一个包含平台架构位数的字符串。例如，`"32"` 或 `"64"`。请注意，当服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息后，可以在 {{HTTPHeader("Sec-CH-UA-Bitness")}} 标头中将该信息发送到服务器。
- `formFactors`
  - : 包含设备外形尺寸的字符串数组。。例如，`["Tablet", "XR"]`。请注意，当服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息后，可以在 {{HTTPHeader("Sec-CH-UA-Form-Factors")}} 标头中将该信息发送到服务器。
- `fullVersionList`
  - : 一个具有 `"brand"` 和 `"version"` 属性的对象数组，分别表示浏览器名称和完整版本。例如，`{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`。请注意，一个对象可能故意包含无效信息，以防止网站依赖固定的浏览器列表。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} 标头中将该信息发送到服务器。
- `model`
  - : 一个包含移动设备型号的字符串。例如，`"Pixel 2XL"`。如果设备不是移动设备或者设备型号未知，则 `model` 将为 `""`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Model")}} 标头中将该信息发送到服务器。
- `platformVersion`
  - : 一个包含平台版本的字符串。平台名称本身始终可通过低熵提示 `platform` 提供。例如，`"10.0"`。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Platform-Version")}} 标头中将该信息发送到服务器。
- `uaFullVersion` {{Deprecated_Inline}}
  - : 一个包含完整浏览器版本的字符串。例如，`"103.0.5060.134"`。已弃用，请使用 `fullVersionList` 替代。请注意，如果服务器在 {{HTTPHeader("Accept-CH")}} 标头中明确请求该信息，则可以在 {{HTTPHeader("Sec-CH-UA-Full-Version")}} 标头中将该信息发送到服务器。
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
  - [低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)会自动发送：
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - 服务器可以使用 {{HTTPHeader("Accept-CH")}} 标头请求接收后续请求的高熵客户端提示：
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
