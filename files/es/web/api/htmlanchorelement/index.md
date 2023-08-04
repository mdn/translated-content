---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
---

{{APIRef ("HTML DOM")}}
La interfaz **HTMLAnchorElement** representa elementos de hipervínculo y proporciona propiedades y métodos especiales (más allá de los de la interfaz de objeto {{domxref ("HTMLElement")}} regular de la que heredan) para manipular el diseño y la presentación de dichos elementos.

## Propiedades

{{InheritanceDiagram(600, 120)}}

Hereda propiedades de su elemento primario, {{domxref ("HTMLElement")}}, y las implementa desde {{domxref ("HTMLHyperlinkElementUtils")}}.

- {{domxref ("HTMLAnchorElement.accessKey")}}
  - : Es un {{domxref ("DOMString")}} que representa un solo carácter que cambia el foco de entrada al hipervínculo.
- {{domxref ("HTMLAnchorElement.charset")}} {{deprecated_inline}}
  - : Es un {{domxref ("DOMString")}} que representa la codificación de caracteres del recurso vinculado.
- {{domxref ("HTMLAnchorElement.coords")}} {{deprecated_inline}}
  - : Es un {{domxref ("DOMString")}} que representa una lista de coordenadas separadas por comas.
- {{domxref ("HTMLAnchorElement.download")}} {{experimental_inline}}
  - : Es un {{domxref ("DOMString")}} que indica que el recurso vinculado está destinado a descargarse en lugar de mostrarse en el navegador. El valor representa el nombre propuesto del archivo. Si el nombre no es un nombre de archivo válido del sistema operativo subyacente, el navegador lo adaptará.
- {{domxref ("HTMLHyperlinkElementUtils.hash")}}
  - : Es un {{domxref ("USVString")}} que representa el identificador de fragmento, incluida la marca hash inicial ('#'), si la hay, en la URL a la que se hace referencia.
- {{domxref ("HTMLHyperlinkElementUtils.host")}}
  - : Es un {{domxref ("USVString")}} que representa el nombre de host y el puerto (si no es el puerto predeterminado) en la URL a la que se hace referencia.
- {{domxref ("HTMLHyperlinkElementUtils.hostname")}}
  - : Es un {{domxref ("USVString")}} que representa el nombre de host en la URL referenciada.
- {{domxref ("HTMLHyperlinkElementUtils.href")}}
  - : Es un {{domxref ("USVString")}} que refleja el atributo HTML [`href`](/es/docs/Web/HTML/Element/a#href), que contiene una URL válida de un recurso vinculado.
- {{domxref ("HTMLAnchorElement.hreflang")}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo HTML [`hreflang`](/es/docs/Web/HTML/Element/a#hreflang), que indica el idioma del recurso vinculado.
- {{domxref ("HTMLAnchorElement.media")}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo HTML [`media`](/es/docs/Web/HTML/Element/a#media), que indica los medios previstos para el recurso vinculado.
- {{domxref ("HTMLAnchorElement.name")}} {{deprecated_inline}}
  - : Es un {{domxref ("DOMString")}} que representa el nombre del ancla.
- {{domxref ("HTMLHyperlinkElementUtils.password")}}
  - : Es un {{domxref ("USVString")}} que contiene la contraseña especificada antes del nombre de dominio.
- {{domxref ("HTMLHyperlinkElementUtils.origin")}} {{readonlyInline}}
  - : Devuelve un {{domxref ("USVString")}} que contiene el origen de la URL, que es su esquema, su dominio y su puerto.
- {{domxref ("HTMLHyperlinkElementUtils.pathname")}}
  - : Es un {{domxref ("USVString")}} que representa el componente del nombre de ruta, si lo hay, de la URL referenciada.
- {{domxref ("HTMLHyperlinkElementUtils.port")}}
  - : Es un {{domxref ("USVString")}} que representa el componente de puerto, si lo hay, de la URL a la que se hace referencia.
- {{domxref ("HTMLHyperlinkElementUtils.protocol")}}
  - : Es un {{domxref ("USVString")}} que representa el componente de protocolo, incluidos los puntos finales (':'), de la URL a la que se hace referencia.
- {{domxref ("HTMLAnchorElement.referrerPolicy")}} {{experimental_inline}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo [`referrerpolicy`](/es/docs/Web/HTML/Element/a#referrerpolicy) HTML que indica qué referencia usar.
- {{domxref ("HTMLAnchorElement.rel")}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo HTML [`rel`](/es/docs/Web/HTML/Element/a#rel), que especifica la relación del objeto de destino con el objeto vinculado.
- {{domxref ("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : Devuelve un {{domxref ("DOMTokenList")}} que refleja el atributo HTML [`rel`](/es/docs/Web/HTML/Element/a#rel), como una lista de tokens.
- {{domxref ("HTMLAnchorElement.rev")}} {{deprecated_inline}}
  - : Es un {{domxref ("DOMString")}} que representa el atributo HTML [`rev`](/es/docs/Web/HTML/Element/a#rev), que especifica la relación del objeto de enlace con el objeto de destino.
- {{domxref ("HTMLHyperlinkElementUtils.search")}}
  - : Es un {{domxref ("USVString")}} que representa el elemento de búsqueda, incluido el signo de interrogación principal ('?'), Si lo hay, de la URL a la que se hace referencia.
- {{domxref ("HTMLAnchorElement.shape")}} {{deprecated_inline}}
  - : Es un {{domxref ("DOMString")}} que representa la forma del área activa.
- {{domxref ("HTMLAnchorElement.tabindex")}}
  - : Es un largo que contiene la posición del elemento en el orden de navegación de tabulación para el documento actual.
- {{domxref ("HTMLAnchorElement.target")}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo HTML [`target`](/es/docs/Web/HTML/Element/a#target), que indica dónde mostrar el recurso vinculado.
- {{domxref ("HTMLAnchorElement.text")}}
  - : Es un {{domxref ("DOMString")}} un sinónimo de la propiedad {{domxref ("Node.textContent")}}.
- {{domxref ("HTMLAnchorElement.type")}}
  - : Es un {{domxref ("DOMString")}} que refleja el atributo HTML [`type`](/es/docs/Web/HTML/Element/a#type), que indica el tipo MIME del recurso vinculado.
- {{domxref ("HTMLHyperlinkElementUtils.nombre de usuario")}}
  - : Es un {{domxref ("USVString")}} que contiene el nombre de usuario especificado antes del nombre de dominio.

## Metodos

Hereda los métodos de su padre, {{domxref ("HTMLElement")}}, y los implementa desde {{domxref ("HTMLHyperlinkElementUtils")}}.

- {{domxref ("HTMLElement.blur ()")}}
  - : Elimina el foco del teclado del elemento actual.
- {{domxref ("HTMLElement.focus ()")}}
  - : Da el foco del teclado al elemento actual.
- {{domxref ("HTMLHyperlinkElementUtils.toString ()")}}
  - : Devuelve un {{domxref ("USVString")}} que contiene la URL completa. Es un sinónimo de {{domxref ("URLUtils.href")}}, aunque no se puede usar para modificar el valor.

Los métodos blur () y focus () se heredan de {{domxref ("HTMLElement")}} de HTML5 on, pero se definieron en HTMLAnchorElement en DOM Level 2 HTML y especificaciones anteriores.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- El elemento HTML que implementa esta interfaz: {{HTMLElement ("a")}}
