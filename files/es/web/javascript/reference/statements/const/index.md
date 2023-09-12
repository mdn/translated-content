---
title: const
slug: Web/JavaScript/Reference/Statements/const
---

{{jsSidebar("Statements")}}

## Resumen

Las variables constantes presentan un **ámbito de bloque** ([block](/es/docs/Web/JavaScript/Referencia/Sentencias/block) scope) tal y como lo hacen las variables definidas usando la instrucción [let](/es/docs/Web/JavaScript/Referencia/Sentencias/let), con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes **no se pueden redeclarar**.

> **Advertencia:** La **redeclaración** de la misma variable bajo un mismo [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) terminaría en un error de tipo [`SyntaxError`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/SyntaxError). Esto también es **extensible** si usamos `var` dentro del ámbito léxico. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con `var.`

## Sintaxis

```
const varname1 = value1 [, varname2 = value2 [, varname3 = value3 [, ... [, varnameN = valueN]]]];
```

- `varnameN`

  - : Nombre de la constante. Puede ser un identificador legal.

- `valueN`
  - : Valor de la constante. Puede ser cualquier expresión legal.

## Descripción

Esta declaración crea una constante cuyo alcance puede ser **global o local para el bloque en el que se declara**. Es necesario **inicializar** la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.

La declaración de una constante crea una referencia de sólo lectura. No significa que el valor que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado, por lo tanto, en el caso de que la asignación a la constante sea un objeto, el objeto sí que puede ser alterado.

Una constante **no puede compartir su nombre** con una función o variable en el mismo ámbito.

Todas las consideraciones acerca de la " [zona muerta temporal](/es/docs/Web/JavaScript/Referencia/Sentencias/let#muerta) " se aplican tanto a [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) y `const`.

> **Advertencia:** `const` ~~es~~ **fue** una **extensión especifica de Mozilla**, no ~~es~~ **era** soportado en IE, pero ~~tiene~~ **tenia** soporte parcial por Opera desde la versión 9.0 y por Safari.

## Ejemplos

El siguiente ejemplo produce una salida `"a es 7."`

```js
const a = 7;
document.writeln("a es " + a + ".");
```

Las siguientes instrucciones demuestra como se comporta `const`

> **Advertencia:** Las instrucciones deberán ser ordenadas correctamente para conseguir la salida esperada a los ejemplos

```js
// NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,
//pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas

// definimos MY_FAV como constante y le damos un valor de 7
const MY_FAV = 7;

// lanzara un error: Unkeught TypeError: Asignación a variable constante.
MY_FAV = 20;

// imprimira 7
console.log('my favorite number is: ' + MY_FAV);

// lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'MY_FAV' ya ha sido declarado
const MY_FAV = 20;

// el nombre MY_FAV esta reservado para la constante anterior, también fallara y lanzara un SyntaxError por la redeclaración
var MY_FAV = 20;

// el nombre MY_FAV esta reservado para la variable anterior, esto también lanzara un SyntaxError por la redeclaración
let MY_FAV = 20;

// es importante tener en cuenta como funciona el alcance de bloque
if (MY_FAV === 7) {
    // esto esta bien y crea una variable MY_FAV de alcance/ambito de bloque
    // (funciona igual de bien con let para declarar un alcance de bloque/ambito de variable no-constante)
    const MY_FAV = 20;

    // MY_FAV ahora es 20
    console.log('my favorite number is ' + MY_FAV);

    // aquín también lanzara un SyntaxError por la redeclaración
    var MY_FAV = 20;
}

// MY_FAV todavia es 7
console.log('my favorite number is ' + MY_FAV);

// lanza error, falta el inicializador en la declaracion de const
const FOO;

// const tambien funciona en objetos
const MY_OBJECT = {'key': 'value'};

// Intentando sobrescribir el objeto nos lanza un error
MY_OBJECT = {'OTHER_KEY': 'value'};

// Sin embargo, los object keys no estan protegidas,
// por lo que la siguiente sentencia se ejecutara sin problema
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() para hacer un objeto inmutable

// Lo mismo se aplica a los arrays
const MY_ARRAY = [];
// es posible empujar elementos en el array
MY_ARRAY.push('A'); // ["A"]
// Sin embargo, asignar un nuevo array a la variable lanza error
MY_ARRAY = ['B']
```

## Ver también

- {{jsxref("Sentencias/var", "var")}}
- {{jsxref("Sentencias/let", "let")}}
- [Constants in JavaScript Guide](/en/JavaScript/Guide/Values,_Variables,_and_Literals#Constants)
