---
title: setInterval()
slug: Web/API/setInterval
page-type: web-api-global-function
browser-compat: api-setInterval
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

El `ID de intervalo` devuelto es un valor numérico, diferente a 0, que identifica el temporizador creado para poder realizar la llamada a `setInterval()` . Este valor puede ser pasado a {{domxref("clearInterval()")}} para cancelar el intervalo.

Puede ser útil tener en cuenta que `setInterval()` y {{domxref("setTimeout()")}} comparten el mismo grupo de IDs. También es importante saber que `clearInterval()` y {{domxref("clearTimeout", "clearTimeout()")}} técnicamente pueden ser utilizados indistintamente. Sin embargo, para mayor claridad simpre debe tratar de hacerlos coincidir, evitando así confusiones al mantener su código.

> **Nota:** El argumento `delay` se convierte en un número entero de 32 bits con signo. Efectivamente, esto limita `delay` a 2.147,483,647 milisegundos, ya que es especificado en el IDL  como un número entero con signo.

## Ejemplos

El siguiente ejemplo muestra la sintaxis básica de `setInterval()`

```js
var intervalID = setInterval(myCallback, 500, 'parámetro 1', 'parámetro 2');

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
