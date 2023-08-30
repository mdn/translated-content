---
title: ¿Cómo desactivar el autocompletado del formulario?
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
---

Este artículo explica como un sitio web puede inhabilitar el autocompletado para los campos del formulario.

Por defecto, los navegadores recuerdan información que el usuario envía a través de los campos [`input`](/es/docs/Web/HTML/Elemento/input) en los sitios web. Esto habilita al navegador para ofrecer el autocompletado (P. Ej. Sugiere posibles completaciones para los campos que el usuario ha iniciado escribiendo) o el llenado automático (P. Ej. rellenar previamente ciertos campos al cargar).

Estas caracteristicas pueden ser un problema de privacidad para los usuarios, ya que mientras los navegadores pueden permitir a los usuarios a inhabilitarlas, estos están usualmente habilitados por defecto. Como sea, alguna información enviada en los formularios no es tampoco útil en el futuro (P. Ej. a one-time pin) o contiene cierta información susceptible (P. Ej. un identificador único del gobierno o un código de seguridad de la tarjeta de crédito). Un sitio web podría preferir que el navegador no recuerde los valores de tales campos, incluso si la caracteristica del autocompletado del navegador este habilitada.

## Desactivar autocompletado

Para desactivar el autocompletado en los formularios, un sitio web puede establecer el atributo [`autocomplete`](/es/docs/Web/HTML/Element/input#autocomplete) a "off":

```html
autocomplete="off"
```

Puede hacer esto para un formulario entero o para elementos específicos de tipo "input" dentro del formulario:

```html
<form method="post" action="/form" autocomplete="off">[…]</form>
```

```html
<form method="post" action="/form">
  […]
  <div>
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Estableciendo `autocomplete="off"` en los campos tiene dos efectos:

- Impide que el navegador guarde los datos de los campos para un posterior autocompletado en formularios similares mediante heurísticas que varían según el navegador.
- Evita que el navegador almacene en caché los datos del formulario en el historial de la sesión. Cuando los datos del formulario están almacenados en la caché del historial de la sesión, la información completada por el usuario será visible en caso de que el usuario haya enviado el formulario y haya hecho clic en el botón Atrás para volver a la página original del formulario.

En algunos casos, el navegador continuará sugiriendo valores de autocompletado incluso si el atributo autocompletar está desactivado. Este comportamiento inesperado puede resultar bastante confuso para los desarrolladores. El truco para realmente no aplicar el autocompletado es asignar un valor no válido al atributo, por ejemplo:

```html
autocomplete="nope"
```

Dado que este valor no es válido para el atributo autocompletar, el navegador no tiene forma de reconocerlo y deja de intentar autocompletarlo.

## El atributo autocompletar y los campos de inicio de sesión

Los navegadores modernos implementan un gestor de contraseñas integrado: cuando el usuario ingresa un nombre de usuario y contraseña para un sitio, el navegador le ofrece recordarlos. Cuando el usuario visita el sitio nuevamente, el navegador completa automáticamente los campos de inicio de sesión con los valores almacenados.

Adicionalmente, el navegador permite al usuario elegir una contraseña maestra que utilizará para cifrar los datos de inicio de sesión almacenados.

Incluso sin una contraseña maestra, el gestor de contraseñas integrado en el navegador generalmente se considera una ganancia para la seguridad. Como los usuarios no tienen que recordar las contraseñas que el navegador almacena para ellos, son capaces de escoger contraseñas más seguras de lo que lo harían.

Por esta razón, muchos navegadores modernos no admiten autocompletar = "off" para los campos de inicio de sesión:

- Si un sitio establece autocomplete="off" para un formulario, y este incluye campos de nombre de usuario o contraseña, entonces el navegador seguirá ofreciendo guardar los valores de estos, y si el usuario está de acuerdo, el navegador autocompletará automáticamente estos campos la próxima vez que el usuario visite la página.
- Si un sitio configura autocomplete="off" para los campos de nombre de usuario y contraseña, entonces el navegador seguirá ofreciendo recordar este inicio de sesión, y si el usuario está de acuerdo, el navegador autocompletará automáticamente esos campos la próxima vez que el usuario visite la página.

Este es el comportamiento en Firefox (desde la versión 38), Google Chrome (desde la 34) e Internet Explorer (desde la versión 11).

Si un autor desea evitar el autocompletado de los campos de contraseña en las páginas de administración de usuarios donde un usuario puede especificar una nueva contraseña para alguien más que para si mismo, se debe especificar autocomplete="new-password", aunque el soporte para esto no se ha implementado todavía en todos los navegadores.

## Uso del Plugin de jQuery disableAutoFill

Este complemento aleatorizará por defecto el nombre del atributo. Se restaurará al nombre del campo original al enviar el formulario. Esto es para evitar el autocompletado automático en todos los navegadores (incluye extensiones de auto-completado de terceros),no solo para Google Chrome.

URL: [https://terrylinooo.github.io/jquery.disableAutoFill/](https://github.com/terrylinooo/jquery.disableAutoFill)

{{QuickLinksWithSubpages("/es/docs/Web/Security")}}
