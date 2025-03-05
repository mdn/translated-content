---
title: Alertas
slug: conflicting/Web/Accessibility/ARIA
original_slug: Web/Accessibility/ARIA/forms/alerts
---

## El problema

Tienes un formulario — un formulario de contacto — por ejemplo, en el que deseas poner algún control de error accesible. Ejemplos de problemas comunes incluyen direcciones de correo electrónico que no son válidas o un campo de nombre que no contiene al menos un nombre o apellido.

## El formulario

Primero, lee acerca de la [`técnica requerida por aria`](/es/docs/conflicting/Web/Accessibility/ARIA_64707ba1917a56654679cbe273e2f4ea#required_and_invalid_fields) si no lo has hecho, ya que esta técnica amplía a esa.

Aquí hay un sencillo formulario:

```html
 <form method="post" action="post.php">
   <fieldset>
     <legend>Introduce tus datos de contacto</legend>
     <label for="name">Tu nombre (obligatorio):</label>
     <input name="name" id="name" aria-required="true"/>
     <br />
     <label for="email">Dirección de correo electrónico (obligatorio):</label>
     <input name="email" id="email" aria-required="true"/>
     <br />
     <label for="website">Sitio web (opcional):</label>
     <input name="website" id="website"/>
   </fieldset>
   <label for="message">Por favor ingresa tu mensaje (requerido):</label>
   <br />
   <textarea name="message" id="message" rows="5" cols="80"
             aria-required="true"></textarea>
   <br />
   <input type="submit" name="submit" value="Enviar mensaje"/>
   <input type="reset" name="reset" value="Restablecer formulario"/>
 </form>
```

## Verificación de validez y notificación al usuario

La validación de formularios consta de varios pasos:

1. Verificando si la dirección de correo electrónico o el nombre ingresado son válidos. Cada campo tiene un conjunto de criterios que se deben cumplir para aprobar la validación. Para simplificar este ejemplo, verificaremos si la dirección de correo electrónico contiene el símbolo "@" y si la entrada del nombre contiene al menos 1 carácter.
2. Si no se cumplen los criterios anteriores, el atributo `aria-invalid` del campo recibirá un valor de "`true`".
3. Si no se cumplieron los criterios, se notificará al usuario mediante una alerta. En lugar de usar la función "`alert`" de JavaScript, usaremos un _widget WAI-ARIA_ simple para la notificación. Esto notifica al usuario del error, pero le permite continuar modificando el formulario sin perder el foco (causado por el controlador "`onblur`" en la función "`alert`" predeterminada de JavaScript).

A continuación se muestra un código JavaScript de ejemplo que se podría insertar encima de la etiqueta de cierre "`head`":

```js
 <script type="application/javascript">
 function removeOldAlert()
 {
   var oldAlert = document.getElementById("alert");
   if (oldAlert){
     document.body.removeChild(oldAlert);
   }
 }

 function addAlert(aMsg)
 {
   removeOldAlert();
   var newAlert = document.createElement("div");
   newAlert.setAttribute("role", "alert");
   newAlert.setAttribute("id", "alert");
   var msg = document.createTextNode(aMsg);
   newAlert.appendChild(msg);
   document.body.appendChild(newAlert);
 }

 function checkValidity(aID, aSearchTerm, aMsg)
 {
   var elem = document.getElementById(aID);
   var invalid = (elem.value.indexOf(aSearchTerm) < 0);
   if (invalid) {
     elem.setAttribute("aria-invalid", "true");
     addAlert(aMsg);
   } else {
     elem.setAttribute("aria-invalid", "false");
     removeOldAlert();
   }
 }
 </script>
```

## La función `checkValidity`

El método principal en JavaScript utilizado para la validación de formularios es la función `checkValidity`. Este método toma tres parámetros: el ID de el `input` que se va a validar, el término que se busca para asegurar la validez y el mensaje de error que se inserta en la alerta.

Para ver si es válido, la función comprueba si el valor `indexOf` del `input` es algo mayor que `-1`. Se devuelve un valor de `-1` o menos si el índice del término de búsqueda no se pudo encontrar dentro del valor.

Si no es válido, la función hace dos cosas:

1. Establece el atributo `aria-invalid` del elemento en "`true`", lo que indicará a los lectores de pantalla que hay contenido no válido aquí.
2. Llamará a la función `addAlert` para agregar la alerta con el mensaje de error proporcionado.

Si se encuentra el término de búsqueda, el atributo `aria-invalid` se restablece a “`false`”. Además, se eliminan las alertas sobrantes.

## La función `addAlert`

Esta función primero elimina las alertas antiguas. La función es simple: busca un elemento con id "`alert`" y, si lo encuentra, lo elimina del [modelo de objetos del documento](/es/docs/Mozilla/Tech/XUL/Tutorial/Document_Object_Model).

A continuación, la función crea un elemento `div` para contener el texto de alerta. Obtiene un ID de "`alert`". Y obtiene un conjunto de roles de "alert". En realidad, está inspirado en ARIA, aunque no dice "aria" en el nombre del atributo. Esto se debe a que ese rol se basa en el [Módulo de atributos de rol XHTML](https://www.w3.org/TR/xhtml-role/) que simplemente se transfirió a HTML para simplificar.

El texto se agrega al elemento `div` y el elemento `div` se agrega al documento.

En el momento en que esto suceda, Firefox lanzará un evento "`alert`" a las tecnologías de asistencia cuando aparezca este `div`. La mayoría de los lectores de pantalla la recogerán automáticamente y la pregonarán. Esto es similar a la barra de notificaciones en Firefox que te pregunta si deseas guardar una contraseña. La alerta que acabamos de crear no tiene ningún botón para presionar, solo nos dice lo que está mal.

## Modificar el evento "`onblur`"

Todo lo que queda ahora es agregar el controlador de eventos. Necesitamos cambiar las dos entradas para el correo electrónico y el nombre para esto:

```html
 <input name="name" id="name" aria-required="true"
        onblur="checkValidity('name', '', '¡Se ingresó un nombre no válido!');"/>
 <br />
 <input name="email" id="email" aria-required="true"
        onblur="checkValidity('email', '@', 'Dirección de correo electrónico no válida');"/>
```

**Probar el ejemplo**

Si usas Firefox 3 y un lector de pantalla compatible actualmente, intenta lo siguiente:

1. Ingresa solo tu primer nombre como nombre. Al pulsar la tecla de tabulación, escucharás una alerta que te indicará que ingresaste un nombre no válido. Luego puedes volver atrás con `Mayús-Tab` y corregir el error.
2. Ingresa una dirección de correo electrónico sin el símbolo “@”. Cuando salgas de este campo, deberías escuchar una advertencia que dice que no ingresaste una dirección de correo electrónico válida.

En ambos casos, al volver a enfocar el campo en cuestión, tu lector de pantalla debería decirte que este campo no es válido. JAWS 9 admite esto, pero JAWS 8 no, por lo que es posible que esto no funcione en todas las versiones de los lectores de pantalla compatibles.

## Algunas preguntas que podrías tener

- P. ¿Por qué pusiste “`(obligatorio)`” en el texto de la etiqueta y el atributo `aria-required` en algunas de las entradas?
  - : R. Si se tratara de un formulario real en vivo y el sitio estuviera siendo visitado por un navegador que aún no es compatible con ARIA, aún quisiéramos dar una indicación de que este es un campo obligatorio.
- P. ¿Por qué no vuelve a enfocarse en el campo no válido automáticamente?
  - : R. Porque esto no está permitido por las especificaciones de la API de Windows y posiblemente otras. Además, dejar que el enfoque salte sin interacción real del usuario con demasiada frecuencia no es algo agradable en general.

> [!WARNING]
> Aún no definido: reconsideremos esto ─ personalmente, creo que establecer el enfoque podría ser bueno si se hace sin causar una trampa en el teclado.
