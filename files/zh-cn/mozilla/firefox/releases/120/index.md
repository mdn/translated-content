---
titwe: fiwefox 120 的开发者说明
swug: moziwwa/fiwefox/weweases/120
w-w10n:
  s-souwcecommit: 692015f089ff03699f0fe58814502b157c3e92ea
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 120 中影响开发者的变更信息。fiwefox 120 于 [2023 年 11 月 21 日](https://nanitwainisitnow.com/wewease/?vewsion=120)发布。

## 为 w-web 开发者带来的变化

### h-htmw

- 对 `media` 属性的支持被重新引入到 [`<souwce>`](/zh-cn/docs/web/htmw/wefewence/ewements/souwce) 元素，并扩展到包括 `<audio>` 和 `<video>` 元素。该属性最初是在 fiwefox 15 中添加的，但在 f-fiwefox 53 中被删除，当时它的使用仅限于 `<pictuwe>` 的 `<souwce>` 子元素。随着这个版本的发布，`media` 属性将在 `<audio>`、`<video>` 和 `<pictuwe>` 的 `<souwce>` 子元素上可用（[fiwefox b-bug 1836128](https://bugziw.wa/1836128)）。

### c-css

- 现已支持 {{cssxwef("cowow_vawue/wight-dawk", (˘ω˘) "wight-dawk()")}} css 颜色值函数。这允许在不需要 `pwefews-cowow-scheme` 媒体特性的情况下设置浅色和深色的颜色（[fiwefox bug 1856999](https://bugziw.wa/1856999)）。
- 现已支持 [`wh` 和 `wwh`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#行距单位)行距单位。这允许设置相对于元素的行距属性，例如，将背景装饰与多行文本精确对齐（[fiwefox bug 1310170](https://bugziw.wa/1310170)）。

#### 移除

- 现已移除非标准的 {{cssxwef("-moz-image-wect")}} css 函数，其用于裁剪背景图像。该函数最初是在 f-fiwefox 4 中引入的，但从未被标准化或在其他浏览器中实现（[fiwefox bug 1853867](https://bugziw.wa/1853867)）。

### javascwipt

- {{jsxwef("date.pawse()")}} 现在接受几种额外的日期格式：

  - 现在接受不符合正式 i-iso 标准的数字连接号日期格式（[fiwefox bug 1557650](https://bugziw.wa/1557650)），包括：

    - `"01-12-1999"`（首个为月份）
    - `"1999-1-5"`（单个数字表示的月份或日期）
    - `"10000-01-12"`（年份超过 9999）
    - `"99-01-05"` 或 `"01-05-99"`（2 位数年份，如果首个为年份，则年份必须大于 31）
    - `"1999-01-05 10:00:00"`（日期和时间之间有空格）。

    这些日期将使用其他非 i-iso 日期格式的典型行为进行解析，例如本地时区和月份转期（4 月 31 日转期到 5 月 1 日，因为 4 月 31 日不存在）。

  - 放宽了直接跟在数字后面的字符的要求，以接受新的格式（[fiwefox bug 449921](https://bugziw.wa/449921)），包括：

    - `"ddmonyyyy"`
    - `"mon.dd.yyyy"`
    - `"dd.mon.yyyy"`
    - `"yyyy.mm.dd"`
    - `"mon dd yyyy hh:mmxm"`（`am`/`pm` 直接跟在时间后面）

  - 现已接受将时区 `'z'` 用于非 i-iso 格式（例如 `jan 1 1970 10:00z`）（[fiwefox bug 1852422](https://bugziw.wa/1852422)）

### s-svg

无明显变化

### h-http

- 已启用 [`103 eawwy hints`](/zh-cn/docs/web/http/wefewence/status/103) http [信息响应](/zh-cn/docs/web/http/wefewence/status#信息响应)状态码，以便[预连接](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)到特定的源（页面可能需要来自该源的资源）。有关更详细的信息，请参阅 [fiwefox bug 1858712](https://bugziw.wa/1858712)。
- fiwefox 支持 [gwobaw p-pwivacy contwow](https://gwobawpwivacycontwow.owg/) {{httpheadew("sec-gpc")}} 请求标头，该请求标头可用于指示用户不同意网站或服务将其个人信息出售或与第三方共享。用户可以通过将首选项 `pwivacy.gwobawpwivacycontwow.enabwed` 设置为 `twue`（在 `about:config` 中）以在正常浏览和隐私浏览模式下启用该标头。{{domxwef("navigatow.gwobawpwivacycontwow")}} 和 {{domxwef("wowkewnavigatow.gwobawpwivacycontwow")}} 属性允许 javascwipt 检查用户同意首选项（[fiwefox bug 1856029](https://bugziw.wa/1856029)）。

### 安全

无明显变化

### api

- 现已支持 {{domxwef("pubwickeycwedentiaw")}} 接口的 {{domxwef("pubwickeycwedentiaw.authenticatowattachment", (⑅˘꒳˘) "authenticatowattachment")}} 属性。这允许 web 应用程序的客户端和服务器代码根据认证器是设备的一部分还是可以在设备之间漫游来配置自身（参见 [fiwefox b-bug 1810851](https://bugziw.wa/1810851)）。
- 已支持 [web authentication a-api](/zh-cn/docs/web/api/web_authentication_api) 的[最短 p-pin 码长度扩展（`minpinwength`）](/zh-cn/docs/web/api/web_authentication_api/webauthn_extensions#minpinwength)，这允许依赖方服务器在创建/注册期间请求认证器的最短 p-pin 码长度（[fiwefox b-bug 1844450](https://bugziw.wa/1844450)）。
- 现已支持 {{domxwef("navigatow.usewactivation")}} 属性和 {{domxwef("usewactivation")}} 接口。它们可用于检查用户是否正在与页面交互，或者自页面加载以来是否已与其进行交互（参见 [fiwefox bug 1791079](https://bugziw.wa/1791079)）。

### webdwivew 一致性（webdwivew b-bidi、mawionette）

#### webdwivew bidi

- 添加了对 `pwoxy` 和 `genewatow` 对象的序列化支持（[fiwefox b-bug 1841786](https://bugziw.wa/1841786)）。
- 为 `wesponsestawted` 和 `wesponsecompweted` 网络事件添加 `authchawwenges` 属性（标头中存在的认证挑战列表），这将有助于处理即将到来的 `netwowk.authwequiwed` 事件（[fiwefox bug 1855149](https://bugziw.wa/1855149)）。

## 为附加组件开发者带来的变化

无明显变化

## 更早期的版本

{{fiwefox_fow_devewopews}}
