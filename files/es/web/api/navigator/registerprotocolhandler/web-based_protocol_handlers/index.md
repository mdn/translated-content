---
title: Controladores de protocolos basados en web
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
---

## Antecedentes

Es bastante común encontrar enlaces de páginas web a recursos que no usan protocolos `http`. Un ejemplo es el protocolo `mailto:`

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Los autores de la Web pueden usar un enlace `mailto:` cuando quieren proporcionar una forma conveniente para que los usuarios envién un correo electrónico, directamente desde la página web. Cuando el enlace está activo, el navegador debería lanzar la aplicación de escritorio predeterminada para gestionar correos electrónicos. Se puede pensar en esto como un controlador de protocolos _basados en escritorio_.

Los controladores de protocolos basados en web permiten a las aplicaciones basadas en web participar en el proceso también. Esto es cada vez más importante a medida que más tipos de aplicaciones migren a la web. De hecho, hay muchas aplicaciones basadas en web que gestionan correo electrónicos podrían procesar un enlace `mailto`.

## Registro

Configurar una aplicación web como un controlador de protocolo no es un proceso difícil. Básicamente la aplicación web usa [registerProtocolHandler()](/es/docs/Web/API/navigator.registerProtocolHandler) para registrarse a sí mismo con el navegador como un controlador potencial para un protocolo dado. Por ejemplo:

```js
navigator.registerProtocolHandler(
  "burger",
  "http://www.google.co.uk/?uri=%s",
  "Burger handler",
);
```

En donde los parámetros son:

- El protocolo.
- La plantilla de la URL, usada como el controlador. El "%s" es reemplazado con el `href` del enlace y una petición GET es ejecutada en la URL resultante.
- El nombre fácil de usar para el controlador del protocolo.

Cuando un navegador ejecuta este código, se le mostrará un mensaje al usuario, pidiendo permiso para permitir a la aplicación web registrase como controlador para el protocolo. Firefox muestra un mensaje en el área de la barra de notificaciones:

![](protocolregister.png)

> **Nota:** La plantila de la URL proporcionada al registrar **debe** ser del mismo dominio que el de la página que intenta realizar el registro o el registro fallará. Por ejemplo, `http://example.com/homepage.html` puede registrar un controlador de protocolo para `http://example.com/handle_mailto/%s`, pero no para `http://example.org/handle_mailto/%s`.

Al registrar el mismo controlador de protocolo más de una vez aparecerá una notifiación diferente, indicando que el controlador del protocolo ya ha está registrado. Por lo tanto, es una buena idea cuidar el registro del controlador de protocolo con una verificación para saber si ya está registrado, como con el siguiente ejemplo.

### Ejemplo

```js
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>Ejemplo de Controlador de Protocolo Web - Registro</title>
  <script type="text/javascript">
    navigator.registerProtocolHandler("burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
  </script>
</head>
<body>
  <h1>Ejemplo de Controlador de Protocolo Web</h1>
  <p>Esta página web instalará un controlador de protocolo web para el protocolo burger:;.</p>
</body>
</html>
```

## Activando

Ahora, cada vez que el usuario active un enlace que usa el protocolo registrado, el navegador enrutará la acción a la URL suministrada cuando la aplicación web se haya registrado. Firefox, de manera predeterminada, alertará al usaurio antes de controlar la acción.

### Ejemplo

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
  <head>
    <title>Ejemplo de Controlador de Protocolo Web - Prueba</title>
  </head>
  <body>
    <p>Oye ¿Has visto <a href="burger:cheeseburger">esto</a> antes?</p>
  </body>
</html>
```

## Controlando

La siguiente fase es controlar la acción. El navgador extrae el `href` desde el enlace activado, lo combina con la plantilla de la URL suministrada durante el registro del controlador y realzia una petición HTTP GET sobre la URL. Luego, usando los ejemplos anteriores, el navegador realizará una petición GET sobre esta URL:

```
http://www.google.co.uk/?uri=burger:cheeseburger
```

El código del lado del servidor puede extraer los parámetros de la cadena de petición y realizar la acción deseada.

> **Nota:** Al código del lado del servidor se le pasa todo el contenido del `href`. Esto significa que el código del lado del servidor tendrá que analizar el protocolo desde los datos.

### Example

```php
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo de Controlador de Protocolo Web</title>
</head>
<body>
  <h1>Ejemplo de Controlador de Protocolo Web - Controlador</h1>
  <p>Esta página es llamada al controlar una acción del protocolo <burger;. Datos enviados:</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
```

## Referencias

- [http://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers)

## Véase también

- `nsIProtocolHandler` (solo XUL)
- [RegisterProtocolHandler Mejora de la web federada](https://blog.mozilla.org/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) en Mozilla Webdev.
- [Registrar un controlador de protocolo personalizado](https://web.dev/registering-a-custom-protocol-handler/) en Google Developers.
