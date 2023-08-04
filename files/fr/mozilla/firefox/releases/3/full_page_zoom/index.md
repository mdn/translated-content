---
title: Zoom pleine page
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
---

{{FirefoxSidebar}}

Le zoom pleine page (ou fullZoom) est une nouvelle fonctionnalité qui sera probablement disponible dans [Firefox 3](/fr/Firefox_3_pour_les_développeurs). Elle peut être utilisée dans les compilations courantes du tronc depuis la version 1.9a7. Bien qu'il n'y ait actuellement aucune interface utilisateur visible, il est possible d'utiliser JavaScript et l'interface [XPCOM](/fr/XPCOM) [nsIMarkupDocumentViewer](http://www.xulplanet.com/references/xpcomref/ifaces/nsIMarkupDocumentViewer.html).

### Exemple (xul:browser)

L'exemple qui suit montre l'utilisation du zoom pour la fenêtre de navigation ayant actuellement le focus. C'est l'utilisation typique pour une extension Firefox.

```js
var zoom = 1.5;
var docViewer = getBrowser().mCurrentBrowser.markupDocumentViewer;
docViewer.fullZoom = zoom;
```

### Exemple (xul:iframe)

Il est également possible d'utiliser la fonction fullZoom pour un xul:iframe. Cependant, comme un iframe n'a pas de propriété `markupDocumentViewer`, il faut d'abord obtenir cette valeur&nbsp;:

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

### Références

- Extension Page zoom par Ted Mielczarek [fullpagezoom.xpi](http://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) pour les dernières nightlies de Firefox 3.
- Le [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=4821) concernant fullZoom sur bugzilla.
- Documentation de l'interface [nsIMarkupDocumentViewer](http://www.xulplanet.com/references/xpcomref/ifaces/nsIMarkupDocumentViewer.html) (ne mentionne pas fullZoom pour l'instant).
