---
title: MouseEvent.shiftKey
slug: Web/API/MouseEvent/shiftKey
---

{{APIRef("DOM Events")}}

El evento de **`MouseEvent.shiftKey`** es una propiedad de solo lectura que indica si la tecla de <kbd>shift</kbd> se presionó (`true`) o no (`false`).

## Sintaxis

```
var shiftKeyPressed = instanceOfMouseEvent.shiftKey
```

### Valor que retorna

Un valor booleano

## Ejemplo

```js
<html>
<head>
<title>Ejemplo de shiftKey</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Tecla presionada: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT presionada: " + e.shiftKey + "\n"
    + "ALT presionado: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Presione cualquier tecla, con o sin la tecla SHIFT.<br />
También puede utilizar SHIFT junto a la tecla ALT.</p>
</body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver más

- {{ domxref("MouseEvent") }}
