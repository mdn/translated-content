---
title: Estilizando formularios HTML
slug: Learn/Forms/Styling_web_forms
translation_of: Learn/Forms/Styling_web_forms
original_slug: Learn/HTML/Forms/Styling_HTML_forms
---
{{LearnSidebar}}

En los artículos anteriores vimos todo el HTML que necesitas para crear y estructurar tus formularios HTML. En este artículo veremos como usar [CSS](/es/docs/Web/CSS) para estilizar nuestros formularios. Esto historicamente ha sido díficil — cada control tiene un nivel de dificultad distinta — pero se esta volviendo más fácil a medida de que los navegadores antiguos son retirados, y los modernos nos abren más posibilidades. 

## ¿Porqué es tan difícil aplicar estilos a formularios con CSS?
Se añadieron los controles de formulario en la [2ª especificación HTML](https://www.ietf.org/rfc/rfc1866.txt) en el 1995; CSS fue lanzado a finales del 1996, y ningún navegador lo implementó correctamente por años. Los navegadores le dejaban el trabajo de manejar y renderizar los formularios.

Aun con CSS permitiendo estilizar HTML, los fabricantes de navegadores han sido — y son, hasta el día de hoy — reacios a permitir el estilizado de estos porque los usuarios estaban acostumbrados al estilo de sus plataformas.

Esto ha cambiado. Los dueños de los sitios web quieren estilos que encajen con el diseño de sus páginas más que nunca, y la plataforma web ha cambiado para hacer esto posible.

Para algunos controles, todavía es díficil reconstruirlos para permitir que se puedan estilizar, pero ya podemos usar CSS para estilizar muchas partes de los formularios, pero hay que estar atentos; tienes que tener cuidado para no romper la funcionalidad de este.

### No todos los widgets se crean igual con CSS
Actualmente aun se encuentran dificultades cuando se utiliza CSS con formularios; estos problemas se pueden dividir en tres categorías.

#### Lo bueno
A algunos elementos se les puede dar estilo con pocos o ningún problema independientemente de la plataforma. Entre estos se incluyen los siguientes elementos estructurales:

* {{HTMLElement("form")}}
* {{HTMLElement("fieldset")}}
* {{HTMLElement("label")}}
* Botones (tanto {{HTMLElement("input")}} y {{HTMLElement("button")}})
* {{HTMLElement("output")}}

#### Lo malo
Algunos elementos son más díficiles de estilizar, llegando a necesitar CSS complejo o trucos muy específicos:
* Los botones de radio y "checkboxes".
* [<input type="search">](/es/docs/Web/HTML/Element/input/search)

Veremos como trabajar con estos casos específicos en el artículo [Estilizado avanzado para formularios HTML](/es/docs/Learn/Forms/Advanced_styling_for_HTML_forms).

#### Lo feo
En algunos elementos, simplemente no se puede utilizar CSS. Incluyendo a:
* [<input type="color">](/es/docs/Web/HTML/Element/input/color)
* Controles relacionados al tiempo como [<input type="datetime-local">](/es/docs/Web/HTML/Element/input/datetime-local)
* [<input type="range">](/es/docs/Web/HTML/Element/input/range)
* [<input type="file">](/es/docs/Web/HTML/Element/input/file)
* Elementos involucrados en la creación de widgets de selección como {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} y {{HTMLElement("datalist")}}.
* {{HTMLElement("progress")}} y {{HTMLElement("meter")}}

## Estilizado básico

Aplicar estilos a [elementos que son fáciles de estilizar](/es/docs/Learn/Forms/Styling_HTML_forms#El_bueno) con CSS, no debería suponer ninguna dificultad ya que básicamente se comportan como cualquier otro elemento HTML. De todas formas, el agente de usuario de estilos para cada navegador puede mostrar pequeñas inconsistencias por lo que a continuación daremos algunos trucos para ayudar a aplicar estilos más cómodamente.

### Campos de búsqueda

Las cajas de búsqueda son el único tipo de campo de texto que pueden ofrecer más dificultad al aplicar estilos. En los navegadores basados en webkit (Chrome, Safari, etc.) se debe lidiar con la propiedad -webkit-. Discutiremos esta propiedad más tarde en el artículo: [Estilizado avanzado para formularios HTML](/es/docs/Advanced_styling_for_HTML_forms).

#### Ejemplo

```html
<form>
  <input type="search">
</form>
```

```css
input[type=search] {
  border: 1px dotted #999;
  border-radius: 0;

  -webkit-appearance: none;
}
```

![Esta es una captura de pantalla de una búsqueda en Chrome, con y sin el uso de -webkit-appearance](search-chrome-macos.png)

En esta captura de pantalla pueden verse dos campos de búsqueda en Chrome, ambos campos tienen definido el borde como en nuestro ejemplo, pero el primero no utiliza -webkit- mientras que el segundo si lo hace con -webkit-appearance:none. Las diferencias son evidentes.

### Fuentes y texto

Las fuentes y capacidades de texto de CSS se pueden utilizar sin problemas en cualquier widget (y sí, se puede utilizar [@font-face](/es/docs/Web/CSS/@font-face) en formularios). De todas formas, el comportamiento de los navegadores no es siempre consistente. Por defecto, algunos widgets no heredan [font-family](/es/docs/Web/CSS/font-family) ni [font-size](/es/docs/Web/CSS/font-size) de sus antecesores. Y muchos navegadores utilizan la apariencia por defecto. Para mantener la coherencia de los formularios con el resto de elementos se deben añadir las siguientes reglas a la hoja de estilos:

```css
button, input, select, textarea {
  font-family : inherit;
  font-size   : 100%;
}
```

La siguiente captura de pantalla muestra estas incosistencias; a la izquierda la apariencia por defecto en Firefox sobre Mac OS X, usando las fuentes por defecto de la plataforma. A la derecha los mismos elementos aplicando nuestras reglas de armonización de fuentes.

![Esta es una captura de pantalla que muestra las inconsistencias relacionadas al uso de font-family](forms_fontfamily.png)

Hay muchas controversia sobre si los formularios tienen mejor aspecto usando los estilos por defecto del sistema o usando estilos personalizados que coincidan con el resto del contenido. Como diseñador del sitio o aplicación Web esta decisión es suya.

### Modelo de cajas

Todos los campos de texto tienen soporte completo para las propiedades relacionadas con el modelo de cajas de CSS ([width](/es/docs/Web/CSS/width), [height](/es/docs/Web/CSS/height), [padding](/es/docs/Web/CSS/padding), margin y [border](/es/docs/Web/CSS/border)). Igual que antes, los navegadores se remiten a los estilos por defecto del sistema cuando muestran estos widgets. A cada cual te corresponde el como combinarlos dentro del resto de contenido. Si  se quieres mantener el aspecto nativo de los widgets, entonces hay que afrontar pequeñas inconsistencias de tamaño.

Esto es porque cada widget tiene sus propias reglas para el orden, margen y padding. Por lo que si quieres darle el mismo tamaño a varios widgets diferentes se debe usar la propiedad box-sizing: 

```css
input, textarea, select, button {
  width : 150px;
  margin: 0;

  -webkit-box-sizing: border-box; /* Para navegadores de legado basados en WebKit */
     -moz-box-sizing: border-box; /* Para navegadores de legado (Firefox 29) basados en Gecko */
          box-sizing: border-box;
}
```

![Esta es una captura de pantalla de los widgets de formulario en Chrome para Windows 7, con y sin el uso de box-sizing.](size-chrome-win7.png)

En la captura de pantalla de arriba, la columna la izquierda es sin utilizar box-sizing, mientras que la de la derecha usa esta propiedad con el valor border-box. Obsérvese cómo esto permite asegurar que todos los elementos ocupan la misma cantidad de espacio, independientemente de las reglas por defecto de la plataforma.

### Posicionado

El posicionado de formularios HTML no es generalmente  un problema; sin embargo, hay dos elementos a los que prestar una especial atención:

#### legend

El elemento {{HTMLElement("legend")}} no tiene problemas de estilizado a excepción de las reglas de posición. En los navegadores el elemento `legend` se posiciona encima del borde superior de su antecesor {{HTMLElement("fieldset")}}. No existe ninguna posibilidad de colocarlo dentro del flujo HTML más allá del borde superior. Sin embargo se puede posicionar de forma relativa o absoluta mediante la propiedad position. En cualquier caso sigue siendo parte del borde de fieldset.

<p>Debido a que el elemento legend es muy importante por razones de accesibilidad (esto es lo que leen las tecnologías de asistencia como parte de las etiquetas de cada elemento de formulario dentro del fieldset), bastante menudo se empareja con un título que se oculta pero siendo aun accesible, de la forma siguiente:</p>

##### HTML

 ```html
<fieldset>
  <legend>Hi!</legend>
  <h1>Hello</h1>
</fieldset>
```

##### CSS

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

#### textarea

Por defecto, todos los navegadores consideran el elemento {{HTMLElement("textarea")}} como un inline block alineado con la línea base del texto. Esto es algo que raramente es lo que en realidad se quiere. Para convertir este elemento de un inline-block a uno tipo block, se realiza bastante fácilmente utilizando la propiedad [display](/es/docs/CSS/display). Si lo que quieres es utilizarlo inline, es corriente cambiar la alineación vertical:

```css
textarea {
  vertical-align: top;
}
```

## Ejemplo

Vamos a ver un ejemplo de como aplicar estilo a un formulario HTML. Esto nos ayudará a tener las ideas más claras. A continuación construiremos el siguiente formulario de contacto de esta postal:

![Esto queremos hacer con HTML y CSS](updated-form-screenshot.jpg)

### HTML

El HTML incluye poco más de lo que se utiliza en el primer artículo de [esta guía](/en-US/docs/HTML/Forms/My_first_HTML_form); apenas el título y algún ID más.

```html
<form>
  <h1>para: Mozilla</h1>

  <div id="remitente">
    <label for="nombre">de:</label>
    <input type="text" id="nombre" name="user_name">
  </div>

  <div id="respuesta">
    <label for="mail">respuesta::</label>
    <input type="email" id="mail" name="user_email">
  </div>

  <div id="mensaje">
    <label for="msg">Tu mensaje:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Enviar tu mensaje</button>
  </div>
</form>
```

### CSS

¡Aqui es donde empieza la diversión! Antes de empezar a codificar, necesitamos tres elementos adicionales:

- El [fondo](https://developer.mozilla.org/files/4151/background.jpg) de la postal
- Una fuente tipográfica: [la "Secret Typewriter" de fontsquirrel.com](http://www.fontsquirrel.com/fonts/Secret-Typewriter)
- Una fuente manuscrita: [la "Journal" de fontsquirrel.com](http://www.fontsquirrel.com/fonts/Journal)

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
}
```

Ahora podemos posicionar los elementos, incluidos el título y los elementos del formulario.

```css
h1 {
  position : absolute;
  left : 415px;
  top  : 185px;

  font : 1em "typewriter", sans-serif;
}

#remitente {
  position: absolute;
  left : 398px;
  top  : 235px;
}

#respuesta {
  position: absolute;
  left : 390px;
  top  : 285px;
}

#mensaje {
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

Cuando uno de estos campos recibe el foco, vamos a resaltarlo con un fondo transparente gris claro. Tome nota de que es importante añadir la propiedad [outline](/es/docs/Web/CSS/outline) para quitar el resaltado de enfoque añadido por defecto por algunos navegadores.

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

Los elementos {{HTMLElement("textarea")}} se muestran por defecto como bloques, Las dos cosas importantes aquí son las propiedades [resize](/es/docs/Web/CSS/resize) y [overflow](/es/docs/Web/CSS/overflow). Ya que nuestro `diseño` es de tamaño fijo, utilizaremos la propiedad `resize` para impedir que el usuario pueda cambiar el tamaño de los campos multilínea. La propiedad `overflow` se utiliza para que el campo se muestre de forma más consistente a través de diversos navegadores; algunos de ellos ponen por defecto esta propiedad en `auto`, pero en nuestro caso, es mejor asegurarse de que todos estén en `auto`.

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

El elemento {{HTMLElement("button")}} </code>se acomoda muy bien a CSS; se puede hacer lo que se quiera con el, ¡incluso utilizando [pseudo-elementos](/es/docs/CSS/Pseudo-elements)!</p>

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

Como puede verse, mientras que queramos construir formularios solo con campos de texto y botones, es sencillo aplicarles estilos con CSS. Si deseas saber más pequeños trucos de CSS que le hagan más fácil la vida al trabajar con formularios, echale un vistazo a la parte de formularios de [el proyecto normalize.css](https://necolas.github.com/normalize.css).

En el próximo artículo, veremos como manejar widgets de formulario de la categoría de "el malo" y "el feo".
