---
title: Firefox 31 for developers
slug: Mozilla/Firefox/Releases/31
---

{{FirefoxSidebar}}

Web 开发者需要关注的变化

### Developer Tools

_No change._

### CSS

- CSS 变量的语法从旧的 "var-" 前缀更新为新的 "--" 前缀。（[Firefox bug 985838](https://bugzil.la/985838)）
- Unwanted white space for multiple of 10,000 in Korean counte.([Firefox bug 985186](https://bugzil.la/985186))

### HTML

_No change._

### JavaScript

实现了如下 ECMAScript 6 新特性：

- `Array` 方法：{{jsxref("Array.prototype.fill()")}} ([Firefox bug 911147](https://bugzil.la/911147))
- `Math` 函数：{{jsxref("Math.clz32()")}} ([Firefox bug 925123](https://bugzil.la/925123))
- `String` 方法：{{jsxref("String.prototype.normalize()")}} ([Firefox bug 918987](https://bugzil.la/918987)).

### Interfaces/APIs/DOM

- Constructor of `KeyboardEvent` has been implemented ([Firefox bug 930893](https://bugzil.la/930893)).
- `KeyboardEvent.initKeyboardEvent()` has been implemented ([Firefox bug 930893](https://bugzil.la/930893)).
- `KeyboardEvent.isComposing` attribute has been implemented ([Firefox bug 993234](https://bugzil.la/993234)).
- `InputEvent` interface has been implemented ([Firefox bug 993253](https://bugzil.la/993253)).
- `InputEvent.isComposing` attribute has been implemented ([Firefox bug 993253](https://bugzil.la/993253)).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## Security

_No change._

## Changes for add-on and Mozilla developers

_No change._

## See also

- [Site Compatibility for Firefox 31](/zh-CN/docs/Mozilla/Firefox/Releases/31/Site_Compatibility)

### Older versions

{{Firefox_for_developers('30')}}
