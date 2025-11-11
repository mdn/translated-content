---
title: Firefox 19 for developers
slug: Mozilla/Firefox/Releases/19
---

Firefox 19 已于 2013 年 2 月 19 日正式发布。

## Web 开发者需要注意的变化

### JavaScript

- [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 对象的 `size()` 方法变成了 `size` 属性。([Firefox bug 807001](https://bugzil.la/807001))
- [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 对象新增了一个 clear() 方法。([Firefox bug 805003](https://bugzil.la/805003))

### CSS

- 支持了几个 viewport-relative 的 {{cssxref("&lt;length&gt;")}} 单位：`vh`, `vw`, `vmin` 以及 `vmax` ([Firefox bug 503720](https://bugzil.la/503720))
- CSS Flexbox 脱前缀，但仍然被默认禁止 ([Firefox bug 801098](https://bugzil.la/801098)).
- `-moz-initial` 脱前缀 ([Firefox bug 806068](https://bugzil.la/806068)).不过 `-moz-initial` 仍然会作为别名保留一段时间，但仍然推荐你尽快改用 `initial`.
- {{cssxref("text-transform")}} 属性现在支持了 `full-width` 关键字，which allows a more seamless inclusion of Latin characters in text using ideographic fixed-width characters, like Chinese or Japanese ([Firefox bug 774560](https://bugzil.la/774560)).
- 实现了 {{cssxref("page-break-inside")}} ([Firefox bug 685012](https://bugzil.la/685012)).
- {{cssxref("calc", "calc()")}} 函数可以使用在 `<color-stop>` 上 ( {{cssxref("&lt;gradient&gt;")}}上的一个值).
- 实现了 {{cssxref("@page")}} @规则 ([Firefox bug 115199](https://bugzil.la/115199)).但是 {{cssxref(":first")}}, {{cssxref(":right")}}, {{cssxref(":left")}} 仍没实现。
- {{cssxref(":-moz-placeholder")}} 伪类替换成 {{cssxref("::-moz-placeholder")}} 伪元素 ([Firefox bug 737786](https://bugzil.la/737786)).

### DOM

- {{domxref("element.getElementsByTagName")}} 方法开始返回 `HTMLCollection` 对象，而不是以前的 `NodeList` 对象。([Firefox bug 799464](https://bugzil.la/799464)).
- 实现了 {{domxref("File")}} 对象的 `mozLastModifiedDate` 属性。([Firefox bug 793955](https://bugzil.la/793955))
- 当 {{domxref("File")}} 对象的最后修改时间无法获取到时，它的 lastModifiedDate 属性会返回当前日期。([Firefox bug 793459](https://bugzil.la/793459)
- 实现了 {{domxref("CanvasRenderingContext2D")}}对象的 `isPointInStroke` 方法。([Firefox bug 803124](https://bugzil.la/803124)).
- 实现了 {{domxref("HTMLCanvasElement")}} 对象的 `toBlob` 方法 ([Firefox bug 648610](https://bugzil.la/648610)).
- {{domxref("Node.isSupported")}} 和 {{domxref("document.implementation", "document.implementation.hasFeature()")}} 方法会总是放回 `true` ([Firefox bug 801425](https://bugzil.la/801425)).
- 当调用 `document.createElement(null)` 时，`null` 会被转换成字符串，就像执行了 `document.createElement("null")`。

### XForms

[**删除**](http://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms/)了对[XForms](/zh-CN/docs/XForms)的支持。

## 附加组件和 Mozilla 开发者需要注意的变化

> [!NOTE]
> A key change in Firefox 19 is that [`nsresult`](/zh-CN/docs/XPCOM_API_Reference/nsresult) is now strongly typed. This will help make it easier to detect bugs that are caused by mishandling of return values, but may cause existing code to break if it's making incorrect assumptions in this regard.

- `getBrowserSelection()` now returns the selected text in a text input field. As a result, `gContextMenu.isTextSelected` will be `true` when the user selects text in a text input field that is not a password field. ([Firefox bug 565717](https://bugzil.la/565717))
- [Dict.jsm](/zh-CN/docs/Mozilla/JavaScript_code_modules/Dict.jsm): [`Dict()`](/zh-CN/docs/Mozilla/JavaScript_code_modules/Dict.jsm#Creating_a_dictionary) now takes a JSON String. [`Dict.toJSON()`](</zh-CN/docs/Mozilla/JavaScript_code_modules/Dict.jsm#toJSON()>) was added, and it returns a JSON String. ([Firefox bug 727967](https://bugzil.la/727967))

### 接口变化

- `nsIImgLoadingContent`
  - : The parameter (aObserver) of `addObserver()` method changes from `imgIDecoderObserver` to `imgINotificationObserver`. The `notify()` method of `imgINotificationObserver` is not scriptable, so you need to use `createScriptedObserver()` from `imgITools`.
- `nsIChannel`
  - : `contentLength` 属性的类型由 `long` 改成 `int64_t`.

## 参见

- [Firefox 19 发行说明](https://www.mozilla.org/zh-CN/firefox/19.0/releasenotes/)
- [Firefox 19 网站兼容性](/zh-CN/docs/Site_Compatibility_for_Firefox_19)
- [Firefox 19 附加组件兼容性](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### 更早期的版本

{{Firefox_for_developers}}
