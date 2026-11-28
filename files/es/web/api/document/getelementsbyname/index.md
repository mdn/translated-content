---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

El método **`getElementsByName()`** de {{domxref("Document")}} devuelve una {{domxref("NodeList")}} viva de los elementos que tienen el valor indicado en el atributo `name`.

## Sintaxis

```js
const elements = document.getElementsByName(name);
```

- `elements` es una {{domxref("NodeList")}} que se actualiza cuando cambian los elementos que coinciden con el nombre.
- `name` es el valor del atributo `name` del elemento.

## Ejemplo

```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>

  <body>
    <form name="up"><input type="text" /></form>
    <div name="down"><input type="text" /></div>

    <script>
      var up_forms = document.getElementsByName("up");
      console.log(up_forms[0].tagName); // returns "FORM"
    </script>
  </body>
</html>
```

## Notas

El método también incluye elementos HTML que coinciden con el nombre aunque el atributo `name` no esté definido para ese tipo de elemento.

El comportamiento del método varía entre navegadores. En versiones de Internet Explorer anteriores a la 10, `getElementsByName()` también devuelve los elementos cuyo atributo `id` tiene el valor indicado. Por eso, conviene evitar el mismo valor para `name` y `id`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Mira también

- {{domxref("document.getElementById()")}} para retornar una referencia de un elemento por su `id`
- {{domxref("document.getElementsByTagName()")}} para retornar referencias de elementos por el nombre de sus etiquetas
- {{domxref("Document.querySelector()")}} para encontrar el primer elemento que coincida con un selector CSS como `div.myclass`.
