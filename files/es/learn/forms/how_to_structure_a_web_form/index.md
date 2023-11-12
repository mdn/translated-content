---
title: Cómo estructurar un formulario HTML
slug: Learn/Forms/How_to_structure_a_web_form
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Una vez examinados los conceptos básicos, vamos a ver más en detalle los elementos que se utilizan para proporcionar estructura y significado a las diferentes partes de un formulario.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática y de
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">lenguajes HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender cómo se estructuran los formularios HTML y se les proporciona
        semántica para dotarlos de criterios de usabilidad y accesibilidad.
      </td>
    </tr>
  </tbody>
</table>

La flexibilidad que presentan los formularios los convierte en una de las estructuras más complejas en [HTML](/es/docs/Learn/HTML), puesto que puedes crear cualquier tipo de formulario básico a partir de los elementos y atributos destinados a esta función. El uso de una estructura correcta al crear un formulario HTML te ayudará a garantizar que el formulario presente las características de usabilidad y [accesibilidad](/es/docs/Learn/Accessibility) adecuadas.

## El elemento \<form>

El elemento {{HTMLElement ("form")}} define formalmente un formulario y los atributos que determinan el comportamiento del formulario. Cada vez que desees crear un formulario HTML, debes empezar utilizando este elemento y anidando todo el contenido dentro de él. Muchas tecnologías de asistencia y complementos del navegador pueden descubrir elementos {{HTMLElement ("form")}} e implementar códigos de apoyo (_hooks_) especiales para que sean más fáciles de usar.

Ya lo vimos en el artículo anterior.

> **Advertencia:** Está estrictamente prohibido anidar un formulario dentro de otro formulario. Anidar formularios no es una buena idea porque puede ocasionar comportamientos impredecibles.

Siempre es posible usar controles de formulario fuera de un elemento {{HTMLElement ("form")}}. Si la haces, por defecto ese control no tiene nada que ver con ningún formulario, a menos que lo asocies a algún formulario con el atributo [`form`](/es/docs/Web/HTML/Attributes/form). Esto se introdujo para permitir vincular explícitamente un control a un formulario, incluso si este no está dentro de él.

A continuación vamos a exponer los elementos estructurales que encontrarás en un formulario.

## Los elementos \<fieldset> y \<legend>

El elemento {{HTMLElement ("fieldset")}} es una forma cómoda de crear grupos de controles de formulario (también denominados _widgets_) que comparten el mismo propósito, con fines semánticos y de aplicación de estilo. Puedes etiquetar un elemento {{HTMLElement ("fieldset")}} incluyendo un elemento {{HTMLElement ("legend")}} justo debajo de la etiqueta de apertura {{HTMLElement ("fieldset")}}. El contenido textual del elemento {{HTMLElement ("legend")}} describe formalmente el propósito del elemento {{HTMLElement ("fieldset")}} que está incluido dentro.

Muchas tecnologías de asistencia utilizarán el elemento {{HTMLElement ("legend")}} como si fuera una parte de la etiqueta de cada control dentro del elemento {{HTMLElement ("fieldset")}} correspondiente. Por ejemplo, algunos lectores de pantalla como [Jaws](http://www.freedomscientific.com/products/software/jaws/) y [NVDA](http://www.nvda-project.org/) leerán el contenido de la leyenda antes de decir la etiqueta de cada control.

Un pequeño ejemplo:

```html
<form>
  <fieldset>
    <legend>Tamaño del zumo de fruta</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Pequeño</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Mediano</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Grande</label>
    </p>
  </fieldset>
</form>
```

> **Nota:** Puedes encontrar este ejemplo en [fieldset-legend.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/fieldset-legend.html) ([consúltalo en vivo](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Al leer el formulario anterior, un lector de pantalla dirá «Tamaño del zumo de fruta: pequeño» para el primer control de formulario, «Tamaño del zumo de fruta: mediano» para el segundo y «Tamaño del zumo de fruta: grande» para el tercero.

El caso de uso que se muestra en este ejemplo es uno de los más importantes. Cada vez que tengas un conjunto de botones de opción, debes anidarlos dentro de un elemento {{HTMLElement ("fieldset")}}. Hay otros casos de uso y el elemento {{HTMLElement ("fieldset")}} también se puede usar en general para seccionar un formulario. Idealmente, los formularios largos deberían tener una extensión de varias páginas, pero si un formulario se alarga y ha de estar contenido en una sola página, colocar las diferentes secciones relacionadas dentro de diferentes conjuntos de campos mejora su usabilidad.

Debido a la influencia que tiene sobre las tecnologías de asistencia, el elemento {{HTMLElement ("fieldset")}} es uno de los elementos clave para crear formularios accesibles. Sin embargo, no hay que abusar de él. Si es posible, cada vez que crees un formulario, intenta [escuchar cómo lo interpreta un lector de pantalla](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders). Si suena raro, intenta mejorar la estructura del formulario.

## El elemento \<label>

Como vimos en el artículo anterior, el elemento {{HTMLElement ("label")}} es la forma formal de definir una etiqueta para un control de un formulario HTML. Este es el elemento más importante si deseas crear formularios accesibles porque cuando se implementan correctamente, los lectores de pantalla leen la etiqueta de un elemento de formulario junto con las instrucciones relacionadas, y esto además resulta muy útil para los usuarios videntes. Tomemos este ejemplo que vimos en el artículo anterior:

```html
<label for="name">Nombre:</label>
<input type="text" id="name" name="user_name" />
```

Con la etiqueta `<label>` asociada correctamente con `<input>` por su atributo `for` (que contiene el atributo `id` del elemento `<input>`), un lector de pantalla leerá algo como «Nombre, editar texto».

Hay otra forma de asociar un control de formulario con una etiqueta: asociarlo implícitamente anidando el control de formulario dentro de `<label>`.

```html
<label for="name">
  Nombre: <input type="text" id="name" name="user_name" />
</label>
```

Incluso en estos casos, se aconseja establecer el atributo `for` para garantizar que todas las tecnologías de asistencia comprendan la relación entre la etiqueta y el control de formulario.

Si no hay ninguna etiqueta, o si el control de formulario no está asociado implícita o explícitamente con alguna etiqueta, un lector de pantalla leerá algo así como «Editar texto en blanco», lo cual no es de mucha ayuda.

### ¡También se puede hacer clic en las etiquetas!

Otra ventaja de configurar correctamente las etiquetas es que puedes hacer clic o pulsar en la etiqueta para activar el control de formulario correspondiente. Esto es útil para controles como entradas de texto, donde puedes hacer clic tanto en la etiqueta como en la entrada de texto para proporcionar el foco al control de formulario, pero es útil especialmente para botones de opción y casillas de verificación, porque la zona sensible de este control puede ser muy pequeña, y puede ser útil para facilitar su activación.

Por ejemplo, al hacer clic en el texto de la etiqueta «Me gustan las cerezas» del ejemplo siguiente, cambiará el estado seleccionado de la casilla de verificación _taste_cherry_:

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">Me gustan las cerezas</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">Me gustan los plátanos</label>
  </p>
</form>
```

> **Nota:** Puedes encontrar este ejemplo en [checkbox-label.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/checkbox-label.html) ([consúltalo en vivo](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Etiquetas múltiples

Estrictamente hablando, es posible poner varias etiquetas en un solo control de formulario, pero no suele ser una buena idea porque algunas tecnologías de asistencia pueden tener problemas para manejarlas. En caso de tener varias etiquetas, hay que anidar el control de formulario y sus etiquetas dentro de un único elemento {{htmlelement ("label")}}.

Consideremos este ejemplo:

```html
<p>Los campos obligatorios se marcan con un <abbr title="required">*</abbr>.</p>

<!-- Así que esto: -->
<div>
  <label for="username">Nombre:</label>
  <input type="text" name="username" />
  <label for="username"
    ><abbr title="required" aria-label="required">*</abbr></label
  >
</div>

<!-- sería mejor hacerlo así: -->
<div>
  <label for="username">
    <span>Nombre:</span>
    <input id="username" type="text" name="username" />
    <abbr title="required" aria-label="required">*</abbr>
  </label>
</div>

<!-- Pero probablemente lo mejor es esto: -->
<div>
  <label for="username"
    >Nombre: <abbr title="required" aria-label="required">*</abbr></label
  >
  <input id="username" type="text" name="username" />
</div>
```

{{EmbedLiveSample("Etiquetas_múltiples", 120, 120)}}

El párrafo de la parte superior establece una regla para los elementos que son obligatorios. La regla ha de incluirse _antes_ de usarse para que tanto los usuarios videntes como los usuarios que utilizan tecnologías de asistencia y lectores de pantalla, sepan lo que significa antes de encontrar un elemento obligatorio. Pero si bien esto ayuda a informar a los usuarios de lo que significa un asterisco, no es posible confiar plenamente en ello. Cuando un lector de pantalla se encuentre con un asterisco pronunciará «estrella». Cuando un usuario vidente pase el ratón por encima, debería aparecer una etiqueta de «obligatorio», lo cual se logra con el uso del atributo `title`. Pero los títulos que se leen en voz alta dependen de la configuración del lector de pantalla, por lo que es más fiable incluir también el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), que los lectores de pantalla siempre leen.

Las variantes anteriores aumentan en efectividad a medida que se avanza por ellas:

- En el primer ejemplo, la etiqueta no se lee en absoluto con la entrada de texto; solo se obtiene «Editar texto en blanco», y además las etiquetas se leen por separado. Los múltiples elementos `<label>` confunden al lector de pantalla.
- En el segundo ejemplo, las cosas son un poco más claras: la etiqueta que se lee junto con la entrada de texto es «Editar texto nombre estrella nombre obligatorio», pero las etiquetas aún se leen por separado. Las cosas continúan siendo un poco confusas, pero esta vez funciona algo mejor porque `<input>` tiene una etiqueta asociada.
- El tercer ejemplo es el mejor: la etiqueta se lee en conjunto, y la etiqueta que se lee con la entrada es «Editar texto nombre requerido».

> **Nota:** Es posible que obtengas resultados ligeramente diferentes dependiendo de tu lector de pantalla. Esta prueba se hizo con VoiceOver (NVDA se comporta de manera similar). Nos encantaría conocer tus experiencias.

> **Nota:** Puedes encontrar este ejemplo en GitHub como [required-labels.html](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/required-labels.html) ([o consultarlo en vivo](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). No pruebes el ejemplo con las dos o tres versiones sin los comentarios porque los lectores de pantalla se confundirán si hay múltiples etiquetas y múltiples entradas con el mismo ID.

## Estructuras HTML comunes que se utilizan en los formularios

Más allá de las estructuras específicas de los formularios web, es bueno recordar que el marcado de los formularios es solo HTML. Esto significa que puedes usar todo el poder del HTML para estructurar un formulario web.

Como puedes ver en los ejemplos, es una práctica común delimitar una etiqueta y su control de formulario con un elemento {{HTMLElement ("li")}} dentro de una lista {{HTMLElement ("ul")}} o {{HTMLElement ("ol")}}. Los elementos {{HTMLElement ("p")}} y {{HTMLElement ("div")}} también se usan con frecuencia. Se recomiendan las listas para estructurar múltiples casillas de verificación o botones de opción.

Además del elemento {{HTMLElement ("fieldset")}}, también es una práctica común usar títulos HTML (por ejemplo, {{htmlelement ("h1")}}, {{htmlelement ("h2")}}), y seccionar (por ejemplo, {{htmlelement ("section")}}), para estructurar formas complejas.

Depende de ti, sobre todo, encontrar un estilo de codificación cómodo que dé como resultado formas con buena accesibilidad y usabilidad. Las secciones independientes con funciones diferentes deben estar contenidas en elementos {{htmlelement ("section")}} separados, con elementos {{htmlelement ("fieldset")}} para contener botones de opción.

### Aprendizaje activo: construir una estructura de formulario

Pongamos en práctica estas ideas y creemos un formulario un poco más complicado: un formulario de pago. Este formulario contendrá una serie de tipos de control que quizás aún no comprendas. No te preocupes por esto por ahora; en el artículo siguiente descubrirás cómo funcionan ([Los controles básicos de formulario originales](/es/docs/Learn/HTML/Forms/The_native_form_widgets)). Por ahora, lee con detenimiento las descripciones y sigue las instrucciones, y empieza a formarte una idea de qué elementos de delimitación se utilizan para estructurar el formulario y por qué.

1. Para comenzar, haz una copia local de nuestro [archivo de plantilla en blanco](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) y el [CSS de nuestro formulario de pago](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.css) en un nuevo directorio de tu ordenador.
2. Añade dentro del elemento HTML {{htmlelement ("head")}} la línea siguiente para aplicar el CSS al HTML:

   ```html
   <link href="payment-form.css" rel="stylesheet" />
   ```

3. A continuación, añade el elemento externo {{htmlelement ("form")}} para crear tu formulario:

   ```html
   <form></form>
   ```

4. Añade un encabezado y un párrafo dentro de las etiquetas `<form>` para informar a los usuarios cómo se marcan los campos obligatorios:

   ```html
   <h1>Forma de pago</h1>
   <p>
     Los campos obligatorios van seguidos de
     <strong> <abbr title="required"> * </abbr> </strong>.
   </p>
   ```

5. A continuación añadimos al formulario una sección de código más grande, justo debajo de nuestra entrada anterior. Aquí verás que delimitamos con un elemento {{htmlelement ("section")}} independiente los campos con la información de contacto. Además, hay un conjunto de dos botones de opción, cada uno de los cuales colocamos dentro de su elemento de lista ({{htmlelement ("li")}}) propio. También hay dos entradas de texto estándar {{htmlelement ("input")}} y sus elementos {{htmlelement ("label")}} asociados, cada uno anidado dentro de un elemento {{htmlelement ("p")}} y una entrada de texto para introducir una contraseña. Añade este código a tu formulario:

   ```html
   <section>
     <h2>Información de contacto</h2>
     <fieldset>
       <legend>Título</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="K" />
             Rey
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="Q" />
             Reina
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="J" />
             Bufón
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Nombre:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="text" id="name" name="username" />
     </p>
     <p>
       <label for="mail">
         <span>Correo electrónico:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="email" id="mail" name="usermail" />
     </p>
     <p>
       <label for="pwd">
         <span>Contraseña:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="password" id="pwd" name="password" />
     </p>
   </section>
   ```

6. La segunda `<section>` de nuestro formulario es la información de pago. Hay tres controles diferentes, junto con sus etiquetas, cada uno contenido dentro de un elemento `<p>`. El primero es un menú desplegable ({{htmlelement ("select")}}) para seleccionar el tipo de tarjeta de crédito. El segundo es un elemento `<input>` de tipo `tel`, para introducir un número de tarjeta de crédito. Si bien podríamos haber usado el tipo `number`, no queremos una interfaz de usuario con control de número. El último es un elemento `<input>` de tipo `date`, para introducir la fecha de caducidad de la tarjeta; aparecerá como un control de selección de fecha en navegadores compatibles, y como una entrada de texto normal en navegadores no compatibles. Estos tipos de entrada más nuevos volverán a aparecer en el artículo [Tipos de entrada HTML5](/es/docs/Learn/Forms/HTML5_input_types).

   Introduce los datos siguientes a continuación de la sección anterior:

   ```html
   <section>
     <h2>Información de pago</h2>
     <p>
       <label for="card">
         <span>Tipo de tarjeta:</span>
       </label>
       <select id="card" name="usercard">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Número de tarjeta:</span>
         <strong><abbr title="required">*</abbr></strong>
       </label>
       <input type="tel" id="number" name="cardnumber" />
     </p>
     <p>
       <label for="date">
         <span>Fecha de caducidad:</span>
         <strong><abbr title="required">*</abbr></strong>
         <em>el formato mm/aa</em>
       </label>
       <input type="date" id="date" name="expiration" />
     </p>
   </section>
   ```

7. La última sección que añadimos es mucho más simple y contiene solo un {{htmlelement ("button")}} de tipo `submit`, para enviar los datos del formulario. Añádelo al final de tu formulario:

   ```html
   <p><button type="submit">Validar el pago</button></p>
   ```

Debajo puedes ver en acción el formulario terminado (también lo encontrarás en GitHub; consulta el [código fuente](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html) de nuestro payment-form.html y [ejecútalo en vivo](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)):

{{EmbedLiveSample('',"100%",620)}}

## ¡Prueba tus habilidades!

Has llegado al final de este artículo pero ¿puedes recordar la información más importante? Puedes encontrar pruebas adicionales para comprobar que has comprendido la información antes de continuar — visita [Prueba tus habilidades: Estructura de formularios](/es/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Resumen

Ahora tienes todos los conocimientos necesarios para estructurar adecuadamente tus formularios web. Expondremos muchas de las características que se presentan aquí en los artículos siguientes, y el próximo artículo analizará con más detalle el uso de todos los diferentes tipos de controles de formulario que vas a querer usar para recopilar la información de tus usuarios.

## Ver también

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](http://www.alistapart.com/articles/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### Temas avanzados

- [Enviar formularios con JavaScript](/es/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [Cómo crear controles de formulario personalizados](/es/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [Formularios HTML en navegadores antiguos](/es/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Cuestiones avanzadas de aplicación de estilo para formularios HTML](/es/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Tabla de compatibilidad de los controles de formulario](/es/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets) según su código propietario
