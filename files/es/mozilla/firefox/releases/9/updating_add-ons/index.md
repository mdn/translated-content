---
title: Actualizar add-ons para Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
---

{{FirefoxSidebar}}

Firefox 9 no tiene grandes cambios que vayan a resultar en problemas de compatibilidad para los desarrolladores de complementos. Sin embargo, hay algunos elementos que pueden ser problematicos, así que vamos a echarles un vistazo.

## ¿Es necesario hacer algo?

Si tu complemento se distribuye en [addons.mozilla.org](https://addons.mozilla.org/es/firefox/) (AMO), este ya ha sido verificado por una herramienta automatizada de verificación de compatibilidad. Los complementos que no utilizan APIs que cambiaron en Firefox 8, y no tienen componentes binarios (que [deben volver a compilarse para cada versión mayor de Firefox](/es/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), automáticamente se han actualizado en AMO para indicar que funcionan en Firefox 9.

Así que puedes empezar visitando AMO para comprobar si tu complemento requiere trabajo.

> **Nota:** Todavía debes testear tu complemento en Firefox 9, incluso si ha sido actualizado automáticamente. Existen casos extremos que pueden no ser automáticamente detectados.

## Los componentes de inicio pueden remover scripts con carga retrasada

Si tu complemento utiliza `nsIChromeFrameMessageManager.loadFrameScript()` con la bandera de carga retrasada establecida, el script se carga en cada frame creado desde ese punto. Esto está bien, expecto que hasta Firefox 9, no hay forma de parar la carga del script, por lo que este seguiría sucediendo incluso después de que tu add-on sea apagado.

Empezando en Firefox 9, tu debes llamar al nuevo método `nsIChromeFrameMessageManager.removeDelayedFrameScript()` para parar la carga de tu script. Lo puedes hacer como en este ejemplo:

```js
browser.messageManager.removeDelayedFrameScript(
  "chrome://myextension/content/somescript.js",
);
```

## Cambios en la interfaz

- La interfaz `nsIURL` ha cambiado un poco. El atributo `nsIURL.param` se ha removido, y el método `nsIURLParser.parsePath()` tiene dos argumentos menos de los que tenía.
- Los métodos `registerOpenPage()` and `unregisterOpenPage()` han sido removidos de `nsIBrowserHistory`. Estos métodos han sido deprecados.
- El método `nsIEditorSpellCheck.saveDefaultDictionary()` ha sido removido como parte de los ajustes soportados en la revisión ortográfica. También `nsIEditorSpellCheck.updateCurrentDictionary()` no tomará parámetros.
- La interfaz `nsIGlobalHistory3` ha sido removida. Su funcionalidad (si había alguna) era muy limitada en el uso de complementos, por lo tanto no debería afectar a nadie.
- Muchos atributos especializados de propiedades en canales han sido incluidas en la base de la interfaz `nsIChannel`. Esto no debe afectar en nada a la compatibilidad, ya que esas interfaces heredaban igualmente de `nsIChannel`.

## Cambios de preferencia

Las preferencia `geo.wifi.*` no tendrán valores por defecto, aunque son respetados si los tienen. Si tu código los lee sin tener en cuenta los casos donde estos no existen, vas a necesitar actualizar tu código para tener en cuenta la excepxión que es lanzada cuando no están presentes.

## Cambios en XPConnect

`nodePrincipal` y `baseURIObject` han sido movidos de `nsDOMClassInfo` a `XrayWrapper`. Esto no debería afectar a demasiados complementos, ya que esto solo sería un problema si estos intentan accedar a esas propiedades en los objetos DOM {{ domxref("Node") }} desde scripts no privilegiados que han pedido privilegios XPConnect usando `enablePrivilege()`.

## Cambios en el DOM

- El hace tiempo obsoleto `Navigator.taintEnabled()` ha sido removido. No ha sido útil por mucho tiempo, pero era comúnmente utilizado en la deteción de script en navegadores, ya que era algo específico de Netscape. Llamar a este método arrojará una excepción en Firefox 9.
- Los manejadores de eventos ahora son implementados como un estándar de interfaz IDL. En muchos casos, esto no te afectará, pero [existen excepciones](/es/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Otros cambios que puedan afectar a la compatibilidad binaria

Estos cambios son notables, pudiendo afectar a los componentes binarios XPCOM. De todas formas, estos necesitarán ser hechos de nuevo, desde que esto es requerido en cada gran lanzamiento en Firefox, ya que pueden introducir errores en el momento de compilación.

- La interfaz `nsIDOMHTMLDocument` tiena ahora un nuevo atributo `script` el cual implementa el atributo {{ domxref("Document.scripts") }}.
- El método `nsIJumpListShortcut.iconImageUri()` ha sido añadido, para posibilitar el establecimiento de favicons al saltar a entradis de lista tipo URI en Windows.

## Cambio en el tema

El atributo `pending` ha sido añadido al elemento `tab`. Si este atributo está presente, la pestaña está en el proceso de ser restaurada por el servicio de almacenamiento de sesión. Tú puedes usar esto para dar estilos a la pestaña miestras dura el proceso de restauración. No importa si el usuario ha activado en preferencia la opción "No cargar las pestañas hasta que sean seleccionadas", el atributo `pending` se establece en las pestañas hasta que se cargan.

Similarmente, las pestañas también ahora tienen un atributo `unread`. Esta propiedad, si esta presente, indica que la pestaña ha cambiado desde el último momento en que estuvo activa. Tú puedes usarlo para dar diferentes estilos a las pestañas cuando hayan cambiado desde la última vez que el usuario las abrió. Este atributo también está presente en las pestañas que no han sido vistas durante la sesión actual.
