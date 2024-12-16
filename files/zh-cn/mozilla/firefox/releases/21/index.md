---
title: Firefox 21 for developers
slug: Mozilla/Firefox/Releases/21
---

{{FirefoxSidebar}}

## Web 开发者需要注意的变化

### HTML

- 实现了{{HTMLElement("style")}}元素上的[`scoped`](/zh-CN/docs/Web/HTML/Element/style#scoped)属性。拥有该属性的{{HTMLElement("style")}}元素可以通过在 Firefox 20 中实现的 CSS 伪类{{cssxref(":scope")}}选择器选择到.([Firefox bug 508725](https://bugzil.la/508725)).
- 实现了新的{{HTMLElement("main")}}元素 ([Firefox bug 820508](https://bugzil.la/820508)).

### JavaScript

- [E4X](/zh-CN/docs/E4X),一个古老的 JavaScript 扩展 (ECMA-357),已经被删除。因为一直以来，只有 Gecko 支持它.([Firefox bug 788293](https://bugzil.la/788293)).
- [parseInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)不再将以"0"开头的字符串作为 8 进制数字来解析 ([Firefox bug 786135](https://bugzil.la/786135)).

### CSS

- {{cssxref("user-select", "-moz-user-select")}}属性的属性值在设置为 `none` 时和设置为 `-moz-none` 时效果等同于，这样才能让 Gecko 和其他内核 WebKit(Chrome, Safari),Presto (Opera) 以及 Trident(Internet Explorer) 中的表现相同 ([Firefox bug 816298](https://bugzil.la/816298)).
- On XHTML content, the `auto` value of {{cssxref("hyphens", "-moz-hyphens")}} incorrectly applied hyphenation rules when the language was not explicitly declared. This is fixed by ([Firefox bug 702121](https://bugzil.la/702121)).
- CSS 属性{{cssxref("-moz-orient")}}现在支持新的值 `auto`. 当应用到一个{{HTMLElement("meter")}}元素或者{{HTMLElement("progress")}}元素上时，`auto` 就等同于 `horizontal`([Firefox bug 835883](https://bugzil.la/835883)).

### DOM

- 实现了{{domxref("window.location")}}上的 `origin` 属性 ([Firefox bug 828261](https://bugzil.la/828261)).
- 实现了 `<input type="time">` 对象上的 `valueAsDate` 和 `valueAsNumber` 方法 ([Firefox bug 781570](https://bugzil.la/781570)).
- 实现了 `<input type="time">` 对象上的 `min` 和 `max` 属性 ([Firefox bug 781572](https://bugzil.la/781572)).
- Some new keyCodes for volume control are supported ([Firefox bug 674739](https://bugzil.la/674739)).
- Some new keyCodes for ancient keyboard layout such as AS/400 are now supported on Windows and Linux ([Firefox bug 833719](https://bugzil.la/833719)).
- Various keyCode values for OEM sepecific keys on Windows are now supported again ([Firefox bug 833719](https://bugzil.la/833719)).
- 实现了[`window.crypto.getRandomValues`](/zh-CN/docs/Web/API/Crypto/getRandomValues)函数 ([Firefox bug 440046](https://bugzil.la/440046))。

### SVG

- 实现了{{cssxref("paint-order")}}属性 ([Firefox bug 828805](https://bugzil.la/828805)).

### 网络

- 更新 CSP 实现到最新的 CSP 规范 1.0(CR):

  - Support for the spec-compliant `Content-Security-Policy` HTTP header (in addition to the experimental `X-Content-Security-Policy`) has been added ([Firefox bug 783049](https://bugzil.la/783049)). **Note**: the patch for this new header landed in Firefox 21, it is disabled on builds ([Firefox bug 842657](https://bugzil.la/842657)).

## 附加组件和 Mozilla 开发者需要注意的变化

- FUEL applications cannot use the Livemarks service anymore ([Firefox bug 834492](https://bugzil.la/834492)). The Livemarks service is deprecated and phased out in favor of the new async interface.
- History API saw numerous deprecated API being removed:

  - Replaced by `mozIAsyncFavicons`:

    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Replaced by `mozIAsyncLivemarks`:

    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Removed only third argument:

    - `PlacesUIUtils.showBookmarkDialog`

  - No more implemented by Places, use `mozIAsyncHistory` instead:

    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - No more needed, use `onDeleteURI` or `onItemRemoved`:

    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Never implemented properly:

    - `nsINavHistoryFullVisitResultNode`

  - Deprecated, use `mozIAsyncHistory::updatePlaces` instead:

    - `nsINavHistoryService::AddVisit`

## 参见

- [Firefox 21 发行说明](https://www.mozilla.org/zh-CN/firefox/21.0/releasenotes/)
- [Firefox 21 网站兼容性](/zh-CN/docs/Site_Compatibility_for_Firefox_21)
- [Firefox 21 附加组件兼容性](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### 更早期的版本

{{Firefox_for_developers}}
