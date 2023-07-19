---
title: Mobile accessibility
slug: Learn/Accessibility/Mobile
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

Dado que el acceso a la web en dispositivos móviles es tan popular, y las plataformas populares como iOS y Android tienen herramientas de accesibilidad completas, es importante considerar la accesibilidad de su contenido web en estas plataformas. Este artículo analiza las consideraciones de accesibilidad específicas para dispositivos móviles.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Conocimientos básicos de computación, una comprensión básica de HTML,
        CSS y JavaScript, y una comprensión de los
        <a href="/es/docs/Learn/Accessibility">artículos previos del curso</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para comprender qué problemas existen con la accesibilidad en
        dispositivos móviles y cómo superarlos.
      </td>
    </tr>
  </tbody>
</table>

## Accessibility on mobile devices

El estado de accesibilidad, y el soporte para los estándares web en general, es bueno en los dispositivos móviles modernos. Atrás quedaron los días en que los dispositivos móviles utilizaban tecnologías web completamente diferentes para los navegadores de escritorio, lo que obligaba a los desarrolladores a utilizar el rastreo de los navegadores y les servía sitios completamente separados (aunque muchas empresas aún detectan el uso de dispositivos móviles y les ofrecen un dominio móvil separado).

En estos días, los dispositivos móviles en general pueden manejar sitios web "completos", y las plataformas principales incluso tienen lectores de pantalla incorporados para permitir que los usuarios con discapacidades visuales los utilicen con éxito. Los navegadores móviles modernos tienden a tener un buen soporte para [WAI-ARIA](/es/docs/Learn/Accessibility/WAI-ARIA_basics), también.

Para hacer que un sitio web sea accesible y utilizable en dispositivos móviles, solo debe seguir las buenas prácticas generales de diseño web y accesibilidad.

Hay algunas excepciones que requieren una consideración especial para el móvil; Los principales son:

- Mecanismos de control: asegúrese de que los controles de la interfaz, como los botones, estén accesibles en los móviles (es decir, principalmente en la pantalla táctil), así como en las computadoras de escritorio / portátiles (principalmente en el mouse / teclado).
- Entrada del usuario: haga que los requisitos de entrada del usuario sean lo más fáciles posible en el móvil (por ejemplo, en formularios, siga escribiendo al mínimo).
- Diseño receptivo: asegúrese de que los diseños funcionen en dispositivos móviles, conserve los tamaños de descarga de imágenes y piense en la provisión de imágenes para pantallas de alta resolución.

## Resumen de las pruebas del lector de pantalla en Android e iOS

Las plataformas móviles más comunes tienen lectores de pantalla completamente funcionales. Estos funcionan de la misma manera que los lectores de pantalla de escritorio, excepto que se operan en gran parte mediante gestos táctiles en lugar de combinaciones de teclas.

Veamos los dos principales: TalkBack en Android y VoiceOver en iOS.

### Android TalkBack

El lector de pantalla TalkBack está integrado en el sistema operativo Android.

Para activarlo, seleccione Configuración> Accesibilidad> TalkBack, y luego presione el interruptor deslizante para activarlo. Siga las indicaciones adicionales en pantalla que le presenten.

> **Nota:** las versiones anteriores de TalkBack están activadas de formas [formas ligeramente distintas.](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback)

Cuando TalkBack esté activado, los controles básicos de su dispositivo Android serán un poco diferentes. Por ejemplo:

1. Pulsar una aplicación solo lo seleccionará, y el dispositivo leerá qué es la aplicación.
2. Al deslizar hacia la izquierda y hacia la derecha, se moverá entre las aplicaciones o los botones / controles si se encuentra en una barra de control. El dispositivo leerá cada opción.
3. Si toca dos veces en cualquier lugar, se abrirá la aplicación / seleccione la opción.
4. También puede "explorar con un toque": mantenga el dedo presionado sobre la pantalla y arrástrelo, y su dispositivo leerá las diferentes aplicaciones / elementos con los que se mueve.

Si desea desactivar TalkBack:

1. Navega a tu aplicación de configuración utilizando los gestos anteriores.
2. Vaya a Accesibilidad> TalkBack.
3. Navegue hasta el interruptor deslizante y actívelo para apagarlo.

Nota: Puede acceder a la pantalla de inicio en cualquier momento deslizando hacia arriba y hacia la izquierda con un movimiento suave. Si tiene más de una pantalla de inicio, puede moverse entre ellos deslizando dos dedos hacia la izquierda y hacia la derecha.

Para obtener una lista más completa de los gestos de TalkBack, consulte [Usar gestos TalkBack.](https://support.google.com/accessibility/android/answer/6151827)

#### Desbloqueo del telefono

Cuando TalkBack está activado, desbloquear el teléfono es un poco diferente.

Puede hacer un deslizamiento con dos dedos hacia arriba desde la parte inferior de la pantalla de bloqueo. Si ha establecido un código de acceso o un patrón para desbloquear su dispositivo, se lo dirigirá a la pantalla de entrada correspondiente para ingresarlo.

También puede explorar tocando para encontrar el botón Desbloquear en la parte inferior central de la pantalla y luego toque dos veces.

#### Menús globales y locales

TalkBack le permite acceder a los menús de contexto global y local, donde quiera que haya navegado en el dispositivo. El primero proporciona opciones globales relacionadas con el dispositivo en su conjunto, y el segundo proporciona opciones relacionadas con la aplicación / pantalla actual en la que se encuentra.

Para llegar a estos menús:

1. Acceda al menú global deslizando rápidamente hacia abajo y luego a la
2. Acceda al menú local deslizando rápidamente hacia arriba y luego a la
3. Desliza el dedo hacia la izquierda y hacia la derecha para alternar entre las diferentes opciones.
4. Una vez que haya seleccionado la opción que desea, haga doble clic para elegir esa opción.

Para obtener detalles sobre todas las opciones disponibles en los menús de contexto global y local, consulte [Uso global y local contextual de menús](https://support.google.com/accessibility/android/answer/6007066).

#### Navegando por páginas web

Puede usar el menú contextual local mientras está en un navegador web para encontrar opciones para navegar por páginas web usando solo los encabezados, controles de formulario o enlaces, o navegar línea por línea, etc.

Por ejemplo, con TalkBack activado:

1. Abra su navegador web.
2. Activar la barra de URL.
3. Ingrese una página web que tenga muchos encabezados, como la página principal de bbc.co.uk. Para ingresar el texto de la URL:

   - Seleccione la barra de URL deslizando hacia la izquierda / derecha hasta que llegue a ella, y luego toque dos veces.
   - Mantenga presionado el teclado virtual hasta que obtenga el carácter que desea y luego suelte el dedo para escribirlo. Repita para cada personaje.
   - Una vez que hayas terminado, encuentra la tecla Intro y presiónala.

4. Desliza el dedo hacia la izquierda y hacia la derecha para moverte entre los diferentes elementos de la página.
5. Deslice hacia arriba y hacia la derecha con un movimiento suave para ingresar al menú de contenido local.
6. Deslízate hacia la derecha hasta que encuentres la opción "Encabezados y puntos de referencia".
7. Pulse dos veces para seleccionarlo. Ahora podrá desplazarse hacia la izquierda y hacia la derecha para moverse entre encabezados y puntos de referencia de ARIA.
8. Para volver al modo predeterminado, ingrese nuevamente al menú de contexto local deslizando hacia arriba y a la derecha, seleccione "Predeterminado", y luego toque dos veces para activar.

> **Nota:** consulte [Empezar en Android con TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) para obtener una documentación más completa.

### iOS VoiceOver

Una versión móvil de VoiceOver está integrada en el sistema operativo iOS.

Para activarlo, vaya a la aplicación de configuración y seleccione General> Accesibilidad> VoiceOver. Presione el control deslizante VoiceOver para habilitarlo (también verá otras opciones relacionadas con VoiceOver en esta página).

Una vez que VoiceOver esté habilitado, los gestos de control básico de iOS serán un poco diferentes:

1. Un solo toque hará que se seleccione el elemento que tocas; su dispositivo dirá el elemento que ha tocado.
2. También puede navegar por los elementos en la pantalla deslizando hacia la izquierda y hacia la derecha para moverse entre ellos, o deslizando el dedo por la pantalla para moverse entre diferentes elementos (cuando encuentra el elemento que desea, puede quitar el dedo para seleccionarlo). ).
3. Para activar el elemento seleccionado (por ejemplo, abrir una aplicación seleccionada), toque dos veces en cualquier lugar de la pantalla.
4. Desliza tres dedos para desplazarte por una página.
5. Toque con dos dedos para realizar una acción relevante para el contexto, por ejemplo, tomar una foto mientras está en la aplicación de la cámara.

Para apagarlo nuevamente, navegue de nuevo a Configuración> General> Accesibilidad> VoiceOver usando los gestos anteriores, y active el control deslizante VoiceOver para desactivarlo.

#### Desbloquear el teléfono

Para desbloquear el teléfono, debe presionar el botón de inicio (o deslizar) de manera normal. Si tiene un código de acceso configurado, puede seleccionar cada número deslizando / deslizando (como se explicó anteriormente) y luego toque dos veces para ingresar cada número cuando haya encontrado el correcto.

#### Usando el rotor

Cuando VoiceOver está activado, tiene una función de navegación llamada Rotor disponible para usted, que le permite elegir rápidamente entre una serie de opciones útiles comunes. Para usarlo:

1. Gira dos dedos alrededor de la pantalla como si estuvieras girando un dial. Cada opción se leerá en voz alta a medida que gire más. Puede ir hacia adelante y hacia atrás para recorrer las opciones.
2. Una vez que hayas encontrado la opción que

   - Suelte los dedos para seleccionarlo.
   - Si es una opción que puede repetir el valor de (como Volumen o Velocidad de voz), puede deslizar hacia arriba o hacia abajo para aumentar o disminuir el valor del elemento seleccionado.

Las opciones disponibles en el Rotor son sensibles al contexto; serán diferentes según la aplicación o la vista en la que se encuentre (consulte a continuación un ejemplo).

#### Navegando por páginas web

Vamos a hacer una prueba a navegar con VoiceOver:

1. Abra su navegador web.
2. Activar la barra de URL.
3. Ingrese una página web que tenga muchos encabezados, como la página principal de bbc.co.uk. Para ingresar el texto de la URL:

   - Seleccione la barra de URL deslizando hacia la izquierda / derecha hasta que llegue a ella, y luego toque dos veces.
   - Para cada personaje, mantenga presionado el teclado virtual hasta que obtenga el carácter que desea y luego suelte el dedo para seleccionarlo. Pulse dos veces para escribirlo.
   - Una vez que hayas terminado, encuentra la tecla Intro y presiónala.

4. Desliza el dedo hacia la izquierda y hacia la derecha para moverte entre los elementos de la página. Puede tocar dos veces un elemento para seleccionarlo (por ejemplo, siga un enlace).
5. Por defecto, la opción de Rotor seleccionada será Speaking Rate; actualmente puede deslizar hacia arriba y hacia abajo para aumentar o disminuir la frecuencia de habla.
6. Ahora gire dos dedos alrededor de la pantalla como un cuadrante para mostrar el rotor y muévase entre sus opciones. Aquí hay algunos ejemplos de las opciones disponibles:

   - Tasa de habla: Cambia la tasa de habla.
   - Contenedores: muévete entre los diferentes contenedores semánticos de la página.
   - Encabezados: muévete entre los encabezados de la página.
   - Enlaces: Mover entre enlaces en la página.
   - Controles de formulario: muévase entre los controles de formulario en la página.
   - Idioma: Mover entre diferentes traducciones, si están disponibles.

7. Seleccionar encabezados. Ahora podrá desplazarse hacia arriba y hacia abajo para moverse entre los encabezados de la página.

> **Nota:** Para obtener una referencia más completa que cubra los gestos de VoiceOver disponibles y otros consejos sobre las pruebas de accesibilidad en iOS, consulte [Probar la accesibilidad en su dispositivo con VoiceOver](https://developer.apple.com/library/content/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html#//apple_ref/doc/uid/TP40012619-CH3).

## Mecanismos de control

En nuestro artículo de accesibilidad de CSS y JavaScript, examinamos la idea de eventos que son específicos de un determinado tipo de mecanismo de control ([eventos ratón-específicos](/es/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Para resumir, esto causa problemas de accesibilidad porque otros mecanismos de control no pueden activar la funcionalidad asociada.

Como ejemplo, el evento de clic es bueno en términos de accesibilidad: se puede invocar un controlador de eventos asociado haciendo clic en el elemento en el que está configurado el controlador, haciendo tabulaciones en él y presionando Intro / Retorno, o tocándolo en un dispositivo de pantalla táctil. Pruebe nuestro ejemplo [simple-button-example.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-button-example.html) ([véalo en vivo](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)) para ver lo que queremos decir.

Alternativamente, los eventos específicos del mouse como [mousedown](/es/docs/Web/API/GlobalEventHandlers/onmousedown) y [mouseup](/es/docs/Web/API/GlobalEventHandlers/onmouseup) crean problemas: sus controladores de eventos no pueden invocarse usando controles que no sean del mouse.

Si intenta controlar nuestro ejemplo de [simple-box-drag.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-box-drag.html) ([ver ejemplo en vivo](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) con el teclado o el toque, verá el problema. Esto ocurre porque estamos usando un código como el siguiente:

```js
div.onmousedown = function () {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Para habilitar otras formas de control, debe usar eventos diferentes pero equivalentes; por ejemplo, los eventos táctiles funcionan en dispositivos con pantalla táctil:

```js
div.ontouchstart = function (e) {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Hemos proporcionado un ejemplo sencillo que muestra cómo usar el mouse y los eventos táctiles juntos [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/multi-control-box-drag.html) ([ver ejemplo en vivo](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> **Nota:** También puede ver ejemplos totalmente funcionales que muestran cómo implementar diferentes mecanismos de control en [Implementando mecanismos de control de juego.](/es/docs/Games/Techniques/Control_mechanisms)

## Diseño de respuesta

[El diseño de respuesta](/es/docs/Web/Apps/Progressive/Responsive) es la práctica de hacer que sus diseños y otras características de sus aplicaciones cambien dinámicamente dependiendo de factores como el tamaño de la pantalla y la resolución, para que sean utilizables y accesibles para usuarios de diferentes tipos de dispositivos.

En particular, los problemas más comunes que deben abordarse para dispositivos móviles son:

- Adecuación de diseños para dispositivos móviles. Un diseño de varias columnas no funcionará tan bien en una pantalla estrecha, por ejemplo, y es posible que deba aumentar el tamaño del texto para que sea legible. Dichos problemas se pueden resolver creando un diseño sensible utilizando tecnologías tales como [consultas de medios](/es/docs/Web/CSS/Media_Queries), [vista](/es/docs/Mozilla/Mobile/Viewport_meta_tag) y [flexbox](/es/docs/Learn/CSS/CSS_layout/Flexbox). .
- Conservando tamaños de imagen descargados. En general, los dispositivos de pantalla pequeña no necesitarán imágenes tan grandes como sus contrapartes de escritorio, y es más probable que estén en conexiones de red lentas. Por lo tanto, es aconsejable servir imágenes más pequeñas para dispositivos de pantalla estrecha, según corresponda. Puede manejar esto [técnicas de imagenes de respuesta](/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).
- Pensando en altas resoluciones. Muchos dispositivos móviles tienen pantallas de alta resolución y, por lo tanto, necesitan imágenes de mayor resolución para que la pantalla pueda seguir luciendo nítida y nítida. Nuevamente, puede servir imágenes según corresponda utilizando técnicas de imágenes sensibles. Además, muchos requisitos de imagen se pueden cumplir con el formato de imágenes vectoriales SVG, que es compatible con todos los navegadores actuales. SVG tiene un tamaño de archivo pequeño y se mantendrá nítido independientemente del tamaño que se muestre (consulte [Agregar gráficos vectoriales a la web](/es/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) para obtener más detalles).

> **Nota:** No proporcionaremos una discusión completa de las técnicas de diseño receptivo aquí, ya que están cubiertas en otros lugares alrededor de MDN (vea los enlaces anteriores).

### Consideraciones específicas para móviles

Hay otros aspectos importantes a tener en cuenta al hacer que los sitios sean más accesibles en dispositivos móviles. Hemos enumerado un par aquí, pero agregaremos más cuando pensemos en ellos.

#### No deshabilitar el zoom

Usando viewport, es posible deshabilitar el zoom, usando un código como este en su {{htmlelement("head")}}:

```html
<meta name="viewport" content="user-scalable=no" />
```

Nunca debe hacer esto si es posible: muchas personas confían en el zoom para poder ver el contenido de su sitio web, por lo que eliminar esta funcionalidad es una muy mala idea. Hay ciertas situaciones en las que el zoom podría romper la interfaz de usuario; en tales casos, si cree que necesita deshabilitar el zoom, debe proporcionar algún otro tipo de equivalente, como un control para aumentar el tamaño del texto de una manera que no rompa su interfaz de usuario.

#### Mantener los menús accesibles

Debido a que la pantalla es mucho más estrecha en los dispositivos móviles, es muy común utilizar consultas de medios y otras tecnologías para hacer que el menú de navegación se reduzca a un pequeño icono en la parte superior de la pantalla, que se puede presionar para mostrar el menú solo si es necesario - cuando el sitio se ve en el móvil. Esto suele representarse mediante un icono de "tres líneas horizontales" y, por lo tanto, el patrón de diseño se conoce como "menú de hamburguesas".

Al implementar un menú de este tipo, debe asegurarse de que el control para revelarlo sea accesible mediante los mecanismos de control apropiados (normalmente, toque para dispositivos móviles), como se explica en [mecanismos de control](#mecanismos_de_control), y que el resto La página se aleja o se oculta de alguna manera mientras se accede al menú, para evitar confusiones al navegar.

Haga clic aquí para un buen [ejemplo de menú de hamburguesa.](https://fritz-weisshart.de/meg_men/)

## Entrada de usuario

En los dispositivos móviles, el ingreso de datos tiende a ser más molesto para los usuarios que la experiencia equivalente en computadoras de escritorio. Es más conveniente escribir texto en las entradas de formulario utilizando un teclado de computadora de escritorio o portátil que un teclado virtual de pantalla táctil o un pequeño teclado físico móvil.

Por esta razón, vale la pena intentar minimizar la cantidad de escritura necesaria. Como ejemplo, en lugar de hacer que los usuarios completen el título de su trabajo cada vez que usan una entrada de texto regular, podría ofrecer un menú {{htmlelement ("select")}} que contenga las opciones más comunes (que también ayuda a mantener la coherencia en entrada de datos), y ofrece una opción "Otro" que muestra un campo de texto para escribir cualquier valor atípico. Puedes ver un ejemplo simple de esta idea en acción en [common-job-types.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/common-job-types.html) (ver el [common jobs ejemplo en vivo](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

También vale la pena considerar el uso de los tipos de entrada de formulario HTML5, así como la fecha en las plataformas móviles, ya que ambos los manejan bien: tanto Android como iOS, por ejemplo, muestran widgets utilizables que se adaptan bien a la experiencia del dispositivo. Ver [html5-form-examples.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/html5-form-examples.html) para algunos ejemplos (ver el [ejemplo de formulario en vivo en HTML5](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — intenta cargarlos y manipularlos en dispositivos móviles. Por ejemplo:

- Los tipos de `number`, `tel`, `y email` muestran teclados virtuales adecuados para ingresar números / números de teléfono.
- Los tipos de `time` and `date` muestran selectores adecuados para seleccionar horas y fechas.

If you want to provide a different solution for desktops, you could always serve different markup to your mobile devices using feature detection. See [input types](https://diveinto.html5doctor.com/detect.html#input-types) for raw information on detecting different input types, and also check out our [feature detection article](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) for much more information.

## Resumen

En este artículo, le proporcionamos algunos detalles sobre problemas comunes comunes relacionados con la accesibilidad móvil y cómo superarlos. También lo llevamos a través del uso de los lectores de pantalla más comunes para ayudarlo en las pruebas de accesibilidad.

## Ver también

- [Directrices para desarrollo web en móviles](https://www.smashingmagazine.com/guidelines-for-mobile-web-development/) — Una lista de artículos en Smashing Magazine que cubren diferentes técnicas para el diseño web móvil.
- [Haz funcionar tu web en dispositivos táctiles](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Artículo útil sobre el uso de eventos táctiles para que las interacciones funcionen en dispositivos móviles.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
