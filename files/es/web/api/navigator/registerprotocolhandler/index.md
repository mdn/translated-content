---
title: window.navigator.registerProtocolHandler
slug: Web/API/Navigator/registerProtocolHandler
---

{{ ApiRef() }}

### Resumen

Permite que las páginas web se registren por si mismas como posibles manejadores para protocolos concretos.

### Sintaxis

```
window.navigator.registerProtocolHandler(protocol,uri,title);
```

- `protocol` es el protocolo que el sitio quiere manejar, especificado como una cadena.
- `uri` es la URI del manejador en forma de cadena. Puedes incluir "%s" para indicar dónde debe insertarse la URI (en formato escaped) del documento a manejar.
- `title` es el título del manejador presentado al usuario como una cadena.

### Ejemplo

```
navigator.registerProtocolHandler("mailto",
                                 "https://mail.google.com/mail?view=cm&tf=0&to=%s",
                                 "Google Mail");
```

Esto crea un nuevo manejador que permite a los enlaces de tipo "mailto:" dirigir al usuario a Google Mail, insertando la dirección de correo especificada en el enlace, en la URL.

### Especificación

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Manejadores de protocolos basados en Web](/es/docs/conflicting/Web/API/Navigator/registerProtocolHandler)
- [RegisterProtocolHandler Mejora de la web federada](https://blog.mozilla.org/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) (Mozilla Webdev)
