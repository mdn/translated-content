---
title: 全页缩放
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

全页缩放（或简称 fullZoom）是 [Firefox 3](/zh-CN/docs/Mozilla/Firefox/Releases/3) 中的一项新功能。

### 示例（XUL:browser）

以下示例演示了当前聚焦的浏览器窗口的使用方法。这是 Firefox 扩展的典型用法。

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

### 示例（XUL:iframe）

注意：此示例可能已过时。

你也可以在 `<XUL:iframe>` 中使用 fullZoom 功能。但是，由于 iframe 没有 markupDocumentViewer 属性，我们需要先获取该属性：

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

### 参考资料

- 由 Ted Mielczarek 编写的页面缩放扩展 [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi)，适用于最新的 Firefox 3.0 nightly 版本。
- 关于 fullZoom 的 [bugzilla bug](https://bugzil.la/4821)。
- `nsIMarkupDocumentViewer` 接口文档。
