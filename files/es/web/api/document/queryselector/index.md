---
title: Document.querySelector()
slug: Web/API/Document/querySelector
---

{{ ApiRef("DOM") }}Devuelve el primer elemento del documento (utilizando un [recorrido primero en profundidad pre ordenado](http://en.wikipedia.org/wiki/Tree_traversal#Pre-order_2) de los nodos del documento) que coincida con el grupo especificado de selectores.

## Sintaxis

```js
element = document.querySelector(selectores);
```

Donde:

- `element` es un objeto de tipo [element](/es/docs/DOM/element).
- `selectores` es una cadena de caracteres que contiene uno o más [selectores CSS](/es/docs/Web/Guide/CSS/Getting_Started/Selectors) separados por coma.

## Ejemplo

En este ejemplo, obtendremos el primer elemento del documento con la clase "miClase":

```js
var el = document.querySelector(".miClase");
```

## Ejemplo más útil

Los _Selectores_ pueden ser muy útiles como se demostrará en el siguiente ejemplo. Aquí, será retornado el primer elemento `<input name="login" />` dentro de `<div class="user-panel main">`.

```js
var el = document.querySelector("div.user-panel.main input[name='login']");
```

## Notas

- Devuelve `null` si no se encuentran coincidencias, de lo contrario, retorna el primer elemento encontrado.
- Si el selector coincide con un ID y este ID es usado erróneamente varias veces en el documento, devuelve el primer elemento encontrado.
- Lanza una excepción de tipo SYNTAX_ERR si el grupo de selectores especificado no es válido.
- querySelector() se introdujo en la [API Selectors](https://www.w3.org/TR/selectors-api/).
- La cadena de caracteres que se pasa como argumento a `querySelector debe seguir la sintaxis CSS.`
- Las Pseudo-clases CSS nunca devolverán elementos, tal y como está especificado en la [`API Selectors`](https://www.w3.org/TR/selectors-api/#grammar).
- Para que coincidan ID's o selectores que no siguen la sintáxis CSS (usando inapropiadamente dos puntos o un espacio por ejemplo), se debe 'escapar' el carácter con una barra invertida (\\). Como la barra invertida es un carácter de 'escape' en JavaScript, si estás indicando una cadena de caracteres literal, debes 'escaparla' dos veces (una para la cadena de caracteres JavaScript y otra para el querySelector):

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar"
  document.querySelector("#foo\bar"); // No coincide con nada

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\\\bar"); // Coincide con el primer div

  document.querySelector("#foo:bar"); // No coincide con nada
  document.querySelector("#foo\\:bar"); // Coincide con el segundo div
</script>
```

## Compatibilidad en los navegadores

{{Compat}}

## Especificaciones

{{Specifications}}

## Vea también

- {{domxref("document.querySelectorAll()")}}
- {{domxref("element.querySelector()")}}
- {{domxref("element.querySelectorAll()")}}
- [Snippets para querySelector](/es/docs/Code_snippets/QuerySelector)
