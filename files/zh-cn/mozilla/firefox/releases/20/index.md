---
title: Firefox 20 for developers
slug: Mozilla/Firefox/Releases/20
---

Firefox 20 正式版发布于 2013 年 4 月 2 日。

## Web 开发者需要注意的变化

### HTML

- 实现了{{HTMLElement("a")}}和{{HTMLElement("area")}}元素上的[`download`](/zh-CN/docs/Web/HTML/Reference/Elements/a#download)属性 ([Firefox bug 676619](https://bugzil.la/676619)).
- [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#attr-dir) 的值开始支持 `auto` ([Firefox bug 548206](https://bugzil.la/548206)).

### JavaScript

- 实现了`Weakmap.prototype.clear()`方法 ([Firefox bug 814562](https://bugzil.la/814562)).
- 实现了[`Math.imul()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)方法，可以进行 C 风格的 32 位整数乘法运算。还不属于 harmony (EcmaScript 6) 提案，所以是非标准的 ([Firefox bug 808148](https://bugzil.la/808148)).
- Web apps using draggable text with Kinetic 3.x are working, even when using the Cairo canvas backend. ([Firefox bug 835064](https://bugzil.la/835064))
- E4X 规范中的[for each...in](/zh-CN/docs/JavaScript/Reference/Statements/for_each...in)语句被废弃，请使用 ES6 中的[for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)语句代替 ([Firefox bug 804834](https://bugzil.la/804834)).

### CSS

- [CSS Flexbox](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)默认开启，不需要设置 about:config.
- 实现了 [CSS Masking specification](https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html) 中的 `mask-type` 属性（[Firefox bug 793617](https://bugzil.la/793617)）。

### DOM

- {{domxref("HTMLMediaElement")}}支持可`playbackRate`属性 (both read and write), with pitch correction. Pitch correction can be controlled using the property `mozPreservesPitch` ([Firefox bug 495040](https://bugzil.la/495040)).
- CSSOM: 实现了新的{{domxref("CSSGroupingRule")}}和{{domxref("CSSConditionRule")}} ([Firefox bug 814907](https://bugzil.la/814907)).
- CSSOM:{{domxref("CSSRule")}}上的常量 CSSRule.MOZ_KEYFRAME_RULE 和 CSSRule.MOZ_KEYFRAMES_RULE 去掉前缀成为了 CSSRule.KEYFRAME_RULE 和 CSSRule.KEYFRAMES_RULE.带前缀的版本仍暂时保留让开发者过度他们的代码[Firefox bug 816431](https://bugzil.la/816431)).
- CSSOM: 现在可以设置 {{domxref("CSSMediaRule")}} 上的 `conditionText` 属性的值（[Firefox bug 815021](https://bugzil.la/815021)）。
- {{domxref("DOMParser")}}上的 `parseFromStream` 和 `parseFromBuffer` 方法在 web 页面上被禁用.([Firefox bug 816410](https://bugzil.la/816410)).
- [`XMLSerializer`](/zh-CN/docs/Web/API/XMLSerializer)上的`serializeToStream`方法在 web 页面上被禁用.([Firefox bug 816410](https://bugzil.la/816410)).
- `TextDecoder`和`TextEncoder`接口可以在 Worker 中使用 ([Firefox bug 795542](https://bugzil.la/795542)).
- 实现了 `CSS.supports()` 方法（[Firefox bug 779917](https://bugzil.la/779917)）。
- 实现了`UndoManager`([Firefox bug 617532](https://bugzil.la/617532)).

## 附加组件和 Mozilla 开发者需要注意的变化

- 移除了 nsIDOMParserJS 接口[Firefox bug 816410](https://bugzil.la/816410).使用[nsIDOMParser](/zh-CN/docs/nsIDOMParser)来代替。

## 参见

- [Firefox 20 Aurora Release Notes](https://www.mozilla.org/zh-CN/firefox/20.0a1/nightlynotes/)
- [Site Compatibility for Firefox 20](/zh-CN/docs/Site_Compatibility_for_Firefox_20)

### 更早期的版本

{{Firefox_for_developers}}
