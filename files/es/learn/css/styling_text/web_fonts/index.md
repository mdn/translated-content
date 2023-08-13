---
title: Fuentes web
slug: Learn/CSS/Styling_text/Web_fonts
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

En el primer artículo del módulo, exploramos las características básicas del CSS disponibles para aplicar estilos a tipos de letra y al texto. En este artículo vamos a ir más lejos: exploraremos en detalle las tipografías web, que permiten que te descargues tipos de letra personalizados junto con tu página web para lograr un estilo de texto más variado y personalizado.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y de CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>),
        <a href="/es/docs/Learn/CSS/Styling_text/Fundamentals"
          >texto CSS y los fundamentos de la fuente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a aplicar tipos de letra a una página web, ya sea desde un
        servicio de terceros o desde tu código.
      </td>
    </tr>
  </tbody>
</table>

## Resumen de las familias de tipos de letra

Como observamos en el artículo [Texto y tipos de letra](/es/docs/Learn/CSS/Styling_text/Fundamentals), puedes controlar los tipos de letra que aplicas a tu HTML con la propiedad {{cssxref ("font-family")}}. Este atributo toma uno o más nombres de familia de tipos de letra y el navegador recorre esta lista hasta que encuentra un tipo de letra disponible en el sistema en el que se ejecuta:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

Este sistema funciona bien, pero las opciones de tipo de letra tradicionales de los desarrolladores web eran limitadas. Solo hay un puñado de tipos de letra que puedes garantizar que están disponibles en todos los sistemas comunes: las llamadas [fuentes seguras para la web](/es/docs/Learn/CSS/Styling_text/Fundamentals#Familia_de_tipos_de_letras). Puedes usar la lista de tipos de letra para especificar cuáles prefieres, seguido de alternativas seguras para la web y del tipo de letra predeterminado del sistema. El problema es que esto añade trabajo extra en términos de pruebas para asegurarte de que tus diseños se ven bien con cada tipo de letra, etc.

## Tipografías web

Hay una alternativa, sin embargo, que funciona muy bien hasta con versiones posteriores a la versión 6 de Internet Explorer. Las tipografías web son una función del CSS que te permite especificar los archivos de tipo de letra que se van a descargar junto con tu sitio web a medida que el usuario acceda a ellos, lo que significa que cualquier navegador que admita tipografías web puede disponer de los tipos de letra que especificas. ¡Increíble! Observa a continuación la sintaxis que se necesita.

En primer lugar, tienes un bloque {{cssxref ("@font-face")}} al comienzo del CSS, que especifica los archivos de los tipos de letra que quieres que se descarguen:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff");
}
```

A continuación, puedes usar el nombre de la familia de tipos de letra especificado en `@font-face` para aplicar tu tipo de letra personalizado a cualquier elemento que desees:

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

La sintaxis es un poco más compleja; más adelante la veremos más detalladamente.

Hay dos cosas importantes a tener en cuenta acerca de las tipografías web:

1. Los navegadores admiten diferentes formatos de tipos de letra, por lo que necesitarás más de un formato de tipos de letra para conseguir una compatibilidad decente entre navegadores. Por ejemplo, la mayoría de los navegadores modernos admiten WOFF/WOFF2 (Web Open Font Format, versiones 1 y 2), el formato más eficiente disponible. Pero las versiones antiguas de Internet Explorer solo admiten tipos de letra con formato EOT (Embedded Open Type) y es posible que debas incluir una versión SVG del tipo de letra para soportar versiones antiguas de navegadores iPhone y Android. A continuación te mostraremos cómo generar el código necesario.
2. Generalmente las fuentes no son de uso gratuito. Debes pagar por ellas y/o respetar otras condiciones de licencia, como acreditar al creador del tipo de letra en el código (o en tu sitio web). Los tipos de letra no deben robarse, ni debes utilizarlos sin otorgar a su creador el crédito apropiado.

> **Nota:** ¡Los tipos de letra seguros para web como tecnología han sido compatibles con Internet Explorer desde su versión 4!

## Aprendizaje activo: Un ejemplo de tipo de letra seguro para web

Con esto en mente, vamos a construir un ejemplo básico de uso de un tipo de letra seguro para web a partir de los principios básicos. Es difícil hacer un ejemplo de demostración de este aspecto con un ejemplo en vivo incrustado, por lo tanto, nos gustaría que siguieses los pasos que se detallan en las secciones siguientes para que te hagas una idea de cómo funciona el proceso.

Como punto de partida hay que utilizar los archivos [web-font-start.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.html) y [web-font-start.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.css) a los que añadir tu código (véase el [ejemplo en vivo](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)). Haz una copia de estos archivos en un directorio nuevo de tu equipo. En el archivo `web-font-start.css`, encontrarás un poco de CSS para trabajar con el aspecto y los tipos de letra básicos del ejemplo.

### Encontrar tipos de letra

Para este ejemplo, utilizaremos dos tipografías web: una para los títulos de encabezado y otra para el texto base. Para empezar, hay que encontrar los archivos que contienen el tipo de letra. Los tipos de letra se crean en estudios de diseño y se guardan en diversos formatos de archivo. En general, hay tres tipos de sitios donde puedes obtener fuentes:

- Un distribuidor gratuito de tipos de letra: Es un sitio web que pone a disposición tipos de letra para descargar de forma gratuita (aunque puede haber algunas condiciones de licencia, como la acreditación del creador del tipo de letra). Algunos ejemplos de sitios web donde puedes encontrar tipos de letra gratis son [Font Squirrel](https://www.fontsquirrel.com/), [dafont](http://www.dafont.com/) y [Everything Fonts](https://everythingfonts.com/).
- Un distribuidor de fuentes de pago: En este sitio web puedes encontrar tipos de letra a cambio de un precio, dos ejemplos son [fonts.com](http://www.fonts.com/) o [myfonts.com](http://www.myfonts.com/). También puedes comprar tipos de letra directamente de estudios de diseño, por ejemplo, [Linotype](https://www.linotype.com/), [Monotype](http://www.monotype.com), o [Exljbris](http://www.exljbris.com/).
- Un servicio de tipos de letra en línea: Es un sitio que guarda y te sirve los tipos de letra, lo que te facilita todo el proceso. Consulta la sección [Los servicios de tipos de letra en línea](#los_servicios_de_tipos_de_letra_en_línea) para obtener más información.

Vamos a ver algunos tipos de letra. Ve a [Font Squirrel](https://www.fontsquirrel.com/) y elige dos tipos de letra: uno que te resulte agradable e interesante para los títulos (quizá una buena tipografía de tipo Display o Slab Serif), y otro un poco menos llamativo y más legible para los párrafos. Cuando encuentres los tipos de letra, pulsa el botón de descarga y guarda el archivo en el mismo directorio que los archivos HTML y CSS que guardaste anteriormente. No importa si son TTF (True Type Fonts) u OTF (Open Type Fonts).

En cada caso, descomprime el paquete de tipos de letra (las tipografías web generalmente se distribuyen en archivos ZIP que contienen los archivos con el tipo de letra y la información de la licencia). En el paquete puede haber más de un archivo con tipos de letra: algunos tipos de letra se distribuyen por familias, con diferentes variantes disponibles, por ejemplo: _thin_, _medium_, _bold_, _italic_, _thin italic_, etc. Para este ejemplo, solo queremos que te quedes con un solo archivo de fuente para cada opción.

> **Nota:** En la sección «Encontrar tipos de letra» en la columna de la derecha, puedes hacer clic en las diferentes etiquetas y clasificaciones para filtrar las opciones.

### Generar el código

Ahora deberás generar el código que necesitas (y aplicar el estilo al tipo de letra). Para cada tipo de letra, sigue estos pasos:

1. Asegúrate de cumplir con todos los requisitos de la licencia, sobre todo si vas a usarlo en un proyecto comercial y/o en una web.
2. Ve a [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) de Fontsquirrel.
3. Sube tus dos archivos de tipo de letra con el botón _Cargar Fuentes_.
4. Marca la casilla de verificación con el texto «Sí, las fuentes que elijo pueden utilizarse legalmente para una página web».
5. Haz clic en _Descarga tu paquete_.

Una vez que el generador haya finalizado el procesamiento, deberías obtener un archivo ZIP para descargar; guárdalo en el mismo directorio que tus archivos HTML y CSS.

### El código de tu ejemplo de demostración

En este punto, descomprime el paquete con los tipos de letra web que acabas de generar. En el directorio descomprimido verás tres elementos útiles:

- Las distintas versiones de cada tipo de letra, por ejemplo: `.ttf`, `.woff`, `.woff2`, etc.; los tipos de letra exactos proporcionados se actualizarán con el tiempo a medida que cambien los requisitos técnicos del navegador. Como se ya hemos dicho, se necesita más de un tipo de letra para garantizar la compatibilidad entre navegadores: esta es la forma en que Fontsquirrel se asegura de que tengas todo lo que necesitas.
- Un archivo HTML con un ejemplo de demostración para cada tipo de letra: cárgalos en tu navegador para ver cómo se ve la fuente en diferentes contextos de uso.
- Un archivo `stylesheet.css`, que contiene el código @font-face que necesitas.

Para implementar estos tipos de letra en tu ejemplo de demostración, sigue estos pasos:

1. Cambia el nombre del directorio descomprimido a algo fácil y simple, como `fonts`.
2. Abre el archivo `stylesheet.css` y copia los dos bloques `@font-face` incluidos en tu archivo `web-font-start.css`. Debes ponerlos en la parte superior, antes de cualquier elemento CSS, ya que los tipos de letra deben importarse antes que los puedas utilizar en tu sitio web.
3. Cada una de las funciones `url()` apunta a un archivo de tipo de letra que tenemos que importar a nuestro CSS. Necesitamos asegurarnos de que las rutas a los archivos son correctas, así que añade `fonts/` al inicio de cada ruta (ajusta la ruta como sea necesario).
4. Ahora puedes usar estos tipos de letra en tu lista de tipos de letra, al igual que cualquier tipo de letra seguro o predeterminado del sistema. Por ejemplo:

   ```css
   font-family: "zantrokeregular", serif;
   ```

Con tu ejemplo de demostración, deberías obtener una página con unos agradables tipos de letra. Debido a que los tipos de letra se crean en diferentes tamaños, es posible que tengas que ajustar el tamaño, el espaciado, etc., para conseguir una apariencia más ordenada.

![](web-font-example.png)

> **Nota:** Si tienes problemas para lograr que esto funcione, no dudes en comparar tu versión con nuestros archivos terminados, consulta [web-font-finished.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.html) y [web-font-finished.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.css) ([ejecuta el ejemplo terminado en vivo](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html)).

## Los servicios de tipos de letra en línea

Los servicios de tipos de letra en línea en general guardan tipos de letra y los proporcionan a los usuarios, por lo que no tienes que preocuparte por escribir el código `@font-face`, solo necesitas insertar una o dos sencillas líneas de código en tu sitio web para que todo funcione. Los ejemplos incluyen [Adobe Fonts](https://fonts.adobe.com/) y [Cloud.typography](http://www.typography.com/cloud/welcome/). La mayoría de estos servicios se basan en suscripciones de pago, con la excepción notable de [Google Fonts](https://www.google.com/fonts), un servicio gratuito y muy útil, sobre todo para trabajos de prueba rápida y escritura de ejemplos de demostración.

La mayoría de estos servicios son fáciles de usar, por lo que no vamos a exponerlos en gran detalle. Vamos a echar un vistazo rápido a las fuentes de Google, para que te hagas una idea. De nuevo, usa copias de `web-font-start.html` y `web-font-start.css` como punto de partida.

1. Ve a [Google Fonts](https://www.google.com/fonts).
2. Usa los filtros del lado izquierdo para indicar los tipos de letra que deseas escoger y elige un par de tipos de letra que te gusten.
3. Para seleccionar una familia de tipos de letra, pulsa el botón ⊕ que encontrarás al lado.
4. Cuando hayas elegido las familias de tipos de letra, pulsa la barra _\[número] familias seleccionadas_ que encontrarás en la parte inferior de la página.
5. En la pantalla resultante, primero debes copiar la línea de código HTML que se muestra y pegarla en el encabezado de tu archivo HTML. Ponlo encima del elemento {{HTMLElement("link")}}, de modo que el tipo de letra se importe correctamente antes de intentar utilizarlo en tu CSS.
6. Luego, debes copiar las declaraciones CSS enumeradas en tu CSS según corresponda para aplicar los tipos de letra personalizados a tu HTML.

> **Nota:** Puedes encontrar una versión completa en [google-font.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.html) y [google-font.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.css), si necesitas comparar tu trabajo con el nuestro ([consúltalo en vivo](http://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)).

## @font-face con más detalle

Vamos a explorar que la sintaxis correspondiente a `@font-face` que te ha generado Fontsquirrel. Uno de los bloques se verá así:

```css
@font-face {
  font-family: "ciclefina";
  src: url("fonts/cicle_fina-webfont.eot");
  src:
    url("fonts/cicle_fina-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/cicle_fina-webfont.woff2") format("woff2"),
    url("fonts/cicle_fina-webfont.woff") format("woff"),
    url("fonts/cicle_fina-webfont.ttf") format("truetype"),
    url("fonts/cicle_fina-webfont.svg#ciclefina") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Esto se conoce como «sintaxis @font-face a prueba de balas» desde una publicación de Paul Irish, en los tiempos en que `@font-face` empezaba a popularizarse ([Bulletproof @font-face Syntax](http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)). Vamos a ver qué hace:

- `font-family`: Esta línea especifica el nombre con el que vas a referirte a la fuente. Puedes poner el que quieras, siempre y cuando lo uses de manera coherente a lo largo de tu CSS.
- `src`: Estas líneas especifican las rutas de acceso a los archivos de tipos de letra para que puedas importarlos a tu CSS (la parte `URL`) y el formato de cada archivo de tipo de letra (la parte `format`). La última parte en cada caso es opcional, pero es útil declararla porque permite que los navegadores encuentren más rápido un tipo de letra que puedan usar. Se pueden enumerar varias declaraciones, separadas por comas: el navegador buscará por ellas y usará la primera que encuentre. Por lo tanto, es mejor poner formatos nuevos y mejores, como WOFF2 y formatos más antiguos, no tan buenos, como TTF. La única excepción son las fuentes EOT: se colocan primero para corregir un par de errores en versiones anteriores de Internet Explorer, por lo que intentará usar lo primero que encuentre, incluso si realmente no puede usar la fuente.
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: Estas líneas especifican qué grueso tiene el tipo de letra y si se muestra en cursiva o no. Si vas a importar diversos grosores del mismo tipo de letra, puedes especificar cuál es su grueso/estilo y luego usar valores de {{cssxref("font-weight")}} / {{cssxref("font-style")}} diferentes para elegir entre ellos, en lugar de tener que llamar a todos los diferentes miembros de la familia de tipos de letra con nombres distintos. [@tip-face tip: define font-weight and font-stile to keep your CSS simple](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) de Roger Johansson muestra qué hacer con más detalle.

> **Nota:** También puedes especificar los valores particulares {{cssxref ("font-variant")}} y {{cssxref ("font-stretch")}} para tus tipos de letra seguros para web. En los navegadores más nuevos también puedes especificar un valor {{cssxref ("unicode-range")}}, que es un rango de caracteres específicos que debes usar aparte del tipo de letra seguro para web en los navegadores que incluyan esta opción. Solo se descargaran los caracteres especificados y te ahorrarás descargas innecesarias. [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/) de Drew McLellan proporciona algunas ideas útiles sobre cómo hacer uso de todo esto.

## Tipos de letra variables

Los navegadores disponen hoy de una tecnología de tipos de letra reciente llamada tipos de letra variables: se trata de tipos de letra que permiten incorporar muchas variaciones diferentes de un tipo de letra en un solo archivo, en lugar de tener un archivo separado para cada ancho, grosor o estilo. Es demasiado avanzado para nuestro curso para principiantes, pero si te apetece avanzar y echarles un vistazo, lee nuestra [guía de tipos de letra variables](/es/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide).

## Resumen

Ahora que has leído nuestros artículos sobre nociones de aplicación de estilo al texto, es hora de evaluar cuánto has retenido del módulo a partir de la creación de una composición tipográfica de una página de inicio de una escuela comunitaria.

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
