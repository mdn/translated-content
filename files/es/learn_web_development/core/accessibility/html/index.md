---
title: "HTML: Una buena base para la accesibilidad"
short-title: HTML accesible
slug: Learn_web_development/Core/Accessibility/HTML
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}

Se puede hacer accesible una gran cantidad de contenido web solo asegurándose de que se utilicen siempre los elementos correctos del lenguaje de marcado de hipertexto (HTML) para el propósito correcto. Este artículo analiza en detalle cómo se puede usar HTML para garantizar la máxima accesibilidad.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad con <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/es/docs/Learn_web_development/Core/Styling_basics">CSS</a>, y una <a href="/es/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">comprensión básica de los conceptos de accesibilidad</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Usar HTML semántico, o "el elemento correcto para el trabajo correcto", porque el navegador ya proporciona muchos apoyos de accesibilidad integrados.</li>
          <li>Buenas prácticas de accesibilidad como el texto alternativo, buen texto de enlace, etiquetas de formulario, y encabezados y alcance (`scope`) de filas y columnas de tablas.</li>
          <li>Usar un lenguaje sencillo y claro, evitando la jerga y las abreviaciones cuando sea posible, y proporcionando definiciones cuando no lo sea.</li>
          <li>El concepto y la práctica de la accesibilidad con el teclado.</li>
          <li>La importancia del orden del código fuente.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML y accesibilidad

Cuando aprendas más de HTML —leas más recursos, mires más ejemplos, etc.— vas a seguir viendo un tema en común: la importancia de usar HTML semántico (a veces llamado POSH, o _Plain Old Semantic HTML_). Esto significa usar los elementos HTML correctos para su propósito, tanto como sea posible.

Puedes estarte preguntando por qué es esto tan importante. Después de todo, puedes usar una combinación de CSS y JavaScript para hacer que casi cualquier elemento HTML se comporte en la forma que tú quieras. Por ejemplo, un botón de control para reproducir un vídeo en tu sitio puede estar marcado así:

```html
<div>Reproducir vídeo</div>
```

Pero, como verás en más detalle más adelante, tiene sentido utilizar el elemento correcto para este trabajo:

```html
<button>Reproducir vídeo</button>
```

No solo los `<button>` de HTML tienen un estilo adecuado aplicado por defecto (que probablemente quieras sobrescribir), sino que también tienen accesibilidad de teclado integrada —los usuarios pueden navegar entre botones usando la tecla <kbd>Tab</kbd> y activar su selección usando <kbd>Espacio</kbd>, <kbd>Return</kbd> o <kbd>Enter</kbd>.

El HTML semántico no lleva más tiempo escribirlo que el marcado no semántico (malo) si lo haces de forma consistente desde el comienzo de tu proyecto. Y, aún mejor, el marcado semántico tiene otros beneficios más allá de la accesibilidad:

1. **Más fácil de desarrollar** — como se mencionó, obtienes algunas funcionalidades gratis, y podría decirse que es más fácil de entender.
2. **Mejor en móviles** — el HTML semántico es, podría decirse, más liviano en tamaño de archivo que el código espagueti no semántico, y más fácil de hacer responsivo.
3. **Bueno para el SEO** — los motores de búsqueda dan más importancia a las palabras clave dentro de encabezados, enlaces, etc. que a las palabras clave incluidas en `<div>`s no semánticos, etc., así que tus documentos serán más fáciles de encontrar para tus clientes.

Continuemos y veamos el HTML accesible en más detalle.

## Buena semántica

Ya hemos hablado de la importancia de una semántica adecuada, y de por qué deberíamos usar el elemento HTML correcto para el trabajo. Esto no se puede ignorar, ya que es uno de los principales lugares donde la accesibilidad se rompe gravemente si no se maneja correctamente.

Ahí afuera, en la web, la verdad es que las personas hacen cosas muy extrañas con el marcado HTML. A menudo, el mal uso de HTML se debe a prácticas de antaño que aún no han desaparecido, pero a veces ocurre porque los autores no saben hacerlo mejor. Sea cual sea el caso, deberías reemplazar el mal código por un buen marcado semántico siempre que sea posible, tanto en páginas HTML estáticas como en HTML generado dinámicamente desde código [del lado del servidor](/es/docs/Learn_web_development/Extensions/Server-side) o [frameworks de JavaScript del lado del cliente](/es/docs/Learn_web_development/Core/Frameworks_libraries) como React.

A veces no estás en posición de deshacerte del mal marcado —tus páginas pueden depender de código del lado del servidor o de componentes web/de framework sobre los que no tienes control, o puedes tener contenido de terceros en tu página (como banners publicitarios).

El objetivo no es "todo o nada"; cada mejora que hagas ayudará a la causa de la accesibilidad.

### Usa contenido de texto bien estructurado

Una de las mejores ayudas de accesibilidad que puede tener un usuario de lector de pantalla es una excelente estructura de texto con encabezados, párrafos, listas, etc. Un buen ejemplo semántico puede lucir algo como lo siguiente:

```html example-good
<h1>Mi encabezado</h1>

<p>Esta es la primera sección de mi documento.</p>

<p>También voy a agregar otro párrafo aquí.</p>

<ol>
  <li>Aquí está</li>
  <li>una lista para</li>
  <li>que la leas</li>
</ol>

<h2>Mi subtítulo</h2>

<p>
  Esta es la primera subsección de mi documento. ¡Me encantaría que la gente
  pudiera encontrar este contenido!
</p>

<h2>Mi segundo subtítulo</h2>

<p>
  Esta es la segunda subsección de mi contenido, que creo que es más interesante
  que la anterior.
</p>
```

Hemos preparado una versión con texto más largo para que la pruebes con un lector de pantalla (ver [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Si intentas navegar por ella, verás que es bastante fácil de recorrer:

1. El lector de pantalla lee cada encabezado a medida que avanzas por el contenido, notificándote qué es un encabezado, qué es un párrafo, etc.
2. Se detiene después de cada elemento, dejándote avanzar al ritmo que te resulte cómodo.
3. Puedes saltar al encabezado siguiente/anterior en muchos lectores de pantalla.
4. También puedes obtener una lista de todos los encabezados en muchos lectores de pantalla, lo que te permite usarlos como una práctica tabla de contenidos para encontrar contenido específico.

A veces las personas escriben encabezados, párrafos, etc. usando saltos de línea y agregando elementos HTML puramente por motivos de estilo, algo como lo siguiente:

```html example-bad
<span style="font-size: 3em">Mi encabezado</span> <br /><br />
Esta es la primera sección de mi documento.
<br /><br />
También voy a agregar otro párrafo aquí.
<br /><br />
1. Aquí está
<br /><br />
2. una lista para
<br /><br />
3. que la leas
<br /><br />
<span style="font-size: 2.5em">Mi subtítulo</span>
<br /><br />
Esta es la primera subsección de mi documento. ¡Me encantaría que la gente
pudiera encontrar este contenido!
<br /><br />
<span style="font-size: 2.5em">Mi segundo subtítulo</span>
<br /><br />
Esta es la segunda subsección de mi contenido. Creo que es más interesante que
la anterior.
```

Si pruebas nuestra versión más larga con un lector de pantalla (ver [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), no vas a tener una muy buena experiencia —el lector de pantalla no tiene nada que usar como señal, por lo que no puedes recuperar una tabla de contenidos útil, y toda la página se ve como un único bloque gigante, así que se lee de una sola vez, todo junto.

Hay otros problemas más allá de la accesibilidad —es más difícil aplicar estilo al contenido con CSS, o manipularlo con JavaScript, por ejemplo, porque no hay elementos para usar como selectores.

### Usa un lenguaje claro

El lenguaje que uses también puede afectar la accesibilidad. En general, deberías usar un lenguaje claro que no sea demasiado complejo y que no use jerga o términos de argot innecesarios. Esto no solo beneficia a las personas con discapacidades cognitivas u otras: beneficia a los lectores para quienes el texto no está escrito en su lengua materna, a la gente más joven…, ¡a todo el mundo, de hecho! Además de esto, deberías tratar de evitar usar lenguaje y caracteres que el lector de pantalla no pueda leer con claridad. Por ejemplo:

- No uses guiones si puedes evitarlo. En lugar de escribir 5–7, escribe 5 a 7.
- Expande las abreviaturas —en lugar de escribir Ene, escribe Enero.
- Expande los acrónimos, al menos una o dos veces, y luego usa la etiqueta [`<abbr>`](/es/docs/Web/HTML/Reference/Elements/abbr) para describirlos.

### Estructura las secciones de la página de forma lógica

Deberías usar [elementos de seccionamiento](/es/docs/Web/HTML/Reference/Elements#seccionamiento_del_contenido) apropiados para estructurar tus páginas web, por ejemplo la navegación ({{htmlelement("nav")}}), el pie de página ({{htmlelement("footer")}}), y las unidades de contenido que se repiten ({{htmlelement("article")}}). Estos proporcionan semántica adicional para que los lectores de pantalla (y otras herramientas) den a los usuarios pistas adicionales sobre el contenido por el que están navegando.

Por ejemplo, una estructura de contenido moderna podría lucir algo así:

```html
<header>
  <h1>Encabezado</h1>
</header>

<nav>
  <!-- la navegación principal va aquí -->
</nav>

<!-- Aquí está el contenido principal de nuestra página -->
<main>
  <!-- Contiene un artículo -->
  <article>
    <h2>Encabezado del artículo</h2>

    <!-- el contenido del artículo va aquí -->
  </article>

  <aside>
    <h2>Relacionado</h2>

    <!-- el contenido lateral va aquí -->
  </aside>
</main>

<!-- Y aquí está nuestro pie de página principal, que se usa en todas las páginas de nuestro sitio web -->

<footer>
  <!-- el contenido del pie de página va aquí -->
</footer>
```

Puedes encontrar un [ejemplo completo aquí](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/).

Además de tener una buena semántica y un diseño atractivo, tu contenido debería tener sentido lógico en su orden de origen —siempre puedes colocarlo donde quieras usando CSS más adelante, pero deberías tener el orden de origen correcto desde el principio, para que lo que se les lea a los usuarios de lectores de pantalla tenga sentido.

### Usa controles de interfaz de usuario semánticos siempre que sea posible

Por controles de interfaz de usuario nos referimos a las partes principales de los documentos web con las que los usuarios interactúan —habitualmente botones, enlaces y controles de formulario. En esta sección, veremos los aspectos básicos de accesibilidad a tener en cuenta al crear dichos controles. Los artículos posteriores sobre WAI-ARIA y multimedia analizarán otros aspectos de la accesibilidad de la interfaz de usuario.

Un aspecto clave de la accesibilidad de los controles de interfaz de usuario es que, de forma predeterminada, los navegadores permiten que sean manipulados con el teclado. Puedes probar esto usando nuestro ejemplo [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (ver el [código fuente](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)). Ábrelo en una pestaña nueva y prueba a pulsar la tecla de tabulación; después de algunas pulsaciones, deberías ver que el foco de tabulación comienza a moverse a través de los diferentes elementos enfocables. A los elementos enfocados se les da un estilo resaltado predeterminado en cada navegador (difiere ligeramente entre navegadores) para que puedas saber qué elemento está enfocado.

![Tres botones con el texto "Click me!", "Click me too!" y "And me!" respectivamente. El tercer botón tiene un contorno azul alrededor para indicar el foco de tabulación actual.](button-focused-unfocused.png)

> [!NOTE]
> Puedes activar una superposición que muestra el orden de tabulación de la página en tus herramientas de desarrollo. Para más información, consulta: [Inspector de accesibilidad > Mostrar el orden de tabulación de la página web](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Después puedes pulsar Enter/Return para seguir un enlace enfocado o pulsar un botón (hemos incluido algo de JavaScript para que los botones muestren un mensaje de alerta), o empezar a escribir para introducir texto en un campo de texto. Otros elementos de formulario tienen controles diferentes; por ejemplo, el elemento {{htmlelement("select")}} puede mostrar sus opciones y recorrerlas usando las teclas de flecha arriba y abajo.

Básicamente obtienes este comportamiento gratis, solo con usar los elementos apropiados, por ejemplo:

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
  <button data-message="Esto es del tercer botón">¡Y a mí!</button>
</p>

<h2>Formulario</h2>

<form>
  <div>
    <label for="nombre">Escribe tu nombre:</label>
    <input type="text" id="nombre" name="nombre" />
  </div>
  <div>
    <label for="edad">Escribe tu edad:</label>
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

Esto significa usar enlaces, botones, elementos de formulario y etiquetas de manera apropiada (incluido el elemento {{htmlelement("label")}} para los controles de formulario).

Sin embargo, este es otro caso en el que la gente a veces hace cosas extrañas con HTML. Por ejemplo, a veces ves botones marcados con {{htmlelement("div")}}s, por ejemplo:

```html example-bad
<div data-message="Esto es del primer botón">¡Haz clic aquí!</div>
<div data-message="Esto es del segundo botón">¡Haz clic aquí también!</div>
<div data-message="Esto es del tercer botón">¡Y a mí!</div>
```

Pero no se aconseja usar un código así —pierdes inmediatamente la accesibilidad nativa del teclado que habrías tenido si hubieras usado elementos {{htmlelement("button")}}, además de que no obtienes ninguno de los estilos CSS predeterminados que tienen los botones. En el caso raro, o casi inexistente, en el que necesites usar un elemento que no sea un botón para un botón, usa el [rol `button`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) e implementa todos los comportamientos predeterminados de un botón, incluido el soporte de teclado y de botón del ratón.

#### Reincorporando la accesibilidad de teclado

Volver a agregar estas ventajas requiere algo de trabajo (puedes ver un ejemplo en nuestro ejemplo [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) —consulta también el [código fuente](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Aquí le hemos dado a nuestros botones `<div>` falsos la capacidad de recibir foco (incluso mediante tabulación) dándole a cada uno el atributo `tabindex="0"`. También incluimos `role="button"` para que los usuarios de lectores de pantalla sepan que pueden enfocar e interactuar con el elemento:

```html
<div data-message="Esto es del primer botón" tabindex="0" role="button">
  ¡Haz clic aquí!
</div>
<div data-message="Esto es del segundo botón" tabindex="0" role="button">
  ¡Haz clic aquí también!
</div>
<div data-message="Esto es del tercer botón" tabindex="0" role="button">
  ¡Y a mí!
</div>
```

Básicamente, el atributo [`tabindex`](/es/docs/Web/HTML/Reference/Global_attributes/tabindex) está destinado principalmente a permitir que los elementos tabulables tengan un orden de tabulación personalizado (especificado en orden numérico positivo), en lugar de simplemente recorrerse en su orden de origen predeterminado. Esto casi siempre es una mala idea, ya que puede causar mucha confusión. Úsalo solo si realmente lo necesitas, por ejemplo, si el diseño muestra las cosas en un orden visual muy diferente al del código fuente, y quieres hacer que las cosas funcionen de manera más lógica. Hay otras dos opciones para `tabindex`:

- `tabindex="0"` —como se indicó anteriormente, este valor permite que los elementos que normalmente no son tabulables se conviertan en tabulables. Este es el valor más útil de `tabindex`.
- `tabindex="-1"` —esto permite que los elementos que normalmente no son tabulables reciban el foco mediante programación, por ejemplo, a través de JavaScript, o como destino de enlaces.

Si bien lo anterior nos permite tabular hasta los botones, no nos permite activarlos mediante la tecla <kbd>Enter</kbd>/<kbd>Return</kbd>. Para hacer eso, tuvimos que agregar el siguiente fragmento de JavaScript:

```js
document.onkeydown = (e) => {
  // La tecla Enter/Return
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

Aquí agregamos un detector de eventos al objeto `document` para detectar cuándo se ha presionado un botón en el teclado. Comprobamos qué botón se presionó mediante la propiedad [`key`](/es/docs/Web/API/KeyboardEvent/key) del objeto de evento; si la tecla presionada es <kbd>Enter</kbd>/<kbd>Return</kbd>, ejecutamos la función almacenada en el manejador `onclick` del botón usando `document.activeElement.click()`. [`activeElement`](/es/docs/Web/API/Document/activeElement) nos da el elemento que está actualmente enfocado en la página.

Esto es mucho trabajo extra para volver a incorporar la funcionalidad. Y seguramente surgirán otros problemas con ello. **Es mejor usar directamente el elemento correcto para el trabajo correcto desde el principio.**

#### Usa etiquetas de texto significativas

Las etiquetas de texto de los controles de interfaz de usuario son muy útiles para todos los usuarios, pero hacerlas bien es particularmente importante para los usuarios con discapacidades.

Deberías asegurarte de que las etiquetas de texto de tus botones y enlaces sean comprensibles y distintivas. No uses simplemente "Haz clic aquí" para tus etiquetas, ya que los usuarios de lectores de pantalla a veces obtienen una lista de botones y controles de formulario. La siguiente captura de pantalla muestra nuestros controles enumerados por VoiceOver en Mac.

![Lista de etiquetas de campos de formulario enumeradas por el software VoiceOver en Mac. Esta lista contiene etiquetas sin sentido como "botón de menú feliz" dadas a varios controles de formulario como botón, campo de texto y enlace.](voiceover-formcontrols.png)

Asegúrate de que tus etiquetas tengan sentido fuera de contexto, leídas por sí solas, así como en el contexto del párrafo en el que están. Por ejemplo, lo siguiente muestra un buen ejemplo de texto de enlace:

```html example-good
<p>
  Las ballenas son criaturas realmente impresionantes.
  <a href="whales.html">Descubre más sobre las ballenas</a>.
</p>
```

pero esto es un mal texto de enlace:

```html example-bad
<p>
  Las ballenas son criaturas realmente impresionantes. Para descubrir más sobre
  las ballenas, <a href="whales.html">haz clic aquí</a>.
</p>
```

> [!NOTE]
> Encontrarás mucho más sobre la implementación de enlaces y las buenas prácticas en nuestro artículo [Crear enlaces](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links). También puedes ver algunos ejemplos buenos y malos en [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) y [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Las etiquetas de formulario también son importantes para darte una pista sobre lo que necesitas introducir en cada campo de formulario. El siguiente parece un ejemplo bastante razonable:

```html example-bad
Escribe tu nombre: <input type="text" id="nombre" name="nombre" />
```

Sin embargo, esto no es tan útil para los usuarios con discapacidad. No hay nada en el ejemplo anterior que asocie la etiqueta de forma inequívoca con la entrada del formulario y que deje claro cómo rellenarla si no puedes verla. Si accedes a esto con algunos lectores de pantalla, es posible que solo obtengas una descripción del tipo "editar texto".

El siguiente es un ejemplo mucho mejor:

```html example-good
<div>
  <label for="nombre">Escribe tu nombre:</label>
  <input type="text" id="nombre" name="nombre" />
</div>
```

Con un código como este, la etiqueta estará claramente asociada con la entrada; la descripción se parecerá más a "Escribe tu nombre: editar texto".

![Una buena etiqueta de formulario que dice "Escribe tu nombre" se le da a un control de formulario de entrada de texto.](voiceover-good-form-label.png)

Como ventaja adicional, en la mayoría de los navegadores asociar una etiqueta con una entrada de formulario significa que puedes hacer clic en la etiqueta para seleccionar o activar el elemento del formulario. Esto le da a la entrada un área de impacto más grande, lo que facilita seleccionarla.

> [!NOTE]
> Puedes ver algunos ejemplos de formularios buenos y malos en [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) y [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html).

Puedes encontrar una buena explicación de la importancia de las etiquetas de texto adecuadas, y cómo investigar problemas de etiquetas de texto usando el [Inspector de accesibilidad de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), en el siguiente vídeo:

{{EmbedYouTube("YhlAVlfH0rQ")}}

## Tablas de datos accesibles

Se puede escribir una tabla de datos básica con un marcado muy simple, por ejemplo:

```html
<table>
  <tr>
    <td>Nombre</td>
    <td>Edad</td>
    <td>Pronombres</td>
  </tr>
  <tr>
    <td>Xavier</td>
    <td>23</td>
    <td>él</td>
  </tr>
  <tr>
    <td>Tina</td>
    <td>8</td>
    <td>ella</td>
  </tr>
  <tr>
    <td>Sam</td>
    <td>17</td>
    <td>ella</td>
  </tr>
</table>
```

Pero esto tiene problemas —no hay forma de que un usuario de lector de pantalla asocie filas o columnas entre sí como agrupaciones de datos. Para hacer esto, necesita saber cuáles son las filas de encabezado y si están encabezando filas, columnas, etc. Esto solo se puede hacer visualmente en la tabla anterior (ve a [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) y prueba el ejemplo tú mismo).

Ahora echa un vistazo a nuestro [ejemplo de tabla de bandas punk](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) —aquí puedes ver algunas ayudas de accesibilidad en acción:

- Los encabezados de tabla se definen usando elementos {{htmlelement("th")}} —también puedes especificar si son encabezados de filas o de columnas mediante el atributo `scope`. Esto te da grupos completos de datos que los lectores de pantalla pueden consumir como unidades individuales.
- El elemento {{htmlelement("caption")}} y el atributo `summary` del elemento `<table>` hacen trabajos similares —actúan como texto alternativo para una tabla, dándole al usuario de lector de pantalla un útil resumen rápido del contenido de la tabla. Generalmente se prefiere el elemento `<caption>`, ya que también hace que su contenido sea accesible para los usuarios videntes, quienes también pueden encontrarlo útil. Realmente no necesitas usar ambos.

> [!NOTE]
> Consulta nuestro artículo [Accesibilidad de tablas HTML](/es/docs/Learn_web_development/Core/Structuring_content/Table_accessibility) para más detalles sobre las tablas de datos accesibles.

## Alternativas de texto

Mientras que el contenido textual es inherentemente accesible, lo mismo no se puede decir necesariamente del contenido multimedia —el contenido de imagen y vídeo no puede ser visto por personas con discapacidad visual, y el contenido de audio no puede ser escuchado por personas con discapacidad auditiva. Cubrimos el contenido de vídeo y audio en detalle en [Multimedia accesible](/es/docs/Learn_web_development/Core/Accessibility/Multimedia), pero para este artículo veremos la accesibilidad del humilde elemento {{htmlelement("img")}}.

Tenemos un ejemplo simple escrito, [access-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html), que presenta cuatro copias de la misma imagen:

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="Un Tyrannosaurus Rex rojo: un dinosaurio de dos patas de pie erguido
  como un humano, con brazos pequeños, y una cabeza grande con muchos
  dientes afilados." />

<img
  src="dinosaur.png"
  alt="Un Tyrannosaurus Rex rojo: un dinosaurio de dos patas de pie erguido
  como un humano, con brazos pequeños, y una cabeza grande con muchos
  dientes afilados."
  title="El dinosaurio rojo de Mozilla" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  El Tyrannosaurus Rex rojo de Mozilla: un dinosaurio de dos patas de pie
  erguido como un humano, con brazos pequeños, y una cabeza grande con muchos
  dientes afilados.
</p>
```

La primera imagen, cuando la ve un lector de pantalla, realmente no le ofrece mucha ayuda al usuario —VoiceOver, por ejemplo, lee "/dinosaur.png, imagen". Lee el nombre del archivo para intentar proporcionar alguna ayuda. En este ejemplo, el usuario al menos sabrá que es una especie de dinosaurio, pero a menudo los archivos pueden subirse con nombres de archivo generados por la máquina (por ejemplo, de una cámara digital), y estos nombres de archivo probablemente no proporcionarían ningún contexto sobre el contenido de la imagen.

> [!NOTE]
> Por eso nunca debes incluir contenido de texto dentro de una imagen —los lectores de pantalla simplemente no pueden acceder a él. También hay otras desventajas —no puedes seleccionarlo ni copiarlo/pegarlo. ¡Simplemente no lo hagas!

Cuando un lector de pantalla encuentra la segunda imagen, lee el atributo `alt` completo —"Un Tyrannosaurus Rex rojo: un dinosaurio de dos patas de pie erguido como un humano, con brazos pequeños, y una cabeza grande con muchos dientes afilados.".

Esto resalta la importancia de no solo usar nombres de archivo significativos en caso de que el llamado **texto alternativo** no esté disponible, sino también de asegurarse de que el texto alternativo se proporcione en los atributos `alt` siempre que sea posible.

Ten en cuenta que el contenido del atributo `alt` siempre debe proporcionar una representación directa de la imagen y de lo que transmite visualmente. El texto alternativo debe ser breve y conciso, e incluir toda la información transmitida en la imagen que no esté ya duplicada en el texto que la rodea.

El contenido del atributo `alt` de una sola imagen difiere según el contexto. Por ejemplo, si la foto de Fluffy es un avatar junto a una reseña de comida para perros Yuckymeat, `alt="Fluffy"` es apropiado. Si la foto es parte de la página de adopción de Fluffy en la sociedad protectora de animales, se debería incluir la información que transmite la imagen y que sea relevante para un futuro dueño de perro que no esté duplicada en el texto que la rodea. Una descripción más larga, como `alt="Fluffy, un terrier tricolor de pelo muy corto, con una pelota de tenis en la boca."` es apropiada. Como el texto que la rodea probablemente ya menciona el tamaño y la raza de Fluffy, eso no se incluye en el `alt`. Sin embargo, como la biografía del perro probablemente no incluye la longitud del pelo, los colores, o las preferencias de juguetes, que el futuro dueño necesita saber, sí se incluye. ¿La imagen es al aire libre, o Fluffy tiene un collar rojo con una correa azul? No es importante en términos de adoptar a la mascota y por lo tanto no se incluye. Toda la información que transmite la imagen a la que un usuario vidente puede acceder y que sea relevante para el contexto es lo que hay que transmitir; nada más. Mantenlo breve, preciso y útil.

Cualquier conocimiento personal o descripción extra no debería incluirse aquí, ya que no es útil para las personas que no han visto la imagen antes. Si la pelota es el juguete favorito de Fluffy, y un usuario vidente no puede saberlo a partir de la imagen, entonces no lo incluyas.

Una cosa a considerar es si tus imágenes tienen significado dentro de tu contenido, o si son puramente decoración visual, y por lo tanto no tienen significado. Si son decorativas, es mejor escribir un texto vacío como valor del atributo `alt` (ver [Atributos alt vacíos](#atributos_alt_vacíos)) o simplemente incluirlas en la página como imágenes de fondo CSS.

> [!NOTE]
> Lee [Imágenes en HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_images) y [Imágenes responsivas](/es/docs/Web/HTML/Guides/Responsive_images) para mucha más información sobre la implementación de imágenes y las buenas prácticas asociadas.
> También puedes consultar [un árbol de decisión para alt](https://www.w3.org/WAI/tutorials/images/decision-tree/) (en inglés) para aprender a usar el atributo alt en imágenes en varias situaciones.

Si quieres proporcionar información contextual adicional, deberías ponerla en el texto que rodea la imagen, o dentro de un atributo `title`, como se muestra a continuación. En este caso, la mayoría de los lectores de pantalla leerán el texto alternativo, el atributo del título y el nombre del archivo. Además, los navegadores muestran el texto del título como información sobre herramientas al pasar el ratón por encima.

![Captura de pantalla de un Tyrannosaurus Rex rojo con el texto "El dinosaurio rojo de Mozilla" mostrado como información sobre herramientas al pasar el ratón por encima.](title-attribute.png)

Echemos otro vistazo rápido al cuarto método:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">El Tyrannosaurus Rex rojo de Mozilla…</p>
```

En este caso, no estamos usando el atributo `alt` en absoluto —en cambio, hemos presentado nuestra descripción de la imagen como un párrafo de texto normal, le hemos dado un `id`, y luego usamos el atributo `aria-labelledby` para referirnos a ese `id`, lo que hace que los lectores de pantalla usen ese párrafo como el texto alternativo o etiqueta de esa imagen. Esto es especialmente útil si quieres usar el mismo texto como etiqueta para varias imágenes —algo que no es posible con `alt`.

> [!NOTE]
> [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) es parte de la especificación [WAI-ARIA](https://w3c.github.io/aria/), que permite a los desarrolladores agregar semántica adicional a su marcado para mejorar la accesibilidad de los lectores de pantalla cuando sea necesario.

### Figuras y leyendas de figuras

HTML incluye dos elementos —{{htmlelement("figure")}} y {{htmlelement("figcaption")}}— que se supone que asocian una figura de algún tipo (podría ser cualquier cosa, no necesariamente una imagen) con una leyenda de figura:

```html
<figure>
  <img
    src="dinosaur.png"
    alt="El Tyrannosaurus de Mozilla"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    Un Tyrannosaurus Rex rojo: un dinosaurio de dos patas de pie erguido como un
    humano, con brazos pequeños, y una cabeza grande con muchos dientes
    afilados.
  </figcaption>
</figure>
```

Si bien hay un soporte mixto de los lectores de pantalla para asociar leyendas de figuras con sus figuras, incluir [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) o [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) crea la asociación si no hay ninguna presente. Dicho esto, la estructura del elemento es útil para el estilo con CSS, además de que proporciona una forma de colocar una descripción de la imagen junto a ella en el código fuente.

### Atributos alt vacíos

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: el rey de los dinosaurios
</h3>
```

Puede haber ocasiones en las que se incluya una imagen en el diseño de una página, pero su propósito principal sea la decoración visual. Notarás en el ejemplo de código anterior que el atributo `alt` de la imagen está vacío —esto es para que los lectores de pantalla reconozcan la imagen, pero no intenten describirla (en su lugar, dirían simplemente "imagen", o algo similar).

La razón para usar un `alt` vacío en lugar de no incluirlo es que muchos lectores de pantalla anuncian la URL completa de la imagen si no se proporciona un `alt`. En el ejemplo anterior, la imagen actúa como una decoración visual del encabezado al que está asociada. En casos como este, y en casos en los que una imagen es solo decoración y no tiene valor de contenido, deberías incluir un `alt` vacío en tus elementos `img`. Otra alternativa es usar el atributo aria [`role`](/es/docs/Web/Accessibility/ARIA/Reference/Roles) [`role="presentation"`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), ya que esto también evita que los lectores de pantalla lean el texto alternativo.

> [!NOTE]
> Si es posible, deberías usar CSS para mostrar imágenes que son solo decorativas.

## Más sobre enlaces

Los enlaces (el elemento [`<a>`](/es/docs/Web/HTML/Reference/Elements/a) con un atributo `href`), dependiendo de cómo se usen, pueden ayudar o perjudicar la accesibilidad. Por defecto, los enlaces son accesibles en apariencia. Pueden mejorar la accesibilidad al ayudar a un usuario a navegar rápidamente a diferentes secciones de un documento. También pueden dañar la accesibilidad si se elimina su estilo accesible o si JavaScript hace que se comporten de manera inesperada.

### Estilo de enlace

Por defecto, los enlaces son visualmente diferentes del resto del texto tanto en el color como en la [decoración de texto](/es/docs/Web/CSS/Reference/Properties/text-decoration), con enlaces azules y subrayados por defecto, morados y subrayados si se visitan, y con un [anillo de enfoque](/es/docs/Web/CSS/Reference/Selectors/:focus) cuando reciben el foco del teclado.

El color no debería usarse como el único método para distinguir los enlaces del contenido que no es un enlace. El color del texto del enlace, como todo el texto, debe ser significativamente diferente del color de fondo ([un contraste de 4.5:1](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)). Además, los enlaces deben ser visualmente muy diferentes del texto que no es un enlace, con un requisito de contraste mínimo de 3:1 entre el texto del enlace y el texto circundante, y entre los estados predeterminado, visitado y de enfoque/activo, y un contraste de 4.5:1 entre todos esos colores de estado y el color de fondo.

### Eventos `onclick`

A menudo se abusa de las etiquetas de anclaje con el evento `onclick` para crear pseudo-botones estableciendo **href** como `"#"` o `"javascript:void(0)"` para evitar que la página se actualice.

Estos valores provocan un comportamiento inesperado al copiar o arrastrar enlaces, abrir enlaces en una pestaña o ventana nueva, guardarlos como favoritos, y cuando JavaScript todavía se está descargando, produce errores, o está deshabilitado. Esto también transmite una semántica incorrecta a las tecnologías de asistencia (por ejemplo, lectores de pantalla). En estos casos, se recomienda usar un {{HTMLElement("button")}} en su lugar. En general, solo deberías usar un ancla para la navegación usando una URL adecuada.

### Enlaces externos y enlaces a recursos que no son HTML

Los enlaces que se abren en una pestaña o ventana nueva mediante la declaración `target="_blank"` y los enlaces cuyo valor `href` apunta a un recurso de archivo deben incluir un indicador sobre el comportamiento que se producirá cuando se active el enlace.

Las personas con baja visión, que navegan con la ayuda de tecnología de lectura de pantalla, o que tienen problemas cognitivos, pueden confundirse cuando la nueva pestaña, ventana o aplicación se abre de forma inesperada. Es posible que versiones antiguas del software de lectura de pantalla ni siquiera anuncien el comportamiento.

#### Enlace que abre una pestaña o ventana nueva

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (se abre en una ventana nueva)</a
>
```

#### Enlace a un recurso que no es HTML

```html
<a target="_blank" href="2017-annual-report.ppt"
  >Informe anual de 2017 (PowerPoint)</a
>
```

Si se usa un icono en lugar de texto para señalar este tipo de comportamiento de enlaces, asegúrate de que incluya una [descripción alternativa](/es/docs/Web/HTML/Reference/Elements/img#alt).

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

#### Enlaces de salto

Un enlace de salto, también conocido como skipnav, es un elemento `a` colocado lo más cerca posible del elemento de apertura {{HTMLElement("body")}} que enlaza al comienzo del contenido principal de la página. Este enlace permite a las personas evitar el contenido que se repite en varias páginas de un sitio web, como el encabezado y la navegación principal de un sitio.

Los enlaces de salto son especialmente útiles para las personas que navegan con la ayuda de tecnología de asistencia, como controles de interruptor, comandos de voz, o varitas bucales o de cabeza, donde el acto de moverse a través de enlaces repetitivos puede ser una tarea laboriosa.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

#### Proximidad

Grandes cantidades de contenido interactivo —incluidas las anclas— colocadas muy cerca visualmente unas de otras deberían tener espacio insertado para separarlas. Este espaciado es beneficioso para las personas que sufren problemas de control motor fino y que pueden activar accidentalmente el contenido interactivo equivocado mientras navegan.

El espaciado se puede crear usando propiedades CSS como {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Resumen

Ahora ya deberías dominar la escritura de HTML accesible para la mayoría de las ocasiones. En el próximo artículo, te daremos algunas pruebas que puedes usar para comprobar qué tan bien has entendido y retenido toda esta información.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Tooling","Learn_web_development/Core/Accessibility/Test_your_skills/HTML", "Learn_web_development/Core/Accessibility")}}
