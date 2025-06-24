---
title: "<area>: El elemento área de un mapa de imagen"
slug: Web/HTML/Reference/Elements/area
original_slug: Web/HTML/Element/area
l10n:
  sourceCommit: 1d62348c03b9a3afa762124de570ae11411562cc
---

{{HTMLSidebar}}

El elemento **`<area>`** [HTML](/es/docs/Web/HTML) define un área dentro de un mapa de imagen que tiene áreas cliqueables predefinidas. Un mapa de imágen permite que áreas geométricas en una imagen sean asociadas con un {{Glossary("Hyperlink", "hipervínculo")}}.

Este elemento solo es usado dentro de un elemento {{HTMLElement("map")}}.

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Atributos

Los atributos de este elemento incluyen los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Una línea de texto alternativo que se muestra en los navegadores o en lectores de pantalla, si no se muestra la imagen.
    El texto debe ser redactado de modo que el usuario tenga el mismo tipo de elección a si la imagen fuese mostrada sin el texto alternativo.
    Este atributo solo es requerido si se usa el atributo [`href`](#href).
- `coords`
  - : El atributo `coords` detalla las coordenadas del atributo [`shape`](#shape) en tamaño, forma, y posicionamiento del `<area>`.
    Este atributo debe ser usado si el atributo `shape` está establecido en `default`.
    - `rect`: el valor es `x1,y1,x2,y2`.
      El valor especifica las coordenadas de la esquina superior izquierda y de la esquina inferior derecha del rectangulo.
      Por ejemplo, en `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` las coordinadas son `0,0` y `253,27`, indicando las esquinas superior izquierda e inferior derecha del rectángulo, respectivamente.
    - `circle`: el valor es `x,y,radius`. Este valor especifica las coordenadas del centro del círculo y el radio del mismo.
      Por ejemplo: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: el valor es `x1,y1,x2,y2,..,xn,yn`. Este valor especifica las coordenadas de los bordes de el polígono.
      Si los primeros y últimos pares de coordenadas no son los mismos, el navegador añadirá el último par de coordenadas para cerrar el polígono.
      Los valores son numeros de píxeles de CSS.

- `download`
  - : Este atributo indica que el autor pretende que el hipervínculo sea usado para descargar un recurso.
    Véase {{HTMLElement("a")}} para una descripción completa del atributo [`download`](/es/docs/Web/HTML/Reference/Elements/a#download).
- `href`
  - : Se utiliza para incluir un hipervínculo para el área.
    Su valor debe ser un URL valido.
    Este atributo puede ser omitido, si es así, el elemento `<area>` no representará un hipervínculo.
- `ping`
  - : Contiene una lista de URLs separada por espacios a las que, cuando se sigue el hipervínculo, el navegador enviará solicitudes {{HTTPMethod("POST")}} con el cuerpo `PING` (en segundo plano).
    Típicamente utlizado para el rastreo.
- `referrerpolicy`
  - : Indica que referente será utilizado cuando se recoja el recurso:
    - `no-referrer`: La cabecera {{HTTPHeader("Referer")}} no sera enviada.
    - `no-referrer-when-downgrade`: La cabecera {{HTTPHeader("Referer")}} no sera enviada a {{Glossary("origin")}} sin {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: El referente enviado será limitado al origen de la página de referencia: su [esquema](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, y {{Glossary("port", "puerto")}}.
    - `origin-when-cross-origin`: El referente enviado será limitado al esquema, _host_ y el puerto. Las navegaciones del mismo origen seran aun incluidas en la ruta.
    - `same-origin`: Un referente será enviado para el {{Glossary("Same-origin policy", "mismo origen")}}, Sin embargo, las solicitudes de origen cruzado no contendrán información de referencia.
    - `strict-origin`: Solo envía el origen del documento como referente cuando el nivel del protocolo de seguridad se mantiene igual (HTTPS→HTTPS), pero no lo envía si el destino es menos seguro, como un HTTP.
    - `strict-origin-when-cross-origin` (predeterminado): Envia un URL completo cuando se realiza una solicitud del mismo origen, Solo envía el origen cuando el protocolo de seguridad es el mismo (HTTPS→HTTP) y no envía ninguna cabecera a un destino menos seguro (HTTPS → HTTP).
    - `unsafe-url`: El referente incluira el origen y ruta (pero no [fragment](/es/docs/Web/API/HTMLAnchorElement/hash), [password](/es/docs/Web/API/HTMLAnchorElement/password), o [username](/es/docs/Web/API/HTMLAnchorElement/username)). **Este valor es inseguro**, ya que filtra los origenes y las rutas de acceso a los recursos protegidos TLS.

- `rel`
  - : Para anclas que contengan el atributo [`href`](#href), este atributo especifica la relación entre el destino del enlace con el del objeto del enlace.
    El valor es una lista de tipos de enlaces separados por espacios.
    Los valores y su semántica serán registrados por alguna autoridad que pueda tener significado para el autor del documento.
    La relación predeterminada, si no se ha dado ningun otra es nula. Usa solamente el atributo si se está usando un atributo [`href`](#href).
- `shape`
  - : Es la forma asociada al area del mapa. Las especificaciones para HTML definen los valores `rect`, define una región en forma rectangular; `circle`, define la región como una forma circular; `poly`, la define como un polígono; y `default`, la cual indica toda la región sin ninguna forma específica.
- `target`
  - : Palabra clave o nombre definido por el autor del {{Glossary("browsing context","contexto de exploración")}} para mostrar el recurso vinculado. Las siguientes palabras clave tienen significados especiales:
    - `_self` (predeterminado): Muestra el recurso en el contexto de navegación actual.
    - `_blank`: Muestra el recurso en un contexto de navegación nuevo y sin nombrar.
    - `_parent`: Muestra el recurso en el contexto de navegación padre del actual.
      Si no hay un elemento padre, se comporta de igual manera que `_self`.
    - `_top`: Mestra los recursos en el contexto de navegación mas alto (el contexto de navegacion que es un ancestro del actual y no tiene padre).
      Si no hay elemento padre, se comporta igual que `_self`.

    Usa este atributo solo si esta presente el atributo [`href`](#href).

    > [!NOTE]
    > Si se ajusta `target="_blank"` en el elemento `<area>` implicitamente provoca el mismo comportamiento `rel` que si se ocupara [`rel="noopener"`](/es/docs/Web/HTML/Attributes/rel/noopener) que no establece `window.opener`. Véase también [Compatibilidad con navegadores](#browser_compatibility).

## Ejemplos

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Clic para ir a la izquierda" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Clic para ir a la derecha" />
</map>
<img
  usemap="#primary"
  src="https://via.placeholder.com/350x150"
  alt="350 x 150 pic" />
```

### Resultado

{{ EmbedLiveSample('Ejemplos', 360, 160) }}

## Resumen Técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories">Categorias de Contenido</a>
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#flow_content">Contenido de flujo</a>,
        <a href="/es/docs/Web/HTML/Content_categories#phrasing_content">contenido de redacción</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido Permitido</th>
      <td>Ninguno, este es un {{Glossary("void element","elemento vacío")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de Etiqueta</th>
      <td>Debe tener una etiqueta de inicio y no una de final.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte <a href="/es/docs/Web/HTML/Content_categories#phrasing_content">contenido redactable</a>. El elemento <code>&#x3C;area></code> debe tener como ancestro un elemento {{HTMLElement("map")}}, pero no es necesario que este sea el padre directo.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> cuando el atributo <a href="/es/docs/Web/HTML/Element/area#href"><code>href</code></a> esta presente, si no lo esta es
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles de ARIA permitidos</th>
      <td>No hay <code>role</code> permitidos</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
