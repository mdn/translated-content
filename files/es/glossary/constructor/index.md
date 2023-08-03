---
title: Constructor
slug: Glossary/Constructor
---

Un **constructor** pertenece a una clase objeto ({{glossary("object")}}) particular la cual es instanciada. El constructor inicializa este objeto y puede otorgar acceso a su información privada. El concepto de objeto puede ser aplicado a la mayoría de los lenguajes orientados a objetos ({{glossary("OOP","object-oriented programming")}}). En esencia, un constructor en {{glossary("JavaScript")}} suele ser declarado al comienzo de una instancia de una clase ({{glossary("class")}}).

## Sintaxis

```js
// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ...,argN){
}
```

Para llamar al constructor de una clase en Javascript, use el operador `new` para asignar un objeto de referencia ({{glossary("object reference")}}) a una {{glossary("variable")}}.

```js
function Default() {}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
```

## Saber más

### Conocimiento general

- [Constructor](<https://es.wikipedia.org/wiki/Constructor_(inform%C3%A1tica)>) en Wikipedia

### Referencia técnica

- [El constructor en programación orientada a objetos para JavaScript](/es/docs/Learn/JavaScript/Objects#The_Constructor) en MDN
- [Operador new en JavaScript](/es/docs/Web/JavaScript/Reference/Operators/new) en MDN
