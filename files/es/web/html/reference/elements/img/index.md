---
title: "`<img>` elemento HTML de imagen incrustada"
short-title: <img>
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 74a39db9d03ec63426b0740dc0bd3cb85e5461a4
---

El elemento **`<img>`** de [HTML](/es/docs/Web/HTML) incrusta una imagen en el documento.

{{InteractiveExample("HTML Demo: &lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="Rodaja de pomelo sobre un montón de otras rodajas" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Define el texto que puede sustituir a la imagen en la página.

    > [!NOTE]
    > Los navegadores no siempre muestran las imágenes. Hay varias situaciones en las que un navegador podría no mostrarlas, por ejemplo:
    >
    > - Navegadores no visuales (como los que usan las personas con discapacidad visual)
    > - El usuario elige no mostrar imágenes (para ahorrar ancho de banda o por motivos de privacidad)
    > - La imagen no es válida o tiene un [tipo no admitido](/es/docs/Web/Media/Guides/Formats/Image_types)
    >
    > En estos casos, el navegador puede sustituir la imagen por el texto del atributo `alt` del elemento. Por estas y otras razones, proporciona siempre que puedas un valor útil para `alt`.

    Establecer este atributo como una cadena vacía (`alt=""`) indica que la imagen _no_ es una parte clave del contenido (es decorativa o un píxel de seguimiento), y que los navegadores no visuales pueden omitirla del {{glossary("Engine/Rendering", "renderizado")}}. Los navegadores visuales también ocultan el icono de imagen rota cuando el atributo `alt` está vacío y la imagen no se pudo mostrar.

    Este atributo también se usa al copiar y pegar la imagen como texto, o al guardar una imagen enlazada como marcador.

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Especifica que quieres que el navegador envíe una cabecera {{httpheader("Attribution-Reporting-Eligible")}} junto con la petición de la imagen.

    En el lado del servidor, esto se usa para activar el envío de una cabecera {{httpheader("Attribution-Reporting-Register-Source")}} o {{httpheader("Attribution-Reporting-Register-Trigger")}} en la respuesta, con el fin de registrar una [fuente de atribución](/es/docs/Web/API/Attribution_Reporting_API/Registering_sources) o un [disparador de atribución](/es/docs/Web/API/Attribution_Reporting_API/Registering_triggers) basados en imagen, respectivamente. Qué cabecera de respuesta debe enviarse depende del valor de la cabecera `Attribution-Reporting-Eligible` que activó el registro.

    El evento de fuente o disparador correspondiente se desencadena una vez que el navegador recibe la respuesta que contiene el archivo de imagen.

    > [!NOTE]
    > Consulta la [Attribution Reporting API](/es/docs/Web/API/Attribution_Reporting_API) para más información.

    Hay dos versiones de este atributo que puedes establecer:
    - Booleana, es decir, usando solo el nombre `attributionsrc`. Esto especifica que quieres que la cabecera {{httpheader("Attribution-Reporting-Eligible")}} se envíe al mismo servidor al que apunta el atributo `src`. Esto es suficiente cuando gestionas el registro de la fuente o el disparador de atribución en el mismo servidor. Al registrar un disparador de atribución, esta propiedad es opcional, y si se omite se usará un valor booleano.
    - Un valor con una o más URL, por ejemplo:

    ```html
    <img
      src="image-file.png"
      alt="Descripción de mi archivo de imagen"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Esto es útil cuando el recurso solicitado no está en un servidor que controlas, o cuando simplemente quieres gestionar el registro de la fuente de atribución en un servidor distinto. En ese caso, puedes especificar una o más URL como valor de `attributionsrc`. Cuando se produzca la petición del recurso, la cabecera {{httpheader("Attribution-Reporting-Eligible")}} se enviará a la URL (o URL) especificada en `attributionSrc`, además de al origen del recurso. Esas URL pueden entonces responder con una cabecera {{httpheader("Attribution-Reporting-Register-Source")}} o {{httpheader("Attribution-Reporting-Register-Trigger")}}, según corresponda, para completar el registro.

    > [!NOTE]
    > Especificar varias URL significa que se pueden registrar varias fuentes de atribución para la misma característica. Por ejemplo, podrías tener distintas campañas cuyo éxito quieres medir, lo que implica generar informes distintos sobre datos distintos.

- [`crossorigin`](/es/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Indica si la obtención de la imagen debe hacerse mediante una petición {{glossary("CORS")}}. Los datos de imagen de una [imagen con CORS habilitado](/es/docs/Web/HTML/How_to/CORS_enabled_image) obtenida mediante una petición CORS pueden reutilizarse en el elemento {{HTMLElement("canvas")}} sin quedar marcados como "[contaminados](/es/docs/Web/HTML/How_to/CORS_enabled_image#seguridad_y_canvas_contaminados)".

    Si el atributo `crossorigin` _no_ está especificado, se envía una petición no CORS (sin la cabecera de petición {{httpheader("Origin")}}), y el navegador marca la imagen como contaminada y restringe el acceso a sus datos, impidiendo su uso en elementos {{HTMLElement("canvas")}}.

    Si el atributo `crossorigin` _sí_ está especificado, se envía una petición CORS (con la cabecera de petición {{httpheader("Origin")}}); pero si el servidor no permite el acceso de origen cruzado a los datos de la imagen desde el sitio de origen (al no enviar ninguna cabecera de respuesta {{httpheader("Access-Control-Allow-Origin")}}, o al no incluir el origen del sitio en ninguna cabecera {{httpheader("Access-Control-Allow-Origin")}} que sí envíe), el navegador bloquea la carga de la imagen y registra un error de CORS en la consola de las herramientas de desarrollo.

    Valores permitidos:
    - `anonymous`
      - : Se envía una petición CORS sin credenciales (es decir, sin {{glossary("cookie", "cookies")}}, [certificados X.509](https://datatracker.ietf.org/doc/html/rfc5280) ni cabecera de petición {{httpheader("Authorization")}}).
    - `use-credentials`
      - : La petición CORS se envía incluyendo cualquier credencial (es decir, cookies, certificados X.509 y la cabecera de petición `Authorization`). Si el servidor no permite compartir credenciales con el sitio de origen (enviando de vuelta la cabecera de respuesta `Access-Control-Allow-Credentials: true`), el navegador marca la imagen como contaminada y restringe el acceso a sus datos.

    Si el atributo tiene un valor no válido, los navegadores lo manejan como si se hubiera usado el valor `anonymous`. Consulta [atributos de configuración de CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para más información.

- `decoding`
  - : Este atributo da al navegador una pista sobre si debe decodificar la imagen junto con la renderización del otro contenido del DOM en un solo paso de presentación que se vea más "correcto" (`sync`), o si debe renderizar y presentar el otro contenido del DOM primero y decodificar y mostrar la imagen después (`async`). En la práctica, `async` significa que el siguiente pintado no espera a que la imagen se decodifique.

    A menudo es difícil percibir algún efecto notable al usar `decoding` en elementos `<img>` estáticos. Es probable que se rendericen inicialmente como imágenes vacías mientras se obtienen los archivos de imagen (ya sea desde la red o desde la caché), para luego gestionarse de forma independiente de todos modos, por lo que la "sincronización" de las actualizaciones de contenido resulta menos evidente. Sin embargo, el bloqueo del renderizado mientras ocurre la decodificación, aunque suele ser muy pequeño, _sí puede_ medirse, incluso si es difícil de percibir a simple vista. Consulta [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) para un análisis más detallado (tunetheweb.com, 2023).

    Usar distintos tipos de `decoding` puede producir diferencias más notables al insertar dinámicamente elementos `<img>` en el DOM mediante JavaScript; consulta {{domxref("HTMLImageElement.decoding")}} para más detalles.

    Valores permitidos:
    - `sync`
      - : Decodifica la imagen de forma síncrona junto con el resto del contenido del DOM, y presenta todo a la vez.
    - `async`
      - : Decodifica la imagen de forma asíncrona, después de renderizar y presentar el resto del contenido del DOM.
    - `auto`
      - : Sin preferencia por el modo de decodificación; el navegador decide qué es lo mejor para el usuario. Este es el valor predeterminado.

- [`elementtiming`](/es/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Marca la imagen para que sea observada por la API {{domxref("PerformanceElementTiming")}}. El valor indicado se convierte en el identificador del elemento de imagen observado. Consulta también la página del atributo [`elementtiming`](/es/docs/Web/HTML/Reference/Attributes/elementtiming).

- [`fetchpriority`](/es/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Proporciona una pista sobre la prioridad relativa que se debe usar al obtener la imagen. Valores permitidos:
    - `high`
      - : Obtiene la imagen con una prioridad alta respecto a otras imágenes.
    - `low`
      - : Obtiene la imagen con una prioridad baja respecto a otras imágenes.
    - `auto`
      - : No establece ninguna preferencia sobre la prioridad de obtención.
        Este es el valor predeterminado.
        Se usa cuando no se establece ningún valor o se establece un valor no válido.
- `height`
  - : La altura intrínseca de la imagen, en píxeles. Debe ser un entero sin unidad.

    > [!NOTE]
    > Incluir `height` y [`width`](#width) permite al navegador calcular la {{glossary("aspect ratio", "relación de aspecto")}} de la imagen antes de que esta se cargue. Esta relación de aspecto se usa para reservar el espacio necesario para mostrar la imagen, reduciendo o incluso evitando un cambio de diseño cuando la imagen se descarga y se pinta en pantalla. Reducir el cambio de diseño es un componente clave de una buena experiencia de usuario y de un buen rendimiento web.

- `ismap`
  - : Este atributo booleano indica que la imagen forma parte de un [mapa del lado del servidor](https://en.wikipedia.org/wiki/Image_map#Server-side). Si es así, las coordenadas donde el usuario hizo clic en la imagen se envían al servidor.

    > [!NOTE]
    > Este atributo solo se permite si el elemento `<img>` es descendiente de un elemento {{htmlelement("a")}} con un atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href) válido. Esto ofrece a los usuarios sin dispositivos de puntero un destino alternativo.

- `loading`
  - : Indica cómo debe cargar la imagen el navegador:
    - `eager`
      - : Carga la imagen de inmediato, sin importar si actualmente está o no dentro del {{glossary("visual viewport", "viewport visual")}} (este es el valor predeterminado).
    - `lazy`
      - : Retrasa la carga de la imagen hasta que alcanza una distancia calculada respecto al viewport, definida por el navegador.

        La carga diferida evita el consumo de ancho de banda de red y de almacenamiento necesario para gestionar la imagen hasta que sea razonablemente seguro que se va a necesitar. Esto mejora el rendimiento en la mayoría de los casos de uso habituales.

        Aunque se recomienda incluir los atributos [`width`](#width) y [`height`](#height) de forma explícita en todas las imágenes para evitar el cambio de diseño, son especialmente importantes en las imágenes con carga diferida. Las imágenes con carga diferida nunca se cargarán si no intersectan una parte visible de un elemento, incluso si cargarlas cambiaría eso, porque las imágenes sin cargar tienen un `width` y un `height` de `0`. Esto crea una experiencia de usuario aún más disruptiva cuando el contenido visible en el viewport se reajusta en mitad de la lectura.

        Es posible que las imágenes con carga diferida (lazy-loaded) situadas en el área de visualización (viewport) aún no sean visibles cuando se dispare el evento {{domxref("Window.load_event", "load")}} de la ventana (Window). Esto se debe a que el evento se dispara en función de las imágenes con carga inmediata; las imágenes con carga diferida no se tienen en cuenta aunque estén ubicadas dentro del viewport visual en la carga inicial de la página.

        La carga solo se difiere cuando JavaScript está habilitado. Esta es una medida antirrastreo, porque si un agente de usuario admitiera la carga diferida con la ejecución de scripts deshabilitada, seguiría siendo posible que un sitio rastreara la posición aproximada de desplazamiento de un usuario a lo largo de una sesión, colocando imágenes de forma estratégica en el marcado de una página para que un servidor pudiera rastrear cuántas imágenes se solicitan y cuándo.

- `referrerpolicy`
  - : Una cadena que indica qué referrer usar al obtener el recurso:
    - `no-referrer`: la cabecera {{HTTPHeader("Referer")}} no se enviará.
    - `no-referrer-when-downgrade`: la cabecera {{HTTPHeader("Referer")}} no se enviará a {{Glossary("origin", "orígenes")}} sin {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: el referrer enviado se limitará al origen de la página que lo envía: su [esquema](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}} y {{Glossary("port", "puerto")}}.
    - `origin-when-cross-origin`: el referrer enviado a otros orígenes se limitará al esquema, el host y el puerto. Las navegaciones dentro del mismo origen seguirán incluyendo la ruta.
    - `same-origin`: se enviará un referrer para el {{Glossary("Same-origin policy", "mismo origen")}}, pero las peticiones de origen cruzado no contendrán información de referrer.
    - `strict-origin`: solo envía el origen del documento como referrer cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS), pero no lo envía a un destino menos seguro (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (predeterminado): envía una URL completa al realizar una petición del mismo origen, solo envía el origen cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS), y no envía ninguna cabecera a un destino menos seguro (HTTPS→HTTP).
    - `unsafe-url`: el referrer incluirá el origen _y_ la ruta (pero no el [fragmento](/es/docs/Web/API/HTMLAnchorElement/hash), la [contraseña](/es/docs/Web/API/HTMLAnchorElement/password) ni el [nombre de usuario](/es/docs/Web/API/HTMLAnchorElement/username)). **Este valor no es seguro**, porque filtra orígenes y rutas de recursos protegidos por TLS hacia orígenes no seguros.

- `sizes`
  - : Uno o más valores separados por comas, que pueden ser tamaños de origen o la palabra clave `auto`.
    La especificación exige que el atributo `sizes` solo esté presente cuando `srcset` usa descriptores de ancho.
    - **tamaño de origen**
      - : Un **tamaño de origen** consiste en:
        1. Una [condición de medios](/es/docs/Web/CSS/Guides/Media_queries/Using#sintaxis), omitida para el último elemento de la lista.
        2. Un valor de tamaño de origen.

        Por ejemplo, el siguiente tamaño de origen propone usar una imagen de `1000px` de ancho si el ancho del _viewport_ es de 500px o menos.

        ```css
        (width <= 500px) 1000px
        ```

        Las condiciones de medio describen propiedades del _{{glossary("viewport")}}_, no de la _imagen_.
        Como un descriptor de tamaño de origen especifica el ancho que se usará para la imagen durante el diseño, la condición de medio suele basarse (aunque no necesariamente) en {{cssxref("@media/width")}}.

        Los valores de tamaño de origen especifican el tamaño de visualización previsto de la imagen.
        Los {{glossary("User agent", "agentes de usuario")}} usan el tamaño de origen actual para seleccionar uno de los orígenes proporcionados por el atributo `srcset`, cuando esos orígenes están descritos usando descriptores de ancho (`w`).
        El valor `w` definido en `sizes` determina el ancho de diseño predeterminado de la imagen.
        En ausencia de {{glossary("CSS")}}, el navegador renderizará la imagen a este tamaño, independientemente de las dimensiones físicas en píxeles del archivo descargado.

        Un valor de tamaño de origen puede ser cualquier [longitud](/es/docs/Web/CSS/Reference/Values/length) no negativa.
        No debe usar funciones CSS distintas de las [funciones matemáticas](/es/docs/Web/CSS/Reference/Values/Functions).
        Las unidades se interpretan igual que en las [consultas de medios](/es/docs/Web/CSS/Guides/Media_queries), lo que significa que todas las unidades de longitud relativas son relativas a la raíz del documento y no al elemento `<img>`. Por ejemplo, un valor en `em` es relativo al tamaño de fuente de la raíz, no al tamaño de fuente de la imagen. No se permiten valores en [porcentaje](/es/docs/Web/CSS/Reference/Values/percentage). Si no se proporciona el atributo `sizes`, su valor predeterminado es `100vw` (el ancho del viewport).

    - `auto`
      - : La palabra clave `auto` indica que el navegador debe usar el ancho de diseño previsto del elemento para seleccionar la imagen que se mostrará.
        Es decir, debe usar el [tamaño concreto](/es/docs/Web/CSS/Reference/Values/image#tamaño_concreto) de la imagen, calculado tras aplicar el diseño basado en HTML y CSS.
        Esto solo es válido cuando se combina con `loading="lazy"`, ya que se espera que la página ya cuente con el CSS y otra información de diseño para cuando se cargue la imagen.

        El uso de `auto` te ahorra tener que especificar las condiciones de medios (media conditions) del diseño dos veces: una para el diseño y otra para seleccionar la imagen adecuada que se debe obtener y mostrar.

        Si `auto` no puede resolverse, ya sea porque el navegador no lo admite o porque la imagen aún no tiene un tamaño de diseño definido, el navegador recurre a los _tamaños de origen_ de la lista para determinar el ancho, luego a los atributos `width`/`height` definidos en el elemento y, por último, al tamaño intrínseco predeterminado para los elementos `<img>` definido en la hoja de estilos del agente de usuario (300px por 150px).

        Para una mejor compatibilidad con versiones anteriores en navegadores que no admiten `auto`, puedes incluir tamaños de respaldo después de `auto` en el atributo `sizes`.
        También deberías establecer los atributos `width` y `height` del elemento con las dimensiones intrínsecas de la imagen más grande de tu `srcset`, para que el navegador pueda reservar espacio utilizando la relación de aspecto correcta:

        ```html
        <img
          loading="lazy"
          width="200"
          height="200"
          sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
          srcset="
            swing-200.jpg   200w,
            swing-400.jpg   400w,
            swing-800.jpg   800w,
            swing-1600.jpg 1600w
          "
          src="swing-400.jpg"
          alt="Balanceo de pesa rusa" />
        ```

- `src`
  - : La {{glossary("URL")}} de la imagen. Es obligatorio incluir al menos uno de los atributos `src` o [`srcset`](#srcset) en un elemento `<img>`. Si se especifica [`srcset`](#srcset), `src` se usa de una de estas dos formas:
    - como alternativa para los navegadores que no admiten `srcset`.
    - si `srcset` usa el descriptor "x", entonces `src` equivale a una fuente con el descriptor de densidad `1x`; es decir, la imagen indicada por `src` se usa en pantallas de baja densidad (como las pantallas habituales de 72 DPI o 96 DPI).

- `srcset`
  - : Una o más cadenas separadas por comas, que indican las posibles fuentes de imagen que puede usar el {{glossary("user agent", "agente de usuario")}}.

    Cada cadena se compone de:
    1. Una {{glossary("URL")}} a una imagen
    2. Opcionalmente, un espacio en blanco seguido de uno de los siguientes:
       - Un descriptor de ancho (un entero positivo seguido directamente de `w`). _Debe_ coincidir con el ancho intrínseco de la imagen referenciada. El descriptor de anchura se divide entre el tamaño de fuente indicado en el atributo `sizes` para calcular la densidad de píxeles efectiva. Por ejemplo, para proporcionar un recurso de imagen que se use cuando el renderizador necesite una imagen de 450 píxeles de ancho, usa el descriptor de ancho `450w`. Cuando un `srcset` contiene descriptores "w", el navegador los usa junto con el atributo `sizes` para elegir un recurso.
       - Un descriptor de densidad de píxeles (un número decimal positivo seguido directamente de `x`). Especifica la condición de densidad de píxeles de la pantalla bajo la cual debe utilizarse el recurso de imagen correspondiente. Por ejemplo, para proporcionar un recurso de imagen que se use cuando la densidad de píxeles sea el doble de la densidad estándar, usa el descriptor de densidad de píxeles `2x` o `2.0x`.

    Si no se especifica ningún descriptor, a la fuente se le asigna el descriptor predeterminado `1x`. Es incorrecto mezclar descriptores de ancho y descriptores de densidad de píxeles en el mismo atributo `srcset`. Los descriptores duplicados (por ejemplo, dos fuentes en el mismo `srcset` descritas ambas con `2x`) tampoco son válidos.

    Se ignoran los caracteres de espacio, salvo el espacio en blanco que separa la URL del descriptor de condición correspondiente; esto incluye tanto el espacio inicial como el final, así como el espacio antes o después de cada coma. Sin embargo, si una cadena candidata de imagen no contiene descriptores ni espacio en blanco después de la URL, la siguiente cadena candidata de imagen, si la hay, debe comenzar con uno o más espacios en blanco, o la coma se considerará parte de la URL.

    Cuando el `srcset` del elemento `<img>` usa descriptores `x`, los navegadores también consideran la URL del atributo `src` (si está presente) como candidata, y le asignan el descriptor predeterminado `1x`. En cambio, si el atributo `srcset` usa descriptores de ancho, `src` no se tiene en cuenta y se usa el atributo `sizes` en su lugar.

    El agente de usuario elige a su criterio cualquiera de las fuentes disponibles. Esto le da un margen considerable para adaptar su selección según factores como las preferencias del usuario o las condiciones de {{glossary("bandwidth", "ancho de banda")}}. Consulta nuestro tutorial de [imágenes adaptables](/es/docs/Web/HTML/Guides/Responsive_images) para ver un ejemplo.

- `width`
  - : El ancho intrínseco de la imagen en píxeles. Debe ser un entero sin unidad.
- `usemap`
  - : La {{glossary("URL")}} parcial (que empieza con `#`) de un [mapa de imagen](/es/docs/Web/HTML/Reference/Elements/map) asociado al elemento.

    > [!NOTE]
    > No puedes usar este atributo si el elemento `<img>` está dentro de un elemento {{htmlelement("a")}} o {{HTMLElement("button")}}.

### Atributos obsoletos

- `align` {{deprecated_inline}}
  - : Alinea la imagen respecto al contexto que la rodea. Usa las propiedades {{glossary("CSS")}} {{cssxref('float')}} o {{cssxref('vertical-align')}} en lugar de este atributo. Valores permitidos:
    - `top`
      - : Equivale a `vertical-align: top` o `vertical-align: text-top`
    - `middle`
      - : Equivale a `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : El valor predeterminado, equivale a `vertical-align: unset` o `vertical-align: initial`
    - `left`
      - : Equivale a `float: left`
    - `right`
      - : Equivale a `float: right`

- `border` {{deprecated_inline}}
  - : El grosor del borde alrededor de la imagen. Usa la propiedad {{glossary("CSS")}} {{cssxref('border')}} en su lugar.
- `hspace` {{deprecated_inline}}
  - : El número de píxeles de espacio en blanco a la izquierda y a la derecha de la imagen. Usa la propiedad CSS {{cssxref('margin')}} en su lugar.
- `longdesc` {{deprecated_inline}}
  - : Un enlace a una descripción más detallada de la imagen. Los valores posibles son una {{glossary("URL")}} o el [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) de un elemento.

    > [!NOTE]
    > Este atributo se considera en desuso en la [especificación de HTML](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). Su futuro es incierto; los autores deberían usar una alternativa {{glossary("WAI")}}-{{glossary("ARIA")}} como [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) o [`aria-details`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

- `name` {{deprecated_inline}}
  - : Un nombre para el elemento. Usa el atributo [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) en su lugar.
- `vspace` {{deprecated_inline}}
  - : El número de píxeles de espacio en blanco por encima y por debajo de la imagen. Usa la propiedad CSS {{cssxref('margin')}} en su lugar.

## Notas de uso

Necesitas al menos dos atributos para cada elemento `<img>`. Los más comunes son `src` y `alt`.

- El atributo `src` contiene la ruta de la imagen que quieres incrustar. No es obligatorio si el atributo [srcset](/es/docs/Web/API/HTMLImageElement/srcset) está disponible. Sin embargo, es necesario incluir al menos uno de los dos atributos: `src` o `srcset`.
- El atributo `alt` contiene un texto alternativo para la imagen, que es obligatorio e **increíblemente útil** para la accesibilidad: los lectores de pantalla leen el valor del atributo a sus usuarios para que sepan qué representa la imagen. El texto alternativo también se muestra en la página si la imagen no se puede cargar por algún motivo, por ejemplo, errores de red, bloqueo de contenido o enlaces rotos.

Existen muchos otros atributos para diversos fines:

- Control de [Referrer](/es/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{glossary("CORS")}} por motivos de seguridad y privacidad: consulta [`crossorigin`](#crossorigin) y [`referrerpolicy`](#referrerpolicy).
- Usa tanto [`width`](#width) como [`height`](#height) para establecer el tamaño intrínseco de la imagen, permitiendo que ocupe espacio antes de cargarse y así mitigar saltos de diseño en el contenido.
- Sugerencias de imagen adaptable con [`sizes`](#sizes) y [`srcset`](#srcset) (consulta también el elemento {{htmlelement("picture")}} y nuestro tutorial de [imágenes adaptables](/es/docs/Web/HTML/Guides/Responsive_images)).

La [guía de tipos y formatos de archivo de imagen](/es/docs/Web/Media/Guides/Formats/Image_types) ofrece información sobre los formatos de imagen compatibles y recomendaciones generales sobre dónde usarlos.

### Errores de carga de imagen

Si ocurre un error al cargar o renderizar una imagen, y se ha configurado un manejador de eventos `onerror` para el evento {{domxref("HTMLElement/error_event", "error")}}, ese manejador de eventos se ejecutará. Esto puede ocurrir en varias situaciones, entre ellas:

- Los atributos `src` o `srcset` están vacíos (`""`) o son `null`.
- La {{glossary("URL")}} de `src` es la misma que la URL de la página en la que se encuentra actualmente el usuario.
- La imagen está dañada de tal forma que impide su carga.
- Los metadatos de la imagen están dañados de tal forma que resulta imposible obtener sus dimensiones, y no se especificó ninguna dimensión en los atributos del elemento `<img>`.
- La imagen tiene un formato no compatible con el {{Glossary("user agent", "agente de usuario")}}.

### Estilos con CSS

`<img>` es un {{ glossary("replaced elements", "elemento reemplazado")}}; tiene un valor {{cssxref("display")}} de `inline` por defecto, pero sus dimensiones predeterminadas se definen a partir de los valores intrínsecos de la imagen incrustada, como si fuera `inline-block`. Puedes establecer propiedades como {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. en una imagen.

`<img>` no tiene línea base, así que cuando las imágenes se usan en un contexto de formato en línea con {{cssxref("vertical-align", "vertical-align: baseline")}}, la parte inferior de la imagen se coloca sobre la línea base del texto.

Puedes usar la propiedad {{cssxref("object-position")}} para posicionar la imagen dentro de la caja del elemento, y la propiedad {{cssxref("object-fit")}} para ajustar el tamaño de la imagen dentro de la caja (por ejemplo, si la imagen debe ajustarse a la caja o rellenarla aunque eso implique recortarla).

Según su tipo, una imagen puede tener un ancho y un alto intrínsecos. Sin embargo, para algunos tipos de imagen las dimensiones intrínsecas no son necesarias. Las imágenes {{glossary("SVG")}}, por ejemplo, no tienen dimensiones intrínsecas si su elemento raíz {{SVGElement("svg")}} no tiene un `width` o un `height` establecidos.

## Accesibilidad

### Creación de descripciones alternativas significativas

El valor de un atributo `alt` debe ofrecer un texto alternativo claro y conciso para el contenido de la imagen. No debe describir la presencia de la imagen en sí ni el nombre de su archivo. Si el atributo `alt` se omite deliberadamente porque la imagen no tiene un equivalente textual, considera otros métodos para transmitir lo que la imagen intenta comunicar.

#### Incorrecto

```html example-bad
<img alt="imagen" src="penguin.jpg" />
```

#### Correcto

```html example-good
<img alt="Un pingüino en una playa." src="penguin.jpg" />
```

Una prueba de accesibilidad importante consiste en leer el contenido del atributo `alt` junto con el texto que lo precede, para comprobar si transmite el mismo significado que la imagen. Por ejemplo, si la imagen estuviera precedida por la frase "En mis viajes, vi un animalito adorable:", el ejemplo _incorrecto_ podría ser leído por un lector de pantalla como "En mis viajes, vi un animalito adorable: imagen", lo cual no tiene sentido. El ejemplo _correcto_ podría leerse como "En mis viajes, vi un animalito adorable: Un pingüino en una playa.", que sí tiene sentido.

Para las imágenes que sirven para activar una acción, por ejemplo, imágenes anidadas dentro de un elemento {{htmlelement("a")}} o {{htmlelement("button")}}, considera describir la acción que se desencadena en el valor del atributo `alt`. Por ejemplo, podrías escribir `alt="página siguiente"` en lugar de `alt="flecha derecha"`. También puedes considerar añadir una descripción adicional opcional dentro de un atributo `title`; los lectores de pantalla pueden leerla si el usuario lo solicita.

Cuando un elemento de imagen no tiene un atributo `alt`, algunos lectores de pantalla pueden anunciar en su lugar el nombre del archivo de la imagen. Esto puede resultar confuso si el nombre del archivo no es representativo del contenido de la imagen.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN: Comprender las WCAG, explicaciones de la Pauta 1.1](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#pauta_1.1_—_dar_alternativas_de_texto_para_contenido_no_textual)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identificar un SVG como imagen

Debido a un [error de VoiceOver](https://webkit.org/b/216364), VoiceOver no anuncia correctamente las imágenes SVG como imágenes. Incluye [`role="img"`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) en todos los elementos `<img>` con archivos fuente SVG para asegurarte de que las tecnologías de asistencia anuncien correctamente el SVG como contenido de imagen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### El atributo title

El atributo [`title`](/es/docs/Web/HTML/Reference/Global_attributes/title) no es un sustituto aceptable del atributo `alt`. Además, evita duplicar el valor del atributo `alt` en un atributo `title` declarado en la misma imagen. Hacerlo puede hacer que algunos lectores de pantalla anuncien el mismo texto dos veces, generando una experiencia confusa.

El atributo `title` tampoco debería usarse como información de subtítulo complementaria para acompañar la descripción `alt` de una imagen. Si una imagen necesita un pie de foto, usa los elementos [`figure`](/es/docs/Web/HTML/Reference/Elements/figure) y [`figcaption`](/es/docs/Web/HTML/Reference/Elements/figcaption).

El valor del atributo `title` normalmente se muestra al usuario como una información emergente (tooltip), que aparece poco después de que el cursor deja de moverse sobre la imagen. Aunque esto _puede_ ofrecer información adicional al usuario, no debes asumir que el usuario llegará a verla: es posible que solo use teclado o pantalla táctil. Si tienes información especialmente importante o valiosa para el usuario, preséntala en línea usando alguno de los métodos mencionados anteriormente en lugar de usar `title`.

- [Using the HTML title attribute – updated | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Ejemplos

### Texto alternativo

El siguiente ejemplo incrusta una imagen en la página e incluye texto alternativo para accesibilidad.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Texto_alternativo', '100%', '160') }}

### Enlace de imagen

Este ejemplo se basa en el anterior y muestra cómo convertir la imagen en un enlace. Para ello, anida la etiqueta `<img>` dentro de {{HTMLElement("a")}}. Debes hacer que el texto alternativo describa el recurso al que apunta el enlace, tal como harías si usaras un enlace de texto en su lugar.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visita el sitio de MDN" />
</a>
```

{{ EmbedLiveSample('Enlace_de_imagen', '100%', '160') }}

### Uso del atributo srcset

En este ejemplo incluimos un atributo `srcset` con una referencia a una versión en alta resolución del logotipo; esta se cargará en lugar de la imagen de `src` en dispositivos de alta resolución. La imagen referenciada en el atributo `src` se cuenta como candidata `1x` en los {{glossary("User agent", "agentes de usuario")}} que admiten `srcset`.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Uso_del_atributo_srcset", "100%", "160")}}

### Uso de los atributos srcset y sizes

El atributo `src` se ignora en los {{glossary("User agent", "agentes de usuario")}} que admiten `srcset` cuando se incluyen descriptores `w`. Cuando se cumple la condición de medios `(width <= 600px)`, se carga la imagen de 200 píxeles de ancho (es la que más se aproxima a `200px`); en caso contrario, se carga la otra imagen.

```html
<img
  src="clock-demo-200px.png"
  alt="Son las 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Uso_de_los_atributos_srcset_y_sizes", "100%", 350)}}

> [!NOTE]
> Para ver el cambio de tamaño en acción, {{LiveSampleLink('Uso_de_los_atributos_srcset_y_sizes', 'consulta el ejemplo en una página aparte')}}, para poder redimensionar realmente el área de contenido.

## Aspectos de seguridad y privacidad

Aunque los elementos `<img>` tienen usos inofensivos, pueden tener consecuencias no deseadas para la seguridad y la privacidad del usuario. Consulta [Cabecera Referer: aspectos de seguridad y privacidad](/es/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) para más información y formas de mitigarlos.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_frase"
          >contenido de frase</a
        >,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_incrustado"
          >contenido incrustado</a
        >,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_palpable"
          >contenido palpable</a
        >. Si el elemento tiene un atributo <code>usemap</code>, también
        forma parte de la categoría de contenido interactivo.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno; es un {{Glossary("void element", "elemento vacío")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Debe tener una etiqueta de apertura y no debe tener etiqueta de cierre.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>Cualquier elemento que acepte contenido incrustado.</td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <ul>
          <li>
            con un atributo <code>alt</code> no vacío o sin atributo
            <code>alt</code>:
            <code
              ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            con un atributo <code>alt</code> vacío:
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <ul>
          <li>
            con un atributo <code>alt</code> no vacío:
            <ul>
              <li>
                <code
                  ><a
                    href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            con un atributo <code>alt</code> vacío, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            o <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            sin atributo <code>alt</code>, no se permite ningún <code>role</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elementos {{HTMLElement("picture")}}, {{HTMLElement("object")}} y {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} e {{cssxref("image-resolution")}}: Propiedades CSS relacionadas con imágenes.
- Interfaz {{domxref("HTMLImageElement")}} para este elemento
- [Imágenes HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Guía de tipos y formatos de archivo de imagen](/es/docs/Web/Media/Guides/Formats/Image_types)
- [Imágenes adaptables](/es/docs/Web/HTML/Guides/Responsive_images)
