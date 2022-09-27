---
title: Mejoras DOM en Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
tags:
  - DOM
  - Firefox 3
  - Todas_las_Categorías
translation_of: Mozilla/Firefox/Releases/3/DOM_improvements
original_slug: Mejoras_DOM_en_Firefox_3
---

{{FirefoxSidebar}}

Firefox 3 ofrece una serie de mejoras sobre el [Modelo de Objetos del Documento (DOM)](/es/DOM), especialmente en lo que se refiere a la implementación de extensiones de DOM añadidas por otros navegadores. Este artículo proporciona una lista de estas mejoras, además de enlaces a documentación más detallada.

- Ahora se implementan las extensiones de DOM [`clientTop`](/es/DOM/element.clientTop) y [`clientLeft`](/es/DOM/element.clientLeft) de Internet Explorer.
- La propiedad [`window.fullScreen`](/es/DOM/window.fullScreen) ahora es siempre exacta, sin importar donde sea leída, incluso en el contenido. Previamente devolvía `false` erróneamente ({{ Bug(127013) }}).
- Ahora se implementan las extensiones de DOM [`getClientRects`](/es/DOM/element.getClientRects) y [`getBoundingClientRect`](/es/DOM/element.getBoundingClientRect) ({{ Bug(174397) }}).
- Se implementa la extensión de DOM [`elementFromPoint`](/es/DOM/document.elementFromPoint) de Internet Explorer ({{ Bug(199692) }}).
- Ahora se implementan las extensiones de DOM [`oncut`](/es/DOM/element.oncut), [`oncopy`](/es/DOM/element.oncopy), [`onpaste`](/es/DOM/element.onpaste), [`onbeforecut`](/es/DOM/element.onbeforecut), [`onbeforecopy`](/es/DOM/element.onbeforepaste) y [`onbeforepaste`](/es/DOM/element.onbeforepaste) de Internet Explorer ({{ Bug(280959) }}).
- Se han añadido capturadores para `Node.nodePrincipal`, `Node.baseURIObject`, y [`document.documentURIObject`](/es/DOM/document.documentURIObject) sólo para código con privilegios. El código Chrome no debe tocar (recuperar o fijar) estas propiedades en objetos de contenido sin envoltorios (por ejemplo, sobre un `wrappedJSObject` de un [`XPCNativeWrapper`](/es/XPCNativeWrapper)), ver {{ Bug(324464) }} para más detalles.

### Ver también

- [Firefox 3 para desarrolladores](/es/Firefox_3_para_desarrolladores)
- [Mejoras CSS en Firefox 3](/es/Mejoras_CSS_en_Firefox_3)
- [DOM](/es/DOM)
