---
title: フルページズーム
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
original_slug: Full_page_zoom
---

{{FirefoxSidebar}}

フルページズーム (あるいは単にフルズーム) は [Firefox 3](/ja/docs/Mozilla/Firefox/Releases/3) の新機能です。

### 例 (XUL:browser)

以下の例は、現在フォーカスがあたっているブラウザーウィンドウでの利用をデモしています。これは Firefox 拡張機能での典型的な利用方法です。

```
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

### 例 (XUL:iframe)

注: これはおそらく古いものです。

フルズーム機能を [XUL:iframe](/ja/docs/XUL/iframe) でも同様に使用することができます。しかし、iframe には markupDocumentViewer プロパティがないため、最初に以下のようにする必要があります。

```
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(Components.interfaces.nsIMarkupDocumentViewer);
docViewer.fullZoom = zoom;
```

### 参考資料

- Ted Mielczarek による Page zoom extension [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) 最新の Firefox 3.0 ナイトリー用
- Daniel Glazman による [Glazoom extension](https://addons.mozilla.org/en-US/firefox/addon/6489) Firefox 3.0 用
- フルズームに関する [bugzilla のバグ](https://bugzilla.mozilla.org/show_bug.cgi?id=4821)
- `nsIMarkupDocumentViewer` Interface documentation.
