---
title: Clases de caracteres
slug: Web/JavaScript/Guide/Regular_Expressions/Character_Classes
tags:
  - Expresiones Regulares
  - Guía
  - JavaScript
  - Referencia
  - RegExp
  - clases de caracteres
translation_of: Web/JavaScript/Guide/Regular_Expressions/Character_Classes
original_slug: Web/JavaScript/Guide/Regular_Expressions/Clases_de_caracteres
---
{{JsSidebar("Guía de JavaScript")}}

Las clases de caracteres distinguen tipos de caracteres como, por ejemplo, distinguen entre letras y dígitos.

{{EmbedInteractiveExample("pages/js/regexp-character-classes.html")}}

## Tipos

La siguiente tabla también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Cheatsheet", "esta hoja de referencia")}}. No olvides editarla también, ¡gracias!«Tabla»

## Ejemplos

### Buscar una serie de dígitos

```js
var datosAleatorios = "015 354 8787 687351 3512 8735";
var regexpCuatroDigitos = /\b\d{4}\b/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// \d{4} indica un dígito, cuatro veces
// \b indica otro límite (es decir, no termina la coincidencia en medio de una palabra)


console.table(datosAleatorios.match(regexpCuatroDigitos));
// ['8787', '3512', '8735']
```

### Busca una palabra (del alfabeto latino) que comience con A

```js
var extractoAlicia = "Estoy segura de que no soy Ada, dijo, 'porque su cabello se hace en rizos tan largos, y el mío no se riza en absoluto'.";
var regexpPalabraEmpiezaConA = /\b[aA]\w+/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// [aA] indica las letras a o A
// \w+ indica cualquier carácter *del alfabeto latino*, varias veces

console.table(extractoAlicia.match(regexpPalabraEmpiezaConA));
// ["Ada", "absoluto"]
```

### Busca una palabra (de caracteres Unicode)

En lugar del alfabeto latino, podemos usar una variedad de caracteres Unicode para identificar una palabra (de modo que podamos tratar con texto en otros idiomas, tal como Ruso o Árabe). El "Plano multilingüe básico" de Unicode contiene la mayoría de los caracteres que se utilizan en todo el mundo y podemos utilizar clases y rangos de caracteres para reconocer las palabras escritas con esos caracteres.

```js
var textoNoEs = "Приключения Алисы в Стране чудес";
var regexpPalabraBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP pasa por U+0000 a U+FFFF pero el espacio es U+0020

console.table(textoNoEs.match(regexpPalabraBMP));
[ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ]
```

Nota para los editores de MDN: no intentes agregar ejemplos divertidos con emojis, ya que esos caracteres no los maneja la plataforma (Kuma).

## Especificaciones

| Especificación                                                                                           |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-characterclass', 'RegExp: Clases de caracteres')}} |

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
