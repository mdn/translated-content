---
title: Aserciones
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
tags:
  - Aserciones
  - Expresiones Regulares
  - Guía
  - JavaScript
  - Referencia
  - regex
translation_of: Web/JavaScript/Guide/Regular_Expressions/Assertions
original_slug: Web/JavaScript/Guide/Regular_Expressions/Aserciones
---
{{jsSidebar("JavaScript Guide")}}

Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras, y otros patrones que indican de alguna manera que el reconocimiento es posible (incluidas las expresiones anticipadas, condicionales e inversas).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Tipos

La siguiente sección también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Hoja_de_referencia", "esta hoja de trucos")}}. No olvides editarla también, ¡gracias!

### Aserciones de tipo límite

«Tabla»

### Otras aserciones

> **Nota:** El caracter `?` también se puede utilizar como cuantificador.

| Caracteres | Significado                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `x(?=y)`   | **Aserción anticipada**: Coincide con "x" solo si "x" va seguida de "y". Por ejemplo, `/Jack(?=Sprat)/` coincide con "Jack" solo si va seguido de "Sprat". `/Jack(?=Sprat\|Frost)/` coincide con "Jack" solo si va seguido de "Sprat" o "Frost". Sin embargo, ni "Sprat" ni "Frost" forman parte del resultado.                            |
| `x(?!y)`   | **Aserción anticipada negativa**: Coincide con "x" solo si "x" no está seguida de "y". Por ejemplo, `/\d+(?!\.)/` coincide con un número solo si no va seguido de un punto decimal. `/\d+(?!\.)/.exec('3.141')` coincide con "141" pero no con "3."                                                                                        |
| `(?<=y)x`  | **Aserción de búsqueda inversa**: coincide con "x" solo si "x" está precedida por "y". Por ejemplo, `/(?<=Jack)Sprat/` coincide con "Sprat" sólo si va precedida de "Jack". `/(?<=Jack\|Tom)Sprat/` coincide con "Sprat" solo si va precedido de "Jack" o "Tom". Sin embargo, ni "Jack" ni "Tom" forman parte del resultado.               |
| `(?<!y)x`  | **Aserción de búsqueda inversa negativa**: coincide con "x" solo si "x" _no_ está precedida por "y". Por ejemplo, `/(?<!-)\d+/` coincide con un número solo si no está precedido por un signo de menos. `/(? coincide con "3". /(?<!-)\d+/.exec('-3') no se encuentra la coincidencia porque el número está precedido por el signo menos.` |

## Ejemplos

### Ejemplo de descripción de tipo límite

```js
// Usa límites Regex para arreglar cadenas con errores.
let multilineaIncorrecta = `tey, la brillante manzena vered
toy cuelga en una rama del arbol vered`;

// 1) Usa ^ para corregir la coincidencia al principio de la cadena y justo después de la nueva línea.
multilineaIncorrecta = multilineaIncorrecta.replace(/^t/gim,'h');
console.log(1, multilineaIncorrecta); // corrige 'tey', 'toy' => 'hey', 'hoy'.

// 2) Usa $ para arreglar el reconocimiento al final del texto.
multilineaIncorrecta = multilineaIncorrecta.replace(/ed$/gim,'de');
console.log(2, multilineaIncorrecta); // corrige  'vered' => 'verde'.

// 3) Usa \b para encontrar los caracteres justo en el borde entre una palabra y un espacio.
multilineaIncorrecta = multilineaIncorrecta.replace(/\ba/gim,'á');
console.log(3, multilineaIncorrecta); // corrige  'arbol' sin tocar nada más.

// 4) Usa \B para encontrar los caracteres dentro de los bordes de una entidad.
multilineaCorrecta = multilineaIncorrecta.replace(/\Ben/gim,'an');
console.log(4, multilineaCorrecta); // corrige  'manzena' pero no toca 'en'.
```

### Busca al comienzo de la entrada usando un caracter de control `^`

Usa `^` para hacer coincidir al comienzo de la entrada. En este ejemplo, podemos obtener las frutas que comienzan con 'A' con una expresión regular `/^A/`. Para seleccionar las frutas adecuadas, podemos utilizar el método {{JSxRef("Objetos_globales/Array/filter", "filter")}} con un {{JSxRef("Funciones/Arrow_functions", "función flecha")}}.

```js
let frutas = ["Manzana", "Sandía", "Naranja", "Aguacate", "Fresa", "Melón"];

// Selecciona frutas que comiencen con 'M' por la Regex /^M/.
// Aquí se usa el símbolo de control '^' solo en un rol: Reconocer desde el inicio una entrada.

let frutasEmpiezanConM = frutas.filter(fruta => /^M/.test(fruta));
console.log(frutasEmpiezanConM); // [ 'Manzana', 'Melón' ]
```

En el segundo ejemplo, `^` se usa tanto para hacer coincidir al comienzo de la entrada como para crear conjuntos de caracteres negados o complementados cuando se usa dentro de {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "grupos")}}.

```js
let frutas = ["Manzana", "Sandía", "Naranja", "Aguacate", "Fresa", "Melón"];

// Seleccionar frutas que no comiencen por 'M' con la regexp /^[^M]/.
// En este ejemplo, se representan dos significados del símbolo de control '^':
// 1) Inicio coincidente de la entrada
// 2) Un conjunto de caracteres negado o complementado: [^M]
// Es decir, coincide con cualquier cosa que no esté encerrado entre los corchetes.

let frutasNoEmpiezanConM = frutas.filter(fruta => /^[^M]/.test(fruta));

console.log(frutasNoEmpiezanConM); // [ "Sandía", "Naranja", "Aguacate", "Fresa" ]
```

### Reconoce el límite de palabra

```js
let frutasConDescripcion = ["Manzana roja", "Piña amarilla", "Aguacate verde"];

// Selecciona descripciones que contengan terminaciones de palabras 'ja' o 'de':
let deJaSeleccion = frutasConDescripcion.filter(descr => /(de|ja)\b/.test(descr));

console.log(deJaSeleccion); // ["Manzana roja", "Aguacate verde"]
```

### Aserción anticipada

```js
// JS aserción anticipada x(?=Y)

let regex = /Primer(?= prueba)/g;

console.log('Primer prueba'.match(regex)); // [ 'Primer' ]
console.log('Primer melocotón'.match(regex)); // null
console.log('Esta es mi Primer prueba en un año.'.match(regex)); // [ 'Primer' ]
console.log('Este es mi Primer melocotón en un mes.'.match(regex)); // null
```

### Aserción anticipada negativa básica

Por ejemplo, `/\d+(?!\.)/` coincide con un número solo si no va seguido de un punto decimal. `/\d+(?!\.)/.exec('3.141')` coincide con "141" pero no con "3."

```js
console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
```

### Diferente significado del uso de la combinación '?!' en aserciones y rangos

Diferente significado del uso de la combinación `?!` en {{JSxRef("../Guide/Regular_Expressions/Aserciones", "Aserciones")}} `/x(?!y)/` y de `[^?!]` en {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Rangos")}}.

```js
let naranjaNoLimon = "¿Quieres beber jugo de naranja? ¡Sí, no quiero tomar jugo de limón!";

// Diferente significado del uso de la combinación '?!' en Aserciones /x(?!y)/ y [^?!] en Rangos.
let regexNoSeleccionaLimon = /[^?!]+beber(?! de limón)[^?!]+[?!]/gi
console.log(naranjaNoLimon.match(regexNoSeleccionaLimon)); // [ '¿Quieres beber jugo de naranja?' ]

let regexNoSeleccionaNaranja = /[^?!]+tomar(?! de naranja)[^?!]+[?!]/gi
console.log(naranjaNoLimon.match(regexNoSeleccionaNaranja)); // [ ' ¡Sí, no quiero tomar jugo de limón!' ]
```

### Aserción inversa

```js
let naranjas = ['naranja madura A', 'naranja verde B', 'naranja madura C',];

let naranjas_maduras = naranjas.filter(fruta => fruta.match(/(?<=naranja) madura/));
console.log(naranjas_maduras); // [ 'naranja madura A ', 'naranja madura C' ]
```

## Especificaciones

| Especificación                                                                       |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-assertion', 'RegExp: Aserciones')}} |

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
