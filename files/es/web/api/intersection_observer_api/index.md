---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
---

{{DefaultAPISidebar("Intersection Observer API")}}

La API Observador de Intersección provee una vía asíncrona para observar cambios en la intersección de un elemento con un elemento ancestro o con el {{Glossary("viewport")}} del documento de nivel superior.

Históricamente, detectar la visibilidad de un elemento, o la visibilidad relativa de dos elementos, uno respecto del otro, ha sido una tarea difícil para la cual las soluciones no han sido muy fiables y propensas a causar que el navegador y los sitios a los que el usuario accede lleguen a ser lentos. A medida que la web ha madurado, la necesidad para este tipo de información ha ido en aumento. La información sobre intersección es necesaria por muchas razones, tales como:

- Carga en diferido de imágenes u otro contenido a medida que la página se desplaza.
- Implementación del desplazamiento infinito en sitios web, donde más y más contenido se carga y muestra a medida que se desplaza la página, de forma que el usuario no tiene que pasar páginas.
- Informes de visualizaciones de anuncios para calcular ingresos por publicidad.
- Decidir si deben realizarse tareas o procesos de animación basados en si el usuario verá o no el resultado.

Implementar la detección de intersecciones en el pasado implicaba manejadores de eventos y bucles llamando a métodos como {{domxref("Element.getBoundingClientRect()")}} para reunir la información necesaria para cada elemento afectado. Dado que todo este código corre sobre el hilo principal, incluso uno de estos puede causar problemas de rendimiento. Cuando un sitio es cargado con estos tests, las cosas pueden ponerse muy feas.

Considere una página web que usa scroll infinito. Usa una librería de terceros para manejar los anuncios situados periódicamente en la página, que tiene gráficos animados aquí y allá, y usa una librería personalizada que muestra cajas de notificación y similares. Cada uno de estos tiene sus propias rutinas de detección de intersecciones, todas corriendo en el hilo principal. El autor del sitio web puede no darse cuenta de que esto está pasando, ya que están usando dos librerías de las que quizás conocen muy poco acerca de su funcionamiento interno. A medida que el usuario desplaza la página, estas rutinas de detección de intersecciones están disparando código constantemente durante el scroll, lo que resulta en una experiencia que deja al usuario frustrado con el navegador, el sitio web y su ordenador.

El API Intersection Observer deja al código registrar una función callback que se ejecuta si un elemento que se desea monitorizar entra o sale de otro elemento (o del {{Glossary("viewport")}}), o cuando la cantidad por la que ambos elementos se intersecan cambia en una cantidad requerida. De esta manera, los sitios no necesitan hacer nada sobre el hilo principal para mirar este tipo de intersección entre elementos, y el navegador está libre para optimizar la gestión de intersecciones como le parezca conveniente.

Una cosa que el API Intersection Observer no puede decirle es: el número exacto de pixels que se solapan o específicamente cuales son; sin embargo, cubre el caso de uso mucho más común de "Si se intersecan por algún lugar alrededor del _N_%, necesito hacer algo."

## Intersection observer conceptos y uso

La API Intersection Observer le permite configurar una función callback que es llamada cuando alguna de las siguientes circunstancias ocurren:

- Un elemento **target** intersecta ya sea al viewport del dispositivo o un elemento especificado. Ese elemento especificado es llamado el **elemento root** o **root** a los propósitos de la API Intersection Observer.
- La primera vez que se pide inicialmente al observador que observe un elemento target.

Típicamente, usted querrá observar los cambios en las intersecciones con respecto al ancestro scrollable más cercano al elemento, o, si el elemento no desciende de un ancestro scrollable, al viewport.
Para observar la intersección relativa al elemento root, especifique null;

Tanto si está usted usando el viewport o algún otro elemento como root, el API funciona de la misma manera, ejecutando una función callback que usted le proporciona cuando la visibilidad del elemento target cambia al cruzar en la cantidad de intersección deseada con el elemento root.

El grado de intersección entre el elemento target y su elemento root es el **intersection ratio**. Esto es una representación del porcentaje del elemento target que es visible, indicado como un valor entre 0.0 y 1.0.

### Creando un intersection observer

Cree el intersection observer llamando a su constructor y pasándole una función callback para que se ejecute cuando se cruce un umbral (threshold) en una u otra dirección:

```js
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

Un umbral de 1.0 significa que cuando el 100% del elemento target está visible dentro del elemento especificado por la opción `root`, la función callback es invocada.

#### Opciones de Intersection observer

El objeto `options` pasado al constructor {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} le deja controlar las circunstancias bajo las cuales la función callback es invocada. Tiene los siguientes campos:

- `root`
  - : El elemento que es usado como viewport para comprobar la visibilidad de elemento target. Debe ser ancestro de target. Por defecto es el viewport del navegador si no se especifica o si es `null`.
- `rootMargin`
  - : Margen alrededor del elemento root. Puede tener valores similares a los de CSS {{cssxref("margin")}} property, e.g. "`10px 20px 30px 40px"` (top, right, bottom, left). Los valores pueden ser porcentajes. Este conjunto de valores sirve para aumentar o encoger cada lado del cuadro delimitador del elemento root antes de calcular las intersecciones. Por defecto son todos cero.
- `threshold`
  - : Es un número o un array de números que indican a que porcentaje de visibilidad del elemento target, la función callback del observer debería ser ejecutada. Si usted quiere que se detecte cuando la visibilidad pasa la marca del 50%, debería usar un valor de 0.5. Si quiere ejecutar la función callback cada vez que la visibilidad pase otro 25%, usted debería especificar el array \[0, 0.25, 0.5, 0.75, 1]. El valor por defecto es 0 (lo que significa que tan pronto como un píxel sea visible, la función callback será ejecutada). Un valor de 1.0 significa que el umbral no se considera pasado hasta que todos los pixels son visibles.

#### Determinando un elemento para ser observado

Una vez usted ha creado el observer, necesita darle un elemento target para observar:

```js
var target = document.querySelector("#listItem");
observer.observe(target);

// el callback que indicamos al observador será ejecutado ahora por primera vez
// espera hasta que le asignemos un target a nuestro observador (aún si el target no está actualmente visible)
```

Cuando el elemento target encuentra un threshold especificado por el `IntersectionObserver`, la función callback es invocada. La función callback recibe una lista de objetos {{domxref("IntersectionObserverEntry")}} y el observer:

```js
var callback = function (entries, observer) {
  entries.forEach((entry) => {
    // Cada entry describe un cambio en la intersección para
    // un elemento observado
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Asegúrese de que su función callback se ejecute sobre el hilo principal. Debería operar tan rápidamente como sea posible; si alguna cosa necesita tiempo extra para ser realizada, use {{domxref("Window.requestIdleCallback()")}}.

También, note que si especifica la opción `root`, el elemento target debe ser un descendiente del elemento root.

### Cómo se calcula la intersección

Todas las áreas consideradas por la API de Intersection Observer son rectángulos; los elementos que su forma es irregular se considera que están ocupando el rectángulo más pequeño que encierra todas las partes del elemento. De forma similar, si la porción visible de un elemento no es un rectángulo, entonces el rectángulo de intersección del elemento se interpreta como el rectángulo más pequeño que contiene todas las partes visibles del elemento.

Es útil entender un poco sobre cómo las diferentes propiedades proporcionadas por {{domxref("IntersectionObserverEntry")}} describe una intersección.

#### La intersección entre el elemento root y su margen

Antes de poder realizar un seguimiento de la intersección de un elemento en un contenedor, necesitamos saber qué cuál es contendor. Este contenedor se le conoce como **intersection root**, o **root element**. Este puede ser un elemento del documento, que es ascendiente del elemento observado, o `null`, que usará el viewport del documento como contenedor.

El rectángulo usado como los límites de la intersección del intersection root pueden ser ajustados configurando la opción **root margin**, `rootMargin`, cuando creamos el {{domxref("IntersectionObserver")}}. Los valores en `rootMargin` define los espacios añadidos a cada lado del cuadro delimitador que sirve de contenedor, creando los límites definitivos del contenedor, o intersection root (los cuáles están explicados en {{domxref("IntersectionObserverEntry.rootBounds")}} cuando la función callback es ejecutada).

#### Umbrales

En lugar de reportar cada mínimo cambio indicando cómo de visible es el elemento que observamos, la Intersection Observer API usa **umbrales**. Cuando creamos un observable, puedes proporcionar uno o más valores númericos representando, en porcentaje, cuán visible es el elemento observado. Entonces, la API reporta sólo los cambios de visibilidad que cruza este umbral.

Por ejemplo, si te gustaría ser informado cada vez que la visibilidad del elemento pasa, hacia delante o hacía atrás, una marca de un 25%, entonces puedes especificar el array \[0, 0.25, 0.5, 0.75, 1] como una lista de umbrales a la hora de crear el observable. Puedes saber incluso en qué dirección la visibilidad ha cambiado (esto es, saber si el elemento ha pasado a ser más o menos visible) comprobando el valor de la propiedad {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} disponible en el {{domxref("IntersectionObserverEntry")}} que tienes disponible en la función callback cada vez que la visibilidad cambia. Si `isIntersecting` es `true`, el elemento se ha vuelto al menos tan visibile como el umbral que pasó. Si es `false`, el elemento entonces ha dejado de ser tan visible como el umbral que sobrepasó.

Para entender cómo funciona el concepto de umbral (threshold), pruebe a hacer scroll en el siguiente ejemplo. Cada caja coloreada muestra dentro de ella el porcentaje que tiene visible de cada una de las cuadro esquinas, de forma que podrá ver cómo cambian los porcentajes conforme va haciendo scroll. Cada caja tiene diferentes valores configurado de umbrales.

- La primera caja tiene un umbral para cada punto del porcentaje de visibilidad posible en el array que se le pasa a {{domxref("IntersectionObserver.thresholds")}}, siendo su valor el array `[0.00, 0.01, 0.02, ..., 0.99, 1.00]`.
- La segunda caja sólo tiene un umbral que se marca en el 50%.
- La tercera caja tiene un umbral cada 10% de visibilidad (0%, 10%, 20%, etc.).
- La última tiene el umbral cada 25%.

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup();

function startup() {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // Un array con los umbrales para cada caje.
  // El umbral de la primer caja se crea de forma programática
  // ya que hay demasiados puntos.

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Añadimos cada caja y creamos un observable para cada una
  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = "box" + (i + 1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Configuramos el observable para esta caja

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // Scroll a la posición inicial

  document.scrollingElement.scrollTop =
    wrapper.firstChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

function intersectionCallback(entries) {
  entries.forEach(function (entry) {
    let box = entry.target;
    let visiblePct = Math.floor(entry.intersectionRatio * 100) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
}
```

{{EmbedLiveSample("threshold-example", 500, 500)}}

#### Acotamiento y el rectángulo de intersección

El navegador computa el rectángulo de intersección final de la siguiente forma; la API hace todo esto por usted, pero puede ser útil entender estos pasos para comprender mejor cuando ocurrirán exactamente las intersecciones.

1. El rectangulo delimitador del elemento target (el rectangulo mas pequeño, que encierra por completo los componentes que conforman el elemento) es obtenido llamando {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} en el target. Este es el rectangulo de intersección mas grande que puede ser. Los pasos restantes removeran las porciones que no intersectan.
2. Comenzando desde el bloque padre inmediato del objetivo y avanzando hacia afuera, se aplica el recorte (si lo hay) de cada bloque contenedor al rectángulo de intersección. El recorte de un bloque se determina en función de la intersección entre los dos bloques y el modo de recorte (si lo hay) es especificado por la propiedad {{cssxref("overflow")}}. Establecer `overflow` en cualquier valor que no sea `visible` provoca que ocurra el recorte.
3. Si uno de los elementos contenedores es la raíz de un contexto de navegación anidado (como el documento contenido en un {{HTMLElement("iframe")}}), el rectángulo de intersección se recorta al área visible del contenedor de este contexto y continua hacia arriba a través de los contenedores con el bloque contenedor del contexto. Así que, si se alcanza el nivel superior de un `<iframe>`, el rectángulo de intersección se recorta al `viewport` del marco (`<iframe>`), y luego el elemento padre del marco es el siguiente bloque que se recorre hacia la raíz de la intersección.
4. Cuando el recorrido hacia arriba alcanza la raíz de la intersección, el rectángulo resultante se mapea al espacio de coordenadas de la raíz de la intersección.
5. A continuación, el rectángulo resultante se actualiza mediante su intersección con el [rectángulo de intersección de la raíz](/es/docs/Web/API/Intersection_Observer_API#root-intersection-rectangle).
6. Finalmente, este rectángulo se mapea al espacio de coordenadas del {{domxref("document")}} objetivo.

### Callbacks de cambio de intersección

Cuando la cantidad del elemento target que es visible dentro del elemento root cruza uno de los umbrales de visibilidad, el callback del objeto {{domxref("IntersectionObserver")}} es ejecutado. El callback recibe como input un array de todos los objetos {{domxref("IntersectionObserverEntry")}}, uno por cada umbral que haya sido cruzado, y una referencia al objeto `IntersectionObserver` mismo.

Cada entrada en la lista de umbrales es un objeto {{domxref("IntersectionObserverEntry")}} que describe un umbral que ha sido cruzado; esto es, cada entrada describe qué porción de un elemento dado se está intersectando con el elemento root, sea que el elemento se considere en intersección o no, y la dirección en la cual ocurrió la transición.

El siguiente fragmento de código muestra una devolución de llamada que mantiene un contador de cuántas veces los elementos hacen la transición desde no intersectar con la raíz hasta intersectar al menos en un 75%. Para un valor umbral de 0.0 (predeterminado), la devolución de llamada es lanzada [aproximadamente](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) cuando hay una transición en el valor booleano de `IntersectionObserverEntry.isIntersecting`. El fragmento de código primero verifica que la transición sea positiva y luego determina si `IntersectionObserverEntry.intersectionRatio` es superior al 75%; en ese caso, incrementa el contador.

```
intersectionCallback(entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
}
```

## Interfaces

- {{domxref("IntersectionObserver")}}

  - : La interfaz principal para la API de Observador de Intersecciones. Proporciona métodos para crear y gestionar un observador que puede vigilar cualquier número de elementos de destino para la misma configuración de intersección. Cada observador puede observar de manera asíncrona los cambios en la intersección entre uno o más elementos de destino (_target_) y un elemento ancestro compartido o con el {{Glossary('viewport')}} de su {{domxref("Document")}} de nivel superior. El ancestro o el _viewport_ se denomina **root**.

- {{domxref("IntersectionObserverEntry")}}
  - : Describe la intersección entre el elemento de destino y su contenedor raíz en un momento específico de transición. Los objetos de este tipo solo se pueden obtener de dos maneras: como entrada para al devolución de llamada de tu `IntersectionObserver`, o llamando a {{domxref("IntersectionObserver.takeRecords()")}}.

## Un ejemplo sencillo

Este ejemplo causa que el elemento que queremos observar cambia de color y transparencia conforme se va haciendo más o menos visible. En la página [Timing element visibility with the Intersection Observer API](/es/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), puedes encontrar un ejemplo más extenso que muestra cómo calcular cuanto tiempo que una serie de elementos, como anuncios, son visibles para el usuario y reaccionar a esa información guardando estadísticas.

### HTML

El HTML para este ejemplo es muy simple, con un elemento primario que será la caja que querremos observar (con la creativa ID de `"box"`) y algo de contenido para dentro de la caja.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

El CSS del ejemplo no es muy importante para el propósito de este ejemplo: pinta el elemento y establece que los atributos {{cssxref("background-color")}} y {{cssxref("border")}} puedan participar en las [CSS transitions](/es/docs/Web/CSS/CSS_Transitions), los cuáles usaremos para afectar los cambios al elemento conforme este es más o menos visible.

```css
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

Finalmente, vamos a mirar el código JavaScript que usa la API Intersection Observer API para hacer que las cosas ocurran.

#### Preparación

Primero, necesitamos preparar algunas variables e instalar el observador.

```js
var numSteps = 20.0;

var boxElement;
var prevRatio = 0.0;
var increasingColor = "rgba(40, 40, 190, ratio)";
var decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up.

window.addEventListener(
  "load",
  function (event) {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

Las constantes y variables que establecimos aquí son:

- `numSteps`
  - : Una constante que indica cuántos puntos de umbral queremos tener entre una proporción de visibilidad de 0.0 y 1.0.
- `prevRatio`
  - : Esta variable se utilizará para registrar cuál era la proporción de visibilidad la última vez que se cruzó un umbral; esto nos permitirá determinar si el elemento de destino se está volviendo más o menos visible.
- `increasingColor`
  - : Una cadena que define un color que aplicaremos al elemento de destino cuando la proporción de visibilidad esté aumentando. La palabra "ratio" en esta cadena será reemplazada por la proporción de visibilidad actual del objetivo, de modo que el elemento no solo cambie de color, sino que también se vuelva cada vez más opaco a medida que se oculta menos.
- `decreasingColor`
  - : De manera similar, esta es una cadena que define un color que aplicaremos cuando la proporción de visibilidad esté disminuyendo.

Llamamos a {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} para comenzar a escuchar el evento [`load`](/es/docs/Web/Reference/Events/load); una vez que la página haya terminado de cargarse, obtenemos una referencia al elemento con el ID `"box"` utilizando {{domxref("Document.querySelector", "querySelector()")}}, luego llamamos al método `createObserver()` que crearemos en un momento para manejar la creación e instalación del observador de intersección.

#### Creando el observador de interesección

El método `createObserver()` se llama una vez que la carga de la página se completa para manejar la creación real del nuevo {{domxref("IntersectionObserver")}} y comenzar el proceso de observación del elemento de destino.

```js
function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

Comenzamos configurando un objeto `options` que contiene los ajustes para el observador. Queremos observar los cambios en la visibilidad del elemento de destino en relación con el _viewport_ del documento, por lo que `root` es `null`. No necesitamos ningún margen, así que el desplazamiento del margen, `rootMargin`, se especifica como "0px". Esto hace que el observador vigile los cambios en la intersección entre los límites del elemento de destino y los del _viewport_, sin espacio adicional (o sustracción) alguno.

La lista de puntos de umbral de proporción de visibilidad, `threshold`, se construye mediante la función `buildThresholdList()`. En este ejemplo, la lista de umbrales se construye programáticamente, ya que hay varios de ellos y se pretende que el número sea ajustable.

Una vez que `options` está listo, creamos el nuevo observador llamando al constructor {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}, especificando una función que se llamará cuando la intersección cruce uno de nuestros umbrales, `handleIntersect()`, y nuestro conjunto de opciones. Luego, llamamos a {{domxref("IntersectionObserver.observe", "observe()")}} en el observador devuelto, pasándole el elemento de destino deseado (target).

Podríamos optar por vigilar los cambios de intersección de visibilidad con respecto al _viewport_ en varios elementos llamando a `observer.observe()` para cada uno de esos elementos, si así lo deseamos.

#### Construyendo el arreglo de proporciones de umbral

La función `buildThresholdList()`, que construye la lista de umbrales, se ve así:

```js
function buildThresholdList() {
  var thresholds = [];

  for (var i = 1.0; i <= numSteps; i++) {
    var ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

Esto construye el arreglo de umbrales, cada uno de los cuales es una proporción entre 0.0 y 1.0, al agregar el valor `i/numSteps` al arreglo `thresholds` para cada entero `i` entre 1 y `numSteps`. También agrega el valor 0 para incluirlo. El resultado, dado el valor predeterminado de `numSteps` (20), es la siguiente lista de umbrales:

| #   | Ratio | #   | Ratio |
| --- | ----- | --- | ----- |
| 1   | 0.05  | 11  | 0.55  |
| 2   | 0.1   | 12  | 0.6   |
| 3   | 0.15  | 13  | 0.65  |
| 4   | 0.2   | 14  | 0.7   |
| 5   | 0.25  | 15  | 0.75  |
| 6   | 0.3   | 16  | 0.8   |
| 7   | 0.35  | 17  | 0.85  |
| 8   | 0.4   | 18  | 0.9   |
| 9   | 0.45  | 19  | 0.95  |
| 10  | 0.5   | 20  | 1.0   |

Podríamos, por supuesto, codificar manualmente el arreglo de umbrales en nuestro código, y a menudo es lo que terminaremos haciendo. Pero este ejemplo deja espacio para agregar controles de configuración para ajustar la granularidad, por ejemplo.

#### Manejando los cambios de intersección

Cuando el navegador detecta que el elemento de destino (en nuestro caso, el que tiene el ID `"box"`) ha sido revelado u ocultado de tal manera que su proporción de visibilidad cruza uno de los umbrales en nuestra lista, llama a nuestra función de manejo, `handleIntersect()`:

```js
function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

Para cada {{domxref("IntersectionObserverEntry")}} en la lista `entries`, verificamos si {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} del registro está aumentando; si es así, establecemos {{cssxref("background-color")}} del elemento de destino con la cadena `increasingColor` (recuerda, es `"rgba(40, 40, 190, ratio)"`), reemplazando la palabra "ratio" con el valor de `intersectionRatio` del registro. El resultado: no solo cambia el color, sino que también cambia la transparencia del elemento de destino; a medida que la proporción de intersección disminuye, el valor alfa del color de fondo también disminuye, lo que resulta en un elemento más transparente.

De manera similar, si `intersectionRatio` está aumentando, usamos la cadena `decreasingColor` y reemplazamos la palabra "ratio" en esa cadena con el valor de `intersectionRatio` antes de establecer `background-color` del elemento de destino.

Finalmente, para rastrear si la proporción de intersección está aumentando o disminuyendo, recordamos la proporción actual en la variable `prevRatio`.

### Resultado

Abajo se encuentra el contenido resultante. Desplace ésta página hacia arriba y abajo y note como la apariencia de la caja cambia mientras lo hace.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

Hay un ejemplo aún más extensivo en [Cronometrando la visibilidad de un elemento con la API Intersection Observer](/es/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/es/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} y {{domxref("IntersectionObserverEntry")}}
