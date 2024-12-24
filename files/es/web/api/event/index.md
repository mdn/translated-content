---
title: evento
slug: Web/API/Event
---

{{APIRef("DOM")}}

« [Referencia DOM de Gecko](/es/Referencia_DOM_de_Gecko)

### Introducción

Éste capítulo describe el Modelo De Evento DOM de nivel 2 como es implementado por [Gecko](/es/Gecko). La propia interfaz de [Evento](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event) es descrita, así como las interfaces para el registro de evento sobre los nodos en el DOM, manipuladores y "oyentes" (`listeners`) de eventos, y varios ejemplos mas extensos que muestran como las varias interfaces de evento se relacionan unas con las otras.

Hay un diagrama excelente que explica claramente las tres fases del flujo de eventos a través del DOM en el [DOM Level 3 Events draft](https://www.w3.org/TR/DOM-Level-3-Events/events.html#Events-flow).

#### La interfaz evento (`Event`) de DOM

Los gestores de eventos pueden estar atados a varios elementos en el DOM. Cuando un evento ocurre, un objeto de evento es dinámicamente creado y pasado secuencialmente a las "escuchas" (listeners) autorizadas para la gestión del evento. La interfaz `Event` del DOM es entonces accesible por la función de manejo, vía el objeto de evento puesto como el primer (y único) argumento.

Given that we don't list the three ways right here, the sentence is unclear, and is not perfectly right either IMO. -Nickolay There are three ways to attach an event listener to an element. With 2 of those techniques, the event object is passed to the handler function implicitly. The remaining technique requires you to specify the \<code>event\</code> object as a parameter, which is passed explicitly to the event handler function. El ejemplo siguiente muestra como un objeto de evento es pasado a una función de gestión de evento, y puede llamarse desde otra parecida.

El parámetro "evt" no es pasado en el código de abajo, el objeto de evento es cambiado automáticamente a _foo_. Todo lo necesario es definir un parámetro en el gestor de evento para recibir el objeto de evento.

```
function foo(evt) {
  // Las funciones de gestión como esta
  // dan una referencia implícita del
  // evento que toca manejar
  // (en este caso se llama "evt").
  alert(evt);
}
table_el.onclick = foo;
```

Este ejemplo es muy simple pero muestra una característica importante de los eventos en el DOM de Gecko, la cual es que en el DOM se accede a los objetos de eventos a través de las funciones de manejo. Entonces al tener una referencia al objeto de evento, se puede llegar a todas las propiedades y métodos descritos en este capítulo.

Para más detalles de como los eventos se mueven dentro del DOM, ver: [Ejemplo 5: Propagación de evento](/es/Referencia_DOM_de_Gecko/Ejemplos#Ejemplo_5:_Propagaci.C3.B3n_de_evento)

#### Lista de los gestores de evento del DOM

Además del objeto `event` descrito aquí, el Gecko DOM también proporciona métodos para registrar oyentes de eventos en nodos en el DOM, quitando aquellos oyentes de eventos, y enviando eventos desde el DOM.

Estos y los varios [manejos de eventos](/es/docs/Web/API/Element#manejo_de_los_eventos) de elementos HTML o XML son los puntos de entrada principales para los eventos en el DOM. Estos tres métodos se describen en la lista de [referencia al elemento](/es/docs/Web/API/Element).

Puede también pasar la referencia del objeto del evento como un parámetro predefinido, llamado `event`, a la función que maneja el evento. Esto es muy parecido a la forma en que trabaja `this`, pero para objetos de eventos, más bien que las referencias del objeto del elemento.

```html
<html>
  <head>
    <title>Ejemplo de parámetro de objeto de evento</title>

    <script type="text/javascript">
      function showCoords(event) {
        alert(
          "clientX value: " +
            event.clientX +
            "\n" +
            "clientY value: " +
            event.clientY +
            "\n",
        );
      }
    </script>
  </head>

  <body onmousedown="showCoords(event)">
    <p>
      Para ver las coordinadas del ratón haga clic en cualquier lugar de esta
      página.
    </p>
  </body>
</html>
```

El parámetro predefinido del objeto `event` permite pasar tantos parámetros de gestión de evento como sea necesario:

```html
<html>
  <head>
    <title>Ejemplo de objeto con varios parámetros</title>

    <script type="text/javascript">
      var par2 = "hello";
      var par3 = "world!";

      function muestraCoords(evt, p2, p3) {
        alert(
          "clienteX value: " +
            evt.clientX +
            "\n" +
            "clientY value: " +
            evt.clientY +
            "\n" +
            "p2: " +
            p2 +
            "\n" +
            "p3: " +
            p3 +
            "\n",
        );
      }
    </script>
  </head>

  <body onmousedown="muestraCoords(event, par2, par3)">
    <p>
      Para ver las coordinadas del ratón haga clic en cualquier lugar de esta
      página.
    </p>
  </body>
</html>
```

### Propiedades

- [event.altKey](/es/docs/Web/API/MouseEvent/altKey)
  - : Devuelve un valor indicando si la tecla `<alt>` fue pulsada durante el evento.
- [event.bubbles](/es/docs/Web/API/Event/bubbles)
  - : Devuelve un valor que indica si el evento se propaga hacia arriba a través del DOM o no.
- [event.button](/es/docs/Web/API/MouseEvent/button)
  - : Devuelve el botón del ratón.
- [event.cancelBubble](/es/docs/DOM/event.cancelBubble) {{deprecated_inline}}
  - : Devuelve un valor que indica si la propagación hacia arriba fue cancelada o no.
- [event.cancelable](/es/docs/Web/API/Event/cancelable)
  - : Devuelve un valor que indica si el evento se puede cancelar.
- [event.charCode](/es/docs/Web/API/KeyboardEvent/charCode)
  - : Devuelve el valor Unicode de una tecla de carácter que fue apretada como parte de un evento [keypress](/es/docs/DOM/event/keypress).
- [event.clientX](/es/docs/Web/API/MouseEvent/clientX)
  - : Devuelve la posición horizontal del evento.
- [event.clientY](/es/docs/Web/API/MouseEvent/clientY)
  - : Devuelve la posición vertical del evento.
- [event.ctrlKey](/es/docs/Web/API/MouseEvent/ctrlKey)
  - : Devuelve un valor que indica si la tecla `<Ctrl>` fue apretada durante el evento.
- [event.currentTarget](/es/docs/Web/API/Event/currentTarget)
  - : Devuelve una referencia al objetivo actual registrado para el evento.
- [event.detail](/es/docs/Web/API/UIEvent/detail)
  - : Devuelve detalles sobre el evento, dependiendo del tipo de evento.
- [event.eventPhase](/es/docs/Web/API/Event/eventPhase)
  - : Utilizado para indicar qué fase del flujo del evento es actualmente en proceso de evaluación.
- [event.explicitOriginalTarget](/es/docs/Web/API/Event/explicitOriginalTarget)
  - : El objetivo del evento (específico a Mozilla).
- [event.isChar](/es/docs/DOM/event.isChar)
  - : Devuelve un valor que indica si el evento produce o no una tecla de carácter.
- [event.keyCode](/es/docs/Web/API/KeyboardEvent/keyCode)
  - : Devuelve el valor Unicode de una tecla que no es caracter en un evento [keypress](/es/docs/DOM/event/keypress) o cualquier tecla en cualquier otro tipo de evento de teclado.
- [event.layerX](/es/docs/Web/API/MouseEvent/layerX)
  - : Devuelve la coordenada horizontal del evento relativo a la capa actual.
- [event.layerY](/es/docs/Web/API/MouseEvent/layerY)
  - : Devuelve la coordenada vertical del evento relativo a la capa actual.
- [event.metaKey](/es/docs/Web/API/MouseEvent/metaKey)
  - : Devuelve un valor booleano indicando si la `meta` tecla fue presionada durante un evento.
- [event.originalTarget](/es/docs/Web/API/Event/originalTarget)
  - : El objetivo principal de un evento, antes de cualquier reapunte (Especifiación Mozilla).
- [event.pageX](/es/docs/Web/API/MouseEvent/pageX)
  - : Devuelve la coordenada horizontal del evento, relativo al documento completo.
- [event.pageY](/es/docs/Web/API/MouseEvent/pageY)
  - : Devuelve la coordenada vertical del evento, relativo al documento completo.
- [event.relatedTarget](/es/docs/Web/API/MouseEvent/relatedTarget)
  - : Identifica un objetivo secundario para el evento.
- [event.screenX](/es/docs/Web/API/MouseEvent/screenX)
  - : Devuelve la coordenada horizontal del evento en la pantalla.
- [event.screenY](/es/docs/Web/API/MouseEvent/screenY)
  - : Devuelve la coordenada vertical del evento en la pantalla.
- [event.shiftKey](/es/docs/Web/API/MouseEvent/shiftKey)
  - : Devuelve un valor booleano indicando si la tecla `<shift>` fue presionada cuando el evento fue disparado.
- [event.target](/es/docs/Web/API/Event/target)
  - : Devuelve una referencia al objetivo en la cual el evento fue originalmente enviado.
- [event.timeStamp](/es/docs/Web/API/Event/timeStamp)
  - : Devuelve el momento de creación del evento.
- [event.type](/es/docs/Web/API/Event/type)
  - : Devuelve el nombre del evento (distingue mayúsculas y minúsculas).
- [event.view](/es/docs/Web/API/UIEvent/view)
  - : El atributo vista identifica la `AbstractView` del cual el evento fue generado.
- [event.which](/es/docs/Web/API/UIEvent/which)
  - : Devuelve el valor Unicode de la tecla en un evento del teclado, sin importar el tipo de tecla que se presionó.

### Métodos

- [event.initEvent](/es/docs/Web/API/Event/initEvent)
  - : Inicia el valor de un evento que se ha creado vía la interfaz `DocumentEvent`.
- [event.initKeyEvent](/es/docs/DOM/event.initKeyEvent)
  - : Inicia un evento del teclado. (Específico de Gecko).
- [event.initMouseEvent](/es/docs/Web/API/MouseEvent/initMouseEvent)
  - : Inicia un evento del ratón una vez que se ha creado.
- [event.initUIEvent](/es/docs/Web/API/UIEvent/initUIEvent)
  - : Inicia un evento de la interfaz de usuario (_UI_) una vez que se ha creado.
- [event.preventBubble](/es/docs/DOM/event.preventBubble) {{deprecated_inline}}
  - : Previene la expansión del evento. Este método es desaconsejado en favor del estándar [stopPropagation](/es/docs/Web/API/Event/stopPropagation) y ha sido [retirado en Gecko 1.9](/es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web).
- [event.preventCapture](/es/docs/DOM/event.preventCapture) {{deprecated_inline}}
  - : Este método es desaconsejado en favor del estándar [stopPropagation](/es/docs/Web/API/Event/stopPropagation) y ha sido [retirado en Gecko 1.9](/es/Los_cambios_en_Gecko_1.9_afectando_a_los_sitios_web).
- [event.preventDefault](/es/docs/Web/API/Event/preventDefault)
  - : Cancela el evento (si éste es anulable).
- [event.stopPropagation](/es/docs/Web/API/Event/stopPropagation)
  - : Para la propagación de los eventos más allá en el DOM.
