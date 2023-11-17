---
title: <address>
slug: Web/HTML/Element/address
---

{{HTMLSidebar}}

El **elemento HTML `<address>`** aporta información de contacto para su {{HTMLElement("article")}} más cercano o ancestro {{HTMLElement("body")}}; en el último caso lo aplica a todo el documento.

> **Nota:** Notas de uso:
>
> - Para representar una dirección arbitraria, una que no esté relacionada con la información de contacto, utiliza un elemento {{HTMLElement("p")}} en lugar del elemento `<address>`.
> - Este elemento no debe contener más información que la información de contacto, como una fecha de publicación (que pertenece al elemento {{HTMLElement("time")}}).
> - Normalmente un elemento `<address>` puede ser colocado dentro del elemento {{HTMLElement("footer")}} de la sección actual, si lo hay.

| [Categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | [Contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico), contenido palpable                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                        | [Contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico), pero no con elementos `<address>` anidados, no contenidos de cabecera ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), no contenido de sección ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}), y no elemento {{HTMLElement("header")}} o {{HTMLElement("footer")}}. |
| Etiqueta de omisión                                                        | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Elementos padre permitidos                                                 | Cualquier elemento que acepte [contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico).                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Interfaz DOM                                                               | {{domxref("HTMLElement")}} antes de Gecko 2.0 (Firefox 4), Gecko implementó este elemento usando la interfaz {{domxref("HTMLSpanElement")}}.                                                                                                                                                                                                                                                                                                                                                                                                    |

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

## Example

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  1981 Landings Drive<br />
  Building K<br />
  Mountain View, CA 94043-0801<br />
  USA
</address>
```

Above HTML will output:

![Image:HTML-address.png](html-address.png)

Aunque el elemento de dirección representa el texto con el mismo estilo predeterminado de los elementos {{HTMLElement("i")}} o {{HTMLElement("em")}}, es más apropiado utilizarlo cuando se trata información de contacto, ya que transmite la información semántica adicional.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras elementos de sección relacionados: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Secciones y línea generales de un documento HTML5](/es/docs/Sections_and_Outlines_of_an_HTML5_document).
