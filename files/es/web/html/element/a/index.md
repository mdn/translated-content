---
title: "<a>: El elemento ancla"
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

El _Elemento HTML `Anchor`_ **`<a>`** crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página, direcciones de correo, o cualquier otra URL.

{{EmbedInteractiveExample("pages/tabbed/a.html")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categorías de contenido</th>
      <td>
        Contenido de flujo, contenido de párrafo, contenido interactivo,
        contenido palpable
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/HTML/Content_categories#Transparent_content_model"
          title="HTML/Content_categories#Transparent_content_model"
          >Transparente, que contiene contenido de flujo (excluyendo contenido
          interactivo) o contenido de párrafo.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos principales permitidos</th>
      <td>
        Cualquier elemento que acepte contenido de párrafo o cualquier elemento
        que acepte contenido de flujo, sin embargo simpre excluyendo los
        elementos &#x3C;a> (de acuerdo con el principio lógico de simetría, si
        una etiqueta &#x3C;a> como padre, no puede contener contenido
        interactivo, entonces el mismo contenido de &#x3C;a> no puede tener una
        etiqueta &#x3C;a> como su padre).
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/HTML/Global_attributes).

- `download`

  - : Este atributo, indica descargar a los navegadores una URL en lugar de navegar hacia ella, por lo que el usuario será dirigido para salvarla como un archivo local. Si el atributo tiene un valor, éste se utilizará como nombre de archivo por defecto en el mensaje Guardar que se abre cuando el usuario hace clic en el enlace (sin embargo, el usuario puede cambiar el nombre antes de guardar el archivo). No hay restricciones sobre los valores permitidos, aunque: / y: \ se convertirán en guiones bajos (_underscores_), lo que evitará sugerencias de ruta específicas. Se debe tener en cuenta que la mayoría de los sistemas de archivos tienen limitaciones con respecto a los símbolos de puntuación admitidos en los nombres de archivo, por lo que los navegadores ajustarán los nombres de los archivos en consecuencia.

    > **Nota:**
    >
    > - Este atributo sólo funciona para las [políticas de mismo origen (same-origin URLs)](/es/docs/Web/Security/Same-origin_policy).
    > - Este atributo puede ser utilizado con [`blob:` URLs](/es/docs/Web/API/URL.createObjectURL) y [`data:` URLs](/es/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) para descargar contenido generado por JavaScript, tales como fotografías creadas por una aplicación web de edición de imágenes.
    > - Si el encabezado (_header_) HTTP [`Content-Disposition:`](/es/docs/Web/HTTP/Headers/Content-Disposition) proporciona un nombre de archivo diferente al de este atributo, el encabezado HTTP tiene prioridad sobre este atributo.
    > - Si `Content-Disposition:` está ajustado a `inline`, Firefox prioriza `Content-Disposition`, como en el caso del nombre de archivo, mientras que Chrome prioriza el atributo `download`.

- `href`

  - : Contiene una URL o un fragmento de URL al cual apunta el enlace.
    Un fragmento de URL es un nombre ("name") precedido por el símbolo de número (`#`), el cual especifíca una ubicación interna objetivo (un [ID](/es/docs/HTML/Global_attributes#attr-id) de un elemento HTML) dentro del actual documento. Las URLs no están restringidas sólo a documentos de internet basados en HTTP, sin embargo pueden utilizar cualquier protocolo soportado por el navegador. Por ejemplo, [`file:`](https://en.wikipedia.org/wiki/File_URI_scheme), `ftp:`, and `mailto:` funcionan en la mayoría de los navegadores.
    Este atributo puede ser omitido (a partir de HTML5) para crear un enlace de marcador de posición. Un enlace de marcador de posición se parece a un enlace tradicional, pero que no dirige a algún lugar.

    > **Nota:** Puede ser utilizado `href="#top"` o un fragmento vacío `href="#"` para enlazar a la parte superior de la página actual. [Este comportamiento está especficado en HTML5](https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid).

- `hreflang`
  - : Este atributo indica el lenguaje humano del recurso al que se enlaza. Este es únicamente informativo, sin ninguna funcionalidad incorporada. Los valores permitidos están determinados por [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt).
- `referrerpolicy` {{experimental_inline}}

  - : Indica que [referencia (_referer_)](/es/docs/Web/HTTP/Headers/Referer) enviar cuado la URL es recuperada:

    - `'no-referrer'` significa `Referer:` el encabezado no será enviado.
    - `'no-referrer-when-downgrade'` significa sin `Referer:` el encabezado será enviado cuando se navega a un origen (`origin`) sin HTTPS. Este es un comportamiento por defecto.
    - `'origin'` significa que el "referrer" estará en el [origen](/es/docs/Glossary/Origin) (`origin`) de la página, no incluye la información posterior al dominio.
    - `'origin-when-cross-origin'` significa que la navegación a otros orígenes (_origins_) será limitada al esquema (_scheme_), el host y el puerto, mientras que la navegación en el mismo origen (origin) incuirá la trayectoria de referencia (_referrer's path_).
    - `'unsafe-url'` significa que la referencia (_referrer_) incuirá el origen(`origin`) y la trayectoria (_path_), pero no el fragmento, contraseña o nombre de usuario. Esto es inseguro, ya que puede filtrar datos desde una URL segura hacia URLs inseguras.

- `rel`
  - : Especifica la relación del objeto de destino con el objeto de enlace. El valor es una lista separada por espacios de tipos de enlace[tipos de enlace (link types)](/es/docs/Web/HTML/Link_types).
- `target`

  - : Especifica en donde desplegar la URL enlazada. Es un nombre (_name of_), o palabra clave (_keyword for_), un contexto de navegación _(browsing context)_: una pestaña, ventana, o `<iframe>`. Las siguientes palabras clave (_keywords_) tienen significado especial:

    - `_self`: Carga la URL en el mismo contexto de navegación que el actual. Este es el comportamiento por defecto.
    - `_blank`: Carga la URL en un nuevo contexto de navegación. Usualmente es una pestaña, sin embargo, los usuarios pueden configurar los navegadores para utilizar una ventana nueva en lugar de la pestaña.
    - `_parent`: Carga la URL en el contexto de navegación padre (_parent_) del actual. Si no existe el padre, este se comporta del mismo modo que `_self`.
    - `_top`: Carga la URL en le contexto más alto de navegación (el cual es un ancestro del actual, y no tiene padre (_parent_)). Si no hay padre (_parent_), este se comporta del mismo modo que `_self`.

    > **Nota:** Cuando se utiliza `target`, considera agregar `rel="noopener noreferrer"` para evitar el uso de la API `window.opener`.

- `type`
  - : Especifica el tipo de medio (_media type_) en la forma de {{Glossary("MIME type")}} para la URL enlazada. Esto es únicamente informativo, sin ninguna funcionalidad incorporada.

### Atributos obsoletos

- `charset` {{Deprecated_Inline}}

  - : Este atributo define la [codificación de caracteres (character encoding)](/es/docs/Glossary/character_encoding) de la URL enlazada. El valor debe de ser una lista delimitada por espacio y/o coma de caracteres definidos en [RFC 2045](https://tools.ietf.org/html/rfc2045). El valor por defecto es `ISO-8859-1`.

    > **Nota:** Este atributo es obsoleto en HTML5 y **no debe ser utilizado por autores**. Para lograr su efecto, se debe utilzar el encabezado HTTP [`Content-Type:`](/es/docs/Web/HTTP/Headers/Content-Type) en la URL enlazada.

- `coords` {{Deprecated_Inline}}
  - : Para utilizar con el siguiente atributo `shape`, este atributo utiliza una lista de números separada por comas para definir las coordenadas del enlace en la página.
- `name` {{Deprecated_Inline}}

  - : Este atributo era requerido para anclas (_anchors_) que definían una posible ubicación dentro de la página. En HTML 4.01, `id` y `name` podían ser utilizados simultáneamente en un elemento `<a>` simpre y cuando tuvieran valores idénticos.

    > **Nota:** Este atributo es obsoleto en HTML5, se utiliza el [atributo global `id`](/es/docs/HTML/Global_attributes#attr-id) en su lugar.

- `rev` {{Deprecated_Inline}}
  - : Este atributo especifica un enlace inverso, la relación inversa del atributo **rel**. Fue desechado por ser muy confuso.
- `shape` {{Deprecated_Inline}}

  - : Este atributo era utilizado para definir una región de enlaces para crear un mapa de imagen. El valore es `circle`, `default`, `polygon`, y `rect`. El formato del atributo `coords` depende del valor de la forma geométrica. Para `circle`, el valor es `x,y,r` donde `x` y `y` son las coordenadas en pixel para el centro del círculo y `r` es el valor del radio en pixeles. Para `rect`, el atributo `coords` debe ser `x,y,w,h`. Los valores `x y y` definen la esquina superior izquierda del rectángulo, mientras que `w` y `h` definen el ancho y el alto respectivamente. Un valor del `polygon` para `shape` requiere los valores `x1,y1,x2,y2,...` para `coords`. Cada uno de los pares `x,y` definen un punto en el polígono, con puntos sucesivos que son unidos por líneas rectas y el útlimo punto se une al primer punto. El valor `default` para `shape` Requiere que el área encerrada, típicamente una imágen, sea utilizada.

    > **Nota:** Utilice el [atributo `usemap`](/es/docs/Web/HTML/Element/img#attr-usemap) para el elemento {{HTMLElement("img")}} y el elemento asociado {{HTMLElement("map")}} para definir puntos de acceso (_hotspots_) en lugar del atributo `shape`.

## Ejemplos

### Enlazando a una ubicación externa

```html
<!-- anclaje a un archivo externo -->
<a href="https://www.mozilla.com/">Enlace externo</a>
```

#### Resultado

[Enlace externo](https://www.mozilla.com/)

### Enlazando a otra sección de la misma página

```html
<!-- enlace a un elemento en esta página con id="attr-href" -->
<a href="#attr-href">Descripción de enlaces de la misma página</a>
```

#### Resultado

[Descripción de enlaces de la misma página](#attr-href)

### Creando una imagen clicable

Este ejemplo utiliza una imagen que enlaza a la página de inicio de MDN. La página de inicio se abrirá en un contexto de navegación nuevo, esto es, en una nueva página o nueva ventana.

```html
<a href="https://developer.mozilla.org/en-US/" target="_blank">
  <img src="mdn_logo.png" alt="MDN logo" />
</a>
```

#### Resulta

{{EmbedLiveSample("Creating_a_clickable_image", "320", "64")}}

### Creando un enlace de correo

Es común crear enlaces que abren el programa de correo del usuario para permitir enviar un nuevo mensaje. Esto se hace con un enlace `mailto:`. Aquí tenemos un ejemplo:

```html
<a href="mailto:nowhere@mozilla.org">Enviar correo a nowhere</a>
```

#### Resultado

[Envia un correo a: nowhere](mailto:nowhere@mozilla.org)

Para detalles adicionales acerca del esquema de la URL `mailto`, tales como incluir el asunto, el cuerpo u otros contenidos predeterminados, consultar [Enlaces de correo (Email links)](/es/docs/Web/Guide/HTML/Email_links) o {{RFC(6068)}}.

### Creando un enlace a un número de teléfono

Ofrecer enlaces a números de teléfono es muy útil para los ususarios que observan documentos de internet desde computadoras portátiles conectadas a teléfonos o desde teléfonos celulares (móviles)

```html
<a href="tel:+491570156">+49 157 0156</a>
```

Para detalles adicionales acerca del esquema de la URL `tel`, consultar {{RFC(2806)}} y {{RFC(2396)}}.

### Utilizando el atributo `download` para guardar un `<canvas>` como PNG

Si deseas permitir a los usurios descargar una elemento HTML {{HTMLElement("canvas")}} como una imagen, puedes crear un enlace con una atributo `download` y la información canvas como un archivo URL:

```js
var link = document.createElement("a");
link.innerHTML = "download image";

link.addEventListener(
  "click",
  function (ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
  },
  false,
);

document.body.appendChild(link);
```

Puedes ver como funciona en: [jsfiddle.net/codepo8/V6ufG/2/](https://jsfiddle.net/codepo8/V6ufG/2/).

## Notas

HTML 3.2 define sólo los atributos `name`, `href`, `rel`, `rev`, y `title`.

### Recomendaciones de accesibilidad

Se abusa frecuntemente de las etiquetas de ancla (_anchor tags_) con el uso de los eventos `onclick` para crear pseudo-botones ajustando **href** a `"#"` o `"javascript:void(0)"` para prevenir la recarga de la página. Estos valores provocan comportamientos inesperados con los enlaces de copiado/dibujado, la apertura de enlaces en nuevas pestañas/ventanas, el guardado de enlaces (_bookmarking_), y cuando JavaScript está aún descargando, esto arroja errores, o es deshabilitado. Esto tambíen lleva a semánticas (_semantics_) incorrectas para tecnologías de asistencia (p.ej., lectores de pantalla). En estos casos, se recomienda utilizar un {{HTMLElement("button")}} en su lugar. En general, sólo se debe utilizar una ancla (_anchor_) para navegación utilizando una URL adecuada.

### Cliceo y enfoque

Cuando se clicea sobre un {{HTMLElement("a")}} las consecuencias varían de acuerdo al navegador y el sistema operativo.

¿Al hacer un clic en un [`<a>`](/es/docs/Web/HTML/Element/a) se enfoca?

| Navegadores de escritorio                                                                      | Windows 8.1 | OS X 10.9                       |
| ---------------------------------------------------------------------------------------------- | ----------- | ------------------------------- |
| Firefox 30.0                                                                                   | Si          | Si                              |
| Chrome ≥39 ([Chromium bug 388666](https://code.google.com/p/chromium/issues/detail?id=388666)) | Si          | Si                              |
| Safari 7.0.5                                                                                   | N/A         | Sólo cuando tiene un `tabindex` |
| Internet Explorer 11                                                                           | Si          | N/A                             |
| Presto (Opera 12)                                                                              | Si          | Si                              |

¿Al hacer un clic en un [`<a>`](/es/docs/Web/HTML/Element/a) se enfoca?

| Navegadores móviles | iOS 7.1.2                       | Android 4.4.4                   |
| ------------------- | ------------------------------- | ------------------------------- |
| Safari Mobile       | Sólo cuando tiene un `tabindex` | N/A                             |
| Chrome 35           | ???                             | Sólo cuando tiene un `tabindex` |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos comunicando a nivel semántico de texto [(text-level semantics)](/es/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("abbr")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
