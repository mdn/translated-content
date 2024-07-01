---
title: datalist
slug: Web/HTML/Element/datalist
---

El **elemento HTML `<datalist>`** contiene un conjunto de elementos {{HTMLElement("option")}} que representan los valores disponibles para otros controles.

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, copia <https://github.com/mdn/interactive-examples> y envíenos una solicitud de extracción.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/HTML/Content_categories"
          >Contenido de las categorías</a
        >
      </th>
      <td>
        <a href="/es/docs/HTML/Content_categories#Flow_content"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        O bien
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >
        o, cero o más elementos {{HTMLElement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento no tiene otros atributos mas que los [atributos globales](/es/docs/HTML/Global_attributes), comunes a todos los elementos.

## Ejemplos

```html
<label
  >Choose a browser from this list: <input list="browsers" name="myBrowser"
/></label>
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### Resultado

{{EmbedLiveSample("Examples")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El elemento {{HTMLElement("input")}}, y más especificamente este atributo [`list`](/es/docs/Web/HTML/Element/input#list);
- El elemento {{HTMLElement("option")}}.

{{HTMLSidebar}}
