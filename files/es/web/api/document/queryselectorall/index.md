---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
---

{{ ApiRef("DOM") }}

El método **`querySelectorAll()`** de un {{domxref("Element")}} devuelve una {{domxref("NodeList")}} estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

> **Nota:** Esto método se implementa en base al método {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} del mixin {{domxref("ParentNode")}}.

## Sintaxis

```js
elementList = parentNode.querySelectorAll(selectors);
```

### Parámetros

- `selectors`
  - : Un {{domxref("DOMString")}} que contiene uno o más selectores para buscar coincidencias. Esta cadena de texto debe ser una cadena [CSS selector](/es/docs/Web/CSS/CSS_Selectors) válida; si no lo es, se lanzará una excepción `SyntaxError`. Vea [Locating DOM elements using selectors](/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) para más información acerca de utilizar selectores para identificar elementos. Se pueden especificar varios selectores separándolos utilizando comas.

> **Nota:** Los caracteres que no son parte de la sintaxis estándar de CSS deben ser escapados utilizando el caracter de barra invertida. Dado que JavaScript también utiliza el escapado por retroceso, se debe tener especial cuidado al escribir cadenas de texto literales utilizando estos caracteres. Vea [Escapando caracteres especiales](#escapando_caracteres_especiales) para más información.

### Valor devuelto

Una {{domxref("NodeList")}} _no viva_ que contenga un objeto {{domxref("Element")}} para cada elemento que coincida con al menos uno de los selectores especificados o una {{domxref("NodeList")}} vacía en caso de que no haya coincidencias.

> **Nota:** Si los selectores indicados incluyen un [pseudo-elemento CSS](/es/docs/Web/CSS/Pseudo-elements), la lista devuelta siempre estará vacía.

### Excepciones

- `SyntaxError`
  - : La sintaxis de la cadena de texto `selectors` no es válida.

## Ejemplos

### Obteniendo una lista de coincidencias

Para obtener una {{domxref("NodeList")}} de todos los elementos {{HTMLElement("p")}} en el documento:

```js
var matches = document.querySelectorAll("p");
```

Este ejemplo devuelve una lista de todos los elementos {{HTMLElement("div")}} del documento con una clase "`nota`" o "`alerta`":

```js
var matches = document.querySelectorAll("div.nota, div.alerta");
```

Aquí, se obtiene una lista de elementos `<p>` cuyo elemento padre inmediato es un {{domxref("div")}} con la clase `"highlighted"` y que está ubicado dentro de un contenedor cuyo ID es `"test"`.

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

Este ejemplo usa un [selector de atributos](/es/docs/Web/CSS/Selectores_atributo) para devolver una lista de elementos {{domxref("iframe")}} en el documento que contienen un atributo llamado `"data-src"`:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

Aquí, un selector de atributo se utiliza para devolver una lista de los elementos de una lista cuyo ID es `"userlist"` que tiene un atributo `"data-active"` cuyo valor es `"1"`:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll('li[data-active="1"]');
```

### Accediendo a las coincidencias

Una vez que se devuelve la {{domxref("NodeList")}} de los elementos que coinciden, se puede examinar como cualquier `array`. Si el array está vacío (lo que significa que su propiedad `length` es 0), entonces es que no se encontraron coincidencias.

En cualquier caso, se puede simplemente utilizar la notación estándar de los arrays para acceder al contenido de la lista. Se puede usar cualquier sentencia de iteración, como por ejemplo:

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

## Notas de usuario

`querySelectorAll()` se comporta de forma diferente que la mayoría de librerías DOM de JavaScript, que pueden llevar a resultados inesperados.

### HTML

Considere este HTML, con sus tres bloques anidados {{HTMLElement("div")}}.

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

### JavaScript

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(".outer .inner");
inner.length; // 1, not 0!
```

En este ejemplo, cuando se selecciona `".outer .inner"` en el contexto el `<div>` con la clase `"select"`, el elemento con la clase `".inner"` todavía es encontrado, aun sabiendo que `.outer` no es descendiente del elemento base sobre el que se realiza la búsqueda (`".select"`). Por defecto, `querySelectorAll()` sólo verifica que el último elemento en el selector se encuentra dentro del rango de búsqueda.

La pseudo-clase {{cssxref(":scope")}} recupera el comportamiento esperado, encontrando coincidencias sólo en selectores descendientes del elemento base:

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- [Localizando elementos DOM utilizando selectores](/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Selectores de atributo](/es/docs/Web/CSS/Selectores_atributo)
- [Selectores de atributo](/es/docs/Learn/CSS/Introduction_to_CSS/Selectores_de_Atributos) en el área de aprendizaje de MDN
- {{domxref("Element.querySelector()")}} y {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} y {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} y {{domxref("ParentNode.querySelectorAll()")}}
- [Snippets de código para `querySelector()`](/es/docs/Code_snippets/QuerySelector)
