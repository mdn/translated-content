---
title: Atributos de configuración CORS
slug: Web/HTML/Reference/Attributes/crossorigin
original_slug: Web/HTML/Attributes/crossorigin
---

{{HTMLSidebar}}

En HTML5, algunos elementos HTML que dan soporte para [CORS](/es/docs/Web/HTTP/Guides/CORS), tales como {{ HTMLElement("img") }} o {{ HTMLElement("video") }}, tienen un atributo `crossorigin` (propiedad `crossOrigin`), que les permite configurar las peticiones CORS de los datos que se cargan. Estos atributos están enumerados, y tienen los siguientes valores posibles:

| Palabra clave     | Descripción                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `anonymous`       | CORS, las solicitudes de este elemento no tendrán establecido el indicador de credenciales.                                                      |
| `use-credentials` | CORS, las solicitudes de este elemento tendrán marcado el indicador de credenciales; esto significa que la solicitud proporcionará credenciales. |

Por defecto, es decir cuando el atributo no es específicado, CORS no se usa. La palabra clave "anonymous" indica que no habrá intercambio de credenciales de usuario a través de las cookies, ni por parte del cliente con certificados SSL o autenticación HTTP como se describe en la sección de terminología de la especificación CORS.

Una clave inválida y un string vacío serán gestionados como una clave anónima.

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

{{Compat}}

## Véase también

- [Control de acceso HTTP (CORS)](/es/docs/Web/HTTP/Guides/CORS)
- [Atributo HTML: `rel`](/es/docs/Web/HTML/Reference/Attributes/rel)
