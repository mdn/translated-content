---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
---

{{jsSidebar("Statements")}}

## Resumen

Lanza una excepcion definida por el usuario.

## Sintaxis

```
throw expresion;
```

- `expresion`
  - : Expresión a lanzar.

## Descripción

Utilice la sentencia `throw` para lanzar una excepción. Cuando lanza una excepción, `expresion` especifica el valor de la excepción. Cada uno de los siguientes ejemplos lanza una excepción:

```js
throw "Error2"; // genera una excepción con un valor cadena
throw 42; // genera una excepción con un valor 42
throw true; // genera una excepción con un valor true
```

## Ejemplos

### Ejemplo: Lanzar un objeto

Puede especificar un objeto cuando lanza una excepción. Puede entonces referenciar las propiedades del objeto en el bloque `catch`. El siguiente ejemplo crea un objeto `miExcepcionUsuario` del tipo `ExceptionUsuario` y la utiliza usándola en una sentencia `throw`.

```js
function ExceptionUsuario(mensaje) {
  this.mensaje = mensaje;
  this.nombre = "ExceptionUsuario";
}

function getNombreMes(mes) {
  mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
  var meses = new Array(
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  );
  if (meses[mes] != null) {
    return meses[mes];
  } else {
    miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
    throw miExcepcionUsuario;
  }
}

try {
  // sentencias para try
  nombreMes = getNombreMes(miMes);
} catch (excepcion) {
  nombreMes = "desconocido";
  registrarMisErrores(excepcion.mensaje, excepcion.nombre); // pasa el objeto exception al manejador de errores
}
```

### Ejemplo: Otro ejemplo sobre lanzar un objeto

El siguiente ejemplo comprueba una cadena de entrada para un código postal de EE.UU. Si el código postal utiliza un formato no válido, la sentencia throw lanza una excepción creando un objeto de tipo `ExcepcionFormatoCodigoPostal`.

```js
/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ExcepcionFormatoCodigoPostal(zip);
   }
}

function ExcepcionFormatoCodigoPostal(valor) {
   this.valor = valor;
   this.mensaje = "no conforme con el formato esperado de código postal";
   this.toString = function() {
      return this.valor + this.mensaje
   };
}

/*
 * Esto podría estar en un script que valida los datos de una dirección de EE.UU.
 */

var CODIGOPOSTAL_NOVALIDO = -1;
var CODIGOPOSTAL_DESCONOCIDO_ERROR = -2;

function verificarCodigoPostal(codigo) {
   try {
      codigo = new CodigoPostal(codigo);
   } catch (excepcion) {
      if (excepcion instanceof ExcepcionFormatoCodigoPostal) {
         return CODIGOPOSTAL_NOVALIDO;
      } else {
         return CODIGOPOSTAL_DESCONOCIDO_ERROR;
      }
   }
   return codigo;
}

a = verificarCodigoPostal(95060);         // devuelve 95060
b = verificarCodigoPostal(9560;)          // devuelve -1
c = verificarCodigoPostal("a");           // devuelve -1
d = verificarCodigoPostal("95060");       // devuelve 95060
e = verificarCodigoPostal("95060 1234");  // devuelve 95060 1234
```

### Ejemplo: Relanzar una excepción

Puede usar `throw` para volver a lanzar una excepción después de cogerla. El siguiente ejemplo coge una excepción con un valor numérico y la vuelve a lanzar si el valor es superior a 50. La excepción relanzada propaga hacia arriba la función adjunta o a un nivel superior para que el usuario pueda verla.

```js
try {
  throw n; // lanza una excepción con un valor numérico
} catch (excepcion) {
  if (excepcion <= 50) {
    // sentencias para manejar la excepción 1-50
  } else {
    // no se puede manejar esta excepción, así que se vuelve a lanzar
    throw excepcion;
  }
}
```

## Vea También

- {{jsxref("Sentencias/try...catch", "try...catch")}}
