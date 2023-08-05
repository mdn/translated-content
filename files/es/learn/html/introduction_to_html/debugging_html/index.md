---
title: Depurar el HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Escribir HTML es fácil, pero ¿qué pasa si algo va mal y desconocemos dónde está el error de codificación? En este artículo veremos varias herramientas que nos ayudarán a arreglar errores en HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con los principios básicos de HTML, como los vistos
        en el apartado
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar"
          >Empezar con el HTML</a
        >,
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML/texto"
          >Conocimientos básicos de aplicación de formato a textos con HTML</a
        >
        y
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML/Creating_hyperlinks"
          >Creación de hiperenlaces</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender el funcionamiento básico de las herramientas de depuración de
        problemas de código en HTML.
      </td>
    </tr>
  </tbody>
</table>

## Depurar no debe asustarnos

Cuando escribimos cualquier tipo de código, normalmente todo va bien, hasta ese fatídico momento en el que ocurre un error, hemos hecho algo mal y el código no funciona, o no funciona del todo, no lo suficientemente bien. Por ejemplo, el dibujo siguiente muestra un error de {{glossary("compile","compilación")}} de un programa sencillo escrito en lenguaje [Rust](https://www.rust-lang.org/).

![A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string.](error-message.png)En el ejemplo, el mensaje de error es fácilmente comprensible: "unterminated double quote string" (comillas sin cerrar en el texto). Si analizamos el listado de código, observamos que en `println!(Hello, world!");` faltan una comillas. Pero, los mensajes de error pueden complicarse con facilidad y su interpretación ser menos sencilla a medida que los programas aumentan en tamaño, e incluso casos sencillo pueden llegar a intimidar a alguien que no sabe nada de Rust.

Sin embargo, la depuración no nos debe asustar; la clave para sentirnos cómodos con la escritura y la depuración de cualquier lenguaje o código es la familiaridad, tanto con el lenguaje como con las herramientas.

## HTML y depuración

HTML no es tan complicado de entender como Rust; HTML no se compila por separado antes de que el navegador lo analice (se interpreta, no se compila). Y la sintaxis de los {{glossary("element","elementos")}} de HTML es mucho más sencilla de entender que la de cualquier lenguaje de programación real como Rust, {{glossary("JavaScript")}} o {{glossary("Python")}}. La forma en que los navegadores ejecutan HTML es más **permisiva** que la de los otros lenguajes, cosa que es buena y mala a la vez.

### Código permisivo

¿Qué queremos decir con _permisivo_? Bien, normalmente cuando hacemos algo mal al codificar, suele haber dos tipos de error:

- **Errores sintácticos**: Son errores de escritura en el código que impiden que el programa funcione, como el error en Rust de arriba. Suelen ser fáciles de arreglar si estamos familiarizados con las herramientas adecuadas y sabemos el significado de los mensajes de error.
- **Errores lógicos**: En estos errores la sintaxis es correcta, pero el código no hace lo que debería, por lo que el programa funciona de forma incorrecta. Estos errores son, por lo general, más difíciles de solucionar que los sintácticos, porque no hay mensajes de error que nos avisen de ellos.

HTML en sí mismo no suele producir errores sintácticos porque los navegadores son permisivos con ellos; o sea, el código se sigue ejecutando ¡aun si hay errores! Los navegadores disponen de reglas internas para saber cómo interpretar los errores de marcado incorrecto que encuentran, y seguirán funcionando aunque no produzcan el resultado esperado. Esto puede también ser un problema, por supuesto.

> **Nota:** La ejecución de HTML es permisiva porque cuando se creó la web por primera vez, se decidió que el hecho de permitir que la gente publicara su contenido era más importante que el hecho de que la sintaxis fuera totalmente correcta. La web no sería tan popular como lo es hoy en día si se hubiera sido más estricto desde el primer momento.

### Aprendizaje activo: Estudio del código permisivo

Es hora de estudiar la naturaleza permisiva del código HTML por nosotros mismos.

1. En primer lugar, hagamos una copia de nuestro [ejemplo-demo a depurar](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html) y guardémoslo de forma local. Está escrito para generar diversos errores que deberemos descubrir (se dice que el marcado de HTML está **mal formado**, en contraposición a un marcado **bien formado**).
2. A continuación, abrámoslo en un navegador; veremos lo siguiente:![A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. ](badly-formed-html.png)
3. No parece que esté bien; veamos el código fuente para ver qué podemos hacer (solo mostramos el contenido del \<body>):

   ```html
   <h1>HTML debugging examples</h1>

   <p>What causes errors in HTML?

   <ul>
     <li>Unclosed elements: If an element is <strong>not closed properly,
         then its effect can spread to areas you didn't intend

     <li>Badly nested elements: Nesting elements properly is also very important
         for code behaving correctly. <strong>strong <em>strong emphasised?</strong>
         what is this?</em>

     <li>Unclosed attributes: Another common source of HTML problems. Let's
         look at an example: <a href="https://www.mozilla.org/>link to Mozilla
         homepage</a>
   </ul>
   ```

4. Veamos qué problemas podemos descubrir:

   - El elemento {{htmlelement("p")}} y el {{htmlelement("li")}} no tienen etiquetas de cierre. Si comprobamos el resultado, no parece que haya generado un efecto grave en la representación del lenguaje de marcado, porque es fácil deducir que donde un elemento acaba, debería comenzar otro.
   - El primer elemento {{htmlelement("strong")}} no tiene etiqueta de cierre. Este resulta ser un poco más problemático porque no es fácil deducir dónde se supone que termina el elemento. De hecho, el énfasis fuerte se ha aplicado al resto del texto.
   - Esta sección está mal anidada: `<strong>strong <em>strong emphasised?</strong> what is this?</em>`. No es fácil de explicar la forma en que ha sido interpretado, debido al problema anterior.
   - Al valor del atributo [`href`](/es/docs/Web/HTML/Element/a#href) le faltan las comillas de cierre. Esto parece haber causado el problema más grave: el enlace ha desaparecido totalmente.

5. Ahora veamos lo que el navegador ha mostrado en contraposición al código fuente. Para ello podemos usar las herramientas de desarrollo del navegador. Si no estamos familiarizados con el uso de estas herramientas, echemos un vistazo rápido a [Descubrir las herramientas de desarrollo del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools), y luego continuaremos.
6. En el inspector de objetos (DOM), puedes comprobar la apariencia de cada elemento: ![The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text "What causes errors in HTML?" Here you can see that the paragraph element has been closed by the browser.](html-inspector.png)
7. Vamos a explorar nuestro código en detalle con el inspector de objetos DOM para ver cómo el navegador ha arreglado nuestros errores de código HTML (lo hemos hecho con Firefox; otros navegadores modernos deberían conducir al mismo resultado):

   - Se han añadido etiquetas de cierre a los párrafos y las líneas de las listas.
   - Al no estar claro el final del elemento `<strong>`, el navegador lo ha aplicado individualmente a todos los bloques de texto siguientes, a cada uno le ha añadido su etiqueta `strong` propia, desde donde está ¡hasta el final del documento!
   - El navegador ha arreglado el anidamiento incorrecto del modo siguiente:

     ```html
     <strong
       >strong
       <em>strong emphasised?</em>
     </strong>
     <em> what is this?</em>
     ```

   - El enlace a cuyo atributo le faltan las comillas del final ha sido ignorado. La última lista la ha dejado como sigue:

     ```html
     <li>
       <strong
         >Unclosed attributes: Another common source of HTML problems. Let's
         look at an example:
       </strong>
     </li>
     ```

### Validación HTML

Con el ejemplo anterior podemos asegurarnos de que nuestro HTML está bien formado, pero ¿cómo? En el ejemplo siguiente podemos comprobar que es bastante fácil buscar entre las líneas y encontrar los errores en documentos pequeños; pero, ¿qué pasa cuando trabajamos con documentos HTML grandes y complejos?

La mejor estrategia es comenzar por pasar tu página HTML por el [servicio de validación de etiquetas](https://validator.w3.org/); fue creado y está mantenido por el W3C, organización que se encarga de definir las especificaciones de HTML, CSS y otras tecnologías web. Esta página web toma un documento HTML como entrada, lo procesa, y genera un informe de dónde están los errores en el documento.

![The HTML validator homepage](validator.png)

Para validar el HTML, podemos proporcionar al validador una dirección web a la que apuntar, subirle un archivo HTML, o directamente introducirle el código HTML que queremos que revise.

### Aprendizaje activo: Validación de un documento HTML

Vamos a probar de validar nuestro [documento ejemplo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html).

1. Primero, cargamos el [servicio de validación](https://validator.w3.org/) en una pestaña del navegador, si no lo tenemos ya.
2. Hacemos clic en la subpestaña [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Copiamos el código del documento ejemplo (no solo el `body`) y lo pegamos en el cuadro de texto grande.
4. Hacemos clic en el botón _Check_.

Esto debería proporcionar una lista de errores y otras informaciones:

![A list of of HTML validation results from the W3C markup validation service](validation-results.png)

#### Interpretación de los mensajes de error

La lista de mensajes de error que nos presenta el validador suele ayudar, pero a veces, no resultan muy útiles; con un poco de práctica aprenderemos a interpretar la lista para arreglar nuestro código. Veamos los mensajes de error y su significado. Observamos que cada mensaje se presenta con un número de línea y de columna, para ayudar a localizar el error más fácilmente.

- "Consider adding a `lang` attribute to the `html` start tag to declare the language of this document.": No se trata de un error, sino de una advertencia (warning). La [recomendación](https://www.w3.org/International/questions/qa-html-language-declarations) es definir siempre un idioma, y este "warning" explica cómo hacerlo..
- "End tag `li` implied, but there were open elements" (2 instancias): Estos mensajes indican que un elemento que ha sido abierto debe ser cerrado. La etiqueta de cierre se supone, pero no está ahí. La información de la línea/columna apunta a la primera línea después de donde debería estar la etiqueta de cierre; es una buena pista para ver qué pasa.
- "Unclosed element `strong`": Un elemento {{htmlelement("strong")}} no ha sido cerrado, y la línea/columna apunta directamente al lugar del error.
- "End tag `strong` violates nesting rules": Este apunta a elementos que están incorrectamente anidados, y la línea/columna nos indica donde están.
- "End of file reached when inside an attribute value. Ignoring tag": Esta es bastante enigmática; se refiere al hecho de que el valor de un atributo no ha sido bien construido, posiblemente cerca del final del archivo porque el final aparece dentro del valor del atributo. El hecho de que el navegador no muestre el enlace nos debería dar una buena pista de qué elemento es el erróneo.
- "End of file seen and there were open elements": Este es un poco ambiguo, pero básicamente se refiere al hecho de que hay elementos abiertos que necesitan ser cerrados adecuadamente. Los números de línea apuntan a las últimas líneas del archivo, y este mensaje de error viene con una línea de código que indica un ejemplo de un elemento abierto:

  example: `<a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>`

  > **Nota:** Un atributo al que le falten las comillas de cierre puede ser un elemento abierto, porque el resto del documento será interpretado como si fuera parte de este atributo.

- Unclosed element `ul`: Este no ayuda mucho, porque el elemento {{htmlelement("ul")}} está cerrado correctamente. Este error se debe a que el elemento {{htmlelement("a")}} no ha sido cerrado, ya que faltan las comillas de cierre.

No debemos preocuparnos si no podemos corregir todos los mensajes de error; es práctico tratar de arreglar unos pocos errores cada vez y volver a pasar el validador para ver los que quedan. A veces, al arreglar unos cuantos se arreglan automáticamente otros muchos; con frecuencia muchos errores los causa uno solo en un efecto dominó.

Sabremos que todos los errores están arreglados cuando veamos el mensaje siguiente:

![Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."](valid-html-banner.png)

## Resumen

Pues hasta aquí una introducción al depurado de HTML, que nos proporcionará habilidades para cuando comencemos a depurar CSS, JavaScript y otros lenguajes más adelante en nuestros trabajos. Este apartado también constituye el final de la introducción al módulo de artículos de aprendizaje de HTML; ahora podemos hacer los test de prueba: el primero de los cuales está en el enlace siguiente.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
