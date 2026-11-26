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

El método **getElementsByName** trabaja de diferente manera en diferentes navegadires. En IE < 10, el método getElementsByName() tambipen retornará elementos que tienen un atributo `id` con el valor especificado. Entonces, debería tener cuidado de no usar el mismo string como `name` y `ID`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Mira también

- {{domxref("document.getElementById()")}} para retornar una referencia de un elemento por su `id`
- {{domxref("document.getElementsByTagName()")}} para retornar referencias de elementos por el nombre de sus etiquetas
- {{domxref("document.querySelector()")}} for powerful selectors via queries like `'div.myclass'`
