---
title: Zoom pleine page
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Le zoom pleine page (ou fullZoom) est une nouvelle fonctionnalité dans [Firefox 3](/fr/docs/Mozilla/Firefox/Releases/3).

## Exemple (XUL:browser)

L'exemple suivant montre l'utilisation pour la fenêtre de navigation ayant actuellement le focus. C'est l'utilisation typique pour une extension Firefox.

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

## Exemple (XUL:iframe)

Note&nbsp;: Ceci est probablement obsolète.

Vous pouvez également utiliser la fonctionnalité fullZoom pour un `<XUL:iframe>`. Cependant, comme un iframe n'a pas de propriété markupDocumentViewer, nous devons d'abord l'obtenir&nbsp;:

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

## Références

- Extension Page zoom par Ted Mielczarek [fullpagezoom.xpi <sup>(angl.)</sup>](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) pour les dernières nightlies de Firefox 3.
- Le [bogue sur bugzilla <sup>(angl.)</sup>](https://bugzil.la/4821) concernant fullZoom.
- La documentation de l'interface `nsIMarkupDocumentViewer`.
