---
title: Mejoras DOM en Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
---

Firefox 3 ofrece una serie de mejoras sobre el [Modelo de Objetos del Documento (DOM)](/es/docs/Web/API/Document_Object_Model), especialmente en lo que se refiere a la implementación de extensiones de DOM añadidas por otros navegadores. Este artículo proporciona una lista de estas mejoras, además de enlaces a documentación más detallada.

- Ahora se implementan las extensiones de DOM [`clientTop`](/es/docs/Web/API/Element/clientTop) y [`clientLeft`](/es/docs/Web/API/Element/clientLeft) de Internet Explorer.
- La propiedad [`window.fullScreen`](/es/docs/Web/API/Window/fullScreen) ahora es siempre exacta, sin importar donde sea leída, incluso en el contenido. Previamente devolvía `false` erróneamente ([Error 127013 en Firefox](https://bugzil.la/127013)).
- Ahora se implementan las extensiones de DOM [`getClientRects`](/es/docs/Web/API/Element/getClientRects) y [`getBoundingClientRect`](/es/docs/Web/API/Element/getBoundingClientRect) ([Error 174397 en Firefox](https://bugzil.la/174397)).
- Se implementa la extensión de DOM [`elementFromPoint`](/es/docs/Web/API/Document/elementFromPoint) de Internet Explorer ([Error 199692 en Firefox](https://bugzil.la/199692)).
- Ahora se implementan las extensiones de DOM [`oncut`](/es/docs/Web/API/HTMLElement/cut_event), [`oncopy`](/es/docs/Web/API/HTMLElement/copy_event), [`onpaste`](/es/docs/Web/API/HTMLElement/paste_event), [`onbeforecut`](/es/docs/DOM/element.onbeforecut), [`onbeforecopy`](/es/docs/DOM/element.onbeforepaste) y [`onbeforepaste`](/es/docs/DOM/element.onbeforepaste) de Internet Explorer ([Error 280959 en Firefox](https://bugzil.la/280959)).
- Se han añadido capturadores para `Node.nodePrincipal`, `Node.baseURIObject`, y [`document.documentURIObject`](/es/docs/orphaned/Web/API/Document/documentURIObject) sólo para código con privilegios. El código Chrome no debe tocar (recuperar o fijar) estas propiedades en objetos de contenido sin envoltorios (por ejemplo, sobre un `wrappedJSObject` de un [`XPCNativeWrapper`](/es/XPCNativeWrapper)), ver [Error 324464 en Firefox](https://bugzil.la/324464) para más detalles.

### Ver también

- [Firefox 3 para desarrolladores](/es/Firefox_3_para_desarrolladores)
- [Mejoras CSS en Firefox 3](/es/Mejoras_CSS_en_Firefox_3)
- [DOM](/es/docs/Web/API/Document_Object_Model)
