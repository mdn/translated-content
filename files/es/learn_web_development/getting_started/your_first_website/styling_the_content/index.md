---
title: "CSS: Dar estilo al contenido"
short-title: Dar estilo al contenido
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets, hojas de estilo en cascada) es el código que da estilo al contenido web. Este artículo te guía para que entiendas lo básico de CSS: cómo funciona y cómo mejorar el aspecto de la estructura de contenido que creaste en el artículo anterior.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, el software básico que usarás para construir un sitio web y los sistemas de archivos.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>El propósito y la función de CSS.</li>
          <li>Las partes básicas de la sintaxis de CSS: conjuntos de reglas, selectores, declaraciones, propiedades y valores de las propiedades.</li>
          <li>Funcionalidades habituales de CSS, como el modelo de caja, cambiar los colores y las fuentes, y posicionar los elementos HTML.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es CSS?

Al igual que HTML, CSS no es un lenguaje de programación. Tampoco es un lenguaje de marcado. **CSS es un lenguaje de hojas de estilo.** CSS se usa para dar estilo a los elementos HTML: seleccionas los elementos a los que quieres dar estilo y estableces valores para sus propiedades de estilo, que definen cómo se verán.

Volvamos al ejemplo básico de HTML del artículo [Crear el contenido](/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content):

```html live-sample___basic-html live-sample___basic-css
<p>Instrucciones para la vida:</p>

<ul>
  <li>Comer</li>
  <li>Dormir</li>
  <li>Repetir</li>
</ul>
```

Por sí solo, se ve así:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Si añadimos algo de CSS, podemos cambiar el aspecto del HTML. El siguiente fragmento selecciona el elemento {{htmlelement("p")}} y le da una [fuente](/es/docs/Web/CSS/Reference/Properties/font-family) distinta y un {{cssxref("color")}} de texto rojo. Después selecciona todos los elementos {{htmlelement("li")}} y le da a cada uno un {{cssxref("background-color")}} amarillo verdoso, un {{cssxref("border")}} negro sólido de 1 píxel y un [margen inferior](/es/docs/Web/CSS/Reference/Properties/margin-bottom) de 5 píxeles:

```css live-sample___basic-css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

Con el CSS aplicado al HTML, la demostración ahora se ve así:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Como ves, con solo un poco de CSS hemos podido cambiar el aspecto de una lista sencilla.

CSS tiene muchas otras funciones, desde especificar imágenes y degradados de fondo, hasta controlar la tipografía y el comportamiento del desplazamiento, añadir animaciones y construir diseños de página web completos.

## Aplicar CSS a tu HTML

Al usar CSS, lo primero que hay que hacer bien es asegurarse de que el CSS se aplica correctamente al HTML. En esta sección, añadiremos una **hoja de estilo** CSS a tu `first-website` y la aplicaremos a tu página.

1. Dentro de tu carpeta `first-website`, crea otra carpeta nueva llamada `styles`.
2. Con un editor de texto, pega el siguiente CSS en un archivo nuevo; dará a tus elementos `<p>` un color de texto rojo. Es útil empezar con algo así para comprobar si tu hoja de estilo se aplica correctamente al HTML.

   ```css
   p {
     color: red;
   }
   ```

3. Guarda el archivo en la carpeta `styles` con el nombre `style.css`.
4. Abre tu archivo `index.html`. Pega la siguiente línea dentro de la cabecera del HTML (entre las etiquetas {{HTMLElement("head")}} y `</head>`):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Guarda `index.html` y cárgalo en tu navegador. Deberías ver algo así:

![Un logotipo de Mozilla y algunos párrafos. Nuestro CSS ha puesto en rojo el texto de los párrafos.](website-screenshot-styled.png)

Si el texto de tus párrafos está en rojo, ¡enhorabuena! Tu CSS funciona. Si no, repasa los pasos anteriores y comprueba con cuidado que has seguido cada uno correctamente.

## Conceptos básicos de la sintaxis de CSS

En el ejemplo de CSS anterior, `p` se llama **selector**: selecciona los elementos a los que se dará estilo. En concreto, `p` selecciona todos los párrafos del HTML. La línea entre llaves (`{ }`) se llama **declaración**: establece un valor para una propiedad concreta. En este caso, la **propiedad** es `color`, que controla el color del texto de los párrafos, y el **valor de la propiedad** establecido es `red`.

La estructura completa se llama **conjunto de reglas**. (Al _conjunto de reglas_ a menudo se le llama simplemente _regla_).

Veamos otro conjunto de reglas, esta vez con varias declaraciones:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Dentro de un conjunto de reglas, tienes que usar un punto y coma (`;`) para separar una declaración de la siguiente. Dentro de cada declaración, tienes que usar dos puntos (`:`) para separar la propiedad de su valor.

También puedes incluir varios selectores en una regla, separados por comas, para seleccionar varios elementos. Por ejemplo:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

En esta regla CSS, hemos incluido un selector de **elemento** (o de **tipo**), que selecciona un elemento HTML concreto. También hemos incluido otros dos tipos de selectores, que no son relevantes para el resto de este tutorial. Si tienes curiosidad por saber qué hacen, consulta nuestra guía de [selectores básicos](/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

> [!NOTE]
> La lección [Write your first lines of CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece una introducción interactiva útil a la sintaxis de CSS.

## Mejorar el texto

Volvamos a nuestro ejemplo y usemos CSS para mejorar el aspecto del texto. Estableceremos una fuente nueva para la página y cambiaremos algunos ajustes de texto de distintos elementos.

1. Primero, busca el [resultado de Google Fonts](/es/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#elegir_una_fuente) que guardaste antes. Si todavía no has elegido una fuente, sigue el enlace y hazlo ahora.
2. Añade los elementos {{htmlelement("link")}} dentro del {{HTMLElement("head")}} de tu `index.html`, justo antes de la etiqueta de cierre `</head>`. Deberían verse más o menos así:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Este código enlaza tu página con una hoja de estilo alojada en el servicio Google Fonts, que carga la fuente que elegiste.

3. A continuación, ve a tu archivo `style.css` y borra la regla existente. Ya no queremos que nuestros párrafos sean rojos.
4. Añade las siguientes líneas a `style.css`:

   ```css
   html {
     /* px significa "píxeles". El tamaño de fuente base ahora mide 10 píxeles de alto */
     font-size: 10px;
     /* Reemplaza PLACEHOLDER por el valor de la propiedad font-family que obtuviste de Google Fonts */
     font-family: PLACEHOLDER;
   }
   ```

   > [!NOTE]
   > Todo lo que en CSS está entre `/*` y `*/` es un **comentario de CSS**, que el navegador ignora. Los comentarios de CSS son una forma de incluir notas útiles sobre tu código o tu lógica sin afectar a cómo se representa tu página web.

5. Reemplaza la línea de marcador de posición de `font-family` por la línea `font-family` de tu código de Google Fonts, por ejemplo:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   La propiedad `font-family` establece las fuentes que quieres aplicar a tu HTML. Esta regla define una fuente base global y un tamaño de fuente para toda la página. Todos los elementos dentro del elemento {{HTMLElement("html")}} heredarán el mismo `font-size` y `font-family`.

6. Ahora vamos a establecer algunos estilos de fuente y de texto en nuestros elementos [`<h1>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}} y {{htmlelement("p")}}. Estableceremos nuevos valores de {{cssxref("font-size")}} para cada elemento. También centraremos el encabezado con {{cssxref("text-align")}} y aumentaremos el {{cssxref("line-height")}} y el {{cssxref("letter-spacing")}} de los párrafos y los elementos de la lista para que el contenido del cuerpo sea más legible.

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

7. Guarda tu código y carga tu HTML en un navegador (recárgalo si ya lo tenías abierto). Tu trabajo en curso debería verse parecido a esto:

   ![Un logotipo de Mozilla y algunos párrafos. Se ha establecido una fuente sans-serif, se han ajustado los tamaños de fuente, la altura de línea y el espaciado entre letras, y el encabezado principal de la página está centrado](website-screenshot-font-small.png)

   > [!NOTE]
   > Prueba a ajustar los valores en `px` hasta conseguir tamaños de fuente que te gusten para el encabezado y el texto del cuerpo.

## En CSS todo son cajas

Algo que notarás sobre CSS a medida que lo uses más es que gran parte trata de cajas. La mayoría de los elementos HTML de una página pueden considerarse cajas que se colocan encima de (o junto a) otras cajas. Puedes establecer valores en estas cajas para el tamaño, el color, el posicionamiento, etc. A esto se le llama [**modelo de caja**](/es/docs/Learn_web_development/Core/Styling_basics/Box_model).

![Tres cajas una dentro de otra. De fuera hacia dentro, están etiquetadas como margin, border y padding](box-model.png)

Cada caja que ocupa espacio en tu página tiene propiedades como:

- {{cssxref("padding")}}: el espacio alrededor del contenido. En el ejemplo anterior, es el espacio alrededor del texto del párrafo.
- {{cssxref("border")}}: la línea sólida justo por fuera del relleno (_padding_).
- {{cssxref("margin")}}: el espacio por fuera del borde.

En esta sección, también usamos las siguientes propiedades, algunas de las cuales ya has visto:

- {{cssxref("width")}}: el ancho de un elemento.
- {{cssxref("background-color")}}: el color detrás del contenido y el relleno de un elemento.
- {{cssxref("color")}}: el color del contenido de un elemento (normalmente, el texto).
- {{cssxref("text-shadow")}}: una sombra paralela en el texto de un elemento.
- {{cssxref("display")}}: el modo de visualización de un elemento (que básicamente se refiere a cómo aparece o se dispone en la página web).

En cada una de las secciones siguientes:

1. Añade el código CSS proporcionado al final de tu archivo `style.css`.
2. Guarda el archivo y recarga el navegador para ver cómo ha afectado el CSS a la representación del HTML.
3. Lee la explicación proporcionada para entender cómo funciona el CSS.
4. Si te sientes aventurero, experimenta cambiando los valores de las propiedades para personalizar aún más tu página.

## Cambiar el color de la página

Añade lo siguiente:

```css
html {
  background-color: #00539f;
}
```

Esta regla establece un color de fondo para toda la página. Cambia el código de color por el color que elegiste en [¿Cuál será la apariencia de tu sitio web?](/es/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#elegir_un_color_de_tema).

## Dar estilo al cuerpo

A continuación, añade esta regla:

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

El código anterior establece nuevos valores para varias propiedades del elemento {{htmlelement("body")}}. Veámoslas línea por línea:

- `width: 600px;`: obliga a que el cuerpo mida siempre 600 píxeles de ancho.
- `margin: 0 auto;`: cuando estableces dos valores en una propiedad como `margin` o `padding`, el primer valor afecta a los lados superior _e_ inferior del elemento (en este caso, los pone a `0`); el segundo valor afecta a los lados izquierdo _y_ derecho. `auto` es un valor especial que reparte el espacio horizontal disponible a partes iguales entre la izquierda y la derecha.
- `background-color: #FF9500;`: establece el color de fondo del elemento. Nuestro proyecto usa un naranja rojizo como color de fondo del `<body>`, para que contraste con el azul oscuro que se usa en el elemento {{htmlelement("html")}}.
- `padding: 0 20px 20px 20px;`: establece cuatro valores de relleno. El objetivo es dejar algo de espacio alrededor del contenido. En este ejemplo, no hay relleno en la parte superior del cuerpo, y hay 20 píxeles a la derecha, abajo y a la izquierda. Los valores establecen el relleno superior, derecho, inferior e izquierdo, en ese orden.
- `border: 5px solid black;`: establece los valores del ancho, el estilo y el color del borde. En este caso, es un borde negro sólido de 5 píxeles de ancho alrededor de todos los lados del cuerpo.

### Un inciso sobre las propiedades abreviadas

Los valores de propiedades CSS que establecen varias propiedades de una vez se llaman **propiedades abreviadas**. Por ejemplo, `padding: 0 20px 20px 20px` equivale a las cuatro propiedades siguientes:

```css
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

> [!NOTE]
> La lección [Margin/padding shorthand](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> es una lección interactiva que ofrece un recorrido práctico por el uso de las propiedades abreviadas de margen y relleno.

## Posicionar y dar estilo al título principal de la página

Ahora añade esto:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Quizá hayas notado un hueco horrible en la parte superior del cuerpo. Ocurre porque los navegadores aplican un estilo predeterminado al elemento `<h1>`. Puede parecer mala idea, pero la intención es dar una legibilidad básica a las páginas sin estilo. Para eliminar el hueco, sobrescribimos el estilo predeterminado del navegador con el ajuste `margin: 0;`.

Después, establecemos el relleno superior e inferior del encabezado en 20 píxeles, y hacemos que el texto del encabezado tenga el mismo color que el color de fondo del HTML.

Por último, `text-shadow` aplica una sombra al contenido de texto del elemento:

- El primer valor en píxeles establece el **desplazamiento horizontal** de la sombra respecto al texto: cuánto se desplaza hacia el lado.
- El segundo valor en píxeles establece el **desplazamiento vertical** de la sombra respecto al texto: cuánto se desplaza hacia abajo.
- El tercer valor en píxeles establece el **radio de desenfoque** de la sombra. Un valor mayor produce una sombra más difuminada.
- El cuarto valor establece el color base de la sombra.

## Centrar la imagen

Por último, inserta esta regla:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

A continuación, centramos la imagen para que se vea mejor. Podemos usar el mismo truco de `margin: 0 auto` que usamos para el cuerpo, pero hay diferencias que exigen un ajuste adicional para que el CSS funcione.

El elemento {{htmlelement("body")}} es un elemento de **bloque**, lo que significa que ocupa espacio en la página y admite márgenes, relleno y otras propiedades de caja. En cambio, los elementos {{htmlelement("img")}} (imagen) son elementos **en línea**: de forma predeterminada, no admiten los valores de margen igual que los elementos de bloque. Para que el truco del margen automático funcione en esta imagen, tenemos que darle un comportamiento de bloque con `display: block;`.

Por último, establecemos la propiedad {{cssxref("max-width")}} en `100%` para asegurarnos de que, si la imagen es más grande que el `width` establecido en el cuerpo (600 píxeles), se limite a `600px` y no se estire más.

> [!NOTE]
> No te preocupes demasiado si no entiendes del todo `display: block;` y las diferencias entre un elemento de bloque y uno en línea, o `max-width: 100%;`. Tendrán más sentido a medida que sigas estudiando CSS.

## Conclusión

Si has seguido todas las instrucciones de este artículo, deberías tener una página parecida a esta:

![Un logotipo de Mozilla centrado, y un encabezado y párrafos. Ahora tiene un estilo atractivo, con un fondo azul para toda la página y un fondo naranja para la franja central de contenido principal.](website-screenshot-final.png)

Puedes [ver nuestra versión aquí](https://mdn.github.io/beginner-html-site-styled/). Si te quedas atascado, siempre puedes comparar tu trabajo con nuestro [código de ejemplo terminado en GitHub](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css).

En este artículo apenas hemos arañado la superficie de CSS. Aprenderás mucho más en nuestro módulo principal [Fundamentos de estilo con CSS](/es/docs/Learn_web_development/Core/Styling_basics), más adelante en el curso.

## Véase también

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : El curso _Learn HTML and CSS_ de [Scrimba](https://scrimba.com?via=mdn) te enseña HTML y CSS construyendo y desplegando cinco proyectos geniales, con lecciones y desafíos interactivos divertidos impartidos por profesores expertos.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
