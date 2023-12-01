---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

```
ReferenceError: "x" no está definida.
```

## Tipo de error

{{jsxref("ReferenceError")}}

## ¿Qué está mal?

Hay una variable no existente que está siendo referida en algún lugar. Esta variable necesita ser declarada o se debe comprobar su disponibilidad en el {{Glossary("ámbito")}} actual del script.

> **Nota:** Cuando una librería es cargada (como por ejemplo jQuery) asegúrese de que se haya cargado antes de intentar acceder a sus variables, como por ejemplo "$". Ponga la etiqueta {{HTMLElement("script")}}, que carga la librería antes del código que la utiliza.

## Ejemplo

### Variable no declarada

```js example-bad
foo.substring(1); // ReferenceError: foo no está declarada.
```

La variable "foo" no está declarada en ninguna parte. La variable debe ser alguna cadena para que el método {{jsxref("String.prototype.substring()")}} funcione correctamente.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### Contexto erróneo

Una variable necesita estar disponible en el contexto actual de ejecución. No se puede acceder a las variables definidas dentro de una [función](/es/docs/Web/JavaScript/Referencia/Funciones) desde fuera de dicha función, debido a que la variable está definida solamente dentro de la función.

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 sin definir.
```

Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en la cual ha sido definida. Es decir, una función en el contexto global puede acceder a todas las variables definidas en el contexto global.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## Temas relacionados

- {{Glossary("Ámbito")}}
- [Guía; declarando variables en JavaScript](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
- [Guía; contexto de la función en Java Script](/es/docs/Web/JavaScript/Guide/Functions#ámbito_de_function)
