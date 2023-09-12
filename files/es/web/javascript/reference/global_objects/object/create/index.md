---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

El método **`Object.create()`** crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

{{EmbedInteractiveExample("pages/js/object-create.html")}}La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, clone <https://github.com/mdn/interactive-examples> y envíenos una solicitud de extracción (pull request).

## Sintaxis

```
Object.create(proto[, propertiesObject])
```

### Parámetros

- _proto_
  - : Objeto el cual debe ser el prototipo del nuevo objeto creado.
- _propertiesObject_
  - : Opcional. Si se especifica y no es {{jsxref("undefined")}}, un objeto cuyas propiedades enumerables propias (es decir, aquellas propiedades definidas sobre si mismo y _no_ son propiedades enumerable a lo largo de su cadena de prototipos) espefica descriptores de propiedad para ser agregadas al objeto recien creado, con los nombres de propiedad correspondiente. Estas propiedades corresponden al segundo argumento de {{jsxref("Object.defineProperties")}}.

### Valor devuelto

Un nuevo objeto con el prototipo y propiedades del objeto especificado.

### Excepciones

Una excepción {{jsxref("TypeError")}} si el parámetro `propertiesObject` es {{jsxref("null")}} o un objeto envolvente no primitivo.

## Ejemplos

### Herencia clásica con `Object.create()`

Debajo se encuentra un ejemplo de cómo usar `Object.create()` para lograr herencia clásica. Este es para herencia simple, la cual es todo lo que soporta JavaScript.

```js
// Shape - superclase
function Shape() {
  this.x = 0;
  this.y = 0;
}

// método de la superclase
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclase
function Rectangle() {
  Shape.call(this); // llama al contructor de la superclase.
}

// subclase extiende superclase
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("¿Es rect una instancia de Rectangle?", rect instanceof Rectangle); // true
console.log("¿Es rect una instancia de Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Imprime, 'Shape moved.'
```

Si desea heredar desde múltiples objetos, entonces los mixins son una posibilidad.

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// re-assign constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function () {
  // do something
};
```

{{jsxref("Object.assign()")}} copia las propiedades del prototipo _OtherSuperClass_ al prototipo de _MyClass_, haciéndolas disponibles en todas las instancias de _MyClass_. `Object.assign()` se introdujo con ES2015 y [tiene polyfill](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign#Polyfill). Si el soporte para navegadores antiguos es necesario, se puede utilizar [`jQuery.extend()`](https://api.jquery.com/jQuery.extend/) o [`_.assign()`](https://lodash.com/docs/#assign).

### Usando el argumento `propertiesObject` con `Object.create()`

```js
var o;

// crea un objeto con un prototipo como null
o = Object.create(null);

o = {};
// esto equivale a:
o = Object.create(Object.prototype);

// Ejemplo en donde creamos un objeto con un par de propiedades de ejemplo.
// (Note que el segundo parámetro mapea claves para los *descriptores de propiedad*.)
o = Object.create(Object.prototype, {
  // foo es un habitual "propiedad de valor"
  foo: { writable: true, configurable: true, value: "hello" },
  // bar es una propiedad getter-and-setter (de acceso)
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

function Constructor() {}
o = new Constructor();
// es equivalente a:
o = Object.create(Constructor.prototype);
// Por supuesto, si hay un código de inicialización en la
// función Constructor, el Object.create no puede reflejar esta.

// crear un nuevo objeto cuyo prototipo es un nuevo, objeto vacío
// y agregar una única propiedad 'p', con el valor 42
o = Object.create({}, { p: { value: 42 } });

// por defecto las propiedades NO SON editables, enumerables o configurables:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// "q"

delete o.p;
// false

// para especificar una propiedad en ES3

o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
```

## Objetos personalizados y nulos

Un objeto nuevo creado de un objeto completamente personalizado (especialmente uno creado de un objeto nulo, que es básicamente un objeto personalizado sin miembros) puede comportarse de manera inesperada. Esto es especialmente cierto cuando se depura, ya que las funciones comunes de conversión/detección de propiedad de objeto pueden generar errores, o simplemente perder información (especialmente si se atrapan excepciones de manera silenciosa que ignoran los errores). Por ejemplo, aquí hay dos objetos:

```js
oco = Object.create( {} );   // Crea un objeto normal
ocn = Object.create( null ); // Crea un objeto "null"

> console.log(oco) // {} -- Parece normal
> console.log(ocn) // {} -- Parece normal aquí también, hasta este momento

oco.p = 1; // Crea una propiedad simple en un objeto normal
ocn.p = 0; // Crea una propiedad simple en un objeto "null"

> console.log(oco) // {p: 1} -- Todavía parece normal
> console.log(ocn) // {p: 0} --Todavía parece normal aquí también. PERO ESPERA...
```

Como se muestra arriba, todo parece normal hasta ahora. Sin embargo, al intentar usar estos objetos, sus diferencias se hacen evidentes rápidamente:

```js
> "oco is: " + oco // Muestra "ocn is: [object Object]"

> "ocn is: " + ocn // Arroja error: Cannot convert object to primitive value
```

Probar solo algunas de las funciones incorporadas más básicas muestra la magnitud del problema más claramente:

```js
> alert(oco) // Muestra: [object Object]
> alert(ocn) // Arroja error: Cannot convert object to primitive value

> oco.toString() // Muestra [object Object]
> ocn.toString() // Arroja error: ocn.toString is not a function

> oco.valueOf() // Muestra{}
> ocn.valueOf() // Arroja error: ocn.valueOf is not a function

> oco.hasOwnProperty("p") // Muestra "true"
> ocn.hasOwnProperty("p") // Arroja error: ocn.hasOwnProperty is not a function

> oco.constructor // Muestra "Object() { [native code] }"
> ocn.constructor // Muestra "undefined"
```

Como se dijo, estas diferencias pueden hacer que la depuración e incluso problemas aparentemente simples se pierdan rápidamente. Por ejemplo:

_Una función simple de depuración:_

```js
// mostrar nombre de propiedad de nivel superior: pares de valores de un objeto dado
function ShowProperties(b) {
  for (var i in b) {
    console.log(i + ": " + b[i] + "\n");
  }
}
```

_Resultados no tan simples: (especialmente si la captura silenciosa de errores había ocultado los mensajes de error)_

```js
ob={}; ob.po=oco; ob.pn=ocn; // crear un objeto compuesto usando los objetos de prueba de arriba como valores de propiedad

> ShowProperties( ob ) // Muestra propiedades de nivel superior
- po: [object Object]
- Error: Cannot convert object to primitive value

Tenga en cuenta que solo se muestra la primera propiedad.
```

_(Pero si se crea el mismo objeto simplemente en un orden diferente, al menos en algunas implementaciones ...)_

```js
ob={}; ob.pn=ocn; ob.po=oco; // cree el mismo objeto compuesto nuevamente, pero cree las mismas propiedades en un orden diferente

> ShowProperties( ob ) // Muestra propiedades de nivel superior
- Error: Cannot convert object to primitive value

Tenga en cuenta que ninguna propiedad se muestra.
```

Tenga en cuenta que un orden tan diferente puede surgir estáticamente a través de codificaciones fijas dispares, como aquí, pero también dinámicamente a través del orden en que se ejecutan dichas ramas de código de adición de propiedades en tiempo de ejecución, ya que depende de entradas y / o variables aleatorias. Por otra parte, el orden de iteración real no está garantizado, independientemente de cómo son agregados los miembros.

#### Algunas NO-soluciones

A good solution for the missing object-methods is not immediately apparent.

Adding the missing object-method directly from the standard-object does NOT work:

```js
ocn = Object.create( null ); // create "null" object (same as before)

ocn.toString = Object.toString; // since new object lacks method then try assigning it directly from standard-object

> ocn.toString // shows "toString() { [native code] }" -- missing method seems to be there now
> ocn.toString == Object.toString // shows "true" -- method seems to be same as the standard object-method

> ocn.toString() // error: Function.prototype.toString requires that 'this' be a Function
```

Adding the missing object-method directly to new object's "prototype" does not work either, since new object does not have a real prototype (which is really the cause of ALL these problems) and one cannot be **directly** added:

```js
ocn = Object.create( null ); // create "null" object (same as before)

ocn.prototype.toString = Object.toString; // Error: Cannot set property 'toString' of undefined

ocn.prototype = {};                       // try to create a prototype
ocn.prototype.toString = Object.toString; // since new object lacks method then try assigning it from standard-object

> ocn.toString() // error: ocn.toString is not a function
```

Adding the missing object-method by using the standard-object as new object's prototype does not work either:

```js
ocn = Object.create( null );        // create "null" object (same as before)
Object.setPrototypeOf(ocn, Object); // set new object's prototype to the standard-object

> ocn.toString() // error: Function.prototype.toString requires that 'this' be a Function
```

#### Algunas soluciones aceptables

Again, adding the missing object-method directly from the **standard-object** does NOT work. However, adding the **generic** method directly, DOES:

```js
ocn = Object.create( null ); // create "null" object (same as before)

ocn.toString = toString; // since new object lacks method then assign it directly from generic version

> ocn.toString() // shows "[object Object]"
> "ocn is: " + ocn // shows "ocn is: [object Object]"


ob={}; ob.pn=ocn; ob.po=oco; // create a compound object (same as before)

> ShowProperties(ob) // display top-level properties
- po: [object Object]
- pn: [object Object]
```

However, setting the generic **prototype** as the new object's prototype works even better:

```js
ocn = Object.create(null); // create "null" object (same as before)
Object.setPrototypeOf(ocn, Object.prototype); // set new object's prototype to the "generic" object (NOT standard-object)
```

_(In addition to all the string-related functions shown above, this also adds:)_

```js
> ocn.valueOf() // shows {}
> ocn.hasOwnProperty("x") // shows "false"
> ocn.constructor // shows "Object() { [native code] }"

// ...and all the rest of the properties and methods of Object.prototype.
```

As shown, objects modified this way now look very much like ordinary objects.

## Polyfill

Este polyfill cubre el caso de uso principal el cual es la creación de un nuevo objeto para el prototipo que ha sido escogido pero no toma el segundo argumento en cuenta.

Note that while the setting of `null` as `[[Prototype]]` is supported in the real ES5 `Object.create`, this polyfill cannot support it due to a limitation inherent in versions of ECMAScript lower than 5.

```js
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== "object" && typeof proto !== "function") {
      throw new TypeError("Object prototype may only be an Object: " + proto);
    } else if (proto === null) {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.",
      );
    }

    if (typeof propertiesObject != "undefined") {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support a second argument.",
      );
    }

    function F() {}
    F.prototype = proto;

    return new F();
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.defineProperty")}}
- {{jsxref("Object.defineProperties")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
- {{jsxref("Reflect.construct()")}}
- Publicación de John Resig sobre [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
