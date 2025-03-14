---
title: Firefox 25 for developers
slug: Mozilla/Firefox/Releases/25
---

{{FirefoxSidebar}}

## Web 开发者需要注意的变化

### CSS

- 新增了 {{cssxref("background-attachment")}} 属性值 `local`（[Firefox bug 483446](https://bugzil.la/483446)）。
- 新增了一个 Mozilla 私有的媒体查询属性：[`-moz-os-version`](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-os-version)，目前该属性只支持 Windows（[Firefox bug 810399](https://bugzil.la/810399)）。
- 实现了新的 {{cssxref("-moz-osx-font-smoothing")}} CSS 属性（[Firefox bug 857142](https://bugzil.la/857142)）

### HTML

- 实现了 {{HTMLElement("iframe")}} 元素的 [`srcdoc`](/zh-CN/docs/Web/HTML/Element/iframe#srcdoc) 属性，可以用 HTML 代码来定义 {{HTMLElement("iframe")}} 元素的文档内容 ([Firefox bug 802895](https://bugzil.la/802895)).
- `HTMLCanvasElement.toBlob` 方法，当第二个参数指定为 `"image/jpeg"` 时，会接受第三个参数，用来指定 jpeg 图片质量。([Firefox bug 891884](https://bugzil.la/891884)).

### JavaScript

下面都是 [ECMAScript 6](/zh-CN/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) 中的新特性！

- 实现了 `Array.of()` 方法 ([Firefox bug 866849](https://bugzil.la/866849)).
- 实现了 `Number.parseInt()` 和 `Number.parseFloat()` 方法 ([Firefox bug 886949](https://bugzil.la/886949)).
- 实现了 `Map.prototype.forEach()` 和 `Set.prototype.forEach()` 方法 ([Firefox bug 866847](https://bugzil.la/866847))
- 实现了更多的数学函数：`Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.hypot()`, `Math.trunc()`, `Math.sign()` 以及 `Math.cbrt()` ([Firefox bug 894026](https://bugzil.la/894026)).
- 实现了八进制整数字面量写法 (比如`0o777`) 和二进制整数字面量写法 (比如`0b111`) ([Firefox bug 717379](https://bugzil.la/717379)).
- 实现了 ECMAScript 国际化 API——ECMA 402（[Firefox bug 853301](https://bugzil.la/853301)）

### DOM

- 在 Windows 上新增了 `KeyboardEvent.key` 属性对几个与 IME 有关的键盘按键的支持 ([Firefox bug 865565](https://bugzil.la/865565)), 查看 [各按键对应的 key 属性列表](/zh-CN/docs/Web/API/KeyboardEvent#keyname_table_win) 了解详情。
- Metrofox 的键盘事件和桌面版实现统一 ([Firefox bug 843236](https://bugzil.la/843236)).
- 如果使用 preventDefault() 阻止了 keydown 事件的默认行为，则后续的 [keypress 事件就不会触发](</zh-CN/docs/Web/Reference/Events/keydown#preventDefault()_of_keydown_event>) ([Firefox bug 501496](https://bugzil.la/501496))
- 实现了 {{domxref("HTMLIFrameElement")}} 接口的 `srcDoc` 属性，可以用 HTML 代码来定义 {{HTMLElement("iframe")}} 元素的文档内容 ([Firefox bug 802895](https://bugzil.la/802895)).
- 实现了 {{domxref("HTMLTableElement")}} 接口的 `createTBody()` 方法，可以用来获取 (创建) 表格的 {{HTMLElement("tbody")}} 子元素 ([Firefox bug 813034](https://bugzil.la/813034)).
- {{domxref("Range.collapse")}} 方法的 `toStart` 参数变为可选，且默认值为 `false` ([Firefox bug 891340](https://bugzil.la/891340)).
- 按照最新 DOM 规范，`window.Future()` 改名为 `window.Promise()`([Firefox bug 884279](https://bugzil.la/884279)).
- 实现了 document.firstElementChild, document.lastElementChild, document.children, document.childElementCount 以及 DocumentFragment 的 `parentNode` 等属性 ([Firefox bug 895974](https://bugzil.la/895974)).
- `navigator.geolocation` 属性更新以符合最新规范。它永远不会返回 `null`。当 `geo.enabled` 偏好设置为 `false` 时，它会返回 `undefined` ([Firefox bug 884921](https://bugzil.la/884921)).
- {{domxref("ImageData")}} API 在 {{domxref("Worker")}} 内也可用 ([Firefox bug 845545](https://bugzil.la/845545)).

### MathML

### SVG

## 参见

- [Firefox 25 网站兼容性](/zh-CN/docs/Mozilla/Firefox/Releases/25/Site_Compatibility)

### 更早期的版本

{{Firefox_for_developers}}
