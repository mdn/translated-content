---
title: <base>
slug: Web/HTML/Element/base
---

{{HTMLSidebar}}

## Resumen

El **elemento HTML `<base>`** especifica la dirección URL base que se utilizará para todas las direcciones URL relativas contenidas dentro de un documento. Sólo puede haber un elemento \<base> en un documento.

La dirección URL base de un documento puede ser consultado a partir de una secuencia de comandos con {{domxref('document.baseURI')}}.

> **Nota:** Si se especifican varios elementos \<base>, se utilizá sólo la primera sección **href** y el primer valor **target**; los demás son ignorados.

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a
          href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de Contenido</a
        >
      </th>
      <td>
        <span class="short_text" id="result_box" lang="es"
          >Contenido de Metadatos</span
        >
      </td>
    </tr>
    <tr>
      <th>Contenido permitido</th>
      <td>
        <span class="short_text" id="result_box" lang="es"
          >Ninguno, es un</span
        >
        {{Glossary("empty element")}}.
      </td>
    </tr>
    <tr>
      <th>Omisión de etiqueta</th>
      <td>
        <span class="short_text" id="result_box" lang="es"
          >No debe haber ninguna etiqueta de cierre</span
          >.</span
        >
      </td>
    </tr>
    <tr>
      <th>Elementos padres permitidos</th>
      <td>
        Cualquier
        {{HTMLElement("head")}}
        <span id="result_box" lang="es"
          >que no contenga ningún
          elemento </span
        >{{HTMLElement("base")}}
      </td>
    </tr>
    <tr>
      <th>Interfaz DOM</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `href`
  - : La dirección URL base que se usa en todo el documento para las direcciones URL relativas. Si no se especifica este atributo, este elemento debe venir antes de cualesquiera otros elementos con atributos cuyos valores son direcciones URL. Se permiten las direcciones URL absolutas y relativas.
- `target`

  - : Un nombre o una palabra clave que indica la ubicación predeterminada para navegar por el resultado de hipervínculos o formas, para los elementos que no tienen una referencia explícita del objetivo . Es un nombre o una palabra clave para un contexto de navegación (por ejemplo: pestaña, ventana o marco en línea). Las siguientes palabras clave tienen un significado especial: tab, window, o inline frame).Las siguientes palabras clave tienen un significado especial:

    - `_self`: Carga el resultado en el mismo contexto de navegación que el actual. Este valor es el valor por defecto si no se especifica el atributo.
    - `_blank`: Carga el resultado en un nuevo contexto de navegación sin nombre .
    - `_parent`: Cargar el resultado en el contexto de navegación padre del actual. Si no hay padre, esta opción se comporta de la misma manera que \_self.
    - `_top`: Carga el resultado en el contexto de nivel superior de navegación (es decir, el contexto de navegación que es un ancestro de la actual, y no tiene padre). Si no hay padre, esta opción se comporta de la misma manera que \_self.

## Ejemplos

```html
<base href="http://www.example.com/page.html" />
<base target="_blank" href="http://www.example.com/page.html" />
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
