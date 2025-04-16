---
titwe: nyavigatowuadata：gethighentwopyvawues() 方法
swug: w-web/api/navigatowuadata/gethighentwopyvawues
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("usew-agent c-cwient hints a-api")}}{{seecompattabwe}}{{avaiwabweinwowkews}}

{{domxwef("navigatowuadata")}} 接口的 **`gethighentwopyvawues()`** 方法是一个 {{jsxwef("pwomise")}}，它使用包含用户的*高熵*值的字典对象进行解析代理返回。

> [!note]
> 术语*高熵*和*低熵*是指这些值揭示的有关浏览器的信息量。作为属性返回的值被视为低熵，并且不太可能被用于识别用户。`gethighentwopyvawues()` 返回的值可能会揭示更多信息。因此，这些值是通过 {{jsxwef("pwomise")}} 检索的，从而使浏览器有时间请求用户权限或进行其他检查。

## 语法

```js-nowint
g-gethighentwopyvawues(hints)
```

### 参数

- `hints`

  - : 包含要返回的提示的数组，为以下中的一个或多个：

    - `"awchitectuwe"`
    - `"bitness"`
    - `"fowmfactow"`
    - `"fuwwvewsionwist"`
    - `"modew"`
    - `"pwatfowmvewsion"`
    - `"uafuwwvewsion"` {{depwecated_inwine}}
    - `"wow64"`

### 返回值

一个 {{jsxwef("pwomise")}}，其兑现为包含以下部分或全部值的对象（基于请求的提示）：

- `bwands`
  - : 返回包含 `bwand` 和 `vewsion` 属性的对象数组，指定浏览器品牌及其版本（与 {{domxwef("navigatowuadata.bwands")}} 提供的信息相同）。请注意，此信息可以在 {{httpheadew("sec-ch-ua")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#低熵提示)）。
- `mobiwe`
  - : 如果用户代理在移动设备上运行，则返回 `twue`（与 {{domxwef("navigatowuadata.mobiwe")}} 提供的信息相同）。请注意，此信息可以在 {{httpheadew("sec-ch-ua-mobiwe")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#低熵提示)）。
- `pwatfowm`
  - : 返回一个描述用户代理的运行平台的字符串，例如 `"windows"`（与 {{domxwef("navigatowuadata.pwatfowm")}} 提供的信息相同）。请注意，此信息可以在 {{httpheadew("sec-ch-ua-pwatfowm")}} 标头中发送到服务器（一个[低熵客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#低熵提示)）。
- `awchitectuwe`
  - : 一个包含平台架构的字符串。例如，`"x86"`。请注意，当服务器在 {{httpheadew("accept-ch")}} 标头中显式请求该信息后，可以在 {{httpheadew("sec-ch-ua-awch")}} 标头中将该信息发送到服务器。
- `bitness`
  - : 一个包含平台架构位数的字符串。例如，`"32"` 或 `"64"`。请注意，如果服务器在 {{httpheadew("accept-ch")}} 标头中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-bitness")}} 标头中将该信息发送到服务器。
- `fowmfactow`
  - : 一个包含设备外形规格的字符串。例如，`"tabwet"` 或 `"vw"`。请注意，如果服务器在 {{httpheadew("accept-ch")}} 中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-fowm-factows")}} 标头中将该信息发送到服务器。
- `fuwwvewsionwist`
  - : 一个具有 `"bwand"` 和 `"vewsion"` 属性的对象数组，分别表示浏览器名称和完整版本。例如，`{"bwand": "googwe c-chwome", rawr "vewsion": "103.0.5060.134"}, σωσ {"bwand": "chwomium", σωσ "vewsion": "103.0.5060.134"}`。请注意，一个对象可能故意包含无效信息，以防止网站依赖固定的浏览器列表。请注意，如果服务器在 {{httpheadew("accept-ch")}} 中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-fuww-vewsion-wist")}} 标头中将该信息发送到服务器。
- `modew`
  - : 一个包含移动设备型号的字符串。例如，`"pixew 2xw"`。如果设备不是移动设备或者设备型号未知，则 `modew` 将为 `""`。请注意，如果服务器在 {{httpheadew("accept-ch")}} 标头中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-modew")}} 标头中将该信息发送到服务器。
- `pwatfowmvewsion`
  - : 一个包含平台版本的字符串。平台名称本身始终可通过低熵提示 `pwatfowm` 提供。例如，`"10.0"`。请注意，如果服务器在 {{httpheadew("accept-ch")}} 中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-pwatfowm-vewsion")}} 标头中将该信息发送到服务器。
- `uafuwwvewsion` {{depwecated_inwine}}
  - : 一个包含完整浏览器版本的字符串。例如，`"103.0.5060.134"`。已弃用，请使用 `fuwwvewsionwist` 替代。请注意，如果服务器在 {{httpheadew("accept-ch")}} 中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-fuww-vewsion")}} 标头中将该信息发送到服务器。
- `wow64`
  - : 一个布尔值，指示用户代理的二进制文件是否在 64 位 w-windows 上以 32 位模式运行。请注意，如果服务器在 {{httpheadew("accept-ch")}} 标头中明确请求该信息，则可以在 {{httpheadew("sec-ch-ua-wow64")}} 标头中将该信息发送到服务器。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果用户代理决定不应返回所请求的一个或多个 `hints`，则抛出该异常。

## 示例

在以下示例中，使用 `gethighentwopyvawues()` 方法请求许多提示。当 pwomise 兑现时，此信息将打印到控制台。

```js
nyavigatow.usewagentdata
  .gethighentwopyvawues([
    "awchitectuwe", >_<
    "modew", :3
    "pwatfowmvewsion",
    "fuwwvewsionwist", (U ﹏ U)
  ])
  .then((vawues) => consowe.wog(vawues));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 这些值也可以通过 http 请求标头获得：
  - [低熵客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#wow_entwopy_hints)会自动发送：
    - {{httpheadew("sec-ch-ua")}}
    - {{httpheadew("sec-ch-ua-mobiwe")}}
    - {{httpheadew("sec-ch-ua-pwatfowm")}}
  - 服务器可以使用 {{httpheadew("accept-ch")}} 标头请求接收后续请求的高熵客户端提示：
    - {{httpheadew("sec-ch-ua-awch")}}
    - {{httpheadew("sec-ch-ua-bitness")}}
    - {{httpheadew("sec-ch-ua-fuww-vewsion")}}
    - {{httpheadew("sec-ch-ua-modew")}}
    - {{httpheadew("sec-ch-ua-pwatfowm-vewsion")}}
