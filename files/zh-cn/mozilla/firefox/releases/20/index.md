---
title: Firefox 20 for developers
slug: Mozilla/Firefox/Releases/20
---

{{FirefoxSidebar}}

Firefox 20 正式版发布于 2013 年 4 月 2 日。

## Web 开发者需要注意的变化

### HTML

- 实现了{{HTMLElement("a")}}和{{HTMLElement("area")}}元素上的{{htmlattrxref("download", "a") }}属性 ({{bug("676619")}}).
- [全局属性](/zh-CN/docs/HTML/Global_attributes) [`dir`](/zh-CN/docs/HTML/Global_attributes#attr-dir) 的值开始支持 `auto` ({{bug("548206")}}).

### JavaScript

- 实现了`Weakmap.prototype.clear()`方法 ({{bug("814562")}}).
- 实现了[`Math.imul()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Math/imul)方法，可以进行 C 风格的 32 位整数乘法运算。还不属于 harmony (EcmaScript 6) 提案，所以是非标准的 ({{bug("808148")}}).
- Web apps using draggable text with Kinetic 3.x are working, even when using the Cairo canvas backend. ({{bug("835064")}})
- E4X 规范中的[for each...in](/zh-CN/docs/JavaScript/Reference/Statements/for_each...in)语句被废弃，请使用 ES6 中的[for...of](/zh-CN/docs/JavaScript/Reference/Statements/for...of)语句代替 ({{Bug("804834")}}).

### CSS

- [CSS Flexbox](/zh-CN/docs/CSS/Using_CSS_flexible_boxes)默认开启，不需要设置 about:config.
- 实现了 [CSS Masking specification](https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html) 中的 `mask-type` 属性（{{bug("793617")}}）。

### DOM

- {{domxref("HTMLMediaElement")}}支持可`playbackRate`属性 (both read and write), with pitch correction. Pitch correction can be controlled using the property `mozPreservesPitch` ({{bug('495040')}}).
- CSSOM: 实现了新的{{domxref("CSSGroupingRule")}}和{{domxref("CSSConditionRule")}} ({{bug("814907")}}).
- CSSOM:{{domxref("CSSRule")}}上的常量 CSSRule.MOZ_KEYFRAME_RULE 和 CSSRule.MOZ_KEYFRAMES_RULE 去掉前缀成为了 CSSRule.KEYFRAME_RULE 和 CSSRule.KEYFRAMES_RULE.带前缀的版本仍暂时保留让开发者过度他们的代码{{bug("816431")}}).
- CSSOM: 现在可以设置 {{domxref("CSSMediaRule")}} 上的 `conditionText` 属性的值（{{bug("815021")}}）。
- {{domxref("DOMParser")}}上的 `parseFromStream` 和 `parseFromBuffer` 方法在 web 页面上被禁用.({{bug('816410')}}).
- [`XMLSerializer`](/zh-CN/docs/XMLSerializer)上的`serializeToStream`方法在 web 页面上被禁用.({{bug('816410')}}).
- `TextDecoder`和`TextEncoder`接口可以在 Worker 中使用 ({{bug('795542')}}).
- 实现了 `CSS.supports()` 方法（{{bug("779917")}}）。
- 实现了`UndoManager`({{bug("617532")}}).

## 附加组件和 Mozilla 开发者需要注意的变化

- 移除了 nsIDOMParserJS 接口{{bug('816410')}}.使用[nsIDOMParser](/zh-CN/docs/nsIDOMParser)来代替。

## 相关链接

- [Firefox 20 Aurora Release Notes](http://www.mozilla.org/zh-CN/firefox/20.0a1/nightlynotes/)
- [Site Compatibility for Firefox 20](/zh-CN/docs/Site_Compatibility_for_Firefox_20)

### 更早版本

{{Firefox_for_developers('19')}}
