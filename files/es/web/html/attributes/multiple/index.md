---
title: 'HTML el atributo: multiple'
slug: Web/HTML/Attributes/multiple
tags:
  - Atributos
  - Resticción de validación
  - atributo
translation_of: Web/HTML/Attributes/multiple
original_slug: Web/HTML/Atributos/multiple
---
El atributo booleano {{HTMLAttrxRef("multiple", "input")}}, si se establece, significa que el control del formulario acepta uno o más valores. Válido para los {{HTMLElement("input")}}s de tipo {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/file", "file")}} y {{HTMLElement("select")}}, la forma en que el usuario opta por valores múltiples depende del control del formulario.

Dependiendo del tipo, el control de formulario puede tener una apariencia diferente si se establece el atributo {{HTMLAttrxRef("multiple", "input")}}. Para el {{HTMLElement("input")}} de tipo `file`, la mensajería nativa que proporciona el navegador es diferente. En Firefox, el {{HTMLElement("input")}} de tipo `file` dice "Ningún archivo seleccionado" cuando el atributo está presente y "Ningún archivo seleccionado", cuando no hay archivo seleccionado. La mayoría de los navegadores muestran un cuadro de lista de desplazamiento para un control {{HTMLElement("select")}} con el atributo {{HTMLAttrxRef("multiple", "input")}} establecido frente a un menú desplegable de una sola línea cuando se omite el atributo. El {{HTMLElement("input")}} {{HTMLElement("input/email", "email")}} muestra lo mismo, pero coincidirá con la pseudoclase {{CSSxRef(':invalid')}} si hay más de una dirección de correo electrónico separada por comas incluido si el atributo no está presente.

Cuando se establece {{HTMLAttrxRef("multiple", "input")}} en el tipo de entrada {{HTMLElement("input/email", "email")}}, el usuario puede incluir cero (si no es {{web.link("/es/docs/Web/HTML/Attributes/required", "required")}} también), una o más direcciones de correo electrónico separadas por comas.

```html
<input type="email" multiple name="emails" id="emails">
```

Si y solo si se especifica el atributo {{HTMLAttrxRef("multiple", "input")}}, el valor puede ser una lista de direcciones de correo electrónico separadas por comas y formadas correctamente. Los espacios en blanco iniciales y finales se eliminan de cada dirección de la lista.

Cuando se establece {{HTMLAttrxRef("multiple", "input")}} en el tipo de entrada {{HTMLElement("input/file", "file")}}, el usuario puede seleccionar uno o más archivos. El usuario puede elegir varios archivos del selector de archivos de cualquier manera que la plataforma elegida lo permita (por ejemplo, manteniendo presionada la tecla <kbd>Mayús</kbd> o <kbd>Control</kbd> y luego haciendo clic).

```html
<input type="file" multiple name="uploads" id="uploads">
```

Cuando se omite el atributo, el usuario solo puede seleccionar un único archivo por {{HTMLElement("input")}}.

El atributo {{HTMLAttrxRef("multiple", "input")}} en el elemento {{HTMLElement("select")}} representa un control para seleccionar cero o más opciones de la lista. De lo contrario, el elemento {{HTMLElement("select")}} representa un control para seleccionar una única {{HTMLElement("option")}} de la lista de opciones.

```html
<select multiple name="drawfs" id="drawfs">
  <option>Gruñón</option>
  <option>Feliz</option>
  <option>Dormilón</option>
  <option>Tímido</option>
  <option>Estornudo</option>
  <option>Tontín</option>
  <option>Doc</option>
</select>
```

Cuando se especifica {{HTMLAttrxRef("multiple", "input")}}, la mayoría de los navegadores mostrarán un cuadro de lista de desplazamiento en lugar de un menú desplegable de una sola línea.

## Ejemplos

### `input` para correoᵉ

```html
<label for="emails">¿A quién deseas enviar un correo electrónico?</label>
<input type="email" multiple name="emails" id="emails" list="drawfemails" required size="64">

<datalist id="drawfemails">
  <option value="gruñón@woodworkers.com">Gruñón</option>
  <option value="feliz@woodworkers.com">Feliz</option>
  <option value="dormilón@woodworkers.com">Dormilón</option>
  <option value="tímido@woodworkers.com">Tímido</option>
  <option value="estornudo@woodworkers.com">Estornudo</option>
  <option value="tontín@woodworkers.com">Tontín</option>
  <option value="doc@woodworkers.com">Doc</option>
</datalist>
```

```css hidden
input:invalid {border: red solid 3px;}
```

Si y solo si se especifica el atributo {{HTMLAttrxRef("multiple", "input")}}, el valor puede ser una lista de direcciones de correo electrónico separadas por comas y formadas correctamente. Los espacios en blanco iniciales y finales se eliminan de cada dirección de la lista. Si el atributo {{web.link("/es/docs/Web/HTML/Attributes/required", "required")}} está presente, se requiere al menos una dirección de correo electrónico.

Algunos navegadores admiten la aparición de la {{web.link("/es/docs/Web/HTML/Attributes/list", "lista")}} de opciones del {{HTMLElement('datalist')}} para direcciones de correo electrónico posteriores cuando haya varias. Otros no lo hacen.

{{EmbedLiveSample("input_para_correoᵉ", 600, 80) }}

### `input` de tipo `file`

Cuando se establece {{HTMLAttrxRef("multiple", "input")}} en el {{HTMLElement("input")}} de tipo {{HTMLElement("input/file", "file")}}, el usuario puede seleccionar uno o más archivos:

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads">
       Elige las imágenes que deseas cargar:
    </label>
    <input type="file" id="uploads" name="uploads" accept=".jpg, .jpeg, .png, .svg, .gif" multiple>
  </p>
  <p>
    <label for="text">Elige un archivo de texto para cargar: </label>
    <input type="file" id="text" name="text" accept=".txt">
 </p>
  <p>
    <input type="submit" value="Enviar">
  </p>
</form>
```

{{EmbedLiveSample("input_de_tipo_file", 600, 80) }}

Nota la diferencia en la apariencia entre el ejemplo con {{HTMLAttrxRef("multiple", "input")}} establecido y el otro {{HTMLElement("input")}} sin `file`.

Cuando se envía el formulario, utilizas el {{web.link("/es/docs/Web/HTML/Element/form", "method='get'")}} el nombre de cada archivo seleccionado se habría agregado a los parámetros de la URL como `?uploads=img1.jpg&uploads=img2.svg`. Sin embargo, dado que estamos asumiendo datos de formularios de {{web.link("/es/docs/Web/API/XMLHttpRequest/multipart", "multipart")}}, usamos mucho el `post`. Consulta el elemento {{HTMLElement('form')}} y {{web.link("/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#The_method_attribute", "envío de datos del formulario")}} para obtener más información.

### `select`

El atributo {{HTMLAttrxRef("multiple", "input")}} en el elemento {{HTMLElement("select")}} representa un control para seleccionar cero o más opciones de la lista. De lo contrario, el elemento {{HTMLElement("select")}} representa un control para seleccionar una única {{HTMLElement("option")}} de la lista de opciones. El control generalmente tiene una apariencia diferente en función de la presencia del atributo {{HTMLAttrxRef("multiple", "input")}}, y la mayoría de los navegadores muestran un cuadro de lista de desplazamiento en lugar de una lista desplegable de una sola línea cuando el atributo está presente.

```html
<form method="get" action="#">
<p>
 <label for="dwarfs">Selecciona los leñadores que te gusten:</label>
  <select multiple name="drawfs" id="drawfs">
    <option>gruñón@woodworkers.com</option>
    <option>feliz@woodworkers.com</option>
    <option>dormilón@woodworkers.com</option>
    <option>tímido@woodworkers.com</option>
    <option>estornudo@woodworkers.com</option>
    <option>tontín@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
 <label for="favoriteOnly">Selecciona tu favorito:</label>
  <select name="favoriteOnly" id="favoriteOnly">
    <option>gruñón@woodworkers.com</option>
    <option>feliz@woodworkers.com</option>
    <option>dormilón@woodworkers.com</option>
    <option>tímido@woodworkers.com</option>
    <option>estornudo@woodworkers.com</option>
    <option>tontín@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
  <input type="submit" value="Enviar">
</p>
</form>
```

{{EmbedLiveSample("select", 600, 120) }}

Ten en cuenta la diferencia de apariencia entre los dos controles de formulario.

```css
/* descomenta este CSS para que el multiple tenga la misma altura que single */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

Hay varias formas de seleccionar varias opciones en un elemento `<select>` con un atributo {{HTMLAttrxRef("multiple", "input")}}. Dependiendo del sistema operativo, los usuarios del ratón pueden mantener presionadas las teclas <kbd>Ctrl</kbd>, <kbd>Comando</kbd> o <kbd>Mayús</kbd> y luego hacer clic en varias opciones para seleccionarlas o deseleccionarlas. Los usuarios de teclado pueden seleccionar varios elementos contiguos centrándose en el elemento `<select>`, seleccionando un elemento en la parte superior o inferior del rango que desean seleccionar usando <kbd>Arriba</kbd> y <kbd>Teclas del cursor hacia abajo</kbd> para subir y bajar las opciones. La selección de elementos no contiguos no es tan compatible: los elementos se deben poder seleccionar y deseleccionar presionando <kbd>Espacio</kbd>, pero el soporte varía entre los navegadores.

## Especificaciones

| Especificación                                                                                               | Estado                               | Comentario |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'input.html#attr-input-multiple', 'Atributo multiple')}} | {{ Spec2('HTML WHATWG') }} |            |
| {{SpecName('HTML5 W3C', 'input.html#attr-input-multiple', 'Atributo multiple')}} | {{ Spec2('HTML5 W3C') }}     |            |

## Problemas de accesibilidad

Proporciona instrucciones para ayudar a los usuarios a comprender cómo completar el formulario y utilizar controles de formulario individuales. Indica cualquier entrada requerida y opcional, formatos de datos y otra información relevante. Cuando utilices el atributo {{HTMLAttrxRef("multiple", "input")}}, informa al usuario que se permiten múltiples valores y proporciona instrucciones sobre cómo proveer más valores, como "direcciones de correo electrónico separadas con una coma".

Configurar {{web.link("/es/docs/Web/HTML/Attributes/size", "size")}}`="1"` en una selección múltiple puedes hacer que aparezca como una única selección en algunos navegadores, pero luego no se expande en el enfoque, lo que perjudica la usabilidad. No hagas eso. Si cambias la apariencia de un `select`, e incluso si no lo haces, asegúrate de informar al usuario que se puede seleccionar más de una opción mediante otro método.

## Ve también

- {{HTMLElement('input')}}
- {{htmlelement('select')}}
- {{web.link("/es/docs/Web/HTML/Element/input/email#Allowing_multiple_e-mail_addresses", "Permitir varias direcciones de correo electrónico")}}
