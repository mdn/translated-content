---
title: Creando componentes en nuestra app de React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: 16d3095f33bd0655b01098ce662e3014510fdef6
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

En este punto, nuestra aplicación es un monolito. Antes de hacer que haga cosas, necesitamos dividirlo en componentes manejables y descriptivos. React no tiene ninguna regla estricta sobre lo que es y no es un componente - ¡eso depende de ti! En este artículo, le mostraremos una forma sensata de dividir nuestra aplicación en componentes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequesitos:</th>
      <td>
        <p>
          Estar familiarizado con los lenguajes básicos <a href="/es/docs/Learn/HTML">HTML</a>,
          <a href="/es/docs/Learn/CSS">CSS</a>, y
          <a href="/es/docs/Learn/JavaScript">JavaScript</a>,
          conocimientos de la
          <a
            href="/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/linea de comandos</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Mostrar una forma sensata de dividir nuestra aplicación _Todo list_ (lista de tareas) en componentes.
      </td>
    </tr>
  </tbody>
</table>

## Definiendo nuestro primer componente

Definir un componente puede parecer complicado hasta que tenga algo de practica, pero el principio es:

- Si este representa un "fragmento" obvio de tu aplicación, probablemente sea un componente.
- Si se reutiliza frecuentemente, probablemente sea un componente.

El segundo punto es especialmente valioso: crear un componente a partir de los elementos comunes de la UI permite que cambies tu código en un solo lugar y ver esos cambios en todos los lugares donde se usa ese componente. Tampoco es necesario dividir todo en componentes. Tomemos el segundo punto como inspiración y hagamos un componente a partir de la parte más importante y más reutilizada de la interfaz de usuario: un elemento de la lista de tareas pendientes.

## Haz un `<Todo />`

Antes de que podamos crear un componente, debemos crear un archivo nuevo para él. De echo, debemos crear un directorio para nuestros componentes. Los siguientes comandos crean un directorio `components` y luego, dentro de este, un archivo llamado `Todo.js`. Asegurate de estar en la raíz de tu aplicación antes de ejecutarlas.

```bash
mkdir src/components
touch src/components/Todo.js
```

Nuestro archivo nuevo `Todo.js` esta vació actualmente! Ábrelo y agrega la primera linea:

```jsx
import React from "react";
```

Ya que vamos a crear un componente llamado `Todo`, también puede comenzar a agregar el código para eso en `Todo.js`, de la siguiente manera. En este código, definimos la función y la exportamos en la misma línea:

```jsx
export default function Todo() {
  return (
    // …
  );
}
```

Esto esta bien hasta ahora, ¡pero nuestro componente debe devolver algo!, Vamos de vuelta a `src/App.js`, copie el primer [`<li>`](/es/docs/Web/HTML/Element/li) de la lista desordenada y péguelo en `Todo.js` para que se lea así:

```jsx
export default function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}
```

> **Nota:** Los componentes siempre deben devolver algo. Si en cualquier punto en el futuro intentas renderizar un componente que no devuelve nada, React mostrará un error en el navegador.

Nuestro componente `Todo` esta completo, por ahora; ahora podemos usarlo. En `App.js`, agrega la siguiente linea hasta arriba del archivo para importar `Todo`;

```jsx
import Todo from "./components/Todo";
```

Con este componente importado, podemos reemplazar todos los elementos `li` en `App.js` por el componente `<Todo />`, Tu `ul` debería leerse así:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

Cuando vuelves a mirar tu navegador, notarás algo desafortunado: ¡tu lista ahora repite la primera tarea 3 veces!

![Nuestra aplicación de lista de tareas, con componentes que se repiten porque la etiqueta está codificada en el componente](todo-list-repeating-todos.png)

No queremos comer unicamente; tenemos otras cosas que - bueno - que hacer. A continuación veremos cómo podemos hacer que diferentes llamadas de componentes genere contenido único.

## Haz un `<Todo />` único

Los componentes son poderosos porque nos permiten reutilizar partes de nuestra UI, y hacer referencia a un lugar para el origen de nuestra UI. El problema es que normalmente no queremos reutilizar todos los componentes, queremos reutilizar la mayoría, y cambiar piezas pequeñas. Aquí es donde llegan los _props_ (propiedades).

### ¿Que hay en un `name`?

Para rastrear los nombres de las tareas que queremos completar, debemos asegurarnos de que cada componente `<Todo />` renderize un nombre único.

En `App.js` asigna una propiedad `name` a cada `<Todo />`. Vamos a usar los nombres de nuestras tareas que teníamos anteriormente:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Cuando actualice su navegador, verá... exactamente lo mismo que antes. Le agregamos algunas _props_ a nuestro `<Todo />`, pero no lo estamos usando todavía. Vamos de vuelta a `Todo.js` y solucionemos eso.

Primero modifique la definición de su función `Todo()` para que tome `props` como parámetro. Puede imprimir los `props` en un `console.log()`, si desea comprobar que el componente los recibe correctamente.

Una vez que este seguro que su componente esta obteniendo los `props`, puede reemplazar todas las ocurrencias de `Eat` por el _prop_ `name`. Recuerde: cuando está en medio de una expresión JSX, use llaves para inyectar el valor de una variable.

Poniendo todo eso junto, su función `Todo()` debería quedar así:

```jsx
export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
```

_Ahora_ su navegador debería mostrar tres tareas únicas. Sin embargo, queda otro problema: todos siguen marcados de forma predeterminada.

![Nuestra lista de tareas, con diferentes etiquetas de tareas ahora se pasan a los componentes como propiedades](todo-list-unique-todos.png)

### ¿Está `completado`?

En nuestra lista estática original, únicamente `Eat` estaba marcado. Una vez más, queremos reutilizar la mayoría de la UI que constituye el componente `<Todo />`, pero cambia una cosa. ¡Eso es un buen trabajo para otra _prop_!.

Agrega una nueva _prop_ a cada `<Todo />` en `App.js` llamado `completed`. El primero (`Eat`) debería tener el valor `true`; el resto debería ser `false`:

```jsx
<Todo name="Eat" completed={true} />
<Todo name="Sleep" completed={false} />
<Todo name="Repeat" completed={false} />
```

Para usar estos _props_, debemos volver a `Todo.js`. Cambia el atributo `defaultChecked` en el `<input />` para que su valor sea igual a la _prop_ `completed`. Una vez terminado, el elemento `<input />` del componente `Todo` se verá así:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Y su navegador debería actualizarse para mostrar que solo `Eat` está marcado:

![Nuestra aplicación de lista de tareas, ahora con diferentes estados marcados: algunas casillas están marcadas, otras no](todo-list-differing-checked-states.png)

Si cambia el _prop_ `completed` en cada componente `<Todo />`, su navegador marcará o desmarcará los checkbox equivalentes respectivamente.

### Asigna algún `id`, porfavor

Ahora, nuestro componente `<Todo />` asigna un atributo `id` con el valor `todo-0` a cada tarea. Esto es una mala practica en HTML porque los [atributos `id`](/es/docs/Web/HTML/Global_attributes/id) deben ser únicos (son utilizados como un identificador único para fragmentos de documentos, por CSS, JavaScript, etc.). Esto significa que debemos darle a nuestro componente un `id` que tome un valor único para cada `Todo`

Para seguir con el mismo patron que teníamos inicialmente, vamos a darle a cada instancia del componente `<Todo />` un ID con el formato `todo-i`, donde `i` cada vez es mas grande por uno:

```jsx
<Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1" />
<Todo name="Repeat" completed={false} id="todo-2" />
```

Ahora vuelve a `Todo.js` y usa la _prop_ `id`. Es necesario reemplazar el valor del atributo `id` del elemento `<input />`, así como el valor del atributo `htmlFor` de su etiqueta:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## Hasta ahora, ¿Todo bien?

Estamos haciendo un bueno uso de React, ¡pero podemos hacerlo mejor! nuestro código es repetitivo. Las tres lineas que renderiza nuestro componente `<Todo />` son muy idénticos, con una sola diferencia: el valor de cada _prop_.

Podemos limpiar nuestro código con uno de las capacidades principales de JavaScript: La iteración. Para usar la iteración, primero debemos repensar nuestras tasks.

## Tareas como datos

Actualmente cada una de nuestras tareas contiene tres piezas de información: su nombre, si se ha completado, y su ID único. Estos datos se traducen muy bien en un objeto. Ya que tenemos mas de una tarea, un arreglo de objetos funcionaría muy bien para representar estos datos.

En `src/index.js`, crea una nueva `const` debajo de la última importación, pero antes de `ReactDOM.render()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

A continuación pasaremos `DATA` a `<App />` como una _prop_, llamado `tasks`, quedando de la siguiente manera nuestro código:

```jsx
ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
```

Este arreglo ahora esta disponible en el componente `App` como `props.tasks`. Puede usar `console.log` para comprobarlo, si lo desea.

> **Nota:** `TODAS_MAYUSCULAS` los nombres de las constantes no tienen un significado especial en Javascript; es una convención para decirle a otros desarrolladores "Estos datos nunca cambiarán después de haberse definido aquí".

## Renderizado con iteración

Para renderizar nuestro arreglo de objetos, tenemos que convertir cada uno en un componente `<Todo />`. JavaScript nos brinda un método para transformar los datos de un arreglo en algo: [`Array.prototype.map()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Antes de la sentencia return de `App()`, crea una nueva `const` llamada `taskList` y use `map()` para transformarla. Comencemos convirtiendo nuestra arreglo de `tasks` en algo simple: el `name` de cada tarea:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Intentemos reemplazar todos los hijos de `<ul>` con `taskList`:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Este nos ayuda a mostrar nuevamente todos los componentes, pero tenemos mas trabajo que hacer: el navegador representa el nombre de cada tarea como texto no estructurado.
Falta la estructura de nuestro HTML - ¡la etiqueta `<li>` y sus casillas de verificación y botones!.

![Nuestra aplicación de lista de tareas con las etiquetas de elementos de tareas que se muestran agrupadas en una línea](todo-list-unstructured-names.png)

Para corregirlo, necesitamos devolver un componente `<Todo />` de nuestra función `map()` - ¡recuerda que JSX permite mezclar JavaScript y estructura de marcado! Probemos lo siguiente reemplazando lo que ya tenemos.

```jsx
const taskList = props.tasks.map((task) => <Todo />);
```

Mire nuevamente su aplicación; ahora nuestras tareas se parecen más a las de antes, pero les faltan los nombres de las propias tareas. Recuerde que cada tarea que mapeamos tiene las propiedades `id`, `name` y `completed` que queremos pasar a nuestro componente`<Todo />`. Si juntamos ese conocimiento, obtenemos un código como este:

```jsx
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Ahora la aplicación luce como antes, y nuestro código es menos repetitivo.

## Claves únicas

Ahora que React está renderizando nuestras tareas desde un arreglo, tiene que hacer un seguimiento de cuál es cuál para hacerlo correctamente. React intenta hacer esto por si mismo, pero podemos ayudarlo pasándole una _prop_ `key` a nuestros componentes `<Todo />`. La `key` es un _prop_ especial que es administrado por React - no puede usar la palabra `key` para cualquier otro propósito.

Debido a que las claves deben ser únicas, vamos a reutilizar el `id` de cada objeto de tarea como su clave. Actualize su constante `taskList` así.

```jsx
const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**Siempre debe pasar una clave unica a cualquier cosa que renderice con iteración.** Obviamente no cambiará nada en tu navegador, pero si no usas claves únicas, ¡React mostrará una advertencia en la consola y tal vés tu aplicación se comporte extraño!

## Creando el resto de componentes de la aplicación

Ahora que hemos resuelto nuestro componente mas importante, podemos dividir el resto de nuestra aplicación en componentes.
Recordando que los componentes son piezas obvias de la UI, o piezas reutilizables de la UI, o ambos, podemos hacer 2 componentes mas:

- `<Form/>`
- `<FilterButton/>`

Ya que sabemos que necesitamos a ambos, podemos agrupar la creación de archivos con un comando de la terminal. Ejecuta el comando en tu terminal, teniendo cuidado de estar en la carpeta raiz de tu aplicación.

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### El `<Form />`

Abre `components/Form.js` y haz lo siguiente:

- Importa `React` hasta arriba del archivo, como lo hicimos en `Todo.js`.
- Crea un nuevo componente `Form()` con la misma estructura básica como `Todo()`, y exportalo.
- Copia la etiqueta `<form>` y su contenido en `App.js`, y pegalo dentro `return` del componente `Form()`
- Exporta el componente `Form` al final del archivo.

Tu archivo `Form.js` debería leerse así:

```jsx
import React from "react";

function Form(props) {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

### El \<FilterButton />

Haz lo mismo que hiciste para crear `Form.js` dentro de `FilterButton.js`, pero llamando el componente `FilterButton()` y copia el HTML del primer botón dentro del `<div>` con la `class` `filters` de `App.js` pegalo dentro del `return`

El archivo debería leerse así:

```jsx
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> **Nota:** Podrias notar que estamos cometiendo el mismo error que cometimos por primera vez con el componente `<Todo />`, en que cada botón será lo mismo. ¡Esta bien! Vamos arreglarlo mas adelante en [Volver a los botones de filtro](/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importando todos nuestros componentes

Hagamos uso de nuestros nuevos componentes.

Agrega más `import` en `App.js` para importarlos.

Luego, actualice el `return` de `App()` para que renderice nuestros componentes. Cuando termine, `App.js` se leerá así:

```jsx
import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

Con esto en su lugar, ¡estamos _casi_ listos para abordar algo de interactividad en nuestra aplicación React!

## Resumen

Y eso es todo en este artículo — hemos profundizado un poco en cómo dividir su aplicación en componentes, y renderizarlos eficientemente. Ahora veremos como manejamos los eventos en React, y empezaremos a agregar algo de interactividad.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
