---
title: Zoom a página completa
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
---

{{FirefoxSidebar}}

El zoom a página completa (o sólo zoom completo) es una nueva característica que probablemente estará con [Firefox 3](/es/Firefox_3_para_desarrolladores). Puedes verla en funcionamiento en las actuales "trunk builds" desde Gecko 1.9a7. Mientras no exista aún UI puedes usar JavaScript y la interface [XPCOM](/es/XPCOM) [nsIMarkupDocumentViewer](https://www.xulplanet.com/references/xpcomref/ifaces/nsIMarkupDocumentViewer.html).

### Ejemplo (xul:browser)

El siguiente ejemplo demuestra su uso para la ventana de navegación que posea actualmente el foco. Este es el típico uso para una extensión de Firefox.

```
var zoom = 1.5;
var docViewer = getBrowser().mCurrentBrowser.markupDocumentViewer;
docViewer.fullZoom = zoom;
```

### Ejemplo (xul:iframe)

Puedes usar la característica de zoom completo incluso para un xul:iframe. Sin embargo, dado que un iframe no posee ninguna propiedad markupDocumentViewer, debemos primero obtenerla:

```
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(Components.interfaces.nsIMarkupDocumentViewer);
docViewer.fullZoom = zoom;
```

### Referencías

- Extensión Page zoom de Ted Mielczarek [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) para los últimos releases nocturnos de Firefox 3.0
- El [bug en bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=4821) sobre zoom completo (fullZoom).
- La documentación de la interface [nsIMarkupDocumentViewer](https://www.xulplanet.com/references/xpcomref/ifaces/nsIMarkupDocumentViewer.html) (actualmente no menciona zoom completo).
