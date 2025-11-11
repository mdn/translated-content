---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
---

{{APIRef}}

El método **`CSSStyleSheet.insertRule()`** inserta una nueva regla de estilo en la actual hoja de estilos.

Para conjuntos de reglas ésta contiene tanto al selector como la declaración de estilo. Para reglas-arroba, ésta especifica tanto al identificador-arroba como como al contenido de la regla. Si se asignan varias reglas en el {{domxref("DOMString")}} como parámetro se dispara una {{domxref("DOMException")}} con el código SYNTAX_ERR.

## Syntax

```
stylesheet.insertRule(regla, índice)
```

### Parameters

- `regla` es un {{domxref("DOMString")}} que contiene la regla que se va a insertar (selector y declaración).
- índice es un `unsigned int` que representa la posicion en la que se va a insertar.

## Ejemplos

### Ejemplo 1

```js
// Insertar una nueva regla al principio de mi hoja de estilos
myStyle.insertRule("#blanc { color: white }", 0);
```

### Example 2

```js
/**
 * Agregar una regla de hoja de estilos al documento(sin embargo, una mejor práctica puede ser
 * cambiar las clases dinamicamente, así se mantiene la información de estilo en
 * hojas de estilo genuinas (evitando agregar elementos extras al DOM))
 * Note que se necesita una matriz para las declaraciones y reglas ya que ECMAScript
 * no proporciona un orden de iteración predecible y como CSS
 * depende del orden(i.e., es cascada); aquellos sin necesidad de
 * reglas en cascada podrían construir una API basada en objetos de acceso más amigable.
 * @param {Matriz} reglas. Acepta una matriz de  declaraciones JSON-encoded
 * @example
addStylesheetRules([
  ['h2', // Acepta un segundo argumento como una matriz de matrices
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' para reglas !important
  ],
  ['.myClass', ['background-color', 'yellow']
  ]
]);
 */
function addStylesheetRules(decls) {
  var styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  // Aparentemente ¿alguna versión de Safari necesita la siguiente linea? No lo sé.
  styleEl.appendChild(document.createTextNode(""));
  var s = styleEl.sheet;
  for (var i = 0, rl = rules.length; i < rl; i++) {
    var j = 1,
      rule = rules[i],
      selector = decl[0],
      propStr = "";
    // Si el segundo argumento de una regla es una matriz de matrices, corrijamos nuestras variables.
    if (Object.prototype.toString.call(rule[1][0]) === "[object Array]") {
      rule = rule[1];
      j = 0;
    }
    for (var pl = rule.length; j < pl; j++) {
      var prop = rule[j];
      propStr +=
        prop[0] + ":" + prop[1] + (prop[2] ? " !important" : "") + ";\n";
    }
    s.insertRule(selector + "{" + propStr + "}", s.cssRules.length);
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [`deleteRule`](/es/docs/Web/API/CSSStyleSheet/deleteRule)
