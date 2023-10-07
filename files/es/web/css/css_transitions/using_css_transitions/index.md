---
title: Transiciones de CSS
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{ SeeCompatTable() }}

Las transiciones CSS, parte del borrador de la especificación CSS3, proporcionan una forma de animar los cambios de las propiedades CSS, en lugar de que los cambios surtan efecto de manera instantánea. Por ejemplo, si cambias el color de un elemento de blanco a negro, normalmente el cambio es instantáneo. Al habilitar las transiciones CSS, el cambio sucede en un intervalo de tiempo que puedes especificar, siguiendo una curva de aceleración que puedes personalizar.

> **Nota:** como la especificación de las transiciones CSS todavía se encuentra en fase de borrador, a todas las propiedades asociadas con ellas se les añade el prefijo "-moz-" para usarse en Gecko. Para la compatibilidad con WebKit, se aconseja usar también el prefijo "-webkit-" y para la compatibilidad con Opera, el prefijo "-o-". Es decir, por ejemplo, la propiedad de transición se especificaría como `-moz-transition`, `-webkit-transition` y `-o-transition`.

## Las propiedades de transición CSS

Las transiciones CSS se controlan mediante la propiedad abreviada {{ cssxref("transition") }}. Es preferible utilizar este método porque de esta forma se evita que la longitud de la lista de parámetros sea diferente, lo que puede dar lugar a tener que emplear un tiempo considerablemente largo en depurar el código CSS.

Puedes controlar los componentes individuales de la transición usando las siguientes subpropiedades:

- {{ cssxref("transition-property") }}
  - : Especifica el nombre o nombres de las propiedades CSS a las que deberían aplicarse las transiciones. Sólo las propiedades que se enumeran aquí son animadas durante las transiciones; los cambios en el resto de las propiedades suceden de manera instantánea como siempre.
- {{ cssxref("transition-duration") }}
  - : Especifica la duración en la que sucederán las transiciones. Puedes especificar una única duración que se aplique a todas las propiedades durante la transición o valores múltiples que permitan a cada propiedad de transición un período de tiempo diferente.
- {{ cssxref("transition-timing-function") }}
  - : Especifica la curva cúbica bézier que se usa para definir cómo se computan los valores intermedios para las propiedades.
- {{ cssxref("transition-delay") }}
  - : Define el tiempo de espera entre el momento en que se cambia una propiedad y el inicio de la transición.

## Detectar la finalización de una transición

Hay un único acontecimiento que se desencadena cuando se completan las transiciones. En Firefox, el evento es `transitionend`, en Opera, `OTransitionEnd` y en WebKit es `webkitTransitionEnd`. Consulta la tabla de compatibilidades al final de la página si deseas más información. El evento `transitionend` ofrece dos propiedades:

- `propertyName`
  - : Una cadena que indica el nombre de la propiedad CSS cuya transición se completó.
- `elapsedTime`
  - : Un float que indica el número de segundos que la transición se había estado ejecutando en el momento en que el acontecimiento se desencadenó. Este valor no está afectado por el valor de {{ cssxref("transition-delay") }}.

Como es habitual, puedes usar el método {{ domxref("element.addEventListener()") }} para monitorizar este acontecimiento:

```
el.addEventListener("transitionend", updateTransition, true);
```

> **Nota:** el evento "transitionend" no se dispara si la transición se anula debido a que el valor de la propiedad de animación es modificado antes de que la transición se complete.

## Propiedades que pueden ser animadas

Las transiciones y las animaciones CSS pueden usarse para animar las siguientes propiedades.

> **Nota:** el conjunto de propiedades que puede animarse está sujeto a cambios, por lo tanto se recomienda evitar incluir cualquier propiedad en la lista que no anime porque en un futuro podría provocar resultados inesperados.

| Propiedad                                                       | Tipo de valor                                                                                             |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{ cssxref("background-color") }}                               | {{cssxref("&lt;color&gt;")}}                                                                              |
| {{ cssxref("background-image") }}                               | solo degradado; no está implementado en Firefox (see [Error 536540 en Firefox](https://bugzil.la/536540)) |
| {{ cssxref("background-position") }}                            | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("background-size") }}                                | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("border-color") }} (including sub-properties)        | {{cssxref("&lt;color&gt;")}}                                                                              |
| {{ cssxref("border-radius") }} (including sub-properties)       | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("border-width") }} (including sub-properties)        | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("border-spacing") }}                                 | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("bottom") }}                                         | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("-moz-box-flex") }}                                  | número                                                                                                    |
| {{ cssxref("box-shadow") }}                                     | sombra                                                                                                    |
| {{ cssxref("color") }}                                          | {{cssxref("&lt;color&gt;")}}                                                                              |
| {{ cssxref("-moz-column-count") }}                              | número                                                                                                    |
| {{ cssxref("-moz-column-gap") }}                                | {{cssxref("&lt;length&gt;")}}, palabras clave                                                             |
| {{ cssxref("-moz-column-rule-color") }}                         | {{cssxref("&lt;color&gt;")}}                                                                              |
| {{ cssxref("-moz-column-rule-width") }}                         | {{cssxref("&lt;length&gt;")}}, palabras clave                                                             |
| {{ cssxref("-moz-column-width") }}                              | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("clip") }}                                           | rectágulo                                                                                                 |
| {{ svgattr("fill") }}                                           | pintar                                                                                                    |
| {{ svgattr("fill-opacity") }}                                   | valor de opacidad                                                                                         |
| {{ svgattr("flood-color") }}                                    | {{cssxref("&lt;color&gt;")}} \| palabras clave                                                            |
| {{ cssxref("font-size") }}                                      | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("font-size-adjust") }}                               | números, palabras clave                                                                                   |
| {{ cssxref("font-stretch") }}                                   | palabras clave                                                                                            |
| {{ cssxref("font-weight") }}                                    | números\| palabras clave (excluyendo `bolder`, `lighter`)                                                 |
| {{ cssxref("height") }}                                         | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("-moz-image-region") }}                              | `rect()`                                                                                                  |
| {{ cssxref("left") }}                                           | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("letter-spacing") }}                                 | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ svgattr("lighting-color") }}                                 | {{cssxref("&lt;color&gt;")}} \| palabras clave                                                            |
| {{ cssxref("line-height") }}                                    | número \| {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                              |
| {{ cssxref("margin") }} (including sub-properties)              | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("marker-offset") }}                                  | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("max-height") }}                                     | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("max-width") }}                                      | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("min-height") }}                                     | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("min-width") }}                                      | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("opacity") }}                                        | número                                                                                                    |
| {{ cssxref("outline-color") }}                                  | {{cssxref("&lt;color&gt;")}}                                                                              |
| {{ cssxref("outline-offset") }}                                 | entero                                                                                                    |
| {{ cssxref("-moz-outline-radius") }} (including sub-properties) | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("outline-width") }}                                  | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("padding") }} (including sub-properties)             | {{cssxref("&lt;length&gt;")}}                                                                             |
| {{ cssxref("right") }}                                          | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ svgattr("stop-color") }}                                     | {{cssxref("&lt;color&gt;")}} \| palabras clave                                                            |
| {{ svgattr("stop-opacity") }}                                   | valor de opacidad                                                                                         |
| {{ svgattr("stroke") }}                                         | pintar                                                                                                    |
| {{ svgattr("stroke-dasharray") }}                               | dasharray                                                                                                 |
| {{ svgattr("stroke-dashoffset") }}                              | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ svgattr("stroke-miterlimit") }}                              | miterlimit                                                                                                |
| {{ svgattr("stroke-opacity") }}                                 | valor de opacidad                                                                                         |
| {{ svgattr("stroke-width") }}                                   | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("text-indent") }}                                    | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("text-shadow") }}                                    | sombra                                                                                                    |
| {{ cssxref("top") }}                                            | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("-moz-transform-origin") }}                          | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}, keywords                              |
| {{ cssxref("-moz-transform") }}                                 | transform-function                                                                                        |
| {{ cssxref("vertical-align") }}                                 | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}, palabras clave                        |
| {{ cssxref("visibility") }}                                     | visibilidad                                                                                               |
| {{ cssxref("width") }}                                          | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("word-spacing") }}                                   | {{cssxref("&lt;percentage&gt;")}} \| {{cssxref("&lt;length&gt;")}}                                        |
| {{ cssxref("z-index") }}                                        | entero                                                                                                    |

## Cuando las listas de valores de propiedades tienen longitudes diferentes

Si cualquier lista de valores de propiedades es más corta que las otras, sus valores se repiten para hacer que coincidan. Por ejemplo:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Se considera como si fuera:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

De manera similar, si cualquier lista de valores de propiedades es más larga que la de {{ cssxref("transition-property") }}, se trunca, de forma que si tienes la siguiente CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Se interpreta como:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

## Funciones de intervalos de transición

Las funciones de intervalos determinan el cálculo de los valores intermedios de la transición. La función de intervalo puede especificarse proporcionando el gráfico de la función correspondiente, como lo definen los cuatro puntos que definen una cúbica bézier:

![](transition-timing-function.png)

En lugar de especificar directamente una bézier, existen valores de intervalos predeterminados:

- **ease**, equivalente a `cubic-bezier(0.25, 0.1, 0.25, 1.0)`
- **linear**, equivalente a `cubic-bezier(0.0, 0.0, 1.0, 1.0)`
- **ease-in**, equivalente a `cubic-bezier(0.42, 0, 1.0, 1.0)`
- **ease-out**, equivalente a `cubic-bezier(0, 0, 0.58, 1.0)`
- **ease-in-out**, equivalente a `cubic-bezier(0.42, 0, 0.58, 1.0)`

## Ejemplos

### Una muestra del efecto de transición

Este sencillo ejemplo proporciona demostraciones de distintos efectos de transición sin excesivos adornos.

En primer lugar, el HTML para crear los elementos sobre los que probaremos nuestras transiciones:

```
<ul>
  <li id="long1">Transición larga, gradual...</li>
  <li id="fast1">Transición muy rápida...</li>
  <li id="delay1">Transición larga de un minuto de retraso...</li>
  <li id="easeout">Usar intervalos de alejamiento...</li>
  <li id="linear">Usar intervalos lineales...</li>
  <li id="cubic1">Usar cúbica bézier(0.2, 0.4, 0.7, 0.8)...</li>
</ul>
```

Cada elemento tiene su propia id.; la CSS se encarga del resto. Veamos un par de ejemplos.

#### Usar un retraso

Este ejemplo realiza una transición de tamaño de fuente de cuatro segundos con dos segundos de retraso entre el momento en que el usuario pasa el ratón por encima del elemento y el comienzo del efecto de animación:

```
#delay1 {
  position: relative;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 14px;
}

#delay1:hover {
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 36px;
}
```

#### Usar una función de intervalos de transición lineales

De manera predeterminada, la función de intervalos que se usa para computar los pasos intermedios durante la secuencia de animación proporciona una curva suave de aceleración y desaceleración para el efecto de animación. Si prefieres que el efecto mantenga una velocidad constante a lo largo de la animación, puedes especificar que deseas usar la función de intervalos de transición `linear`, tal y como se muestra a continuación.

```
transition-timing-function: linear;
```

Existen distintas funciones de intervalos estándares disponibles; consulta {{ cssxref("transition-timing-function") }} para tener más detalles.

#### Especificar una función de intervalos cúbicos bézier

Puedes controlar aún más el intervalo de la secuencia de animación si especificas tu propia curva cúbica bézier que describe la velocidad de animación. Por ejemplo:

```
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);
```

Establece una función de intervalo con una curva bézier definida por los puntos (0.0, 0.0), (0.2, 0.4), (0.7, 0.8) y (1.0, 1.0).

### Menús de resaltado

Un uso común de CSS es resaltar elementos de un menú mientras el usuario desplaza el cursor del ratón por encima de ellos. Es fácil usar las transciones para hacer que el efecto sea aún más atractivo.

Antes de que miremos los fragmentos de código, tal vez desees [echar un vistazo a la demo en vivo](http://developer.mozilla.org/samples/cssref/transitions/sample2/) (suponiendo que tu navegador admita transiciones). También puedes echar un [vistazo directamente a la CSS](http://developer.mozilla.org/samples/cssref/transitions/sample2/transitions.css) que usa.

Primero configuramos el menú usando HTML:

```
<div class="sidebar">
  <p><a class="menuButton" href="home">Inicio</a></p>
  <p><a class="menuButton" href="about">Acerca de</a></p>
  <p><a class="menuButton" href="contact">Contacto Us</a></p>
  <p><a class="menuButton" href="links">Vínculos</a></p>
</div>
```

Después construimos la CSS para implementar el aspecto de nuestro menú. Las porciones relevantes se muestran a continuación:

```
.menuButton {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  -webkit-transition-property: background-color, color;
  -webkit-transition-duration: 1s;
  -o-transition-property: background-color, color;
  -o-transition-duration: 1s;
  text-align: left;
  background-color: grey;
  left: 5px;
  top: 5px;
  height: 26px;
  color: white;
  border-color: black;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  -moz-box-shadow: 2px 2px 1px black;
  padding: 2px 4px;
  border: solid 1px black;
}

.menuButton:hover {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  -webkit-transition-property: background-color, color;
  -webkit-transition-duration: 1s;
  -o-transition-property: background-color, color;
  -o-transition-duration: 1s;
  background-color:white;
  color:black;
  -moz-box-shadow: 2px 2px 1px black;
}
```

Esta CSS establece el aspecto del menú con los colores de fondo y del texto que cambian cuando el elemento está en su estado {{ cssxref(":hover") }}.

En lugar de describir el efecto con todo detalle, puedes echar un [vistazo a la muestra en vivo](/samples/cssref/transitions/sample2) si tu navegador admite transiciones (Firefox y WebKit nightlies, Opera 10.5).

### Usar eventos de transición para animar un objeto

En este ejemplo, una pequeña caja con texto dentro se mueve hacia atrás y hacia delante a través de la pantalla y los colores de fondo y del texto se difuminan entre dos valores mientras tiene lugar la animación.

```html hidden
<video
  controls
  autoplay
  src="https://developer.mozilla.org/samples/cssref/transitions/sample1/transitiondemo1.ogv"></video>
```

{{EmbedLiveSample}}

Antes de que miremos los fragmentos de código, tal vez desees [echar un vistazo a la demo en vivo](http://developer.mozilla.org/samples/cssref/transitions/sample1/) (suponiendo que tu navegador admita transiciones). También puedes echar un [vistazo directamente a la CSS](http://developer.mozilla.org/samples/cssref/transitions/sample1/transitions.css) que usa.

#### El HTML

El HTML para este ejemplo es muy sencillo:

```
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Transition Demo</title>
    <link rel="stylesheet" href="transitions.css" type="text/css">
    <script src="transitions.js" type="text/javascript"></script>
  </head>
  <body onload="runDemo()">
    <div class="slideRight">¡Esto es una caja!</div>
  </body>
</html>
```

Lo único que hay que observar aquí es que establecemos la clase para nuestra caja en "slideRight" inicialmente y cuando el documento haya terminado de cargarse, se ejecuta la función `runDemo()` del código JavaScript.

#### La CSS

Para crear nuestro efecto de animación, usamos dos clases de CSS, "slideRight" y "slideLeft". Si deseas ver el código completo de CSS, puedes mirar el archivo [`transitions.css`](/samples/cssref/transitions/sample1/transitions.css) en su totalidad. A continuación se muestran sólo los trozos relevantes:

```
.slideRight {
  position: absolute;
  transition-property: background-color, color, left;
  transition-duration: 5s;
  -webkit-transition-property: background-color, color, left;
  -webkit-transition-duration: 5s;
  -o-transition-property: background-color, color, left;
  -o-transition-duration: 5s;
  background-color: red;
  left: 0%;
  color: black;
}
```

Observa que aquí especificamos de manera explícita la propiedad de posición. Esto es necesario porque sólo aquellos elementos cuya propiedad de posición se defina de manera expresa pueden animar su posición.

La propiedad {{ cssxref("transition-property") }} se usa para enumerar las propiedades CSS que deseamos animar. En este caso, las propiedades que se van a animar son {{ cssxref("background-color") }}, {{ cssxref("color") }} y {{ cssxref("left") }}. La propiedad {{ cssxref("transition-duration") }} indica que deseamos que la animación tarde 5 segundos desde que comienza hasta que termina.

Se incluyen los equivalentes WebKit y Opera para permitir que el ejemplo funcione en el software correspondiente.

La clase "slideRight" se usa para especificar el punto de inicio para que la animación desplace el elemento desde el borde izquierdo hasta el borde derecho de la ventana del navegador. Como tal, define la posición y el color del elemento cuando está al principio de la secuencia de animación; concretamente, el valor para su propiedad {{ cssxref("left") }} es 0%, lo que indica que comenzará en el borde izquierdo de la ventana.

Se muestra a continuación la clase "slideLeft", que define el punto final de la animación, es decir, el punto en el que concluirá la animación de izquierda a derecha y cambiaremos a una animación de derecha a izquierda.

```
.slideLeft {
  position: absolute;
  transition-property: background-color, color, left;
  transition-duration: 5s;
  -webkit-transition-property: background-color, color, left;
  -webkit-transition-duration: 5s;
  -o-transition-property: background-color, color, left;
  -o-transition-duration: 5s;
  text-align: center;
  background-color: blue;
  left: 90%;
  color: white;
  width: 100px;
  height: 100px;
}
```

Los valores de color aquí se han cambiado para hacer que los colores de fondo y del texto cambien durante el tiempo de la secuencia de animación. Además de esto, la propiedad {{ cssxref("left") }} está aquí al 90%.

#### El código JavaScript

Una vez que hemos establecido los extremos de la secuencia de animación, lo que tenemos que hacer es iniciar la animación. Podemos hacerlo fácilmente usando JavaScript.

> **Nota:** una vez que [la compatibilidad para las animaciones](http://dev.w3.org/csswg/css3-animations/) CSS esté disponible, el código JavaScript no será necesario para lograr este efecto.

En primer lugar, la función `runDemo()` que se llama cuando el documento se carga para inicializar la secuencia de animación:

```
function runDemo() {
  var el = updateTransition();

  // Configurar un controlador de eventos para invertir la dirección
  // cuando finalice la transición.

  el.addEventListener("transitionend", updateTransition, true);
}
```

Es bastante sencillo: llama a la función `updateTranslation()` que definiremos enseguida, cuyo trabajo es establecer la clase para el elemento que estamos animando según la dirección en la que queramos que viaje. A continuación configura un proceso de escucha de evento para observar el evento "transitionend" que se envía cuando se completa una transición; esto nos permite saber cuándo es el momento para cambiar la clase del elemento para revertir la dirección de la animación.

La función `updateTransition()` tiene este aspecto:

```
function updateTransition() {
  var el = document.querySelector("div.slideLeft");

  if (el) {
    el.className = "slideRight";
  } else {
    el = document.querySelector("div.slideRight");
    el.className = "slideLeft";
  }

  return el;
}
```

Esto ubica el elemento que estamos animando al buscarlo por su nombre de clase (aquí podríamos usar una id, por supuesto, pero seguidme la corriente). En primer lugar buscamos el nombre de la clase "slideLeft". Si se encuentra, cambiamos la clase del elemento a "slideRight". Esto iniciará la transición de derecha a izquierda, puesto que es el momento de que se deslice a la izquierda si el elemento está ya en el borde derecho, que será cuando llegue el evento "transitionend" y la clase del elemento sea "slideLeft" (se deslice a la izquierda).

Si no se halla ningún elemento que coincida con la clase "slideLeft", buscamos el elemento que coincida con "slideRight" y cambiamos su clase a "slideLeft", comenzando de ese modo la animación en la dirección contraria.

## Consultar también

- [Módulo de transiciones CSS nivel 3](http://www.w3.org/TR/css3-transitions)
- {{ cssxref("-moz-transition") }}
- {{ cssxref("-moz-transition-property") }}
- {{ cssxref("-moz-transition-duration") }}
- {{ cssxref("-moz-transition-timing-function") }}
- {{ cssxref("-moz-transition-delay") }}
