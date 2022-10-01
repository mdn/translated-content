---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/throw
original_slug: Web/JavaScript/Referencia/Objetos_globales/Generador/throw
---
{{JSRef}}

El método **`throw()`** reanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades `done` y `value`.

## Sintaxis

```
gen.throw(excepción)
```

### Parámetros

- `excepción`
  - : La excepción a lanzar. Al hacer depuración, es útil que la excepción cumpla con `instanceof` {{jsxref("Error")}}.

### Valor de retorno

Un {{jsxref("Object")}} con dos propiedades:

- `done` (booleano)

  - Es `verdadero` si el iterador ya llegó al final de la secuencia. En este caso `valor` define opcionalmente el _valor de retorno_ del iterador.
  - Es `falso` si el iterador puede dar un siguiente valor en la secuencia. Es equivalente a no definir la propiedad `done`.

- `value` - cualquier valor Javascript regresado por el iterador. Éste puede ser omitido si `done` is `verdadero`.

## Examples

### Using `throw()`

The following example shows a simple generator and an error that is thrown using the `throw` method. An error can be caught by a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block as usual.

```js
function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

var g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
```

## Specifications

| Specification                                                                                                        | Status                       | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}}     | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}} | {{Spec2('ESDraft')}} |                     |

## Browser compatibility

{{Compat("javascript.builtins.Generator.throw")}}

## See also

- [`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
