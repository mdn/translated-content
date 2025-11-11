---
title: event.preventDefault
slug: Web/API/Event/preventDefault
---

{{ApiRef("DOM")}}

### Resumen

Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

### Sintaxis

```
event.preventDefault()
```

### Ejemplo

Cambiar el estado de una caja de selección es la función por defecto de la acción de hacer clic sobre la caja. Este ejemplo ilustra como hacer que esto no ocurra:

```
<html>
<head>
<title>ejemplo de preventDefault</title>

<script type="text/javascript">

function stopDefAction(evt) {
  evt.preventDefault();
}
</script>
</head>

<body>

<p>Por favor, haz clic sobre la caja de selección.</p>

<form>
<input type="checkbox" onclick="stopDefAction(event);"/>
<label for="checkbox">Selección</label>
</form>

</body>
</html>
```

Puedes ver `preventDefault` en acción [aquí](http://developer.mozilla.org/samples/domref/dispatchEvent.html).

El siguiente ejemplo demuestra cómo puede evitarse que un texto invalido entre en un campo de formulario mediante preventDefault().

```
<html>
<head>
<title>preventDefault example</title>

<script type="text/javascript">

function checkName(evt) {
var charCode = evt.charCode;

  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      alert("Por favor usa sólo letras minúsculas." + "\n"
            + "charCode: " + charCode + "\n"
      );
    }
  }
}

</script>
</head>

<body>

<p>Por favor entra tu nombre en letras minúsculas solamente.</p>
<form>
<input type="text" onkeypress="checkName(event);"/>
</form>

</body>
</html>
```

### Notas

Llamar a `preventDefault` en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá.

Puedes usar [event.cancelable](/es/docs/Web/API/Event/cancelable) para comprobar si el evento es cancelable o no. Llamar a `preventDefault` para un evento no cancelable, no tiene ningún efecto.

`preventDefault` no detiene las siguientes llamadas al evento producidas en el DOM. En su lugar debería usarse [event.stopPropagation](/es/docs/Web/API/Event/stopPropagation) para ese propósito.

### Especificación

[DOM Level 2 Events: preventDefault](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-preventDefault)
