---
title: Buenas prácticas de accesibilidad CSS y JavaScript
slug: Learn/Accessibility/CSS_and_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS y JavaScript, cuando se usan correctamente, también tienen el potencial de permitir experiencias web accesibles... o pueden dañar significativamente la accesibilidad si se usan incorrectamente. Este artículo describe algunas de las mejores prácticas de CSS y JavaScript que deben tenerse en cuenta para garantizar que incluso el contenido complejo sea lo más accesible posible.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, conocimientos básicos de HTML, CSS
        y JavaScript, y comprensión de
        <a href="/es/docs/Learn/Accessibility/Qué_es_la_accesibilidad"
          >qué es la accesibilidad</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Familiarizarse con el uso apropiado de CSS y JavaScript en documentos
          web para maximizar la accesibilidad y no restarle valor.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## ¿CSS y JavaScript son accesibles?

CSS y JavaScript no tienen la misma importancia inmediata para la accesibilidad que HTML, pero aún así pueden ayudar o dañar la accesibilidad, dependiendo de cómo se usen. Para decirlo de otra manera, es importante considerar algunos consejos de buenas prácticas para asegurarse de que el uso de CSS y JavaScript no arruina la accesibilidad de tus documentos.

## CSS

Comencemos estudiando CSS.

### Semántica correcta y expectativas del usuario

Es posible usar CSS para hacer que cualquier elemento HTML se vea como _cualquier cosa_, pero esto no significa que deba hacerse. Como mencionamos con frecuencia en nuestro artículo [HTML: Una buena base para la accesibilidad](/es/docs/Learn/Accessibility/HTML), debes usar el elemento semántico apropiado para cada cosa, siempre que sea posible. Si no lo haces, puede causar confusión y problemas de usabilidad para todos, pero especialmente para los usuarios con discapacidades. El uso de la semántica correcta tiene mucho que ver con las expectativas del usuario: los elementos se ven y se comportan de cierta manera, de acuerdo con su funcionalidad, y los usuarios esperan estas convenciones comunes.

Por ejemplo, un usuario de lector de pantalla no puede navegar por una página a través de elementos de encabezado si el desarrollador no ha utilizado adecuadamente los elementos de encabezado para marcar el contenido. Del mismo modo, un encabezado pierde su propósito visual si se le aplica un estilo para que no parezca un encabezado.

La regla general es que puede actualizar el estilo de una característica de la página para que se ajuste a tu diseño, pero no cambiarlo tanto como para que ya no se vea ni se comporte como se esperaba. Las siguientes secciones resumen las principales características de HTML a considerar.

#### Estructura de contenido de texto "estándar"

Encabezados, párrafos, listas: el contenido de texto central de su página:

```html
<h1>Cabecera</h1>

<p>Párrafo</p>

<ul>
  <li>Mi lista</li>
  <li>tiene dos ítems.</li>
</ul>
```

Un CSS típico podría tener este aspecto:

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

Deberías:

- Seleccionar tamaños de fuente razonables, alturas de línea, espaciado entre letras, etc. para que el texto sea lógico, legible y cómodo de leer.
- Asegurarte de que los títulos destaquen del texto del cuerpo, generalmente grandes y en negrita como estilo predeterminado. Tus listas deben parecer
- El color del texto debe contrastar bien con el color de fondo.

Consulte [Fundamentos del texto HTML](/es/docs/Learn/HTML/Introduccion_a_HTML/texto) y [Estilo de texto](/es/docs/Learn/CSS/Styling_text) para obtener más información.

#### Texto enfatizado

Marcado en línea que confiere un énfasis específico al texto que rodea:

```html
<p>El agua está <em>muy caliente</em>.</p>

<p>
  Las gotas de agua que se acumulan en las superficies se denominan
  <strong>condensación</strong>.
</p>
```

Es posible que desees agregar algunos colores simples a su texto enfatizado:

```css
strong,
em {
  color: #a60000;
}
```

Sin embargo, rara vez necesitarás dar estilo a elementos de énfasis de manera significativa. Las convenciones estándar de texto en negrita y cursiva son muy reconocibles y cambiar el estilo puede causar confusión. Para obtener más información sobre el énfasis, consulte [Énfasis e importancia](/es/docs/Learn/HTML/Introduccion_a_HTML/texto#%C3%89nfasis_e_importancia).

#### Abreviaciones

Un elemento que permite asociar una abreviatura, un acrónimo o una inicialización a su expansión:

```html
<p>
  El contenido web se marca usando
  <abbr title="Hypertext Markup Language">HTML</abbr>.
</p>
```

Nuevamente, es posible que desees darle estilo de una manera simple:

```css
abbr {
  color: #a60000;
}
```

La convención de estilo reconocida para las abreviaturas es un subrayado punteado, y no es aconsejable desviarse significativamente de esto. Para obtener más información sobre abreviaturas, consulte [Abreviaturas](/es/docs/Learn/HTML/Introduccion_a_HTML/Advanced_text_formatting#Abreviaturas).

#### Enlaces

Hipervínculos: la forma de llegar a nuevos lugares en la web:

```html
<p>
  Visita la <a href="https://www.mozilla.org">página de inicio de Mozilla</a>.
</p>
```

A continuación se muestra un estilo de enlace muy simple:

```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

Las convenciones de enlace estándar son subrayado y un color diferente (predeterminado: azul) en su estado estándar, otra variación de color cuando el enlace ha sido visitado anteriormente (predeterminado: púrpura) y otro color más cuando el enlace está activado (predeterminado: rojo) . Además, el puntero del ratón cambia a un ícono de puntero cuando se pasa el ratón sobre los enlaces, y el enlace recibe un resaltado cuando se enfoca (por ejemplo, mediante tabulación) o se activa. La siguiente imagen muestra el resaltado tanto en Firefox (contorno punteado) como en Chrome (contorno azul):

![](focus-highlight-firefox.png)

![](focus-highlight-chrome.png)

Puedes ser creativo con los estilos de enlaces, siempre y cuando sigas dando información a los usuarios cuando interactúan con los enlaces. Definitivamente, algo debería suceder cuando los estados cambian, y no debes deshacerte del cursor del puntero o del contorno; ambos son ayudas de accesibilidad muy importantes para quienes usan los controles del teclado.

#### Elementos de formulario

Elementos que permiten a los usuarios introducir datos en sitios web:

```html
<div>
  <label for="nombre">Entra tu nombre</label>
  <input type="text" id="nombre" name="nombre" />
</div>
```

Puedes ver algunos buenos ejemplos de CSS en nuestro ejemplo de [form-css.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-css.html) ([pruébalo en vivo](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-css.html) también).

La mayor parte del CSS que escribirás para los formularios será para dimensionar los elementos, alinear las etiquetas y las entradas y hacer que se vean limpios y ordenados.

Sin embargo, no debes desviarse demasiado de la retroalimentación visual esperada que reciben los elementos del formulario cuando están enfocados, que es básicamente la mismo que con los enlaces (ver más arriba). Puedes aplicar estilos a los estados de enfoque / desplazamiento del formulario para que este comportamiento sea más coherente en todos los navegadores o se adapte mejor al diseño de tu página, pero no te deshagas de él por completo; de nuevo, las personas confían en estas pistas para ayudarles a saber qué está pasando.

#### Tablas

Tablas para presentar datos tabulares.

Puedes ver un buen y simple ejemplo de tabla HTML y CSS en nuestro ejemplo [table-css.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/table-css.html) ([pruébalo en vivo](http://mdn.github.io/learning-area/accessibility/css/table-css.html) también).

El CSS de tablas generalmente sirve para hacer que la tabla se adapte mejor a su diseño y se vea menos fea. Es una buena idea asegurarse de que los encabezados de la tabla se destaquen (normalmente en negrita) y usar rayas de cebra para que las diferentes filas sean más fáciles de analizar.

### Color y contraste de color

Al elegir un esquema de color para tu sitio web, asegúrate de que el color del texto (primer plano) contrasta bien con el color de fondo. Tu diseño puede verse bien, pero no es bueno si las personas con discapacidades visuales como daltonismo no pueden leer tu contenido.

Existe una manera fácil de verificar si el contraste es lo suficientemente grande como para no causar problemas. Hay una serie de herramientas de verificación de contraste en línea en las que puede introduci los colores de primer plano y de fondo para verificarlos. Por ejemplo, el [Comprobador de contraste de color](http://webaim.org/resources/contrastchecker/) de WebAIM es fácil de usar y proporciona una explicación de lo que necesitas para cumplir con los criterios WCAG sobre el contraste de color.

> **Nota:** una relación de contraste alta también permitirá que cualquier persona que utilice un teléfono inteligente o una tableta con una pantalla brillante lea mejor las páginas cuando se encuentre en un entorno brillante, como a la luz del sol.

Otro consejo es no confiar solo en el color para las señales / información, ya que esto no será bueno para aquellos que no pueden ver el color. En lugar de marcar los campos de formulario obligatorios en rojo, por ejemplo, márcalos con un asterisco y en rojo.

### Esconder cosas

Hay muchos casos en los que un diseño visual requerirá que no se muestre todo el contenido a la vez. Por ejemplo, en nuestro ejemplo de [cuadro de información con pestañas](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (ver [código fuente](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)) tenemos tres paneles de información, pero los colocamos uno encima del otro y proporcionamos pestañas en las que se puede hacer clic para mostrar cada uno (también es accesible desde el teclado - pues usar alternativamente Tab y Enter / Return para seleccionarlos).

![](tabbed-info-box.png)

A los usuarios de lectores de pantalla no les importa nada de esto: están contentos con el contenido siempre que el orden del código fuente tenga sentido y puedan acceder a todo. El posicionamiento absoluto (como se usa en este ejemplo) generalmente se considera uno de los mejores mecanismos para ocultar contenido para lograr un efecto visual, porque no impide que los lectores de pantalla accedan a él.

Por otro lado, no debes usar {{cssxref ("visibility")}}`: hidden` o {{cssxref ("display")}}`: none`, porque ocultan el contenido de los lectores de pantalla. A menos que, por supuesto, exista una buena razón por la que desees ocultar este contenido a los lectores de pantalla.

> **Nota:** [Invisible Content Just for Screen Reader Users](http://webaim.org/techniques/css/invisiblecontent/) tiene muchos más detalles útiles sobre este tema.

### Acepta que los usuarios pueden saltarse tus estilos

Es posible que los usuarios anulen tus estilos con sus propios estilos personalizados, por ejemplo:

- Consulte [How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/), de Sarah Maddox, una útil guía que cubre cómo hacer esto manualmente en Firefox.
- Probablemente sea más fácil hacerlo usando una extensión; por ejemplo, la extensión Stylish está disponible para [Firefox](https://addons.mozilla.org/en-US/firefox/addon/stylish/), [Safari](https://safari-extensions.apple.com/details/?id=com.sobolev.stylish-5555L95H45), [Opera](https://addons.opera.com/en/extensions/details/stylish/) y [Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe).

Los usuarios pueden hacerlo por diversas razones. Un usuario con discapacidad visual puede querer agrandar el texto en todos los sitios web que visita, o un usuario con una deficiencia de color severa puede querer poner todos los sitios web en colores de alto contraste que sean fáciles de ver. Cualquiera que sea la necesidad, debes sentirse cómodo con esto y hacer que tus diseños sean lo suficientemente flexibles para que dichos cambios funcionen en tu diseño. Como ejemplo, es posible que desees asegurarte de que tu área de contenido principal pueda manejar texto más grande (tal vez comience a desplazarse para permitir que se vea todo), y no solo lo ocultará o romperá por completo.

## JavaScript

JavaScript también puede romper la accesibilidad, dependiendo de cómo se use.

El JavaScript moderno es un lenguaje poderoso, y podemos hacer mucho con él actualmente, desde contenido simple y actualizaciones de la interfaz de usuario hasta juegos 2D y 3D completos. No existe una regla que diga que todo el contenido debe ser 100% accesible para todas las personas; solo debe hacer lo que pueda y hacer que sus aplicaciones sean lo más accesibles posible.

Se puede decir que el contenido y la funcionalidad simples son fáciles de hacer accesibles; por ejemplo, texto, imágenes, tablas, formularios y botones que activan funciones. Como vimos en nuestro artículo [HTML: Una buena base para la accesibilidad](/es/docs/Learn/Accessibility/HTML), las consideraciones clave son:

- Buena semántica: usar el elemento correcto para el trabajo correcto. Por ejemplo, asegúrate de usar encabezados y párrafos, y elementos {{htmlelement ("button")}} y {{htmlelement ("a")}}
- Asegurarse de que el contenido esté disponible como texto, ya sea directamente como contenido de texto, buenas etiquetas de texto para los elementos de formulario o alternativas de texto, p.ej. texto alternativo para imágenes.

También vimos un ejemplo de cómo usar JavaScript para incorporar la funcionalidad donde faltaba; consulta [Volver a añadir la accesibilidad del teclado](/es/docs/Learn/Accessibility/HTML#Volver_a_añadir_la_accesibilidad_del_teclado). Esto no es ideal; en realidad, deberías usar el elemento correcto para el trabajo correcto, pero demuestra que es posible en situaciones en las que, por alguna razón, no puedes controlar el marcado que se utiliza. Otra forma de mejorar la accesibilidad de los widgets no semánticos que funcionan con JavaScript es utilizar WAI-ARIA para proporcionar semántica adicional para los usuarios de lectores de pantalla. El próximo artículo también cubrirá esto en detalle.

Las funcionalidades complejas como los juegos en 3D no son tan fáciles de hacer accesibles: un juego en 3D complejo creado con [WebGL](/es/docs/Web/API/WebGL_API) se renderizará en un elemento {{htmlelement ("canvas")}}, que en este momento no tiene la capacidad de proporcionar alternativas de texto u otros información que pueden utilizar los usuarios con discapacidad visual grave. Se puede argumentar que un juego de este tipo no tiene realmente a este grupo de personas como parte de su público objetivo principal, y no sería razonable esperar que lo hicieras 100% accesible para las personas ciegas; sin embargo, podrías implementar controles de teclado para que sea utilizable por usuarios que no utilizan el ratóny hacer que el esquema de color sea lo suficientemente contrastante como para que lo puedan usar aquellos con deficiencias de color.

### El problema de demasiado JavaScript

El problema a menudo surge cuando la gente confía demasiado en JavaScript. A veces verás un sitio web donde todo se ha hecho con JavaScript: el HTML ha sido generado por JavaScript, el CSS ha sido generado por JavaScript, etc. Esto tiene todo tipo de problemas de accesibilidad y otros asociados, por lo que no es aconsejado.

Además de utilizar el elemento correcto para el trabajo correcto, ¡también debes asegurarte de utilizar la tecnología adecuada para el trabajo correcto! Piensa detenidamente si necesitas ese brillante cuadro de información en 3D con JavaScript o si bastaría con texto antiguo sin formato. Piensa detenidamente si necesitas un widget de formulario no estándar complejo o si una entrada de texto sería suficiente. Y no generes todo tu contenido HTML usando JavaScript si es posible.

### Hacerlo no intrusivo

Deberías hacer tu **JavaScript no intrusivo** al crear tu contenido. La idea de JavaScript no intrusivo es que debe usarse siempre que sea posible para mejorar la funcionalidad, no para construirlo todo; las funciones básicas deberían funcionar idealmente sin JavaScript, aunque sabemos que esto no siempre es una opción. Pero, de nuevo, una gran parte es usar las funcionalidades integradas del navegador siempre que sea posible.

Entre los buenos ejemplos de usos de JavaScript no intrusivo se incluyen:

- Proporcionar validación de formularios del lado del cliente, que alerta a los usuarios sobre problemas con las entradas de sus formularios rápidamente, sin tener que esperar a que el servidor verifique los datos. Si no está disponible, el formulario seguirá funcionando, pero la validación puede ser más lenta.
- Proporcionar controles personalizados para `<video>` HTML5 a los que pueden acceder los usuarios que solo utilizan el teclado, junto con un enlace directo al video que se puede usar para acceder a él si JavaScript no está disponible (los controles del navegador predeterminados para `<video>` no son acccesibles por teclado en la mayoría de los navegadores).

Como ejemplo, hemos escrito un ejemplo rápido y sucio de validación de formulario del lado del cliente: consulta [form-validation.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html) (y también la [demostración en vivo](http://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Aquí verás un formulario simple; al intentar enviar el formulario con uno o ambos campos vacíos, el envío falla y aparece un cuadro de mensaje de error para indicar cuál es el problema.

Este tipo de validación de formulario es no intrusiva: se puede usar el formulario perfectamente aunque JavaScript no esté disponible, y cualquier implementación de formulario razonable también tendrá activa la validación del lado del servidor, porque es demasiado fácil para los usuarios malintencionados eludir la validación del lado del cliente (por ejemplo, desactivando JavaScript en el navegador). La validación del lado del cliente sigue siendo realmente útil para informar de errores: los usuarios pueden saber los errores que cometen al instante, en lugar de tener que esperar un viaje de ida y vuelta al servidor y la recarga de la página. Esta es una clara ventaja de usabilidad.

> **Nota:** la validación del lado del servidor no se ha implementado en esta simple demostración.

También hemos hecho que esta validación de formulario sea bastante accesible. Hemos utilizado elementos {{htmlelement ("label")}} para asegurarnos de que las etiquetas del formulario estén vinculadas de forma inequívoca a sus entradas, de modo que los lectores de pantalla puedan leerlas junto con ellas:

```html
<label for="name">Entra tu nombre:</label>
<input type="text" name="name" id="name" />
```

Solo realizamos la validación cuando se envía el formulario; esto es para no actualizar la IU con demasiada frecuencia y confundir potencialmente a los lectores de pantalla (y posiblemente a otros) usuarios:

```js
form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = "";
  for (let i = 0; i < formItems.length; i++) {
    const testItem = formItems[i];
    if (testItem.input.value === "") {
      errorField.style.left = "360px";
      createLink(testItem);
    }
  }

  if (errorList.innerHTML !== "") {
    e.preventDefault();
  }
}
```

> **Nota:** En este ejemplo estamos ocultando y mostrando el cuadro de mensaje de error utilizando posicionamiento absoluto en lugar de otro método como la visibilidad o la visualización, porque no interfiere con que el lector de pantalla pueda leer su contenido.

La validación real del formulario sería mucho más compleja que esto: querría verificar que el nombre entrado realmente parezca un nombre, la edad entrada sea realmente un número y sea realista (por ejemplo, no negativa y menor de 4 dígitos). Aquí acabamos de implementar una verificación simple de que se haya completado un valor en cada campo de entrada (`if(testItem.input.value === '')`).

Cuando se ha realizado la validación, si las pruebas pasan, se envía el formulario. Si hay errores (`if (errorList.innerHTML! == '')`), detenemos el envío del formulario (usando `preventDefault()`) y mostramos los mensajes de error que se hayan creado (ver más abajo). Este mecanismo significa que los errores solo se mostrarán si hay errores, lo que es mejor para la usabilidad.

Para cada entrada sin un valor completado cuando se envía el formulario, creamos un elemento de lista con un enlace y lo insertamos en `errorList`.

```js
function createLink(testItem) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.textContent =
    "El campo " +
    testItem.input.name +
    " está vacío. Entra tu " +
    testItem.input.name +
    ".";
  anchor.href = "#" + testItem.input.name;
  anchor.onclick = function () {
    testItem.input.focus();
  };
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
```

Cada enlace tiene un doble propósito: te dice cuál es el error, y además puedes hacer clic en él / activarlo para ir directamente al elemento de entrada en cuestión y corregir la entrada.

> **Nota:** La parte `focus()` de este ejemplo es un poco complicada. Chrome y Edge darán foco al elemento al hacer clic en el enlace, sin necesidad del bloque `onclick` / `focus()`. Safari solo resaltará el elemento de formulario con el enlace por sí solo, por lo que necesita el bloque `onclick` / `focus()` para darle foco. Firefox no da foco a las entradas correctamente en este contexto, por lo que los usuarios de Firefox no pueden aprovechar esto en este momento (aunque todo lo demás funciona bien). El problema de Firefox debería solucionarse pronto; se está trabajando para que el comportamiento de Firefox sea igual al de otros navegadores (consulte [Error 277178 en Firefox](https://bugzil.la/277178)).

Además, el `errorField` se coloca en la parte superior del orden de código (aunque se coloca de manera diferente en la interfaz de usuario usando CSS), lo que significa que los usuarios pueden averiguar exactamente qué está mal con los envíos de sus formularios y acceder a los elementos de entrada en cuestión retrocediendo hasta el inicio de la página.

Como nota final, hemos utilizado algunos atributos WAI-ARIA en nuestra demostración para ayudar a resolver los problemas de accesibilidad causados por áreas de contenido que se actualizan constantemente sin recargar la página (los lectores de pantalla no captan esto ni alertan a los usuarios de forma predeterminada):

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Explicaremos estos atributos en nuestro próximo artículo, que cubre [WAI-ARIA](/es/docs/Learn/Accessibility/WAI-ARIA_basics) con mucho más detalle.

> **Nota:** Algunos de vosotros probablemente estaréis pensando en el hecho de que los formularios HTML5 tienen mecanismos de validación integrados como los atributos `required`, `min` / `minlength` y `max` / `maxlength` (consultad la referencia del elemento {{htmlelement("input")}} para más información). No los hemos usado en la demostración porque la compatibilidad entre navegadores es irregular (por ejemplo, solo funciona en IE10 y versiones superiores).

> **Nota:** [Usable and Accessible Form Validation and Error Recovery](http://webaim.org/techniques/formvalidation/), de WebAIM, proporciona más información útil sobre la validación de formularios accesibles.

### Otros potenciales problemas de accesibilidad de JavaScript

Hay otras cosas que debes tener en cuenta al implementar JavaScript y pensar en la accesibilidad. Agregaremos más a medida que los encontremos.

#### Eventos específicos del ratón

Como sabrás, la mayoría de las interacciones de los usuarios se implementan en JavaScript del lado del cliente mediante controladores de eventos, que nos permiten ejecutar funciones en respuesta a ciertos eventos que suceden. Algunos eventos pueden tener problemas de accesibilidad. El ejemplo principal con el que se encontrará son los eventos específicos del ratón, como `mouseover`, `mouseout`, `dblclick`, etc. La funcionalidad que se ejecuta en respuesta a estos eventos no será accesible mediante otros mecanismos, como los controles del teclado.

Para mitigar estos problemas, debes duplicar estos eventos con eventos similares que se pueden activar por otros medios (los llamados controladores de eventos independientes de dispositivo); `focus` y `blur` proporcionarían accesibilidad para los usuarios del teclado.

Veamos un ejemplo que destaca cuándo esto podría ser útil. Tal vez queramos proporcionar una imagen en miniatura que muestre una versión más grande de la imagen cuando al colocar el ratón sobre ella o darle foco (como pasaría en un catálogo de productos de comercio electrónico).

Hemos creado un ejemplo muy simple, que puedes encontrar en [mouse-and-keyboard-events.html](http://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) (consulta también el [código fuente](https://github.com/mdn/learning-area/blob/master/accessibility/css/mouse-and-keyboard-events.html)). El código presenta dos funciones que muestran y ocultan la imagen ampliada; estas se ejecutan mediante las siguientes líneas que las configuran como controladores de eventos:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Las dos primeras líneas ejecutan las funciones cuando el puntero del ratón se desplaza sobre la miniatura y deja de hacerlo, respectivamente. Sin embargo, esto no nos permite acceder a la vista ampliada con el teclado; para hacerlo hemos incluido las dos últimas líneas, que ejecutan las funciones cuando la imagen toma y pierde el foco. Esto se puede hacer presionando el tabulador hasta llegar a la imagen, porque le hemos dado `tabindex="0"`.

El evento de `click` es interesante: parce dependiente del ratón, pero la mayoría de los navegadores activan los controladores de eventos `onclick` al presionar Enter / Return en un enlace o elemento de formulario que tenga foco, o cuando dicho elemento se toca en un dispositivo de pantalla táctil. Sin embargo, esto no funciona por defecto cuando permites que un evento no enfocable por defecto adquiera el foco usando tabindex; en tales casos, debe detectar específicamente cuándo se presiona esa tecla exacta (consulte [Volver a añadir la accesibilidad del teclado](/es/docs/Learn/Accessibility/HTML#Volver_a_añadir_la_accesibilidad_del_teclado)).

## ¡Pon a prueba tus habilidades

Has llegado al final de este artículo. ¿Recuerdas la información más importante? Encontrar pruebas para verificar que has retenido esta información antes de continuar en [Test your skills: CSS and JavaScript accessibility](/es/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility).

## Resumen

Esperamos que este artículo te haya brindado una buena cantidad de detalles y comprensión sobre los problemas de accesibilidad relacionados con el uso de CSS y JavaScript en las páginas web.

¡Siguiente parada, WAI-ARIA!

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}
