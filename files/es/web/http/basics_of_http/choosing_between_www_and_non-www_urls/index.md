---
title: Elección entre www y no-www URLs
slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
---

{{HTTPSidebar}}

Una cuestión recurrente entre los dueños de sitios web consiste en elegir entre un no-www y www URLs. Esta página contiene algunos consejos sobre qué es mejor.

## ¿Qué son los nombres de dominio?

En una URL HTTP, la primera subcadena que sigue a la inicial `http://` o `https://` se llama nombre de dominio. El nombre de dominio está alojado en un servidor donde residen los documentos.

Un servidor no es necesariamente una máquina física: varios servidores pueden residir en la misma máquina física. O bien, un servidor puede ser manejado por varias máquinas, cooperando para producir la respuesta o equilibrando la carga de las solicitudes entre ellas. El punto clave es que semanticamente un nombre de dominio representa un solo servidor.

## ¿Entonces, ¿tengo que elegir uno u otro para mi sitio web?

- **Sí**, tienes que elegir uno y seguir con él. La elección de cual tener como ubicación canónica es tuya, pero si eliges una, síguela. Esto hará tu sitio web parezca más consistente para tus usuarios y para los motores de búsqueda. Esto incluye siempre vincular al dominio elegido (lo que no debería ser difícil si está utilizando URLs relativas en su sitio web) y siempre compartir enlaces (por correo electrónico / redes sociales, etc.) al mismo dominio.
- **No**, puedes tener dos. Lo que es importante es que seas coherente y consistente con cuál es el dominio oficial. **A este dominio oficial se le llama nombre _canónico_.** Todos tus enlaces absolutos deben usarlo. Pero, aun así, puedes seguir teniendo el otro dominio funcionando: HTTP permite dos técnicas para que esté claro para sus usuarios, o motores de búsqueda, cuyo dominio es el canónico, mientras permite que el dominio no-canónico funcione para proporcionar las páginas esperadas.

Por lo tanto, ¡elija uno de sus dominios como su canónico! Hay dos técnicas a continuación para permitir que el dominio no canónico funcione aún.

## Técnicas para las URL canónicas

Hay diferentes maneras de elegir qué sitio web es _canónico_.

### Usando redirecciones HTTP 301

En este caso, necesitas configurar el servidor que recibe las peticiones HTTP (que probablemente sea el mismo para las URL www y no www) para responder con una respuesta HTTP adecuada {{HTTPStatus (301)}} a cualquier solicitud al dominio no-canónico. Esto redirigirá el navegador que intenta acceder a las URL no canónicas a su equivalente canónico. Por ejemplo, si ha elegido usar URL que no sean de www como tipo canónico, debe redirigir todas las URL de www a su URL equivalente sin el www.

Ejemplo:

1. Un servidor recibe una petición para `http://www.example.org/whaddup` (cuando el dominio canónico es example.org)
2. El servidor responde con un código {{HTTPStatus(301)}} con la cabecera `{{HTTPHeader("Location")}}: http://example.org/whaddup`.
3. El cliente emite una solicitud al dominio canónico.: `http://example.org/whatddup`

El [HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate) tiene un ejemplo sobre [cómo configurar un servidor Apache para redirigir un dominio a otro](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Usando \<link rel="canonical">

Es posible añadir un elemento especial HTML {{HTMLElement("link")}} a una página para indicar cual es la dirección canónica de la página. Esto no tendrá ningún impacto en la lectura humana, pero le dirá a rastreadores de los motores de búsqueda donde vive actualmente la página. De esta manera, los motores de búsqueda no indexan la misma página varias veces, lo que podría hacer que se considere contenido duplicado o correo no deseado, e incluso eliminar o bajar su página de las páginas de resultados del motor de búsqueda.

Al agregar una etiqueta de este tipo, sirve el mismo contenido para ambos dominios, indicando a los motores de búsqueda qué URL es canónica. En el ejemplo anterior, `http://www.example.org/whaddup` serviría el mismo contenido que `http://example.org/whaddup`, pero con un elemento {{htmlelement("link")}} adicional en la cabecera:

`<link href="http://example.org/whaddup" rel="canonical">`

A diferencia del caso anterior, el historial del navegador considerará las direcciones URL no www y www como entradas independientes.

## Hacer que tu página funcione para ambas

Con estas técnicas, puedes configurar tu servidor para responder correctamente a ambos dominios, www y no www. Es un buen consejo hacer esto, ya que no puede predecir qué URL escribirán los usuarios en la barra de URL de su navegador. Es una cuestión de elegir qué tipo desea usar como su ubicación canónica, y luego redirigir el otro tipo a él.

## Decidir el caso

Este es un tema muy subjetivo que podría considerarse un problema de [bikeshedding](http://bikeshed.com/). Si desea leer más a fondo, lea algunos de los [muchos artículos](http://www.themezilla.com/should-you-use-www-in-your-url-or-not/) de este tema.

## Ver también

- [Estadísticas sobre lo que la gente escribe en la barra de URL](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
