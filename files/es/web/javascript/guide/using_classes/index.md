---
title: Usar clases
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 8fc371f14e899fc9389ed98b20b9ee57e6b0886d
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript es un lenguaje basado en prototipos: el comportamiento de un objeto lo determinan sus propias propiedades y las de su prototipo. Sin embargo, con la incorporación de las [clases](/es/docs/Web/JavaScript/Reference/Classes), la creación de jerarquías de objetos y la herencia de propiedades y de sus valores se parecen mucho más a las de otros lenguajes orientados a objetos, como Java. En esta sección mostraremos cómo se pueden crear objetos a partir de clases.

En muchos otros lenguajes, las _clases_ (o constructores) se distinguen claramente de los _objetos_ (o instancias). En JavaScript, las clases son principalmente una abstracción sobre el mecanismo de herencia basado en prototipos que ya existía: todos los patrones pueden convertirse a herencia basada en prototipos. Las propias clases también son valores normales de JavaScript y tienen sus propias cadenas de prototipos. De hecho, la mayoría de las funciones normales de JavaScript pueden usarse como constructores: se usa el operador `new` con una función constructora para crear un objeto nuevo.

En este tutorial trabajaremos con el modelo de clases, bien abstraído, y veremos qué semántica ofrecen las clases. Si quieres profundizar en el sistema de prototipos subyacente, puedes leer la guía [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Este capítulo da por hecho que ya conoces un poco JavaScript y que has usado objetos normales.

## Descripción general de las clases

Si tienes algo de experiencia práctica con JavaScript o has seguido la guía, probablemente ya hayas usado clases, aunque no hayas creado ninguna. Por ejemplo, [puede que esto te resulte familiar](/es/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Érase una vez...");
}
```

En la primera línea, creamos una instancia de la clase [`Date`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date) y la llamamos `bigDay`. En la segunda línea, llamamos a un [método](/es/docs/Glossary/Method), [`toLocaleDateString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString), de la instancia `bigDay`, que devuelve una cadena. Después, comparamos dos números: uno devuelto por el método [`getTime()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) y otro llamado directamente desde la _propia_ clase `Date`, como [`Date.now()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` es una clase integrada de JavaScript. A partir de este ejemplo, podemos hacernos una idea básica de lo que hacen las clases:

- Las clases crean objetos mediante el operador [`new`](/es/docs/Web/JavaScript/Reference/Operators/new).
- Cada objeto tiene algunas propiedades (datos o métodos) que añade la clase.
- La clase guarda algunas propiedades (datos o métodos) en sí misma, que normalmente se usan para interactuar con las instancias.

Estas corresponden a las tres características clave de las clases:

- Constructor;
- Métodos de instancia y campos de instancia;
- Métodos estáticos y campos estáticos.

## Declarar una clase

Las clases se crean normalmente con _declaraciones de clase_.

```js
class MyClass {
  // cuerpo de la clase...
}
```

Dentro del cuerpo de una clase hay varias características disponibles.

```js
class MyClass {
  // Constructor
  constructor() {
    // Cuerpo del constructor
  }
  // Campo de instancia
  myField = "foo";
  // Método de instancia
  myMethod() {
    // Cuerpo de myMethod
  }
  // Campo estático
  static myStaticField = "bar";
  // Método estático
  static myStaticMethod() {
    // Cuerpo de myStaticMethod
  }
  // Bloque estático
  static {
    // Código de inicialización estática
  }
  // Los campos, los métodos, los campos estáticos y los métodos estáticos
  // tienen formas "privadas"
  #myPrivateField = "bar";
}
```

Si vienes de la época anterior a ES6, quizá te resulte más familiar usar funciones como constructores. El patrón anterior se traduciría, más o menos, a lo siguiente con funciones constructoras:

```js
function MyClass() {
  this.myField = "foo";
  // Cuerpo del constructor
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // Cuerpo de myStaticMethod
};
MyClass.prototype.myMethod = function () {
  // Cuerpo de myMethod
};

(function () {
  // Código de inicialización estática
})();
```

> [!NOTE]
> Los campos y métodos privados son características nuevas de las clases que no tienen un equivalente sencillo en las funciones constructoras.

### Construir una clase

Una vez declarada una clase, puedes crear instancias de ella con el operador [`new`](/es/docs/Web/JavaScript/Reference/Operators/new).

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Las funciones constructoras normales se pueden construir con `new` y también llamar sin `new`. Sin embargo, intentar "llamar" a una clase sin `new` produce un error.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Elevación de las declaraciones de clase

A diferencia de las declaraciones de funciones, las declaraciones de clase no se [elevan](/es/docs/Glossary/Hoisting) (o, según algunas interpretaciones, se elevan pero con la restricción de la zona muerta temporal), lo que significa que no puedes usar una clase antes de declararla.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Este comportamiento es parecido al de las variables declaradas con [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) y [`const`](/es/docs/Web/JavaScript/Reference/Statements/const).

### Expresiones de clase

Al igual que las funciones, las declaraciones de clase también tienen su equivalente como expresión.

```js
const MyClass = class {
  // Cuerpo de la clase...
};
```

Las expresiones de clase también pueden tener nombre. El nombre de la expresión solo es visible dentro del cuerpo de la clase.

```js
const MyClass = class MyClassLongerName {
  // Cuerpo de la clase. Aquí MyClass y MyClassLongerName apuntan a la misma clase.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Constructor

Quizá la tarea más importante de una clase sea actuar como "fábrica" de objetos. Por ejemplo, cuando usamos el constructor `Date`, esperamos que nos dé un objeto nuevo que represente los datos de fecha que le pasamos, y que después podamos manipular con otros métodos que expone la instancia. En las clases, la creación de instancias la hace el [constructor](/es/docs/Web/JavaScript/Reference/Classes/constructor).

Como ejemplo, crearemos una clase llamada `Color` que representa un color concreto. Los usuarios crean colores pasando un trío de valores [RGB](/es/docs/Glossary/RGB).

```js
class Color {
  constructor(r, g, b) {
    // Asignar los valores RGB como propiedad de `this`.
    this.values = [r, g, b];
  }
}
```

Abre las herramientas de desarrollo de tu navegador, pega el código anterior en la consola y crea una instancia:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Deberías ver una salida como esta:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Has creado correctamente una instancia de `Color`, y la instancia tiene una propiedad `values`, que es un array con los valores RGB que pasaste. Esto equivale prácticamente a lo siguiente:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

La sintaxis del constructor es exactamente la misma que la de una función normal, lo que significa que puedes usar otras sintaxis, como los [parámetros rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters):

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// Crea una instancia con la misma forma que la anterior.
```

Cada vez que llamas a `new`, se crea una instancia distinta.

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

Dentro del constructor de una clase, el valor de `this` apunta a la instancia recién creada. Puedes asignarle propiedades o leer las que ya existen (sobre todo los métodos, que veremos a continuación).

El valor de `this` se devuelve automáticamente como resultado de `new`. Se recomienda no devolver ningún valor desde el constructor, porque si devuelves un valor no primitivo, se convertirá en el valor de la expresión `new` y el valor de `this` se descartará. (Puedes leer más sobre lo que hace `new` en [su descripción](/es/docs/Web/JavaScript/Reference/Operators/new#descripción)).

```js
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}

console.log(new MyClass().myField); // undefined
```

## Métodos de instancia

Si una clase solo tiene un constructor, no es muy diferente de una función de fábrica `createX` que simplemente crea objetos normales. Sin embargo, la potencia de las clases está en que pueden usarse como "plantillas" que asignan automáticamente métodos a las instancias.

Por ejemplo, con las instancias de `Date`, puedes usar varios métodos para obtener información distinta a partir de un único valor de fecha, como el [año](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), el [mes](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), el [día de la semana](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), etc. También puedes establecer esos valores con sus equivalentes `setX`, como [`setFullYear`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear).

Para nuestra propia clase `Color`, podemos añadir un método llamado `getRed` que devuelva el valor rojo del color.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

Sin métodos, podrías sentir la tentación de definir la función dentro del constructor:

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

Esto también funciona. Sin embargo, el problema es que se crea una función nueva cada vez que se crea una instancia de `Color`, ¡aunque todas hagan lo mismo!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

En cambio, si usas un método, este se comparte entre todas las instancias. Una función puede compartirse entre todas las instancias y, aun así, comportarse de forma distinta cuando la llaman instancias diferentes, porque el valor de `this` es distinto. Si tienes curiosidad por saber _dónde_ se guarda este método: se define en el prototipo de todas las instancias, es decir, en `Color.prototype`, algo que se explica con más detalle en [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Del mismo modo, podemos crear un método nuevo llamado `setRed`, que establezca el valor rojo del color.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0; ¡a estas alturas, claro, debería llamarse "black"!
```

## Campos privados

Quizá te preguntes: ¿por qué complicarse usando los métodos `getRed` y `setRed`, si podemos acceder directamente al array `values` de la instancia?

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
red.values[0] = 0;
console.log(red.values[0]); // 0
```

En la programación orientada a objetos hay una filosofía llamada "encapsulación". Significa que no debes acceder a la implementación subyacente de un objeto, sino usar métodos bien abstraídos para interactuar con él. Por ejemplo, si de repente decidiéramos representar los colores en [HSL](/es/docs/Web/CSS/Reference/Values/color_value/hsl):

```js
class Color {
  constructor(r, g, b) {
    // ¡values ahora es un array HSL!
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return hslToRGB(this.values)[0];
  }
  setRed(value) {
    const rgb = hslToRGB(this.values);
    rgb[0] = value;
    this.values = rgbToHSL(rgb);
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0; ya no es 255, porque el valor H del rojo puro es 0
```

La suposición del usuario de que `values` es el valor RGB se viene abajo de repente, y puede hacer que su lógica falle. Por eso, si implementas una clase, querrás ocultar la estructura interna de los datos de tu instancia a sus usuarios, tanto para mantener la API limpia como para evitar que su código falle cuando hagas alguna "refactorización inofensiva". En las clases, esto se hace con los [_campos privados_](/es/docs/Web/JavaScript/Reference/Classes/Private_elements).

Un campo privado es un identificador precedido de `#` (el símbolo de almohadilla). La almohadilla forma parte del nombre del campo, lo que significa que un campo privado nunca puede tener un conflicto de nombre con un campo o método público. Para referirte a un campo privado en cualquier parte de la clase, debes _declararlo_ en el cuerpo de la clase (no puedes crear un elemento privado sobre la marcha). Aparte de esto, un campo privado equivale prácticamente a una propiedad normal.

```js
class Color {
  // Declarar: toda instancia de Color tiene un campo privado llamado #values.
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

Acceder a campos privados desde fuera de la clase es un error de sintaxis temprano. El lenguaje puede evitarlo porque `#privateField` es una sintaxis especial, así que puede hacer un análisis estático y encontrar todos los usos de campos privados antes incluso de evaluar el código.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> El código que se ejecuta en la consola de Chrome puede acceder a elementos privados desde fuera de la clase. Es una flexibilización de la restricción de sintaxis de JavaScript exclusiva de las herramientas de desarrollo.

Los campos privados de JavaScript son _estrictamente privados_: si la clase no implementa métodos que expongan esos campos privados, no hay absolutamente ningún mecanismo para obtenerlos desde fuera de la clase. Esto significa que puedes refactorizar con seguridad los campos privados de tu clase, siempre que el comportamiento de los métodos expuestos no cambie.

Después de hacer privado el campo `values`, podemos añadir más lógica en los métodos `getRed` y `setRed`, en lugar de que se limiten a pasar el valor. Por ejemplo, podemos añadir una comprobación en `setRed` para ver si es un valor R válido:

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Invalid R value");
    }
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError: Invalid R value
```

Si dejamos expuesta la propiedad `values`, nuestros usuarios pueden saltarse fácilmente esa comprobación asignando directamente a `values[0]`, y crear colores no válidos. Pero con una API bien encapsulada, podemos hacer que nuestro código sea más robusto y evitar errores de lógica más adelante.

Un método de clase puede leer los campos privados de otras instancias, siempre que pertenezcan a la misma clase.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // No es necesario acceder a #values desde this:
    // puedes acceder a los campos privados de otras instancias
    // que pertenezcan a la misma clase.
    return this.#values[0] - anotherColor.#values[0];
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35
```

Sin embargo, si `anotherColor` no es una instancia de Color, `#values` no existirá. (Aunque otra clase tenga un campo privado `#values` con el mismo nombre, no se refiere a lo mismo y no se puede acceder a él aquí). Acceder a un elemento privado que no existe lanza un error, en lugar de devolver `undefined` como hacen las propiedades normales. Si no sabes si un campo privado existe en un objeto y quieres acceder a él sin usar `try`/`catch` para gestionar el error, puedes usar el operador [`in`](/es/docs/Web/JavaScript/Reference/Operators/in).

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("Color instance expected");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> [!NOTE]
> Ten en cuenta que `#` es una sintaxis de identificador especial, y no puedes usar el nombre del campo como si fuera una cadena. `"#values" in anotherColor` buscaría una propiedad llamada literalmente `"#values"`, en lugar de un campo privado.

El uso de elementos privados tiene algunas limitaciones: no se puede declarar el mismo nombre dos veces en una misma clase, y no se pueden eliminar. Ambas cosas provocan errores de sintaxis tempranos.

```js-nolint example-bad
class BadIdeas {
  #firstName;
  #firstName; // aquí se produce un error de sintaxis
  #lastName;
  constructor() {
    delete this.#lastName; // también es un error de sintaxis
  }
}
```

Los métodos, los [getters y los setters](#campos_de_acceso) también pueden ser privados. Son útiles cuando la clase tiene que hacer algo complejo internamente que ninguna otra parte del código debería poder llamar.

Por ejemplo, imagina que creas [elementos personalizados de HTML](/es/docs/Web/API/Web_components/Using_custom_elements) que deben hacer algo un tanto complicado cuando se hace clic en ellos, se tocan o se activan de otra forma. Además, esas cosas algo complicadas que ocurren al hacer clic en el elemento deben limitarse a esta clase, porque ninguna otra parte del JavaScript accederá a ellas (ni debería).

```js
class Counter extends HTMLElement {
  #xValue = 0;
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  get #x() {
    return this.#xValue;
  }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  #render() {
    this.textContent = this.#x.toString();
  }
  connectedCallback() {
    this.#render();
  }
}

customElements.define("num-counter", Counter);
```

En este caso, prácticamente todos los campos y métodos son privados de la clase. Así, presenta al resto del código una interfaz que, en esencia, es igual que la de un elemento HTML integrado. Ninguna otra parte del programa puede afectar a los detalles internos de `Counter`.

## Campos de acceso

`color.getRed()` y `color.setRed()` nos permiten leer y escribir el valor rojo de un color. Si vienes de lenguajes como Java, este patrón te resultará muy familiar. Sin embargo, usar métodos solo para acceder a una propiedad sigue siendo poco práctico en JavaScript. Los _campos de acceso_ nos permiten manipular algo como si fuera una "propiedad real".

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 0
```

Parece que el objeto tiene una propiedad llamada `red`, pero en realidad esa propiedad no existe en la instancia. Solo hay dos métodos, pero llevan delante `get` y `set`, lo que permite manipularlos como si fueran propiedades.

Si un campo solo tiene un getter pero no un setter, será en la práctica de solo lectura.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 255
```

En [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode), la línea `red.red = 0` lanzará un error de tipo: "Cannot set property red of #\<Color> which has only a getter". En modo no estricto, la asignación se ignora sin avisar.

## Campos públicos

Los campos privados también tienen su equivalente público, que permite que cada instancia tenga una propiedad. Los campos suelen diseñarse para ser independientes de los parámetros del constructor.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Los campos públicos equivalen casi a asignar una propiedad a `this`. Por ejemplo, el ejemplo anterior también podría convertirse en:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Propiedades estáticas

En el ejemplo de `Date`, también vimos el método [`Date.now()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/now), que devuelve la fecha actual. Este método no pertenece a ninguna instancia de fecha, sino a la propia clase. Sin embargo, se coloca en la clase `Date` en lugar de exponerse como una función global `DateNow()`, porque resulta útil sobre todo al trabajar con instancias de fecha.

> [!NOTE]
> Poner delante de los métodos de utilidad aquello con lo que trabajan se llama "espacio de nombres" y se considera una buena práctica. Por ejemplo, además del método más antiguo y sin prefijo [`parseInt()`](/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt), JavaScript añadió más tarde el método con prefijo [`Number.parseInt()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) para indicar que sirve para trabajar con números.

Las [_propiedades estáticas_](/es/docs/Web/JavaScript/Reference/Classes/static) son un grupo de características de las clases que se definen en la propia clase, y no en las instancias individuales. Estas características son:

- Métodos estáticos
- Campos estáticos
- Getters y setters estáticos

Todo ello tiene también su equivalente privado. Por ejemplo, para nuestra clase `Color`, podemos crear un método estático que compruebe si un trío de valores dado es un valor RGB válido:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Las propiedades estáticas son muy parecidas a sus equivalentes de instancia, salvo que:

- Todas llevan delante `static`, y
- No se puede acceder a ellas desde las instancias.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

También hay una construcción especial llamada [_bloque de inicialización estática_](/es/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), que es un bloque de código que se ejecuta cuando la clase se carga por primera vez.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Los bloques de inicialización estática equivalen casi a ejecutar inmediatamente algo de código después de declarar una clase. La única diferencia es que tienen acceso a los elementos privados estáticos.

## Extends y herencia

Una característica clave que aportan las clases (además de una encapsulación práctica con los campos privados) es la _herencia_, que significa que un objeto puede "tomar prestada" gran parte del comportamiento de otro objeto, mientras sobrescribe o mejora ciertas partes con su propia lógica.

Por ejemplo, supongamos que nuestra clase `Color` ahora tiene que admitir transparencia. Podríamos sentir la tentación de añadir un campo nuevo que indique su transparencia:

```js
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#values[3] = value;
  }
}
```

Sin embargo, esto significa que todas las instancias, incluso la inmensa mayoría que no son transparentes (las que tienen un valor alfa de 1), tendrán que tener el valor alfa adicional, lo que no es muy elegante. Además, si las funciones siguen creciendo, nuestra clase `Color` se volverá muy pesada y difícil de mantener.

En su lugar, en la programación orientada a objetos crearíamos una _clase derivada_. La clase derivada tiene acceso a todas las propiedades públicas de la clase padre. En JavaScript, las clases derivadas se declaran con una cláusula [`extends`](/es/docs/Web/JavaScript/Reference/Classes/extends), que indica la clase de la que heredan.

```js
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}
```

Hay algunas cosas que llaman la atención enseguida. La primera es que en el constructor llamamos a `super(r, g, b)`. El lenguaje exige llamar a [`super()`](/es/docs/Web/JavaScript/Reference/Operators/super) antes de acceder a `this`. La llamada a `super()` llama al constructor de la clase padre para inicializar `this`; aquí equivale más o menos a `this = new Color(r, g, b)`. Puedes tener código antes de `super()`, pero no puedes acceder a `this` antes de `super()`: el lenguaje impide que accedas al `this` sin inicializar.

Una vez que la clase padre ha terminado de modificar `this`, la clase derivada puede aplicar su propia lógica. Aquí añadimos un campo privado llamado `#alpha` y también un par de getter/setter para interactuar con él.

Una clase derivada hereda todos los métodos de su clase padre. Por ejemplo, fíjate en el accesor `get red()` que añadimos a `Color` en la sección [Campos de acceso](#campos_de_acceso): aunque no hemos declarado ninguno en `ColorWithAlpha`, podemos acceder a `red` porque ese comportamiento lo especifica la clase padre:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Las clases derivadas también pueden sobrescribir métodos de la clase padre. Por ejemplo, todas las clases heredan implícitamente de la clase [`Object`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object), que define algunos métodos básicos como [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString). Sin embargo, el método `toString()` base es famoso por ser inútil, porque en la mayoría de los casos imprime `[object Object]`:

```js
console.log(red.toString()); // [object Object]
```

En cambio, nuestra clase puede sobrescribirlo para que imprima los valores RGB del color:

```js
class Color {
  #values;
  // …
  toString() {
    return this.#values.join(", ");
  }
}

console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
```

Dentro de las clases derivadas, puedes acceder a los métodos de la clase padre con `super`. Esto te permite crear métodos que los mejoran y evitar duplicar código.

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // Llamar a toString() de la clase padre y partir del valor devuelto
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

Cuando usas `extends`, los métodos estáticos también se heredan, así que también puedes sobrescribirlos o mejorarlos.

```js
class ColorWithAlpha extends Color {
  // …
  static isValid(r, g, b, a) {
    // Llamar a isValid() de la clase padre y partir del valor devuelto
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Las clases derivadas no tienen acceso a los campos privados de la clase padre: este es otro aspecto clave de que los campos privados de JavaScript sean "estrictamente privados". Los campos privados están limitados al propio cuerpo de la clase y no dan acceso a _ningún_ código externo.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Una clase solo puede heredar de una clase. Esto evita problemas de la herencia múltiple, como el [problema del diamante](https://es.wikipedia.org/wiki/Problema_del_diamante). Sin embargo, debido a la naturaleza dinámica de JavaScript, sigue siendo posible lograr el efecto de la herencia múltiple mediante la composición de clases y los [mixins](/es/docs/Web/JavaScript/Reference/Classes/extends).

Las instancias de las clases derivadas también son [instancias de](/es/docs/Web/JavaScript/Reference/Operators/instanceof) la clase base.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## ¿Por qué usar clases?

Hasta ahora, la guía ha sido pragmática: nos hemos centrado en _cómo_ se pueden usar las clases, pero queda una pregunta sin responder: ¿_por qué_ usar una clase? La respuesta es: depende.

Las clases introducen un _paradigma_, es decir, una forma de organizar el código. Las clases son la base de la programación orientada a objetos, que se basa en conceptos como la [herencia](<https://es.wikipedia.org/wiki/Herencia_(informática)>) y el [polimorfismo](<https://es.wikipedia.org/wiki/Polimorfismo_(informática)>) (sobre todo el _polimorfismo de subtipos_). Sin embargo, muchas personas se oponen filosóficamente a ciertas prácticas de la POO y, por eso, no usan clases.

Por ejemplo, algo que hace que los objetos `Date` tengan mala fama es que son _mutables_.

```js
function incrementDay(date) {
  return new Date(date.setDate(date.getDate() + 1));
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// ¡¿La fecha antigua también se modifica?!
console.log(date); // 2019-06-20
```

La mutabilidad y el estado interno son aspectos importantes de la programación orientada a objetos, pero a menudo hacen que sea difícil razonar sobre el código, porque cualquier operación aparentemente inocente puede tener efectos secundarios inesperados y cambiar el comportamiento de otras partes del programa.

Para reutilizar código, solemos recurrir a heredar de clases, lo que puede crear grandes jerarquías de patrones de herencia.

![Un árbol de herencia típico de la POO, con cinco clases y tres niveles](figure8.1.png)

Sin embargo, a menudo es difícil describir la herencia de forma limpia cuando una clase solo puede heredar de otra. A menudo queremos el comportamiento de varias clases. En Java, esto se hace con interfaces; en JavaScript, puede hacerse con mixins. Pero, al final, sigue sin ser muy cómodo.

Por el lado bueno, las clases son una forma muy potente de organizar el código a un nivel superior. Por ejemplo, sin la clase `Color`, quizá tendríamos que crear una docena de funciones de utilidad:

```js
function isRed(color) {
  return color.red === 255;
}
function isValidColor(color) {
  return (
    color.red >= 0 &&
    color.red <= 255 &&
    color.green >= 0 &&
    color.green <= 255 &&
    color.blue >= 0 &&
    color.blue <= 255
  );
}
// …
```

Pero con las clases, podemos agruparlas todas bajo el espacio de nombres `Color`, lo que mejora la legibilidad. Además, la introducción de los campos privados nos permite ocultar ciertos datos a los usuarios posteriores, creando una API limpia.

En general, deberías plantearte usar clases cuando quieras crear objetos que guarden sus propios datos internos y expongan mucho comportamiento. Toma como ejemplo las clases integradas de JavaScript:

- Las clases [`Map`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map) y [`Set`](/es/docs/Web/JavaScript/Reference/Global_Objects/Set) guardan una colección de elementos y te permiten acceder a ellos por su clave con `get()`, `set()`, `has()`, etc.
- La clase [`Date`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date) guarda una fecha como una marca de tiempo Unix (un número) y te permite dar formato a los componentes individuales de la fecha, actualizarlos y leerlos.
- La clase [`Error`](/es/docs/Web/JavaScript/Reference/Global_Objects/Error) guarda información sobre una excepción concreta, incluidos el mensaje de error, la traza de la pila, la causa, etc. Es una de las pocas clases que vienen con una estructura de herencia rica: hay varias clases integradas, como [`TypeError`](/es/docs/Web/JavaScript/Reference/Global_Objects/TypeError) y [`ReferenceError`](/es/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), que heredan de `Error`. En el caso de los errores, esta herencia permite afinar la semántica de los errores: cada clase de error representa un tipo concreto de error, que se puede comprobar fácilmente con [`instanceof`](/es/docs/Web/JavaScript/Reference/Operators/instanceof).

JavaScript ofrece el mecanismo para organizar el código de una forma canónica orientada a objetos, pero si se usa y cómo se usa queda por completo a criterio de cada programador.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
