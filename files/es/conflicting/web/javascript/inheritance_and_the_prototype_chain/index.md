---
title: Detalles del modelo de objetos
slug: conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain
original_slug: Web/JavaScript/Guide/Details_of_the_Object_Model
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Iterators_and_Generators")}}

JavaScript es un lenguaje orientado a objetos basado en prototipos en lugar de clases. Debido a esta diferencia, puede ser menos evidente cómo JavaScript te permite crear jerarquías de objetos y herencia de propiedades y sus valores. Este capítulo intenta clarificar estos puntos.

Este capítulo asume que tienes alguna familiaridad con JavaScript y que has usado funciones de JavaScript para crear objetos sencillos.

## Lenguajes basados en clases vs. basados en prototipos

Los lenguajes orientados a objetos basados en clases, como Java y C++, se basan en el concepto de dos entidades distintas: clases e instancias.

- Una _clase_ define todas las propiedades (considerando como propiedades los métodos y campos de Java, o los miembros de C++) que caracterizan un determinado conjunto de objetos. Una clase es una entidad abstracta, más que cualquier miembro en particular del conjunto de objetos que describe. Por ejemplo, la clase `Empleado` puede representar al conjunto de todos los empleados.
- Una _instancia_, por otro lado, es la instanciación de una clase; es decir, uno de sus miembros. Por ejemplo, `Victoria` podría ser una instancia de la clase `Empleado`, representando a un individuo en particular como un empleado. Una instancia tiene exactamente las mismas propiedades de su clase padre (ni más, ni menos).

Un lenguaje basado en prototipos, como JavaScript, no hace esta distinción: simplemente tiene objetos. Un lenguaje basado en prototipos toma el concepto de _objeto prototípico_, un objeto que se utiliza como una plantilla a partir de la cual se obtiene el conjunto inicial de propiedades de un nuevo objeto. Cualquier objeto puede especificar sus propias propiedades, ya sea cuando es creado o en tiempo de ejecución. Adicionalmente, cualquier objeto puede ser utilizado como el _prototipo_ de otro objeto, permitiendo al segundo objeto compartir las propiedades del primero.

### Definición de una clase

En los lenguajes basados en clases defines una clase en una _definición de clase_ separada. En esa definición puedes especificar métodos especiales, llamados _constructores_, para crear instancias de la clase. Un método constructor puede especificar valores iniciales para las propiedades de la instancia y realizar otro procesamiento de inicialización apropiado en el momento de la creación. Se utiliza el operador `new` junto al constructor para crear instancias de clases.

JavaScript sigue un modelo similar, pero sin tener la definición de clase separada del constructor. En su lugar, se define una función constructor para crear objetos con un conjunto inicial de propiedades y valores. Cualquier función JavaScript puede utilizarse como constructor. Se utiliza el operador `new` con una función constructor para crear un nuevo objeto.

> [!NOTE]
> Nota que ECMAScript 2015 introduce la [declaración de clases](/es/docs/Web/JavaScript/Reference/Classes):
>
> > Las Clases en JavaScript, introducidas en ECMAScript 2015, son básicamente un retoque sintáctico sobre la herencia basada en prototipos de JavaScript. La sintaxis _class_ no introduce un nuevo modelo de herencia orientado a objetos en Javascript.

### Subclases y herencia

En un lenguaje basado en clases, creas una jerarquía de clases a través de la definición de clases. En una definición de clase, puedes especificar que la nueva clase es una _subclase_ de una clase existente. Esta subclase hereda todas las propiedades de la superclase y - además -puede añadir nuevas propiedades o modificar las heredadas. Por ejemplo, supongamos que la clase `Employee` tiene sólo las propiedades `name` y `dept`, y que `Manager` es una subclase de `Employee` que añade la propiedad `reports`. En este caso, una instancia de la clase `Manager` tendría las tres propiedades: `name`, `dept`, y `reports`.

JavaScript implementa la herencia permitiendo asociar un objeto prototípico con cualquier función _constructor_. De esta forma puedes crear una relación entre `Employee` y `Manager`, pero usando una terminología diferente. En primer lugar, se define la función _constructor_ para `Employee, `especificando las propiedades `name` y `dept`. Luego, se define la función _constructor_ para `Manager`, especificando la propiedad `reports`. Por último, se asigna un nuevo objeto derivado de `Employee.prototype` como el `prototype` para la función _constructor_ de `Manager`. De esta forma, cuando se crea un nuevo `Manager`, este hereda las propiedades `name` y `dept` del objeto `Employee`.

### Añadir y quitar propiedades

En lenguajes basados en clases típicamente se crea una clase en tiempo de compilación y luego se crean instancias de la clase, ya sea en tiempo de compilación o en tiempo de ejecución. No se puede cambiar el número o el tipo de propiedades de una clase una vez que ha sido definida. En JavaScript, sin embargo, en tiempo de ejecución se pueden añadir y quitar propiedades a un objeto. Si se añade una propiedad a un objeto que está siendo utilizado como el prototipo de otros objetos, los objetos para los que es un prototipo también tienen la nueva propiedad añadida.

### Resumen de las diferencias

La siguiente tabla muestra un pequeño resumen de algunas de estas diferencias. El resto de este capítulo describe los detalles del uso de los constructores JavaScript y los prototipos para crear una jerarquía de objetos, y compara esta forma de herencia no basada en clases con la basada en clases que utiliza Java.

| **Categoría**                            | **Basado en clases (Java)**                                                                                                                                              | **Basado en prototipos (JavaScript)**                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clase vs. Instancia**                  | La clase y su instancia son entidades distintas.                                                                                                                         | Todos los objetos pueden heredar de otro objeto.                                                                                                                                               |
| **Definición**                           | Define una clase con una definición _class_; se instancia una clase con métodos constructores.                                                                           | Define y crea un conjunto de objetos con funciones constructoras.                                                                                                                              |
| **Creación de objeto**                   | Se crea un objeto con el operador `new`.                                                                                                                                 | Se crea un objeto con el operador `new`.                                                                                                                                                       |
| **Construcción de jerarquía de objetos** | Se construye una jerarquía de objetos utilizando definiciones de clases para definir subclases de clases existentes.                                                     | Se construye una jerarquía de objetos mediante la asignación de un objeto como el prototipo asociado a una función constructora.                                                               |
| **Herencia**                             | Se heredan propiedades siguiendo la cadena de clases.                                                                                                                    | Se heredan propiedades siguiendo la cadena de prototipos.                                                                                                                                      |
| **Extensión de propiedades**             | La definición de una clase especifica _todas_ las propiedades de todas las instancias de esa clase. No se puede añadir propiedades dinámicamente en tiempo de ejecución. | El conjunto _inicial_ de propiedades lo determina la función constructor o el prototipo. Se pueden añadir y quitar propiedades dinámicamente a objetos específicos o a un conjunto de objetos. |

## El ejemplo employee

El resto de este capitulo utiliza la jerarquía `employee` que se muestra en la siguiente figura.

![](figure8.1.png)

**Figura 8.1: Una jerarquía de objetos sencilla**

Este ejemplo utiliza los siguientes objetos:

- `Employee` tiene las propiedades `name` (cuyo valor por defecto es un string vacío) y `dept` (cuyo valor por defecto es "general").
- `Manager` está basado en `Employee`. Añade la propiedad` reports` (cuyo valor por defecto es un array vacío, en la que se pretende almacenar un array de objetos `Employee` como su valor).
- `WorkerBee` también está basado en `Employee`. Añade la propiedad `projects` (cuyo valor por defecto es un array vacío en el que se pretende almacenar un array de strings como su valor).
- `SalesPerson` está basado en `WorkerBee`. Añade la propiedad `quota` (cuyo valor por defecto es 100). También reemplaza la propiedad `dept` con el valor "sales", indicando que todas las salespersons están en el mismo departamento.
- `Engineer` se basa en `WorkerBee`. Añade la propiedad `machine` (cuyo valor por defecto es un string vacío) y también reemplaza la propiedad `dept` con el valor "engineering".

<!---->

## Creación de la jerarquía

Hay varias formas de definir funciones constructor para implementar la jerarquía Employee. Elegir una u otra forma depende sobre todo de lo que quieras y puedas ser capaz de hacer con tu aplicación.

Esta sección muestra como utilizar definiciones muy sencillas (y comparativamente inflexibles) para mostrar como hacer funcionar la herencia. En estas definiciones no puedes especificar valores de propiedades cuando creas un objeto. El nuevo objeto que se crea simplemente obtiene valores por defecto, que puedes cambiar posteriormente. La figura 8.2 muestra la jerarquía con estas definiciones sencillas.

En una aplicación real probablemente definirías constructores que proporcionen valores a las propiedades en el momento de la creación del objeto (para más información ver [Constructores más flexibles](#more_flexible_constructors)). Por ahora, estas definiciones sencillas nos sirven para mostrar como funciona la herencia.

![figure8.2.png](figure8.2.png)
**Figura 8.2: Definiciones de los objetos de la jerarquía Employee**

Las siguientes definiciones de `Employee` en Java y en Javascript son similares, la única diferencia es que en Java necesitas especificar el tipo para cada propiedad, no así en Javascript (esto es debido a que Java es un [lenguaje fuertemente tipado](https://es.wikipedia.org/wiki/Tipado_fuerte), mientras que Javascript es un lenguaje débilmente tipado).

#### JavaScript

```js
function Employee () {
  this.name = "";
  this.dept = "general";
}
```

#### Java

```java
public class Employee {
   public String name;
   public String dept;
   public Employee () {
      this.name = "";
      this.dept = "general";
   }
```

Las definiciones de `Manager` y `WorkerBee` ilustran la diferencia a la hora de especificar el siguiente objeto en la jerarquía de herencia. En JavaScript se añade una instancia prototípica como el valor de la propiedad `prototype` de la función constructora, así sobre escribe `prototype.constructor` con la función constructora. Puede hacerse en cualquier momento una vez definido el constructor. En Java se especifica la superclase en la definición de la clase. No se puede cambiar la superclase fuera de la definición de la clase.

#### JavaScript

```js
function Manager () {
  this.reports = [];
}
Manager.prototype = new Employee;

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
```

#### Java

```java
public class Manager extends Employee {
   public Employee[] reports;
   public Manager () {
      this.reports = new Employee[0];
   }
}

public class WorkerBee extends Employee {
   public String[] projects;
   public WorkerBee () {
      this.projects = new String[0];
   }
```

Las definiciones de `Engineer` y `SalesPerson` crean objetos que descienden de `WorkerBee` y por tanto de `Employee`. Un objeto de éste tipo tiene todas las propiedades de los objetos por encima de él en la cadena. Además, estas definiciones reemplazan los valores heredados de la propiedad `dept` con nuevos valores específicos para estos objetos.

#### JavaScript

```js
function SalesPerson () {
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer () {
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = new WorkerBee;
```

#### Java

```java
public class SalesPerson extends WorkerBee {
   public double quota;
   public SalesPerson () {
      this.dept = "sales";
      this.quota = 100.0;
   }
}

public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      this.dept = "engineering";
      this.machine = "";
   }
}
```

Usando estas definiciones puedes crear instancias de estos objetos, que adquieren valores por defecto para sus propiedades. La figura 8.3 revela el uso de estas definiciones JavaScript para crear nuevos objetos y muestra los valores de las propiedades de estos nuevos objetos.

> [!NOTE]
> El termino **instancia** tiene un significado técnico específico en lenguajes basados en clases, donde una instancia es un ejemplar individual de una clase y es fundamentalmente diferente a la clase. En JavaScript, "instancia" no tiene este mismo significado ya que JavaScript no hace diferencia entre clases e instancias. Sin embargo, al hablar de JavaScript, "instancia" puede ser usado informalmente para indicar que un objeto ha sido creado usando una función constructora particular. En este ejemplo, puedes decir que `jane` es una instancia de `Engineer`. De la misma manera, aunque los términos _parent_, _child_, _ancestor_, y _descendant_ no tienen un significado formal en JavaScript; puedes usarlos informalmente para referirte a objetos que están por encima o por debajo de la cadena de prototipos.

### Creando objetos con definiciones simples

La jerarquía de objetos que se muestra en la figura se corresponde con el código escrito en el lado derecho.

![figure8.3.png](figure8.3.png)
**Figura 8.3: Creación de objetos mediante definiciones simples**

**Objetos individuales = Jim, Sally, Mark, Fred, Jane, etc.
"Instancias" creadas con `constructor`**

## Propiedades de objetos

Esta sección describe cómo heredan los objetos sus propiedades de otros objetos en la cadena de prototipos y qué ocurre cuando se añade una propiedad en tiempo de ejecución.

### Herencia de propiedades

Supongamos que creas el objeto `mark` como un `WorkerBee` (como se muestra en la [Figura 8.3](#8.3)) con la siguiente sentencia:

```js
var mark = new WorkerBee;
```

Cuando el intérprete de JavaScript encuentra el operador `new`, crea un nuevo objeto genérico y establece implícitamente el valor de la propiedad interna \[\[Prototype]] con el valor de `WorkerBee.prototype` y pasa este nuevo objeto como `this` a la función constructora de WorkerBee. La propiedad interna \[\[Prototype]] (que puede observarse como `__proto__`, la propiedad cuyo nombe tiene dos guiones al principio y al final) determina la cadena de prototipo usada para devolver los valores de la propiedades cuando se accede a ellas. Una vez que estas propiedades tienen sus valores, JavaScript devuelve el nuevo objeto y la sentencia de asignación asigna el nuevo objeto ya inicializado a la variable `mark`.

Este proceso no asigna explícitamente valores al objeto `mark` (valores _locales_) para las propiedades que `mark` hereda de la cadena de prototipos. Cuando solicitas valor de una propiedad, JavaScript primero comprueba si existe un valor para esa propiedad en el objeto. Si existe, se devuelve ese valor; sino, JavaScript comprueba la cadena de prototipos (usando la propiedad `__proto__`). Si un objeto en la cadena de prototipos tiene un valor para esa propiedad, se devuelve ese valor. Si no existe en ningún objeto de la cadena de prototipos un valor para esa propiedad, JavaScript dice que el objeto no tiene esa propiedad. En el caso de nuestro objeto `mark`, éste tiene las siguientes propiedades y valores:

```js
mark.name = "";
mark.dept = "general";
mark.projects = [];
```

El objeto `mark` hereda valores para las propiedades `name` y `dept` su objeto prototipico que enlaza en `mark.__proto__`. Se le asigna un valor local la propiedad `projects` a través del constructor `WorkerBee`. De esta forma se heredan propiedades y sus valores en JavaScript. En la sección [Property inheritance revisited](#property_inheritance_revisited) se discuten algunos detalles de este proceso.

Debido a que estos constructores no permiten especificar valores específicos de instancia, esta información es genérica. Los valores de las propiedades son los valores por omisión, compartidos por todos los objetos nuevos creados a partir de `WorkerBee`. Por supuesto se pueden cambiar después los valores de estas propiedades. Por ejemplo podríamos dar valores con información específica a `mark` de la siguiente forma:

```js
mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];
```

### Añadir propiedades

En JavaScript puedes añadir propiedades a los objetos en tiempo de ejecución. No estás limitado a utilizar solo las propiedades que proporciona la función constructora. Para añadir una propiedad que es especifica para un objeto determinado, se le asigna un valor a la propiedad del objeto de la siguiente forma:

```js
mark.bonus = 3000;
```

Ahora el objeto `mark` tiene una propiedad `bonus`, pero ningún otro objeto creado con la función _constructor_ `WorkerBee` tiene esta propiedad.

Si añades una nueva propiedad a un objeto que se esta utilizando como el prototipo de una función _constructor_, dicha propiedad se añade a todos los objetos que heredan propiedades de dicho prototipo. Por ejemplo, puedes añadir una propiedad `specialty` a todos los empleados con la siguientes sentencia:

```js
Employee.prototype.specialty = "none";
```

Tan pronto JavaScript ejecuta esta sentencia, el objeto `mark` también tienen la propiedad `specialty` con el valor `"none"`. La siguiente figura muestra el efecto de añadir esta propiedad al prototipo `Employee` y después reemplazarlo por el prototipo `Engineer`.

![](figure8.4.png)
**Figura 8.4: Añadir propiedades**

## Constructores más flexibles

Las funciones constructor que se han mostrado hasta ahora no permiten especificar valores a las propiedades cuando se crea una instancia. Al igual que en Java, se pueden proporcionar argumentos a los constructores para inicializar los valores de las propiedades de las instancias. La siguiente figura muestra una forma de hacerlo.

![](figure8.5.png)
**Figura 8.5: Especificación de propiedades en un construcción, toma 1**

La siguiente tabla muestra las definiciones Java y JavaScript para estos objetos.

#### JavaScript

```js
function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}
```

#### Java

```java
public class Employee {
   public String name;
   public String dept;
   public Employee () {
      this("", "general");
   }
   public Employee (String name) {
      this(name, "general");
   }
   public Employee (String name, String dept) {
      this.name = name;
      this.dept = dept;
   }
}
```

#### JavaScript

```js
function WorkerBee (projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;
```

#### Java

```java
public class WorkerBee extends Employee {
   public String[] projects;
   public WorkerBee () {
      this(new String[0]);
   }
   public WorkerBee (String[] projs) {
      projects = projs;
   }
}
```

#### JavaScript

```js

function Engineer (mach) {
   this.dept = "engineering";
   this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;
```

#### Java

```java
public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      dept = "engineering";
      machine = "";
   }
   public Engineer (String mach) {
      dept = "engineering";
      machine = mach;
   }
}
```

Estas definiciones JavaScript realizan un uso idiomático especial para asignar valores por defecto:

```js
this.name = name || "";
```

El operador lógico OR de JavaScript (`||`) evalúa su primer argumento. Si dicho argumento se convierte a true, el operador lo devuelve. Si no, el operador devuelve el valor del segundo argumento. Por tanto, esta linea de código comprueba si `name` tiene un valor útil para la propiedad `name`, en cuyo caso asigna a `this.name` este valor. En caso contrario asigna a `this.name` el string vacío. Este capitulo emplea este uso idiomático por abreviación. Sin embargo puede resultar chocante a primera vista.

> [!NOTE]
> Esto puede no resultar según lo esperado si la función _constructor_ es llamada con argumentos que se convierten a `false` (como `0` (cero) y una cadena vacía (`""`). En este caso el valor por defecto resulta elegido en lugar del valor proporcionado en la llamada al constructor.

Con estas definiciones, cuando creas una instancia de un objeto, puedes especificar valores para las propiedades definidas localmente. Tal como se muestra en [Figura 8.5](#8.5), puedes utilizar la siguiente sentencia para crear un nuevo `Engineer`:

```js
var jane = new Engineer("belau");
```

Ahora las propiedades de `jane` son:

```js
jane.name == "";
jane.dept == "engineering";
jane.projects == [];
jane.machine == "belau"
```

Nota que con estas definiciones no puedes dar un valor inicial a las propiedades heredadas como `name`. Si quieres especificar un valor inicial para las propiedades heredadas en JavaScript tienes que que añadir más código a la función constructora.

Hasta ahora, la función constructora ha creado un objeto genérico y ha especificado propiedades y valores locales para el nuevo objeto. Puedes hacer que el constructor añada más propiedades llamando directamente a la función _constructor_ de un objeto que esté más arriba en la cadena de prototipos. La siguiente figura muestra estas definiciones.

![](figure8.6.png)
**Figura 8.6 Especificación de propiedades en un constructor, toma 2**

Veamos los detalles de una de estas definiciones. Aquí tenemos la nueva definición del _constructor_ `Engineer`:

```js
function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
```

Supongamos que se crea un nuevo `Engineer` de esta forma:

```js
var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
```

JavaScript sigue los siguientes pasos:

1.  El operador `new` crea un nuevo objeto genérico y le asigna su propiedad `__proto__` a `Engineer.prototype`.
2.  El operador `new` pasa el nuevo objeto al _constructor_ `Engineer` como el valor de la palabra reservada `this`.
3.  El _constructor_ crea una nueva propiedad llamada `base` para ese objeto y le asigna el valor del constructor `WorkerBee`. Esto hace que el constructor `WorkerBee` pase a ser un método del objeto `Engineer`. El nombre de esta propiedad (`base`) no es especial. Puede usarse cualquier nombre de propiedad, si bien `base` evoca el uso que se le va a dar.
4.  El constructor llama al método `base`, pasándole como argumentos dos de los argumentos que se le han pasado al constructor (`"Doe, Jane"` y `["navigator", "javascript"]`) y también el string `"engineering"`. Usar explícitamente `"engineering"` en el constructor indica que todos los objetos `Engineer` tienen el mismo valor para la propiedad heredada `dept`, y este valor reemplaza el valor heredado de `Employee`.
5.  Como `base` es un método de `Engineer`, en la llamada a `base`, JavaScript liga la palabra `this` al objeto creado en el paso 1. De esta forma, la función `WorkerBee` a su vez pasa los argumentos `"Doe, Jane"` y `"engineering"` a la función constructor `Employee`. Cuando retorna la llamada de la función constructor `Employee`, la función `WorkerBee` utiliza el resto de argumentos para asignarle un valor a la propiedad `projects`.
6.  Cuando la llamada al método `base` retorna, el constructor `Engineer` inicializa la propiedad `machine` del objeto con el valor`"belau"`.
7.  Una vez creado, JavaScript asigna el nuevo objeto a la variable `jane`.

Podrías pensar que al haber llamado al constructor `WorkerBee` desde el constructor `Engineer` ya dejas establecida la herencia para los objetos `Engineer`. Pero no es así. Al llamar al constructor `WorkerBee` se garantiza que un objeto `Engineer` comience con las propiedades especificadas en todas las funciones del constructor que se llaman. Pero si luego se añaden propiedades a los prototipos de `Employee` o de `WorkerBee`, estas propiedades no se heredan por los objetos `Engineer`. Por ejemplo, veamos las siguientes sentencias:

```js
function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
Employee.prototype.specialty = "none";
```

El objeto `jane` no hereda la propiedad `specialty` añadida al prototipo de `Employee`. Sigue siendo necesario dar valor al prototipo de `Employee` para que la herencia buscada se establezca. Veamos las siguientes sentencias:

```js
function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;
var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
Employee.prototype.specialty = "none";
```

Ahora el valor de la propiedad `specialty `del objeto` jane` si es "none".

Otra forma de llamar al constructor es mediante el uso de los métodos [`call()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call) / [`apply()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply):

#### JavaScript

```js
function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
```

#### Java

```js
function Engineer (name, projs, mach) {
  WorkerBee.call(this, name, "engineering", projs);
  this.machine = mach || "";
}
```

Usar el método Javascript `call()` da como resultado una implementación más limpia ya que `base` ya no es necesaria. Mediante `call()` se llama a la función constructor `WorkerBee` como un método, pasándole explícitamente `this`. El efecto es el mismo que el producido al llamar al constructor a través de la propiedad `base`: en la llamada a `WorkerBee`, `this `está ligado al objeto que se está creando en `Engineer.`

## Herencia de propiedades revisada

Las secciones precedentes describieron como los constructores y prototipos de JavaScript jerarquías y herencia. En esta sección se discuten algunas sutilezas que no fueron necesariamente evidentes en las discusiones anteriores.

### Valores locales frente a valores heredados

Cuando accedes a una propiedad de un objeto, JavaScript realiza estos pasos, tal como se describió más arriba en este capítulo:

1.  Comprueba si el valor existe localmente. Si existe, se devuelve ese valor.
2.  Si no existe un valor local, comprueba la cadena de prototipos (usando la propiedad `__proto__`).
3.  Si algún objeto en la cadena de prototipos tiene un valor para la propiedad especificada, devuelve ese valor.
4.  Si no encuentra la propiedad en la cadena de prototipos, el objeto no tiene la propiedad.

El resultado de estos pasos depende de cómo se definan las cosas en el camino. El ejemplo original tenía estas definiciones:

```js
function Employee () {
  this.name = "";
  this.dept = "general";
}

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;
```

Con estas definiciones, supongamos que se crea `amy` como una instancia de `WorkerBee` con la siguiente sentencia:

```js
var amy = new WorkerBee;
```

El objeto `amy` tiene una propiedad local, `projects`. Los valores de las propiedades `name` y `dept` no son locales para `amy` y por eso se obtienen de la propiedad `__proto__` del objeto. Por ello, `amy` tiene estos valores en sus propiedades:

```js
amy.name == "";
amy.dept == "general";
amy.projects == [];
```

Ahora supongamos que cambias el valor de la propiedad `name` en el prototipo asociado a `Employee`:

```js
Employee.prototype.name = "Unknown"
```

A primera vista, esperarías que el nuevo valor se propague hacia abajo a todas las instancias de `Employee`. Pero no es esto lo que ocurre.

Cuando se crea una instancia del objeto `Employee`, ésta obtiene un valor local para la propiedad `name` (la cadena vacía). Esto significa que cuando se da valor al prototipo de `WorkerBee` mediante la creación de un nuevo objeto `Employee`, `WorkerBee.prototype` tiene un valor local para la propiedad `name`. Por tanto, cuando JavaScript busca la propiedad `name` del objeto `amy` (una instancia de `WorkerBee`), JavaScript encuentra el valor local de esa propiedad en `WorkerBee.prototype`. Por tanto no busca más arriba en la cadena hasta `Employee.prototype`.

Si quieres cambiar el valor de una propiedad de un objeto en tiempo de ejecución y conseguir que el nuevo valor sea heredado por todos los descendientes del objeto, no puedes definir la propiedad en la función constructor del objeto. En su lugar, la tienes que añadir al prototipo asociado al constructor. Por ejemplo, supongamos que cambiamos el código anterior por este otro:

```js
function Employee () {
  this.dept = "general";
}
Employee.prototype.name = "";

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;

Employee.prototype.name = "Unknown";
```

En este caso, la propiedad `name` de `amy` si pasa a ser "Unknown" tras la ultima sentencia.

Tal como muestran estos ejemplos, si quieres tener valores por defecto para propiedades de objetos, y se necesitas cambiar los valores por defecto en tiempo de ejecución, tienes que asignar las propiedades al prototipo del constructor, y no asignarlas dentro de la función _constructor_.

### Determinar las relaciones entre instancias

La búsqueda de propiedades en la cadena de prototipos comienza en las propiedades locales del objeto y si no se encuentran localmente, se busca a través de la propiedad `__proto__` del objeto. La búsqueda continúa recursivamente, conociéndose como "búsqueda en la cadena de prototipos".

La propiedad especial `__proto__` de un objeto recibe su valor en el momento en el que es creado; se le asigna el valor de la propiedad `prototype` de la función _constructor_ usada para crear el objeto. Así, la expresión `new Foo()` crea un objeto con `__proto__ == Foo.prototype`. Por tanto, los cambios que se realicen en las propiedades de `Foo.prototype` alteraran la búsqueda de propiedades de todos los objetos que se crearon mediante` new Foo()`.

Todo objeto tiene una propiedad `__proto__` (salvo `Object`); toda función tiene una propiedad `prototype`. Es así como los objetos pueden relacionarse mediante 'herencia de prototipos' con otros objetos. Puedes comprobar la herencia comparando el valor de la propiedad `__proto__` con el valor de `prototype` de una función _constructor_. JavaScript proporciona un atajo: el operador `instanceof` que compara un objeto con una función _constructor_ y devuelve true si el objeto hereda del prototipo de la función. Por ejemplo,

```js
var f = new Foo();
var isTrue = (f instanceof Foo);
```

Para ver un ejemplo más detallado, supongamos que tenemos el conjunto de definiciones mostrado en [heredando propiedades](#inheriting_properties). Creamos un objeto `Engineer` somo sigue:

```js
var chris = new Engineer("Pigman, Chris", ["jsd"], "fiji");
```

En este objeto, las siguientes sentencias son todas true:

```js
chris.__proto__ == Engineer.prototype;
chris.__proto__.__proto__ == WorkerBee.prototype;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;
```

Por tanto podría escribirse una función `instanceOf` así:

```js
function instanceOf(object, constructor) {
   while (object != null) {
      if (object == constructor.prototype)
         return true;
      if (typeof object == 'xml') {
        return constructor.prototype == XML.prototype;
      }
      object = object.__proto__;
   }
   return false;
}
```

> [!NOTE]
> La implementación anterior compara el tipo del objeto con "xml" para soslayar un pequeño problema sobre como se representan los objetos XML en las versiones recientes de JavaScript. Ver [Error 634150 en Firefox](https://bugzil.la/634150) para entender los detalles.

Usando esta función `instanceOf` estas expresiones son todas `true`:

```js
instanceOf (chris, Engineer)
instanceOf (chris, WorkerBee)
instanceOf (chris, Employee)
instanceOf (chris, Object)
```

Pero la siguiente expresión es `false`:

```js
instanceOf (chris, SalesPerson)
```

### Información global en los constructores

Cuando creas constructores tienes que tener especial cuidado si se asigna información global en el constructor. Por ejemplo, supongamos que quieres tener un ID único que se asigne automáticamente a cada nuevo empleado. Podrías utilizar la siguiente definición para `Employee`:

```js
var idCounter = 1;

function Employee (name, dept) {
   this.name = name || "";
   this.dept = dept || "general";
   this.id = idCounter++;
}
```

Con esta definición, cuando cread un nuevo `Employee`, el constructor le asigna el siguiente ID y luego incrementa el contador global ID. Por tanto, tras ejecutar el siguiente código, `victoria.id` es 1 y `harry.id` es 2:

```js
var victoria = new Employee("Pigbert, Victoria", "pubs")
var harry = new Employee("Tschopik, Harry", "sales")
```

A primera vista puede parecer razonable. Sin embargo, `idCounter` se incrementa cada vez que se crea un nuevo objeto `Employee`, cualquiera que sea su propósito. Si creas la jerarquía completa de `Employee` mostrada en este capítulo, el constructor `Employee` es llamado cada vez que se asigna valor a un prototipo. Supongamos que tienes el siguiente código:

```js
var idCounter = 1;

function Employee (name, dept) {
   this.name = name || "";
   this.dept = dept || "general";
   this.id = idCounter++;
}

function Manager (name, dept, reports) {...}
Manager.prototype = new Employee;

function WorkerBee (name, dept, projs) {...}
WorkerBee.prototype = new Employee;

function Engineer (name, projs, mach) {...}
Engineer.prototype = new WorkerBee;

function SalesPerson (name, projs, quota) {...}
SalesPerson.prototype = new WorkerBee;

var mac = new Engineer("Wood, Mac");
```

Supongamos además que las definiciones que se omiten tienen la propiedad `base` y se llama al constructor que tienen encima en la cadena de prototipos. En este caso, cuando se llega a crear el objeto `mac`, `mac.id` es 5.

Dependiendo de la aplicación, puede o no importar que el contador se haya incrementado esas veces extra. En caso de que importe, una solución es utilizar este constructor:

```js
function Employee (name, dept) {
   this.name = name || "";
   this.dept = dept || "general";
   if (name)
      this.id = idCounter++;
}
```

Cuando se crea una instancia de `Employee` para usarla como prototipo, no se especifican argumentos para el constructor. Mediante esta definición del constructor, cuando no se proporcionan argumentos, el constructor no asigna un valor al id y no actualiza el contador. Por tanto, para que se asigne a un `Employee` un id, hay que especificar un `name` al employee. En este caso `mac.id` seria 1.

### Sin herencia múltiple

Algunos lenguajes orientados a objetos tienen herencia múltiple. Es decir, un objeto puede heredar las propiedades y valores de varios objetos padre distintos. JavaScript no proporciona herencia múltiple.

La herencia de valores de propiedades se produce en tiempo de ejecución por JavaScript buscando en la cadena de prototipos de un objeto para encontrar un valor. Debido a que un objeto tiene un solo prototipo asociado, JavaScript no puede heredar dinámicamente de más de una cadena de prototipos.

En JavaScript se puede hacer que desde una función constructor llame a una o más funciones _constructor_. Esto da la ilusión de herencia múltiple. Considera, por ejemplo, las siguientes definiciones:

```js
function Hobbyist (hobby) {
   this.hobby = hobby || "scuba";
}

function Engineer (name, projs, mach, hobby) {
   this.base1 = WorkerBee;
   this.base1(name, "engineering", projs);
   this.base2 = Hobbyist;
   this.base2(hobby);
   this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer("Doe, Dennis", ["collabra"], "hugo")
```

Consideremos, además, la definición de `WorkerBee` que se usó antes en este capítulo. En este caso, el objeto `dennis` tiene estas propiedades:

```js
dennis.name == "Doe, Dennis"
dennis.dept == "engineering"
dennis.projects == ["collabra"]
dennis.machine == "hugo"
dennis.hobby == "scuba"
```

Por tanto `dennis` obtiene la propiedad `hobby` del constructor` Hobbyist` . Sin embargo, si luego añades una propiedad al prototipo del constructor de `Hobbyist`:

```js
Hobbyist.prototype.equipment = ["mask", "fins", "regulator", "bcd"]
```

El objeto `dennis` no hereda esta nueva propiedad porque no está en su cadena de prototipos.

{{PreviousNext("Web/JavaScript/Guide/Working_with_Objects", "Web/JavaScript/Guide/Iterators_and_Generators")}}
