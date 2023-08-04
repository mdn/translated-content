---
title: "<img>: El elemento incrustado de imagen"
slug: Web/HTML/Element/img
---

El elemento de imagen HTML **`<img>`** representa una imagen en el documento.

> **Nota:**
> Los navegadores no siempre muestran la imagen a la que el elemento hace referencia. Es el caso de los navegadores no gráficos (incluyendo aquellos usados por personas con problemas de visión), sí el usuario elige no mostrar la imagen, o sí el navegador es incapaz de mostrarla porque no es válida o [soportada](/es/docs/Web/HTML/Elemento/img#Supported_image_formats). En ese caso, el navegador la reemplazará con el texto definido en el atributo `alt`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/HTML/Content_categories"
          >Cotenido de las categorias</a
        >
      </th>
      <td>
        <a
          href="/es/docs/HTML/Content_categories#Flow_content"
          >Contenido dinámico</a
        >,
        <a
          href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido estático</a
        >,
        <a
          href="/es/docs/Web/Guide/HTML/Content_categories#Embedded_content"
          >contenido incrustado</a
        >, contenido palpable. Si el elemento tiene un atributo
        <code>usemap</code>, it also is a part of the
        interactive content category.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno, es {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        Debe tener etiqueta de de inicio pero no tiene por qué haber de cierre.
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>Cualquier elemento que acepte contenido incrustado.</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye atributos globales.

- `align` {{deprecated_inline}}
  - : Alineamiento de la texto respecto al contexto que la rodea.
- `alt`

  - : Este atributo define el texto alternativo que describe la imagen, texto que los usuarios verán si la URL de la imagen es errónea o la imagen tiene un [formato no soportado](/es/docs/Web/HTML/Elemento/img#Supported_image_formats) o si la imagen aún no se ha descargado.

    > **Nota:** Omitir este atributo indica que la imagen es una parte clave del contenido, y no tiene equivalencia textual. Establecer este atributo como cadena vacía indica que la imagen no es una parte clave del contenido; los navegadores no gráficos pueden omitirlo.

- `border` {{deprecated_inline}}

  - : Anchura del borde alrededor de la imagen.

- `crossorigin`

  - : Este atributo enumerado indica si la búsqueda de la imagen debe ser por CORS o no. [Imagen hablidata CORS](/es/docs/Web/HTML/Imagen_con_CORS_habilitado) puede ser usada en el elemento {{HTMLElement("canvas")}} sin ser pintada. Los valores permitidos son:

    - `"anonymous"`
      - : Una petición cross-origin (i.e., with `Origin:` HTTP header) es realizada. Sin embargo, no fueron enviadas credenciales "_(i.e., no cookie, no X.509 certificate, and no HTTP Basic authentication is sent)_". Sí el servidor no emite credenciales al sitio de origen (no ajustando el `Access-Control-Allow-Origin:` HTTP header), la imagen será pintada y su uso restringido.
    - `"use-credentials"`
      - : Una petición cross-origin (i.e., with `Origin:` HTTP header) es realizada con credenciales (i.e., a cookie, a certificate, and HTTP Basic authentication is performed). Sí el servidor no emite credenciales al sitio de origen (a través del `Access-Control-Allow-Credentials:` HTTP header), la imagen será pintada y su uso restringido.

    Cuando no existe, el recurso es buscado sin petición CORS (i.e., `sin enviar el Origen:` HTTP header) , previniendo el uso no pintado del elemento {{HTMLElement('canvas')}}. Si es inválido, se maneja como si se hubiese usado **anonymous**. Ver [atributos de configuración CORS](/es/docs/HTML/CORS_settings_attributes) para más información.

- `height`
  - : La altura de la imagen en píxeles CSS en HTML5 o píxeles o como porcentaje en HTML4.
- `hspace` {{deprecated_inline}}
  - : El número de píxeles de espaciado a la izquierda y la derecha de la imagen.
- `ismap`

  - : Este atributo boleano indica que la imagen es parte del mapa del lado del servidor. Así que, se envían las coordenadas precisas de un clic.

    > **Nota:** Este atributo está permitido solo si el elemento `<img>` es descendiente de un elemento {{htmlelement("a")}} con un atributo [`href`](/es/docs/Web/HTML/Element/a#href) válido.

- `longdesc`
  - : La URL como descripción de una imagen mostrada, complementa al texto de `alt`.
- `name` {{deprecated_inline}}
  - : El nombre para el elemento. Soportado en HTML4 solo para compatibilidad con versiones anteriores. En su lugar, usa el atributo **`id`**.
- `referrerpolicy` {{experimental_inline}}

  - : Una cadena indicando que referencia usar cuando buscas un recurso:

    - `"no-referrer"`: la cabecera no se envia.
    - "`no-referrer-when-downgrade`": la cabecera no será enviada cuando navegas hacia un origen sin TLS (HTTPS). Es el comportamiento predeterminado, si no se especifica en ninguna política.
    - `"origin"`: el referente será el origen de la página; lo que sería el esquema, el anfitrión (host) y el puerto.
    - "origin-when-cross-origin": navega hacia otro origen limitado por el esquema, el anfitrión y el puerto, mientras navegas en el mismo origen incluirá el camino del referente.
    - `"unsafe-url"`: el referente incluirá el origen y el camino (pero no el fragment, contraseña, o nombre de usuario). Este caso es arriegasdo porque puede haber una fuga del origen o el camino desde los recursos protegidos por TLS desde orígenes inseguros.

- `sizes`

  - : Una lista de una o más cadenas separadas por comas indicando el tamaño de la fuente. Cada tamaño de la fuente consiste en:

    1. Codición de medios. Debe omitirse en el último ítem.
    2. Valor del tamaño.

    El valor del tamaño de la fuente especifica el tamaño de la imagen incrustada. Se usa el tamaño actual de la fuente para seleccionar las fuentes soportadas por el atributo `srcset`, cuando esas fuentes son descritas usando el ancho (width). El tamaño de la fuente afecta al tamaño de la imagen (la imagen muestra tamaño si no se aplican estilos CSS). Si no hay atributo `srcset`, o no contiene valores con el ancho definido, entonces el atributo sizes no funciona.

- `src`
  - : La URL de la imagen. Este atributo es obligatorio para el elemento \<img>. En navegadores que soportan `srcset`, `src` es tratado como imagen candidata con una densidad del píxel `1x` sino una imagen estará definida en `srcset` o `srcset` contiene ancho.
- `srcset`

  - : Una lista de una o más cadenas separadas por comas indicando las posibles fuentes para usar. Cada cadena está compuesta por:

    1. URL de la imagen
    2. Opcionalmente, espacios en blanco seguidos de:

       - Un ancho, que es un entero positivo seguido directamente por `'w'`. El ancho está dividido por el tamaño de la fuente dada en el atributo `sizes` para calcular la densidad del píxel.
       - Densidad del píxel, un positivo decimal seguido directamente de `'x'`.

    Si no hay descriptores especificados, la fuente es asignada por defecto a `1x`.

    Es inválido mezclar ancho y densidad del píxel en el mismo atributo `srcset`. Descriptores duplicados (por ejemplo, dos fuentes en el mismo `srcset` definidos ambos con '`2x`') son inválidos, también.

    Los agentes de usuario son discretos al elegir cualquiera de las fuentes disponibles. Esto les proporciona un margen significativo para adaptar su selección basada en cosas como las preferencias del usuario o las condiciones de ancho de banda.

- `width`
  - : El ancho de la imagen en píxeles CSS en HTML5, o píxeles o porcentaje en HTML4.
- `usemap`

  - : La URL parcial (empezando con '#') de un [mapa de imagea](/es/docs/HTML/Element/map) asociado a un elemento.

    > **Nota:** No puedes usar este atributo si el elemento `<img>` es descendiente de un elemento {{htmlelement("a")}} o {{HTMLElement("button")}}.

- `vspace` {{deprecated_inline}}
  - : El número de píxeles de espacio blanco insertado sobre y bajo la imagen.

## Formatos de imagen soportada

El estándar de HTML no ofrece una lista de formatos de imagen soportados, de modo que cada agente de usuario soporta diferentes conjuntos de formatos. Gecko soporta:

- [JPEG](http://en.wikipedia.org/wiki/JPEG)
- [GIF](http://en.wikipedia.org/wiki/Graphics_Interchange_Format), including animated GIFs
- [PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics)
- [APNG](/es/docs/Animated_PNG_graphics)
- [SVG](/es/docs/SVG)
- [BMP](http://en.wikipedia.org/wiki/BMP_file_format)
- [BMP ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29)
- [PNG ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29)

> **Nota:**
> Soporte para formato [XBM](http://en.wikipedia.org/wiki/X_BitMap) fue eliminado en Gecko 1.9.2.

## Interacción con CSS

Respecto a CSS, `una <img>` es un [elemento de reemplazo](/es/docs/Web/CSS/Elemento_reemplazo). No tiene base, asi que cuando las imágenes se usan en un contexto de formato en línea con {{cssxref("vertical-align")}}: `baseline`, el bajo de la imagen se posa sobre la base del contenedor.

Dependiendo de su tipo, una imagen puede tener ancho y alto intrínseco, pero no necesariamente. Por ejempo, las imagenes SVG no tienen dimensiones intrínsecas.

## Ejemplo 1

```html
<img src="mdn-logo-sm.png" alt="MDN" />
```

![MDN](/static/img/favicon144.png)

## Ejemplo 2: Enlace con imagen

```html
<a href="https://developer.mozilla.org/"
  ><img src="mdn-logo-sm.png" alt="MDN"
/></a>
```

[![MDN](/static/img/favicon144.png)](/)

## Ejemplo 3: Uso del atributo `srcset`

El atributo `src` es un candidato en agentes de usuario `1x` que soporta `srcset.`

```html
<img src="mdn-logo-sm.png" alt="MDN" srcset="mdn-logo-HD.png 2x" />
```

## Ejemplo 4: Uso de atributos `srcset` y `sizes`

El atributo`src` es ignorado en agentes de usuario que soportan `srcset` cuando usan descriptores `'w'`. Cuando la condición de media `(min-width: 600px)` encaja, la imagen será 200px de ancho, de otra manera será 50vw de ancho (50% del ancho del dispositivo).

```html
<img
  src="clock-demo-thumb-200.png"
  alt="Clock"
  srcset="clock-demo-thumb-200.png 200w, clock-demo-thumb-400.png 400w"
  sizes="(min-width: 600px) 200px, 50vw" />
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTMLElement("picture")}}, {{HTMLElement("object")}} and {{HTMLElement("embed")}} elements
