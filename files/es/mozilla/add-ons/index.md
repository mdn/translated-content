---
title: Complementos
slug: Mozilla/Add-ons
---

{{AddonSidebar}}

Los complementos permiten a los desarrolladores extender y modificar las funcionalidades de Firefox. Están escritos utilizando las tecnologías estándar Web - JavaScript, HTML y CSS - más algunas APIs dedicadas JavaScript. Entre otras cosas, un complemento puede:

- Cambiar la apariencia o el contenido de determinados sitios Web
- Modificar la interfaz del usuario de Firefox
- Agregar nuevas características a Firefox

Existen varios tipos de complementos, pero el tipo más común son las extensiones.

## Desarrollo de las extensiones

En el pasado, habían varias juegos de herramientas para el desarrollo de las extensiones de Firefox, pero al finalizar el mes de noviembre de 2017, las extensiones deben crearse utilizando las [API de WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions). Los otros juegos de herramientas, incluidos los complementos de overlay, los complementos de bootstrap y el complemento SDK, se espera que queden obsoletos durante el mismo período de tiempo.

Si usted está escribiendo un nuevo complemento, le recomendamos que utilice la [API de WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions).

Las WebExtensions están diseñadas para que sean compatibles cross-browser. En la mayoría de los casos podran ser ejecutadas por Chrome, Edge, y Opera con pocos o ningún cambio. También serán completamente compatibles con el multiproceso Firefox.

[Vea las APIs soportada actualmente por Firefox y otros navegadores](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Seguimos diseñando e implementando nuevas API en respuesta a las necesidades de los desarrolladores.

La mayoría de las APIs de WebExtensions estarán también disponibles para Firefox para Android.

### Migrar un complemento ya existente

Si tu mantienes extensiones que están por ser remplazados, tales como XUL overlay, bootstrapped, o extensiones basadas en SDK, le recomendamos que investige como portarlos a WebExtensions. Existen algunos [recursos de portación en MDN](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/).

Hemos recolectado [recursos](https://wiki.mozilla.org/Add-ons/developer/communication) en una página wiki para proporcionar soporte a los desarrolladores mediante la transición. Para empezar, utilice la herramienta de compatibilidad [Lookup Tool](https://compatibility-lookup.services.mozilla.com/) para ver si su herramienta será afectada.

## Publicar los complementos

[Addons.mozilla.org](https://addons.mozilla.org/es/firefox/), comúnmente conocidos como "AMO," es un sitio oficial de Mozilla para que los desarrolladores registren los complementos, y para que los usuarios los descubran. Al subir tu complemento a AMO, puedes participar en nuestra comunidad de usuarios y creadores y encontrar una audiencia para tu complemento.

No es requerido que tu registres tu complemento en AMO, pero tu complemento será firmado por Mozilla o los usuarios no podrán instalarlos.

Para obtener una visión general del proceso de publicación de su complemento, consulte [Firme y distribuya su complemento](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Otros tipos de complementos

Además de las extensiones, hay algunos otros tipos de complemento que permiten a los usuarios personalizar Firefox. Estos complementos incluyen:

- [Temas ligeros](/docs/Mozilla/Add-ons/Themes/Background) Son una forma sencilla de proporcionar una personalización limitada para Firefox.
- [Complementos para móviles](/es/docs/Mozilla/Add-ons/Firefox_for_Android) son complementos de Firefox para Android. Observe que, aunque, tenemos la intención de reemplazar parte de la tecnología subyacente a estas API. En el futuro, WebExtensions será totalmente compatible con Firefox para Android.
- [Plugins de motores de búsqueda](/es/docs/Web/OpenSearch) agrega nuevos motores de búsqueda a la barra de búsqueda del navegador.
- [Diccionarios del usuario](/es/docs/Mozilla/Creating_a_spell_check_dictionary_add-on) son complementos que le permiten revisar la ortografía en diferentes idiomas.
- [Paquetes de idiomas](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack) son complementos que le permiten tener más idiomas disponibles para la interfaz de usuario de Firefox.

---

## Contáctenos

Puede utilizar los vínculos siguientes para obtener ayuda, mantenerse al día con las noticias sobre los complementos y darnos su opinión.

### Foro de complementos

Use el [foro de discusión sobre complementos](https://discourse.mozilla-community.org/c/add-ons) para discutir todos los aspectos del desarrollo de los complementos y para obtener ayuda.

### Listas de correo

La **lista de correo de dev-addons** se retiró el 1 de diciembre de 2020. Puede ver los [archivos de dev-addons](https://mail.mozilla.org/pipermail/dev-addons/) para ver debates anteriores sobre la API de WebExtensions y addons.mozilla.org.

### IRC

Si eres un fan de IRC, puedes ponerte en contacto:

- [#addons](irc://irc.mozilla.org/addons) (discusiones sobre el ecosistema de complementos)
- [#extdev](irc://irc.mozilla.org/extdev) (discusión general sobre el desarrollo de los complementos)
- [#webextensions](irc://irc.mozilla.org/webextensions) (discusión alrededor de la API de WebExtensions en particular)

### Informar de problemas

#### Vulnerabilidades de seguridad

Si descubre una vulnerabilidad de segurida en un complemento, incluso si no está hospedado en un sitio de Mozilla, permítanos saberlo y trabajaremos con el desarrollador para corregir el problema. Por favor, infórmelos [confidencialmente](https://www.mozilla.org/projects/security/security-bugs-policy.html)en [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=addons.mozilla.org&component=Add-on%20Security&maketemplate=Add-on%20Security%20Bug&bit-23=1&rep_platform=All&op_sys=All) o enviando un correo a <amo-admins@mozilla.org>.

#### Errores en addons.mozilla.org (AMO)

Si encuentra un problema en el sitio, nos encantaría arreglarlo. Por favor, [presente un informe de error](https://github.com/mozilla/addons/issues/new) e incluya tantos detalles como sean posibles.
