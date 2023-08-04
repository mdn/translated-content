---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

Returns a nodelist collection with a given {{domxref("element.name","name")}} in the (X)HTML document.

## Sintaxis

```js
elements = document.getElementsByName(name);
```

- `elements` es una colección existente de {{domxref("NodeList")}}
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

El atributo [`name`](/es/docs/DOM/element.name) es solamente aplicable al documento (X)HTML. El método retorna una colección existente de {{domxref("NodeList")}} que contiene todos los elementos con el valor dado para el atributo `name`, tanto {{htmlelement("meta")}} o {{htmlelement("object")}} o en caso que `name` sea colocado en elementos que no soportan un atributo de atributo del todo.

El método **getElementsByName** trabaja de diferente manera en diferentes navegadires. En IE < 10, el método getElementsByName() tambipen retornará elementos que tienen un atributo `id` con el valor especificado. Entonces, debería tener cuidado de no usar el mismo string como `name` y `ID`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Mira también

- {{domxref("document.getElementById()")}} para retornar una referencia de un elemento por su `id`
- {{domxref("document.getElementsByTagName()")}} para retornar referencias de elementos por el nombre de sus etiquetas
- {{domxref("document.querySelector()")}} for powerful selectors via queries like `'div.myclass'`
