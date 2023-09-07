---
title: "HTML: Una buena base para la accesibilidad"
slug: Learn/Accessibility/HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Se puede hacer accesible una gran cantidad de contenido web solo asegurándose de que se utilizan los elementos HTML con el propósito correcto todo el tiempo. Este artículo muestra en detalle como HTML puede ser usado para asegurar máxima accesibilidad.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimiento básico de informática, entendimiento básico de HTML (ver
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción a HTML</a
        >), y entendimiento de
        <a href="/es/docs/Learn/Accessibility/What_is_accessibility"
          >¿Qué es accesibilidad?</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con las características de HTML que tiene beneficios de
        accesibilidad, y como usarla apropiadamente en tus documentos web.
      </td>
    </tr>
  </tbody>
</table>

## HTML y accesibilidad

Cuando aprendas más de HTML — leas más recursos, mires más ejemplos, etc.— vas a seguir viendo un tema en común: la importancia del uso de HTML semántico (a veces llamado POSH, o _Plain Old Semantic HTML_). Esto significa usar los elementos correctos de HTML para su propósito tanto como sea posible.

Puedes estarte preguntando ¿por qué es esto tan importante?. Después de todo, puedes usar una combinación de CSS y JavaScript para hacer que casi cualquier elemento HTML se comporte en la forma que tú quieras. Por ejemplo, un botón que reproduzca un vídeo en tu sitio puede estar hecho así:

```html
<div>Reproducir vídeo</div>
```

Pero como verás más adelante, tiene sentido utilizar el elemento correcto para este trabajo:

```html
<button>Reproducir vídeo</button>
```

No solo la etiqueta `<button>` de HTML ya tiene estilos adecuados por defecto (que probablemente quieras sobrescribir), también están construidos para ser accesibles con el teclado —el usuario puede navegar entre botones usando <kbd>Tab</kbd> y activando su selección usando <kbd>Return</kbd> o <kbd>Enter</kbd>.

No cuesta más tiempo escribir HTML semántico que (mal) marcado no semántico si lo haces consistentemente desde el comienzo de tu proyecto. Y aun mejor, el marcado semántico tiene otros beneficios más allá de la accesibilidad:

1. **Fácil desarrollo** — como mencionamos, obtienes algunas funcionalidades gratis, y podría decirse que es más fácil de entender.
2. **Mejor en móviles** — el HTML semántico es probablemente más liviano en tamaño de archivo que el código espagueti no semántico y más fácil de hacer responsivo.
3. **Bueno para SEO** — Los motores de búsqueda dan más importancia a palabras claves dentro de cabeceras, links, etc., que palabras claves en elementos no semánticos como los `<div>`, etc., tus documentos serán más fáciles de encontrar por tus clientes.

Continuemos y veamos el HTML accesible en más detalle.

> **Nota:** Es buena idea tener configurado un lector de pantalla en tu computador, para que puedas hacer algunas pruebas de los siguientes ejemplos. Mira nuestra [Guía de lectores de pantalla](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) para más detalles.

## Buena semántica

Ya hemos hablado de la importancia de la buena semántica, y por qué deberíamos usar el elemento HTML adecuado para cada caso. Esto no puede ignorarse, ya que es uno de los principales lugares donde la accesibilidad se rompe si no se maneja correctamente.

En la web, la verdad es que las personas hacen cosas muy extrañas con marcado HTML. Algunos abusos de HTML se deben a prácticas de antaño que no han sido completamente olvidadas y algunas son simplemente ignorancia. Cualquiera que sea el caso, deberías reemplazar ese mal código donde sea que lo veas.

A veces, no estás en disposición de deshacerte del mal marcado — tus páginas pueden estar generadas por algún tipo de _framework_ del lado del servidor del cual no tienes control total, o puedes tener contenido de terceros en tu página (como banners) sobre los que no tienes control.

El objetivo no es "todo o nada", pero cada mejora que hagas va a ayudar a la causa de la accesibilidad.

### Contenido textual

Una de las mejores ayudas de accesibilidad que un usuario lector de pantalla puede tener es una buena estructura de contenido de cabeceras, párrafos, listas, etc. Un ejemplo de buena semántica puede lucir como el de a continuación:

```html example-good
<h1>Mi cabecera</h1>

<p>Esta es la primera sección de mi documento.</p>

<p>Voy a agregar también otro párrafo aquí.</p>

<ol>
  <li>Aquí esta</li>
  <li>una lista para</li>
  <li>que la leas</li>
</ol>

<h2>Mi subtítulo</h2>

<p>
  Esta es la primera subsección de mi documento. ¡Me encantaría que la gente
  pudiera leer este contenido!
</p>

<h2>Mi 2º subtitulo</h2>

<p>
  Esta es la segunda subsección de mi documento. Creo que es más interesante que
  la primera.
</p>
```

Hemos preparado una versión más larga para que pruebes con un lector de pantalla (ver [good-semantics.html](http://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Si tratas de navegar por ella, notaras que es muy fácil:

1. El lector de pantalla lee cada cabecera a medida que progresas a través del contenido, notificándote qué es una cabecera, qué es un párrafo, etc.
2. Se detiene después de cada elemento, dejándote ir a un ritmo que sea cómodo para ti.
3. Puedes saltar al siguiente/anterior encabezado en muchos lectores de pantalla.
4. También puedes tener una lista de todos los encabezados en muchos lectores de pantalla, permitiéndote usarlos como una tabla de contenidos para encontrar contenido específico.

Las personas a veces escriben encabezados, párrafos, etc. usando HTML presentacional y saltos de línea, algo como lo siguiente:

```html example-bad
<font size="7">Mi cabecera</font> <br /><br />
Esta es la primera sección del documento.
<br /><br />
Voy a agregar otro párrafo aquí también.
<br /><br />
1. Aquí esta
<br /><br />
2. una lista para
<br /><br />
3. que la leas
<br /><br />
<font size="5">Mi subtitulo</font>
<br /><br />
Esta es la primera subsección de mi documento. ¡Me encantaría que la gente
pudiera leer este contenido!
<br /><br />
<font size="5">Mi 2º subtitulo</font>
<br /><br />
Esta es la segunda subsección de mi documento. Creo que es más interesante que
la primera.
```

Si pruebas nuestra versión extendida con un lector de pantalla (ver [bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), no vas a tener una buena experiencia: el lector de pantalla no tiene nada que usar como señal, por lo que no podrás tener una tabla de contenidos útil y toda la página se ve como un solo bloque gigante, así que solo se lee de una vez, todo de una vez.

Hay otros problemas más allá de la accesibilidad: es más difícil aplicar estilo al contenido con CSS o manipularlo con JavaScript, por ejemplo, porque no hay elementos para usarlos como selectores.

#### Usar lenguaje claro

El lenguaje que usas también puede afectar la accesibilidad. En general deberías usar lenguaje claro que no sea demasiado complejo y no usar innecesariamente jerga o palabras extrañas. Esto no solo beneficia a las personas con discapacidades cognitivas u otras: beneficia a los lectores para quienes el texto no está escrito en su lengua materna, personas más jóvenes... ¡todo el mundo, de hecho! Aparte de esto, deberías evitar usar lenguaje y caracteres que no se puede leen claramente por un lector de pantalla. Por ejemplo:

- No uses guiones si puedes evitarlos.en lugar de escribir 5–7, escribe "5 a 7".
- Expande las abreviaciones — en lugar de escribir Ene, escribe Enero.
- Expande los acrónimos, por lo menos una o dos veces. En lugar de escribir HTML en la primera instancia, escribe Hypertext Markup Language.

### Disposiciones de página

Antiguamente la gente solía crear diseños de página usando tablas HTML, usando diferentes celdas de tabla para contener el encabezado, pie de página, barra lateral, columna de contenido principal, etc. Esto no es una buena idea porque un lector de pantalla probablemente dará como resultado lecturas confusas, especialmente si el diseño es complejo y tiene muchas tablas anidadas.

Prueba nuestro ejemplo [table-layout.html](http://mdn.github.io/learning-area/accessibility/html/table-layout.html), que tiene este código:

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row  -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <input type="search" name="q" placeholder="Search query" width="300" />
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4" bgcolor="#ffffff">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" bgcolor="#ff80ff" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer" bgcolor="#ffffff">
    <td colspan="6">
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

Si intentas navegar por él con un lector de pantalla, probablemente te dirá que hay una tabla para mirar (aunque algunos lectores de pantalla pueden adivinar la diferencia entre diseños con tablas y tablas de datos). Luego, probablemente (dependiendo del lector de pantalla que estés usando) tendrás que entrar en la tabla como objeto y mirar sus características por separado, y luego salir de la tabla nuevamente para continuar navegando por el contenido.

Los diseños con tablas son una reliquia del pasado: tenían sentido cuando la compatibilidad con CSS no estaba muy extendida en los navegadores, pero ahora solo crean confusión para los usuarios de lectores de pantalla. Además, su código fuente requiere más marcado, lo que los hace menos flexibles y más difíciles de mantener. Puedes verificar estas afirmaciones comparando tu experiencia anterior con un ejemplo de [estructura de sitio web más moderno](http://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/), que podría verse así:

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

Si pruebas nuestro ejemplo de estructura más moderna con un lector de pantalla, verás que el marcado de diseño ya no se interpone ni confunde la lectura del contenido. También es mucho más ágil y más pequeño en términos de tamaño de código, lo que significa que el código es más fácil de mantener y menos ancho de banda para que el usuario lo descargue (especialmente para aquellos con conexiones lentas).

Otra consideración al crear diseños es usar elementos semánticos HTML5 como se ve en el ejemplo anterior (ver [secciónado de contenido](/es/docs/Web/HTML/Elemento#Seccionamiento_del_contenido)): puedes crear un diseño usando solo elementos {{htmlelement ("div")}} anidados, pero es mejor usar los elementos de seccionado adecuados para marcar la navegación principal ({{htmlelement ("nav")}}), el pie de página ({{htmlelement ("footer")}}), los bloques de contenido ({{htmlelement ("article")}}), etc. Estos proporcionan semántica adicional para lectores de pantalla (y otras herramientas) para brindar al usuario pistas adicionales sobre el contenido por el que están navegando (consulta [Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) para hacerte una idea de cómo es el soporte de lectores de pantalla).

> **Nota:** Además de tener una buena semántica y un diseño atractivo, tu contenido debería tener sentido lógico en su orden en el código; siempre puedes colocarlo donde desees usando CSS más adelante, pero deberías tener el orden en el código correcto para empezar, para que lo que se lee a los usuarios de lectores de pantalla tenga sentido.

### Controles de interfaz de usuario

Por controles de interfaz de usuario nos referimos a las partes principales de los documentos web con las que los usuarios interactúan, habitualmente botones, enlaces y controles de formulario. En esta sección, veremos los aspectos básicos de accesibilidad a tener en cuenta al crear dichos controles. Los artículos posteriores sobre WAI-ARIA y multimedia analizarán otros aspectos de la accesibilidad de la interfaz de usuario.

Un aspecto clave de la accesibilidad de los controles de interfaz de usuario es que, de forma predeterminada, los navegadores permiten que sean manipulados por el teclado. Puedes probar esto usando nuestro ejemplo [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ([código fuente](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Ábrelo en una nueva pestaña y prueba a pulsar la tecla de tabulación; después de algunas pulsaciones, deberías ver que el foco de la pestaña comienza a moverse a través de los diferentes elementos enfocables. Los elementos enfocados reciben un estilo predeterminado resaltado en cada navegador (difiere ligeramente entre diferentes navegadores) para que puedas saber qué elemento está enfocado.

![](button-focused-unfocused.png)

Después puedes pulsar <kbd>Enter</kbd> / <kbd>Return</kbd> para seguir un enlace enfocado o pulsar un botón (hemos incluido algo de JavaScript para que los botones lancen un mensaje), o comenzar a escribir para introducir texto en un campo de texto. Otros elementos de formulario tienen diferentes controles; por ejemplo, el elemento {{htmlelement ("select")}} puede mostrar sus opciones y alternar entre usar las teclas de flecha arriba y abajo.

> **Nota:** Diferentes navegadores pueden tener diferentes opciones de control de teclado disponibles. Consulta [Using native keyboard accessibility](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility) para obtener más detalles.

Básicamente, obtienes este comportamiento gratis, solo con el uso de los elementos apropiados. Por ejemplo:

```html example-good
<h1>Enlaces</h1>

<p>Esto es un enlace a <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Otro enlace, a la
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Botones</h2>

<p>
  <button data-message="Esto es del primer botón">¡Haz clic!</button>
  <button data-message="Esto es del segundo botón">
    ¡Haz clic aquí también!
  </button>
  <button data-message="Esto es del tercer botón">Y aquí!</button>
</p>

<h2>Formulario</h2>

<form>
  <div>
    <label for="nombre">Entra tu nombre:</label>
    <input type="text" id="nombre" name="nombre" />
  </div>
  <div>
    <label for="edad">Entra tu edad:</label>
    <input type="text" id="edad" name="edad" />
  </div>
  <div>
    <label for="humor">Elige tu humor:</label>
    <select id="humor" name="humor">
      <option>Feliz</option>
      <option>Triste</option>
      <option>Enfadado/a</option>
      <option>Preocupado/a</option>
    </select>
  </div>
</form>
```

Esto significa usar enlaces, botones, elementos y etiquetas de formulario de manera adecuada (incluido el elemento {{htmlelement ("label")}} para los controles de formulario).

Sin embargo, nuevamente se da el caso de que la gente a veces hace cosas extrañas con HTML. Por ejemplo, a veces ves botones marcados con {{htmlelement ("div")}}s, por ejemplo:

```html example-bad
<div data-message="Esto es del primer botón">¡Haz clic aquí!</div>
<div data-message="Esto es del segundo botón">¡Haz clic aquñi también!</div>
<div data-message="Esto es del tercer botón">¡Y aquí!</div>
```

Pero no se recomienda el uso de código como este: pierdes inmediatamente la accesibilidad nativa del teclado que habrías tenido si hubieras usado elementos {{htmlelement ("button")}}, y además no obtienes ninguno de los estilos CSS predeterminados que tienen los botones.

#### Volver a añadir la accesibilidad del teclado

Volver a agregar estas ventajas requiere un poco de trabajo (puedes ver un ejemplo en nuestro ejemplo [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html); consulta también el [código fuente](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Aquí le hemos dado a nuestros botones `<div>` falsos la capacidad de enfocarse (incluso a través de la tecla de tabulación) dándole a cada uno el atributo `tabindex="0"`:

```html
<div data-message="Esto es del primer botón" tabindex="0">¡Haz clic aquí!</div>
<div data-message="Esto es del segundo botón" tabindex="0">
  ¡Haz clic aquí también!
</div>
<div data-message="Esto es del tercer botón" tabindex="0">¡Y aquí!</div>
```

Básicamente, el atributo [`tabindex`](/es/docs/Web/HTML/Global_attributes#tabindex) está destinado principalmente a permitir que los elementos tabulables tengan un orden de tabulación personalizado (especificado en orden numérico positivo), en lugar de simplemente tabularlos en su orden de origen predeterminado. Casi siempre es una mala idea, ya que puede causar una gran confusión. Úsalo solo si realmente lo necesitas; por ejemplo, si el diseño muestra las cosas en un orden visual muy diferente al código fuente, y deseas que las cosas funcionen de manera más lógica. Hay otras dos opciones para `tabindex`:

- `tabindex = "0"`: como se indicó anteriormente, este valor permite que los elementos que normalmente no se pueden tabular se conviertan en tabulables. Este es el valor más útil de `tabindex`.
- `tabindex = "- 1"`: esto permite que los elementos que normalmente no se pueden tabular reciban el foco mediante programación, p. ej. a través de JavaScript o como destino de enlaces.

Si bien la adición anterior nos permite tabular los botones, no nos permite activarlos a través de la tecla <kbd>Enter</kbd> / <kbd>Return</kbd>. Para hacer eso, hemos tenido que agregar el siguiente truco en JavaScript:

```js
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    // La tecla Enter/Return
    document.activeElement.click();
  }
};
```

Aquí agregamos un "listener" (oyente) al objeto `document` para detectar cuándo se ha presionado una tecla en el teclado. Comprobamos qué botón se presionó mediante la propiedad [keyCode](/es/docs/Web/API/KeyboardEvent/keyCode) del objeto de evento; si es el código clave que coincide con <kbd>Return</kbd> / <kbd>Enter</kbd>, ejecutamos la función almacenada en el manejador `onclick` del botón usando `document.activeElement.click()`. [activeElement](/es/docs/Web/API/Document/activeElement) nos da el elemento que está actualmente enfocado en la página.

Esta es mucho trabajo extra para volver a incorporar la funcionalidad. Y seguramente surgirán problemas con ella. Es mejor usar el elemento correcto para el trabajo correcto en primer lugar.

#### Etiquetas de texto significativas

Las etiquetas textuales de los controles de la interfaz de usuario son muy útiles para todos los usuarios, pero hacerlas bien es particularmente importante para los usuarios con discapacidades.

Deberías asegurarte de que las etiquetas de texto de tus botones y enlaces sean comprensibles y distintivas. No uses simplemente "Haz clic aquí" para tus etiquetas, ya que los usuarios de lectores de pantalla a veces obtienen una lista de botones y controles de formulario. La siguiente captura de pantalla muestra nuestros controles enumerados por VoiceOver en Mac.

![Form controls. Click me! button. Click me too! button. And me! button. Fill me in: edit text. Fill me in: edit text. Happy collapsed pop up button. Happy menu item. Sad menu item. Angry menu item. Worried menu item.](voiceover-formcontrols.png)

Asegúrate de que tus etiquetas tienen sentido sin su contexto, leídas solas, así como en el contexto del párrafo en que están. Por ejemplo, lo siguiente muestra un buen ejemplo de enlace de texto:

```html example-good
<p>
  Las ballenas son criaturas realmente impresionantes.
  <a href="whales.html">Aprende más sobre las ballenas</a>.
</p>
```

y esto es un mal texto de enlace:

```html example-bad
<p>
  Las ballenas son criaturas realmente impresionantes. Para aprender más sobre
  las ballenas, <a href="whales.html">haz clic aquí</a>.
</p>
```

> **Nota:** Encontrarás mucho más sobre la implementación de enlaces y buenas prácticas en nuestro artículo [Crear hipervínculos](/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks). También encontrarás buenos y malos ejemplos en [good-links.html](http://mdn.github.io/learning-area/accessibility/html/good-links.html) y [bad-links.html](http://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Las etiquetas de formulario también son importantes, para darte una pista sobre lo que necesita introducir en cada campo de formulario. El siguiente parece un ejemplo bastante razonable:

```html example-bad
Entra tu nombre: <input type="text" id="nombre" name="nombre" />
```

Sin embargo, esto no es tan útil para usuarios con discapacidad. No hay nada en el ejemplo anterior para asociar la etiqueta de forma inequívoca con la entrada del formulario y dejar claro cómo rellenarlo si no puede verlo. Si accedes con algunos lectores de pantalla, es posible que solo se te proporcione una descripción en la línea de "editar texto".

El siguiente es un ejemplo mucho mejor:

```html example-good
<div>
  <label for="nombre">Entra tu nombre:</label>
  <input type="text" id="nombre" name="nombre" />
</div>
```

Con código como este, la etiqueta estará claramente asociada con la entrada; la descripción se parecerá más a "Entra tu nombre: editar texto".

![](voiceover-good-form-label.png)

Como ventaja adicional, en la mayoría de los navegadores asociar una etiqueta con una entrada de formulario significa que puedes hacer clic en la etiqueta para seleccionar / activar el elemento del formulario. Esto le da a la entrada un área de impacto más grande, lo que facilita la selección.

> **Nota:** puedes ver algunos ejemplos de buenos y malos formularios en [good-form.html](http://mdn.github.io/learning-area/accessibility/html/good-form.html) y [bad-form.html](http://mdn.github.io/learning-area/accessibility/html/bad-form.html).

## Tablas de datos accesibles

Se puede escribir una tabla de datos básica con un marcado muy simple, por ejemplo:

```html
<table>
  <tr>
    <td>Nombre</td>
    <td>Edad</td>
    <td>Género</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>Masculino</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>Femenino</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>Femenino</td>
  </tr>
</table>
```

Pero esto tiene problemas: no hay forma de que un usuario de lector de pantalla asocie filas o columnas como agrupaciones de datos. Para hacer esto, necesita saber cuáles son las filas de encabezado, y si están encabezando filas, columnas, etc. Esto solo se puede hacer visualmente para la tabla anterior (ve a [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) y prueba tú mismo el ejemplo).

Ahora echa un vistazo a nuestro [ejemplo de tabla de bandas punk](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html): aquí puedes ver algunas ayudas de accesibilidad en funcionamiento:

- Los encabezados de las tablas se definen utilizando elementos {{htmlelement("th")}}; también se puede especificar si son encabezados de filas o columnas mediante el atributo `scope`. Esto te da grupos completos de datos que los lectores de pantalla pueden consumir como unidades individuales.
- El elemento {{htmlelement ("caption")}} y el atributo `summary` de `<table>` realizan trabajos similares: actúan como texto alternativo para una tabla, lo que brinda al usuario de lector de pantalla un resumen rápido y útil del contenido de la tabla. Por lo general, se prefiere `<caption>`, ya que también hace que su contenido sea accesible para los usuarios videntes, quienes también pueden encontrarlo útil. Realmente no necesitas usar ambos.

Consulte nuestro artículo sobre funciones avanzadas y accesibilidad de tablas HTML para obtener más detalles sobre las tablas de datos accesibles.

> **Nota:** Consulta nuestro artículo [Funciones avanzadas de tablas y accesibilidad](/es/docs/Learn/HTML/Tablas/Funciones_avanzadas_de_las_tablas_HTML_y_accesibilidad) para ver más detalles sobre tablas de datos accesibles.

## Alternativas de texto

Mientras que el contenido textual es inherentemente accesible, lo mismo no se puede decir del contenido multimedia — el contenido de imagen/video no puede ser visto por personas con discapacidad visual, y el contenido de audio no puede ser escuchado por personas sordas. Cubriremos el contenido de video y audio en detalle en el artículo [multimedia accesible](/es/docs/Learn/Accessibility/Multimedia) más adelante, pero para este artículo veremos la accesibilidad del humilde elemento {{htmlelement("img")}}.

Tenemos un ejemplo simple, [access-image.html](http://mdn.github.io/learning-area/accessibility/html/accessible-image.html), que presenta cuatro copias de la misma imagen:

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

La primera imagen, cuando la ve un lector de pantalla, realmente no ofrece mucha ayuda al usuario; VoiceOver, por ejemplo, lee "/dinosaur.png, imagen". Lee el nombre del archivo para intentar proporcionar ayuda. En este ejemplo, el usuario al menos sabrá que es un dinosaurio de algún tipo, pero a menudo los archivos pueden cargarse con nombres de archivo generados por la máquina (por ejemplo, de una cámara digital) y estos nombres de archivo probablemente no proporcionarían contexto al contenido de la imagen.

> **Nota:** Es por eso que nunca debes incluir contenido de texto dentro de una imagen: los lectores de pantalla simplemente no pueden acceder a él. También hay otras desventajas: no puedes seleccionarlo y copiarlo / pegarlo. ¡No lo hagas!

Cuando un lector de pantalla encuentra la segunda imagen, lee el atributo alt completo: "Un tiranosaurio rex rojo: un dinosaurio de dos patas erguido como un humano, con brazos pequeños y una cabeza grande con muchos dientes afilados".

Esto resalta la importancia de no solo usar nombres de archivo significativos en caso de que el **texto alternativo** no esté disponible, sino también de asegurarse de que el texto alternativo se proporcione en los atributos `alt` siempre que sea posible. Ten en cuenta que el contenido del atributo `alt` siempre debe proporcionar una representación directa de la imagen y lo que transmite visualmente. Aquí no se debe incluir ningún conocimiento personal o descripción adicional, ya que no es útil para personas que no se han encontrado con la imagen antes.

Una cosa a considerar es si tus imágenes tienen significado dentro del contenido, o si son puramente para decoración visual, por lo que no tienen significado. Si son decorativas, es mejor incluirlas en la página como imágenes de fondo CSS.

> **Nota:** Lee [Imágenes en HTML](/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) y [Responsive images](/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) para obtener mucha más información sobre la implementación de imágenes y buenas prácticas asociadas.

Si deseas proporcionar información contextual adicional, deberías colocarla en el texto que rodea la imagen o dentro de un atributo `title`, como se muestra a continuación. En este caso, la mayoría de los lectores de pantalla leerán el texto alternativo, el atributo del título y el nombre del archivo. Además, los navegadores muestran el texto del título como información cuando se pasa por encima con el ratón.

![](title-attribute.png)

Echemos otro vistazo al cuarto método:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus ...</p>
```

En este caso, no estamos usando el atributo `alt` en absoluto; en cambio, hemos presentado nuestra descripción de la imagen como un párrafo de texto normal, le hemos dado un `id` y luego usamos el atributo `aria-labelledby` para referirnos a ese `id`, que hace que los lectores de pantalla usen ese párrafo como texto alternativo o etiqueta para esa imagen. Esto es especialmente útil si desea utilizar el mismo texto como etiqueta para varias imágenes, algo que no es posible con `alt`.

> **Nota:** `aria-labelledby` es parte de la especificación [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/), que permite a los desarrolladores añadir semántica extra a su marcado para mejorar su accesibilidad para lectores de pantalla cuando sea necesario. Para aprender más sobre cómo funciona, lee nuestro artículo [WAI-ARIA Basics](/es/docs/Learn/Accessibility/WAI-ARIA_basics).

### Otros mecanismos de texto alternativo

Las imágenes también tienen otros mecanismos disponibles para proporcionar texto descriptivo. Por ejemplo, hay un atributo `longdesc` que apunta a un documento web separado que contiene una descripción ampliada de la imagen, por ejemplo:

```html
<img src="dinosaur.png" longdesc="dino-info.html" />
```

Parece una buena idea, especialmente para infografías como gráficos grandes con mucha información que tal vez podría representarse como una tabla de datos accesible (consulte la sección anterior). Sin embargo, `longdesc` no es compatible de forma consistente con lectores de pantalla, y el contenido es completamente inaccesible para los usuarios que no usan lectores de pantalla. Podría decirse que es mucho mejor incluir la descripción larga en la misma página que la imagen, o vincularla con un enlace normal.

HTML5 incluye dos elementos nuevos, {{htmlelement("figure")}} y {{htmlelement("figcaption")}}, que se supone que asocian una figura de algún tipo (podría ser cualquier cosa, no necesariamente una imagen) con un pie de figura:

```html
<figure>
  <img src="dinosaur.png" alt="El Tyrannosaurus de Mozilla" />
  <figcaption>
    Un Tyrannosaurus Rex rojo: Un dinosaurio de dos piernas, de pie como un
    humano, con brazos pequeños y una cabeza grande con un montón de dientes
    afilados.
  </figcaption>
</figure>
```

Desafortunadamente, la mayoría de lectores de pantalla aún no parecen asociar los títulos de las figuras con sus figuras, pero la estructura del elemento es útil para dar estilo con CSS, y además proporciona una manera de colocar una descripción de la imagen junto a ella en el código.

### Atributos alt vacíos

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: el rey de los dinosaurios
</h3>
```

Puede haber ocasiones en las que se incluya una imagen en el diseño de una página, pero su propósito principal sea la decoración visual. Observarás en el ejemplo de código anterior que el atributo `alt` de la imagen está vacío; esto es para que los lectores de pantalla reconozcan la imagen, pero no intenten describirla imagen (en su lugar, solo dirían "imagen" o algo similar).

La razón para usar un `alt` vacío en lugar de no incluirlo es porque muchos lectores de pantalla anuncian la URL completa de la imagen si no se proporciona un alt. En el ejemplo anterior, la imagen actúa como decoración visual del encabezado al que está asociada. En casos como este, y en los casos en los que una imagen es solo decoración y no tiene valor de contenido, debes poner un alt vacío en tus imágenes. Otra alternativa es usar el atributo de rol aria `role = "presentation"` - esto también evita que los lectores de pantalla lean el texto alternativo.

> **Nota:** si es posible, deberías usar CSS para mostrar imágenes que son solo decoración.

## Más sobre enlaces

Los enlaces (el elemento `<a>` con un atributo `href`), según cómo se utilicen, pueden ayudar o perjudicar la accesibilidad. De forma predeterminada, los enlaces son accesibles en apariencia. Pueden mejorar la accesibilidad al ayudar a un usuario a navegar rápidamente a diferentes secciones de un documento. También pueden dañar la accesibilidad si se elimina su estilo accesible o si JavaScript hace que se comporten de manera inesperada.

### Estilo de enlace

De forma predeterminada, los enlaces son visualmente diferentes de otros textos tanto en el color como en la decoración del texto, con enlaces azules y subrayados de forma predeterminada, morados y subrayados si se visitan, y con un anillo de enfoque cuando reciben el foco del teclado.

El color no debe usarse como el único método para distinguir los enlaces del contenido que no enlaza. El color del texto del enlace, como todo el texto, debe ser significativamente diferente del color de fondo ([un contraste de 4.5:1](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). Además, los enlaces deben ser visualmente significativamente diferentes del texto sin enlaces. Con un requisito de contraste mínimo de 3:1 entre el texto del enlace y el texto circundante y entre los estados predeterminado, visitado y de enfoque / activo, y un contraste de 4:5 entre todos esos colores de estado y el color de fondo.

### Eventos onclick

A menudo se abusa de las etiquetas de anclaje con el evento `onclick` para crear pseudo-botones configurando href a `"#"` o `"javascript:void(0)"` para evitar que la página se actualice.

Estos valores provocan un comportamiento inesperado al copiar o arrastrar enlaces, abrir enlaces en una nueva pestaña o ventana, marcar como favoritos y cuando JavaScript todavía se está descargando aparecen errores o está deshabilitado. Esto también transmite una semántica incorrecta a las tecnologías de asistencia (por ejemplo, lectores de pantalla). En estos casos, se recomienda utilizar un {{HTMLElement("button")}} en su lugar. En general, solo debe usar un ancla para la navegación utilizando una URL adecuada.

### Enlaces externos y enlaces a recursos que no son HTML

Los enlaces que se abren en una nueva pestaña o ventana mediante la declaración `target="_blank"` y los enlaces cuyo valor `href` apunta a un recurso de archivo deben incluir un indicador sobre el comportamiento que se producirá cuando se active el enlace.

Las personas con problemas de baja visión, que navegan con la ayuda de tecnología de lectura de pantalla o que tienen problemas cognitivos pueden confundirse cuando la nueva pestaña, ventana o aplicación se abre inesperadamente. Es posible que versiones antiguas del software de lectura de pantalla ni siquiera anuncien el comportamiento.

#### Enlace que abre una nueva pestaña o ventana

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (se abre en una nueva ventana)</a
>
```

#### Enlace a un recurso que no es HTML

```html
<a target="_blank" href="2017-annual-report.ppt"
  >Informe anual de 2017 (PowerPoint)</a
>
```

Si se utiliza un icono en lugar de texto para indicar este tipo de comportamiento de enlaces, asegúrate de que incluya una [descripción alternativa](/es/docs/Web/HTML/Element/img#alt).

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.2_—_Predictable_Make_Web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

#### Enlaces de salto

Un enlace de salto, también conocido como "skipnav", es un elemento que se coloca lo más cerca posible del elemento de apertura {{HTMLElement("body")}} que enlaza con el comienzo del contenido principal de la página. Este enlace permite a las personas evitar el contenido repetido en varias páginas de un sitio web, como el encabezado y la navegación principal.

Los enlaces de salto son especialmente útiles para las personas que navegan con la ayuda de tecnología de asistencia, como controles de interruptores, comandos de voz o varitas bucales o para la cabeza, con las que el acto de moverse a través de enlaces repetitivos puede ser una tarea laboriosa.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/2013-05-11-skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

#### Proximidad

Si tenemos grandes cantidades de contenido interactivo, incluidas anclas, colocadas muy cerca visualmente entre sí, deben tener espacio insertado para separarlas. Este espaciado es beneficioso para las personas que sufren problemas de control de la motricidad fina y pueden activar accidentalmente el contenido interactivo incorrecto mientras navegan.

El espaciado se puede crear usando propiedades CSS como {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## ¡Pon a prueba tus habilidades!

Ha llegado al final de este artículo, pero ¿recuerdas la información más importante? Consulta [Test your skills: HTML Accessibility](/es/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility) para verificar que has retenido esta información antes de continuar.

## Resumen

Ahora ya deberías conocer bien la escritura de HTML accesible para la mayoría de las ocasiones. Nuestro artículo de conceptos básicos de WAI-ARIA también llenará algunos vacíos en este conocimiento, pero este artículo se ha ocupado de los conceptos básicos. A continuación, exploraremos CSS y JavaScript, y cómo la accesibilidad se ve afectada por su buen o mal uso.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
