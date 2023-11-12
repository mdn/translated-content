---
title: Manipulando el historial del navegador
slug: Web/API/History_API
---

El objeto DOM {{ domxref("window") }} proporciona acceso al historial del navegador a través del objeto {{ domxref("window.history", "history") }} . Este da acceso a métodos y propiedades útiles que permiten avanzar y retroceder a través del historial del usuario, así como --a partir de HTML5-- manipular el contenido del historial.

## Viajando a través del historial

Retroceder y avanzar a través del historial del usuario utilizando los métodos `back()`, `forward()` y `go()`.

### Moviéndose hacia adelante y hacia atrás

Para moverte hacia atrás, solo debes hacer:

```
window.history.back();
```

Esto actuará exactamente como si el usuario hiciera clic en el botón "atrás" en la barra de herramientas del navegador.

De manera similar, puedes moverte hacia adelante (como si el usuario hiciera clic en en el botón "adelante"), de esta forma:

```
window.history.forward();
```

### Moverse a un punto específico del historial

Puedes usar el método `go()` para cargar una página desde el historial de la sesión, identificada por su poscición relativa a la página actual (Siendo la página actual, por supuesto, relativa al índice 0).

Para moverse atrás una página (equivalente a llamar `back()`):

```
window.history.go(-1);
```

Para moverse una página hacia adelante, como si se llamara a `forward()`:

```
window.history.go(1);
```

De manera similar, puedes avanzar 2 páginas pasando 2 y así sucesivamente.

Otro uso para `go()` es el de actualizar la página ya sea pasando `0` como parámetro o ninguno.

```
// Cada una de las siguientes
// instrucciones actualiza la página
window.history.go(0);
window.history.go();
```

Puedes obtener el número de páginas en la pila del historial consultando el valor de la propiedad `length`:

```
var numeroDeEntradas = window.history.length;
```

> **Nota:** Internet Explorer admite el paso de cadenas de URL como parámetro para `go()`; esto no es estándar y no está implementado en Gecko.

## Añadiendo y modificando entradas del historial

HTML5 introduce los métodos `history.pushState()` y `history.replaceState()`, los cuales te permiten añadir y modificar entradas del historial, respectivamente. Estos métodos trabajan en conjunto con el evento {{ domxref("window.onpopstate") }}.

Hacer uso de `history.pushState()` cambia el referer que es utilizado en la cabecera HTTP por los objetos [XMLHttpRequest](/es/docs/XMLHttpRequest) que hayan sido creados luego de cambiar el estado. El referer utilizará la URL del documento cuyo objeto window sea `this` al momento de la creación del objeto [XMLHttpRequest](/es/docs/XMLHttpRequest).

### Ejemplo

Supongamos que `http://mozilla.org/foo.html` ejecuta el siguiente JavaScript:

```
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

Esto causará que la barra de URL muestre `http://mozilla.org/bar.html`, pero no provocará que el navegador carge bar.html ni tampoco que verifique si bar.html existe.

Supongamos ahora que el usuario navega hacia `http://google.com`, y despúes hace clic en Atrás. En este punto, la barra de URL mostrará `http://mozilla.org/bar.html`, y la página tendrá un evento `popstate` cuyo _state object_ contiene una copia de `stateObj`. La página en si se verá como `foo.html`, aunque la página podria modificar su contenido durante el evento `popstate` event.

Si hacemos clic en "atrás" nuevamente, la URL cambiará a `http://mozilla.org/foo.html`, y el documento generará otro evento `popstate` event, esta vez con un state object nulo. Aquí también, ir atrás no cambia el contenido del documento con respecto al paso anterior, aunque el documento permite actualizar su contenido manualmente después de recibir el evento `popstate`.

### El método pushState()

`pushState()` toma tres parámetros: un objeto estado, un título (el cual es normalmente ignorado) y (opcionalmente) una URL. Vamos a examinar cada uno de estos tres parametros en más detalle:

- **object estado** — El objeto estado es un objeto JavaScript el cual esta asociado con la nueva entrada al historial creada por `pushState()`. Cada vez que el usuario navega hacia un nuevo estado, un evento `popstate` event se dispara, y la propiedad `state` del evento contiene una copia del historial de entradas del objeto estado.

  El objeto estado puede ser cualquier cosa que puedas pasar a `JSON.stringify`. Dado que Firefox guarda los objetos estado en el disco del usuario para que puedan ser restaurados después de que el usuario reinicie su navegador, se ha impuesto un tamaño límite de 640K caracteres en representación JSON de un objeto estado. Si pasas un objeto estado cuya representación es más larga que esto a `pushState()`, el método arrojará una excepción. Si necesitas más espacio, se recomienda usar `sessionStorage` y/o `localStorage`.

- **título** — Firefox actualmente ignora este parámetro, aunque podría usarse en el futuro. Pasar una cadena de caracteres vacia aquí podría asegurar estar a salvo de futuros cambios en este método. Alternativamente podrías pasar un título corto del estado hacia el cual te estás moviendo.
- **URL** — La URL de la nueva entrada al historial está dada por este parámetro. Recuerda que el browser no intentará cargar esta URL después de llamar a `pushState()`, pero podría intentar cargar la URL más tarde, por ejemplo, después de que el usuario reinicie su navegador. La nueva URL no necesita ser absoluta; si es relativa, es resuelta relativamente a la actual URL. La nueva URL debe ser del mismo origen que la actual URL. Si no es así, `pushState()` arrojará una excepción. Este parámetro es opcional; si no se especifica, se tomará la URL actual del documento.

En un sentido, llamar `pushState()` es similar a asignar `window.location = "#foo"`, en tanto que también se va a crear y activar otra entrada al historial asociada con el documento actual. Pero `pushState()` tiene las siguientes ventajas:

- La nueva URL puede ser cualquier URL en el mismo origen de la actual URL. En contraste, asignar `window.location` te mantiene en el mismo {{ domxref("document") }} solamente si modificas unicamente el hash.
- No hay por qué cambiar la URL si no se desea. Por el contrario, asignar `window.location = "#foo";` solamente crea una nueva entrada en el historial si el hash actual no es `#foo`.
- Puedes asociar datos arbitrarios con tu nuevo historial de entrada. Con el enfoque hash-based, tu necesitas codificar todos datos relevantes dentro de una cadena de caracteres corta.
- Si `title` es utilizado por los navegadores, estos datos pueden utilizarse (independientemente de, por ejemplo, el hash).

Hay que tener en cuenta que `pushState()` nunca dispara un evento `hashchange`, incluso si la nueva URL difiere de la antigua URL únicamente en su hash.

En un documento XUL, crea el elemento XUL específico.

En otros documentos, crea un elemento con un namespace de URI nulo (`null`).

### El método replaceState()

`history.replaceState()` trabaja exactamente igual a `history.pushState()` excepto que `replaceState()` modifica la entrada al historial actual en lugar de crear una nueva.

`replaceState()` es particularmente útil si deseas actualizar el objeto estado o la URL del la actual entrada al historial en respuesta a alguna acción del usuario.

### El evento popstate

Un evento `popstate` es dirigido a la ventana cada vez que la entrada al historial cambia. Si la entrada al historial es activada y fue creada por un llamado a `pushState` o afectada por una llamada a `replaceState`, la propiedad state del evento `popstate` contiene una copia del historial de entradas del objeto estado.

Ver {{ domxref("window.onpopstate") }} para un ejemplo de uso.

### Leyendo el estado actual

Cuando la página carga, debería tener un objeto de estado no nulo. Esto podría ocurrir, por ejemplo, si la página establece un object de estado (usando `pushState()` o `replaceState()`) y entonces el usuario reinicia su navegador. Cuando la página carga de nuevo, la página recibirá el evento onload, pero no el evento popstate. Sin embargo, si lees la propiedad history.state, obtendrás el objeto estado que habrías tenido si se hubiera lanzado el evento apopstate.

Puedes leer el estado del historial actual sin tener que esperar un evento `popstate` usando la propiedad `history.state` de esta manera:

```
var currentState = history.state;
```

## Ejemplos

Para un ejemplo completo de un sitio AJAX, ver: [Ejemplo de navegación AJAX](/es/docs/Web/Guide/API/DOM/Manipulating_the_browser_history/Example).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ domxref("window.history") }}
- {{ domxref("window.onpopstate") }}
