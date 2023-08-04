---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) es un método de diseño de página unidimensional para compaginar elementos en filas o columnas. Los elementos de contenido se ensanchan para rellenar el espacio adicional y se encogen para caber en espacios más pequeños. En este artículo expondremos todas sus características básicas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Los conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a usar el sistema de compaginación con elementos flexbox para
        crear compaginaciones web.
      </td>
    </tr>
  </tbody>
</table>

## ¿Por qué flexbox?

Durante mucho tiempo, las únicas herramientas fiables con compatibilidad cruzada entre navegadores disponibles para crear diseños CSS fueron cosas como la [flotación](/es/docs/Learn/CSS/CSS_layout/Floats) y el [posicionamiento](/es/docs/Learn/CSS/CSS_layout/Positioning). Están bien y funcionan, pero de alguna manera también limitan bastante y frustran.

Con tales herramientas resulta difícil, si no imposible, lograr obtener en cualquier forma conveniente y flexible un diseño de página sencillo con unos requisitos como los siguientes:

- Centrar verticalmente un bloque de contenido dentro de su elemento padre.
- Hacer que todos los elementos secundarios de un contenedor ocupen una cantidad igual del ancho/alto disponible, independientemente del ancho/alto que haya disponible.
- Hacer que todas las columnas en una compaginación en columnas múltiples adopten la misma altura incluso si contienen cantidades diferentes de contenido.

Como verás en las secciones siguientes, los elementos flexbox facilitan mucho algunas tareas de compaginación. ¡Vamos a profundizar en ello!

## Presentación de un ejemplo sencillo

En este artículo, te guiaremos por una serie de ejercicios para ayudarte a comprender cómo funcionan los elementos flexbox. Para comenzar, debes hacer una copia local del primer archivo de inicio [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html) de nuestro repositorio de GitHub. Cárgalo en un navegador moderno (como Firefox o Chrome) y echa un vistazo al código en tu editor de código. Puedes [verlo en vivo aquí](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

Verás que hay un elemento {{htmlelement ("header")}} con un encabezado de nivel superior en él, y un elemento {{htmlelement ("section")}} que contiene tres elementos {{htmlelement ("article")}}. Los usaremos para crear una compaginación bastante habitual de tres columnas.

![](flexbox-example1.png)

## Especificar qué elementos colocar como cajas flexibles

Para comenzar, vamos a seleccionar qué elementos se van a presentar como cajas flexibles. Para ello, establecemos un valor especial de {{cssxref ("display")}} en el elemento padre de los elementos que deseas editar. En este caso, queremos compaginar los elementos {{htmlelement ("article")}}, por lo que lo establecemos en {{htmlelement ("section")}} (que se convierte en un contenedor flexible):

```css
section {
  display: flex;
}
```

Esto hace que el elemento `<section>` se convierta en **contenedor flex**, y sus hijos en **elementos flexibles**. El resultado de esto debería ser algo así:

![](flexbox-example2.png)

Así, esta declaración única nos da todo lo que necesitamos. Increíble, ¿verdad? Tenemos nuestra compaginación en columnas múltiples con columnas de igual tamaño, y todas las columnas tienen la misma altura. Esto se debe a que los valores por defecto que se han asignado a los elementos flexibles (los elementos secundarios del contenedor flexible) están pensados para resolver problemas comunes como este. Veremos más sobre el tema más adelante.

Para que quede claro, reiteremos lo que está sucediendo aquí. El elemento al que le hemos dado un valor de {{cssxref("display")}} de `flex` actúa como un elemento a nivel de bloque en términos de cómo interactúa con el resto de la página, pero sus elementos secundarios se presentan como elementos flexibles. La siguiente sección explicará con más detalle qué significa esto. Ten en cuenta también que puede usar un valor de `display` de `inline-flex` si desea diseñar los elementos secundarios de un elemento como elementos flexibles, pero hacer que ese elemento se comporte como un elemento en línea.

## El modelo flexible

Cuando los elementos se presentan como cajas flexibles, se distribuyen con respecto a dos ejes:

![](flex_terms.png)

- El **eje principal** (**main axis**) es el eje que corre en la dirección en que se colocan los elementos flexibles (por ejemplo, según se disponen las filas en una página o hacia abajo según se disponen las columnas en una página). El inicio y el final de este eje se denominan **inicio principal** (**main start**) y **final principal** (**main end**).
- El **eje transversal** (**cross axis**) es el eje que corre perpendicular a la dirección en la que se colocan los elementos flexibles. El inicio y el final de este eje se denominan **inicio transversal** (**cross start**) y **extremo cruzado** (**cross end**).
- El elemento padre que tiene establecido `display: flex` (el elemento {{htmlelement ("section")}} en nuestro ejemplo) se llama **contenedor flexible**.
- Los elementos que se presentan como cajas flexibles dentro del contenedor flexible se denominan **elementos flexibles** (son los elementos {{htmlelement ("article")}} de nuestro ejemplo).

Ten presente esta terminología al avanzar por las secciones posteriores. Si en algún momento te confundes con el uso de estos conceptos, siempre puedes volver atrás a consultarlos.

## ¿Columnas o filas?

Los elementos flexbox proporcionan una propiedad llamada {{cssxref ("flex-direction")}} que especifica en qué dirección corre el eje principal (en qué dirección están dispuestos los elementos hijo de un elemento flexbox); por defecto, está establecido en el valor `row`, por lo que se presenta en una fila en la dirección en que se escribe el idioma predeterminado de tu navegador (de izquierda a derecha, en el caso de un navegador en español).

Añade la declaración siguiente a tu regla {{htmlelement ("section")}}:

```css
flex-direction: column;
```

Observa que esto vuelve a colocar los elementos en una disposición en columna, al igual que antes de añadir cualquier CSS. Antes de continuar, elimina esta declaración de tu ejemplo.

> **Nota:** También puedes compaginar elementos flexibles en una dirección inversa utilizando los valores `row-reverse` y `column-reverse`. ¡Experimenta también con estos valores!

## Delimitar

Un problema que surge cuando tienes una cantidad fija de ancho o alto en tu diseño es que los hijos de un elemento flexbox eventualmente desbordan el contenedor y rompen el diseño. Echa un vistazo a nuestro ejemplo [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html) e intenta [verlo en vivo](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (toma una copia local de este archivo si deseas seguir este ejemplo):

![](flexbox-example3.png)

Aquí vemos que los elementos hijo se salen de su contenedor. Una forma de solucionar esto es añadir la declaración siguiente a tu regla {{htmlelement ("section")}}:

```css
flex-wrap: wrap;
```

Añade también la declaración siguiente a tu regla {{htmlelement ("article")}}:

```css
flex: 200px;
```

Pruébalo; observa que al haberlo incluido el aspecto de la compaginación resulta mucho más agradable:

![](flexbox-example4.png) Ahora hay varias filas y en cada fila caben tantos elementos hijo de un elemento flexbox como sean necesarios, y cualquier desbordamiento hace saltar el elemento hacia la línea siguiente. La declaración `flex: 200px` que hemos establecido en los artículos significa que cada uno tendrá al menos 200 px de ancho; discutiremos esta propiedad con más detalle más adelante. Observa también que los últimos elementos hijo de la última fila se agrandan hasta rellenar toda la fila.

Pero aquí podemos hacer mucho más. En primer lugar, cambia el valor de tu propiedad {{cssxref ("flex-direction")}} a `row-reverse`; ahora verás que todavía tienes tu compaginación en diversas filas, pero comienza desde la esquina opuesta de la ventana del navegador y fluye al revés.

## Propiedades abreviadas de flex-flow

En este punto vale la pena señalar que hay una propiedad abreviada para {{cssxref ("flex-direction")}} y {{cssxref ("flex-wrap")}}: {{cssxref ("flex-flow")}}. Así, por ejemplo, puedes reemplazar:

```css
flex-direction: row;
flex-wrap: wrap;
```

con

```css
flex-flow: row wrap;
```

## Dimensionamiento flexible de elementos flexibles

Volvamos ahora a nuestro primer ejemplo y veamos cómo podemos controlar qué proporción de espacio ocupan los elementos flexibles. Inicia tu copia local de [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html) o toma una copia de [flexbox1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) como nuevo punto de partida ([consúltalo en vivo](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Primero, añade la regla siguiente al final de tu CSS:

```css
article {
  flex: 1;
}
```

Este es un valor de proporción sin unidades que especifica la cantidad de espacio disponible sobre el eje principal que ocupa cada elemento flexible. En este caso, damos a cada elemento {{htmlelement ("article")}} un valor de 1, lo que significa que todos ocuparán una cantidad igual del espacio libre restante después de que se hayan establecido elementos como el área de relleno y el margen. Es una proporción, lo que significa que dar a cada elemento flexible un valor de 400000 tendría exactamente el mismo efecto.

Ahora añade la regla siguiente debajo de la anterior:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Al actualizar verás que el tercer {{htmlelement ("article")}} ocupa ahora el doble del ancho disponible que los otros dos; ahora hay cuatro unidades de proporción disponibles en total. Los primeros dos elementos flexibles tienen una cada uno, por lo que ocupan 1/4 del espacio disponible cada uno. El tercero tiene dos unidades, por lo que ocupa 2/4 del espacio disponible (o 1/2).

También puedes especificar un valor de tamaño mínimo dentro del valor flexible. Actualiza las reglas para tu artículo de la manera siguiente:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Esto establece básicamente que «a cada elemento flexible se le da primero 200px del espacio disponible. Después de eso, el resto del espacio disponible se reparte de acuerdo con las unidades de proporción». Actualiza y observa de qué modo se reparte ahora el espacio.

![](flexbox-example1.png)

El valor real del elemento flexbox se puede ver en su flexibilidad/adaptabilidad: si cambias el tamaño de la ventana del navegador o añades otro elemento {{htmlelement ("article")}}, el diseño continúa funcionando bien.

## flex: forma completa y abreviada

{{cssxref ("flex")}} es una propiedad abreviada que puede especificar hasta tres valores diferentes:

- El valor de proporción sin unidades que ya hemos comentado. Se puede especificar individualmente usando la propiedad {{cssxref ("flex-grow")}}.
- Un segundo valor de proporción sin unidades, {{cssxref ("flex-shrink")}}, que entra en juego cuando los elementos flexibles desbordan el contenedor. Especifica cuánto de la cantidad desbordada se quita al tamaño de cada elemento flexible para evitar que el contenedor se desborde. Esta es una característica bastante avanzada de flexbox, y no la vamos a exponer en detalle en este artículo.
- El valor de tamaño mínimo que ya hemos visto. Se puede especificar individualmente usando el valor {{cssxref ("flex-basis")}}.

Recomendamos no usar las propiedades flex sin abreviar a menos que realmente tengas que hacerlo (por ejemplo, para anular algo establecido previamente). Comportan mucho código añadido y suelen aportar confusión.

## Alineación horizontal y vertical

También puedes usar las funciones de los elementos flexbox para alinear elementos flexibles sobre el eje principal o transversal. Exploremos este aspecto a partir de un ejemplo nuevo: [flex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html) ([consúltalo en vivo](http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)), que vamos a convertir en una barra de herramientas/botones ordenada y flexible. En este momento puedes ver una barra de menú horizontal, con algunos botones pegados en línea a la esquina superior izquierda.

![](flexbox-example5.png)

Primero, toma una copia local de este ejemplo.

Ahora, añade a la parte inferior del CSS del ejemplo lo siguiente:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

Actualiza la página y observa que los botones ahora están convenientemente centrados, horizontal y verticalmente. Lo hemos hecho a partir de dos propiedades nuevas.

{{cssxref ("align-items")}} controla dónde se ubican los elementos flexibles en el eje transversal.

- Por defecto, el valor es `stretch`, que ensancha todos los elementos flexibles para rellenar el elemento primario en la dirección del eje transversal. Si el elemento padre no tiene un ancho fijo en la dirección del eje transversal, todos los elementos flexibles son tan largos como los elementos flexibles más largos. Así es como nuestro primer ejemplo obtuvo columnas de igual altura por defecto.
- El valor `center` que utilizamos en nuestro código anterior mantiene las dimensiones intrínsecas de los elementos pero los centra sobre el eje transversal. Es por eso que los botones de nuestro ejemplo ahora están centrados verticalmente.
- También puedes tener valores como `flex-start` y `flex-end`, que alinean todos los elementos al inicio y al final del eje transversal, respectivamente. Consulta {{cssxref ("align-items")}} para conocer todos los detalles al respecto.

Puedes anular el comportamiento {{cssxref ("align-items")}} para elementos flexibles individuales aplicándoles la propiedad {{cssxref ("align-self")}}. Por ejemplo, añade a tu CSS lo siguiente:

```css
button:first-child {
  align-self: flex-end;
}
```

Observa qué efecto tiene esto y retíralo de nuevo al terminar.

{{cssxref ("justify-content")}} controla dónde se ubican los elementos flexibles sobre el eje principal.

- El valor por defecto es `flex-start`, que asienta todos los elementos al comienzo del eje principal.
- Puedes usar `flex-end` para que se asienten al final.
- `center` también es un valor de `justify-content` (para alinear contenido), que asienta los elementos flexibles sobre el centro del eje principal.
- El valor `space-around` que hemos usado antes es útil porque distribuye todos los elementos de manera uniforme sobre el eje principal y deja un poco de espacio en cada extremo.
- Hay otro valor, `space-between`, que es muy similar a `space-around`, pero no deja espacio en los extremos.

Te animamos a jugar con estos valores para ver cómo funcionan antes de continuar.

## Ordenar los elementos flexibles

Los elementos flexbox también tienen una función para cambiar el orden de disposición de los elementos flexibles, sin que ello afecte a su orden en el código fuente. Esto es algo que resulta imposible de hacer con los métodos de compaginación tradicionales.

El código para esto es simple: añade el siguiente CSS al código de ejemplo de la barra de controles:

```css
button:first-child {
  order: 1;
}
```

Actualiza, y observa que el botón «Smile» se ha movido al final del eje principal. Observemos cómo funciona esto con un poco más de detalle:

- Por defecto, todos los elementos flexibles tienen un valor {{cssxref ("order")}} de 0.
- Los elementos flexibles que tengan establecidos los valores de orden más altos aparecerán más tarde en el orden de visualización que los elementos que tengan valores de orden más bajos.
- Los artículos flexibles con el mismo valor de orden aparecerán en su orden de origen. Luego, si hay cuatro elementos cuyos valores de orden se han establecido en 2, 1, 1 y 0, respectivamente, su orden de visualización será 4°, 2°, 3° y, por último, 1°.
- El tercer elemento aparece después del segundo porque tiene el mismo valor de orden y está después de él en el orden del código de origen.

Puedes establecer valores de orden negativos para que los elementos aparezcan antes que los elementos establecidos con el valor 0. Por ejemplo, puedes hacer que el botón «Blush» aparezca al comienzo del eje principal utilizando la regla siguiente:

```css
button:last-child {
  order: -1;
}
```

## Cajas flexibles anidadas

Los elementos flexbox permiten crear algunos diseños de página bastante complejos. Es perfectamente aceptable configurar un elemento flexible para que también sea un contenedor flexible, de modo que los elementos secundarios también se dispongan como cajas flexibles. Echa un vistazo a complex-flexbox.html ([consúltalo en vivo](http://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![](flexbox-example7.png)

El HTML para ello es bastante simple. Hay un elemento {{htmlelement ("section")}} que contiene tres elementos {{htmlelement ("article")}}. El tercer elemento {{htmlelement ("article")}} contiene tres elementos {{htmlelement ("div")}}:

```
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Veamos el código que hemos usado para esta compaginación.

En primer lugar, configuramos los elementos secundarios de {{htmlelement ("section")}} para que se presenten como cajas flexibles.

```css
section {
  display: flex;
}
```

A continuación, establecemos algunos valores flexibles en los elementos {{htmlelement ("article")}}. Presta una atención especial a la segunda regla: configuramos el tercer elemento {{htmlelement ("article")}} para que sus hijos también se presenten como elementos flexibles, pero esta vez los disponemos en una columna.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

A continuación, seleccionamos el primer elemento {{htmlelement ("div")}}. Primero usamos `flex:1 100px;` para darle una altura mínima efectiva de 100 px, luego configuramos sus elementos secundarios (los elementos {{htmlelement ("button")}}) para que también se presenten como elementos flexibles. Aquí los colocamos en una fila que los delimita y los alineamos en el centro del espacio disponible, como hicimos en el ejemplo del botón individual que vimos antes.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Por último, establecemos un tamaño para el botón, pero lo más interesante es que le damos un valor flexible de 1 auto. Esto tiene un efecto muy interesante, que puedes observar si cambias el tamaño del ancho de la ventana de tu navegador. Los botones ocuparán tanto espacio como puedan y se asentarán tantos en la misma línea como quepan, pero cuando ya no quepan con comodidad en la misma línea, saltarán de línea y crearán líneas nuevas.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Compatibilidad entre navegadores

La compatibilidad de los elementos flexbox está garantizada para la mayoría de los navegadores nuevos: Firefox, Chrome, Opera, Microsoft Edge e Internet Explorer 11, las versiones más recientes de Android/iOS, etc. Sin embargo, todavía hay navegadores antiguos en uso que no admiten las propiedades flexbox (o lo hacen, pero admiten una versión muy antigua y desactualizada).

Esto no importa demasiado mientras estás aprendiendo y experimentando; pero cuando consideras usar propiedades flexbox en un sitio web real, debes hacer pruebas y asegurarte de que tu experiencia de usuario sea lo suficientemente aceptable en tantos navegadores como sea posible.

Las propiedades flexbox son un poco más complicadas que otras características de CSS. Por ejemplo, si un navegador no soporta sombras en CSS, es probable que el sitio todavía sea utilizable. Sin embargo, si no es compatible con las funciones flexbox, probablemente el diseño completo se romperá, y el sitio web se inutilizará.

Expusimos estrategias para superar problemas de compatibilidad entre navegadores en nuestro módulo [Pruebas de compatibilidad del navegador](/es/docs/Learn/Herramientas_y_pruebas/Cross_browser_testing).

## Pon a prueba tus habilidades

Hemos cubierto mucho terreno en este artículo. ¿Recuerdas la información más importante? Encontrarás más pruebas para comprobar si retienes esta información antes de seguir en [Test your skills: Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox_skills).

## Resumen

Con esto concluye nuestro recorrido por los conceptos básicos de las propiedades flexbox. Esperamos que te hayas divertido y que juegues con ello mientras avanzas en tu aprendizaje. A continuación, veremos otro aspecto importante de los diseños CSS: las rejillas CSS.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
