---
title: Depurar el CSS
slug: Learn/CSS/Building_blocks/Debugging_CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Al escribir CSS te puedes encontrar que, a veces, alguna parte de tu CSS no hace lo que esperas. Tal vez creas que cierto selector debería coincidir con un elemento, pero no sucede nada; o una caja tiene un tamaño diferente al que esperabas. Este artículo te orientará sobre cómo solucionar un problema de CSS y te mostrará cómo las DevTools incluidas en todos los navegadores modernos pueden ayudarte a descubrir qué sucede.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Conocer los conceptos básicos de las DevTools que hay en los navegadores
        y de cómo inspeccionar y editar el CSS de un modo fácil.
      </td>
    </tr>
  </tbody>
</table>

## Cómo acceder a las DevTools de los navegadores

El artículo [¿Qué son las herramientas de desarrollo de los navegadores?](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) es una guía actualizada que explica cómo acceder a las herramientas en varios navegadores y plataformas. Si bien puedes optar por desarrollar principalmente en un navegador en particular y, por lo tanto, te familiarizarás más con las herramientas incluidas en ese navegador, vale la pena saber cómo acceder a ellas en otros navegadores. Esto ayudará si haces pruebas de las representaciones que dan diferentes navegadores.

También te darás cuenta de que los diversos navegadores han optado por centrarse en áreas diferentes al crear sus DevTools. Por ejemplo, en Firefox hay algunas herramientas excelentes para trabajar visualmente con la compaginación con CSS, que te permiten inspeccionar y editar [Compaginaciones de cuadrícula](/es/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts), [Flexbox](/es/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts) y [formas](/es/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes). Sin embargo, todos los navegadores tienen herramientas fundamentales similares. Por ejemplo, para inspeccionar las propiedades y los valores que se aplican a los elementos de tu página, y hacer cambios desde el editor.

En este artículo veremos algunas características útiles de Firefox DevTools para trabajar con CSS. Para hacerlo, usaremos [un archivo de ejemplo](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Carga esto en una pestaña nueva si deseas seguir adelante y abre tus DevTools como se describe en el artículo del enlace anterior.

## El DOM y "View Source"

Algo que puede hacer tropezar a los recién llegados a DevTools es la diferencia entre lo que ves cuando [miras el código fuente](/es/docs/Tools/View_source) de una página web, o miras el archivo HTML que colocas en el servidor, y lo que puedes ver en la [ventana HTML](/es/docs/Tools/Page_Inspector/UI_Tour#Panel_HTML) de DevTools. Aunque ves más o menos lo mismo que puedes ver desde View Source (Ver código fuente de la página), hay algunas diferencias.

En el DOM procesado, el navegador puede haber corregido algunos HTML mal escritos por ti. Si cerraste un elemento incorrectamente, por ejemplo, por abrir con un `<h2>` y cerrar con un `</h3>`, el navegador descubre lo que ibas a hacer y el HTML del DOM cerrará ese `<h2>` de apertura correctamente con un `</h2>`. El navegador también normaliza todo el HTML, y el DOM también muestra los cambios que hace JavaScript.

En comparación, View Source es simplemente el código fuente HTML tal como está almacenado en el servidor. El [árbol HTML](/es/docs/Tools/Page_Inspector/How_to/Examinar_y_editar_HTML#%C3%81rbol_HTML) de tus DevTools muestra exactamente lo que el navegador representa en un momento dado, y te da una idea de lo que sucede en realidad.

## Inspección del CSS aplicado

Selecciona un elemento de tu página, ya sea haciendo clic con el botón derecho o pulsando la tecla ctrl para seleccionar la opción _Inspect_, o seleccionándolo del árbol HTML que hay a la izquierda de la pantalla de la interfaz DevTools. Selecciona el elemento con la clase `box1`; este es el primer elemento de la página con una caja alrededor.

![La página de ejemplo para este tutorial con DevTools abiertas.](inspecting1.png)

Si observasla [vista de reglas](/es/docs/Tools/Page_Inspector/UI_Tour#Panel_CSS), que está a la derecha de tu HTML, deberías poder ver las propiedades y los valores CSS aplicados sobre ese elemento. Verás las reglas aplicadas directamente a la clase `box1` y también el CSS que la caja hereda de su elemento padre, en este caso `<body>`. Esto es útil para cuando ves que se aplica un CSS que no esperabas. Tal vez se esté heredando de un elemento padre y necesites añadir una regla para sobrescribirlo en el contexto de este elemento.

También es útil la capacidad de expandir las propiedades abreviadas. En nuestro ejemplo se usa la abreviación `margin`.

**Haz clic en la pequeña flecha para expandir la vista, que muestra las diferentes propiedades sin abreviar y sus valores.**

**Puedes activar y desactivar los valores en la vista de reglas, cuando ese panel esté activo; si mantienes el ratón sobre él, aparecerán casillas de verificación. Desmarca la casilla de verificación de una regla, por ejemplo `border-radius`, y el CSS dejará de aplicarse.**

Puedes usar esto para hacer una comparación entre A y B, decidir si algo se ve mejor con una regla aplicada o sin aplicar, y también para ayudar a depurarlo. Por ejemplo, si un diseño falla e intentas determinar qué propiedad causa el problema.

## Editar valores

Además de activar y desactivar las propiedades, puedes editar sus valores. ¿Quieres ver si quizá otro color se ve mejor, o deseas modificar algún tamaño? Las DevTools pueden ahorrarte mucho tiempo a la hora de editar una hoja de estilo y volver a cargar la página.

**Selecciona `box1` y haz clic en la muestra (el pequeño círculo de color) que muestra el color aplicado al borde. Se abrirá un selector de color y puedes probar con colores diferentes, que se actualizarán en tiempo real en la página. De manera similar puedes cambiar el ancho o el estilo del borde.**

![Ventana de aplicación de estilos de DevTools con un selector de color abierto.](inspecting2-color-picker.png)

## Añadir una propiedad nueva

Puedes añadir propiedades usando las DevTools. ¿Te has dado cuenta de que quizá no quieres que tu caja herede el tamaño de letra del elemento `<body>` y quieres establecer tu propio tamaño de letra específico? Pruébalo en DevTools antes de añadirlo a tu archivo CSS.

**Puedes hacer clic en la llave de cierre de la regla para comenzar a introducir una declaración nueva, y en ese momento puedes comenzar a escribir la nueva propiedad y DevTools te mostrará una lista de propiedades coincidentes que se completará automáticamente. Después de seleccionar `font-size`, introduce el valor que deseas probar. También puede hacer clic en el botón + para añadir una regla adicional con el mismo selector y tus reglas nuevas.**

![La ventana DevTools, que añade una propiedad nueva a las reglas, con el autocompletado para font-open](inspecting3-font-size.png)

> **Nota:** También hay otras funciones útiles en la vista de reglas; por ejemplo, las declaraciones con valores no válidos están tachadas. Puedes obtener más información en [Examinar y editar CSS](/es/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS).

## Comprender el modelo de cajas

En artículos anteriores hemos expuesto el [modelo de cajas](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja), y el hecho de que tengamos un modelo de cajas alternativo que cambia la forma en que se calcula el tamaño de los elementos en función del tamaño que les asignas, más el relleno y los bordes. Las DevTools realmente pueden ayudarte a comprender cómo se calcula el tamaño de un elemento.

[El panel de disposición](/es/docs/Tools/Page_Inspector/UI_Tour#Panel_CSS) muestra un diagrama del modelo de cajas en el elemento seleccionado, junto con una descripción de las propiedades y los valores que cambian la forma en que el elemento se presenta. Esto incluye una descripción de las propiedades que puedes no haber utilizado explícitamente en el elemento, pero que tienen valores iniciales establecidos.

En esta ventana, una de las propiedades que se detallan es la propiedad `box-sizing`, que controla qué modelo de cajas usa el elemento.

**Compara las dos cajas con las clases `box1` y `box2`. Ambas tienen el mismo ancho aplicado (400 px), sin embargo, `box1` es visualmente más ancha. En la ventana de diseño puedes ver que usa `content-box`. Este es el valor que toma el tamaño que asignas al elemento y luego añade el área de relleno y el ancho del borde.**

El elemento con una clase `box2` usa `border-box`, por lo que aquí el área de relleno y el borde se restan del tamaño que has asignado al elemento. Esto significa que el espacio que la caja ocupa en la página es el tamaño exacto que se ha especificado, en nuestro caso `width: 400px`.

![La ventana de diseño de DevTools](inspecting4-box-model.png)

> **Nota:** Descubre más en [Examinar e inspeccionar el modelo de cajas](/es/docs/Tools/Page_Inspector/How_to/Examinar_y_editar_el_modelo_de_cajasmodel).

## Resolver problemas de especificidad

A veces, durante el desarrollo, pero en particular cuando necesitas editar el CSS de un sitio ya publicado, te resultará difícil conseguir que se aplique un determinado CSS. No importa lo que hagas, el elemento simplemente no parece aceptar tu CSS. Lo que suele suceder aquí es que un selector más específico anula tus cambios, y en este caso DevTools te será de gran ayuda.

En nuestro archivo de ejemplo hay dos palabras incluidas en un elemento `<em>`. Uno se muestra en color naranja y el otro en rosa. En el CSS hemos aplicado:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Sin embargo, un poco más arriba en la hoja de estilo hay una regla con un selector `.special`:

```css
.special {
  color: orange;
}
```

Como recordarás del artículo sobre [cascada y herencia](/es/docs/Learn/CSS/Building_blocks/Cascada_y_herencia), en que hablamos sobre la especificidad, los selectores de clase son más específicos que los selectores de elemento, por lo que este es el valor que se aplica. DevTools puede ayudarte a encontrar estos problemas, especialmente si la información está oculta en algún lugar de una extensa hoja de estilo.

**Inspecciona `<em>` con la clase `.special` y DevTools te mostrará que el naranja es el color que se aplica, y también te muestra la propiedad `color` aplicada al em tachado. Aquí puedes ver que la clase anula el selector de elemento.**

![Selecciona un em y mira en DevTools qué solapa el color.](inspecting5-specificity.png)

## Descubre más sobre las DevTools de Firefox

Hay mucha información aquí en MDN sobre las DevTools de Firefox. Echa un vistazo a la [sección principal de las DevTools](/es/docs/Tools), y consulta las [Guías prácticas](/es/docs/Tools/Page_Inspector#How_to) para obtener información más detallada sobre las cosas que hemos expuesto brevemente en este artículo.

## Problemas al depurar en CSS

Las DevTools pueden ser de gran ayuda a la hora de resolver problemas con el CSS, pero ¿cómo resuelves una situación en la que el CSS no se comporta como esperas? Los siguientes pasos deberían ayudarte.

### Aléjate del problema

Cualquier problema de código puede ser frustrante, especialmente los problemas de CSS, porque a menudo no recibes un mensaje de error que buscar en línea para ayudarte a encontrar una solución. Si te sientes frustrado, aléjate del problema por un tiempo: sal a caminar, tómate una copa, habla con un compañero de trabajo o trabaja en otra cosa por un tiempo. A veces, la solución aparece mágicamente cuando dejas de pensar en el problema, e incluso si no llega, trabajar en ello cuando te sientas más fresco te será mucho más fácil.

### ¿Tu HTML y CSS son válidos?

Los navegadores esperan que tu CSS y HTML estén escritos correctamente, sin embargo, los navegadores también son muy indulgentes y harán todo lo posible para mostrar tus páginas web incluso si tiene errores en el marcado o en la hoja de estilo. Si tienes errores en el código, el navegador trata de adivinar lo que quieres decir, y podría tomar una decisión diferente a lo que tenías en mente. Además, dos navegadores diferentes pueden hacer frente al problema de dos maneras diferentes. Por lo tanto, un buen primer paso es pasar tu HTML y CSS por un validador, que detectar cualquier error.

- [Validador de CSS](https://jigsaw.w3.org/css-validator/)
- [Validador de HTML](https://validator.w3.org/)

### ¿La propiedad y el valor son compatibles con el navegador?

Los navegadores simplemente ignoran el CSS que no entienden. Si la propiedad o el valor que utilizas no es compatible con el navegador en el que lo pruebas, no se romperá nada, pero ese CSS no se aplicará. Las DevTools en general destacan de alguna manera las propiedades y los valores que no son compatibles. En la captura de pantalla siguiente, el navegador no admite el valor de subcuadrícula {{cssxref ("grid-template-columns")}}.

![Imagen de las DevTools del navegador con la cuadrícula-plantilla-columnas: subcuadrícula tachada porque el valor de la subcuadrícula no es compatible.](no-support.png)

También puedes echar un vistazo a las tablas de compatibilidad de navegadores en la parte inferior de cada página de propiedades del proyecto MDN. Te muestran la compatibilidad de cada navegador para esa propiedad, a menudo desglosado si hay compatibilidad para un uso de la propiedad y no para otros. La tabla siguiente muestra los datos de compatibilidad para la propiedad {{cssxref ("shape-outside")}}.

### ¿Hay algo más que anule tu CSS?

Aquí es donde la información que has aprendido sobre la especificidad será muy útil. Si tienes algo más específico que anula lo que intentas hacer, puedes entrar en un juego muy frustrante de tratar de resolverlo sin saber qué tienes que resolver. Sin embargo, como hemos dicho, las DevTools te mostrarán qué CSS se ha aplicado y así puedes averiguar cómo hacer que el nuevo selector sea lo suficientemente específico como para anularlo.

### Haz un caso de prueba reducido del problema

Si el problema no se resuelve con los pasos anteriores, deberás investigar un poco más. Lo mejor que puedes hacer en este momento es crear lo que se conoce como un caso de prueba reducido. Ser capaz de «reducir un problema» es una habilidad muy útil. Te ayudará a encontrar problemas en tu propio código y en el de tus colegas, y también te permitirá informar de errores y solicitar ayuda de manera más efectiva.

Un caso de prueba reducido es un ejemplo de código que muestra el problema de la manera más simple posible, sin contenido ni estilo circundante. Esto significa a menudo sacar el código problemático de tu diseño para hacer un pequeño ejemplo que solo muestre ese código o característica.

Para crear un caso de prueba reducido:

1. Si tu marcado se genera dinámicamente, por ejemplo desde un CMS, crea una versión estática de la salida que muestre el problema. Un sitio para compartir código como [CodePen](https://codepen.io/) es útil para alojar casos de prueba reducidos, porque son accesibles en línea y puedes compartirlos fácilmente con tus colegas. Puedes comenzar por hacer un View Source de la página y copiar el HTML en CodePen, luego toma cualquier CSS y JavaScript relevante e inclúyelo también. Después de eso, puedes verificar si el problema sigue ahí.
2. Si eliminar el JavaScript no soluciona el problema, no incluyas el JavaScript. Si eliminar el JavaScript hace desaparecer el problema, elimina la mayor cantidad de JavaScript que puedas; deja solo las causas del problema.
3. Elimina cualquier HTML que no contribuya al problema. Elimina componentes o incluso elementos principales del diseño. Nuevamente, intenta reducir al mínimo la cantidad de código que aún muestra el problema.
4. Elimina cualquier CSS que no afecte al problema.

En el proceso, puedes descubrir qué causa el problema, o al menos ser capaz de ponerlo o quitarlo al eliminar algo específico. Vale la pena añadir algunos comentarios a tu código a medida que vas descubriendo cosas. Si tienes que pedir ayuda, estos comentarios indicarán a la persona que te ayuda lo que ya has intentado. Esto puede proporcionarte bastante información para permitirte buscar posibles problemas por sondeo y soluciones alternativas.

Si todavía tienes dificultades para solucionar el problema, tener un caso de prueba reducido te ofrece algo con lo que pedir ayuda, publicarlo en un foro o mostrarlo a un compañero de trabajo. Es mucho más probable que obtengas ayuda si antes de pedir la ayuda muestras que has hecho el trabajo de reducir el problema e identificar dónde sucede exactamente. Un desarrollador más experimentado va a poder detectar el problema con rapidez y orientarte en la dirección correcta, y aunque no sea así, echarle un vistazo rápido a tu caso de prueba reducido y, con suerte, ofrecerte al menos algo de ayuda.

En el caso de que tu problema sea en realidad un error en un navegador, también puedes usar un caso de prueba reducido para presentar un informe de error al proveedor del navegador correspondiente (por ejemplo, en el sitio de [Bugzilla](https://bugzilla.mozilla.org) de Mozilla).

A medida que adquieras más experiencia con CSS, descubrirás que vas adquiriendo rapidez para descubrir de dónde vienen los problemas. Sin embargo, incluso los más experimentados a veces nos preguntamos qué pasa. Adoptar un enfoque metódico, hacer un caso de prueba reducido y explicar el problema a otra persona suele dar un buen resultado para encontrar una solución.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}
