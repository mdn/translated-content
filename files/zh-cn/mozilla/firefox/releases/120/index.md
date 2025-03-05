---
title: Firefox 120 的开发者说明
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 692015f089ff03699f0fe58814502b157c3e92ea
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 120 中影响开发者的变更信息。Firefox 120 于 [2023 年 11 月 21 日](https://whattrainisitnow.com/release/?version=120)发布。

## 为 Web 开发者带来的变化

### HTML

- 对 `media` 属性的支持被重新引入到 [`<source>`](/zh-CN/docs/Web/HTML/Element/source) 元素，并扩展到包括 `<audio>` 和 `<video>` 元素。该属性最初是在 Firefox 15 中添加的，但在 Firefox 53 中被删除，当时它的使用仅限于 `<picture>` 的 `<source>` 子元素。随着这个版本的发布，`media` 属性将在 `<audio>`、`<video>` 和 `<picture>` 的 `<source>` 子元素上可用（[Firefox bug 1836128](https://bugzil.la/1836128)）。

### CSS

- 现已支持 {{CSSXref("color_value/light-dark", "light-dark()")}} CSS 颜色值函数。这允许在不需要 `prefers-color-scheme` 媒体特性的情况下设置浅色和深色的颜色（[Firefox bug 1856999](https://bugzil.la/1856999)）。
- 现已支持 [`lh` 和 `rlh`](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#行距单位)行距单位。这允许设置相对于元素的行距属性，例如，将背景装饰与多行文本精确对齐（[Firefox bug 1310170](https://bugzil.la/1310170)）。

#### 移除

- 现已移除非标准的 {{cssxref("-moz-image-rect")}} CSS 函数，其用于裁剪背景图像。该函数最初是在 Firefox 4 中引入的，但从未被标准化或在其他浏览器中实现（[Firefox bug 1853867](https://bugzil.la/1853867)）。

### JavaScript

- {{jsxref("Date.parse()")}} 现在接受几种额外的日期格式：

  - 现在接受不符合正式 ISO 标准的数字连接号日期格式（[Firefox bug 1557650](https://bugzil.la/1557650)），包括：

    - `"01-12-1999"`（首个为月份）
    - `"1999-1-5"`（单个数字表示的月份或日期）
    - `"10000-01-12"`（年份超过 9999）
    - `"99-01-05"` 或 `"01-05-99"`（2 位数年份，如果首个为年份，则年份必须大于 31）
    - `"1999-01-05 10:00:00"`（日期和时间之间有空格）。

    这些日期将使用其他非 ISO 日期格式的典型行为进行解析，例如本地时区和月份转期（4 月 31 日转期到 5 月 1 日，因为 4 月 31 日不存在）。

  - 放宽了直接跟在数字后面的字符的要求，以接受新的格式（[Firefox bug 449921](https://bugzil.la/449921)），包括：

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"`（`am`/`pm` 直接跟在时间后面）

  - 现已接受将时区 `'Z'` 用于非 ISO 格式（例如 `Jan 1 1970 10:00Z`）（[Firefox bug 1852422](https://bugzil.la/1852422)）

### SVG

无明显变化

### HTTP

- 已启用 [`103 Early Hints`](/zh-CN/docs/Web/HTTP/Status/103) HTTP [信息响应](/zh-CN/docs/Web/HTTP/Status#信息响应)状态码，以便[预连接](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect)到特定的源（页面可能需要来自该源的资源）。有关更详细的信息，请参阅 [Firefox bug 1858712](https://bugzil.la/1858712)。
- Firefox 支持 [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} 请求标头，该请求标头可用于指示用户不同意网站或服务将其个人信息出售或与第三方共享。用户可以通过将首选项 `privacy.globalprivacycontrol.enabled` 设置为 `true`（在 `about:config` 中）以在正常浏览和隐私浏览模式下启用该标头。{{domxref("Navigator.globalPrivacyControl")}} 和 {{domxref("WorkerNavigator.globalPrivacyControl")}} 属性允许 JavaScript 检查用户同意首选项（[Firefox bug 1856029](https://bugzil.la/1856029)）。

### 安全

无明显变化

### API

- 现已支持 {{domxref("PublicKeyCredential")}} 接口的 {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} 属性。这允许 Web 应用程序的客户端和服务器代码根据认证器是设备的一部分还是可以在设备之间漫游来配置自身（参见 [Firefox bug 1810851](https://bugzil.la/1810851)）。
- 已支持 [Web Authentication API](/zh-CN/docs/Web/API/Web_Authentication_API) 的[最短 PIN 码长度扩展（`minPinLength`）](/zh-CN/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength)，这允许依赖方服务器在创建/注册期间请求认证器的最短 PIN 码长度（[Firefox bug 1844450](https://bugzil.la/1844450)）。
- 现已支持 {{domxref("Navigator.userActivation")}} 属性和 {{domxref("UserActivation")}} 接口。它们可用于检查用户是否正在与页面交互，或者自页面加载以来是否已与其进行交互（参见 [Firefox bug 1791079](https://bugzil.la/1791079)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### WebDriver BiDi

- 添加了对 `Proxy` 和 `Generator` 对象的序列化支持（[Firefox bug 1841786](https://bugzil.la/1841786)）。
- 为 `responseStarted` 和 `responseCompleted` 网络事件添加 `authChallenges` 属性（标头中存在的认证挑战列表），这将有助于处理即将到来的 `network.authRequired` 事件（[Firefox bug 1855149](https://bugzil.la/1855149)）。

## 为附加组件开发者带来的变化

无明显变化

## 更早期的版本

{{Firefox_for_developers}}
