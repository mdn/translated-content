---
title: History.pushState()
slug: Web/API/History/pushState
---

{{APIRef("History API")}}

En un documento [HTML](/es/docs/Web/HTML), el método **`history.pushState()`** anexa un registro en la sesión de historial del navegador.

## Sintaxis

```
history.pushState(state, title, [url])
```

### Parámetros

- `state`

  - : El objeto `state` es un objeto de JavaScript asociado al nuevo registro en el historial creado por `pushState()`. Cuando el usuario navega al nuevo registro, un evento [`popstate`](/es/docs/Web/Reference/Events/popstate) es accionado, y la propiedad `state` del evento contiene una copia del objeto `state` del registro en el historial.

    El objeto `state` puede ser cualquier cosa que pueda ser serializada. Porque Firefox guarda los objetos `state` en el disco del usuario para que así puedan ser restaurados luego de que el usuario reinicia el navegador, se impone un límite de 640k caracteres en la representación serializada de un objeto `state`. Si pasas un objeto `state` con una representación serializada más grande que lo mencionado, a `pushState()`, el método arrojará una excepción. Si necesitas más espacio que el mencionado, es recomendable que uses {{domxref("Window.sessionStorage", "sessionStorage")}} y/o {{domxref("Window.localStorage", "localStorage")}}.

- `title`
  - : [La mayoría de los navegadores ignoran este parámetro](https://github.com/whatwg/html/issues/2174), sin embargo, podrían usarlo en el futuro. Pasar una cadena de texto vacía aquí, debería ser seguro contra futuros cambios en el método. Alternativamente, podrías pasar un título corto por el estado al cual te estás moviendo. Si necesitas que el título sea modificado, puedes usar {{domxref("Document.title", "document.title")}}.
- `url` {{optional_inline}}
  - : La URL del nuevo registro en el historial, se define en este parámetro. Es importante destacar que el navegador no intentará cargar esta URL luego de una llamada a `pushState()`, pero podría intentar cargar esta URL luego, por ejemplo, luego de que el usuario reinicie el navegador. La nueva URL no necesita ser absoluta; puede ser relativa a la URL actual. La nueva URL debe tener el mismo {{glossary("origin")}} que la URL actual; de otra manera, `pushState()` arrojará una excepción. Si este parámetro no es especificado, por defecto se usa la URL del documento actual.

## Descripción

En cierto sentido, llamar a `pushState()` es similar a `window.location = "#foo"`, ambos crearán y activarán un nuevo registro en el historial asociado al documento actual. Pero `pushState()` tiene unas ventajas adicionales:

- La nueva URL pueded ser cualquier URL con el mismo origen que la URL actual. En contraste, usar {{domxref("window.location")}} te mantiene en el mismo documento únicamente si modificas el _hash_.
- No tienes que cambiar la URL si no quieres. En contraste, usar `window.location = "#foo";` sólo crea un nuevo registro en el historial si el _hash_ actual no es `#foo`.
- Puedes asociar datos arbitrarios a tu nuevo registro en el historial. Con el truco del _hash_, necesitas codificar todos los datos relevantes en una corta cadena de texto.

Cabe destacar que `pushState()` nunca hace que el evento [`hashchange`](/es/docs/Web/Reference/Events/hashchange) sea accionado, incluso si la nueva URL difiere de la URL antigua sólo en su _hash_.

En otros documentos, crea u nelemento con una URI `null`.

## Ejemplos

Esto crea un nuevo registro en el historial del navegador, estableciendo `state`, `title`, y `url`.

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const title = "";
const url = "hello-world.html";

history.pushState(state, title, url);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- [Trabajando con la API History](/es/docs/Web/API/History_API/Working_with_the_History_API)
