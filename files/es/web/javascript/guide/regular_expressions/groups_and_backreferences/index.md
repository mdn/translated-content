---
title: Grupos y rangos
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
---

{{jsSidebar("JavaScript Guide")}}

Los grupos y rangos indican grupos y rangos de caracteres de expresión.

{{EmbedInteractiveExample("pages/js/regexp-groups-ranges.html")}}

## Tipos

La siguiente sección también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Hoja_de_referencia", "esta hoja de trucos")}}. No olvides editarla también, ¡gracias!

| Caracteres      | Significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x\|y`          | Coincide con "x" o "y". Por ejemplo, `/verde\|roja/` coincide con "verde" en "manzana verde" y "roja" en "manzana roja".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `[xyz] [a-c]`   | Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. También es posible incluir una clase de caracteres en un juego de caracteres.Por ejemplo, `[abcd]` es lo mismo que `[a-d]`. Coincide con la "b" en "brisket" y la "c" en "chop".Por ejemplo, `[abcd-]` y `[-abcd]` coinciden con la "b" en "brisket", la "c" en "chop" y el "-" (guión) en "sin-fin".Por ejemplo, `[\w-]` es lo mismo que `[A-Za-z0-9_-]`. Ambos reconocen la "b" en "brisket", la "c" en "chop" y la "s" en "sin-fin".                                                                                                                                                                                                                                                                                                                                                                                       |
| `[^xyz] [^a-c]` | Un juego de caracteres negado o complementado. Es decir, hallan cualquier cosa que no esté encerrada entre corchetes. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. Por ejemplo, `[^abc]` es lo mismo que `[^a-c]`. Inicialmente halla la "o" en "bacon" y la "h" en "chuleta".El caracter ^ también puede indicar el {{JSxRef("../Guide/Regular_Expressions/Assertions", "comienzo de la entrada")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `(x)`           | **Grupo de captura**: Coincide con `x` y recuerda la coincidencia. Por ejemplo, `/(foo)/` encuentra y recuerda "foo" en "foo bar".Una expresión regular puede tener varios grupos de captura. En los resultados, coincide con los grupos capturados normalmente en un arreglo cuyos miembros están en el mismo orden que los paréntesis de la izquierda en el grupo capturado. Este suele ser solo el orden de los propios grupos capturados. Esto se vuelve importante cuando los grupos capturados están anidados. Se accede a las coincidencias utilizando el índice de los elementos del resultado (`[1], ..., [n]`) o desde las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).Los grupos de captura tienen una penalización de rendimiento. Si no necesitas que se recupere la subcadena coincidente, prefiere los grupos de no captura (ve [más abajo](#gpodenocaptura)).{{JSxRef("Objetos_globales/String/match", "String.match()")}} no devolverá grupos si se establece el indicador `/.../g`. Sin embargo, aún puedes usar {{JSxRef("Objetos_globales/String/matchAll", "String.matchAll()")}} para obtener todas las coincidencias. |
| `\n`            | Donde "n" es un número entero positivo. Una referencia inversa a la última subcadena que coincide con el paréntesis `n` en la expresión regular (contando los paréntesis izquierdos). Por ejemplo, `/manzana(,)\snaranja\1/` coincide con "manzana, naranja," en "manzana, naranja, cereza, melocotón".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `\k<Nombre>`    | Una referencia inversa a la última subcadena que coincide con el grupo de captura **Nombrado** especificado por `<Nombre>`.Por ejemplo, `/(?<trato>\w+), si \k<trato>/` coincide con "Sr., sí Sr." en "¿Me copias? ¡Sr., sí Sr.!".aquí se usa `\k` literalmente para indicar el comienzo de una referencia inversa a un grupo de captura con nombre.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `(?<Nombre>x)`  | **Grupo de captura con nombre**: Coincide con "x" y la almacena en la propiedad de grupos de las coincidencias devueltas con el nombre especificado por `<Nombre>`. Los corchetes angulares (`<` y `>`) son necesarios para el nombre del grupo.Por ejemplo, para extraer el código de área de Estados Unidos de un número de teléfono, podrías usar `/\((?<area>\d\d\d)\)/`. El número resultante aparecería en `matches.groups.area`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `(?:x)`         | **Grupo de no captura**: Coincide con "x" pero no recuerda la coincidencia. La subcadena coincidente no se puede recuperar de los elementos del arreglo resultante (`[1], ..., [n]`) o de las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Ejemplos

### Conteo de vocales

```js
var aliceExcerpt =
  "Hubo un largo silencio después de esto, y Alicia solo podía escuchar susurros de vez en cuando.";
var regexpVowels = /[aeiouy]/g;

console.log(
  "Número de vocales minúsculas: ",
  aliceExcerpt.match(regexpVowels).length,
);
// Número de vocales: 34
```

### Uso de grupos

```js
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hola ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null);
```

### Uso de grupos con nombre

```js
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hola ${match.groups.firstname} ${match.groups.lastname}`);
} while ((match = regexpNames.exec(personList)) !== null);
```

> **Nota:** No todos los navegadores admiten esta función; consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla de compatibilidad", "#Compatibilidad_del_navegador")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
