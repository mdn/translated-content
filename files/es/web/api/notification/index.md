---
title: Notification
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}

La interfaz `Notification` de la [Notifications API](/es/docs/Web/API/Notifications_API) se usa para configurar y mostrar notificaciones de escritorio al usuario. La apariencia y las funcionalidad especificas de esta notificacion varia a traves de las distintas plataformas, pero generalmente esta plataformas proveen un camino para proveer informacion al usuario de manera asincronica.

{{AvailableInWorkers}}

## Constructor

- {{domxref("Notification.Notification", "Notification()")}}
  - : Crea una nueva instancia del objecto `Notification`.

## Propiedades

### Propiedades Estáticas

Estas propiedades solo estan disponibles en el objecto `Notification` en sí mismo.

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : Una cadena que representa el permiso actual para mostrar notificaciones. Los valores posibles son:

<!---->

- `denied` (El usuario rechaza que las notificaciones sean mostradas).
- `granted` (El usuario acepta que las notificaciones sean mostradas).
- `default` (La elección del usuario es desconocida por lo tanto el navegador actuará como si el valor fuese denied).

<!---->

### Propiedades de Instancia

Estas propiedades solo están disponibles en instancias del objecto `Notification`.

- {{domxref("Notification.actions")}} {{readonlyinline}}
  - : Arreglo de acciones de la notificación, como se especifica en el parámetro de opciones del constructor.
- {{domxref("Notification.badge")}} {{readonlyinline}}
  - : URL de la imagen usada para representar la notificación cuando no hay espacio suficiente para mostrarla.

<!---->

- {{domxref("Notification.title")}} {{readonlyinline}}
  - : El título de la notificación como está especificado en el parámetro options del constructor.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : La dirección del texto de la notificación como está especificado en el parámetro options del constructor.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : El código del lenguaje de la notificación como está especificado en el parámetro options del constructor.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : The body string de la notificación como está especificado en el parámetro options del constructor.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : El ID de la notificación (si hay) como está especificado en el parámetro options del constructor.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : La URL de la imagen usada como ícono de la notificación como está especificado en el parámetro options del constructor.
- {{domxref("Notification.image")}} {{readonlyinline}}
  - : URL de una imagen para mostrar como parte de la notificación, al igual que se especifica en el parámetro de opciones del constructor.
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : Retorna un clon estructurado de los datos de la notificación.
- {{domxref("Notification.requireInteraction")}} {{readonlyinline}}
  - : Un {{jsxref("Boolean")}} indicando en dispositivos pantallas lo suficientemente grandes, una notificación debería permanecer activa hasta que el usuario haga click o la descarte.
- {{domxref("Notification.silent")}} {{readonlyinline}}
  - : Especifica si la notificación debería ser silenciada, por ejemplo sin generar sonidos o vibraciones, independientemente de la configuración del dispositivo.
- {{domxref("Notification.timestamp")}} {{readonlyinline}}
  - : Especifica el tiempo en la cual una notificación fué creada o aplicable (pasado, presente o futuro).
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : Especifica un patrón de vibración para dispositivos que disponen de hardware para emitirlo.

#### Propiedades no soportadas

Las siguientes propiedades están listadas en las especificaciones más actualizadas, pero aún no están soportadas por los navegadores. Es aconsejable verificarlas regularmente para ver si el estado de ellas ha sido actualizado, y háganos saber si encuentra información desactualizada.

- {{domxref("Notification.noscreen")}} {{readonlyinline}}
  - : Specifies whether the notification firing should enable the device's screen or not.
- {{domxref("Notification.renotify")}} {{readonlyinline}}
  - : Especifica si se debe notificar al usuario después de que una notificación nueva reemplace a una anterior.
- {{domxref("Notification.sound")}} {{readonlyinline}}
  - : Especifica un recurso de sonido para reproducir cuando se activa la notificación, en lugar del sonido de notificación del sistema predeterminado.
- {{domxref("Notification.sticky")}} {{readonlyinline}}
  - : Especifica si la notificación debe ser 'fija', es decir, no fácilmente eliminable por el usuario.
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : Especifica un patrón de vibración para los dispositivos con hardware de vibraciones para emitir.

#### Manejador de Eventos(Event Handler)

- {{domxref("Notification.onclick")}}
  - : Un manejador para el [`click`](/es/docs/Web/Reference/Events/click) event. Sera inicializado cada vez que el usuario de click en la notificacion.
- {{domxref("Notification.onerror")}}
  - : A handler for the [`error`](/es/docs/Web/Reference/Events/error) event. It is triggered each time the notification encounters an error.

#### Obsolete handlers

The following event handlers are still supported as listed in the [browser compatibility](#browser_compatibility) section below, but are no longer listed in the current spec. It is safe therefore to assume they are obsolete, and may stop working in future browser versions.

- {{domxref("Notification.onclose")}}
  - : A handler for the [`close`](/es/docs/Web/Reference/Events/close) event. It is triggered when the user closes the notification.
- {{domxref("Notification.onshow")}}
  - : A handler for the [`show`](/es/docs/Web/Reference/Events/show) event. It is triggered when the notification is displayed.

## Methods

### Static methods

Estos métodos están disponibles solo en el objeto de `Notificación` en sí.

- {{domxref("Notification.requestPermission()")}}
  - : Solicita permiso del usuario para mostrar notificaciones.

### Instance methods

These properties are available only on an instance of the `Notification` object or through its [`prototype`](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain). The `Notification` object also inherits from the {{domxref("EventTarget")}} interface.

- {{domxref("Notification.close()")}}
  - : Programmatically closes a notification.

## Example

Assume this basic HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

It's possible to send a notification as follows — here we present a fairly verbose and complete set of code you could use if you wanted to first check whether notifications are supported, then check if permission has been granted for the current origin to send notifications, then request permission if required, before then sending a notification.

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

{{EmbedLiveSample('Example', '100%', 30)}}

In many cases, you don't need to be this verbose. For example, in our [Emogotchi demo](http://mdn.github.io/emogotchi/) ([see source code](https://github.com/mdn/emogotchi)), we simply run {{domxref("Notification.requestPermission")}} regardless to make sure we can get permission to send notifications (this uses the newer promise-based method syntax):

```js
Notification.requestPermission().then(function (result) {
  console.log(result);
});
```

Then we run a simple `spawnNotification()` function when we want to fire a notification — this is passed arguments to specify the body, icon and title we want, then it creates the necessary `options` object and fires the notification using the {{domxref("Notification.Notification","Notification()")}} constructor.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon,
  };
  var n = new Notification(theTitle, options);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

[Using the Notifications API](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API)
