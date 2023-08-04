---
title: Scope
slug: Glossary/Scope
---

El contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está "en el Scope- alcance actual", entonces no está disponible para su uso. Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.

Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que (por ejemplo) no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones. Por ejemplo, lo siguiente no es válido:

```js
function exampleFunction() {
  var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
  console.log("funcion interna");
  console.log(x);
}

console.log(x); // error
```

Sin embargo, el siguiente código es válido debido a que la variable se declara fuera de la función, lo que la hace global:

```js
var x = "función externa declarada";

exampleFunction();

function exampleFunction() {
  console.log("funcion interna");
  console.log(x);
}

console.log("funcion externa");
console.log(x);
```

## Aprende mas

### Conocimentos Generales

- [Scope (computer science)](<https://es.wikipedia.org/wiki/Scope_(computer_science)>) on Wikipedia
