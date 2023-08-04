---
title: Empezar con CSS
slug: Learn/CSS/First_steps/Getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

En este artículo aplicaremos CSS a un documento HTML sencillo para aprender algunos elementos prácticos sobre este lenguaje.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajo con archivos</a
        >
        y conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender los conceptos básicos para vincular un documento CSS a un
        archivo HTML y dar a un texto un formato sencillo con CSS.
      </td>
    </tr>
  </tbody>
</table>

## Empezamos con algo de HTML

Nuestro punto de partida es un documento HTML. Puedes copiar el código de abajo si quieres trabajar en tu ordenador. Guarda el siguiente código como `index.html` en una carpeta de tu equipo.

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Empezamos con el CSS</title>
  </head>

  <body>
    <h1>Soy un título de nivel uno</h1>

    <p>
      Este es un párrafo de texto. En el texto hay un
      <span>elemento span</span> y también un
      <a href="http://example.com">enlace</a>.
    </p>

    <p>Este es el segundo párrafo. Contiene un elemento <em>destacado</em>.</p>

    <ul>
      <li>Punto uno</li>
      <li>Punto dos</li>
      <li>Punto <em>tres</em></li>
    </ul>
  </body>
</html>
```

> **Nota:** Si lees esto en un dispositivo o un entorno donde no puedes crear archivos fácilmente, no te preocupes. A continuación hay editores de código en vivo que van a permitirte escribir ejemplos de código en esta misma página.

## Agregar CSS a un documento

Lo primero que se debe hacer es decirle al documento HTML que hay algunas reglas CSS que queremos que use. Hay tres formas diferentes de aplicar CSS a un documento HTML, sin embargo, por ahora, veremos la forma más habitual y útil de hacerlo: vincular el CSS desde el encabezado del documento.

Crea un archivo en la misma carpeta que tu documento HTML y guárdalo como `styles.css`. La extensión `.css` muestra que es un archivo CSS.

Para vincular `styles.css` a `index.html`, añade la siguiente línea en algún lugar dentro del {{htmlelement ("head")}} del documento HTML:

```html
<link rel="stylesheet" href="styles.css" />
```

Este elemento {{htmlelement ("link")}} le dice al navegador que hay una hoja de estilo con el atributo `rel` y la ubicación de esa hoja de estilo como el valor del atributo `href`. Puedes probar si el CSS funciona añadiendo una regla a `styles.css`. Usando el editor de código, añade lo siguiente al archivo CSS:

```css
h1 {
  color: red;
}
```

Guarda los archivos HTML y CSS antes de volver a cargar la página en un navegador web. Ahora el título de nivel uno de la parte superior del documento debería ser rojo. Si esto sucede, ¡felicidades!: has aplicado correctamente un poco de CSS a un documento HTML. Si no lo hace, verifica que hayas escrito todo correctamente.

Puedes continuar trabajando en `styles.css` localmente o usar nuestro editor interactivo para continuar con este tutorial. El editor interactivo actúa como si el CSS del primer panel estuviera vinculado al documento HTML, tal como lo hemos hecho con el documento anterior.

## Dar formato a elementos HTML

Al poner nuestro título de encabezado en rojo, ya hemos demostrado que podemos elegir un elemento HTML y darle formato. Hacemos esto con un _selector de elementos_: un selector que coincide directamente con el nombre de un elemento HTML. Para determinar todos los párrafos del documento, se usa el selector `p`. Para hacer que todos los párrafos se vean verdes se usa:

```css
p {
  color: green;
}
```

Puedes determinar múltiples selectores a la vez, separándolos con una coma. Si queremos que todos los párrafos y todos los elementos de la lista sean verdes, el código se verá así:

```css
p,
li {
  color: green;
}
```

Pruébalo en el editor interactivo que encontrarás a continuación (edita los cuadros de código) o en tu documento CSS.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Cambiar el comportamiento predeterminado de los elementos

Cuando miramos un documento HTML bien marcado, incluso con algo tan simple como nuestro ejemplo, podemos ver que el navegador facilita la legibilidad de este documento HTML al añadir un estilo predeterminado. Los títulos se muestran grandes y en negrita, y la lista tiene viñetas. Esto sucede porque los navegadores tienen hojas de estilo internas que contienen estilos predeterminados, los cuales se aplican a todas las páginas por defecto. Sin ellos, todo el texto se uniría en un grupo y tendríamos que darle formato desde cero. Todos los navegadores modernos muestran el contenido HTML por defecto de la misma manera.

Sin embargo, a menudo querrás algo diferente a la elección que ha hecho el navegador. Esto se puede solucionar con el simple hecho de escoger el elemento HTML que deseas cambiar y utilizar una regla CSS para cambiar su apariencia. Un buen ejemplo es `<ul>`, que muestra una lista desordenada. Tiene viñetas y, si decidimos que no las queremos, podemos eliminarlas de este modo:

```css
li {
  list-style-type: none;
}
```

Ahora, intenta añadir esto a tu CSS.

Es muy conveniente consultar en MDN la propiedad `list-style-type` para ver qué valores admite. Echa un vistazo a la página de [`list-style-type`](/es/docs/Web/CSS/list-style-type) y encontrarás un ejemplo interactivo en la parte superior para probar diferentes valores (todos los permitidos se detallan más abajo en esa misma página).

Al mirar esa página, descubrirás que, además de eliminar las viñetas de la lista, también puedes cambiarlas. Intenta cambiarlas por unas cuadradas utilizando el valor `square`.

## Añadir una clase

Hasta ahora, hemos utilizado elementos cuyo nombre se basa en el nombre de elemento que reciben en HTML. Esto funciona siempre que se desee que todos los elementos de ese tipo tengan el mismo aspecto en el documento. La mayoría de las veces no es el caso, por lo que deberás encontrar una manera de seleccionar un subconjunto de los elementos sin que cambien los demás. La forma más común de hacer esto es añadir una clase al elemento HTML y determinarla.

En tu documento HTML, añade al segundo elemento de la lista un [atributo de clase](/es/docs/Web/HTML/Atributos_Globales/class). Debería verse así:

```html
<ul>
  <li>Punto uno</li>
  <li class="special">Punto dos</li>
  <li>Punto <em>tres</em></li>
</ul>
```

En tu CSS, puedes seleccionar una clase `special` creando un selector que comience con un carácter de punto final. Añade lo siguiente a tu archivo CSS:

```css
.special {
  color: orange;
  font-weight: bold;
}
```

Guarda y actualiza para ver cuál es el resultado.

Puedes aplicar la clase `special` a cualquier elemento de la página que desees que tenga el mismo aspecto que este elemento de lista. Por ejemplo, es posible que desees que el `<span>` del párrafo también sea naranja y en negrita. Intenta añadirle una `class` `special`, luego vuelve a cargar la página y observa qué sucede.

A veces verás reglas con un selector que enumera el selector de elementos HTML junto con la clase:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Esta sintaxis significa «determina cualquier elemento `li` que tenga una clase special». Si hicieras esto, ya no podrías aplicar la clase a un elemento `<span>` u otro elemento simplemente añadiéndole la clase; tendrías que añadir ese elemento a la lista de selectores:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Como puedes imaginar, algunas clases pueden aplicarse a muchos elementos y no queremos tener que seguir editando el CSS cada vez que algo nuevo necesita adoptar ese estilo. Por lo tanto, a veces es mejor eludir el elemento y simplemente referirse a la clase, a menos que sepas que vas a querer crear algunas reglas especiales para un solo elemento y tal vez quieras asegurarte de que no se apliquen a otros elementos.

## Dar formato según la ubicación en un documento

Hay momentos en los que querrás que algo se vea diferente en función de dónde esté en el documento. Hay múltiples selectores que pueden hacerlo, pero por ahora veremos solo un par. En nuestro documento hay dos elementos `<em>`: uno dentro de un párrafo y el otro dentro de un elemento de la lista. Para seleccionar solo un `<em>` que esté anidado dentro de un elemento `<li>`, podemos usar un selector llamado **combinador descendente**, que simplemente toma la forma de un espacio entre otros dos selectores.

Añade la siguiente regla a la hoja de estilo.

```css
li em {
  color: rebeccapurple;
}
```

Este selector separará cualquier elemento `<em>` que esté dentro de (un descendiente de) `<li>`. Entonces, en tu documento de ejemplo, deberías encontrar que el `<em>` del tercer elemento de la lista es morado, pero el que hay en el párrafo no ha cambiado.

Otra cosa que puedes probar es dar formato un párrafo que venga directamente a continuación de un título que esté en el mismo nivel de jerarquía en el HTML. Para hacerlo, coloca un `+` (un **combinador hermano adyacente**) entre los selectores.

Intenta añadir también esta regla a la hoja de estilo:

```css
h1 + p {
  font-size: 200%;
}
```

El ejemplo que encontrarás a continuación incluye las dos reglas anteriores. Intenta añadir una regla para que un `span` dentro de un párrafo se vuelva rojo. Sabrás si lo has hecho bien si el `<span>` en el primer párrafo se vuelve rojo pero el que hay en el primer elemento de la lista no cambia de color.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **Nota:** Como puedes ver, el CSS nos ofrece varias formas de seleccionar elementos, y hasta ahora solo hemos arañado la superficie. Examinaremos todos estos selectores y muchos más en los artículos correspondientes a [Selectores](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS) que encontrarás más adelante.

## Dar formato según el estado

El último tipo de estilo que veremos en este tutorial es la capacidad de dar formato a los elementos en función de su estado. Un ejemplo sencillo es el estilo de los enlaces. Cuando damos formato a un enlace, necesitamos seleccionar el elemento [`<a>`](/es/docs/Web/HTML/Element/a) (anclaje). Tiene diferentes estados dependiendo de si se ha visitado o no, se pasa por encima, o se presiona con el teclado o se hace clic (se activa). Puedes usar CSS para dar formato a estos diferentes estados. El CSS que encontrarás a continuación presenta en color rosa los enlaces que no se han visitado y en verde los que sí.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Puedes cambiar la apariencia del enlace, por ejemplo, eliminando el subrayado, lo que se logra mediante la siguiente regla:

```css
a:hover {
  text-decoration: none;
}
```

En el ejemplo que encontrarás a continuación, puedes jugar con diferentes valores para los distintos estados de un enlace. Hemos añadido las reglas anteriores y ahora nos damos cuenta de que el color rosa es demasiado claro y difícil de leer, ¿por qué no cambiarlo a otro que se vea mejor? ¿Puedes poner los enlaces en negrita?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

Hemos eliminado el subrayado del enlace cuando el ratón se pasa por encima, y se puede eliminar de todos los estados de un enlace. Sin embargo, vale la pena recordar que en una página web real deberás asegurarte de que los visitantes sepan reconocer que se trata de un enlace. Que aparezca subrayado puede ser una pista importante para que las personas se den cuenta de que pueden hacer clic en una palabra dentro del párrafo, ya que es a lo que están acostumbrados. Al igual que con todo en CSS, existe la posibilidad de que tus cambios resten accesibilidad al documento. Intentaremos resaltar estas posibles dificultades en los lugares apropiados.

> **Nota:** a menudo verás que se menciona la [accesibilidad](/es/docs/Learn/Accessibility) en estas lecciones y en MDN. Cuando hablamos de accesibilidad nos referimos al requisito de que nuestras páginas web sean comprensibles y usables para todas las personas.
>
> Puede que tu visitante acceda a la página desde un ordenador con ratón o trackpad, o un teléfono inteligente con pantalla táctil. O puede que use un lector de pantalla que lea el contenido del documento, así como puede que necesite un tamaño de texto más grande o navegar por la página usando solo el teclado.
>
> Un documento HTML simple es, generalmente, accesible para todos. Es importante que el documento no pierda accesibilidad a medida que vayas aplicándole estilo.

## Combinaciones de selectores y combinadores

Vale la pena señalar que puedes hacer múltiples combinaciones de selectores y combinadores. Por ejemplo:

```css
/* selecciona cualquier elemento <span> que se encuentre dentro de un <p>, que esté dentro de un <artículo> */
artículo p span { ... }

/* selecciona cualquier <p> que se encuentre directamente después de <ul>, que va directamente después de <h1> */
h1 + ul + p { ... }
```

También puedes combinar varios tipos juntos. Intenta añadir lo siguiente al código:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dará formato a cualquier elemento con la clase `special`, dentro de un elemento `<p>` que venga justo después de `<h1>`, el cual se encuentra dentro de `<body>`. ¡Uf!

En el HTML original que proporcionamos, el único elemento al que esto aplica estilo es `<span class="special">`.

No te preocupes si ahora mismo te parece complicado: irás acostumbrarte a medida que escribas más CSS.

## Para terminar

En este tutorial, hemos visto varias formas con las que se puede diseñar un documento usando CSS. Desarrollaremos este conocimiento a medida que avancemos con el resto de las lecciones. Sin embargo, ahora ya sabes lo suficiente como para aplicar estilo al texto, aplicar CSS en función de diferentes formas de determinar elementos en el documento y buscar propiedades y valores en la documentación de MDN.

En el próximo artículo, veremos cómo se estructura el CSS.

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
