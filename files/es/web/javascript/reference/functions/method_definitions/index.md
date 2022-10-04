---
title: Method definitions
slug: Web/JavaScript/Reference/Functions/Method_definitions
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
original_slug: Web/JavaScript/Referencia/Funciones/Method_definitions
---
{{JsSidebar("Functions")}}A partir de ECMAScript 2015 (ES6), se introdujo una sintaxis abreviada para la definición de métodos en inicializadores de objetos. Es una forma abreviada para la asignación de una función al nombre del método.

## Sintaxis

```
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
// also with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
// compare ES5 getter/setter syntax:
  get property() {},
  set property(value) {}
};
```

## Descripción

La sintaxis abreviada es similar a la introducida en ECMAScript 5 con [getter](/es/docs/Web/JavaScript/Reference/Functions/get) y [setter](/es/docs/Web/JavaScript/Reference/Functions/set).

Dado el siguiente código:

```js
var obj = {
  foo: function() {},
  bar: function() {}
};
```

Ahora se puede abreviar esto mismo como:

```js
var obj = {
  foo() {},
  bar() {}
};
```

> **Nota:** La sintaxis abreviada usa funciones con nombre en lugar de funciones anónimas (como en …`foo: function() {}`…). Las funciones con nombre pueden ser llamadas desde el cuerpo de la función (esto es imposible con funciones anónimas, ya que no existe un identificador al que referirse). Para más detalles, ver {{jsxref("Operators/function","function","#Examples")}}.

### Abreviatura de métodos generadores

Los [métodos generadores](/es/docs/Web/JavaScript/Reference/Statements/function*) también pueden definirse usando la sintaxis abreviada. Note que el asterisco (\*) en la sintaxis abreviada debe estar antes del nombre de propiedad del generador. Esto es, `* g(){}` funcionará, pero `g *(){}` no.

```
// Usando una propiedad con nombre (pre-ES6)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// El mismo objeto, usando la sintaxis abreviada
var obj2 = {
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Las definiciones de métodos no son constructores (instanciables con new)

Las las definiciones de métodos no son constructores y generarán un {{jsxref("TypeError")}} si intenta instanciarlos.

```js example-bad
var obj = {
  method() {},
};
new obj.method; // TypeError: obj.method no es un constructor

var obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g no es un constructor (cambiado en ES2016)
```

## Ejemplos

### Caso de prueba simple

```
var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
```

### Nombres de propiedad computados

La sintaxis abreviada también soporta nombres de propiedades computados.

```
var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  ["foo" + 2](){return 2;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## Especificaciónes

| Especificación                                                                                   | Estado                       | Observaciones                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}         | Definición inicial.                                                                                                        |
| {{SpecName('ES7', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES7')}}         | Cambiado el que los métodos generadores no deban tener una trampa \[\[Construct]] y deban fallar cuando se usen con `new`. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                                                                                                            |

## Compatibilidad con navegadores

{{Compat("javascript.functions.method_definitions")}}

## Notas específicas para SpiderMonkey

- Anteriormente a SpiderMonkey 38 {{geckoRelease(38)}}, "`get`" y "`set`" eran nombres no válidos para métodos generadores. Esto ha sido corregido en {{bug(1073809)}}.
- Anteriormente a SpiderMonkey 41 {{geckoRelease(41)}}, las llaves no eran requeridas en las definiciones de métodos. Estas son requeridas de ahora en adelante conforme a la especificación ES6 y su omisión arrojará un {{jsxref("SyntaxError")}} en esta versión y posteriores ({{bug(1150855)}}).

  ```js example-bad
  var o = {x() 12}; // SyntaxError
  ```

- La restricción de que sólo los métodos generadores sean constructores fue implementada en SpiderMonkey 41 {{geckoRelease(41)}}. Ver también {{bug(1059908)}} y {{bug(1166950)}}.

## Ver también

- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Lexica grammatical](/es/docs/Web/JavaScript/Reference/Lexical_grammar)
