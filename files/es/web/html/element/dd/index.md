---
title: dd
slug: Web/HTML/Element/dd
tags:
  - Contenido agrupado HTML
  - Definición
  - Detalles
  - Detalles de descripción
  - Elemento
  - HTML
  - Lista de descripciones
  - Referencia
  - Web
  - dd
translation_of: Web/HTML/Element/dd
original_slug: Web/HTML/Elemento/dd
---
{{HTMLRef}}

El **elemento HTML `<dd>`** provee detalles acerca de o la definición de un término precedente ({{HTMLElement("dt")}}) en una lista de descripciones ({{HTMLElement("dl")}}).

{{EmbedInteractiveExample("pages/tabbed/dd.html", "tabbed-standard")}}

La fuente para este ejemplo interactivo esta almacenado en un repositorio GitHub. Si desea contribuir al poryecto de ejemplos interactivos, por favor clone [https://github.com/mdn/interactive-examples ](https://github.com/mdn/interactive-examples)y envíe una petición de extracción (pull request).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de contenido</a
        >
      </th>
      <td>Ninguna</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido de flujo</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de Tag</th>
      <td>
        El tag inicial es requerido. El tag final puede ser omitido si el
        elemento {{HTMLElement("dd")}} se encuentra inmediatamente
        seguido por otro elemento <code>&#x3C;dd></code>, o si no hay más
        contenido en el elemento padre.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        {{HTMLElement("dl")}} o (en
        <a href="/es/docs/Glossary/WHATWG">WHATWG</a> HTML) un
        {{HTMLElement("div")}} que se encuentra dentro de un
        {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Hermano previo</th>
      <td>
        {{HTMLElement("dt")}} u otro elemento
        {{HTMLElement("dd")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Los atributos de este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : Si el valor de este atributo es definido como `yes`, el texto de la definición no se encapsulará. El valor por defecto es `no`.

## Ejemplo

Para un ejemplo, ver [ejemplos \<dl>](/es/docs/Web/HTML/Elemento/dl#Examples).

## Especificaciones

| Especificación                                                                                           | Estatus                          | Comentarios |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-dd-element', '&lt;dd&gt;')}}     | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dd-element', '&lt;dd&gt;')}} | {{Spec2('HTML5 W3C')}}     |             |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dd&gt;')}}                 | {{Spec2('HTML4.01')}}     |             |

## Compatibilidad del navegador

{{Compat("html.elements.dd")}}

## Ver también

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
