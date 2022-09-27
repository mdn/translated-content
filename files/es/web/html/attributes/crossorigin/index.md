---
title: Atributos de configuración CORS
slug: Web/HTML/Attributes/crossorigin
translation_of: Web/HTML/Attributes/crossorigin
original_slug: Web/HTML/Atributos_de_configuracion_CORS
---
En HTML5, algunos elementos HTML que dan soporte para [CORS](/es/docs/HTTP/Access_control_CORS), tales como {{ HTMLElement("img") }} o {{ HTMLElement("video") }}, tienen un atributo `crossorigin` (propiedad `crossOrigin`), que les permite configurar las peticiones CORS de los datos que se cargan. Estos atributos están enumerados, y tienen los siguientes valores posibles:

| Palabra clave     | Descripción                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `anonymous`       | CORS, las solicitudes de este elemento no tendrán establecido el indicador de credenciales.                                                      |
| `use-credentials` | CORS, las solicitudes de este elemento tendrán marcado el indicador de credenciales; esto significa que la solicitud proporcionará credenciales. |

Por defecto, es decir cuando el atributo no es específicado, CORS no se usa. La palabra clave "anonymous" indica que no habrá intercambio de credenciales de usuario a través de las cookies, ni por parte del cliente con certificados SSL o autenticación HTTP como se describe en la sección de terminología de la especificación CORS.

Una clave inválida y un string vacío serán gestionados como una clave anónima.

Especificaciones

| Especificación                                                                                                                           | Estado                           | Comentario |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}                     | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidad de navegadores

### script crossorigin

{{Compat("html.elements.script.crossorigin")}}

### video crossorigin

{{Compat("html.elements.video.crossorigin")}}

### link crossorigin

{{Compat("html.elements.link.crossorigin")}}

## Ver también

- [HTTP access control](/En/HTTP_access_control)
