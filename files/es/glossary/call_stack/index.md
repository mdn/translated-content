---
title: Pila de llamadas
slug: Glossary/Call_stack
---

Una **pila de llamadas** es un mecanismo para que un intérprete (como el intérprete de JavaScript en un navegador web) realice un seguimiento de en que lugar se llama a múltiples {{glossary("function","funciones")}}, qué función se esta ejecutando actualmente y qué funciones son llamadas desde esa función, etc.

- Cuando un script llama a una función, el intérprete la añade a la pila de llamadas y luego empieza a ejecutar la función.
- Cualquier función o funciones que sean llamadas por esa función son añadidas arriba de la pila de llamadas y serán ejecutadas cuando su llamada sea alcanzada.
- Cuando la función actual termina, el intérprete la elimina de la pila y reanuda la ejecución donde se quedó.
- Si la pila necesita más espacio del que se le asignó, se producirá un error de "desbordamiento de pila".

## Ejemplo

```js
function saludar() {
  // [1] Código
  diHola();
  // [2] Código
}
function diHola() {
  return "!Hola!";
}

// Invocar la función `saludar`
saludar();

// [3] Código
```

El código del ejemplo se ejecutaría de la siguiente manera:

1. Ignora todas las funciones hasta que alcanza la invocación de la función `saludar()`.
2. Añade la función `saludar()` a la lista de la pila de llamadas.

   > **Nota:** Lista de la pila de llamadas:
   > \- saludar

3. Ejecuta todas las líneas de código de dentro de la función `saludar()`.
4. Llega a la incovación de la función `diHola()`.
5. Añade la función `diHola()` a la lista de la pila de llamadas.

   > **Nota:** Lista de la pila de llamadas:
   > \- saludar
   > \- diHola

6. Ejecuta todas las líneas de código de dentro de la función `diHola()` hasta que llega al final.
7. Devuelve la ejecución a la línea que invocó a la función `diHola()` y continua con la ejecuación del resto de código de la función `saludar()`.
8. Elimina la función `diHola()` de la lista de la pila de llamadas.

   > **Nota:** Lista de la pila de llamadas:
   > \- saludar

9. Cuando todo el código dentro de la función `saludar()` ha sido ejecutado, vuelve a la línea que la invocó y continua ejecutando el resto de código JavaScript.
10. Elimina la función `saludar()` de la lista de la pila de llamadas.

    > **Nota:** Lista de la pila de llamadas:
    > VACÍA

En resumen, empezamos con una lista de la pila llamadas vacía. Cuando invocamos una función, ésta es automáticamente añadida a la pila de llamadas. Una vez ha ejecutado todo su código, también de manera automática es eliminada de la pila de llamadas. Finalmente, la pila de llamadas vuelve a estar vacía.

<section id="Quick_links">
 <ul>
  <li><a href="/es/docs/Glossary">Glosario</a>
   <ul>
    <li>{{Glossary("Call stack", "Pila de llamadas")}}</li>
    <li>{{Glossary("function", "Función")}}</li>
   </ul>
  </li>
 </ul>
</section>
