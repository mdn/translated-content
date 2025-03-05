---
title: Funcion de primera clase
slug: Glossary/First-class_Function
---

{{GlossarySidebar}}

Un lenguaje de programación se dice que tiene **Funciones de primera clase** cuando las funciones en ese lenguaje son tratadas como cualquier otra variable. Por ejemplo, en ese lenguaje, una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función y puede ser asignada a una variable.

## Ejemplo | Asignar función a una variable

### JavaScript

```js
const foo = function () {
  console.log("foobar");
};
// Invocación usando una variable
foo();
```

Asignamos una **Función Anónima** a una {{glossary("Variable")}}, la cual utilizamos para invocar la función añadiendo paréntesis `()` al final.

> **Nota:** **Aunque la función no sea anónima (función nombrada),** se puede utilizar la variable para invocarla. Nombrar las funciones puede ser útil cuando estamos depurando el código. _Pero no afectará como invocamos a la función._

## Ejemplo | Pasar la función como argumento

### JavaScript

```js
function diHola() {
  return "Hola ";
}
function saludar(saludo, nombre) {
  console.log(saludo() + nombre);
}
// Pasamos `diHola` como argumento de la función `saludar`
saludar(diHola, "JavaScript!");
```

Pasamos nuestra función `diHola()` como argumento de la función `saludar()`, esto explica como tratamos la función como un **valor**.

> [!NOTE]
> Una función que pasamos como argumento a otra función, se llama **{{glossary("Callback function")}}**. _`diHola` es una función Callback._

## Ejemplo | Devolver una función

### JavaScript

```js
function diHola() {
  return function () {
    console.log("¡Hola!");
  };
}
```

En este ejemplo; Necesitamos devolver una función desde otra función - _Podemos devolver una función porque JavaScript trata la función como un **value**._

> [!NOTE]
> Una función que devuelve una función se llama **Higher-Order Function**.

Volviendo al ejemplo; Ahora, necesitamos invocar la función `diHola` y su `Función Anónima` devuelta. Para ello, tenemos dos maneras:

### 1- Usando una variable

```js
const diHola = function () {
  return function () {
    console.log("¡Hola!");
  };
};
const miFuncion = diHola();
miFuncion();
```

De esta manera, devolverá el mensaje `¡Hola!`.

> [!NOTE]
> Debes usar otra variable para que devuelve el mensaje. Si invocas `diHola` directamente, devolvera la función en si misma **sin invocar a la función devuelta**.

### 2- Usando paréntesis doble

```js
function diHola() {
  return function () {
    console.log("¡Hola!");
  };
}
diHola()();
```

Usamos paréntesis doble `()()` para invocar también a la función retornada.

- [First-class functions](ttps://es.wikipedia.org/wiki/First-class_function) en Wikipedia
- [Glosario de MDN Web Docs](/es/docs/Glossary)
  - {{Glossary("Callback function")}}
  - {{Glossary("Function")}}
  - {{Glossary("Variable")}}
