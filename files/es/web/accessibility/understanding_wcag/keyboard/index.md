---
title: Teclado (Keyboard)
slug: Web/Accessibility/Understanding_WCAG/Keyboard
---

Para ser completamente accesible, una página web debe ser operable por alguién utilizando únicamente un teclado para acceder y controlarla. Esto incluye usuarios de lectores de pantalla, pero también puede incluir a quienes tienen dificultades utilizando un dispositivo apuntador como un ratón o una bola de rastreo, o aquellos cuyo ratón no esta funcionando temporalmente, o la gente que simplemente prefiere usar un teclado como entrada siempre que les sea posible.

## Los elementos enfocables deben tener una semántica interactiva

Si un elemento puede ser enfocado utilizando un teclado, entonces debería ser interactivo, es decir, el usuario debería ser capaz de hacer algo y producir un cambio de algún tipo (por ejemplo, activar un enlace o cambiar una opción).

> **Nota:** Una excepción importante a esta regla es si el elemento tiene aplicado `role="document"`, **dentro** un contexto interactivo (como un `role="application"`). En tal caso, enfocar el documento anidado es la única forma de devolver la tecnología de asistencia a un estado de no interactividad (comúnmente llamado "modo navegador").

La mayoría de los elementos son enfocables por defecto, y se puede hacer que un elemento sea enfocable al añadir el atributo `tabindex=0`. Sin embargo, sólo se debería añadir `tabindex` si el elemento también se hace interactivo, por ejemplo, definiendo los eventos de teclado apropiados para los manejadores de eventos.

### Ver también

- Atributo HTML global [tabindex](/es/docs/Web/HTML/Global_attributes/tabindex)
- Manejador de evento global: [onkeydown](/es/docs/Web/API/GlobalEventHandlers/onkeydown)
- Manejador de evento global: [onkeyup](/es/docs/Web/API/GlobalEventHandlers/onkeyup)

## Evitar usar el atributo `tabindex` con un valor mayor a cero

El atributo `tabindex` indica que un elemento es enfocable utilizando el teclado. Un valor de cero indica que el elemento es parte del orden de enfoque normal, que está basado en el orden de los elementos en el documento HTML. Un valor positivo pone al elemento adelante de aquellos con el orden normal; elementos con valores positivos son enfocados en el orden del valor de `tabindex` (1, luego 2, después 3, etc.).

Esto genera una confusión para usuarios que solo usen el teclado cuando el orden del enfoque difiera al orden lógico de la página. Una mejor estrategia es estructurar el documento HTML para que los elementos enfocables estén es un orden lógico, sin la necesidad de reordenarlos con un valor positivo de `tabindex`.

### Ver también

- Atributo HTML globlal [tabindex](/es/docs/Web/HTML/Global_attributes/tabindex)
- [Entendiento el orden del enfoque](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [No use un tabindex mayor que 0](http://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Los elementos a los que se les puede hacer click deben ser enfocables y deberían tener semánticas interactivas

Si a un elemento se le puede hacer click con un dispositivo apuntador, como un ratón, entonces también debería enfocable utilizando el teclado, y el usuario debería ser capaz de hacer algo al interactuar con este.

A un elemento se le puede hacer click si tiene in manejador de evento `onclick` definido. Se puede hacer enfocable al añadir un atributo-valor `tabindex=0`. Se puede hacer que se opere con un teclado al definir un manejador de evento `onkeydown`; en la mayoría de los casos, la acción tomada por el manejador de eventos debería ser la misma para los dos tipos de eventos

### Ver también

- El atributo global HTML [tabindex](/es/docs/Web/HTML/Global_attributes/tabindex)
- Manejador de evento global: [onkeydown](/es/docs/Web/API/GlobalEventHandlers/onkeydown)
- Manejador de evento global: [onkeyup](/es/docs/Web/API/GlobalEventHandlers/onkeyup)

## Los elementos interactivos deben ser capaz de ser activos utilizando un teclado

Si el usuario puede interactuar con un elemento utilizando el tacto o un dispositivo apuntador, entonces el elemento debería ser también capaz de interactuar con el teclado, Es decir, si hay manejadores de evento definidos para los eventos al tacto y al hacer click, también debería haber manejadores de eventos para el teclado. Los manejadores de eventos para el teclado deberían realizar la misma interacción que sus contrapartes con el tacto y al hacer click.

### Ver también

- Manejador de evento global: [onkeydown](/es/docs/Web/API/GlobalEventHandlers/onkeydown)
- Manejador de evento global: [onkeyup](/es/docs/Web/API/GlobalEventHandlers/onkeyup)

## Los elementos interactivos deben ser enfocables

Si el usuario puede interactuar con un elemento (por ejemplo, usando el tacto o con un dispositivo apuntador) entonces debería ser enfocable utilizando el teclado. Puede hacerse enfocable al añadirle el atributo-valor `tabindex=0`. Eso añadirá el elemento a la lista de elementos que pueden ser enfocados al presionar la tecla <kbd>Tab</kbd>, en la secuencia en que dichos elementos se encuentran definidos en el documento HTML.

### Ver también

- Atributo global HTML [tabindex](/es/docs/Web/HTML/Global_attributes/tabindex)

## Elementos enfocables deben tener un estilo al estar enfocados

Cualquier elemento que pueda recibir el enfoque desde el teclado, debería tener un estilo visible que indique cuando el elemento esta enfocado. Se puede hacer esto con la pseudo-clase de CSS [`:focus`](/es/docs/Web/CSS/:focus).

Elementos enfocables estándar como enlaces y los campos de entrada reciben un estilo especial por parte del navegador de forma predeterminada, por lo que podría no ser necesario especificar un estilo de enfoque para éstos, a menos que se quiera que el estilo de enfoque sea más distintivo.

Si se crean componentes enfocables, se debe estar seguro de que también se defina el estilo de enfoque para éstos.

If you create your own focusable components, be sure that you also define focus styling for them.

### Ver también

- [Utilizando CSS para cambiar la presentación de un componente UI cuando reciba el enfoque](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
