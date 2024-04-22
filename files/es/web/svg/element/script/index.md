---
title: <script>
slug: Web/SVG/Element/script
---

## Resumen

El _elemento HTML Script_ (**`<script>`**) se utiliza para insertar o hacer referencia a un script ejecutable dentro de un documento HTML o XHTML.

Los scripts sin atributo `async` o `defer`, así como las secuencias de comandos en línea, son interpretados y ejecutados inmediatamente, antes de que el navegador continúe procesando la página.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/Web/HTML/Content_categories"
          title="HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a
          href="/es/docs/Web/HTML/Content_categories#Metadata_content"
          title="HTML/Content_categories#Metadata_content"
          >Metadata content</a
        >,
        <a
          href="/es/docs/Web/HTML/Content_categories#Flow_content"
          title="HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a
          href="/es/docs/Web/HTML/Content_categories#Phrasing_content"
          title="HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Script dinámico tal como <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omision de etiquetas</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a
          href="/es/docs/Web/HTML/Content_categories#Metadata_content"
          title="HTML/Content_categories#Metadata_content"
          >metadata content</a
        >, o cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento contiene los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `async`

  - : Establece este atributo booleano para indicar al navegador, si es posible, ejecutar el código asincrónicamente. Esto no afecta a los scripts escritos dentro de la etiqueta (es decir a aquellos que no tienen el atributo **src**).

    Ver [Browser compatibility](#browser_compatibility) para notas acerca de compatibilidad. Ver tambien [Scripts asincrónicos para asm.js](/es/docs/Games/Techniques/Async_scripts).

- `integrity`
  - : Contiene información de metadatos que es usada por el user agent del navegador para verificar el recurso captado fue entregado libre de manipulación inesperada. Ver [Subresource Integrity](/es/docs/Web/Security/Subresource_Integrity).
- `src`
  - : Este atributo especifica la URI del script externo; este puede ser usado como alternativa a scripts embebidos directamente en el documento. Si el script tiene el atributo src, no debería tener código dentro de la etiqueta.
- `type`

  - : Este atributo identifica el lenguaje de scripting en que está escrito el código embebido dentro de la etiqueta script, o referenciada utilizando el atributo src. Los valores posibles están especificados como un MIME type (tipo MIME).
    Algunos ejemplos de tipos MIME que pueden ser utilizados son: `text/javascript`, `text/ecmascript`, `application/javascript`, y `application/ecmascript.`Si el atributo se encuentra ausente, el valor por defecto será un script JavaScript.

    Si el tipo MIME especificado no es un tipo JavaScript, el contenido embebido dentro de la etiqueta script es tratado como un bloque de datos que no será procesado por el navegador.

    Si el tipo especificado es module, el código es tratado como un módulo JavaScript {{experimental_inline}}. Ver [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/).

    Nota: en Firefox puedes usar características avanzadas tales como let statements y otras características de la última versión de JS, usando type=application/javascript;version=1.8 {{Non-standard_inline}}. Ten cuidado!, esto no es una característica estándar, es decir, probablemente genere conflictos con otros navegadores, en particular aquellos basados en Chromium.

    Para incluir lenguajes de programación exóticos, lee acerca de [Rosetta](/es/Ap-ons/Code_snippets/Rosetta).

- `text`
  - : Este atributo actúa como el atributo `textContent`, establece el texto contenido del elemento. Pero a diferencia de `textContent`, este atributo se evalúa como ejecutable luego de ser insertado como nodo en el DOM.
- `language` {{Deprecated_inline}}
  - : Este atributo actúa como el atributo `type`, identifica el tipo de lenguaje que se utiliza. A diferencia del atributo `type`, los posibles valores de este atributo nunca fueron estandarizados. El atributo `type` debe ser utilizado en lugar de `language`.
- `defer`
  - : Este atributo establece si el script debe ser ejecutado luego de que el documento entero sea analizado. Dado que esta función aún no fue implementada por todos los navegadores relevantes, los autores no deberían asumir que el script realmente será ejecutado luego de la carga y analisis del documento. Desde Gecko 1.9.2 el atributo defer es ignorado en los scripts que no tienen el atributo src. Sin embargo, en Gecko 1.9.1 incluso se difieren los scripts escritos dentro de la etiqueta.
- `crossorigin` {{Non-standard_inline}}
  - : Elementos normales script pasan información mínima al {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} para scripts que no pasan las revisiones del estándar [CORS](/es/docs/Web/HTTP/Access_control_CORS). Para permitir registrar errores en los sitios que usan dominios separados para recursos estáticos, usar este atributo.

## Ejemplos

```html
<!-- HTML4 y (x)HTML -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("document.currentScript")}}
- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)

{{HTMLSidebar}}
