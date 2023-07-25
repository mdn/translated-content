---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

El objeto `Proxy` permite crear un intermediario para otro objeto, el cual
puede interceptar y redefinir operaciones fundamentales para dicho objeto.

## Descripción

Un `Proxy` se crea con dos parámetros:

- `target`: el objeto original que se quiere envolver.
- `handler`: un objeto que define cuáles operaciones serán interceptadas y cómo
  redefinir dichas operaciones.

Por ejemplo, este código define un objeto simple que tiene solo dos propiedades,
y un manipulador más simple aún que no tiene propiedades:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Ya que el manipulador está vacío, este proxy se comporta justo como el objeto
original:

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

Para personalizar el intermediario, definimos funciones en el objeto
manipulador:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get: function (target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```

Aquí hemos provisto una implementación del manipulador
{{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}}, el cual intercepta los
intentos de acceder a las propiedades del objeto envuelto.

Las funciones manipuladoras son llamadas a menudo _trampas_, probablemente
proque atrapan las llamadas al objeto envuelto. La trampa simple de arriba en
`handler2` redefine todos los accesores de propiedades:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Con la ayuda de la clase {{jsxref("Reflect")}} podemos darle a algunos accesores
el comportamiento original y redefinir otros:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get: function (target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

## Constructor

- {{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}
  - : Crea un nuevo objeto `Proxy`.

## Métodos estáticos

- {{jsxref("Proxy.revocable()")}}
  - : Crea un objeto `Proxy` revocable.

## Ejemplos

### Ejemplo básico

En este ejemplo, el número `37` es devuelto como valor pordefecto cuando el
nombre de propiedad no está en el objeto. Se realiza usando el manipulador
{{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}}.

```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
//  1, undefined

console.log("c" in p, p.c);
//  false, 37
```

### Proxy sin modificaciones

En este ejemplo se usa un objeto nativo de JavaScript para el cual el _proxy_
reenviará todas las operaciones que se le apliquen.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37;
//  operación reenviada al objeto envuelto

console.log(target.a);
//  37
//  (¡La operación ha sido reenviada correctamente!)
```

Nótese que mientras que esto funciona para objetos JavaScript, no lo hace para
objetos nativos del navegador como Elementos del DOM.

### Validación

Con un `Proxy`, puedes puedes validar fácilmente el valor enviado para un
objeto. Este ejemplo usa el manipulador
{{jsxref("Global_Objects/Proxy/Proxy/set", "set()")}}.

```js
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("La edad no es un entero");
      }
      if (value > 200) {
        throw new RangeError("La edad parece inválida");
      }
    }

    // El comportamiento por defecto es almacenar el valor
    obj[prop] = value;

    // Indica éxito
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Lanza una excepción
person.age = 300; // Lanza una excepción
```

### Extendiendo el constructor

Una función intermediaria podría fácilmente extender un constructor con un nuevo
constructor. Este ejemplo usa los manipuladores
{{jsxref("Global_Objects/Proxy/Proxy/construct", "construct()")}} y
{{jsxref("Global_Objects/Proxy/Proxy/apply", "apply()")}}.

```js
function extend(sup, base) {
  base.prototype = Object.create(sup.prototype);
  base.prototype.constructor = new Proxy(base, {
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  });
  return base.prototype.constructor;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.gender = "M";

var Peter = new Boy("Peter", 13);

console.log(Peter.gender); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

### Manipulando nodos del DOM

A veces querrás alternar algún atributo o clase de dos elementos distintos. En
este ejemplo se explica cómo lo puedes hacer usando el manipulador
{{jsxref("Global_Objects/Proxy/Proxy/set", "set()")}}.

```js
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // El comportamiento por defecto es almacenar el valor
    obj[prop] = newval;

    // Indica éxito
    return true;
  }
});

let i1 = view.selected = document.getElementById('item-1');  //da error aquí, i1 es null
console.log(i1.getAttribute('aria-selected'));
//  'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected'));
//  'false'

console.log(i2.getAttribute('aria-selected'));
//  'true'
Note: even if selected: !null, then giving oldval.setAttribute is not a function
```

### Corrección de valor y una propiedad extra

El objeto intermediario `products` evalúa el valor pasado y lo convierte en un
array de ser necesario. El objeto también soporta una propiedad extra llamada
`latestBrowser` tanto como _getter_ y como _setter_.

```js
let products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get: function (obj, prop) {
      // Una propiedad extra
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // El comportamiento por defecto es retornar el valor
      return obj[prop];
    },
    set: function (obj, prop, value) {
      // Una propiedad extra
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Convierte el valor si no es un array
      if (typeof value === "string") {
        value = [value];
      }

      // El comportamiento por defecto es almacenar el valor
      obj[prop] = value;

      // Indica éxito
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Internet Explorer', 'Netscape']

products.browsers = "Firefox";
//  pasa una cadena (por error)

console.log(products.browsers);
//  ['Firefox'] <- no hay problema, el valor es un arreglo

products.latestBrowser = "Chrome";

console.log(products.browsers);
//  ['Firefox', 'Chrome']

console.log(products.latestBrowser);
//  'Chrome'
```

### Buscando un elemento de un arreglo por su propiedad

Este _proxy_ extiende un arreglo con ciertas funcionalidades utilitarias. Como
se puede ver, puedes "definir" propiedades de manera flexible sin usar
{{jsxref("Object.defineProperties", "Object.defineProperties()")}}. Este ejemplo
se puede adaptar para encontrar una fila de una tabla por su celda. En dicho
caso, el target sería {{domxref("HTMLTableElement.rows", "table.rows")}}.

```js
let products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get: function (obj, prop) {
      // El comportamiento por defecto es retornar al valor; prop generalmente es un número
      if (prop in obj) {
        return obj[prop];
      }

      // Obtiene el número de productos; un alias de products.length
      if (prop === "number") {
        return obj.length;
      }

      let result,
        types = {};

      for (let product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // Obtiene un producto por su nombre
      if (result) {
        return result;
      }

      // Obtiene productos por tipo
      if (prop in types) {
        return types[prop];
      }

      // Obtiene los tipos de productos
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### Un ejemplo con todas las `trampas`

Para crear un ejemplo con la lista completa de `trampas`, con motivos
didácticos, intentaremos intervenir un objeto _no-nativo_ que se ajusta
particularmente a este tipo de operación: el objeto global `docCookies` creado
por
[un simple marco de cookies](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework).

```js
/*
  var docCookies = ... obtén el objeto "docCookies" aquí:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (!sKey in oTarget) {
      return false;
    }
    return oTarget.removeItem(sKey);
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
      oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Pruebas de cookies */

console.log((docCookies.my_cookie1 = "Primer valor"));
console.log(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Valor cambiado");
console.log(docCookies.my_cookie1);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Presentación de "Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk)
  ([diapositivas](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Tutorial on proxies](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
