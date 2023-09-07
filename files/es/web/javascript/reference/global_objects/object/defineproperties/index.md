---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef("Objetos_globales", "Object")}}

## Sumario

El metodo **`Object.defineProperties()`** define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto.

## Sintáxis

```js
Object.defineProperties(obj, propiedades);
```

### Parámetros

- obj
  - : El objeto sobre el cual se crearán o modificaran sus propiedades.
- propiedades
  - : Un objeto cuyas propiedades enumerables propias consituyen descriptores para las propiedades a ser definidas o modificadas.

## Descripción

`Object.defineProperties`, en escencia, define todas las propiedades correspondientes a las propiedades propias con capacidad de enumeración de `props` en el objeto `objrops.`

## Ejemplo

```js
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## Polyfill

Asumiendo una ejecución pristina del entorno con todos los nombres y propiedades referidas a sus valores iniciales, `Object.defineProperties` es casi completamente equivalente (note el comentario en `isCallable`) a la siguiente reimplementación de JavaScript:

```
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: modify as necessary if other values than functions are callable.
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null)
      throw new TypeError("bad desc");

    var d = {};

    if (hasProperty(desc, "enumerable"))
      d.enumerable = !!obj.enumerable;
    if (hasProperty(desc, "configurable"))
      d.configurable = !!obj.configurable;
    if (hasProperty(desc, "value"))
      d.value = obj.value;
    if (hasProperty(desc, "writable"))
      d.writable = !!desc.writable;
    if ( hasProperty(desc, "get") ) {
      var g = desc.get;

      if (!isCallable(g) && g !== "undefined")
        throw new TypeError("bad get");
      d.get = g;
    }
    if ( hasProperty(desc, "set") ) {
      var s = desc.set;
      if (!isCallable(s) && s !== "undefined")
        throw new TypeError("bad set");
      d.set = s;
    }

    if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
      throw new TypeError("identity-confused descriptor");

    return d;
  }

  if (typeof obj !== "object" || obj === null)
    throw new TypeError("bad obj");

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerability and ownership of properties](/es/docs/Enumerability_and_ownership_of_properties)
