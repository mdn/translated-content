---
title: Firefox 41 for developers
slug: Mozilla/Firefox/Releases/41
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://nightly.mozilla.org/) Firefox 41 was released on September 22, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### 开发工具

Highlights:

- [Take a screenshot of a DOM node](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element_popup_menu)
- [Copy as HAR/save as HAR](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave_all_as_har)
- ["Add Rule" button in the Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add_rules)
- [View source in a tab](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Disabled by default)
- [More options to copy CSS rules](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy_rules)
- [Copy image as data: URI in the Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- [Added command to GCLI to display CSP info](/zh-CN/docs/Tools/GCLI/Display_security_information)

[All devtools bugs fixed between Firefox 40 and Firefox 41](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503): note that many of these bugs, especially those relating to the performance tools, were uplifted to Firefox 40.

### CSS

- Support for laying out vertical scripts has been activated by default ([Firefox bug 1138384](https://bugzil.la/1138384)). That means that the following CSS properties are now available:

  - Choosing the direction of writing: {{cssxref("writing-mode")}}.
  - Controlling orientation of characters: {{cssxref("text-orientation")}}.
  - Direction-independent equivalents of {{cssxref("width")}} and {{cssxref("height")}}: {{cssxref("block-size")}} and {{cssxref("inline-size")}}.
  - Direction-independent equivalents of {{cssxref("min-width")}} and {{cssxref("min-height")}}: {{cssxref("min-block-size")}} and {{cssxref("min-inline-size")}}.
  - Direction-independent equivalents of {{cssxref("max-width")}} and {{cssxref("max-height")}}: {{cssxref("max-block-size")}} and {{cssxref("max-block-size")}}.
  - Direction-independent equivalents of {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} and {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} and {{cssxref("margin-inline-end")}}.
  - Direction-independent equivalents of {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} and {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}}.
  - Direction-independent equivalents of {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} and {{cssxref("border-left")}} and their longhands for width, style and color: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} and {{cssxref("border-inline-end-color")}}.
  - Direction-independent equivalents of {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} and {{cssxref("left")}}: {{cssxref("offset-block-start")}}, {{cssxref("offset-block-end")}}, {{cssxref("offset-inline-start")}} and {{cssxref("offset-inline-end")}}.

- Support the {{cssxref("transform-origin")}} property in SVG and implement the {{cssxref("transform-box")}} property ([Firefox bug 923193](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} 没有 `href` 属性，并且不再被分类为交互内容。点击 {{HTMLElement("label")}} 将会激活标签内容 ([Firefox bug 1167816](https://bugzil.la/1167816)).
- SVG 图标现在支持站点图标 (偏爱图标和快捷方式图标)([Firefox bug 366324](https://bugzil.la/366324)).
- The [`crossorigin`](/zh-CN/docs/Web/HTML/Element/link#crossorigin) attribute is now supported for [\<link rel='preconnect'>](/zh-CN/docs/Web/HTML/Element/link) ([Firefox bug 1174152](https://bugzil.la/1174152)).
- The picture element does not react to resize/viewport changes ([Firefox bug 1135812](https://bugzil.la/1135812)).

### JavaScript

- {{jsxref("Date.prototype")}}现在是一个普通对象，不再是一个 {{jsxref("Date")}} 实例 ([Firefox bug 861219](https://bugzil.la/861219)).
- {{jsxref("Date.prototype.toString")}} 现在是一般方法 ([Firefox bug 861219](https://bugzil.la/861219)).
- {{jsxref("Symbol.species")}}被增加到 ([Firefox bug 1131043](https://bugzil.la/1131043)).
- {{jsxref("Map.@@species", "Map[@@species]")}} 和{{jsxref("Set.@@species", "Set[@@species]")}} 获取已经被增加 ([Firefox bug 1131043](https://bugzil.la/1131043)).
- 非标准 {{jsxref("Statements/let", "let expression", "#let_expressions", 1)}} 支持已经被废弃 ([Firefox bug 1023609](https://bugzil.la/1023609)).
- {{jsxref("Functions/Default_parameters", "Destructured parameters with default value assignment","#Destructured_parameter_with_default_value_assignment", 1)}} 现在已经被支持 ([Firefox bug 1018628](https://bugzil.la/1018628)).
- Per ES2015, [方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions) 需要尖括号。从现在开始语法没有尖括号将会失败 ([Firefox bug 1150855](https://bugzil.la/1150855)).
- [方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions) (除了生成方法) 已经不再可构造 ([Firefox bug 1059908](https://bugzil.la/1059908) 和[Firefox bug 1166950](https://bugzil.la/1166950)).
- As part of ES2015 specification compliance, parenthesized [destructuring](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) patterns, like `([a, b]) = [1, 2]` or `({a, b}) = { a: 1, b: 2 }`, are now considered invalid and will throw a {{jsxref("SyntaxError")}}. See [Jeff Walden's blog post](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) for more details.
- The [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) syntax has been added ([Firefox bug 1141865](https://bugzil.la/1141865)).

### Interfaces/APIs/DOM

- 剪切、复制和粘贴命令处理已经被重新编码，并且现在允许 JS 编程实现网页内容复制和剪切。

  - 使用 `'paste'`名利作为参数，{{domxref("Document.queryCommandSupported()")}}现在会返回 false 如果不充分的权限被执行 ([Firefox bug 1161721](https://bugzil.la/1161721)).
  - 使用`'cut'` 或 `'copy'` 命令作为参数，{{domxref("Document.queryCommandSupported()")}} 现在返回`true` 如果调用的上下文中包括用户发起的或特权代码 ([Firefox bug 1162952](https://bugzil.la/1162952)).
  - 使用 `'cut'` 或`'copy'` 命令作为参数，{{domxref("Document.execCommand()")}} 将会执行，但是仅仅在用户发起的或特权代码的上下文下 ([Firefox bug 1012662](https://bugzil.la/1012662)).

#### Events

- 非标准的{{domxref("CloseEvent.initCloseEvent()")}} 方法和创建 {{domxref("CloseEvent")}} 使用 {{domxref("Event.createEvent", "Event.createEvent('CloseEvent')")}} 方法已经被移除。相反可以使用标准的构造器{{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} . ([Firefox bug 1161950](https://bugzil.la/1161950)).
- On Desktop, {{domxref("PointerEvent")}} is now activated by default in Nightly; it is not activated in Developer Edition, Beta or Release and won't be for at least some versions ([Firefox bug 1166347](https://bugzil.la/1166347)).
- The unprefixed version of {{domxref("MouseEvent.movementX")}} and {{domxref("MouseEvent.movementY")}} have been added; the prefixed versions are deprecated and will be removed at some point in the future ([Firefox bug 1164981](https://bugzil.la/1164981)).

#### Web Crypto

- {{domxref("SubtleCrypto.importKey()")}} 和{{domxref("SubtleCrypto.exportKey()")}} 现在支持 `ECDH` keys ([Firefox bug 1050175](https://bugzil.la/1050175)).

#### Canvas API

- {{domxref("HTMLCanvasElement.captureStream()")}} and {{domxref("CanvasCaptureMediaStream")}} have been added and allow to stream the display of a {{HTMLElement("canvas")}} in real-time ([Firefox bug 1032848](https://bugzil.la/1032848)).
- {{domxref("MediaStream.id")}} now returns the unique id of a stream ([Firefox bug 1089798](https://bugzil.la/1089798)).
- The initial value of {{domxref("CanvasRenderingContext2D.filter")}} is now correctly set to `none` ([Firefox bug 1163124](https://bugzil.la/1163124)).

#### Service Workers

- Improvement to our experimental [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) implementation:

  - {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} has been implemented ([Firefox bug 1131352](https://bugzil.la/1131352)).
  - {{domxref("Clients.claim()")}} has been added ([Firefox bug 1130684](https://bugzil.la/1130684)).
  - The other functional events of Service Workers have been made to inherit from {{domxref("ExtendableEvent")}}, giving them access to the {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} method ([Firefox bug 1160527](https://bugzil.la/1160527)).

- The {{domxref("CacheStorage")}} and {{domxref("Cache")}} interfaces are now supported ([Firefox bug 1110144](https://bugzil.la/1110144)).

#### WebGL

- The `failIfMajorPerformanceCaveat` WebGL context attribute has been added and can be set when creating a WebGL context with {{domxref("HTMLCanvasElement.getContext()")}} to indicate if a context creation should fail if the system performance is low ([Firefox bug 1164970](https://bugzil.la/1164970)).

#### WebRTC

- Firefox no longer offers a default STUN server to be used if none are specified when constructing a new {{domxref("RTCPeerConnection")}}. You'll need to provide one in order to successfully establish a WebRTC connection.

#### Miscellaneous

- On OS X and Windows, {{domxref("NavigatorOnLine.onLine", "Navigator.onLine")}} now changes regarding network connectivity (it always returned `true`, , unless "Work offline" mode was selected) before ([Firefox bug 654579](https://bugzil.la/654579)).
- {{domxref("MessagePort")}} and {{domxref("MessageChannel")}} now available in [Web workers](/zh-CN/docs/Web/API/Web_Workers_API), and are enabled by default in all contexts ([Firefox bug 952139](https://bugzil.la/952139)) and ([Firefox bug 911972](https://bugzil.la/911972)).
- The User Timing API is now available in [Web workers](/zh-CN/docs/Web/API/Web_Workers_API) ([Firefox bug 1155761](https://bugzil.la/1155761)).
- The [Notifications API](/zh-CN/docs/Web/API/Notifications_API) is now available in [Web workers](/zh-CN/docs/Web/API/Web_Workers_API) ([Firefox bug 916893](https://bugzil.la/916893)).
- {{domxref("DOMRequest")}} and {{domxref("DOMCursor")}} are now available in [Web workers](/zh-CN/docs/Web/API/Web_Workers_API) ([Firefox bug 1167650](https://bugzil.la/1167650)).
- The [CSS Font Loading API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) has been completely implemented and is now enabled by default ([Firefox bug 1149381](https://bugzil.la/1149381)).
- Shared workers can no longer be shared between private (i.e. browsing in a private window) and non-private documents (see [Firefox bug 1177621](https://bugzil.la/1177621)).
- The {{domxref("URLUtilsSearchParams.searchParams")}} property is now read-only ([Firefox bug 1174731](https://bugzil.la/1174731)).
- The {{domxref('URLUtils.hash')}} property no longer decodes URL fragment ([Firefox bug 1093611](https://bugzil.la/1093611)).

### MathML

#### 新的默认、支持字体处理

数学公式需要特殊的字体。到目前为止，这些字体被硬编码在用户默认样式 `mathml.css` (使用{{MathMLElement("math")}} 标志设置字体组) 和偏好选项`font.mathfont-family` (为拉伸和大操作数设置支持字体). Firefox 41 引入一个能够自动设置\<math>标志和相应偏好选项的内置`x-math` 语言 (例如`font.name.serif.x-math`). 用户默认样式现在将\<math>标志字体设置为 serif 并且`font.mathfont-family` 被替换为 `font.name.serif.x-math`. 所有平台现在基本使用相同列表的支持字体， "Latin Modern Math" 是首选。在标准的 per-language 字体偏好菜单中，默认支持字体能够被设置。更多细节，请参照[Firefox bug 947654](https://bugzil.la/947654) 和 [Firefox bug 1160456](https://bugzil.la/1160456).

### SVG

- 站点图片 (偏爱图标，快捷方式图标) 现在支持 SVG([Firefox bug 366324](https://bugzil.la/366324))

### 音频/视频

- The `media.autoplay.enabled` preference now also apply to untrusted {{domxref("HTMLMediaElement.play()")}} invocations too, that is calls from non-users activated scripts ([Firefox bug 659285](https://bugzil.la/659285)).

## Networking

- The `X-Content-Duration` header is no longer supported ([Firefox bug 1160695](https://bugzil.la/1160695)).
- Draft versions of the HTTP/2 protocol are no more supported ([Firefox bug 1132357](https://bugzil.la/1132357)).

## Security

- The [CSP](/zh-CN/docs/Web/HTTP/CSP) 1.1 `manifest-src` [directive](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) 已经被支持 ([Firefox bug 1089255](https://bugzil.la/1089255)).
- Previous versions of Firefox incorrectly expected the [Content Security Policy](/zh-CN/docs/Web/HTTP/CSP) [referrer](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy#referrer)directive's value `origin-when-cross-origin` to be spelled `origin-when-crossorigin`. This has been corrected to include the missing dash character.

## Changes for add-on and Mozilla developers

### XUL

_没有变化。_

### JavaScript code modules

_没有变化。_

### XPCOM

_没有变化。_

### 其他

- A new, internal, and chrome-context-only API to render the root widget of a window into a {{HTMLElement("canvas")}} has been added: {{domxref("CanvasRenderingContext2D.drawWidgetAsOnScreen()")}}. This API uses the operating system to snapshot the widget on-screen. For more details see [Firefox bug 1167477](https://bugzil.la/1167477).

## See also

- [Site Compatibility for Firefox 41](/zh-CN/docs/Mozilla/Firefox/Releases/41/Site_Compatibility)

## 更早期的版本

{{Firefox_for_developers}}
