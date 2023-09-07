---
title: setInterval()
slug: Web/API/setInterval
l10n:
  sourceCommit: 0717d1c0a7528b2dd44d065fe90d860e3bdc2e6a
---

{{APIRef("HTML DOM")}}

El método **`setInterval()`** , ofrecido en las interfaces {{domxref("Window")}} y {{domxref("Worker")}} , llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.

Este método devuelve un ID de intervalo que lo identifica de forma única, de ese modo, el intervalo puede ser eliminado más tarde llamando a {{domxref("clearInterval", "clearInterval()")}} .

## Sintaxis

```js
setInterval(code);
setInterval(code, delay);

setInterval(func);
setInterval(func, delay, arg0);
setInterval(func, delay, arg0, arg1);
setInterval(func, delay, arg0, arg1, /* ..., */ argN);
```

### Parámetros

- `func`

  - : Una función {{jsxref("function")}} que se ejecuta cada cierto tiempo. El tiempo lo determina `delay`, estando éste en milisegundos. La primera ejecución ocurre tras el tiempo determinado por `delay`.

- `code`

  - : Una sintaxis especial que permite incluir una cadena en lugar de una función, la cual es compilada y ejecutada cada `delay` milisegundos. Se recomienda no usar esta sintaxis, por la misma razón que hace que el uso de {{jsxref("Global_Objects/eval", "eval()")}} sea un riesgo de seguridad.

- `delay` {{optional_inline}}

  - : El tiempo en milisegundos (milésimas de segundo) que el temporizador debe retrasar cada ejecución de la función o código especificado. Si no se especifica ninguno, por defecto es 0. Ver el apartado [Delay restrictions](#delay_restrictions) descrito más abajo para más detalles sobre el rango de valores de retardo (delay) permitido.

- `arg0, ..., argN` {{optional_inline}}
  - : Argumentos adicionales que se pasan a la función especificada por _func_ una vez que el temporizador expira.

### Valor de retorno

El `intervalID` devuelto es un valor numérico, diferente a 0, que identifica el temporizador creado para poder realizar la llamada a `setInterval()` . Este valor puede ser pasado a {{domxref("clearInterval()")}} para cancelar el intervalo.

Puede ser útil tener en cuenta que `setInterval()` y {{domxref("setTimeout()")}} comparten el mismo grupo de IDs. También es importante saber que `clearInterval()` y {{domxref("clearTimeout", "clearTimeout()")}} técnicamente pueden ser utilizados indistintamente. Sin embargo, para mayor claridad siempre debe tratar de hacerlos coincidir, evitando así confusiones al mantener su código.

> **Nota:** El argumento `delay` se convierte en un número entero de 32 bits con signo. Efectivamente, esto limita `delay` a 2.147,483,647 milisegundos, ya que es especificado en el IDL como un número entero con signo.

## Ejemplos

### Ejemplo 1: Sintaxis básica

El siguiente ejemplo muestra la sintaxis básica de `setInterval()`

```js
var intervalID = setInterval(myCallback, 500, "parámetro 1", "parámetro 2");

function myCallback(a, b) {
  // Tu código debe ir aquí
  // Los parámetros son totalmente opcionales
  console.log(a);
  console.log(b);
}
```

### Ejemplo 2: Alternando dos colores

El siguiente ejemplo llama a la función `flashtext()` una vez por segundo hasta que el botón _Stop_ sea pulsado.

#### HTML

```html
<div id="my_box">
  <h3>Hello World</h3>
</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

#### CSS

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// variable para almacenar nuestro intervalID
let nIntervId;

function changeColor() {
  // comprobar si ya se ha configurado un intervalo
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  if (oElem.className === "go") {
    oElem.className = "stop";
  } else {
    oElem.className = "go";
  }
}

function stopTextColor() {
  clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### Result

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

Véase también: [`clearInterval()`](/es/docs/Web/API/clearInterval).

## El problema con "this"

Cuando le pasas un método a `setInterval()` o cualquier otra función, ésta será invocada con el valor de [`this`](/es/docs/Web/JavaScript/Reference/Operators/this) incorrecto. Este problema es explicado en detalle en la [JavaScript reference](/es/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method).

### Explicación

El código ejecutado por `setInterval` se ejecuta en un contexto de ejecución distinto al de la función desde la que fue llamado. Como consecuencia, la palabra clave [`this`](/es/docs/Web/JavaScript/Reference/Operators/this) para la función llamada se establece en el objeto `window` (u objeto `global`), que no es el mismo contexto de ejecución del valor `this` de la función que llamó a `setInterval()` . Véase el siguiente ejemplo en el que se utiliza `setTimeout()` en lugar de `setInterval()` . El problema con `this` es el mismo en ambos temporizadores:

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // imprime "zero, one, two"
myArray.myMethod(1); // imprime "one"
setTimeout(myArray.myMethod, 1000); // imprime "[object Window]" después de un segundo
setTimeout(myArray.myMethod, 1500, "1"); // imprime "undefined" después de 1,5 segundos
// pasar el objeto 'this' con .cal no funcionará
// porque esto cambiará el valor de 'this' dentro del propio
// setTimeout, mientras que nosotros queremos cambiar el valor
// de 'this' dentro de myArray.myMethod. De hecho, será un error
// porque el código de setTimeout espera que 'this' sea el
// objeto ventana:
setTimeout.call(myArray, myArray.myMethod, 2000); // error:
// "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on
// WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); //mismo
// error
```

Como puede ver, no hay formas de pasar el objeto `this` a la función de devolución de llamada o callback en código JavaScript legacy.

### Una posible solución

Todos los entornos de ejecución modernos de JavaScript (en navegadores y otros lugares) soportan [arrow functions](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions), con `this` léxico, lo que nos permite escribir `setInterval( () => this.myMethod)` si estamos dentro del método `myArray` .

Si necesita soporte para IE, utilice el método [`Function.prototype.bind`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) , que le permite especificar el valor que debe ser usado como `this` para todas las llamadas a una función dada. Esto le permite fácilmente evitar los problemas en los que no está claro cual será `this` dependiendo del contexto desde el que se llamó a la función.

## Notas sobre su uso

La función `setInterval()` se utiliza comúnmente para establecer un retardo en funciones que son ejecutadas una y otra vez, como por ejemplo las animaciones. Puede cancelar el intervalo utilizando {{domxref("clearInterval()")}} .

Si desea que su función sea llamada _una vez_ después del retardo especificado utilice {{domxref("setTimeout()")}} .

### Restricciones en el retardo

Es posible anidar intervalos; Es decir, la llamada de retorno de `setInterval()` puede llamar a su vez a otro `setInterval()` para iniciar otro intervalo, y que este sea ejecutado aunque el primero siga corriendo aún. Para mitigar el impacto potencial que esto puede tener en el rendimiento, una vez que los intervalos son anidados más allá de cinco niveles de profundidad, el navegador impondrá automáticamente un valor mínimo de cuatro milisegundos para el intervalo. Intenta especificar un valor menor a cuatro ms en llamadas profundamente anidadas a `setInterval()` . Estas serán fijadas a 4 ms.

Los navegadores pueden imponer valores mínimos aún más estrictos para el intervalo en determinadas circunstancias, aunque no deberían ser habituales. Tenga también en cuenta que la cantidad real de tiempo que transcurre entre las llamadas a la función callback puede ser mayor que el propio retardo (delay); Ver
[Reasons for delays longer than specified](/es/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) para ver ejemplos.

### Garantizar que la duración de la ejecución sea inferior a la frecuecia del intervalo

Si existe la posibilidad de que su lógica pueda tardar más en ejecutarse que el tiempo de intervalo, se recomienda llamar recursivamente a una función nombrada utilizando {{domxref("setTimeout()")}}. Por ejemplo, si utiliza `setInterval()` para sondear un servidor remoto cada cinco segundos, la latencia de la red, un servidor que no responde y una serie de otros problemas podrían impedir que la solicitud se complete en el tiempo asignado. Debido a esto, es posible que se encuentre con peticiones XHR en cola que no necesariamente retornarán en orden.

En estos casos, es preferible un patrón recursivo `setTimeout` :

```js
(function loop() {
  setTimeout(function () {
    // Escriba su lógica aquí

    loop();
  }, delay);
})();
```

En el fragmento de código que hay sobre estas líneas, se declara una función con nombre `loop()` y se ejecuta inmediatamente. `loop` es llamada recursivamente dentro de `setTimeout` después de que la lógica haya sido completamente ejecutada. Aunque este patrón no garantiza la ejecución en un intervalo fijo, si garantiza que el intervalo anterior se haya ejecutado por completo antes de recursar.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `setInterval` que permite pasar argumentos al callback en `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("setTimeout")}}
- {{domxref("clearTimeout")}}
- {{domxref("clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
