---
title: Valores y unidades CSS
slug: Learn/CSS/Building_blocks/Values_and_units
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

Todas las propiedades que se utilizan en CSS tienen un valor o un conjunto de valores que esa propiedad admite, y echar un vistazo a cualquier página de propiedades en MDN te ayudará a comprender qué valores admite una propiedad en particular. En este artículo veremos algunos de los valores y unidades más comunes en uso.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a href="/es/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Conocer los diferentes tipos de valores y unidades que admiten las
        propiedades CSS.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un valor CSS?

En las especificaciones CSS y en las páginas de propiedades de este proyecto MDN, podrás detectar los valores porque estarán escritos entre corchetes angulares, como [`<color>`](/es/docs/Web/CSS/color_value) o [`<length>`](/es/docs/Web/CSS/length). Cuando veas que el valor `<color>` es válido para una propiedad en particular, significa que para esa propiedad puedes usar como valor cualquier color válido de entre los que se enumeran en la página de referencia de la propiedad [`<color>`](/es/docs/Web/CSS/color_value).

> **Nota:** También verás valores CSS denominados _tipos de datos_. Los términos son básicamente intercambiables: cuando veas algo en CSS denominado 'tipo de datos', en realidad es solo una forma elegante de decir 'valor'.

> **Nota:** Sí, hay una tendencia de denotar los valores CSS entre corchetes angulares, para diferenciarlos de las propiedades CSS (por ejemplo, la propiedad {{cssxref ("color")}} con respecto al tipo de dato [\<color>](/es/docs/Web/CSS/color_value)). Aunque podría generarte confusión entre los tipos de datos CSS y los elementos HTML, porque ambos usan corchetes angulares, es poco probable porque se usan en contextos muy diferentes.

En el ejemplo siguiente hemos establecido el color de nuestro encabezado con una palabra clave y el fondo con la función `rgb()`:

```css
h1 {
  color: black;
  background-color: rgb(197, 93, 161);
}
```

Un valor en CSS es una forma de definir una colección de subvalores admitidos. Esto significa que si ves `<color>` como válido, no necesitas preguntarte cuáles de los diferentes tipos de valor de color puedes usar: palabras clave, valores hexadecimales, funciones `rgb()`, etc. Puedes usar _cualquier_ valor `<color>` disponible siempre que tu navegador lo admita. La página de MDN te dará información sobre lo que admite cada navegador para cada valor. Por ejemplo, puedes ver que en la sección de compatibilidad de navegadores de la página para [`<color>`](/es/docs/Web/CSS/color_value) se enumeran diferentes tipos de valores de color y los navegadores que los admiten.

Echemos un vistazo a algunos de los tipos de valores y unidades con los que puedes encontrar con frecuencia, con ejemplos para que puedas probar diferentes valores posibles.

## Números, longitudes y porcentajes

Al utilizar CSS te puedes encontrar con varios tipos de datos numéricos. Todos los siguientes están clasificados como tipos de datos numéricos:

| Tipo de datos                                 | Descripción                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integer>`](/es/docs/Web/CSS/integer)       | Un `<integer>` es un número entero, como `1024` o `-55`.                                                                                                                                                                                                                                                                                                                                  |
| [`<number>`](/es/docs/Web/CSS/number)         | Un `<number>` representa un número decimal; puede tener o no un punto de separación decimal con un componente fraccionario, por ejemplo: `0.255`, `128` o `-1.2`.                                                                                                                                                                                                                         |
| `<dimension>`                                 | Una `<dimension>` es un `<number>` con una unidad asociada, por ejemplo: `45deg` (grados), `5s` (segundos) o `10px` (píxeles). `<dimension>` es una categoría general que incluye los tipos [`<length>`](/es/docs/Web/CSS/length), [`<angle>`](/es/docs/Web/CSS/angle), [`<time>`](/es/docs/Web/CSS/time) y [`<resolution>`](/es/docs/Web/CSS/resolution)[.](/es/docs/Web/CSS/resolution) |
| [`<percentage>`](/es/docs/Web/CSS/percentage) | Un `<percentage>` representa una fracción de algún otro valor, por ejemplo, `50%`. Los valores de porcentaje siempre son relativos a otra cantidad, por ejemplo, la longitud de un elemento es relativa a la longitud de su elemento padre.                                                                                                                                               |

### Longitudes

El tipo numérico con el que te vas a encontrar con mayor frecuencia es `<length>`, por ejemplo, `10px` (píxeles) o `30em`. En CSS se utilizan dos longitudes diferentes: relativa y absoluta. Es importante conocer la diferencia para entender qué dimensiones van a tener las cosas.

#### Unidades de longitud absoluta

Todas las unidades siguientes son unidades de longitud **absoluta**: no son relativas a nada más y en general se considera que siempre tienen el mismo tamaño.

| Unidad | Nombre                | Equivale a          |
| ------ | --------------------- | ------------------- |
| `cm`   | Centímetros           | 1cm = 96px/2,54     |
| `mm`   | Milímetros            | 1mm = 1/10 de 1cm   |
| `Q`    | Cuartos de milímetros | 1Q = 1/40 de 1cm    |
| `in`   | Pulgadas              | 1in = 2,54cm = 96px |
| `pc`   | Picas                 | 1pc = 1/6 de 1in    |
| `pt`   | Puntos                | 1pt = 1/72 de 1in   |
| `px`   | Píxeles               | 1px = 1/96 de 1in   |

La mayoría de estos valores son más útiles cuando se usan en una salida en formato impreso que en la salida de pantalla. Por ejemplo, normalmente no usamos `cm` (centímetros) en pantalla. El único valor que usarás de forma frecuente es `px` (píxeles).

#### Unidades de longitud relativa

Las unidades de longitud relativa son relativas a algo más, por ejemplo, al tamaño de letra del elemento principal o al tamaño de la ventana gráfica. La ventaja de usar unidades relativas es que con una planificación cuidadosa puedes lograr que el tamaño del texto u otros elementos escalen en relación con todo lo demás en la página. En la tabla siguiente se enumeran algunas de las unidades más útiles para el desarrollo web.

| Unidad | Relativa a                                                                                                                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | Tamaño de letra del elemento padre, en el caso de propiedades tipográficas como {{cssxref("font-size")}}, y tamaño de la fuente del propio elemento en el caso de otras propiedades, como {{cssxref("width")}}. |
| `ex`   | Altura x de la fuente del elemento.                                                                                                                                                                             |
| `ch`   | La medida de avance (ancho) del glifo "0" de la letra del elemento.                                                                                                                                             |
| `rem`  | Tamaño de la letra del elemento raíz.                                                                                                                                                                           |
| `lh`   | Altura de la línea del elemento.                                                                                                                                                                                |
| `vw`   | 1% del ancho de la ventana gráfica.                                                                                                                                                                             |
| `vh`   | 1% de la altura de la ventana gráfica.                                                                                                                                                                          |
| `vmin` | 1% de la dimensión más pequeña de la ventana gráfica.                                                                                                                                                           |
| `vmax` | 1% de la dimensión más grande de la ventana gráfica.                                                                                                                                                            |

#### Un ejemplo de análisis

En el ejemplo siguiente puedes ver cómo se comportan algunas unidades de longitud relativa y absoluta. La primera caja tiene un ancho ({{cssxref ("width")}}) establecido en píxeles. Como unidad absoluta, este ancho será siempre el mismo aunque lo demás cambie.

La segunda caja tiene un ancho establecido en unidades `vw` (ancho de ventana). Este valor es relativo al ancho de la ventana gráfica, por lo que 10vw es el 10 por ciento del ancho de la ventana gráfica. Si cambiases el ancho de la ventana de tu navegador, el tamaño de la caja cambiaría. Sin embargo, esto no te va a funcionar porque este ejemplo se ha incrustado en la página usando [`<iframe>`](/es/docs/Web/HTML/Element/iframe). Para verlo en acción debes [probar el ejemplo después de abrirlo en una pestaña independiente de tu navegador](https://mdn.github.io/css-examples/learn/values-units/length.html).

La tercera caja utiliza unidades `em`. Son unidades relativas al tamaño de la letra. Hemos establecido un tamaño de fuente de `1em` en el contenido {{htmlelement ("div")}}, que tiene una clase `.wrapper`. Si cambias este valor a `1.5em`, verás que el tamaño de letra de todos los elementos aumenta, pero solo se amplía el ancho en el último elemento, porque el ancho es relativo a ese tamaño de letra.

Después de seguir las instrucciones anteriores, juega un poco más con los valores para ver qué obtienes.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 820)}}

#### ems y rems

`em` y `rem` son las dos longitudes relativas que es probable que encuentres con mayor frecuencia al cambiar el tamaño de cualquier cosa, de cajas a texto. Vale la pena entender cómo funcionan y las diferencias entre ellos, especialmente cuando comienzas a abordar temas más complejos como [aplicar estilos a texto](/es/docs/Learn/CSS/Styling_text) o [compaginar con CSS](/es/docs/Learn/CSS/CSS_layout). El ejemplo siguiente te proporciona una muestra.

El HTML es un conjunto de listas anidadas: hay tres listas en total y ambos ejemplos tienen el mismo HTML. La única diferencia es que el primero tiene una clase _ems_ y el segundo una clase _rems_.

Para empezar, configuramos un tamaño de letra de 16px en el elemento `<html>`.

**En definitiva, la unidad _em_ significa «el tamaño de letra de mi elemento padre»**. Los elementos {{htmlelement ("li")}} dentro de un elemento {{htmlelement ("ul")}} con una clase de `ems` toman el tamaño con respecto a su elemento padre. Por lo tanto, en cada nivel de anidamiento sucesivo, el tamaño de letra aumenta progresivamente, porque en cada uno el tamaño de letra está establecido en `1.3em` (1,3 veces el tamaño de letra de su elemento padre).

**En definitiva, la unidad _rem_ significa «el tamaño de letra del elemento raíz»**. ('rem' viene de «root em»). Los elementos {{htmlelement ("li")}} dentro de un elemento {{htmlelement ("ul")}} con una clase de `rems` toman su tamaño del elemento raíz (`<html>`). Esto significa que el tamaño de letra no aumenta en cada nivel sucesivo de anidamiento.

Sin embargo, si cambias el atributo `font-size` de `<html>` en el CSS, verás que todo lo demás cambia en relación con él, tanto la letra cuyo tamaño está especificado en unidades `rem` como la que lo está en unidades `em`.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1000)}}

### Porcentajes

En muchos casos, un porcentaje es tratado de la misma manera que una longitud. Lo que sucede con los porcentajes es que siempre se establecen en relación con otro valor. Por ejemplo, si estableces el atributo `font-size` de un elemento como un porcentaje, será un porcentaje del `font-size` del elemento padre. Si usas un porcentaje para un valor `width`, será un porcentaje del atributo `width` del elemento padre.

En el ejemplo siguiente, las dos cajas con el tamaño especificado en unidades de porcentaje y las dos cajas con el tamaño especificado en unidades de píxel tienen los mismos nombres de clase. En ambos conjuntos de cajas, los anchos de las cajas son de 200 píxeles y de 40%, respectivamente.

La diferencia es que el segundo conjunto de dos cajas está dentro de un contenedor que tiene 400 píxeles de ancho. La segunda caja de 200 px de ancho tiene el mismo ancho que la primera, pero la segunda caja de 40% ahora es el 40% de 400 px, ¡mucho más estrecha que la primera!

**Cambia el ancho del contenedor o el valor de porcentaje para ver cómo funciona.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 850)}}

El ejemplo siguiente tiene tamaños de letra establecidos en porcentajes. Cada elemento `<li>` tiene un atributo `font-size` del 80%, por lo tanto, los elementos de la lista anidada se vuelven progresivamente más pequeños a medida que heredan su tamaño del elemento padre.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 650)}}

Observa que aunque muchos valores admiten unidades de longitud o porcentaje, algunos solo admiten unidades de longitud. Puedes ver qué valores admite cada propiedad en las páginas de referencia correspondientes del proyecto MDN. Si el valor admitido incluye [`<length-percentage>`](/es/docs/Web/CSS/length-percentage), puedes usar una unidad de longitud o un porcentaje. Si el valor admitido solo incluye `<length>`, no es posible utilizar un porcentaje.

### Números

Algunos valores aceptan números sin ninguna unidad asociada. Un ejemplo de una propiedad que acepta un número sin unidades es la propiedad `opacity`, que controla la opacidad de un elemento (cuán transparente es). Esta propiedad admite un número entre `0` (totalmente transparente) y `1` (totalmente opaco).

**En el ejemplo siguiente, asigna al valor de `opacity` diversos valores decimales entre `0` y `1` para ver cómo la caja y su contenido cambian su opacidad.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 500)}}

> **Nota:** Cuando en CSS utilizas un número como valor, no debe estar entre comillas.

## Color

En CSS hay muchas formas de especificar el color, algunas de las cuales se implementaron más recientemente que otras. En todas partes en CSS se pueden usar los mismos valores de color, tanto para especificar el color del texto como el color de fondo, o de cualquier otra cosa.

El sistema de colores estándar disponible en los ordenadores modernos es de 24 bits, lo que permite visualizar aproximadamente 16,7 millones de colores distintos a partir de una combinación de diferentes canales de rojo, verde y azul con 256 valores diferentes por canal (256 x 256 x 256 = 16.777.216). Echemos un vistazo a algunas de las formas en que podemos especificar colores en CSS.

> **Nota:** En este artículo vamos a ver los métodos comunes para especificar colores que admiten los navegadores; hay otros métodos no tan comunes que no admiten todos los navegadores.

### Palabras clave para los colores

Muy a menudo, en los ejemplos de este artículo o en cualquier otra página de MDN, verás que se utilizan las palabras clave para los colores, ya que son una forma simple y comprensible de especificar colores. Hay una multitud de estas palabras clave, ¡algunas de las cuales tienen nombres de lo más curiosos! Puedes ver una lista completa en la página para el valor [`<color>`](/es/docs/Web/CSS/color_value).

**Juega con diferentes valores de color en los ejemplos en vivo que encontrarás a continuación, para adquirir una idea más clara de cómo funcionan.**

### Los valores hexadecimales RGB

El siguiente tipo de valores de color que es probable que encuentres son los códigos hexadecimales. Cada valor hexadecimal consiste en un símbolo de hashtag/almohadilla (#) seguido de seis cifras hexadecimales, cada una de las cuales puede tomar uno de los 16 valores entre el 0 y la f (que representa el 15), por ejemplo: `0123456789abcdef`. Cada par de cifras representa uno de los canales (rojo, verde y azul) y nos permite especificar cualesquiera de los 256 valores disponibles para cada uno (16 x 16 = 256).

Estos valores son un poco más complejos y menos fáciles de entender, pero son mucho más versátiles que las palabras clave: puedes usar valores hexadecimales para representar cualquier color que desees usar en tu combinación de colores.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 700)}}

**Una vez más, cambia los valores para ver cómo varían los colores.**

### Valores RGB y RGBA

El tercer esquema del que hablaremos aquí es RGB. Un valor RGB es una función `rgb()` que recibe tres parámetros que representan los valores de los canales rojo, verde y azul del color, de modo muy similar a los valores hexadecimales. La diferencia con RGB es que cada canal está representado no por dos dígitos hexadecimales, sino por un número decimal entre el 0 y el 255, lo que de algún modo resulta algo más fácil de entender.

Vamos a reescribir nuestro último ejemplo para utilizar colores RGB:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 700)}}

También puedes usar colores RGBA: estos funcionan exactamente de la misma manera que los colores RGB, por lo que puedes usar cualquier valor RGB; sin embargo, hay un cuarto valor que representa el canal alfa del color, que controla la opacidad. Si estableces este valor en `0`, el color será completamente transparente, mientras que en `1` será completamente opaco. Los valores intermedios le confieren diferentes niveles de transparencia.

> **Nota:** Establecer un canal alfa en un color representa una diferencia clave para usar la propiedad {{cssxref ("opacity")}} que vimos anteriormente. Cuando usas la opacidad, el elemento y todo lo que contiene es opaco, mientras que cuando usas colores RGBA, solo son opacos los que especificas.

En el ejemplo siguiente hemos añadido una imagen de fondo al bloque que contiene nuestras cajas de color. También hemos configurado las cajas para que tengan diferentes valores de opacidad: observa que el fondo se muestra más cuanto menor es el valor del canal alfa.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 770)}}

**En este ejemplo, cambia los valores del canal alfa y observa cómo afecta a la salida de color.**

> **Nota:** En algún momento, los navegadores modernos se actualizaron para que `rgba()` y `rgb()`, y `hsl()` y `hsla()` (ver más abajo) se convirtieran en alias puros el uno del otro y comenzaran a comportarse exactamente igual. Así, por ejemplo, tanto `rgba()` como `rgb()` admiten colores con y sin valores de canal alfa. Cambia el `rgba()` del ejemplo anterior por `rgb()` y observa si los colores aún funcionan. El estilo que uses depende de ti, pero separar las definiciones de los colores transparentes y las de los no transparentes con el uso de funciones diferentes mejora la ejecución de los navegadores y puede actuar como un indicador visual de dónde se definen colores transparentes en tu código.

### Los valores HSL y HSLA

Un poco menos compatible que RGB es el modelo de color HSL (no compatible con las antiguas versiones de Internet Explorer), que se implementó después de mucha insistencia por parte de los diseñadores. En lugar de los valores rojo, verde y azul, la función `hsl()` admite valores de matiz, saturación y luminosidad, que se utilizan para distinguir entre los 16,7 millones de colores, pero de una manera diferente:

- **Matiz**: El tono base del color. Toma un valor entre 0 y 360, que representa un ángulo en torno a una rueda de colores.
- **Saturación**: ¿Qué nivel de saturación presenta el color? Esta propiedad toma un valor entre 0 y 100%, en que 0 no es un color (aparece como un tono de gris) y 100% es el nivel de saturación total del color.
- **Luminosidad**: ¿Qué claridad o brillo presenta el color? Este atributo toma un valor entre 0 y 100%, en que 0 es no claro (aparece completamente negro) y 100% es completamente claro (aparece completamente blanco).

Podemos adaptar el ejemplo con colores RGB para usar colores HSL, así:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 700)}}

Al igual que RGB tiene un equivalente RGBA, HSL tiene un equivalente HSLA, que le proporciona la misma capacidad para especificar el canal alfa. Demostramos esto a continuación cambiando nuestro ejemplo RGBA para usar colores HSLA.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 770)}}

Puedes usar cualquiera de estos valores de color en tus proyectos. Es probable que para la mayoría de los proyectos te decidas por una paleta de colores y luego uses esos colores (y tu método elegido para especificar el color) en todo el proyecto. También puedes mezclar y combinar diversos modelos de color, sin embargo, por coherencia, en general es mejor si todo el proyecto usa el mismo.

## Imágenes

El tipo de datos [`<image>`](/es/docs/Web/CSS/image) se usa cuando una imagen es un valor válido. Puede ser un archivo de imagen real al que apunta una función `url()`, o un degradado.

En el ejemplo siguiente mostramos una imagen y un gradiente en uso como un valor para la propiedad CSS `background-image`.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 740)}}

> **Nota:** hay otros valores posibles para `<image>`, pero son más nuevos y aún hay pocos navegadores que los admiten. Consulta la página de MDN para el tipo de dato [`<image>`](/es/docs/Web/CSS/image) si deseas saber más sobre ellos.

## Posición

El tipo de dato [`<position>`](/es/docs/Web/CSS/position_value) representa un conjunto de coordenadas 2D que se utiliza para colocar un elemento, por ejemplo una imagen de fondo (con el atributo [`background-position`](/es/docs/Web/CSS/background-position)). Puede tomar palabras clave como `top`, `left`, `bottom`, `right` y `center` para alinear los elementos con los límites específicos de una caja de dos dimensiones, y también longitudes, que representan desplazamientos desde los bordes superior e izquierdo de la caja.

Un valor de posición típico consta de dos valores: el primero establece la posición horizontal, y el segundo la vertical. Si solo especificas valores para un eje, el otro usará `center` por defecto.

En el ejemplo siguiente hemos colocado una imagen de fondo a 40px de la parte superior, y a la derecha del contenedor con una palabra clave.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 720)}}

**Juega un poco con estos valores y observa cómo cambia la posición de la imagen.**

## Cadenas e identificadores

En los ejemplos anteriores hemos visto casos en que se usan palabras clave como valores (por ejemplo, palabras clave para `<color>`, como `red`, `black`, `rebeccapurple` y `goldenrod`). Estas palabras clave normalmente se describen como _identificadores_, un valor especial que el CSS entiende. Como tales, no se escriben entre comillas (es decir, no se tratan como cadenas).

Hay casos en el CSS en que debes usar cadenas, por ejemplo, [al especificar el contenido que generas](/es/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generar_contenido_con_before_y_after). En este caso, el valor se escribe entre comillas para mostrar que se trata de una cadena de caracteres. En el ejemplo siguiente hemos usado palabras clave para el color, sin entrecomillar, y también una cadena caracteres, de contenido generado, entrecomillada.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 550)}}

## Funciones

El último tipo de valor que vamos a analizar es el grupo de valores conocidos como funciones. En programación, una función es un bloque de código reutilizable que es posible ejecutar varias veces para completar una tarea repetitiva con el mínimo esfuerzo tanto por parte del desarrollador como del ordenador. Las funciones suelen asociarse a lenguajes como JavaScript, Python o C++, pero también hay funciones en CSS, como valores de código propietario. Ya hemos visto funciones en acción en la sección sobre los colores: `rgb()`, `hsl()`, etc. El valor que se utiliza para devolver una imagen de un archivo, en este caso `url()`, también es una función.

Un valor que se comporta más como algo que puedes encontrar en un lenguaje de programación tradicional es la función `calc()`. Esta función te proporciona la capacidad de hacer cálculos simples en tu CSS. Es particularmente útil si deseas calcular valores que no puedes definir al escribir el CSS para tu proyecto y necesitas que el navegador lo haga durante la ejecución.

Por ejemplo, a continuación usamos `calc()` para hacer que la caja tenga `20% + 100px` de ancho. El 20% se calcula a partir del ancho del contenedor principal `.wrapper` y, por lo tanto, cambiará si ese ancho cambia. No podemos hacer este cálculo de antemano porque no sabemos cuál será el 20% del elemento padre, por lo que usamos `calc()` para decirle al navegador que lo haga por nosotros.

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 450)}}

## Pon a prueba tus conocimientos

Hemos cubierto mucho terreno en este artículo. ¿Recuerdas la información más importante? Encontrarás más pruebas para comprobar que retienes esa información antes de seguir en [Test your skills: Values and units](/es/docs/Learn/CSS/Building_blocks/Values_tasks).

## Resumen

Esta ha sido una revisión rápida de los tipos de valores y unidades más comunes que te puedes encontrar. Puedes echar un vistazo a todos los diferentes tipos en la página de referencia de [valores y unidades CSS](/es/docs/Web/CSS/CSS_Values_and_Units); encontrarás muchos de estos mientras trabajas en estos artículos.

Lo que debes recordar es que cada propiedad tiene una lista definida de valores admisibles, y cada valor incluye una definición que explica cuáles son sus subvalores. A continuación puedes buscar los detalles aquí, en MDN.

Por ejemplo, comprender que [`<image>`](/es/docs/Web/CSS/image) también te permite crear un degradado de color es útil, ¡pero quizás no sea un conocimiento obvio!

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
