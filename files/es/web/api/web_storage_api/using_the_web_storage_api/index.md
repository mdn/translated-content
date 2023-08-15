---
title: Usando la API de almacenamiento web
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor, de una forma mucho más intuitiva que utilizando cookies.

Este artículo proporciona una guía general de cómo usar esta tecnología.

## Conceptos básicos

Los objetos de almacenamiento son simples almacenes de clave/valor, similares a objetos, pero que permanecen intactos cuando la página se recarga. Las claves y los valores siempre son cadenas de texto (fíjate que las claves con enteros se convierten automáticamente a cadenas, tal y como lo hacen los objetos). Puedes acceder a estos valores como un objeto, o con los métodos {{domxref("Storage.getItem()")}} y {{domxref("Storage.setItem()")}}. Estas tres líneas modifican el valor de colorSetting de la misma manera:

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

> **Nota:** Se recomiendo usar la API de almacenamiento web (`setItem`, `getItem`, `removeItem`, `key`, `length`) para prevenir las dificultades asociadas al uso de simples objetos como almacenes de valores llave/valor.

Los dos mecanismos en el almacenamiento web son los siguientes:

- `sessionStorage` mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).
- `localStorage` hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

Estos mecanismos están disponibles mediante las propiedades [`Window.sessionStorage`](/es/docs/Web/API/Window/sessionStorage) y [`Window.localStorage`](/es/docs/Web/API/Window/localStorage) (dicho con más precisión, en navegadores con soporte, el objeto `Window` implementa los objetos `WindowLocalStorage` y `WindowSessionStorage`, en los cuales se basan las propiedades `localStorage` y `sessionStorage`). Al invocar uno de éstos, se creará una instancia del objeto [`Storage`](/es/docs/Web/API/Storage), a través del cual los datos pueden ser creados, recuperados y eliminados. sessionStorage y localStorage utilizan un objeto de almacenamiento diferente según su origen — funcionan y son controlados por separado.

Así que, por ejemplo, si en un inicio se llama a `localStorage` en un documento, esto devolverá un objeto {{domxref("Storage")}}; llamar a `sessionStorage` en un documento devolverá un objeto {{domxref("Storage")}} diferente. Ambos objetos se pueden manipular de la misma forma, pero separados.

## Detectar la característica localStorage

Para poder usar localStorage, debemos de verificar que tiene soporte y que está disponible en la sesión del buscador actual.

### Probar la disponibilidad

> **Nota:** Nota: esta API está disponible en las versiones actuales de todos los navegadores principales. La prueba de disponibilidad es necesaria sólo si debes soportar navegadores muy antiguos, como Internet Explorer 6 o 7, o en las circunstancias limitadas descritas más abajo.

Los buscadores que soportan localStorage tienen una propiedad en el objeto window que se llama localStorage. Sin embargo, por varias razones, el sólo asegurarse de que la propiedad existe puede arrojar excepciones. El que localStorage exista no es garantía suficiente de que en verdad esté disponible, puesto que varios buscadores ofrecen configuraciones que lo inhabilitan. Así que un buscador puede _soportar_ localStorage, pero puede no hacerlo _disponible_ para los scripts en la página. Un ejemplo de esto es Safari, que en el modo de búsqueda privada ofrece un objeto localStorage vacío con un cupo de 0, por lo que es inutilizable. Sin embargo, es posible que aún así obtengamos un QuotaExceededError legítimo, lo que significa que ya usamos todo el espacio de almacenamiento disponible, aunque el almacenamiento esté, de hecho, _disponible_. Nuestra detección de la característica debe de tomar en cuenta estos escenarios.

Esta función detecta si localStorage tiene soporte y está disponible:

```js
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}
```

Y aquí se muestra cómo usarla:

```js
if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}
```

También puedes probar sessionStorage invocando `storageAvailable('sessionStorage')`.

Aquí puedes ver una [breve historia de la detección de la característica localStorage](https://gist.github.com/paulirish/5558557).

## Ejemplo

Para ilustrar un uso típico de almacenamiento web, creamos un ejemplo simple que llamamos **Demo de almacenamiento web**. La [página de inicio](https://mdn.github.io/dom-examples/web-storage/) proporciona unos controles que se pueden usar para personalizar el color, la tipografía y la imagen decorativa:

![](landing.png)Cuando seleccionas una opción diferente, la página se actualiza instantáneamente; además, tus opciones se almacenan en `localStorage`, de forma que si abandonas la página y la vuelves a cargar, tus opciones son recordadas.

También creamos una [página de salida del evento](https://mdn.github.io/dom-examples/web-storage/event.html) — si cargas esta página en otra pestaña y luego haces cambios a tus opciones en la página de inicio, verás que se muestra la información almacenada actualizada puesto que se dispara un {{domxref("StorageEvent")}}.

![](event-output.png)

> **Nota:** Puedes ver las páginas de ejemplo usando los links de arriba y también puedes [ver el código fuente.](https://github.com/mdn/dom-examples/tree/master/web-storage)

### Probar si la memoria tiene valores

En el inicio de [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js), probamos si el objeto ya tiene valores (es decir, si la página ya fue visitada):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

El método {{domxref("Storage.getItem()")}} se usa para obtener un dato de la memoria; en este caso, estamos probando si el dato `bgcolor` existe; si no, corremos `populateStorage()` para añadir los valores personalizados actuales a la memoria. Si ya hay valores guardados, corremos `setStyles()` para actualizar el estilo de la página con los valores almacenados.

**Nota**: También puedes usar {{domxref("Storage.length")}} para probar si el objeto de almacenamiento está vació o no.

### Obtener valores de la memoria

Como dijimos arriba, los valores se pueden recuperar de la memoria usando {{domxref("Storage.getItem()")}}. Este método usa la llave del dato como argumento y devuelve el valor. Por ejemplo:

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Aquí, en las primeras tres líneas tomamos los valores del almacenamiento local. Después, fijamos los valores mostrados en los elementos del formulario a esos valores, de forma que se mantengan sincronizados cuando recargues la página. Finalmente, actualizamos los estilos y la imagen decorativa en la página para que tus opciones personalizadas vuelvan a aparecer al recargar.

### Guardar valores en la memoria

{{domxref("Storage.setItem()")}} se usa tanto para crear nuevos datos como para actualizar valores existentes (si el dato ya existía). Este método recibe dos argumentos: la llave del dato que se va a crear/modificar y el valor que se va a guardar.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

La función `populateStorage()` define tres elementos en el almacenamiento local — el color de fondo, la tipografía y la ruta de almacenamiento de la imagen. Luego corre la función `setStyles()` para actualizar el estilo de la página, etc.

También incluimos un manejador `onchange` para cada elemento del formulario, de manera que los datos y los estilos son actualizados cada vez que un valor del formulario cambia:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

### Responder a cambios en la memoria con el evento StorageEvent

El evento {{domxref("StorageEvent")}} se dispara siempre que se hace un cambio al objeto {{domxref("Storage")}} (nota que este evento no se dispara para cambios en sessionStorage). Este evento no va a trabajar en la misma página en la que se están haciendo los cambios, sino que es una manera para que las otras páginas del dominio que usan la memoria sincronicen los cambios que se están haciendo. Las páginas en otros dominios no pueden acceder a los mismos objetos de almacenamiento.

En la página de eventos (ver [events.js](https://github.com/mdn/dom-examples/blob/master/web-storage/event.js)) el único JavaScript es el siguiente:

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = JSON.stringify(
    e.storageArea,
  );
});
```

Aquí añadimos un detector de evento al objeto `window` que se dispara cuando el objeto {{domxref("Storage")}} asociado con el origen actual cambia. Como puedes ver arriba, el objeto asociado a este evento tiene varias propiedades que contienen información útil — la llave del dato que cambió, el valor anterior al cambio, el nuevo valor tras el cambio, la URL del documento que cambió la memoria y el objeto de almacenamiento mismo (que volvimos una cadena para que pudieras ver su contenido).

### Borrar registros

El almacenamiento web también provee un par de métodos simples para remover datos. No los usamos en nuestro demo, pero se pueden añadir de manera muy simple a tu proyecto:

- {{domxref("Storage.removeItem()")}} recibe un solo argumento — la llave del dato que quieres eliminar — y lo remueve del objeto de almacenamiento de ese dominio.
- {{domxref("Storage.clear()")}} no recibe argumentos; vacía todo el objeto de almacenamiento de ese dominio.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Página de inicio de la API de almacenamiento web](/es/docs/Web/API/Web_Storage_API)
