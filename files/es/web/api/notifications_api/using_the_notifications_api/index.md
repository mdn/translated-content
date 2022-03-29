---
title: Usando la API de Notificaciones
slug: Web/API/Notifications_API/Using_the_Notifications_API
translation_of: Web/API/Notifications_API/Using_the_Notifications_API
original_slug: Web/API/Notifications_API/Usando_la_API_de_Notificaciones
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La [API de notificaciones](/es/docs/Web/API/Notifications_API) permite que una página web o aplicación envíe notificaciones que se muestran fuera de la página a nivel del sistema; esto permite que las aplicaciones web envíen información a un usuario incluso si la aplicación está inactiva o en segundo plano. Este artículo analiza los aspectos básicos del uso de esta API en tus propias aplicaciones.

Por lo general, las notificaciones del sistema se refieren al mecanismo de notificación estándar del sistema operativo: piense, por ejemplo, en cómo un sistema de escritorio típico o dispositivo móvil transmite notificaciones.

![](android-notification.png)

El sistema de notificación del sistema operativo variará, por supuesto, según la plataforma y el navegador, pero está bien, y la API de notificaciones está escrita para ser lo suficientemente general para la compatibilidad con la mayoría de los sistemas de notificación.

## Ejemplos

Uno de los casos de uso más obvios para las notificaciones web es una aplicación de correo o [IRC (Internet Relay Chat)](/es/docs/Glossary/IRC) basada en la web que necesita notificar al usuario cuando se recibe un mensaje nuevo, incluso si el usuario está haciendo otra cosa con otra aplicación. Ahora existen muchos ejemplos de esto, como [Slack](https://slack.com/).

Hemos escrito un ejemplo del mundo real, una aplicación de lista de tareas, para dar una idea más clara de cómo se pueden usar las notificaciones web. Almacena datos localmente usando la [API IndexedDB](/es/docs/Web/API/IndexedDB_API) y notifica a los usuarios cuando vencen las tareas usando notificaciones del sistema. [Descargue el código de la lista de tareas](https://github.com/mdn/to-do-notifications/tree/gh-pages) o [vea la aplicación ejecutándose en vivo](https://mdn.github.io/to-do-notifications/).

## Solicitando permisos

Antes de que una aplicación pueda enviar una notificación, el usuario debe conceder a la aplicación el permiso de hacerlo. Este es un requisito común cuando una API intenta interactuar con algo fuera de una página web; al menos una vez, el usuario debe otorgar específicamente permiso a esa aplicación para presentar notificaciones, lo que le permite controlar qué aplicaciones/sitios pueden mostrar notificaciones.

Debido a los abusos de las notificaciones automáticas en el pasado, los navegadores web y los desarrolladores han comenzado a implementar estrategias para ayudar a mitigar este problema. Solo debe solicitar el consentimiento para mostrar notificaciones en respuesta a un gesto del usuario (por ejemplo, hacer clic en un botón). Esta no es solo la mejor práctica: no debe molestar a los usuarios con notificaciones que no aceptaron, sino que, en el futuro, los navegadores rechazarán explícitamente las solicitudes de permiso de notificación que no se activen en respuesta a un gesto del usuario. Firefox ya lo está haciendo desde la versión 72, por ejemplo, y Safari lo ha hecho durante algún tiempo.

Además, en Chrome y Firefox no puede solicitar notificaciones a menos que el sitio sea un contexto seguro (es decir, HTTPS), y ya no puede permitir que se soliciten permisos de notificación desde un {{htmlelement("iframe")}} de origen cruzado.

### Comprobación del estado actual de los permisos

Puede verificar si ya tiene permiso comprobando el valor de la propiedad de solo lectura {{domxref("Notification.permission")}}. Puede tener uno de tres valores posibles:

- `default`
  - : Todavía no se le ha pedido permiso al usuario, por lo que no se mostrarán las notificaciones.
- `granted`
  - : El usuario ha dado permiso para mostrar notificaciones, después de habérlo pedido previamente.
- `denied`
  - : El usuario ha rechazado explícitamente el permiso para mostrar notificaciones.

### Obtener permisos

Si aún no se ha otorgado el permiso para mostrar notificaciones, la aplicación debe usar el método {{domxref("Notification.requestPermission()")}} para solicitarlo al usuario. En su forma más simple, solo incluimos lo siguiente:

```js
Notification.requestPermission().then(function(result) {
  console.log(result);
});
```

Esto utiliza la versión basada en promesas del método. Si desea admitir versiones anteriores, es posible que deba usar la versión [_callback_](/es/docs/Glossary/Callback_function) anterior, que se ve así:

```js
Notification.requestPermission();
```

La versión _callback_ acepta opcionalmente una función _callback_ que se llama una vez que el usuario ha respondido a la solicitud de permisos de visualización.

### Ejemplo

En nuestro ejemplo de lista de tareas, incluimos un botón "Habilitar notificaciones" que, cuando se presiona, solicita permisos de notificación para la aplicación.

```html
<button id="enable">Habilitar notificaciones</button>
```

Al hacer clic, se llama a la función `askNotificationPermission()`:

```js
function askNotificationPermission() {
  // función para pedir los permisos
  function handlePermission(permission) {
    // configura el botón para que se muestre u oculte, dependiendo de lo que
    // responda el usuario
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
    }
  }

  // Comprobemos si el navegador admite notificaciones.
  if (!('Notification' in window)) {
    console.log("Este navegador no admite notificaciones.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}
```

Mirando primero el segundo bloque principal, verá que primero verificamos si las notificaciones son compatibles. Si es así, realizamos una comprobación para ver si se admite la versión basada en promesas de `Notification.requestPermission()`. Si es así, ejecutamos la versión basada en promesas (compatible en todas partes excepto Safari), y si no, ejecutamos la versión anterior basada en _callback_ (que es compatible con Safari).

Para evitar la duplicación de código, hemos almacenado algunos bits de código de mantenimiento dentro de la función `handlePermission()`, que es el primer bloque principal dentro de este fragmento. Aquí dentro, establecemos explícitamente el valor `Notification.permission` (algunas versiones antiguas de Chrome fallaron al hacer esto automáticamente), y mostramos u ocultamos el botón dependiendo de lo que el usuario eligió en el cuadro de diálogo de permiso. No queremos mostrarlo si ya se ha otorgado el permiso, pero si el usuario elige negar el permiso, queremos darle la oportunidad de cambiar de opinión más adelante.

> **Nota:** Antes de la versión 37, Chrome no te permite llamar a {{domxref("Notification.requestPermission()")}} en el manejador de eventos de carga (consulta el [error 274284](https://code.google.com/p/chromium/issues/detail?id=274284)).

### Función de detección de la promesa requestPermission()

Arriba mencionamos que teníamos que verificar si el navegador es compatible con la versión basada en promesas de `Notification.requestPermission()`. Hicimos esto usando lo siguiente:

```js
function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch(e) {
    return false;
  }

  return true;
}
```
    
Básicamente tratamos de ver si el método `.then()` está disponible en `requestPermission()`. Si es así, continuamos y devolvemos `true`. Si falla, devolvemos `false` en el bloque `catch() {}`.

## Crear una notificación

Crear una notificación es fácil; solo usa el constructor {{domxref("Notification")}}. Este constructor espera un título para mostrar con la notificación y algunas opciones para mejorar la notificación, como {{domxref("Notification.icon","icon")}} o un texto {{domxref("Notification.body"," body")}}.

Por ejemplo, en el ejemplo de la lista de tareas, usamos el siguiente fragmento para crear una notificación cuando sea necesario (que se encuentra dentro de la función `createNotification()`):

```js
var img = '/to-do-notifications/img/icon-128.png';
var text = '¡OYE! Tu tarea "' + title + '" ahora está vencida.';
var notification = new Notification('Lista de tareas', { body: text, icon: img });
```

## Cerrando notificaciones

{{domxref("Notification.close","close()")}} es utilizado para eliminar una notificación que ya no es relevante para el usuario (por ejemplo, el usuario ya leyó la notificación en la página web, en el caso de una aplicación de mensajería , o la siguiente canción ya se está reproduciendo en una aplicación de música para notificar los cambios de canción). La mayoría de los navegadores modernos descartan las notificaciones automáticamente después de unos momentos (alrededor de cuatro segundos), pero esto no es algo que generalmente deba preocuparte, ya que depende del usuario y del [agente de usuario](/es/docs/Web/HTTP/Headers/User-Agent). El cierre también puede ocurrir a nivel del sistema operativo y los usuarios deben mantener el control de esto. Las versiones anteriores de Chrome no eliminaban las notificaciones automáticamente, por lo que puedes hacerlo después de un {{domxref("setTimeout()")}} solo para esas versiones antiguas para no eliminar las notificaciones de las bandejas de notificaciones en otros navegadores.

```js
var n = new Notification('Mi gran canción');
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // La pestaña se ha vuelto visible, así que borre la Notificación ahora
    // obsoleta.
    n.close();
  }
});
```

> **Nota:** Esta API no debe usarse solo para eliminar la notificación de la pantalla después de un tiempo fijo (en los navegadores modernos), ya que este método también eliminará la notificación de cualquier bandeja de notificaciones, evitando que los usuarios interactúen con ella después de que se mostró inicialmente.

> **Nota:** Cuando recibe un evento de cierre, no hay garantía de que sea el usuario quien cerró la notificación. Esto está en línea con la especificación, que establece: "Cuando se cierra una notificación, ya sea por la plataforma de notificaciones o por el usuario, se deben ejecutar los pasos de cierre".

## Eventos de notificación

Hay cuatro eventos que se activan en la instancia {{domxref("Notification")}}:

- `click`
  - : Se activa cuando el usuario hace clic en la notificación.
- `close`
  - : Se activa una vez que se cierra la notificación.
- `error`
  - : Se activa si algo sale mal con la notificación; esto generalmente se debe a que la notificación no se pudo mostrar por algún motivo.
- `show`
  - : Se activa cuando la notificación se muestra al usuario.

Estos eventos se pueden rastrear usando los manejadores {{domxref("Notification.onclick","onclick")}}, {{domxref("Notification.onclose","onclose")}}, {{domxref("Notification.onerror" ,"onerror")}} y {{domxref("Notification.onshow","onshow")}}. Como {{domxref("Notification")}} también hereda de {{domxref("EventTarget")}}, es posible usar el método {{domxref("EventTarget.addEventListener","addEventListener()")}} en ellos.

## Sustitución de notificaciones existentes

Por lo general, no es deseable que un usuario reciba muchas notificaciones en un corto espacio de tiempo; por ejemplo, ¿qué sucede si una aplicación de mensajería notifica a un usuario por cada mensaje entrante y se envían muchos? Para evitar molestar al usuario con demasiadas notificaciones, es posible modificar la cola de notificaciones pendientes, reemplazando una o varias notificaciones pendientes por una nueva.

Para hacer esto, es posible agregar una etiqueta a cualquier notificación nueva. Si una notificación ya tiene la misma etiqueta y aún no se ha mostrado, la nueva notificación reemplaza la notificación anterior. Si ya se ha mostrado la notificación con la misma etiqueta, se cierra la notificación anterior y se muestra la nueva.

### Ejemplo de etiqueta

Supongamos el siguiente código HTML básico:

```html
<button>¡Notifícame!</button>
```

Es posible manejar múltiples notificaciones de esta manera:

```js
window.addEventListener('load', function () {
  var button = document.getElementsByTagName('button')[0];

  if (window.self !== window.top) {
    // Asegúrese de que si su documento está en un marco, hagamos que el 
    // usuario lo abra primero en su propia pestaña o ventana. De lo contrario, 
    // no podrá solicitar permiso para enviar notificaciones.
    button.textContent = "Ver el resultado en vivo del código de ejemplo anterior";
    button.addEventListener('click', () => window.open(location.href));
    return;
  }

  button.addEventListener('click', function () {
    // Si el usuario acepta ser notificado.
    // Intentemos enviar diez notificaciones.
    if (window.Notification && Notification.permission === "granted") {
      var i = 0;
      // El uso de un intervalo hace que algunos navegadores (incluido Firefox)
      // bloqueen las notificaciones si hay demasiadas en un tiempo determinado.
      var interval = window.setInterval(function () {
        // Gracias a la etiqueta, solo deberíamos ver la notificación "¡Hola! 9"
        var n = new Notification("¡Hola! " + i, {tag: 'soManyNotification'});
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // Si el usuario no ha dicho si quiere ser notificado o no
    // Nota: debido a Chrome, no estamos seguros de que la propiedad de permiso
    // esté configurada, por lo tanto, no es seguro verificar el valor
    // "predeterminado" (default).
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // Si el usuario dijo que está bien
        if (status === "granted") {
          var i = 0;
          // El uso de un intervalo hace que algunos navegadores (incluido
          // Firefox) bloqueen las notificaciones si hay demasiadas en un tiempo
          // determinado.
          var interval = window.setInterval(function () {
            // Gracias a la etiqueta, solo deberíamos ver la notificación "¡Hola! 9"
            var n = new Notification("¡Hola! " + i, {tag: 'soManyNotification'});
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // De lo contrario, podemos recurrir a una alerta modal regular.
        else {
          alert("¡Hola!");
        }
      });
    }

    // Si el usuario rechaza a ser notificado.
    else {
      // Podemos recurrir a una alerta modal regular
      alert("¡Hola!");
    }
  });
});
```

### Resultado

{{ EmbedLiveSample('Tag_example', '100%', 30) }}

## Especificaciones

{{Specifications("api.Notification")}}

## Compatibilidad con navegadores

{{Compat("api.Notification")}}

## Véase también

- {{ domxref("Notification") }}

