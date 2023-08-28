---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef("Objetos_globales", "Object")}}

## Resumen

Devuelve una cadena que representa al objeto.

## Sintaxis

`toString()`

## Descripción

Todos los objetos tienen un método `toString` que se llama automáticamente cuando el objeto se representa como un valor de texto o cuando un objeto se referencia de tal manera que se espera una cadena. Por defecto, el método `toString` es heredado por todos los objetos que descienden de `Object`. Si este método no se sobreescribe en el objeto personalizado, `toString` devuelve `[objecttype]`, donde `type` es el tipo de objeto. El siguiente código ilustra esto:

```js
var objeto = new Object();
objeto.toString(); // Devuelve [object Object]
```

### Ejemplos

#### Sobreescribir el método por defecto `toString`

Puede crear una función que sea llamada en lugar del método predeterminado `toString`. El método `toString` no toma argumentos y debería devolver una cadena. El método `toString` que cree puede ser cualquier valor que quiera, pero será más útil si aporta información sobre el objeto.

El siguiente código define el tipo de objeto `Perro` y crea `elPerro`, un objeto de tipo `Perro`:

```js
function Perro(nombre, criadero, color, sexo) {
  this.nombre = nombre;
  this.criadero = criadero;
  this.color = color;
  this.sexo = sexo;
}

elPerro = new Perro("Gabby", "Laboratorio", "chocolate", "femenino");
```

Si llama al método `toString` en el objeto personalizado, devuelve el valor predeterminado heredado de `Object`:

```js
elPerro.toString(); //devuelve [object Object]
```

El siguiente código crea y asigna `perroToString` para sobreescribir el método predeterminado `toString`. Esta función genera una cadena que contiene nombre, criadero, color, y sexo del objeto, en la forma "`propiedad = valor;`".

```js
Perro.prototype.toString = function perroToString() {
  var retorno = `Perro ${this.nombre} es ${this.sexo} ${this.color} ${this.criadero}`;
  return retorno;
};
```

Con el código precedente en su lugar, cualquier vez que se use `elPerro` en un contexto de una cadena, JavaScript automáticamente llamará a la función `perroToString`, la cuál devuelve la siguiente cadena:

```
Perro Gabby es femenino chocolate Laboratorio
```

## Vea También

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
