---
title: Soporte a navegadores antiguos
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

En este módulo recomendamos utilizar Flexbox y Grid como las herramientas principales para tus diseños. Sin embargo, habrá visitantes a tu sitio web que usen navegadores antiguos o navegadores que no admiten los métodos que has utilizado. Este siempre será el caso en la red: a medida que se desarrollan funciones nuevas, los diferentes navegadores priorizan cosas diferentes. Este artículo explica cómo usar técnicas web modernas sin perjudicar a los usuarios con tecnologías más antiguas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender cómo proporcionar compatibilidad para tus diseños en
        navegadores antiguos que podrían no admitir las funciones que deseas
        utilizar.
      </td>
    </tr>
  </tbody>
</table>

## ¿Cuál es la vista del navegador para tu sitio?

Cada sitio web es diferente en términos de público objetivo. Antes de decidir el enfoque a seguir, averigua la cantidad de visitantes que visitan tu sitio que utilizan navegadores antiguos. Esto es sencillo si se trata de un sitio web que simplemente modificas o reemplazas, porque probablemente haya análisis disponibles que te indiquen la tecnología que la gente utiliza. Si el sitio no tiene funciones de análisis o se trata de un sitio nuevo, hay sitios como [Statcounter](http://gs.statcounter.com/) que pueden proporcionar estadísticas filtradas por ubicación.

También debes considerar el tipo de dispositivos y la forma en que las personas usan tu sitio; por ejemplo, puedes esperar un número de dispositivos móviles superior al promedio. La accesibilidad y las personas que utilizan tecnología de asistencia siempre deben tenerse en cuenta, pero para algunos sitios pueden ser aspectos aún más críticos. Según experiencia propia, los desarrolladores a menudo se preocupan demasiado por la experiencia de usuario de un 1% de usuarios que usan una versión antigua de Internet Explorer, y no consideran en absoluto el número mucho mayor de usuarios que tiene necesidades de accesibilidad especiales.

## ¿Qué compatibilidad presentan las funciones que vas a usar?

Una vez conozcas qué tipo de navegadores utiliza la gente que accede a tu sitio, puedes evaluar cualquier tecnología que desees utilizar según su compatibilidad y con qué facilidad es posible proporcionar una alternativa a los visitantes que no disponen de esa tecnología. Tratamos de facilitarte esta experiencia proporcionando información de compatibilidad de los navegadores en cada una de las páginas que detallan una propiedad CSS. Por ejemplo, echa un vistazo a la página de {{cssxref ("grid-template-columns")}}. En la parte inferior de esta página hay una tabla que enumera los navegadores principales, junto con la versión en la que comenzaron a admitir esta propiedad.

![](browser-table.png)

Otra forma popular de averiguar la compatibilidad de una característica es el sitio web [Can I Use](https://caniuse.com/). Este sitio enumera la mayoría de las características de la Plataforma Web con información sobre el estado de compatibilidad de tu navegador. Puedes ver las estadísticas de uso por ubicación, cosa que resulta útil si trabajas en un sitio cuyos usuarios son de un territorio particular. Incluso puedes vincular tu cuenta de Google Analytics para obtener un análisis basado en tus datos de usuario.

Conocer las tecnologías de tus usuarios y las compatibilidades de las funciones que tal vez quieras usar te proporcionan una buena base para tomar todas tus decisiones y saber cuál es la mejor manera de dar compatibilidad a todos tus usuarios.

## Compatibilidad no significa «verse igual»

Es posible que un sitio web no tenga el mismo aspecto en todos los navegadores, porque algunos de tus usuarios lo verán en un teléfono y otros en el ordenador. Del mismo modo, algunos de tus usuarios tendrán una versión antigua del navegador y otros el navegador más reciente. Es posible que algunos de tus usuarios estén escuchando el contenido leído por un lector de pantalla, o hayan ampliado la página para poderla leer. Dar compatibilidad a todos significa servir una versión de tus contenidos diseñada estratégicamente para que se vea genial con los navegadores modernos, pero aún sea utilizable en un nivel básico para los usuarios con navegadores más antiguos.

Un nivel básico de compatibilidad proviene de estructurar bien tus contenidos para que el flujo normal de tu página tenga sentido. Un usuario con un teléfono con funciones muy limitadas puede que no obtenga buena parte de tu CSS, pero el contenido fluirá de una manera que la lectura resulte fácil. Por lo tanto, un documento HTML bien estructurado siempre debe ser tu punto de partida. _¿Tu contenido tiene sentido si eliminas tu hoja de estilo?_

Una opción es dejar esta vista simple del sitio como alternativa para las personas que utilizan navegadores muy antiguos o limitados. Si la cantidad de personas que visitan el sitio con estos navegadores es pequeña, quizá no tenga sentido comercial dedicar tiempo a tratar de proporcionarles una experiencia similar a la de las personas que utilizan navegadores modernos. Sería mejor dedicar el tiempo a cosas que proporcionen accesibilidad al sitio, y servir así a muchos más usuarios. Hay un punto medio entre una página HTML simple y todos esos recursos, y CSS realmente ha logrado que proporcionar estas soluciones alternativas resulte bastante sencillo.

## Crear soluciones alternativas en CSS

Las especificaciones CSS contienen información que explica qué hace el navegador cuando se aplican dos métodos de diseño al mismo elemento. Esto significa que hay una definición de lo que sucede si un elemento flotante, por ejemplo, también es un elemento Grid que usa diseño de cuadrícula CSS. Combina esta información con el conocimiento de que los navegadores ignoran el CSS que no entienden, y tienes una manera de crear diseños simples utilizando las [técnicas heredadas](/es/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) que ya hemos expuesto, que luego se sobrescriben con tu diseño de cuadrícula en los navegadores modernos que lo entienden.

En el ejemplo siguiente hemos especificado tres elementos de flotación `<div>` para que se muestren en una fila. Cualquier navegador que no sea compatible con el método de compaginación [CSS Grid](/es/docs/Learn/CSS/CSS_layout/Grids) verá la hilera de cajas como un diseño con el método de flotación. Un elemento de flotación que se convierte en un elemento de cuadrícula pierde el comportamiento de flotación, lo que significa que al convertir el contenedor en un contenedor de cuadrícula, los elementos de flotación se convierten en elementos de cuadrícula. Si el navegador admite el diseño de cuadrícula, muestra la vista de cuadrícula; si no, ignora las propiedades relacionadas con el diseño de cuadrícula y utiliza el diseño de flotación.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="item">Artículo uno</div>
  <div class="item">Artículo dos</div>
  <div class="item">Artículo tres</div>
</div>
```

{{ EmbedLiveSample('Example1', '100%', '200') }}

> **Nota:** La propiedad {{cssxref ("clear")}} tampoco tiene efecto una vez que el elemento al que se le aplica se convierte en un elemento de cuadrícula, por lo que podrías tener una compaginación con un pie `clear`, que luego pase a ser un elemento de compaginación en cuadrícula.

### Métodos de soluciones alternativas

Numerosos métodos de compaginación se pueden usar de manera similar a este ejemplo con comportamiento de flotación. Puedes elegir el que tenga más sentido para el patrón de compaginación que necesitas crear.

- **`float`** y **`clear`**
  - : dejan de afectar a la compaginación si los elementos afectados por estas propiedades pasan a ser de tipo flexible o de cuadrícula.
- display: inline-block;
  - : Este método se puede utilizar para crear compaginaciones en columnas; si un elemento tiene establecido un comportamiento `display: inline-block` pero se convierte a elemento con compaginación de tipo flexible o de cuadrícula, el comportamiento `inline-block` se ignora.
- display: table;
  - : de estos artículos puede utilizarse como opción alternativa. Los elementos que tienen diseños de tabla CSS pierden este comportamiento si se convierten en elementos con comportamiento flexible o de cuadrícula. Es importante destacar que no se crearán las cajas sin nombre que fueron creadas para arreglar la estructura de tabla.
- Compaginación en columnas
  - : definida y se convierte en un contenedor con comportamiento de cuadrícula, se anula el comportamiento en columnas.
- Flexbox como opción alternativa a la cuadrícula
  - : [Flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox) tiene una compatibilidad mayor con los navegadores que Grid porque es compatible con Internet Explorer 10 y 11, aunque te recomendamos que consultes la información que encontrarás más adelante en este artículo sobre la compatibilidad bastante irregular y confusa de Flexbox en navegadores más antiguos. Si conviertes un contenedor flexible en un contenedor de cuadrícula, se ignorará cualquier propiedad `flex` aplicada a los elementos secundarios.

Observa que si usas el CSS de esta manera puedes proporcionar una experiencia de usuario decente para ajustar muchas compaginaciones en navegadores antiguos. Añadimos una compaginación más simple basada en técnicas antiguas y con buena compatibilidad, y luego usamos el CSS más nuevo para crear la compaginación que va a ver más del 90% de tu público. Sin embargo, hay casos en los que el código alternativo va a tener que incluir algo que también van a interpretar los navegadores nuevos. Un buen ejemplo de esto es si queremos añadir anchos en porcentaje a nuestros elementos de flotación para que el aspecto de las columnas reproduzca mejor la visualización en cuadrícula, expandiendo para llenar el contenedor.

En la compaginación de flotación, el porcentaje se calcula con respecto al contenedor: 33,333% es un tercio del ancho del contenedor. Sin embargo, en el método Grid ese 33,333% se calcula con respecto al área de la cuadrícula en la que el elemento está ubicado, por lo que en realidad se convierte en un tercio del tamaño que queremos una vez que se introduce la compaginación en cuadrícula.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}
```

```html
<div class="wrapper">
  <div class="item">Artículo uno</div>
  <div class="item">Artículo dos</div>
  <div class="item">Artículo tres</div>
</div>
```

{{ EmbedLiveSample('Example2', '100%', '200') }}

Para tratar este problema, necesitamos tener un modo de detectar si Grid es compatible y, por lo tanto, si anulará el ancho. El CSS tiene una solución.

## Consultar las propiedades

Consultar las propiedades te permite comprobar si un navegador admite alguna característica CSS en particular. Esto significa que puedes escribir algunos CSS para navegadores que no admitan una propiedad determinada y luego verificar si el navegador es compatible, y añadir tu elegante diseño de ser así.

Si añadimos al ejemplo anterior una consulta de las propiedades, podemos usarla para volver a establecer a `auto` los anchos de nuestros elementos, si sabemos que hay compatibilidad para la compaginación en cuadrícula.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
    width: auto;
  }
}
```

```html
<div class="wrapper">
  <div class="item">Elemento uno</div>
  <div class="item">Elemento dos</div>
  <div class="item">Elemento tres</div>
</div>
```

{{ EmbedLiveSample('Example3', '100%', '200') }}

La compatibilidad para la consulta de propiedades es muy buena en todos los navegadores modernos, pero debes tener en cuenta que son los navegadores que no admiten CSS Grid los que tampoco admiten la consulta de propiedades. Esto significa que para esos navegadores funcionará un enfoque como el que acabamos de detallar. Lo que hacemos es escribir primero nuestro CSS anterior sin hacer ninguna consulta de propiedades. Los navegadores que no admiten Grid y que no admiten la consulta de propiedades utilizan esa información de diseño que pueden entender e ignoran por completo todo lo demás. Los navegadores que admiten la consulta de propiedades también admiten CSS Grid y, por lo tanto, ejecutan el código de cuadrícula y el código de la consulta de propiedades.

La especificación para la consulta de propiedades también incluye la posibilidad de probar si un navegador no admite una propiedad; esto solo es útil si el navegador admite consultas de propiedades. En el futuro bastará con el enfoque de verificar la falta de compatibilidad, porque los navegadores que no tienen compatibilidad para la consulta de propiedades desaparecen. Por ahora, sin embargo, utiliza el enfoque de usar el CSS anterior y luego sobrescribirlo para obtener la mejor compatibilidad.

## Versiones anteriores de Flexbox

En versiones anteriores de navegadores, puedes encontrar versiones anteriores de la especificación Flexbox. En el momento de escribir esto se trata principalmente de un problema con Internet Explorer 10, que usa el prefijo `-ms-` para Flexbox. Esto también significa que algunos artículos y tutoriales están obsoletos; [esta guía útil](https://css-tricks.com/old-flexbox-and-new-flexbox/) te ayuda a verificarlo y también puede ayudarte si necesitas compatibilidad Flexbox en navegadores muy antiguos.

## La versión prefijada de Grid de Internet Explorer 10 y 11

La especificación CSS Grid se prototipó inicialmente en Internet Explorer 10; esto significa que si bien IE10 e IE11 no tienen compatibilidad de cuadrícula _moderna_, sí tienen una versión de compaginación en cuadrícula, que es muy útil, aunque diferente de la especificación moderna que documentamos en este sitio. Las implementaciones de IE10 y 11 tienen el prefijo `-ms-`, lo que significa que puedes usarlo para estos navegadores y los navegadores que no sean de Microsoft lo ignorarán. Sin embargo, Edge todavía comprende la sintaxis anterior, así que ten cuidado de que todo se sobrescriba de forma segura en tu cuadrícula de CSS moderna.

La guía de [Mejora progresiva en la compaginación en cuadrícula](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement) puede ayudarte a comprender la versión de la cuadrícula de Internet Explorer, y hemos incluido algunos enlaces útiles adicionales al final de este artículo. Sin embargo, a menos que tengas una gran cantidad de visitantes con versiones anteriores de Internet Explorer, puede que te resulte mejor centrarte en crear una reserva que funcione para todos los navegadores no compatibles.

## Pruebas con navegadores antiguos

Dado que la mayoría de los navegadores ya son compatibles con Flexbox y Grid, puede resultar en efecto difícil hacer pruebas con navegadores más antiguos. Una forma es utilizar una herramienta de prueba en línea como Sauce Labs, como se detalla en el módulo de [comprobación de compatibilidad entre navegadores](/es/docs/Learn/Herramientas_y_pruebas/Cross_browser_testing).

También puedes descargar e instalar máquinas virtuales y ejecutar versiones anteriores de navegadores en un entorno de tu propio ordenador. Tener acceso a versiones anteriores de Internet Explorer es particularmente útil, y para ese propósito, Microsoft ha puesto a disposición de los usuarios una [variedad de máquinas virtuales de descarga gratuita](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/). Están disponibles para los sistemas operativos Mac, Windows y Linux, por lo que resultan una manera excelente de hacer pruebas con los navegadores Windows antiguos y modernos, incluso si no utilizas una computadora con sistema Windows.

## Resumen

Ahora tienes el conocimiento para usar con confianza técnicas como Grid y Flexbox, crear soluciones alternativas para navegadores más antiguos y utilizar cualquier técnica nueva que pueda surgir en el futuro.

## Ver también

- [Uso de consultas de propiedades en CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
- [Compatibilidad con versiones anteriores de Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Compaginación en cuadrícula CSS y mejora progresiva](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Uso de CSS Grid: Compatibilidad con navegadores sin comportamiento de cuadrícula](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/)
- [Un tutorial que usa las versiones IE10 y 11 de Grid](https://24ways.org/2012/css3-grid-layout/)
- [¿Debo tratar de usar la implementación IE10 de Grid Layout?](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)
- [Diseño web en cascada con consulta de propiedades](https://24ways.org/2017/cascading-web-design/)
- [Uso de las consultas de propiedades (vídeo)](https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
