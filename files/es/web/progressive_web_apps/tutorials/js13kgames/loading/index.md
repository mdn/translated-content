---
title: Carga progresiva
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
---

{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

En artículos anteriores cubrimos las API que nos ayudan a convertir nuestro ejemplo de [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) en una aplicación web progresiva: [El servicio workers](/es/docs/Web/Progressive_web_apps/Offline_Service_workers), [Manifiestos web](/es/docs/Web/Progressive_web_apps/Installable_PWAs), [Notificaciones y Push](/es/docs/Web/Progressive_web_apps/Re-engagementable_Notifications_Push). En este artículo iremos aún más allá y mejoraremos el rendimiento de la aplicación cargando progresivamente sus recursos.

## Primera imagen significativa

Es importante entregar algo significativo al usuario lo antes posible: cuanto más espere a que se cargue la página, mayor será la posibilidad de que se vaya antes de esperar a que todo termine. Deberíamos poder mostrarles al menos la vista básica de la página que quieren ver, con marcadores de posición en los lugares donde eventualmente se cargará más contenido.

Esto se podría lograr mediante la carga progresiva, también conocida como [carga diferida](https://en.wikipedia.org/wiki/Lazy_loading). Se trata de aplazar la carga de recursos tanto como sea posible (HTML, CSS, JavaScript) y solo cargar inmediatamente los que realmente se necesitan para la primera experiencia.

## Agrupar versus dividir

Muchos visitantes no pasarán por todas las páginas de un sitio web, sin embargo, el enfoque habitual es agrupar todas las funciones que tenemos en un archivo grande. Un archivo `bundle.js` puede tener muchos megabytes, y un solo paquete `style.css` puede contener de todo, desde definiciones básicas de estructura CSS hasta todos los estilos posibles de cada versión del sitio: móvil, tableta, escritorio, solo impresión, etc.

Es más rápido cargar toda esa información como un archivo en lugar de muchos archivos pequeños, pero si el usuario no necesita todo al principio, podríamos cargar solo lo que es crucial y luego gestionar otros recursos cuando sea necesario.

## Recursos que bloquean el renderizado

La agrupación es un problema, porque el navegador tiene que cargar HTML, CSS y JavaScript antes de poder pintar sus resultados renderizados en la pantalla. Durante los pocos segundos entre el acceso inicial al sitio web y la finalización de la carga, el usuario ve una página en blanco, lo cual es una mala experiencia.

Para solucionarlo, podemos, por ejemplo, agregar `defer` a los archivos JavaScript:

```html
<script src="app.js" defer></script>
```

Se descargarán y ejecutarán _después_ que el documento en sí haya sido procesado, por lo que no bloqueará la representación de la estructura HTML. También podemos dividir archivos css y agregarles tipos de medios:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Esto le indicará al navegador que los cargue solo cuando se cumpla la condición.

En nuestra aplicación de demostración js13kPWA, el CSS es lo suficientemente simple como para dejarlo todo en un solo archivo sin reglas específicas sobre cómo cargarlos. Podríamos ir aún más lejos y mover todo desde `style.css` a la etiqueta `<style>` en el `<head>` del `index.html`: esto mejoraría aún más el rendimiento, pero para la legibilidad del ejemplo también omitiremos este enfoque.

## Imágenes

Además de JavaScript y CSS, es probable que los sitios web contengan varias imágenes. Cuando incluyes elementos {{HTMLElement("img")}} en tu HTML, todas las imágenes a las que se hace referencia se buscarán y descargarán durante el acceso inicial al sitio web. No es inusual tener megabytes de datos de imágenes para descargar antes de anunciar que el sitio está listo, pero esto nuevamente crea una mala percepción del rendimiento. No necesitamos todas las imágenes en la mejor calidad posible al comienzo de la visualización del sitio.

Esto se puede optimizar. En primer lugar, debes utilizar herramientas o servicios similares a [TinyPNG](https://tinypng.com/), que reducirán el tamaño del archivo de tus imágenes sin alterar demasiado la calidad. Si has superado ese punto, puede empezar a pensar en optimizar la carga de imágenes mediante JavaScript. Explicaremos esto a continuación.

### Marcador de posición de imagen

En lugar de tener todas las capturas de pantalla de los juegos referenciados en los atributos del elemento `<img>` `src`, que obligarán al navegador a descargarlos automáticamente, podemos hacerlo de forma selectiva a través de JavaScript. En su lugar, la aplicación js13kPWA usa una imagen de marcador de posición, que es pequeña y liviana, mientras que las rutas finales a las imágenes de destino se almacenan en los atributos `data-src`:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Esas imágenes se cargarán mediante JavaScript _después_ que el sitio termine de construir la estructura HTML. La imagen del marcador de posición se escala de la misma manera que las imágenes originales, por lo que ocupará el mismo espacio y no hará que el diseño se vuelva a pintar a medida que se cargan las imágenes.

### Cargar a través de JavaScript

El archivo `app.js` procesa los atributos `data-src` así:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

La variable `imagesToLoad` contiene referencias a todas las imágenes, mientras que la función `loadImages` mueve la ruta de `data-src` a `src`. Cuando cada imagen está realmente cargada, eliminamos su atributo `data-src` porque ya no es necesario. Luego recorremos cada imagen y la cargamos:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Desenfoque en CSS

Para que todo el proceso sea más atractivo visualmente, el marcador de posición se difumina en CSS.

![Captura de pantalla de imágenes de marcador de posición en la aplicación js13kPWA.](js13kpwa-placeholders.png)

Renderizamos las imágenes con un desenfoque al principio, por lo que se puede lograr una transición hacia la nitidez:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Esto eliminará el efecto de desenfoque en medio segundo, el cual se ve lo suficientemente bien para el efecto de "carga".

## Carga bajo demanda

El mecanismo de carga de imágenes explicado en la sección anterior funciona bien: carga las imágenes después de renderizar la estructura HTML y aplica un agradable efecto de transición en el proceso. El problema es que todavía carga _todas_ las imágenes simultáneamente, aunque el usuario solo verá las dos o tres primeras al cargar la página.

Este problema se puede resolver con la nueva [API observador de intersecciones](/es/docs/Web/API/Intersection_Observer_API); con esto nos podemos asegurar de que las imágenes se carguen solo cuando aparezcan en la ventana gráfica.

### Observador de intersecciones

Esta es una mejora progresiva del ejemplo de uso anterior: [Observador de intersección](/es/docs/Web/API/Intersection_Observer_API) cargará las imágenes destino solo cuando el usuario se desplaza hacia abajo, lo cual hace que se exhiban en la ventana gráfica.

Así es como se ve el código relevante:

```js
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
```

Si se admite el objeto {{DOMxRef("IntersectionObserver")}}, la aplicación crea una nueva instancia del mismo. La función pasada como parámetro está manejando el caso cuando uno o más elementos se cruzan con el observador (es decir, aparecen dentro de la ventana gráfica). Podemos iterar sobre cada caso y reaccionar en consecuencia: cuando una imagen es visible, cargamos la imagen correcta y dejamos de observarla porque ya no necesitamos observarla.

Reiteremos nuestra mención anterior de la mejora progresiva: el código está escrito para que la aplicación funcione tanto si `Intersection Observer` es compatible como si no. Si no es así, simplemente cargamos las imágenes usando el enfoque más básico cubierto anteriormente.

## Mejoras

Recuerda que hay muchas formas de optimizar los tiempos de carga, y este ejemplo explora solo uno de los enfoques. Puedes intentar hacer que tus aplicaciones sean más a prueba de balas haciéndolas funcionar sin JavaScript, ya sea utilizando {{HTMLElement("noscript")}} para mostrar la imagen con el `src` final ya asignado, o envolviendo `Etiquetas <img>` con elementos {{HTMLElement("a")}} que apuntan a las imágenes destino, para que el usuario pueda hacer clic y acceder a ellas cuando lo desee.

No lo haremos porque la aplicación en sí depende de JavaScript; sin él, la lista de juegos ni siquiera se cargaría y el código del servicio _worker_ no se ejecutaría.

Podríamos reescribir el proceso de carga para cargar no solo las imágenes, sino los elementos completos que consisten en descripciones completas y enlaces. Funcionaría como un desplazamiento infinito: cargar los elementos de la lista solo cuando el usuario desplaza la página hacia abajo. De esa manera, la estructura HTML inicial sería mínima, el tiempo de carga sería aún menor y tendríamos beneficios de rendimiento aún mayores.

## Conclusión

Menos archivos para cargar inicialmente, archivos más pequeños divididos en módulos, uso de marcadores de posición y carga de más contenido bajo demanda: esto ayudará a lograr tiempos de carga inicial más rápidos, lo que brinda beneficios al creador de la aplicación y ofrece una experiencia más fluida para el usuario.

Recuerda el enfoque de mejora progresiva: ofrece un producto utilizable sin importar el dispositivo o la plataforma, pero asegúrate de enriquecer la experiencia a quienes utilizan navegadores modernos.

## Pensamientos finales

Eso es todo por esta serie de tutoriales: revisamos el [código fuente de la aplicación de ejemplo js13kPWA](https://github.com/mdn/pwa-examples/tree/master/js13kpwa) y aprendimos sobre el uso de funciones de aplicaciones web progresivas, incluida una [Introducción](/es/docs/Web/Progressive_web_apps/Introduction), [estructura PWA](/es/docs/Web/Progressive_web_apps/App_structure), [disponibilidad sin conexión con servicio workers](/es/docs/Web/Progressive_web_apps/Offline_Service_workers), [PWAs instalables](/es/docs/Web/Progressive_web_apps/Installable_PWAs), y finalmente notificaciones. También explicamos el `push` con la ayuda del [Libro de recetas para el servicio _workers_](https://github.com/mdn/serviceworker-cookbook/). Y en este artículo, hemos analizado el concepto de carga progresiva, incluido un interesante ejemplo que hace uso de la [API de Intersection Observer](/es/docs/Web/API/Intersection_Observer_API).

No dudes en experimentar con el código, mejorar tu aplicación existente con funciones de PWA o crear algo completamente nuevo por tu cuenta. Las PWAs ofrecen una gran ventaja sobre las aplicaciones web habituales.

{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
