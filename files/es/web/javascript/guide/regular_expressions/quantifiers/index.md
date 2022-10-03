---
title: Cuantificadores
slug: Web/JavaScript/Guide/Regular_Expressions/Quantifiers
tags:
  - Expresiones Regulares
  - Guía
  - JavaScript
  - Referencia
  - cuantificadores
  - regex
translation_of: Web/JavaScript/Guide/Regular_Expressions/Quantifiers
original_slug: Web/JavaScript/Guide/Regular_Expressions/Cuantificadores
---
{{jsSidebar("JavaScript Guide")}}

Los cuantificadores indican el número de caracteres o expresiones que deben coincidir.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Tipos

La siguiente tabla también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Cheatsheet", "esta hoja de referencia")}}. No olvides editarla también, ¡gracias!

> **Nota:** A continuación, _elemento_ se refiere no solo a caracteres individuales, sino que también incluye {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "clases de caracteres")}}, {{JSxRef("../Guide/Regular_Expressions/Unicode_Property_Escapes", "escapes de propiedades Unicode")}}, {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "grupos y rangos")}}.

«Tabla»

## Ejemplos

### Patrón repetido

```js
var palabraTerminadaConAes = /\w+a+\b/;
var mensajeDelicado = "Esto es Espartaaaaaaa";

console.table(mensajeDelicado.match(palabraTerminadaConAes)); // [ "Espartaaaaaaa" ]
```

### Conteo de caracteres

```js
var palabraDeUnaLetra = /\b\w\b/g;
var palabraNoTanLarga = /\b\w{1,6}\b/g;
var palabraLaaaaarga = /\b\w{10,}\b/g;

var frase = "¿Por qué me tengo que sentar a estudiar las tablas de multiplicar?";

console.table(frase.match(palabraDeUnaLetra)); // ["a"]
console.table(frase.match(palabraNoTanLarga));    // ["Por", "qu", "me", "tengo", "que", "sentar", "a", "las", "tablas", "de"]
console.table(frase.match(palabraLaaaaarga));      // ["multiplicar"]
```

### Caracter opcional

```js
var londinText = "He asked his neighbour a favour.";
var yanquiText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;
// \w+ Una o varias letras
// o   seguida de una "o",
// u?  opcionalmente seguida de una "u"
// r   seguida de una "r"

console.table(londinText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(yanquiText.match(regexpEnding));
// ["neighbor", "favor"]
```

### Codicioso versus no codicioso

```js
var texto = "Debo estar muy cerca del centro de la tierra.";
var regexpCodiciosa = /[\w ]+/;
// [\w ]      una letra del alfabeto latino o un espacio en blanco
//      +     una o varias veces

console.log(texto.match(regexpCodiciosa)[0]);
// "Debo estar muy cerca del centro de la tierra."
// casi todo el texto coincide (omite el caracter de punto)

var regexpNoCodiciosa = /[\w ]+?/; // Observa el signo de interrogación
console.log(texto.match(regexpNoCodiciosa));
// "D"
// La coincidencia es la más pequeña posible
```

## Especificaciones

| Especificación                                                                           |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-quantifier', 'RegExp: Quantifiers')}} |

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
