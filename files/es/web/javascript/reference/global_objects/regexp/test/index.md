---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
  - Expresion Regular
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/test
original_slug: Web/JavaScript/Referencia/Objetos_globales/RegExp/test
---
{{JSRef}}

El método **`test()`** ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve `true` o `false`.

## Sintaxis

```
regexObj.test(cadena)
```

### Parámetros

- `cadena`
  - : La cadena a comparar contra la expresión regular.

### Valor de Retorno

Retorna `true` si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna `false`.

## Descripción

Use `test()` cuando desee saber si existe la ocurrencia de un patrón en una cadena (similar al método {{jsxref("String.prototype.search()")}}, la diferencia es que `test()` devuelve un booleano, mientras que `search()` devuelve el índice de la coincidencia (si la encuentra) o -1 si no la encuentra).

Si requiere más información (a coste de una ejecución más lenta) utilice el método {{jsxref("RegExp.prototype.exec()", "exec()")}}. Al igual que este último, multiples llamadas a `test()` sobre la misma instancia global de una expresión regular avanzará desde de la ocurrencia anterior.

## Ejemplos

### Usando `test()`

Ejemplo simple que prueba si "hello" está contenido al principio de una cadena y devuelve un valor booleano.

```js
var cadena = "hello world!";
var result = /^hello/.test(cadena);
console.log(result); // true
```

El siguiente ejemplo registra un mensaje que depende del éxito de la prueba:

```js
function probarEntrada(regexp, cadena){
  var subcadena;
  if (regexp.test(cadena)) {
    subcadena = ' contiene ';
  } else {
    subcadena = ' no contiene ';
  }
  console.log(cadena + subcadena + regexp.source);
}
```

## Especificaciones

| Especificación                                                                               | Estado                       | Comentario                                          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES3')}}                                                                     | {{Spec2('ES3')}}         | Definition inicial. Implementado en JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.10.6.3', 'RegExp.test')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-regexp.prototype.test', 'RegExp.test')}}         | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-regexp.prototype.test', 'RegExp.test')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad en Navegadores

{{Compat("javascript.builtins.RegExp.test")}}

## Vea también

- El capítulo [Expresiones Regulares](/es/docs/Web/JavaScript/Guide/Regular_Expressions) de la [Guía JavaScript](/es/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
