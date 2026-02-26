---
title: フルページズーム
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

フルページズーム (あるいは単にフルズーム) は [Firefox 3](/ja/docs/Mozilla/Firefox/Releases/3) の新機能です。

## 例 (XUL:browser)

以下の例は、現在フォーカスがあたっているブラウザーウィンドウでの利用をデモしています。これは Firefox 拡張機能での典型的な利用方法です。

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

## 例 (XUL:iframe)

注: これはおそらく古いものです。

フルズーム機能を `<XUL:iframe>` でも同様に使用することができます。しかし、iframe には markupDocumentViewer プロパティがないため、最初に以下のようにする必要があります。

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

## 参考資料

- Ted Mielczarek による Page zoom extension [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) 最新の Firefox 3.0 ナイトリー用
- フルズームに関する [bugzilla のバグ](https://bugzil.la/4821)
- `nsIMarkupDocumentViewer` インターフェイスのドキュメント。
