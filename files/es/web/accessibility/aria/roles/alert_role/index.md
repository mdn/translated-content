---
title: Using the alert role
slug: Web/Accessibility/ARIA/Roles/alert_role
---

### Descripción

Esta técnica demuestra como usar el rol [alert](https://www.w3.org/TR/wai-aria-1.1/#alert) y describe el efecto que tiene en los navegadores y tecnologías de asistencia.

El rol de alerta es utilizado para comunicar un mensaje importante y normalmente urgente para el usuario. Cuando este rol es añadido a un elemento, el navegador envía un evento de alerta accesible a los productos de tecnología asistencial que notificarán al usuario sobre ésta. El rol de alerta es más útil para información que requiere la atención inmediata del usuario, por ejemplo:

- Un valor inválido ingresado en un formulario
- La sesión de inicio de sesión del usuario esta por expirar
- La conexión al servidor se perdió, cambios locales no fueron guardados

Debido a su naturaleza intrusiva, el rol de alerta debe ser utilizada de forma limitada y sólo en situaciones donde la inmediata atención del usuario es requerida. Cambios dinámicos que son menos urgentes deberían usar un método menos agresivo, como, `aria-live="polite"` u otros roles de región en vivo.

### Posibles efectos en agentes de usuario y tecnología asistencial

Cuando el rol de alerta es añadido a un elemento, o dicho elemento se vuelve visible, el agente de usuario debe hacer lo siguiente:

- Exponer que el elemento tiene un rol de alerta en la API de accesibilidad del sistema operativo.
- Disparar un evento de alerta accesible utilizando la API de accesibilidad del sistema operativo si lo soporta.

Productos de tecnología asistencial deben escuchar por dicho evento y notificar al usuario consecuentemente:

- Lectores de pantalla pueden interrumpir la entrada actual (sea por voz o braile) e inmediatamente anunciar o desplegar el mensaje de alerta.
- Lupas de pantalla pueden indicar visualmente que una alerta ha ocurrido y que texto tuvo la alerta.

> **Nota:** Opiniones pueden diferir en como tecnologías de asistencia deben manejar esta técnica. La información proveida anteriormente es una de estas opiniones y por lo tanto no es normativa.

### Ejemplos

#### Ejemplo 1: Agregar el role en el código HTML

The snippet below shows how the alert role is added directly into the html source code. The moment the element finishes loading the screen reader should be notified of the alert. If the element was already in the original source code when the page loaded, the screen reader will announce the error immediately after announcing the page title.

```html
<h2 role="alert">
  Your form could not be submitted because of 3 validation errors.
</h2>
```

#### Ejemplo 2: Dinámicamente añadir un elemento con el rol de alerta

This snippet dynamically creates an element with an alert role and adds it to the document structure.

```js
var myAlert = document.createElement("p");
myAlert.setAttribute("role", "alert");
var myAlertText = document.createTextNode(
  "You must agree with our terms of service to create an account.",
);
myAlert.appendChild(myAlertText);
document.body.appendChild(myAlert);
```

**Note:** The same result can be achieved with less code when using a script library like jQuery:

```js
$(
  "<p role='alert'>You must agree with our terms of service to create an account.</p>",
).appendTo(document.body);
```

#### Ejemplo 3: Añadir un rol de alerta a un elemento ya existente

Sometimes it's useful to add an alert role to an element that is already visible on the page rather than creating a new element. This allows the developer to reiterate information that has become more relevant or urgent to the user. For example, a form control may have instruction about the expected value. If a different value is entered, `role="alert` can be added to the instruction text so that the screen reader announces it as an alert. The pseudo code snippet below illustrates this approach:

```html
<p id="formInstruction">You must select at least 3 options</p>
```

```js
// When the user tries to submit the form with less than 3 checkboxes selected:
document.getElementById("formInstruction").setAttribute("role", "alert");
```

#### Ejemplo 4: Hacer un elemento con un rol de alerta visible

If an element already has `role="alert"`and is initially hidden using CSS, making it visible will cause the alert to fire as if it was just added to the page. This means that an existing alert can be "reused" multiple times.

**Note:** In most cases this approach is not recommended, because it's not ideal to hide error or alert text that is currently not applicable. Users of older assistive technology may still be able to perceive the alert text even when the alert does not currently applies, causing users to incorrectly believe that there is a problem.

```css
.hidden {
  display: none;
}
```

```html
<p id="expirationWarning" role="alert" class="hidden">
  Your log in session will expire in 2 minutes
</p>
```

```js
// removing the 'hidden' class makes the element visible, which will make the screen reader announce the alert:
document.getElementById("expirationWarning").className = "";
```

### Notas

- Usar el rol de alerta en un elemento implica que ese elemento tiene `aria-live="assertive"`.
- El rol de alerta solo debería ser utilizada para contenido de texto estático. El elemento que en el que el rol de alerta es utilizado no debe ser capaz de recibir el foco, pues lectores de pantalla automáticamente anunciarán la alerta sin importar donde el foco del teclado esta actualmente localizado.
- Si una alerta también provee controles interactivos (como controles del formulario que permitan al usuario rectificar un problema, o un boton de "OK" que descarte la alerta) el rol de [alertdialog](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role) debe ser utilizado en lugar de éste.

### Atributos ARIA utilizados

- [alert](https://www.w3.org/TR/wai-aria-1.1/#alert)

### Técnicas ARIA relacionadas

- [Utilizando el rol alertdialog](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
- [Utilizando la propiedad aria-invalid](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_property)

### Compatibilidad

Pendiente. Add support information for common UA and AT product combinations

### Recursos adicionales

- Las mejores practicas de ARIA - Rol de Alerta <http://www.w3.org/TR/wai-aria-practices/#alert>
