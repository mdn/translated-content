---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elements of type **`"hidden"`** let web developers include data that cannot be seen or modified by users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible in the rendered page, and there is no way to make it visible in the page's content.

> **Nota:** Hay un ejemplo en vivo debajo de las siguientes líneas de código — si esta funcionando correctamente no debería ver algo.

## Ejemplo

```html
<input id="prodId" name="prodId" type="hidden" value="xm234jq" />
```

{{ EmbedLiveSample('Basic_example', 600, 40) }}

| **[Value](#value)**             | {{domxref("DOMString")}} representando el valor de un campo oculto que se espetra pasar al servidor. |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Events**                      | Ninguno.                                                                                             |
| **Supported Common Attributes** | [`autocomplete`](/es/docs/Web/HTML/Element/input#autocomplete)                                       |
| **IDL attributes**              | `value`                                                                                              |
| **Methods**                     | Ninguno.                                                                                             |

## Valor (Value)

El atributo [`value`](/es/docs/Web/HTML/Element/input#value) del elemento {{HTMLElement("input")}} tiene un {{domxref("DOMString")}} que contiene la información oculta que se desea incluir en el formulario cuando sea remitido al servidor. Específicamente no puede ser editado por el usuario o mostrado a éste por medio la interfaz de usuario, aunque puede ser editado por medio de las herramientas para desarrolladores del navegador.

> **Advertencia:** Mientras que el valor no es desplegado al usuario en el contenido de la página, si es visible —y puede ser modificado—usando las herramientas para desarrolladores de cualquier navegador o la funcionalidad "Ver código fuente" (View Source). No confíe en `hidden` inputs como una forma de seguridad.

## Utilizando hidden inputs

Como se menciono anteriormente, las hidden inputs pueden ser utilizadas donde sea que se quiera incluir información del formulario que el usuario no pueda ver o modificar cuando sea enviado al servidor. Se mostrarán algunos ejemplos que ilustran su uso.

### Seguimiento de contenido editado

Uno de los usos más comunes para los hidden inputs es mantener un seguimiento de que registros de la base de datos necesitan actualizarse cuando un formulario de actualización es remitido. Un flujo de trabajo tipico se ve como:

1. El usuario decide editar algún contenido sobre el cual tiene control, como una entrada de blog o la entrada de un producto. Comienza cuando se presiona el botón de editar.
2. El contenido ha ser editado es tomado de la base de datos y cargados en un formulario HTML para permitir al usuario hacer cambios.
3. Después de editar, el usuario remite el formulario y la información actualizada es envíada de vuelta al servidor para ser actualizada en el servidor.

La idea es que durante el paso 2, el ID del registro que se actualiza se mantenga en un hidden input. Cuando se envía el formulario en el paso 3, el ID se envía automáticamente al servidor con el contenido del registro. El ID permite que el componente de servidor del sitio sepa exactamente qué registro necesita ser actualizado con los datos enviados.

Puede ver un ejemplo completo de como podría ser en la sección [Examples](#examples) de abajo.

### Mejorando la seguridad del sitio web

Hidden inputs también son usados para almacenar y enviar token de seguirdad o secretos (_secrets)_, con el propósito de mejorar la seguridad del sitio web. La idea básica es que si un usuario esta rellenando un formulario con información sensible, como un formulario en un sitio web bancario para transferir dinero a otra cuenta, el secreto que proporciona demostraría que son quienes dicen ser y que estan usando el formulario correcto para enviar la solicitud de transferencia.

Esto evitaría que un usuario malicioso creara un formulario falso, fingiendo ser un banco y enviando el formulario por correo electrónico a usuarios desprevenidos para engañarlos y que transfieran dinero al lugar equivocado. Este tipo de ataque es llamado como [Cross Site Request Forgery (CSRF)](</es/docs/Learn/Server-side/First_steps/Website_security#Cross_Site_Request_Forgery_(CSRF)>); prácticamente cualquier marco de trabajo que goce de buena reputación utiliza secretos ocultos para evitar tales ataques.

> **Nota:** Como se menciono anteriormenre, colocando el secreto en un hidden input no lo hace inherentemente seguro. La composición y codificación de la llave haría eso. El valor del hidden input es que mantiene el secreto asociado con la información y automáticamente lo incluye cuando el formulario es enviado al servidor. Se necesita usar secretos bien diseñados para realmente mantener seguro el sitio web.

## Validación

Hidden inputs no participan en la validación de restricciones; no son un valor real que deba ser restringido.

## Ejemplos

En el código de abajo se muestra como se puede implementar una versión simple de un formulario de actualización descrito anteriomente (ver [Tracking edited content](#tracking_edited_content)), utilizando un hidden input para recordar el ID del registro ha ser editado.

El formulario HTML puede verse un como como este:

```html
<form>
  <div>
    <label for="title">Título del artículo:</label>
    <input
      type="text"
      id="titulo"
      name="titulo"
      value="Mi excelente artículo del blog" />
  </div>
  <div>
    <label for="content">Contenido del artículo:</label>
    <textarea id="contenido" name="contenido" cols="60" rows="5">
Este es el contenido de mi excelente actículo del blog. ¡Espero lo disfrutes!
    </textarea>
  </div>
  <div>
    <button type="submit">Actualizar artículo</button>
  </div>
  <input type="hidden" id="acticuloId" name="articuloId" value="34657" />
</form>
```

Añadiendo también unas líneas simples de CSS:

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

El servidor establecerá el valor del hidden input con el ID `"articuloID"` al ID del artículo en la base de datos antes de enviar el formulario al navegador del usuario, y se usará esa información cuando el formulario sea devuelto para saber que registro de la base de datos actualizar con la información modificada. No se necesitan scripts en el contenido para manejar esto.

La salida se vería como:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> **Nota:** Puede encontrar el ejemplo en GitHub (vea el [código fuente](https://github.com/mdn/learning-area/blob/master/html/forms/hidden-input-example/index.html), y también [veálo corriendo en vivo](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Cuando se envían, los datos del formulario enviados al servidor tendrán un aspecto parecido a este:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

A pesar de que los hiden input no se pueden ver en absoluto, sus datos se siguen enviando.

## Especificaciones

{{Specifications}}

## Compatibilidad con el navegador

{{Compat}}

## Ver también

- [HTML forms guide](/es/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} y la interfaz {{domxref("HTMLInputElement")}} en la que se basa
