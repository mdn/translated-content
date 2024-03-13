---
title: event.which
slug: Web/API/UIEvent/which
---

{{ ApiRef() }}

### Resumen

Devuelve el `keyCode` de la tecla presionada, o el codigo del caracter (`charCode`) de la tecla alfanumerica presionada.

### Sintaxis

```
var keyResult = event.which;
```

`keyResult` contiene el codigo numerico para una tecla en particular, dependiendo si la tecla presionada es alfanumerica o no-alfanumerica. Por favor mire [`charCode`](/en/DOM/event.charCode) y [`keyCode`](/en/DOM/event.keyCode) para mas informacion.

### Ejemplo

```
<html>
<head>
<title>charCode/keyCode/which example</title>

<script type="text/javascript">

function showKeyPress(evt)
{
alert("onkeypress handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
      + "charCode property: " + evt.charCode + "\n"
      + "Character Key Pressed: "
      + String.fromCharCode(evt.charCode) + "\n"
     );
}


function keyDown(evt)
{
alert("onkeydown handler: \n"
      + "keyCode property: " + evt.keyCode + "\n"
      + "which property: " + evt.which + "\n"
     );
}


</script>
</head>

<body
 onkeypress="showKeyPress(event);"
 onkeydown="keyDown(event);"
>

<p>Por favor presione cualquier tecla.</p>

</body>
</html>
```

> **Nota:** El codigo de arriba falla en Firefox 9 debido al [bug 696020](https://bugzilla.mozilla.org/show_bug.cgi?id=696020).

### Especificacion

No es parte de ninguna especificacion.
