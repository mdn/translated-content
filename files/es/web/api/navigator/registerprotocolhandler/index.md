---
title: window.navigator.registerProtocolHandler
slug: Web/API/Navigator/registerProtocolHandler
tags:
  - Firefox 3
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Navigator/registerProtocolHandler
---
{{ ApiRef() }}

### Resumen

Permite que las páginas web se registren por si mismas como posibles manejadores para protocolos concretos.

### Sintaxis

    window.navigator.registerProtocolHandler(protocol,uri,title);

- `protocol` es el protocolo que el sitio quiere manejar, especificado como una cadena.
- `uri` es la URI del manejador en forma de cadena. Puedes incluir "%s" para indicar dónde debe insertarse la URI (en formato escaped) del documento a manejar.
- `title` es el título del manejador presentado al usuario como una cadena.

### Ejemplo

    navigator.registerProtocolHandler("mailto",
                                     "https://mail.google.com/mail?view=cm&tf=0&to=%s",
                                     "Google Mail");

Esto crea un nuevo manejador que permite a los enlaces de tipo "mailto:" dirigir al usuario a Google Mail, insertando la dirección de correo especificada en el enlace, en la URL.

### Especificación

Especificado en el documento del WHATWG: [Web Applications 1.0 working draft](http://whatwg.org/specs/web-apps/current-work/#custom-handlers).

{{ languages( { "en": "en/DOM/window\.navigator.registerProtocolHandler", "fr": "fr/DOM/window\.navigator.registerProtocolHandler", "ja": "ja/DOM/window\.navigator.registerProtocolHandler", "ko": "ko/DOM/window\.navigator.registerProtocolHandler", "pl": "pl/DOM/window\.navigator.registerProtocolHandler" } ) }}
