---
title: Trabajar con la API de Historial
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: d8ecbd3de36a098b1f83f935e581993e9600a916
---

{{DefaultAPISidebar("History API")}}

La API History o de historial permite a un sitio web interactuar con el historial de sesiones del navegador, es decir, la lista de páginas que el usuario ha visitado en una ventana determinada. A medida que el usuario visita nuevas páginas, por ejemplo, haciendo clic en enlaces, esas nuevas páginas se añaden al historial de la sesión. El usuario también puede desplazarse hacia delante y hacia atrás por el historial utilizando los botones "Atrás" y "Adelante" del navegador.

La interfaz principal definida en la API de historial es la interfaz {{domxref("History")}}, que define dos conjuntos de métodos bastante distintivos:

1. Métodos para navegar a una página en el historial de la sesión:
   - {{domxref("History.back()")}}
   - {{domxref("History.forward()")}}
   - {{domxref("History.go()")}}

2. Métodos para modificar el historial de sesiones:
   - {{domxref("History.pushState()")}}
   - {{domxref("History.replaceState()")}}

En esta guía, solo trataremos el segundo conjunto de métodos.

El método `pushState()` añade una nueva entrada al historial de la sesión, mientras que el método `replaceState()` actualiza la entrada del historial de la sesión para la página actual. Ambos métodos toman un parámetro de `state` que puede contener cualquier {{Glossary("Serializable_object", "serializable object")}}. Cuando el navegador navega a esta entrada del historial, el navegador activa un evento {{domxref("Window.popstate_event", "popstate")}}, que contiene el objeto de estado asociado con esa entrada.

El objetivo principal de esta API es dar soporte a sitios web como {{Glossary("SPA", "Single-page applications")}}, que utilizan API de JavaScript como {{domxref("Window/fetch", "fetch()")}} para actualizar la página con nuevo contenido, en lugar de cargar una página completamente nueva.

## Aplicaciones de página única (SPA) e historial de sesiones

Tradicionalmente, los sitios web se implementan como una colección de páginas. Cuando los usuarios navegan por diferentes partes del sitio haciendo clic en los enlaces, el navegador carga una página completamente nueva cada vez.

Aunque esto es ideal para muchos sitios web, puede tener algunas desventajas:

- Puede resultar ineficaz cargar toda la página cada vez, cuando solo es necesario actualizar una parte de ella.
- Es difícil mantener el estado de la aplicación al navegar por las páginas.

  Por estas razones, un patrón popular para las aplicaciones web es la {{Glossary("SPA", "single-page application")}} (SPA). Cuando un usuario hace clic en un enlace, la SPA realiza los siguientes pasos:

1. Evita el comportamiento predeterminado de cargar una nueva página.
2. Obtiene nuevo contenido para mostrar mediante el método {{domxref("Window/fetch", "Fetch", "", "nocode")}}.
3. Actualiza la página con el nuevo contenido.

Por ejemplo:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // Evita que se carge una nueva página
    event.preventDefault();
    try {
      // Obtener nuevo contenido
      const response = await fetch(`creatures/${creature}.json`);
      const result = await response.json();
      // Actualiza la página con el nuevo contenido
      displayContent(result);
    } catch (err) {
      console.error(err);
    }
  }
});
```

En este manejador de clics, si el enlace contiene un atributo de datos `"data-creature"`, utilizamos el valor de ese atributo para obtener un archivo JSON que contiene el nuevo contenido de la página.

El archivo JSON podría tener el siguiente aspecto:

```json
{
  "description": "Bald eagles are not actually bald.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "A bald eagle"
  },
  "name": "Eagle"
}
```

Nuestra función `displayContent()` actualiza la página con el JSON:

```js
// Actualiza la página con el nuevo contenido
function displayContent(content) {
  document.title = `Creatures: ${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

El problema es que interrumpe el comportamiento esperado de los botones "Atrás" y "Adelante".

Desde el punto de vista del usuario, al hacer clic en un enlace, la página se actualizó, por lo que parece una página nueva. Si luego presionan el botón "Atrás" del navegador, esperan volver al estado anterior, es decir justo antes de haber hecho clic en el enlace.

Pero, en lo que respecta al navegador, el último enlace no cargó una nueva página, por lo que "Atrás" llevará al navegador a la página que se estaba cargando antes de que el usuario abriera la SPA.

Este es, en esencia, el problema que resuelven `pushState()`, `replaceState()`, y el evento `popstate`. Estos, nos permiten sintetizar entradas del historial y recibir una notificación cuando la entrada actual del historial de la sesión cambia a una de estas entradas (por ejemplo, porque el usuario ha pulsado los botones "Atrás" o "Adelante").

## Utilizando `pushState()`

Podemos añadir una entrada de historial al manejador de clics anterior de la siguiente forma:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const result = await response.json();
      displayContent(result);
      // Anadir una nueva entrada al historial.
      // Esto simula la carga de una nueva página.
      history.pushState(result, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Aquí, estamos llamando a `pushState()` con tres argumentos:

- `result`: Este es el contenido que acabamos de obtener. Se almacenará con la entrada del historial y posteriormente, se incluirá como la propiedad {{domxref("PopStateEvent.state", "state")}} del argumento pasado al manejador de eventos `popstate`.
- `""`: Esto es necesario para la compatibilidad con sitios web antiguos y siempre debe ser una cadena vacía.
- `creature`: Se utilizará como URL para la entrada. Se mostrará en la barra de direcciones del navegador y se utilizará como valor del encabezado {{httpheader("Referer")}} en cualquier solicitud HTTP que realice la página. Tenga en cuenta que este debe ser {{Glossary("Same-origin policy", "same-origin")}} con la página.

## Uso del envento `popstate`

Supongamos que el usuario realiza los siguientes pasos:

1. Hace clic en un enlace de nuestra SPA, por lo que actualizamos la página y añadimos la entrada A al historial utilizando `pushState()`.
2. Hace clic en otro enlace de nuestra SPA, por lo que actualizamos la página y añadimos la entrada B al historial utilizando `pushState()`.
3. "Pulsa el botón "Atrás".

Ahora, la nueva entrada del historial es A, por lo que el navegador activa el evento `popstate` y el argumento del manejador de eventos incluye el JSON que pasamos a `pushState()` cuando manejamos la navegación a A. Esto significa que podemos restaurar el contenido correcto con un manejador de eventos como este:

```js
// Manejar botones de avance/retroceso
window.addEventListener("popstate", (event) => {
  // Si se ha proporcionado un estado, tenemos una página "simulada"
  // y actualizamos la página actual.
  if (event.state) {
    // Simular la carga de la página anterior
    displayContent(event.state);
  }
});
```

## Utilizando `replaceState()`

Hay un elemento más que debemos añadir. Cuando el usuario carga la SPA, el navegador añade una entrada al historial. Dado que se trata de una carga de página real, la entrada no tiene ningún estado asociado. Supongamos que el usuario hace lo siguiente:

1. Carga la SPA, por lo que el navegador añade una entrada al historial.
2. Hace clic en un enlace dentro de la SPA, por lo que el manejador de clics actualiza la página y añade una entrada al historial con `pushState()`.
3. Pulsa el botón "Atrás".

Ahora queremos volver al estado inicial de la SPA, pero como se trata de una navegación dentro del mismo documento, la página no se recargará, y como la entrada del historial de la página inicial no tiene estado, no podemos utilizar `popstate` para restaurarla.

La solución aquí es utilizar `replaceState()` para establecer el objeto de estado de la página inicial. Por ejemplo:

```js
// Crear estado al cargar la página y sustituir el historial actual por este estado.
const image = document.querySelector("#photo");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Home",
};
history.replaceState(initialState, "", document.location.href);
```

Al cargar la página, recopilamos todas las partes de la página que necesitamos restaurar cuando el usuario vuelve al punto de partida de la SPA. Esto tiene la misma estructura que el JSON que obtenemos al manejar otras navegaciones. Pasamos este objeto `initialState` dentro de `replaceState()`, que añade efectivamente el objeto de estado a la entrada actual del historial.

Cuando el usuario vuelve al punto de partida, el evento `popstate` contendrá este estado inicial y podremos utilizar nuestra función `displayContent()` para actualizar la página.

## Ejemplo completo de la API de historial

Puedes encontrar este ejemplo completo en <https://github.com/mdn/dom-examples/tree/main/history-api> y ver la demostración en directo en <https://mdn.github.io/dom-examples/history-api/>.

## véase también

- [History API](/es/docs/Web/API/History_API)
- Objeto global {{domxref("window.history", "history")}}
