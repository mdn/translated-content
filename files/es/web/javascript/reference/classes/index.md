---
title: Clases
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Classes")}}

Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases **no** introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

## Definiendo clases

Las clases son "[funciones](/es/docs/Web/JavaScript/Reference/Functions) especiales", como las [expresiones de funciones](/es/docs/Web/JavaScript/Reference/Operators/function) y [declaraciones de funciones](/es/docs/Web/JavaScript/Reference/Statements/function), la sintaxis de una clase tiene dos componentes: [expresiones de clases](/es/docs/Web/JavaScript/Reference/Operators/class) y [declaraciones de clases](/es/docs/Web/JavaScript/Reference/Statements/class).

### Declaración de clases

Una manera de definir una clase es mediante una **declaración de clase**_._ Para declarar una clase, se utiliza la palabra reservada `class` y un nombre para la clase "Rectangulo".

```js
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
```

#### Alojamiento

Una importante diferencia entre las **declaraciones de funciones** y las **declaraciones de clases** es que las **declaraciones de funciones** son alojadas y las **declaraciones de clases** no lo son. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otro modo el ejemplo de código siguiente arrojará un {{jsxref("ReferenceError")}}:

```js example-bad
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Expresiones de clases

Una **expresión de clase** es otra manera de definir una clase. Las expresiones de clase pueden ser nombradas o anónimas. El nombre dado a la **expresión de clase** nombrada es local dentro del cuerpo de la misma.

```
// Anonima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"
```

> **Nota:** Las **expresiones** de clase están sujetas a las mismas restricciones de elevación que se describen en la sección [Class declarations](#class_declarations).

## Cuerpo de la clase y definición de métodos

El contenido de una **clase** es la parte que se encuentra entre las llaves `{}`. Este es el lugar se definen los **miembros de clase,** como los **métodos** o **constructores.**

### Modo estricto

El cuerpo de las _declaraciones de clase_ y las _expresiones de clase_ son ejecutadas en [modo estricto.](/es/docs/Web/JavaScript/Reference/Strict_mode) En otras palabras, el código escrito aquí está sujeto a una sintaxis más estricta para aumentar el rendimiento, se arrojarán algunos errores silenciosos y algunas palabras clave están reservadas para versiones futuras de ECMAScript.

### Constructor

El método [`constructor`](/es/docs/Web/JavaScript/Reference/Classes/constructor) es un método especial para crear e inicializar un objeto creado con una `clase`. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método **`constructor`**, se arrojará un _Error_ {{jsxref("SyntaxError")}}

Un **constructor** puede usar la _palabra reservada_ **`super`** para llamar al **constructor** de una _superclase_

### Métodos prototipo

Vea también [métodos definidos](/es/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100
```

### Métodos estáticos

La _palabra clave_ [`static`](/es/docs/Web/JavaScript/Reference/Classes/static) define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y **no** pueden ser llamados mediante una instancia de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

```js
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2)); // 7.0710678118654755
```

### "Boxing" con prototipos y métodos estáticos

Cuando un método estático o método del prototipo es llamado sin un valor para "this" (o con "this" como booleano, cadena, número, undefined o null), entonces el valor de "this" será **undefined** dentro de la funciona llamada. _Autoboxing_ no ocurrirá. El comportamiento será igual inclusive si se escribe el código en modo no estricto.

```
class Animal {
  hablar() {
    return this;
  }
  static comer() {
    return this;
  }
}

let obj = new Animal();
obj.hablar(); // Animal {}
let hablar = obj.hablar;
hablar(); // undefined

Animal.comer() // class Animal
let comer = Animal.comer;
comer(); // undefined
```

Si se escribe el código del cuadro superior usando clases función tradicionales, entonces autoboxing ocurrirara porque tomará valor de "this" sobre la función que es llamada.

```
function Animal() { }

Animal.prototype.hablar = function(){
  return this;
}

Animal.comer = function() {
  return this;
}

let obj = new Animal();
let hablar = obj.hablar;
hablar(); // global object

let hablar = Animal.hablar;
hablar(); // global object
```

## Subclases con `extends`

La palabra clave [`extends`](/es/docs/Web/JavaScript/Reference/Classes/extends) es usada en _declaraciones de clase_ o _expresiones de clase_ para crear una clase hija.

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " ladra.");
  }
}
```

También se pueden extender las clases tradicionales basadas en funciones:

```js
function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.hablar = function () {
  console.log(this.nombre + "hace un ruido.");
};

class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log(this.nombre + " ladra.");
  }
}

var p = new Perro("Mitzie");
p.hablar();
```

Fijarse que las clases no pueden extender objectos regulares (literales). Si se quiere heredar de un objecto regular, se debe user {{jsxref("Object.setPrototypeOf()")}}::

```
var Animal = {
  hablar() {
    console.log(this.nombre + ' hace ruido.');
  },
  comer() {
    console.log(this.nombre + ' se alimenta.');
  }
};

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

// Solo adjunta los métodos aún no definidos
Object.setPrototypeOf(Perro.prototype, Animal);

var d = new Perro('Mitzie');
d.hablar(); // Mitzie ladra.
d.comer(); // Mitzie se alimenta.
```

## Especies

Quizás se quiera devolver objetos {{jsxref("Array")}} derivados de la clase array MyArray. El patron _species_ permite sobreescribir constructores por defecto.

Por ejemplo, cuando se usan metodos del tipo {{jsxref("Array.map", "map()")}} que devuelven el constructor por defecto, se quiere que esos métodos devuelvan un objeto padre Array, en vez de MyArray. El símbolo {{jsxref("Symbol.species")}} permite hacer:

```js
class MyArray extends Array {
  // Sobreescribe species sobre el constructor padre Array
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Llamadas a súperclases con `super`

La palabra clave [`super`](/es/docs/Web/JavaScript/Reference/Operators/super) es usada para llamar funciones del objeto padre.

```
class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace ruido.');
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' maulla.');
  }
}
```

## Mix-ins

Subclases abstractas or _mix-ins_ son plantillas de clases. Una clase ECMAScript solo puede tener una clase padre, con lo cual la herencia multiple no es posible. La funcionalidad debe ser proporcionada por la clase padre.

Una función con una clase padre como entrada y una subclase extendiendo la clase padre como salida puede ser usado para implementar mix-ins en EMCAScript:

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

Una clase que use este método puede ser escrita tal que así:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Referencia/Funciones)
- {{jsxref("Statements/class", "class declaration")}}
- {{jsxref("Operators/class", "class expression")}}
- {{jsxref("Operators/super", "super")}}
