---
title: Firefox 3 技術文件
slug: Mozilla/Firefox/Releases/3
---

{{FirefoxSidebar}}

### Firefox 3 網站開發須知

- Web application 需要更新的地方
  - : 提供一些應用 Firefox 3 的新功能在 web applications 時可能需要注意的地方。
- [Online / Offline 事件](zh_tw/Firefox_3_Online_and_Offline_Events)
  - : Firefox 3 支援 [WHATWG](http://wiki.whatwg.org/wiki/FAQ#What_is_the_WHATWG.3F) 的 online/offline event，讓 applications/extensions 可以偵測目前是否有 active 的網際網路連線、目前是在線上還是斷線中。
- [Cross-site XMLHttpRequest](zh_tw/Firefox_3_supports_Cross-site_XMLHttpRequest)
  - : Firefox 3 支援了 [W3C Access Control](https://www.w3.org/TR/access-control/) working draft，這讓你可以對其他網站作 XMLHttpRequests 以取得其他網站的資料，並加以管理，這讓你可以在自己建立的網站中，混入來自多個其他網站的內容。
- Alternate style sheet
  - : Firefox 3 支援 CSS object model alternate style sheet API。(見 [Bug 200930](https://bugzilla.mozilla.org/show_bug.cgi?id=200930))
- [Web-based protocol handlers](zh_tw/Firefox_3_Web-based_protocol_handler)
  - : 在 Firefox 3，我們可以使用 navigator.registerProtocolHandler() 的方式把 web application 註冊為 protocal handler。
- 使用 Canvas 來「畫」字
  - : Firefox 3 支援用 mozilla 專用的非標準、實驗中的 API (mozXXX) 來處理 \<canvas>
- 支援在 Canvas 使用 transform
  - : Firefox 3 支援在 \<canvas> 上使用 transform() 與 setTransform()
- [使用 microformat](zh_tw/Firefox_3_Using_Microformat)
  - : Firefox 3 現在有 APIs 可以處理 microformat
- [Drag / drop](zh_tw/Firefox_3_Drag_and_Drop_Events) 事件
  - : Firefox 3 支援兩個新的 events，在「拖放」開始與結束的時候，可以傳給「拖放操作」的 source node。
- HTML 5 的 focus 相關屬性
  - : Firefox 3 支援 HTML 5 新增給 DOM 的兩個屬性 [activeElement](/zh-TW/docs/Web/API/Document/activeElement) 與 [hasFocus](/zh-TW/docs/Web/API/Document/hasFocus)。
- [Offline resources on Firefox](zh_tw/Offline_resources_on_Firefox)
  - : Firefox 3 現在支援讓 web application 可以要求將 resources 存入快取，以便我們離線時可以執行 web applications。
- [CSS 的改善](zh_tw/Firefox_3_CSS_Improvement)
  - : Firefox 3 改善了對於 CSS 的支援。
- [DOM 的改善](zh_tw/Firefox_3_Dom_Improvements)
  - : Firefox 3 的 DOM implimentation 有一些新功能，其中包括：支援了 IE 對 DOM 作的某些 extensions。
- Javascript 1.8 的支援
  - : Firefox 3 現在支援 Javascript 1.8。(見 [Bug 380236](https://bugzilla.mozilla.org/show_bug.cgi?id=380236))
- EXSLT 的支援
  - : Firefox 3 支援了 a substantial subset of the EXSLT extensions to XSLT。
- SVG 的改善
  - : Firefox 3 大大提高了對 SVG 的支援，其中包括：支援了超過兩打的新 filters、好幾個新元素、新屬性，以及其他的改善。
- [Animated PNG](zh_tw/Firefox_3_Animated_PNG_support) 的支援
  - : Firefox 3 現在支援動態 PNG 格式 (Animated PNG image format)
- [\<a ping>](zh_tw/Firefox_3_ping_attribute_support_for_anchor_element) 的支援
  - : Firefox 3 現在支援用 \<a ping> 去 ping URL，並且預設是 enable 的。

## 參見

{{Firefox_for_developers}}
