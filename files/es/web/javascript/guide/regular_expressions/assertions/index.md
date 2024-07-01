---
title: Aserciones
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
---

{{jsSidebar("JavaScript Guide")}}

Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras, y otros patrones que indican de alguna manera que el reconocimiento es posible (incluidas las expresiones anticipadas, condicionales e inversas).

{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Tipos

La siguiente sección también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Hoja_de_referencia", "esta hoja de trucos")}}. No olvides editarla también, ¡gracias!

### Aserciones de tipo límite

<table class="standard-table">
    <thead>
     <tr>
      <th scope="col">Caracteres</th>
      <th scope="col">Significado</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code>^</code></td>
      <td>
       <p>Coincide con el comienzo de la entrada. Si el indicador multilínea se establece en <code>true</code>, también busca inmediatamente después de un caracter de salto de línea. Por ejemplo, <code>/^A/</code> no coincide con la "A" en "alias A", pero coincide con la primera "A" en "Alias A".</p>
       <div class="blockIndicator note">
       <p>Este caracter tiene un significado diferente cuando aparece al comienzo de un {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "grupo")}}.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>$</code></td>
      <td>
       <p>Coincide con el final de la entrada. Si el indicador multilínea se establece en <code>true</code>, también busca hasta inmediatamente antes de un caracter de salto de línea. Por ejemplo, <code>/r$/</code> no coincide con la "r" en "espera", pero sí en "esperar".</p>
      </td>
     </tr>
     <tr>
      <td><code>\b</code></td>
      <td>
       <p>Marca el límite de una palabra. Esta es la posición en la que un caracter de palabra no va seguido o precedido por otro caracter de palabra, por ejemplo, entre una letra y un espacio. Ten en cuenta que el límite de una palabra encontrada no se incluye en el resultado. En otras palabras, la longitud de un límite de palabra encontrada es cero.</p>
       <p>Ejemplos:</p>
       <ul>
        <li><code>/\bl/</code> encuentra la "l" en "luna".</li>
        <li><code>/un\b/</code> no concuerda con "un" en "luna", porque "un" va seguido de "a", que es un carácter de palabra.</li>
        <li><code>/una\b/</code> coincide con "una" en "luna", porque "una" es el final de la cadena, por lo tanto no va seguido de un carácter de palabra.</li>
        <li><code>/\w\b\w/</code> nunca encontrará con nada, porque un caracter de palabra nunca puede ir seguido de un caracter que no sea de palabra y otro de palabra.</li>
       </ul>
       <p>Para hacer coincidir un carácter de retroceso (<code>[\b]</code>), consulta {{JSxRef("../Guide/Regular_Expressions/Clases_de_caracteres", "Clases de caracteres")}}.</p>
      </td>
     </tr>
     <tr>
      <td><code>\B</code></td>
      <td>
       <p>Coincide con un límite sin palabra. Esta es una posición en la que el caracter anterior y siguiente son del mismo tipo: ambos deben ser palabras o ambos deben ser no palabras, por ejemplo, entre dos letras o entre dos espacios. El principio y el final de una cadena se consideran no palabras. Igual que el límite de palabras encontradas, el límite sin palabras reconocidas tampoco se incluye en el resultado. Por ejemplo, <code>/\Bme/</code> coincide con "me" en "al mediodía", y <code>/ay\B/</code> coincide con "ay" en "posiblemente ayer".</p>
      </td>
     </tr>
    </tbody>
   </table>

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
multilineaIncorrecta = multilineaIncorrecta.replace(/^t/gim, "h");
console.log(1, multilineaIncorrecta); // corrige 'tey', 'toy' => 'hey', 'hoy'.

// 2) Usa $ para arreglar el reconocimiento al final del texto.
multilineaIncorrecta = multilineaIncorrecta.replace(/ed$/gim, "de");
console.log(2, multilineaIncorrecta); // corrige  'vered' => 'verde'.

// 3) Usa \b para encontrar los caracteres justo en el borde entre una palabra y un espacio.
multilineaIncorrecta = multilineaIncorrecta.replace(/\ba/gim, "á");
console.log(3, multilineaIncorrecta); // corrige  'arbol' sin tocar nada más.

// 4) Usa \B para encontrar los caracteres dentro de los bordes de una entidad.
multilineaCorrecta = multilineaIncorrecta.replace(/\Ben/gim, "an");
console.log(4, multilineaCorrecta); // corrige  'manzena' pero no toca 'en'.
```

### Busca al comienzo de la entrada usando un caracter de control `^`

Usa `^` para hacer coincidir al comienzo de la entrada. En este ejemplo, podemos obtener las frutas que comienzan con 'A' con una expresión regular `/^A/`. Para seleccionar las frutas adecuadas, podemos utilizar el método {{JSxRef("Objetos_globales/Array/filter", "filter")}} con un {{JSxRef("Funciones/Arrow_functions", "función flecha")}}.

```js
let frutas = ["Manzana", "Sandía", "Naranja", "Aguacate", "Fresa", "Melón"];

// Selecciona frutas que comiencen con 'M' por la Regex /^M/.
// Aquí se usa el símbolo de control '^' solo en un rol: Reconocer desde el inicio una entrada.

let frutasEmpiezanConM = frutas.filter((fruta) => /^M/.test(fruta));
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

let frutasNoEmpiezanConM = frutas.filter((fruta) => /^[^M]/.test(fruta));

console.log(frutasNoEmpiezanConM); // [ "Sandía", "Naranja", "Aguacate", "Fresa" ]
```

### Reconoce el límite de palabra

```js
let frutasConDescripcion = ["Manzana roja", "Piña amarilla", "Aguacate verde"];

// Selecciona descripciones que contengan terminaciones de palabras 'ja' o 'de':
let deJaSeleccion = frutasConDescripcion.filter((descr) =>
  /(de|ja)\b/.test(descr),
);

console.log(deJaSeleccion); // ["Manzana roja", "Aguacate verde"]
```

### Aserción anticipada

```js
// JS aserción anticipada x(?=Y)

let regex = /Primer(?= prueba)/g;

console.log("Primer prueba".match(regex)); // [ 'Primer' ]
console.log("Primer melocotón".match(regex)); // null
console.log("Esta es mi Primer prueba en un año.".match(regex)); // [ 'Primer' ]
console.log("Este es mi Primer melocotón en un mes.".match(regex)); // null
```

### Aserción anticipada negativa básica

Por ejemplo, `/\d+(?!\.)/` coincide con un número solo si no va seguido de un punto decimal. `/\d+(?!\.)/.exec('3.141')` coincide con "141" pero no con "3."

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

### Diferente significado del uso de la combinación '?!' en aserciones y rangos

Diferente significado del uso de la combinación `?!` en {{JSxRef("../Guide/Regular_Expressions/Aserciones", "Aserciones")}} `/x(?!y)/` y de `[^?!]` en {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Rangos")}}.

```js
let naranjaNoLimon =
  "¿Quieres beber jugo de naranja? ¡Sí, no quiero tomar jugo de limón!";

// Diferente significado del uso de la combinación '?!' en Aserciones /x(?!y)/ y [^?!] en Rangos.
let regexNoSeleccionaLimon = /[^?!]+beber(?! de limón)[^?!]+[?!]/gi;
console.log(naranjaNoLimon.match(regexNoSeleccionaLimon)); // [ '¿Quieres beber jugo de naranja?' ]

let regexNoSeleccionaNaranja = /[^?!]+tomar(?! de naranja)[^?!]+[?!]/gi;
console.log(naranjaNoLimon.match(regexNoSeleccionaNaranja)); // [ ' ¡Sí, no quiero tomar jugo de limón!' ]
```

### Aserción inversa

```js
let naranjas = ["naranja madura A", "naranja verde B", "naranja madura C"];

let naranjas_maduras = naranjas.filter((fruta) =>
  fruta.match(/(?<=naranja) madura/),
);
console.log(naranjas_maduras); // [ 'naranja madura A ', 'naranja madura C' ]
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
