---
title: Usando el rol alertdialog
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
---

### Descripción

Esta técnica demuestra como usar el rol [`alertdialog`](http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#alertdialog).

El rol `alertdialog` es utilizado para notificar al usuario información urgente que demanden la atención inmediata del usuario. Como el nombre implica, `alertdialog` es un tipo de díalogo. Esto significa que la mayoría de las instrucciones proveidas en la técnica de ''[usando el rol `dialog`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)' son aplicables al rol `alertdialog` también:

- El díalogo de alerta debe siempre recibir un nombre accesible (a través de `aria-labelledby` o `aria-label`), y en la mayoría de los casos el texto de alerta debe ser marcado como la descripción accesible del díalogo de alerta (utilizando `aria-describedby`).
- A diferencia de alertas regulares, un díalogo de alerta debe tener al menos un control enfocable y el foco debe moverse a ese control cuando el díalogo de alerta aparece. Generalmente los díalogos de alerta tienen al menos un botón de Confirmación, Cerrar o Cancelar que pueder ser usado para moverl el foco. Adicionalmente, díalogos de alerta pueder tener otros controles interactivos tales como campos de texto, pestañas o checkboxes. El enfoque de control al que se debe desplazar depende del propósito del diálogo.
- El orden de la pestaña dentro del díalogo de alerta debe ajustarse.

La diferencia con díalogos normales es que el rol de `alertdialog` debe ser utilizado únicamente cuando una alerta, error, o advertencia ocurre. En otras palabras, cuando la información o controles de un díalogo requieren la inmediata atención del usuario debe usarse `alertdialog` en lugar de `dialog.` Sin embargo, depende del desarrollador hacer esta distinción.

Debido a su carácter urgente los díalogos de alerta deben ser siempre modales.

> **Nota:** Este rol solo debe ser usado para mensajes de alerta que tienen controles interactivos asociado. Si un díalogo de alerta solo contiene contenido estático y no tiene controles interactivos, `alertdialog` es probablemente el rol incorrecto para ser utilizado.. El rol `alert` debe ser usado en su lugar en éste caso (como se describe en la técnica de [Utilizando el rol `alert`](/en/ARIA/ARIA_Techniques/Using_the_alert_role)).

### Posibles efectos de agentes de usuario y tecnología de asistencia

Cuando un rol `alertdialog` es utilizado, el agente de usuario debería hacer lo siguiente:

- Exponer el elemento como un díalogo a la API de accesibilidad del sistema operativo.
- Disparar un evento de alerta accesible usando la API de accesibilidad del sistema operativo si lo soporta.

Cuando la aleta de díalogo aparece, los lectores de pantalla deberían anunciar la alerta.

Cuando el díalogo de alerta es etiquetado correctamente y el foco es movido de un control a el interior del díalogo, los lectores de pantalla deberían anunciar el rol accesible del díalogo así como su nombre y su descriipción antes de anunciar el elemento enfocado.

> **Nota:** Opiniones pueden diferir en como tecnología de asistencia debe manejar esta técnica. La información proveída arriba es una de éstas opiniones y por lo tanto no es normativa.

### Ejemplos

#### Ejemplos 1: Un díalogo de alerta básico

El fragmento de código siguiente muestra como marcar un díalogo de alerta que solo provee un mensaje y un botón de OK.

```html
<div
  role="alertdialog"
  aria-labelledby="tituloDialogo1"
  aria-describedby="descrDialogo1">
  <div role="document" tabindex="0">
    <h2 id="tituloDialogo1">Tu sesión esta apunto de expirar</h2>
    <p id="descrDialogo1">Para extender tu sesión de clic en el botón OK</p>
    <button>OK</button>
  </div>
</div>
```

#### Ejemplos en funcionamiento

Pendiente

### Notas

### Atributos ARIA utilizados

- [alertdialog](https://www.w3.org/TR/wai-aria-1.1/#dialog)
- [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
- [aria-describedby](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)

### Técnicas ARIA relacionadas

- [usando el rol `dialog`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
- [usando el rol `alert`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role)

### Compatibilidad

Pendiente: _Add support information for common UA and AT product combinations_

### Recursos adicionales
