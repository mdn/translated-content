---
title: Estilizando formularios HTML
slug: Learn/Forms/Styling_web_forms
translation_of: Learn/Forms/Styling_web_forms
original_slug: Learn/HTML/Forms/Styling_HTML_forms
---

En este artículo aprenderemos como utilizar [CSS](/es/docs/Web/CSS) con formularios [HTML](/es/docs/Web/HTML) para hacerlos más atractivos. Aunque parezca extraño, esto es algo que puede llegar a ser complicado. Por razones históricas y técnicas, los widgets de formulario no suelen llevarse bien con CSS. Por este motivo, muchos desarrolladores prefieren [construir sus propios widgets](https://developer.mozilla.org/en-US/docs/HTML/Forms/How_to_build_custom_form_widgets) para tener el control de su aspecto en vez de utilizar los nativos. De todas formas, con los navegadores modernos, los diseñadores web cada vez tienen más control sobre el diseño de los elementos de formulario. Vamos a profundizar en esto.

## ¿Porqué es tan difícil aplicar estilos a formularios con CSS?
En los principios de la Web —allá por 1995 — se añadieron los controles de formulario en la [2ª especificación HTML](http://www.ietf.org/rfc/rfc1866.txt). Debido a la complejidad de los widgets de formulario, los implementadores prefirieron dejar que el sistema operativo subyacente se encargara de su manejo y presentación.

Pocos años después, se creó **CSS y lo que era una necesidad técnica** — es decir, el uso de widgets nativos para implementar controles de formulario, empezó a requerir estilizado. Y en los primeros días de CSS, el estilizado de formularios no fue una prioridad.

Por otra parte, como los usuarios estaban acostumbrados a la apariencia visual de sus plataformas respectivas, los fabricantes de navegadores fueron reacios a hacer que los controles de formularios pudieran recibir estilos.

Hoy en día, ni siquiera uno solo de los navegadores actuales implementa **completamente** CSS 2.1. Afortunadamente, con el tiempo, los fabricantes de navegadores han ido mejorado su soporte a CSS para los elementos de formulario e, incluso considerando que su usabilidad tiene mala reputación, actualmente, ya se puede usar CSS para estilizar **[formularios HTML](https://developer.mozilla.org/es/docs/HTML/Forms)**

### No todos los widgets se crean igual con CSS
Actualmente aun se encuentran dificultades cuando se utiliza CSS con formularios; estos problemas se pueden dividir en tres categorías.

#### El bueno
A algunos elementos se les puede dar estilo con pocos o ningún problema independientemente de la plataforma. Entre estos se incluyen los siguientes elementos estructurales:

* {{HTMLElement("form")}}
* {{HTMLElement("fieldset")}}
* {{HTMLElement("label")}}
* Botones (tanto {{HTMLElement("input")}} y {{HTMLElement("button")}})
* {{HTMLElement("label")}}
* {{HTMLElement("output")}}

#### El malo
Algunos elementos son más díficiles de estilizar, llegando a necesitar CSS complejo o trucos muy específicos:
* Los botones de radio y "checkboxes".
* `<input type="search">`

Veremos como trabajar con estos casos específicos en el artículo [Estilizado avanzado para formularios HTML](/en-US/docs/Advanced_styling_for_HTML_forms).

#### El feo
En algunos elementos, simplemente no se puede utilizar CSS. Incluyendo a:
* `<input type="color">`
* Controles relacionados al tiempo como `<input type="datetime-local">`
* `<input type="range">`
* `<input type="file">`
* Elementos involucrados en la creación de widgets de selección como {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} y {{HTMLElement("datalist")}}.
* {{HTMLElement("progress")}} y {{HTMLElement("meter")}}

<h2 id="Estilizado_básico">Estilizado básico</h2>

<p>Aplicar estilos a <a href="https://developer.mozilla.org/es/docs/Web/Guide/HTML/Forms/Styling_HTML_forms#El_bueno">elementos que son fáciles de estilizar</a> con CSS, no debería suponer ninguna dificultad ya que básicamente se comportan como cualquier otro elemento HTML. De todas formas, el agente de usuario de estilos para cada navegador puede mostrar pequeñas inconsistencias por lo que a continuación daremos algunos trucos para ayudar a aplicar estilos más cómodamente.</p>

<h3 id="Campos_de_búsqueda">Campos de búsqueda</h3>

<p>Las cajas de búsqueda son el único tipo de campo de texto que pueden ofrecer más dificultad al aplicar estilos. En los navegadores basados en webkit (Chrome, Safari, etc.) se debe lidiar con la propiedad -webkit-. Discutiremos esta propiedad más tarde en el artículo: <a href="/en-US/docs/Advanced_styling_for_HTML_forms" style="line-height: 23.3333339691162px; text-decoration: underline;" title="/en-US/docs/Advanced_styling_for_HTML_forms">Advanced styling for HTML forms</a><span style="line-height: 23.3333339691162px;">.</span></p>

<h4 id="Ejemplo">Ejemplo</h4>

<pre class="brush: html">&lt;form&gt;
  &lt;input type="search"&gt;
&lt;/form&gt;
</pre>

<pre class="brush: css">input[type=search] {
  border: 1px dotted #999;
  border-radius: 0;

  -webkit-appearance: none;
}</pre>

<p><img alt="This is a screenshot of a search filed on Chrome, with and without the use of -webkit-appearance" src="/files/4153/search-chrome-macos.png" style="border-style: solid; border-width: 1px; height: 107px; width: 179px;"></p>

<p>En esta captura de pantalla pueden verse dos campos de búsqueda en Chrome, ambos campos tienen definido el borde como en nuestro ejemplo, pero el primero no utiliza -webkit- mientras que el segundo si lo hace con -webkit-appearance:none. Las diferencias son evidentes.</p>

<h3 id="Fuentes_y_texto">Fuentes y texto</h3>

<p>Las fuentes y capacidades de texto de CSS  se pueden utilizar sin problemas en cualquier widget (y sí, se puede utilizar <a href="/es/docs/Web/CSS/@font-face">@font-face</a> en formularios). De todas formas, el comportamiento de los navegadores no es siempre consistente. Por defecto, algunos widgets no heredan <a href="/es/docs/Web/CSS/font-family">font-family</a> ni <a href="/es/docs/Web/CSS/font-size">font-size</a> de sus antecesores. Y muchos navegadores utilizan la apariencia por defecto. Para mantener la coherencia de los formularios con el resto de elementos se deben añadir las siguientes reglas a la hoja de estilos:</p>

<pre class="brush: css">button, input, select, textarea {
  font-family : inherit;
  font-size   : 100%;
}</pre>

<p>La siguiente captura de pantalla muestra estas incosistencias; a la izquierda la apariencia por defecto en Firefox sobre Mac OS X, usando las fuentes por defecto de la plataforma. A la derecha los mismos elementos aplicando nuestras reglas de armonización de fuentes.</p>

<p><img alt="This is a screenshot of the main form widgets on Firefox on Mac OSX, with and without font harmonization" src="/files/4157/font-firefox-macos.png" style="border-style: solid; border-width: 1px; height: 234px; width: 420px;"></p>

<p>Hay muchas controversia sobre si los formularios tienen mejor aspecto usando los estilos por defecto del sistema o usando estilos personalizados que coincidan con el resto del contenido. Como diseñador del sitio o aplicación Web esta decisión  es suya.</p>

<h3 id="Modelo_de_cajas">Modelo de cajas</h3>

<p>Todos los campos de texto tienen soporte completo para las propiedades relacionadas con el modelo de cajas de CSS (<a href="/es/docs/Web/CSS/width">width</a>, <a href="/es/docs/Web/CSS/height">height</a>, <a href="/es/docs/Web/CSS/padding_paspartu">padding</a>, margin y <a href="/es/docs/CSS/border">border</a>). Igual que antes, los navegadores se remiten a los estilos por defecto del sistema cuando muestran estos widgets. A cada cual te corresponde el como combinarlos dentro del resto de contenido. Si  se quieres mantener el aspecto nativo de los widgets, entonces hay que afrontar pequeñas inconsistencias de tamaño.</p>

<p>Esto es porque cada widget tiene sus propias reglas para el orden, margen y padding. Por lo que si quieres darle el mismo tamaño a varios widgets diferentes se debe usar la propiedad box-sizing: </p>

<pre class="brush: css">input, textarea, select, button {
  width : 150px;
  margin: 0;

  -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
     -moz-box-sizing: border-box; /* For legacy (Firefox &lt;29) Gecko based browsers */
          box-sizing: border-box;
}</pre>

<p><img alt="This is a screenshot of the main form widgets on Chrome on Windows 7, with and without the use of box-sizing." src="/files/4161/size-chrome-win7.png" style="border-style: solid; border-width: 1px; height: 213px; width: 358px;"></p>

<p>En la captura de pantalla de arriba, la columna la izquierda es sin utilizar box-sizing, mientras que la de la derecha usa esta propiedad con el valor border-box. Obsérvese cómo esto permite asegurar que todos los elementos ocupan la misma cantidad de espacio, independientemente de las reglas por defecto de la plataforma.</p>

<h3 id="Posicionado">Posicionado</h3>

<p>El posicionado de formularios HTML <span style="line-height: 23.3333339691162px;">no es </span><span style="line-height: 1.5;">generalmente  un problema; sin embargo, hay dos elementos a los que prestar una especial atención:</span></p>

<h4 id="legend">legend</h4>

<p>El elemento <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend">legend </a>no tiene problemas de estilizado a excepción de las reglas de posición. En los navegadores el elemento <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend">legend </a>se posiciona encima del borde superior de su antecesor <a href="/es/docs/HTML/Elemento/fieldset">fieldset</a>. No existe ninguna posibilidad de colocarlo dentro del flujo HTML más allá del borde superior. Sin embargo se puede posicionar de forma relativa o absoluta mediante la propiedad position. En cualquier caso sigue siendo parte del borde de fieldset.</p>

<p>Debido a que el elemento legend es muy importante por razones de accesibilidad (esto es lo que leen las tecnologías de asistencia como parte de las etiquetas de cada elemento de formulario dentro del fieldset), bastante menudo se empareja con un título que se oculta pero siendo aun accesible, de la forma siguiente:</p>

<h5 id="HTML">HTML</h5>

<pre class="brush: html">&lt;fieldset&gt;
  &lt;legend&gt;Hi!&lt;/legend&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
&lt;/fieldset&gt;</pre>

<h5 id="CSS">CSS</h5>

<pre class="brush: css">legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}</pre>

<h4 id="textarea">textarea</h4>

<p>Por defecto, todos los navegadores consideran el elemento <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">textarea </a>como un inline block alineado con la línea base del texto. Esto es algo que raramente es lo que en realidad se quiere. Para convertir este elemento de un inline-block a uno tipo block, se realiza bastante fácilmente utilizando la propiedad <a href="/es/docs/CSS/display">display</a>. Si lo que quieres es utilizarlo inline, es corriente cambiar la alineación vertical: </p>

<pre class="brush: css">textarea {
  vertical-align: top;
}</pre>

<h2 id="Ejemplo_2">Ejemplo</h2>

<p>Vamos a ver un ejemplo de como aplicar estilo a un formulario HTML. Esto nos ayudará a tener las ideas más claras. A continuación construiremos el siguiente formulario de contacto de esta postal:</p>

<p><img alt="This is what we want to achieve with HTML and CSS" src="/files/4149/screenshot.png" style="border-style: solid; border-width: 1px; height: 249px; width: 370px;"></p>

<h3 id="HTML_2">HTML</h3>

<p>El HTML  incluye poco más de lo que se utiliza en el primer artículo de <a href="/en-US/docs/HTML/Forms/My_first_HTML_form">esta guía</a>; apenas el título y algún ID más.</p>

<pre class="brush: html">&lt;form&gt;
  &lt;h1&gt;to: Mozilla&lt;/h1&gt;

  &lt;div id="from"&gt;
    &lt;label for="name"&gt;from:&lt;/label&gt;
    &lt;input type="text" id="name" name="user_name"&gt;
  &lt;/div&gt;

  &lt;div id="reply"&gt;
    &lt;label for="mail"&gt;reply:&lt;/label&gt;
    &lt;input type="email" id="mail" name="user_email"&gt;
  &lt;/div&gt;

  &lt;div id="message"&gt;
    &lt;label for="msg"&gt;Your message:&lt;/label&gt;
    &lt;textarea id="msg" name="user_message"&gt;&lt;/textarea&gt;
  &lt;/div&gt;

  &lt;div class="button"&gt;
    &lt;button type="submit"&gt;Send your message&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

### CSS

¡Aqui es donde empieza la diversión! Antes de empezar a codificar, necesitamos tres elementos adicionales:

<ol>
 <li>El <a href="https://developer.mozilla.org/files/4151/background.jpg">fondo </a>de la postal</li>
 <li>Una fuente tipográfica: <a href="http://www.fontsquirrel.com/fonts/Secret-Typewriter" rel="external">la "Secret Typewriter" de fontsquirrel.com</a></li>
 <li>Una fuente manuscrita: <a href="http://www.fontsquirrel.com/fonts/Journal" rel="external">la "Journal" fde fontsquirrel.com</a></li>
</ol>

Ahora podemos repasar el código. Primero preparamos las bases definiendo las reglas [@font-face](https://developer.mozilla.org/es/docs/Web/CSS/@font-face) y los elementos básicos de {{HTMLElement("form")}}.

```css
@font-face{
  font-family : "handwriting";

  src : url('journal.eot');
  src : url('journal.eot?') format('eot'),
        url('journal.woff') format('woff'),
        url('journal.ttf') format('truetype');
}

@font-face{
  font-family : "typewriter";

  src : url('veteran_typewriter.eot');
  src : url('veteran_typewriter.eot?') format('eot'),
        url('veteran_typewriter.woff') format('woff'),
        url('veteran_typewriter.ttf') format('truetype');
}

body {
  font  : 21px sans-serif;

  padding : 2em;
  margin  : 0;

  background : #222;
}

form {
  position: relative;

  width  : 740px;
  height : 498px;
  margin : 0 auto;

  background: #FFF url(background.jpg);
}```

Ahora podemos posicionar los elementos, incluidos el título y los elementos del formulario.

```css
h1 {
  position : absolute;
  left : 415px;
  top  : 185px;

  font : 1em "typewriter", sans-serif;
}

#from {
  position: absolute;
  left : 398px;
  top  : 235px;
}

#reply {
  position: absolute;
  left : 390px;
  top  : 285px;
}

#message {
  position: absolute;
  left : 20px;
  top  : 70px;
}
```

Aquí es donde empezamos a trabajar los propios elementos. Primero, nos aseguramos que los elementos {{HTMLElement("label")}} reciben la fuente correcta.

```css
label {
  font : .8em "typewriter", sans-serif;
}
```

Los campos de texto necesitan algunas reglas comunes. Dicho simplemente, le quitamos bordes y fondos y redefinimos el padding y margin.

```css
input, textarea {
  font    : .9em/1.5em "handwriting", sans-serif;

  border  : none;
  padding : 0 10px;
  margin  : 0;
  width   : 240px;

  background: none;
}
```

Cuando uno de estos campos recibe el foco, vamos a resaltarlo con un fondo transparente gris claro. Tome nota de que es importante añadir la propiedad [outline](https://developer.mozilla.org/es/docs/Web/CSS/outline) para quitar el resaltado de enfoque añadido por defecto por algunos navegadores.

```css
input:focus, textarea:focus {
  background   : rgba(0,0,0,.1);
  border-radius: 5px;
  outline      : none;
}
```

Ahora que nuestros campos de texto están terminados, necesitamos ajustar como se muestran los campos de simple y múltiple línea para que coincidan, ya que lo normal es que por defecto no se vean igual.

El campo de línea simple requiere de algunos trucos para que se vean bien en Internet Explorer. Internet Explorer no define la altura de los campos basándose en la altura natural de la fuente (lo cual es el comportamiento normal del resto de navegadores). Para corregir esto necesitamos añadir explícitamente la altura a los campos de la siguiente forma:

```css
input {
    height: 2.5em; /* para Internet Explorer */
    vertical-align: middle; /* Esto es opcional, pero se ve mejor en Internet Explorer */
}
```

Los elementos {{HTMLElement("textare")}} se muestran por defecto como bloques, Las dos cosas importantes aquí son las propiedades [resize](https://developer.mozilla.org/es/docs/Web/CSS/resize) y [overflow]("https://developer.mozilla.org/es/docs/Web/CSS/overflow). Ya que nuestro `diseño` es de tamaño fijo, utilizaremos la propiedad `resize` para impedir que el usuario pueda cambiar el tamaño de los campos multilínea. La propiedad `overflow` se utiliza para que el campo se muestre de forma más consistente a través de diversos navegadores; algunos de ellos ponen por defecto esta propiedad en `auto`, pero en nuestro caso, es mejor asegurarse de que todos estén en `auto`.

```css
textarea {
  display : block;

  padding : 10px;
  margin  : 10px 0 0 -10px;
  width   : 340px;
  height  : 360px;

  resize  : none;
  overflow: auto;
}
```

El elemento {{HTMLElement("button")}} </code>se acomoda muy bien a CSS; se puede hacer lo que se quiera con el, ¡incluso utilizando [pseudo-elementos](https://developer.mozilla.org/es/docs/CSS/Pseudo-elements)!</p>

```css
button {
  position     : absolute;
  left         : 440px;
  top          : 360px;

  padding      : 5px;

  font         : bold .6em sans-serif;
  border       : 2px solid #333;
  border-radius: 5px;
  background   : none;

  cursor       : pointer;

-webkit-transform: rotate(-1.5deg);
   -moz-transform: rotate(-1.5deg);
    -ms-transform: rotate(-1.5deg);
     -o-transform: rotate(-1.5deg);
        transform: rotate(-1.5deg);
}

button:after {
  content: " &gt;&gt;&gt;";
}

button:hover,
button:focus {
  outline   : none;
  background: #000;
  color   : #FFF;
}
```

Y ¡listo! Sientase libre de probarlo usted mismo; como comprobará ¡esto funciona!

## Conclusión

Como puede verse, mientras que queramos construir formularios solo con campos de texto y botones, es sencillo aplicarles estilos con CSS. Si desea saber más pequeños trucos de CSS que le hagan más fácil la vida al trabajar con formularios, echele un vistazo a la parte de formularios de [el proyecto normalize.css](http://necolas.github.com/normalize.css).

En el próximo artículo, veremos como manejar widgets de formulario de la categoría de "el malo" y "el feo".
