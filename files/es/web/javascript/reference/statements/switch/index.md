---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}

La **declaración** **`switch`** evalúa una [expresión](/es/docs/Web/JavaScript/Guide/Expressions_and_Operators), comparando el valor de esa expresión con una instancia **`case`**, y ejecuta [declaraciones](/es/docs/Web/JavaScript/Referencia/Sentencias) asociadas a ese `case`, así como las declaraciones en los `case` que siguen.

## Syntaxis

```
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}
```

- `expresión`
  - : Es una expresión que es comparada con el valor de cada instancia `case`.
- `case valorN`

  - : Una instancia `case valorN` es usada para ser comparada con la `expresión`. Si la `expresión` coincide con el `valorN`, las declaraciones dentro de la instancia `case` se ejecutan hasta que se encuentre el final de la declaración `switch` o hasta encontrar una interrupción `break`.

- `default`
  - : Una instancia `default`, cuando es declarada, es ejecutada si el valor de la `expresión` no coincide con cualquiera de las otras instancias `case valorN`.

## Descripción

Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instacia `case` cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando [comparación estricta](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), `===)` y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de `case` coincidente, el programa busca la cláusula `default` opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia `default` el programa continúa la ejecución en la instrucción siguiente al final del `switch`. Por convención, la instancia `default` es la última cláusula, pero no tiene que ser así.

La declaración [`break`](/es/docs/Web/JavaScript/Reference/Statements/break) es opcional y está asociada con cada etiqueta de `case` y asegura que el programa salga del `switch` una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el `break` el programa continúa la ejecución en la siguiente instrucción en la declaración de `switch` .

## Ejemplos

### Usando `switch`

En el siguiente ejemplo, si `expresión` se resuelve a "Platanos", el algoritmo compara el valor con el `case` "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un `break`, el programa sale del condicional `switch` y ejecuta la declaración que lo procede. Si se omite el `break`, el `case` "Cerezas" también es ejecutado.

```js
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
```

### ¿Qué pasa si olvido un break?

Si olvidas un `break`, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente `case` independientemente si esta condición se cumple o no. Ver el siguiente ejemplo:

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### ¿Puedo usar un \<default> entre condiciones?

Sí, ¡es posible! JavaScript retornará a la instancia `default` en caso de no encontrar una coincidencia:

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```

Al estar el `case 1:` a continuación de `default`, y al no haber un `break` de por medio, veremos que la declaración del `case 1:` será ejecutada, apareciendo el resultado `1` en el _log de consola._

### Metodos para casos con múltiple criterio

La fuente de esta técnica esta aquí:

[Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### Operación única con múltiples casos

Este método toma ventaja del hecho de que, si no hay un `break` debajo de una declaración `case`, continuará la ejecución hasta el siguiente `case`, ignorando si en dicho caso se cumple o no el criterio indicado. Comprobar en la sección _¿Qué pasa si olvido un `break`?_

Este es un ejemplo de operación única con sentencia `switch` secuencial, donde cuatro valores diferentes se comportan exactamente de la misma manera:

```js
var Animal = "Jirafa";
switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
}
```

#### Operaciones encadenadas con múltiples casos

Este es un ejemplo de una sentencia `switch` secuencial con múltiples operaciones, donde, dependiendo del valor entero dado, se pueden recibir diferentes resultados. Esto demuestra que el algoritmo correrá en el orden en que se coloquen las declaraciones `case`, y que no tiene que ser numéricamente secuencial. En JavaScript, también es posible combinar definiciones con valores `"string"` dentro de estas declaraciones `case`.

```js
var foo = 1;
var output = "Salida: ";
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
}
```

La salida (output) de este ejemplo:

| Value                                  | Log text                                   |
| -------------------------------------- | ------------------------------------------ |
| foo es NaN o no es 1, 2, 3, 4, 5 ni 10 | Por favor, selecciona un valor del 1 al 6. |
| 10                                     | Salida: ¿Y Cuál Es Tu Nombre?              |
| 1                                      | Salida: Cuál Es Tu Nombre?                 |
| 2                                      | Salida: Tu Nombre?                         |
| 3                                      | Salida: Nombre?                            |
| 4                                      | Salida: ?                                  |
| 5                                      | Salida: !                                  |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`if...else`](/es/docs/Web/JavaScript/Reference/Statements/if...else)
