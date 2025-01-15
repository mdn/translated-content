---
title: Firefox 127 的开发者说明
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 127 中影响开发者的变更信息。Firefox 127 于 [2024 年 6 月 11 日](https://whattrainisitnow.com/release/?version=127)发布。

## 为 Web 开发者带来的变化

### HTML

- 现在禁止在 `<base>` 元素的 [`href`](/zh-CN/docs/Web/HTML/Element/base#href) 属性中使用 `data:` 和 `javascript:` URL。（[Firefox bug 1850967](https://bugzil.la/1850967)）。

### CSS

- 现已支持在使用 [`conic-gradient()`](/zh-CN/docs/Web/CSS/gradient/conic-gradient)、[`linear-gradient()`](/zh-CN/docs/Web/CSS/gradient/linear-gradient) 和 [`radial-gradient()`](/zh-CN/docs/Web/CSS/gradient/radial-gradient) 函数创建渐变时，以及在使用 [`repeating-conic-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-conic-gradient)、[`repeating-linear-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-linear-gradient) 和 [`repeating-radial-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-radial-gradient) 函数创建重复渐变时，使用 [`<color-interpolation-method>`](/zh-CN/docs/Web/CSS/color-interpolation-method)。（[Firefox bug 1861363](https://bugzil.la/1861363)）。

### JavaScript

- 现已支持以下 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 方法（[Firefox bug 1868423](https://bugzil.la/1868423)）：

  - [`Set.prototype.intersection()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection)——返回一个含有同时存在于当前集合以及给定集合中的元素的新集合。
  - [`Set.prototype.union()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/union)——返回一个含有当前集合以及给定集合中的所有元素的新集合。
  - [`Set.prototype.difference()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/difference)——返回一个含有当前集合中存在而给定集合中不存在的元素的新集合。
  - [`Set.prototype.symmetricDifference()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference)——返回一个含有存在于当前集合或给定集合，但不同时存在于两者中的元素的新集合。
  - [`Set.prototype.isSubsetOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf)——返回一个指示当前集合中的所有元素是否都存在于给定集合中的布尔值。
  - [`Set.prototype.isSupersetOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf)——返回一个指示给定集合中的所有元素是否都存在于当前集合中的布尔值。
  - [`Set.prototype.isDisjointFrom()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom)——返回一个指示当前集合是否与给定集合没有任何元素相同的布尔值。

### SVG

- [`lh` 和 `rlh`](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) 行高单位首先在 CSS 中得到支持（[在 Firefox 120 中](/zh-CN/docs/Mozilla/Firefox/Releases/120#css)），现在也在 SVG 中得到了支持。它们可以在 CSS 属性值（`stroke-width: 0.5lh`）和 SVG 属性值（`stroke-width="0.5lh"`）中使用。（[Firefox bug 1892089](https://bugzil.la/1892089)）。

### 安全

- Firefox 现在会自动将安全内容中的音频、视频和图像子资源的 HTTP 请求升级为 HTTPS，并阻止其他媒体类型的 HTTP 请求。如果因为媒体主机不支持 HTTPS 而导致升级请求失败，则认为找不到该媒体。这确保了如果内容通过 HTTPS 安全提供，则其所有子资源也必须通过 HTTPS 安全提供，否则不提供。由于页面不再显示[混合内容](/zh-CN/docs/Web/Security/Mixed_content)，Firefox 还删除了用于指示页面是否包含混合内容的图标，并将控制台的混合内容警告替换为指示请求已被升级的警告。（[Firefox bug 1779757](https://bugzil.la/1779757)）。

### API

- 现已完全支持异步{{domxref('Clipboard API', '剪切板 API', '', 1)}}。{{domxref('ClipboardItem')}} 接口以及 {{domxref('Clipboard')}} 接口的 [`read()`](/zh-CN/docs/Web/API/Clipboard/read) 和 [`write()`](/zh-CN/docs/Web/API/Clipboard/write) 方法已启用。（[Firefox bug 1887845](https://bugzil.la/1887845)、[Firefox bug 1858788](https://bugzil.la/1858788)）。
- 所有的 {{glossary("character reference","HTML 字符引用")}}都已在 [Web 视频文本轨格式（WebVTT）](/zh-CN/docs/Web/API/WebVTT_API)的 cue、标题文本、注释、注解等中得到支持。([Firefox bug 1395924](https://bugzil.la/1395924))。
- 现已支持 {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} 和 [`WebGL2RenderingContext.drawingBufferColorSpace`](/zh-CN/docs/Web/API/WebGL2RenderingContext)。（[Firefox bug 1885491](https://bugzil.la/1885491)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### 常规

- 修复了 WebDriver classic 和 BiDi 中对滚轮（`wheel`）操作的支持，以正确处理 `ctrl`、`shift` 等修饰符。（[Firefox bug 1885542](https://bugzil.la/1885542)）。

#### WebDriver BiDi

- 现已添加 `permissions.setPermission` 命令，其用于更新浏览器权限（例如 `geolocation`）。权限模块是 WebDriver BiDi 规范的扩展（[定义于权限规范中](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions)）（[Firefox bug 1875065](https://bugzil.la/1875065)）。
- 已为 `browsingContext.locateNodes` 命令添加了将无障碍属性 `name` 和 `role` 作为其定位器的支持（[Firefox bug 1885577](https://bugzil.la/1885577)）。
- 已为 `browsingContext.setViewport` 添加了 `devicePixelRatio` 参数，其用于模拟具有不同设备像素比的屏幕的行为（[Firefox bug 1857961](https://bugzil.la/1857961)）。
- 改进了 `browsingContext.navigate`，以避免竞态条件导致在解析命令之前进行不必要的等待（[Firefox bug 1894305](https://bugzil.la/1894305)）。

#### Marionette

- 现已修复 `WebDriver:ElementClear` 以正确处理在禁用的 fieldset 中定位的元素（[Firefox bug 1863266](https://bugzil.la/1863266)）。
- 现已修复 `WebDriver:GetElementText` 无法正确将包含下划线的文本转成大写的错误（[Firefox bug 1888004](https://bugzil.la/1888004)）。
- 现已修复 `WebDriver:SwitchToFrame` 在导航时进行切换可能会失败的错误。（[Firefox bug 1817820](https://bugzil.la/1817820)）。

## 为附加组件开发者带来的变化

- Firefox 现在可以安装 manifest.json [`"incognito"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) 键的值为 `"split"` 的扩展。然而，由于 Firefox 不支持分离模式，并为了保持隐私浏览的完整性，`"split"` 被视为 `"not_allowed"` 值的别名（[Firefox bug 1876924](https://bugzil.la/1876924)）。
- 现在，当附加组件使用企业策略安装时，{{WebExtAPIRef("management.ExtensionInfo")}} 返回的 `install_type` 为 `"admin"`。（[Firefox bug 1895341](https://bugzil.la/1895341)）。
- 为 {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} 和 {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}} 添加了 `filter` 参数，其用于通过 ID 过滤返回的规则列表（[Firefox bug 1820870](https://bugzil.la/1820870)）。
- 现在在用户安装 Manifest V3 版本的扩展时会显示其 [`host_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) 权限的信息（[Firefox bug 1889402](https://bugzil.la/1889402)）。然而，如果扩展更新时请求了新的主机权限，则不会显示给同用户（[Firefox bug 1893232](https://bugzil.la/1893232)）。
- 现已添加 {{WebExtAPIRef("runtime.getContexts")}} 函数，其用于返回与扩展关联的上下文的信息（[Firefox bug 1875480](https://bugzil.la/1875480)）。
- 对于 Manifest V3 扩展，如果没有为 `_execute_action` 命令定义用户快捷键，则会回退到特殊的 [`_execute_browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) 命令的用户定义快捷键。这使得从 Manifest V2 迁移到 V3 的扩展可以保留浏览器操作的任意用户定义快捷键（[Firefox bug 1797811](https://bugzil.la/1797811)）。

## 实验性 Web 特性

这些特性是 Firefox 127 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多这样的特性。

- **使用 CSS `letter-spacing` 实现对称间距**：`layout.css.letter-spacing.model`。

  CSS {{cssxref("letter-spacing")}} 属性现在会将指定的字母间距均匀分配到每个字符的两侧。这与当前的行为（当前行为主要是将间距添加到一侧）不同（[Firefox bug 1891446](https://bugzil.la/1891446)）。

- **`calc()` 相对颜色的色彩通道支持**：`layout.css.relative-color-syntax.enabled`。

  CSS [`calc()`](/zh-CN/docs/Web/CSS/calc) 函数现在可以以[相对颜色](/zh-CN/docs/Web/CSS/CSS_colors/Relative_colors#使用_math_函数)解析色彩通道。

- **JavaScript `Float16Array` 类型化数组**：`javascript.options.experimental.float16array`。

  现已支持 {{jsxref("Float16Array")}} 类型化数组，以及用于通过 {{jsxref("DataView")}} 读取和设置 `Float16Array` 值的 {{jsxref("DataView.prototype.getFloat16()")}} 和 {{jsxref("DataView.prototype.setFloat16()")}}，以及用于将数字舍入到 16 位的 {{jsxref("Math.f16round()")}} 静态方法。新类型对于与 GPU 共享数据特别有用，特别是在需要以精度换取内存消耗的用例中。（[Firefox bug 1833647](https://bugzil.la/1833647)。）

## 更早期的版本

{{Firefox_for_developers}}
