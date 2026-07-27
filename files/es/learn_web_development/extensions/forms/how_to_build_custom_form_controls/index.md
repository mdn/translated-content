---
title: Cómo crear controles de formularios personalizados
short-title: Controles de formularios personalizados
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript", "Learn_web_development/Extensions/Forms")}}

Hay casos en los que los controles de formulario HTML nativos disponibles pueden parecer insuficientes. Por ejemplo, si necesitas [aplicar un estilo avanzado](/es/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) a algunos controles, como el elemento {{HTMLElement("select")}}, o si quieres ofrecer comportamientos personalizados, puedes considerar construir tus propios controles.

En este artículo veremos cómo construir un control personalizado. Para ello, trabajaremos con un ejemplo: reconstruir el elemento {{HTMLElement("select")}}. También hablaremos de cómo, cuándo y si tiene sentido construir tu propio control, y qué hay que tener en cuenta cuando construir un control es un requisito.

> [!NOTE]
> Nos centraremos en construir el control, no en cómo hacer que el código sea genérico y reutilizable; eso implicaría código JavaScript no trivial y manipulación del DOM en un contexto desconocido, lo cual queda fuera del alcance de este artículo.

## Diseño, estructura y semántica

Antes de construir un control personalizado, deberías empezar por definir exactamente lo que quieres. Esto te ahorrará un tiempo precioso. En particular, es importante definir claramente todos los estados de tu control. Para ello, es buena idea partir de un control existente cuyos estados y comportamiento sean bien conocidos, de modo que puedas imitarlos tanto como sea posible.

En nuestro ejemplo, reconstruiremos el elemento {{HTMLElement("select")}}. Este es el resultado que queremos lograr:

![Los tres estados de un cuadro de selección](custom-select.png)

Esta captura de pantalla muestra los tres estados principales de nuestro control: el estado normal (a la izquierda), el estado activo (en el medio) y el estado abierto (a la derecha).

En cuanto al comportamiento, estamos recreando un elemento HTML nativo. Por lo tanto, debería tener los mismos comportamientos y la misma semántica que el elemento HTML nativo. Necesitamos que nuestro control se pueda usar tanto con el ratón como con el teclado, y que sea comprensible para un lector de pantalla, igual que cualquier control nativo. Empecemos por definir cómo el control llega a cada estado:

**El control está en su estado normal cuando:**

- la página se carga.
- el control estaba activo y el usuario hace clic en cualquier lugar fuera de él.
- el control estaba activo y el usuario mueve el foco a otro control usando el teclado (por ejemplo, la tecla <kbd>Tab</kbd>).

**El control está en su estado activo cuando:**

- el usuario hace clic en él o lo toca en una pantalla táctil.
- el usuario pulsa la tecla tabulador y el control obtiene el foco.
- el control estaba en su estado abierto y el usuario hace clic en él.

**El control está en su estado abierto cuando:**

- el control se encuentra en cualquier estado distinto de abierto y el usuario hace clic en él.

Una vez que sabemos cómo cambiar de estado, es importante definir cómo cambiar el valor del control:

**El valor cambia cuando:**

- el usuario hace clic en una opción mientras el control está en el estado abierto.
- el usuario pulsa las flechas hacia arriba o hacia abajo mientras el control está en su estado activo.

**El valor no cambia cuando:**

- el usuario pulsa la flecha hacia arriba cuando la primera opción está seleccionada.
- el usuario pulsa la flecha hacia abajo cuando la última opción está seleccionada.

Por último, definamos cómo se comportarán las opciones del control:

- Cuando el control se abre, la opción seleccionada se resalta.
- Cuando el ratón está sobre una opción, esa opción se resalta y la opción resaltada previamente vuelve a su estado normal.

Para los propósitos de nuestro ejemplo, nos detendremos ahí; sin embargo, si eres un lector atento, notarás que faltan algunos comportamientos. Por ejemplo, ¿qué crees que pasará si el usuario pulsa la tecla tabulador mientras el control está en su estado abierto? La respuesta es _nada_. Vale, el comportamiento correcto parece obvio, pero el hecho es que, como no está definido en nuestras especificaciones, es muy fácil pasarlo por alto. Esto es especialmente cierto en un entorno de equipo, cuando las personas que diseñan el comportamiento del control son distintas de las que lo implementan.

Otro ejemplo curioso: ¿qué pasará si el usuario pulsa las flechas hacia arriba o hacia abajo mientras el control está en el estado abierto? Este es un poco más complicado. Si consideras que el estado activo y el estado abierto son completamente distintos, la respuesta vuelve a ser "no pasará nada", porque no definimos ninguna interacción de teclado para el estado abierto. Por otro lado, si consideras que el estado activo y el estado abierto se solapan un poco, el valor podría cambiar, pero la opción definitivamente no se resaltará en consecuencia, de nuevo porque no definimos ninguna interacción de teclado sobre las opciones cuando el control está en su estado abierto (solo definimos qué debe pasar cuando el control se abre, pero nada después de eso).

Tenemos que pensar un poco más allá: ¿qué pasa con la tecla escape? Al pulsar la tecla <kbd>Esc</kbd> se cierra un select abierto. Recuerda que, si quieres ofrecer la misma funcionalidad que el elemento nativo {{htmlelement('select')}} existente, debe comportarse exactamente igual que el select para todos los usuarios, ya sea con teclado, ratón, pantalla táctil, lector de pantalla o cualquier otro dispositivo de entrada.

En nuestro ejemplo, las especificaciones que faltan son evidentes, así que las resolveremos, pero esto puede ser un verdadero problema para controles nuevos y exóticos. Cuando se trata de elementos estandarizados, como es el caso de {{htmlelement('select')}}, los autores de la especificación dedicaron una cantidad de tiempo desmesurada a especificar todas las interacciones para cada caso de uso y cada dispositivo de entrada. Crear controles nuevos no es tan fácil, especialmente si estás creando algo que nunca se ha hecho antes y, por lo tanto, nadie tiene la más mínima idea de cuáles son los comportamientos e interacciones esperados. Al menos select ya se ha hecho antes, ¡así que sabemos cómo debería comportarse!

Diseñar interacciones nuevas suele ser una opción solo para los grandes actores de la industria, que tienen suficiente alcance como para que una interacción que creen pueda convertirse en un estándar. Por ejemplo, Apple introdujo la rueda de desplazamiento con el iPod en 2001. Tenían la cuota de mercado necesaria para introducir con éxito una forma completamente nueva de interactuar con un dispositivo, algo que la mayoría de las empresas de dispositivos no pueden hacer.

Lo mejor es no inventar nuevas interacciones de usuario. Para cualquier interacción que sí añadas, es fundamental dedicar tiempo a la etapa de diseño; si defines mal un comportamiento, o te olvidas de definir alguno, será muy difícil redefinirlo una vez que los usuarios se hayan acostumbrado a él. Si tienes dudas, pide la opinión de otras personas, y si dispones de presupuesto para ello, no dudes en [realizar pruebas de usuario](https://en.wikipedia.org/wiki/Usability_testing). Este proceso se llama diseño UX. Si quieres aprender más sobre este tema, consulta los siguientes recursos útiles:

- [UXMatters.com](https://www.uxmatters.com/)
- [La sección de UX Design de SmashingMagazine](https://www.smashingmagazine.com/)

> [!NOTE]
> Además, en la mayoría de los sistemas hay una forma de abrir el elemento {{HTMLElement("select")}} con el teclado para ver todas las opciones disponibles (esto equivale a hacer clic en el elemento {{HTMLElement("select")}} con el ratón). En Windows esto se consigue con <kbd>Alt</kbd> + <kbd>Flecha abajo</kbd>. No implementamos esto en nuestro ejemplo, pero sería fácil hacerlo, ya que el mecanismo ya está implementado para el evento `click`.

## Definir la estructura HTML y (algo de) semántica

Ahora que se ha decidido la funcionalidad básica del control, es hora de empezar a construirlo. El primer paso es definir su estructura HTML y darle algo de semántica básica. Esto es lo que necesitamos para reconstruir un elemento {{HTMLElement("select")}}:

```html
<!-- Este es nuestro contenedor principal para el control.
     El atributo tabindex es lo que permite al usuario enfocar el control.
     Más adelante veremos que es mejor establecerlo mediante JavaScript. -->
<div class="select" tabindex="0">
  <!-- Este contenedor se usará para mostrar el valor actual del control -->
  <span class="value">Cherry</span>

  <!-- Este contenedor incluirá todas las opciones disponibles para nuestro control.
       Como es una lista, tiene sentido usar el elemento ul. -->
  <ul class="optList">
    <!-- Cada opción solo contiene el valor que se mostrará, más adelante veremos
         cómo manejar el valor real que se enviará con los datos del formulario -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Fíjate en el uso de nombres de clase; estos identifican cada parte relevante independientemente de los elementos HTML subyacentes que se usen realmente. Esto es importante para asegurarnos de no atar nuestro CSS y JavaScript a una estructura HTML rígida, de modo que podamos hacer cambios de implementación más adelante sin romper el código que usa el control. Por ejemplo, ¿qué pasa si más adelante quieres implementar el equivalente del elemento {{HTMLElement("optgroup")}}?

Sin embargo, los nombres de clase no aportan ningún valor semántico. En este estado actual, el usuario de un lector de pantalla solo "ve" una lista desordenada. Añadiremos semántica ARIA dentro de poco.

## Crear el aspecto visual con CSS

Ahora que tenemos una estructura, podemos empezar a diseñar nuestro control. El objetivo principal de construir este control personalizado es poder darle el estilo exacto que queremos. Para ello, dividiremos nuestro trabajo de CSS en dos partes: la primera parte serán las reglas CSS absolutamente necesarias para que nuestro control se comporte como un elemento {{HTMLElement("select")}}, y la segunda parte consistirá en los estilos vistosos usados para darle el aspecto que queremos.

### Estilos requeridos

Los estilos requeridos son los necesarios para manejar los tres estados de nuestro control.

```css
.select {
  /* Esto creará un contexto de posicionamiento para la lista de opciones;
     añadir esto a `.select:focus-within` será una mejor opción cuando tenga soporte completo
  */
  position: relative;

  /* Esto hará que nuestro control pase a formar parte del flujo de texto y sea redimensionable a la vez */
  display: inline-block;
}
```

Necesitamos una clase extra `active` para definir el aspecto de nuestro control cuando está en su estado activo. Como nuestro control es enfocable, duplicamos este estilo personalizado con la pseudoclase {{cssxref(":focus")}} para asegurarnos de que se comporten igual.

```css
.select.active,
.select:focus {
  outline-color: transparent;

  /* Esta propiedad box-shadow no es exactamente obligatoria, sin embargo es imprescindible para asegurar
     que el estado activo sea visible, especialmente para los usuarios de teclado, por lo que la usamos como valor predeterminado. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Ahora, manejemos la lista de opciones:

```css
/* El selector .select aquí ayuda a asegurarnos de que solo seleccionamos
   elementos dentro de nuestro control. */
.select .optList {
  /* Esto asegurará que nuestra lista de opciones se muestre debajo del valor
     y fuera del flujo HTML */
  position: absolute;
  top: 100%;
  left: 0;
}
```

Necesitamos una clase extra para manejar cuándo la lista de opciones está oculta. Esto es necesario para gestionar las diferencias entre el estado activo y el estado abierto, que no coinciden exactamente.

```css
.select .optList.hidden {
  /* Esta es una forma sencilla de ocultar la lista de manera accesible;
     hablaremos más sobre accesibilidad al final */
  max-height: 0;
  visibility: hidden;
}
```

> [!NOTE]
> También podríamos haber usado `transform: scale(1, 0)` para que la lista de opciones no tenga altura y sí ancho completo.

### Embellecimiento

Ahora que tenemos la funcionalidad básica en su lugar, puede empezar la parte divertida. Lo siguiente es solo un ejemplo de lo que es posible, y coincidirá con la captura de pantalla del principio de este artículo. Sin embargo, siéntete libre de experimentar y ver qué se te ocurre.

```css
.select {
  /* Los cálculos se hacen asumiendo que 1em equivale a 16px, que es el valor predeterminado en la mayoría de los navegadores.
     Si tienes dudas sobre la conversión de px a em, prueba https://nekocalc.com/px-to-em-converter */
  font-size: 0.625em; /* esto (10px) es el nuevo contexto de tamaño de fuente para el valor em en este contexto */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  /* Necesitamos espacio extra para la flecha hacia abajo que añadiremos */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Como el valor puede ser más ancho que nuestro control, tenemos que asegurarnos de que no
     cambie el ancho del control. Si el contenido se desborda, mostramos puntos suspensivos */
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

No necesitamos un elemento extra para diseñar la flecha hacia abajo; en su lugar, usamos el pseudoelemento {{cssxref("::after")}}. También se podría implementar usando una simple imagen de fondo en la clase `select`.

```css
.select::after {
  content: "▼"; /* Usamos el carácter unicode U+25BC; asegúrate de establecer una etiqueta meta charset */
  position: absolute;
  z-index: 1; /* Esto será importante para evitar que la flecha se superponga a la lista de opciones */
  top: 0;
  right: 0;

  box-sizing: border-box;

  height: 100%;
  width: 2em;
  padding-top: 0.1em;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
  text-align: center;
}
```

A continuación, demos estilo a la lista de opciones:

```css
.select .optList {
  z-index: 2; /* Dijimos explícitamente que la lista de opciones siempre estará por encima de la flecha hacia abajo */

  /* esto restablecerá el estilo predeterminado del elemento ul */
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* Si los valores son más pequeños que el control, la lista de opciones
     será tan ancha como el control mismo */
  min-width: 100%;

  /* En caso de que la lista sea demasiado larga, su contenido se desbordará verticalmente
     (lo cual añadirá una barra de desplazamiento vertical automáticamente) pero nunca horizontalmente
     (porque no hemos establecido un ancho, la lista ajustará su ancho automáticamente.
     Si no puede, el contenido se truncará) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);
  background: #f0f0f0;
}
```

Para las opciones, necesitamos añadir una clase `highlight` para poder identificar el valor que el usuario elegirá (o ha elegido).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: black;
  color: white;
}
```

Aquí está el resultado con nuestros tres estados ([consulta el código fuente aquí](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_1)):

#### Estado básico

```html hidden
<div class="select">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Estado_básico",120,130)}}

#### Estado activo

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Estado_activo",120,130)}}

#### Estado abierto

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

{{EmbedLiveSample("Estado_abierto",120,130)}}

## Dar vida a tu control con JavaScript

Ahora que nuestro diseño y estructura están listos, podemos escribir el código JavaScript para hacer que el control funcione de verdad.

> [!WARNING]
> Lo que sigue es código educativo, no código de producción, y no debería usarse tal cual. No está preparado para el futuro ni funcionará en navegadores antiguos. También tiene partes redundantes que deberían optimizarse en código de producción.

### ¿Por qué no funciona?

Antes de empezar, es importante recordar que **JavaScript en el navegador es una tecnología poco confiable**. Los controles personalizados dependen de JavaScript para unir todo. Sin embargo, hay casos en los que JavaScript no puede ejecutarse en el navegador:

- El usuario ha desactivado JavaScript: esto es inusual, muy poca gente desactiva JavaScript hoy en día.
- El script no se cargó: este es uno de los casos más comunes, especialmente en el mundo móvil, donde la red no es muy confiable.
- El script tiene errores: siempre debes considerar esta posibilidad.
- El script entra en conflicto con un script de terceros: esto puede pasar con scripts de seguimiento o cualquier bookmarklet que use el usuario.
- El script entra en conflicto con una extensión del navegador, o se ve afectado por ella (como la extensión [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) de Firefox o la extensión [ScriptBlock](https://chromewebstore.google.com/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) de Chrome).
- El usuario está usando un navegador antiguo, y una de las funciones que necesitas no es compatible: esto pasará con frecuencia cuando uses APIs de vanguardia.
- El usuario interactúa con el contenido antes de que el JavaScript se haya descargado, analizado y ejecutado por completo.

Debido a estos riesgos, es realmente importante considerar seriamente qué pasará si tu JavaScript no funciona. Hablaremos de las opciones a tener en cuenta y cubriremos lo básico en nuestro ejemplo (una discusión completa sobre cómo resolver este problema para todos los escenarios necesitaría un libro entero). Solo recuerda que es fundamental hacer que tu script sea genérico y reutilizable.

En nuestro ejemplo, si nuestro código JavaScript no se ejecuta, recurriremos a mostrar un elemento {{HTMLElement("select")}} estándar. Incluimos nuestro control y el {{HTMLElement("select")}}; cuál de los dos se muestra depende de la clase del elemento body, y esa clase se actualiza mediante el script que hace funcionar al control, cuando este se carga correctamente.

Para lograrlo, necesitamos dos cosas:

Primero, necesitamos añadir un elemento {{HTMLElement("select")}} normal antes de cada instancia de nuestro control personalizado. Hay un beneficio en tener este select "extra" incluso si nuestro JavaScript funciona como se espera: usaremos este select para enviar los datos de nuestro control personalizado junto con el resto de los datos del formulario. Hablaremos de esto con más detalle más adelante.

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

Segundo, necesitamos dos clases nuevas para poder ocultar el elemento que no se necesita: ocultamos visualmente el control personalizado si nuestro script no se está ejecutando, o el elemento {{HTMLElement("select")}} "real" si sí se está ejecutando. Ten en cuenta que, por defecto, nuestro código HTML oculta nuestro control personalizado.

```css
.widget select,
.no-widget .select {
  /* Este selector CSS básicamente dice:
     - o hemos establecido la clase del body como "widget" y por tanto ocultamos el elemento <select> real
     - o no hemos cambiado la clase del body, por lo que la clase del body sigue siendo "no-widget",
       así que los elementos cuya clase sea "select" deben ocultarse */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Este CSS oculta visualmente uno de los elementos, pero sigue estando disponible para los lectores de pantalla.

Ahora necesitamos un interruptor de JavaScript para determinar si el script se está ejecutando o no. Este interruptor son un par de líneas: si en el momento de cargar la página nuestro script se está ejecutando, eliminará la clase `no-widget` y añadirá la clase `widget`, intercambiando así la visibilidad del elemento {{HTMLElement("select")}} y del control personalizado.

```js
document.body.classList.remove("no-widget");
document.body.classList.add("widget");
```

#### Sin JS

Consulta el [código fuente completo](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#no_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("Sin_JS",120,130)}}

#### Con JS

Consulta el [código fuente completo](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_2#js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");
```

{{EmbedLiveSample("Con_JS",120,130)}}

> [!NOTE]
> Si de verdad quieres que tu código sea genérico y reutilizable, en lugar de hacer un cambio de clase es mucho mejor simplemente añadir la clase widget para ocultar los elementos {{HTMLElement("select")}}, y añadir dinámicamente el árbol DOM que representa el control personalizado después de cada elemento {{HTMLElement("select")}} en la página.

### Facilitando el trabajo

En el código que vamos a construir, usaremos las APIs estándar de JavaScript y del DOM para hacer todo el trabajo que necesitamos. Las funciones que planeamos usar son las siguientes:

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener()")}}
3. {{domxref("NodeList.forEach()")}}
4. {{domxref("element.querySelector","querySelector()")}} y {{domxref("element.querySelectorAll","querySelectorAll()")}}

### Construir las funciones de retorno de eventos

El trabajo preliminar está hecho. Ahora podemos empezar a definir todas las funciones que se usarán cada vez que el usuario interactúe con nuestro control.

```js
// Esta función se usará cada vez que queramos desactivar un control personalizado
// Recibe un parámetro
// select: el nodo del DOM con la clase `select` a desactivar
function deactivateSelect(select) {
  // Si el control no está activo, no hay nada que hacer
  if (!select.classList.contains("active")) return;

  // Necesitamos obtener la lista de opciones del control personalizado
  const optList = select.querySelector(".optList");

  // Cerramos la lista de opciones
  optList.classList.add("hidden");

  // y desactivamos el control personalizado en sí
  select.classList.remove("active");
}

// Esta función se usará cada vez que el usuario quiera activar el control
// (lo cual, a su vez, desactivará otros controles select)
// Recibe dos parámetros:
// select: el nodo del DOM con la clase `select` a activar
// selectList: la lista de todos los nodos del DOM con la clase `select`
function activeSelect(select, selectList) {
  // Si el control ya está activo, no hay nada que hacer
  if (select.classList.contains("active")) return;

  // Tenemos que desactivar el estado activo en todos los controles personalizados
  // Como la función deactivateSelect cumple todos los requisitos de la función
  // de retorno de forEach, la usamos directamente sin usar una función
  // anónima intermedia.
  selectList.forEach(deactivateSelect);

  // Y activamos el estado activo para este control específico
  select.classList.add("active");
}

// Esta función se usará cada vez que el usuario quiera abrir/cerrar la lista de opciones
// Recibe un parámetro:
// select: el nodo del DOM con la lista a alternar
function toggleOptList(select) {
  // La lista se obtiene a partir del control
  const optList = select.querySelector(".optList");

  // Cambiamos la clase de la lista para mostrarla/ocultarla
  optList.classList.toggle("hidden");
}

// Esta función se usará cada vez que necesitemos resaltar una opción
// Recibe dos parámetros:
// select: el nodo del DOM con la clase `select` que contiene la opción a resaltar
// option: el nodo del DOM con la clase `option` a resaltar
function highlightOption(select, option) {
  // Obtenemos la lista de todas las opciones disponibles para nuestro elemento select personalizado
  const optionList = select.querySelectorAll(".option");

  // Quitamos el resaltado de todas las opciones
  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  // Resaltamos la opción correcta
  option.classList.add("highlight");
}
```

Necesitas estas funciones para manejar los distintos estados del control personalizado.

A continuación, vinculamos estas funciones a los eventos correspondientes:

```js
const selectList = document.querySelectorAll(".select");

// Cada control personalizado necesita ser inicializado
selectList.forEach((select) => {
  // así como todos sus elementos `option`
  const optionList = select.querySelectorAll(".option");

  // Cada vez que el usuario pasa el ratón sobre una opción, resaltamos esa opción
  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      // Nota: las variables `select` y `option` son clausuras (closures)
      // disponibles en el ámbito de nuestra llamada a la función.
      highlightOption(select, option);
    });
  });

  // Cada vez que el usuario hace clic o toca un elemento select personalizado
  select.addEventListener("click", (event) => {
    // Nota: la variable `select` es una clausura (closure)
    // disponible en el ámbito de nuestra llamada a la función.

    // Alternamos la visibilidad de la lista de opciones
    toggleOptList(select);
  });

  // En caso de que el control obtenga el foco
  // El control obtiene el foco cada vez que el usuario hace clic en él o cada vez
  // que usa la tecla de tabulación para acceder al control
  select.addEventListener("focus", (event) => {
    // Nota: las variables `select` y `selectList` son clausuras (closures)
    // disponibles en el ámbito de nuestra llamada a la función.

    // Activamos el control
    activeSelect(select, selectList);
  });

  // En caso de que el control pierda el foco
  select.addEventListener("blur", (event) => {
    // Nota: la variable `select` es una clausura (closure)
    // disponible en el ámbito de nuestra llamada a la función.

    // Desactivamos el control
    deactivateSelect(select);
  });

  // Pierde el foco si el usuario pulsa `esc`
  select.addEventListener("keyup", (event) => {
    // desactivar al soltar la tecla `esc`
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

Llegados a este punto, nuestro control cambiará de estado según nuestro diseño, pero su valor todavía no se actualiza. Nos ocuparemos de eso a continuación.

#### Ejemplo en vivo

Consulta el [código fuente completo](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_3).

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });

  select.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      deactivateSelect(select);
    }
  });
});
```

{{EmbedLiveSample("Ejemplo_en_vivo",120,130)}}

### Manejar el valor del control

Ahora que nuestro control funciona, tenemos que añadir código para actualizar su valor según la entrada del usuario y hacer posible enviar el valor junto con los datos del formulario.

La forma más sencilla de hacerlo es usar un control nativo por debajo. Ese control se encargará de llevar el registro del valor con todos los controles integrados que ofrece el navegador, y el valor se enviará como de costumbre cuando se envíe un formulario. No tiene sentido reinventar la rueda cuando podemos tener todo esto resuelto para nosotros.

Como vimos antes, ya usamos un control select nativo como alternativa por razones de accesibilidad; podemos sincronizar su valor con el de nuestro control personalizado:

```js
// Esta función actualiza el valor mostrado y lo sincroniza con el control nativo.
// Recibe dos parámetros:
// select : el nodo del DOM con la clase `select` que contiene el valor a actualizar
// index  : el índice del valor que se debe seleccionar
function updateValue(select, index) {
  // Necesitamos obtener el control nativo correspondiente al control personalizado dado
  // En nuestro ejemplo, ese control nativo es hermano del control personalizado
  const nativeWidget = select.previousElementSibling;

  // También necesitamos obtener el contenedor del valor de nuestro control personalizado
  const value = select.querySelector(".value");

  // Y necesitamos la lista completa de opciones
  const optionList = select.querySelectorAll(".option");

  // Establecemos el índice seleccionado con el índice de nuestra elección
  nativeWidget.selectedIndex = index;

  // Actualizamos el contenedor del valor en consecuencia
  value.textContent = optionList[index].textContent;

  // Y resaltamos la opción correspondiente en nuestro control personalizado
  highlightOption(select, optionList[index]);
}

// Esta función devuelve el índice actualmente seleccionado en el control nativo
// Recibe un parámetro:
// select : el nodo del DOM con la clase `select` relacionado con el control nativo
function getIndex(select) {
  // Necesitamos acceder al control nativo correspondiente al control personalizado dado
  // En nuestro ejemplo, ese control nativo es hermano del control personalizado
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

Con estas dos funciones, podemos vincular los controles nativos con los personalizados:

```js
const selectList = document.querySelectorAll(".select");

// Cada control personalizado necesita ser inicializado
selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  // Hacemos que nuestro control personalizado sea enfocable
  select.tabIndex = 0;

  // Hacemos que el control nativo ya no sea enfocable
  select.previousElementSibling.tabIndex = -1;

  // Nos aseguramos de que el valor seleccionado por defecto se muestre correctamente
  updateValue(select, selectedIndex);

  // Cada vez que el usuario hace clic en una opción, actualizamos el valor en consecuencia
  optionList.forEach((option, index) => {
    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  // Cada vez que el usuario usa el teclado en un control enfocado, actualizamos el valor en consecuencia
  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);
    // Cuando el usuario pulsa la tecla Escape, desactivamos el control personalizado
    if (event.key === "Escape") {
      deactivateSelect(select);
    }

    // Cuando el usuario pulsa la flecha hacia abajo, saltamos a la siguiente opción
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
      // Prevenimos la acción por defecto de la pulsación de la flecha hacia abajo.
      // Sin esto, la página se desplazaría hacia abajo cuando se pulse la flecha hacia abajo.
      event.preventDefault();
    }

    // Cuando el usuario pulsa la flecha hacia arriba, saltamos a la opción anterior
    if (event.key === "ArrowUp" && index > 0) {
      index--;
      // Prevenimos la acción por defecto de la pulsación de la flecha hacia arriba.
      event.preventDefault();
    }
    if (event.key === "Enter" || event.key === " ") {
      // Si se pulsa Enter o Espacio, alternamos la lista de opciones
      toggleOptList(select);
    }

    updateValue(select, index);
  });
});
```

En el código anterior, vale la pena destacar el uso de la propiedad [`tabIndex`](/es/docs/Web/API/HTMLElement/tabIndex). Usar esta propiedad es necesario para asegurarnos de que el control nativo nunca obtenga el foco, y para asegurarnos de que nuestro control personalizado obtenga el foco cuando el usuario use el teclado o el ratón.

¡Con esto, hemos terminado!

#### Ejemplo en vivo

Consulta el [código fuente aquí](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_4).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((option) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });
});

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;
  select.previousElementSibling.tabIndex = -1;

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);

    if (event.key === "Escape") {
      deactivateSelect(select);
    }
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
    }
    if (event.key === "ArrowUp" && index > 0) {
      index--;
    }

    updateValue(select, index);
  });
});
```

{{EmbedLiveSample("Ejemplo_en_vivo_2",120,130)}}

Pero espera un momento, ¿de verdad hemos terminado?

## Hacerlo accesible

Hemos construido algo que funciona y, aunque estamos lejos de un cuadro de selección con todas las funciones, funciona bien. Pero lo que hemos hecho no es más que trastear con el DOM. No tiene una semántica real, y aunque se parezca a un cuadro de selección, desde el punto de vista del navegador no lo es, así que las tecnologías de asistencia no podrán entender que se trata de un cuadro de selección. En resumen, ¡este bonito cuadro de selección nuevo no es accesible!

Por suerte, hay una solución y se llama [ARIA](/es/docs/Web/Accessibility/ARIA). ARIA significa "Accessible Rich Internet Application" (Aplicación de Internet Rica y Accesible), y es [una especificación del W3C](https://w3c.github.io/aria/) diseñada específicamente para lo que estamos haciendo aquí: hacer que las aplicaciones web y los controles personalizados sean accesibles. Básicamente es un conjunto de atributos que extienden HTML para que podamos describir mejor los roles, estados y propiedades, como si el elemento que acabamos de idear fuera el elemento nativo por el que intenta pasar. Estos atributos se pueden usar editando el marcado HTML. También actualizamos los atributos ARIA mediante JavaScript a medida que el usuario actualiza el valor seleccionado.

### El atributo `role`

El atributo clave usado por [ARIA](/es/docs/Web/Accessibility/ARIA) es el atributo [`role`](/es/docs/Web/Accessibility/ARIA/Guides/Techniques). El atributo [`role`](/es/docs/Web/Accessibility/ARIA/Guides/Techniques) acepta un valor que define para qué se usa un elemento. Cada rol define sus propios requisitos y comportamientos. En nuestro ejemplo, usaremos el rol [`listbox`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role). Es un "rol compuesto", lo que significa que los elementos con ese rol deben tener hijos, cada uno con un rol específico (en este caso, al menos un hijo con el rol `option`).

También vale la pena señalar que ARIA define roles que se aplican por defecto al marcado HTML estándar. Por ejemplo, el elemento {{HTMLElement("table")}} coincide con el rol `grid`, y el elemento {{HTMLElement("ul")}} coincide con el rol `list`. Como usamos un elemento {{HTMLElement("ul")}}, queremos asegurarnos de que el rol `listbox` de nuestro control reemplace al rol `list` del elemento {{HTMLElement("ul")}}. Para ello, usaremos el rol `presentation`. Este rol está diseñado para indicar que un elemento no tiene un significado especial, y se usa únicamente para presentar información. Lo aplicaremos a nuestro elemento {{HTMLElement("ul")}}.

Para dar soporte al rol [`listbox`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), solo tenemos que actualizar nuestro HTML así:

```html
<!-- Añadimos el atributo role="listbox" a nuestro elemento superior -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- También añadimos role="presentation" al elemento ul -->
  <ul class="optList" role="presentation">
    <!-- Y añadimos el atributo role="option" a todos los elementos li -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> [!NOTE]
> No es necesario incluir tanto el atributo `role` como un atributo `class`. En lugar de usar `.option`, usa el [selector de atributos](/es/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[role="option"]` en tu CSS.

### El atributo `aria-selected`

Usar el atributo [`role`](/es/docs/Web/Accessibility/ARIA/Guides/Techniques) no es suficiente. [ARIA](/es/docs/Web/Accessibility/ARIA) también ofrece muchos atributos de estado y de propiedad. Cuanto más y mejor los uses, mejor entenderán tu control las tecnologías de asistencia. En nuestro caso, limitaremos su uso a un solo atributo: `aria-selected`.

El atributo `aria-selected` se usa para marcar qué opción está seleccionada actualmente; esto permite que las tecnologías de asistencia informen al usuario cuál es la selección actual. Lo usaremos dinámicamente con JavaScript para marcar la opción seleccionada cada vez que el usuario elija una. Para ello, necesitamos revisar nuestra función `updateValue()`:

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll('[role="option"]');

  // Nos aseguramos de que ninguna opción quede seleccionada
  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  // Nos aseguramos de que la opción elegida quede seleccionada
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}
```

Podría haber parecido más sencillo dejar que un lector de pantalla se enfoque en el select oculto fuera de pantalla e ignore el nuestro con estilo propio, pero esta no es una solución accesible. Los lectores de pantalla no se limitan a personas ciegas; las personas con baja visión, e incluso con visión perfecta, también los usan. Por esta razón, no puedes hacer que el lector de pantalla se enfoque en un elemento fuera de pantalla.

A continuación está el resultado final de todos estos cambios (te harás una mejor idea probándolo con una tecnología de asistencia como [NVDA](https://www.nvaccess.org/) o [VoiceOver](https://www.apple.com/accessibility/features/?vision)).

#### Ejemplo en vivo

Consulta el [código fuente completo aquí](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option">Lemon</li>
      <li class="option" role="option">Banana</li>
      <li class="option" role="option">Strawberry</li>
      <li class="option" role="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

const form = document.querySelector("form");

form.classList.remove("no-widget");
form.classList.add("widget");

const selectList = document.querySelectorAll(".select");

selectList.forEach((select) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;
  select.previousElementSibling.tabIndex = -1;

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("mouseover", () => {
      highlightOption(select, option);
    });

    option.addEventListener("click", (event) => {
      updateValue(select, index);
    });
  });

  select.addEventListener("click", (event) => {
    toggleOptList(select);
  });

  select.addEventListener("focus", (event) => {
    activeSelect(select, selectList);
  });

  select.addEventListener("blur", (event) => {
    deactivateSelect(select);
  });

  select.addEventListener("keyup", (event) => {
    let index = getIndex(select);

    if (event.key === "Escape") {
      deactivateSelect(select);
    }
    if (event.key === "ArrowDown" && index < optionList.length - 1) {
      index++;
    }
    if (event.key === "ArrowUp" && index > 0) {
      index--;
    }

    updateValue(select, index);
  });
});
```

{{EmbedLiveSample("Ejemplo_en_vivo_3",120,130)}}

Si quieres seguir avanzando, el código de este ejemplo necesita algunas mejoras antes de volverse genérico y reutilizable. Este es un ejercicio que puedes intentar hacer tú mismo. Dos pistas para ayudarte con esto: el primer argumento de todas nuestras funciones es el mismo, lo que significa que esas funciones necesitan el mismo contexto. Construir un objeto para compartir ese contexto sería una buena idea.

## Un enfoque alternativo: usar botones de radio

En el ejemplo anterior, reinventamos un elemento {{htmlelement('select')}} usando HTML, CSS y JavaScript no semánticos. Ese select seleccionaba una opción entre un número limitado de opciones, que es la misma funcionalidad que ofrece un grupo de botones {{htmlelement('input/radio', 'radio')}} con el mismo nombre.

Por lo tanto, podríamos reinventar esto usando botones de radio en su lugar; veamos esta opción.

Podemos empezar con una lista desordenada completamente semántica y accesible de botones {{htmlelement('input/radio','radio')}}, cada uno con su {{htmlelement('label')}} asociada, etiquetando todo el grupo con un par {{htmlelement('fieldset')}} y {{htmlelement('legend')}} semánticamente apropiado.

```html
<fieldset>
  <legend>Pick a fruit</legend>
  <ul class="styledSelect">
    <li>
      <input
        type="radio"
        name="fruit"
        value="Cherry"
        id="fruitCherry"
        checked />
      <label for="fruitCherry">Cherry</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Lemon" id="fruitLemon" />
      <label for="fruitLemon">Lemon</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Banana" id="fruitBanana" />
      <label for="fruitBanana">Banana</label>
    </li>
    <li>
      <input
        type="radio"
        name="fruit"
        value="Strawberry"
        id="fruitStrawberry" />
      <label for="fruitStrawberry">Strawberry</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Apple" id="fruitApple" />
      <label for="fruitApple">Apple</label>
    </li>
  </ul>
</fieldset>
```

Aplicaremos un poco de estilo a la lista de botones de radio (no al legend/fieldset) para que se parezca un poco al ejemplo anterior, solo para mostrar que se puede hacer:

```css
.styledSelect {
  display: inline-block;
  padding: 0;
}
.styledSelect li {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.styledSelect [type="radio"] {
  position: absolute;
  left: -100vw;
  top: -100vh;
}
.styledSelect label {
  margin: 0;
  line-height: 2;
  padding-left: 4px;
}
.styledSelect:not(:focus-within) input:not(:checked) + label {
  height: 0;
  outline-color: transparent;
  overflow: hidden;
}
.styledSelect:not(:focus-within) input:checked + label {
  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);
}
.styledSelect:not(:focus-within) input:checked + label::after {
  content: "▼";
  background: black;
  float: right;
  color: white;
  padding: 0 4px;
  margin: 0 -4px 0 4px;
}
.styledSelect:focus-within {
  border: 0.2em solid black;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333333;
  color: white;
  width: 100%;
}
```

Sin JavaScript, y con solo un poco de CSS, podemos dar estilo a la lista de botones de radio para mostrar únicamente el elemento marcado. Cuando el foco está dentro del `<ul>` en el `<fieldset>`, la lista se abre, y las flechas arriba y abajo (y también izquierda y derecha) funcionan para seleccionar el elemento anterior y siguiente. Pruébalo:

{{EmbedLiveSample("Un_enfoque_alternativo_usar_botones_de_radio",200,240)}}

Esto funciona, hasta cierto punto, sin JavaScript. Hemos creado un control similar a nuestro control personalizado, que funciona incluso si el JavaScript falla. Parece una gran solución, ¿verdad? Bueno, no del todo. Funciona con el teclado, pero no como se esperaría con un clic de ratón. Probablemente tenga más sentido usar los estándares web como base para los controles personalizados en lugar de depender de frameworks para crear elementos sin semántica nativa. Sin embargo, nuestro control no tiene la misma funcionalidad que un `<select>` tiene de forma nativa.

Por el lado positivo, este control es totalmente accesible para un lector de pantalla y totalmente navegable mediante el teclado. Sin embargo, este control no es un reemplazo de {{htmlelement('select')}}. Hay funcionalidad que difiere y/o falta. Por ejemplo, las cuatro flechas permiten navegar por las opciones, pero al hacer clic en la flecha hacia abajo cuando el usuario está en el último botón, lo lleva al primer botón; no se detiene en la parte superior e inferior de la lista de opciones como lo hace un `<select>`.

Dejaremos añadir esta funcionalidad faltante como ejercicio para el lector.

## Conclusión

Hemos visto todos los conceptos básicos para construir un control de formulario personalizado, pero como puedes ver, no es algo trivial. Antes de crear tu propio control personalizado, considera si HTML ofrece elementos alternativos que puedan usarse para cubrir adecuadamente tus necesidades. Si de verdad necesitas crear un control personalizado, a menudo es más fácil apoyarse en bibliotecas de terceros en lugar de construir el tuyo propio. Pero si creas el tuyo, modificas elementos existentes, o usas un framework para implementar un control ya hecho, recuerda que crear un control de formulario usable y accesible es más complicado de lo que parece.

Aquí tienes algunas bibliotecas que deberías considerar antes de programar la tuya:

- [jQuery UI](https://jqueryui.com/)
- [AXE accessible custom select dropdowns](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

Si creas controles alternativos mediante botones de radio, tu propio JavaScript, o con una biblioteca de terceros, asegúrate de que sea accesible y esté preparado para el futuro; es decir, necesita funcionar bien con una variedad de navegadores cuya compatibilidad con los estándares web que usan varía. ¡Diviértete!
