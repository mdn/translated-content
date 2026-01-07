---
title: Firefox 119 的开发者说明
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 7c6b02283df15120126fd174f91519c9a76d81c9
---

本文提供了有关 Firefox 119 中影响开发者的变更信息。Firefox 119 于 2023 年 10 月 24 日发布。

## 为 Web 开发者带来的变化

### HTML

#### 移除

- {{HTMLElement('input')}} 元素不再支持非标准的 `mozactionhint` 属性。请使用 [`enterkeyhint`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)。（详见 [Firefox bug 1735980](https://bugzil.la/1735980)）。

### CSS

- CSS 函数 {{cssxref("attr")}} 现在支持回退值。这样，如果缺少[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)，就可以设置回退值（[Firefox bug 1448248](https://bugzil.la/1448248)）。

### JavaScript

- 现在支持用于对可迭代元素进行分组的 {{jsxref("Object.groupBy()")}} 和 {{jsxref("Map.groupBy()")}} 静态方法（详见 [Firefox bug 1792650](https://bugzil.la/1792650)）。
- {{jsxref("String.prototype.isWellFormed()")}} 和 {{jsxref("String.prototype.toWellFormed()")}} 方法可分别用于检查字符串是否包含规范的 Unicode 文本（即不包含[单独代理项](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)），并将不规范字符串清理为规范的 Unicode 文本。（详见 [Firefox bug 1850755](https://bugzil.la/1850755)）。

### SVG

- 接受 [`<length>`](/zh-CN/docs/Web/SVG/Guides/Content_type#length) 值的 [SVG 属性](/zh-CN/docs/Web/SVG/Reference/Attribute)现在支持所有 SVG 元素的[第 3 版](https://www.w3.org/TR/css-values-3/#lengths) [length](/zh-CN/docs/Web/CSS/Reference/Values/length) [CSS 数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)值。这样就可以根据字体大小（`cap`、`rem` 等）、视口（`vh`、`vw`、`vmin` 等）或绝对长度（`px`、`cm` 等）确定 SVG 元素的大小，例如：`<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`。（详见 [Firefox bug 1287054](https://bugzil.la/1287054)）。

### HTTP

- HTTP 响应标头 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} 的 [`credentialless`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless) 指令现已在桌面平台（以及除安卓以外的移动平台）上得到支持，其允许在未明确选择的跨源服务器上进行 `no-cors` 资源请求，尽管没有 cookie 或其他凭据（[Firefox bug 1851467](https://bugzil.la/1851467)）。

### API

- 现在可以通过在传递给 [`WebTransport.createBidirectionalStream()`](/zh-CN/docs/Web/API/WebTransport/createBidirectionalStream) 和 [`WebTransport.createUnidirectionalStream()`](/zh-CN/docs/Web/API/WebTransport/createUnidirectionalStream) 的选项参数中包含 `sendOrder` 属性，以指定发送流的相对优先级（[Firefox bug 1816925](https://bugzil.la/1816925)）。
- 现已支持 [`AuthenticatorAttestationResponse`](/zh-CN/docs/Web/API/AuthenticatorAttestationResponse) 接口的 [`getAuthenticatorData()`](/zh-CN/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)、[`getPublicKeyAlgorithm()`](/zh-CN/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) 和 [`getPublicKey()`](/zh-CN/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) 方法（详见 [Firefox bug 1816519](https://bugzil.la/1816519) 和 [Firefox bug 1816520](https://bugzil.la/1816520)）。
- 已支持 [Web Authentication API](/zh-CN/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) 的[凭证属性扩展（`credProps`）](/zh-CN/docs/Web/API/Web_Authentication_API)，允许用户在创建/注册后查询凭证是否可被发现（[Firefox bug 1844437](https://bugzil.la/1844437)）。
- [`SubtleCrypto.deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey) 方法现在支持 [HKDF](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#hkdf) 算法，作为其 [`derivedKeyAlgorithm`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) 参数的选项（详见 [Firefox bug 1851928](https://bugzil.la/1851928)）。
- 现已支持 {{domxref("PublicKeyCredential")}} 接口的 {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}、{{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}} 和 {{domxref("PublicKeyCredential.toJSON", "toJSON()")}} 方法。这些方法非常方便，可将用于创建和共享凭证对象的对象转换为 JSON 表示形式，以便进行序列化/反序列化并与服务器共享（详见 [Firefox bug 1823782](https://bugzil.la/1823782)）。

#### DOM

- [ARIA](/zh-CN/docs/Web/Accessibility/ARIA) 反射现在默认支持不引用其他元素的属性；只有非 IDREF 属性才会被反射。现在，你可以通过 JavaScript API 直接获取和设置 DOM 元素上的 ARIA 属性，而不必使用 `setAttribute` 和 `getAttribute`。例如，现在除了支持 `buttonElement.setAttribute("aria-pressed", "true");` 以外，还支持 `buttonElement.ariaPressed = "true";`（[Firefox bug 1785412](https://bugzil.la/1785412)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### 常规

- 在按下鼠标中键或右键的情况下执行 `pointerDown` 操作时，相关 HTML 元素发出的 `mousedown` 事件的 `buttons` 属性值被调换（[Firefox bug 1850086](https://bugzil.la/1850086)）。

- 在执行输入类型为 `wheel` 且原点设置为 `pointer` 的 `scroll` 操作时，会不适当地引发 `invalid argument` 错误，而当前的 WebDriver 规范不支持这种组合（[Firefox bug 1850166](https://bugzil.la/1850166)）。

#### WebDriver BiDi

- 新增了 [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) 命令，允许用户重新加载当前在给定浏览上下文中显示的页面或框架（[Firefox bug 1830859](https://bugzil.la/1830859)）。

- 新增了 [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) 事件，该事件会在 `alert`、`confirm` 或 `prompt` 类型的用户提示关闭时触发（[Firefox bug 1824221](https://bugzil.la/1824221)）。

- 新增了 [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) 事件，当 Firefox 启动新导航时会触发该事件（[Firefox bug 1756595](https://bugzil.la/1756595)）。

- 新增了 [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) 和 [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) 事件，允许用户监控给定浏览上下文的 JavaScript 领域（Realm）的生命周期。这种领域基本上是一个孤立的执行环境（`sandbox`），有自己唯一的全局对象（window）（[Firefox bug 1788657](https://bugzil.la/1788657)、[Firefox bug 1788659](https://bugzil.la/1788659)）。

- 当打开 HTTP 身份验证对话框时，会意外发送 `browsingContext.userPromptOpened` 事件（[Firefox bug 1853302](https://bugzil.la/1853302)）。

- 设置为 `null` 的 `context` 字段将不再发出不需要的事件。因为底层浏览上下文已关闭，此类事件不再有效（[Firefox bug 1847563](https://bugzil.la/1847563)）。

#### Marionette

- 更新了尝试使用 `Addon:Install` 命令安装 WebExtension 时可能出现的错误代码列表，以便与 Firefox 的最新错误代码相匹配（[Firefox bug 1852537](https://bugzil.la/1852537)）。

## 更早期的版本

{{Firefox_for_developers}}
