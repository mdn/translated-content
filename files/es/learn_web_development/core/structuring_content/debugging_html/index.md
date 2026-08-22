---
title: Depuración de HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

Escribir HTML está bien, pero ¿qué pasa si algo sale mal y no puedes descubrir dónde está el error en el código? Este artículo te presentará algunas herramientas que pueden ayudarte a encontrar y corregir errores en HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, tal como se describe en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >. Semántica a nivel de texto como <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        > y <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >. <a href="/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >HTML estructural</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>El contexto clave sobre la depuración de HTML.</li>
          <li>Usar el inspector del DOM en las herramientas de desarrollo de tu navegador para profundizar en tu código HTML.</li>
          <li>Explorar los tipos de errores comunes en HTML.</li>
          <li>Usar el <a href="https://validator.w3.org/">validador de HTML</a> para detectar errores en HTML.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Depurar no da miedo

Cuando escribes código de algún tipo, todo va bien, hasta ese temido momento en el que ocurre un error: hiciste algo mal, así que tu código no funciona, ya sea que no funcione en absoluto, o no funcione exactamente como querías. Por ejemplo, a continuación se muestra un error reportado al intentar {{glossary("compile", "compilar")}} un programa simple escrito en el lenguaje [Rust](https://rust-lang.org/).

![A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string.](error-message.png)

Aquí, el mensaje de error es relativamente fácil de entender: "cadena de comillas dobles sin terminar". Si observas el listado, probablemente puedas ver cómo a `println!(Hello, world!");` le podría faltar lógicamente una comilla doble. Sin embargo, los mensajes de error pueden volverse rápidamente más complicados y menos fáciles de interpretar a medida que los programas crecen, e incluso los casos simples pueden parecer un poco intimidantes para alguien que no sabe nada de Rust.

Sin embargo, depurar no tiene por qué dar miedo: la clave para sentirte cómodo escribiendo y depurando cualquier código es la familiaridad tanto con el lenguaje como con las herramientas asociadas.

## HTML y depuración

HTML no es tan complicado de entender como Rust. HTML no se compila a una forma diferente antes de analizarse (se _interpreta_, no se _compila_). Y la sintaxis de {{glossary("element", "elemento")}} de HTML es, sin duda, mucho más fácil de entender que la de un "lenguaje de programación real" como Rust, {{glossary("JavaScript")}} o {{glossary("Python")}}.

La forma en que los navegadores analizan el HTML es mucho más **permisiva** que la manera en que se analizan la mayoría de los lenguajes de programación, lo cual es a la vez algo bueno y algo malo.

Pero antes que nada, ¿qué queremos decir con permisiva? Bueno, por lo general, cuando haces algo mal en el código, hay dos tipos principales de errores con los que te puedes encontrar:

- **Errores de sintaxis**: son erratas en tu código que hacen que el programa no se ejecute, como el error de Rust que se mostró anteriormente. Suelen ser fáciles de corregir siempre que estés familiarizado con la sintaxis del lenguaje y sepas qué significan los mensajes de error.
- **Errores lógicos**: son errores en los que la sintaxis en realidad es correcta, pero el código no hace lo que pretendías, lo que significa que el programa se ejecuta de forma incorrecta. Suelen ser más difíciles de corregir que los errores de sintaxis, ya que no hay un mensaje de error que te dirija al origen del error.

El HTML en sí no sufre de errores de sintaxis porque los navegadores lo analizan de forma permisiva, lo que significa que la página se sigue mostrando aunque haya errores de sintaxis en el código fuente. Los navegadores tienen reglas incorporadas que indican cómo interpretar el marcado HTML escrito incorrectamente (a menudo llamado marcado **inválido** o **mal formado**), cambiándolo automáticamente a un marcado válido.

Por ejemplo, el siguiente fragmento de HTML contiene elementos anidados incorrectamente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

La etiqueta de cierre `</strong>` debería estar antes de la etiqueta de cierre `</em>`, pero no es así: está después.

Si cargas este HTML en un navegador y luego observas el [DOM renderizado](/es/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html), verás que el navegador corrigió el anidamiento:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Entonces, ¿por qué esto es a la vez bueno y malo? Bueno, en este caso el navegador creó el resultado esperado, pero como verás [más adelante](#tu_turno_estudiando_html_con_el_inspector_del_dom), esto no siempre es así. Siempre obtendrás _algo_ funcionando, pero el navegador no siempre lo interpreta correctamente, lo cual puede causar problemas. Es mejor escribir el marcado correcto desde el principio.

> [!NOTE]
> El HTML se analiza de forma permisiva porque, cuando se creó la web por primera vez, se decidió que publicar contenido era más importante que garantizar que la sintaxis fuera absolutamente correcta. Probablemente la web no sería tan popular como lo es hoy si hubiera sido más estricta desde el principio.

Entonces, ¿cómo encuentras errores de marcado? Más adelante te mostraremos cómo encontrar errores en HTML usando una herramienta llamada el [validador de HTML](#validacion_html), pero primero te mostraremos cómo inspeccionar tu HTML manualmente usando un **inspector del DOM**, y luego exploraremos qué tipos de errores de marcado podrías buscar, y cómo el navegador podría interpretarlos.

## Usar el inspector del DOM

Todos los navegadores modernos tienen incorporado un conjunto de [herramientas de desarrollo](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (devtools), que ofrecen un conjunto de funcionalidades para examinar la página web cargada en la pestaña actual. Estas pueden mostrarte qué HTML se renderiza en la página, qué CSS se aplica a cada nodo del DOM, qué JavaScript se ejecuta en la página, y más. También te permiten editar el código en ejecución y ver el efecto en tiempo real en la página.

Puedes abrir las devtools de forma similar en cada navegador; consulta [Cómo abrir las devtools en tu navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) para aprender cómo hacerlo.

Para este artículo, la única función de las devtools que es relevante es el **inspector del DOM**, que muestra el DOM HTML renderizado actualmente y te permite editarlo. Veamos esto ahora:

1. Abre las devtools en tu navegador.
2. Abre el inspector del DOM. Está en el mismo lugar en cada navegador: la primera pestaña en las devtools, al inicio de la fila. En Firefox se llama _Inspector_, mientras que en Safari, Edge y Chrome se llama _Elements_. Esta debería ser la pestaña seleccionada por defecto cuando abres las devtools por primera vez, pero selecciónala si no lo es.
3. Examina la estructura del árbol del DOM que se muestra en la pestaña, y observa cómo puedes hacer clic en las pequeñas flechas de expansión al inicio de cada nodo del DOM para expandirlos y contraerlos, y revelar sus nodos descendientes. También puedes usar las teclas de cursor arriba y abajo para moverte entre los nodos, y las teclas de cursor derecha e izquierda para expandirlos y contraerlos.
4. También prueba a pasar el cursor sobre los nodos (o seleccionarlos con las teclas de cursor), y observa cómo el elemento sobre el que está el cursor (o el seleccionado) se resalta en el viewport.
5. También puedes editar el DOM renderizado. No usaremos la funcionalidad de edición en este artículo, pero tómate un tiempo para investigar cómo hacerlo si tienes curiosidad.

## Tu turno: estudiando HTML con el inspector del DOM

En esta sección, estudiarás algo de código usando el inspector del DOM y verás cómo maneja el navegador los errores comunes de marcado.

1. Primero, guarda el siguiente listado de archivo HTML como `debug-example.html`, en algún lugar de tu máquina local. Esta demostración está escrita deliberadamente con algunos errores incorporados para que los exploremos.

   ```html-nolint
   <!doctype html>
   <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <title>HTML debugging examples</title>
    </head>

    <body>
      <h1>HTML debugging examples</h1>
      <p>What causes errors in HTML?
      <ul>
        <li>Unclosed elements: If an element is <strong>not closed properly,then its effect can spread to areas you didn't intend
        <li>Badly nested elements: Nesting elements properly is also very important for code behaving correctly. <strong>strong <em>strong emphasized?</strong> what is this?</em>
        <li>Unclosed attributes: Another common source of HTML problems. Let's look at an example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a>
      </ul>
    </body>
   </html>
   ```

2. A continuación, ábrelo en un navegador. Verás algo como esto: ![A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes.](badly-formed-html.png)
3. Esto no se ve nada bien de inmediato; veamos el código fuente para tratar de entender por qué (solo se muestra el contenido del `body`):

   ```html
   <h1>HTML debugging examples</h1>

   <p>What causes errors in HTML?

   <ul>
     <li>Unclosed elements: If an element is <strong>not closed properly,
         then its effect can spread to areas you didn't intend

     <li>Badly nested elements: Nesting elements properly is also very important
         for code behaving correctly. <strong>strong <em>strong emphasized?</strong>
         what is this?</em>

     <li>Unclosed attributes: Another common source of HTML problems. Let's
         look at an example: <a href="https://www.mozilla.org/>link to Mozilla
         homepage</a>
   </ul>
   ```

4. Repasemos los problemas:
   - Los elementos {{htmlelement("p","párrafo")}} y {{htmlelement("li","elemento de lista")}} no tienen etiquetas de cierre. Mirando la imagen de arriba, esto no parece haber afectado demasiado el renderizado del marcado, ya que es fácil inferir dónde debería terminar un elemento y empezar otro.
   - El primer elemento {{htmlelement("strong")}} no tiene etiqueta de cierre. Esto es un poco más problemático, ya que no es fácil saber dónde se supone que debe terminar el elemento. De hecho, todo el resto del texto se ha renderizado en negrita.
   - Esta sección está mal anidada: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. No es fácil saber cómo se ha interpretado esto debido al problema anterior.
   - Al valor del atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href) le falta una comilla doble de cierre. Esto parece haber causado el mayor problema: el enlace no se renderizó en absoluto.

5. Ahora examinemos el DOM renderizado, en lugar del código fuente. Para hacer esto, abre el inspector del DOM de tu navegador. Verás una representación del marcado renderizado: ![The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text "What causes errors in HTML?" Here you can see that the paragraph element has been closed by the browser.](html-inspector.png)
6. Observa cómo el navegador intentó corregir nuestros errores de HTML (hicimos la revisión en Firefox; otros navegadores modernos _deberían_ dar el mismo resultado):
   - A los párrafos y elementos de lista se les agregaron etiquetas de cierre.
   - No queda claro dónde debería cerrarse el primer elemento `<strong>`, así que el navegador envolvió cada bloque de texto por separado en su propio elemento `<strong>`, ¡hasta el final del documento!
   - El anidamiento incorrecto fue corregido por el navegador de la siguiente manera:

   ```html
   <strong>
     strong
     <em>strong emphasized?</em>
   </strong>
   <em> what is this?</em>
   ```

   - El enlace con la comilla doble faltante fue eliminado por completo. El último elemento de la lista se ve así:

   ```html
   <li>
     <strong>
       Unclosed attributes: Another common source of HTML problems. Let's look
       at an example:
     </strong>
   </li>
   ```

## Validación HTML

Puedes ver por el ejemplo anterior que realmente quieres asegurarte de que tu HTML esté bien formado. Pero, ¿cómo? En un ejemplo pequeño como el que vimos arriba, es fácil revisar las líneas y encontrar los errores, pero ¿qué pasa con un documento HTML enorme y complejo?

La herramienta para esta tarea es el [Servicio de validación de marcado](https://validator.w3.org/) (o **validador de HTML**), creado y mantenido por el W3C (sobre el cual aprendiste en [El modelo de estándares web](/es/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)). El validador toma un documento HTML como entrada, lo revisa, y te entrega un informe que te indica qué está mal en tu HTML.

![The HTML validator homepage](validator.png)

Para especificar el HTML que se va a validar, puedes proporcionar una dirección web, subir un archivo HTML, o ingresar directamente algo de código HTML.

## Validando un documento HTML

En esta tarea, te haremos probar el validador de HTML. Validarás nuestro [documento de ejemplo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) y verás qué resultados devuelve. Este ejemplo contiene el mismo HTML que estudiaste con el inspector del DOM anteriormente.

1. Primero, carga el [Servicio de validación de marcado](https://validator.w3.org/) en una nueva pestaña del navegador, si aún no está abierto.
2. Cambia a la pestaña [Validar mediante entrada directa](https://validator.w3.org/#validate_by_input).
3. Copia todo el código del documento de ejemplo (no solo el `body`) y pégalo en el área de texto grande que se muestra en el Servicio de validación de marcado.
4. Presiona el botón _Check_.

Esto debería darte una lista de errores y otra información.

![A list of HTML validation results from the W3C markup validation service](validation-results.png)

### Interpretando los mensajes de error

Los mensajes de error suelen ser útiles, pero a veces no son tan fáciles de entender. Con un poco de práctica, puedes aprender a interpretarlos para corregir tu código. Repasemos los mensajes de error y veamos qué significan. Verás que cada mensaje viene con un número de línea y columna para ayudarte a ubicar el error fácilmente.

- "Etiqueta de cierre `li` implícita, pero había elementos abiertos" (2 casos): estos mensajes indican que hay un elemento abierto que debería cerrarse. La etiqueta de cierre está implícita, pero en realidad no está presente. La información de línea/columna apunta a la primera línea después de donde realmente debería estar la etiqueta de cierre, pero esta es una pista suficientemente buena para ver qué está mal.
- "Elemento `strong` sin cerrar": esto es más fácil de entender: un elemento {{htmlelement("strong")}} no está cerrado, y la información de línea/columna apunta exactamente a dónde está.
- "La etiqueta de cierre `strong` viola las reglas de anidamiento": esto señala los elementos mal anidados, y la información de línea/columna indica dónde están.
- "Se alcanzó el final del archivo dentro del valor de un atributo. Ignorando la etiqueta": este es bastante críptico; se refiere a que hay un valor de atributo mal formado en algún lugar, posiblemente cerca del final del archivo, ya que el final del archivo aparece dentro del valor del atributo. El hecho de que el navegador no renderice el enlace debería darnos una buena pista sobre qué elemento tiene el problema.
- "Se alcanzó el final del archivo y había elementos abiertos": esto es un poco ambiguo, pero básicamente se refiere a que hay elementos abiertos que necesitan cerrarse correctamente. Los números de línea apuntan a las últimas líneas del archivo, y este mensaje de error viene con una línea de código que señala un ejemplo de un elemento abierto:

```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
```

> [!NOTE]
> A un atributo al que le falta una comilla de cierre puede provocar un elemento abierto, porque el resto del documento se interpreta como el contenido del atributo.

- "Elemento `ul` sin cerrar": esto no es muy útil, ya que el elemento {{htmlelement("ul")}} _sí_ está cerrado correctamente. Este error ocurre porque el elemento {{htmlelement("a")}} no está cerrado, debido a que falta la comilla de cierre.

Si no logras entender qué significa cada mensaje de error, no te preocupes. Una buena estrategia es corregir unos pocos errores a la vez, y luego volver a validar tu HTML después de cada tanda de correcciones para ver qué errores quedan. A veces, corregir un error anterior también elimina otros mensajes de error, ya que un solo problema suele causar varios errores, en un efecto dominó.

Sabrás que todos tus errores están corregidos cuando veas un pequeño y agradable banner verde que te indique que no hay errores que reportar. Al momento de escribir esto, decía "Verificación del documento completada. No hay errores ni advertencias que mostrar."

## Resumen

Y así llegamos al final, una introducción a la depuración de HTML, que debería darte algunas habilidades útiles para tener en cuenta al depurar HTML, pero también CSS y JavaScript más adelante en el curso. Esto también marca el final del módulo _Estructurando contenido con HTML_.

Tu siguiente paso es empezar a aprender sobre el estilo en la web en nuestro módulo de [Fundamentos de estilos CSS](/es/docs/Learn_web_development/Core/Styling_basics).

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
