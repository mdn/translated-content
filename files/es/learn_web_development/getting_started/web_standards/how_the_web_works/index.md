---
title: Cómo funciona la web
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Cómo funciona la web_ ofrece una descripción general de lo que ocurre cuando usas un navegador web para ir a una página web, y explica la magia que sucede entre bastidores para entregar el código correspondiente a tu computadora, de modo que el navegador lo ensamble en algo que puedas ver.

Esta teoría no es imprescindible para escribir código web a corto plazo, pero muy pronto empezarás a beneficiarte de verdad de entender lo que ocurre en segundo plano.

> [!NOTE]
> Este artículo no explica cómo los navegadores web convierten realmente el código en páginas web. Eso se trata en [Cómo los navegadores cargan los sitios web](/es/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, los navegadores web y las tecnologías web.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Los clientes y los servidores, y su papel en la web.</li>
          <li>El DNS y cómo funciona, a grandes rasgos.</li>
          <li>El propósito de TCP/IP, HTTP y los paquetes.</li>
          <li>La sintaxis de HTTP a nivel básico.</li>
          <li>Los códigos de respuesta HTTP más comunes (p. ej., 200, 301, 403, 404 y 500).</li>
          <li>Los componentes básicos de una URL (protocolo, dominio, subdominio, ruta).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clientes y servidores

Las computadoras conectadas a internet se llaman **clientes** y **servidores**. Un diagrama simplificado de cómo interactúan podría ser así:

![Dos círculos que representan el cliente y el servidor. Una flecha con la etiqueta solicitud va del cliente al servidor, y una flecha con la etiqueta respuestas va del servidor al cliente](simple-client-server.png)

- Los clientes son los dispositivos conectados a internet de un usuario web típico (por ejemplo, tu computadora conectada a tu wifi o tu teléfono conectado a tu red móvil) y el software de acceso a la web disponible en esos dispositivos (normalmente un navegador web como Firefox o Chrome).
- Los servidores son computadoras que almacenan páginas, sitios o aplicaciones web. Cuando un cliente quiere acceder a una página web, se descarga una copia del código de la página desde el servidor a la máquina cliente, donde el navegador la representa y la muestra al usuario.

El siguiente contenido incrustado de Scrimba<sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> ofrece más información sobre los clientes y los servidores, incluidos un cuestionario y un debate.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~0lq" scrimtitle="Clients and servers"></scrim-inline>

## Las otras partes de la caja de herramientas

El cliente y el servidor que hemos descrito no cuentan toda la historia. Intervienen muchas otras partes, y las describiremos a continuación.

Por ahora, imaginemos que internet es una carretera. En un extremo de la carretera está el cliente, que es como tu casa. En el otro extremo está el servidor, que es como una tienda en la que quieres comprar algo.

![Una foto en blanco y negro de una persona cruzando una calle por un paso de peatones](road.jpg)

Para que los datos vayan y vengan, necesitamos lo siguiente:

- **Tu conexión a internet**: te permite enviar y recibir datos en internet. Básicamente, es como la calle entre tu casa y la tienda.
- **TCP/IP**: el **protocolo de control de transmisión** y el **protocolo de internet** (TCP/IP, por sus siglas en inglés) son protocolos de comunicación que definen cómo deben viajar los datos por internet. Son como los medios de transporte que te permiten hacer un pedido, ir a la tienda y comprar tus productos. En nuestro ejemplo, es como un coche o una bicicleta (o cualquier otra forma en que puedas recorrer la carretera).
- **DNS**: el **sistema de nombres de dominio** (DNS, por sus siglas en inglés) es como una libreta de direcciones de sitios web. Cuando escribes una dirección web en tu navegador, este consulta el DNS para encontrar la dirección IP del sitio web (la dirección real en la que se encuentra el servidor) antes de poder obtener el sitio web (consulta [Explicación del DNS](#explicación_del_dns) más abajo para obtener más información). El navegador necesita averiguar en qué servidor está el sitio web para poder enviar los mensajes HTTP al lugar correcto (ver más abajo). Es como buscar la dirección de la tienda antes de visitarla.
- **HTTP**: el **protocolo de transferencia de hipertexto** (HTTP, por sus siglas en inglés) es un {{Glossary("Protocol", "protocolo")}} de aplicación que define un lenguaje para que los clientes y los servidores se comuniquen entre sí. Es como el idioma que usas para pedir tus productos. Consulta [Conceptos básicos de HTTP](#conceptos_básicos_de_http) más abajo.
- **Archivos**: un sitio web se compone de muchos archivos distintos, que son como los distintos productos que compras en la tienda. Estos archivos son de dos tipos principales:
  - **Código**: los sitios web se construyen principalmente con HTML, CSS y JavaScript, los distintos lenguajes de programación en los que se escriben los sitios web, que el navegador interpreta y ensambla en una página web para mostrarla al usuario.
  - **Recursos**: es un término colectivo para todos los demás elementos que aparecen en un sitio web (como imágenes, música, video, documentos de Word y PDF) y que no son código que interprete el navegador.

  > [!NOTE]
  > Más adelante en el curso, en [Cómo los navegadores cargan los sitios web](/es/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites), descubrirás cómo ensambla el navegador estos archivos en una página web.

## Entonces, ¿qué ocurre exactamente?

Cuando escribes una dirección web (que técnicamente es parte de una [URL](#componentes_de_una_url)) en la barra de direcciones del navegador, ocurren los siguientes pasos:

1. El navegador acude al servidor DNS y encuentra la dirección real del servidor en el que está el sitio web.
2. El navegador envía un mensaje de solicitud HTTP al servidor, pidiéndole que envíe una copia del sitio web al cliente. Este mensaje, y todos los demás datos que se envían entre el cliente y el servidor, viajan por tu conexión a internet usando TCP/IP.
3. Si el servidor aprueba la solicitud del cliente, le envía un mensaje «200 OK», que significa «¡Claro que puedes ver ese sitio web! Aquí lo tienes», y después empieza a enviar los archivos del sitio web al navegador como una serie de pequeños fragmentos llamados [paquetes](#explicación_de_los_paquetes).
4. El navegador ensambla los pequeños fragmentos en una página web completa y te la muestra.

## Explicación del DNS

Las direcciones web reales ([URL](#componentes_de_una_url)) no son las cadenas bonitas y fáciles de recordar que escribes en la barra de direcciones para encontrar tus sitios web favoritos. Son números especiales con este aspecto: `192.0.2.172`.

Esto se llama {{Glossary("IP Address", "dirección IP")}} y representa una ubicación única en la web. Sin embargo, no es muy fácil de recordar, ¿verdad? Por eso se inventó el sistema de nombres de dominio. Este sistema usa servidores especiales que relacionan la dirección web que escribes en tu navegador (como `mozilla.org`) con la dirección real (IP) del sitio web. Los sitios web grandes suelen estar disponibles en varios servidores para que carguen de forma eficiente para distintos usuarios de todo el mundo. Por eso, la dirección IP puede variar según dónde te encuentres.

Puedes usar una herramienta de búsqueda de DNS para encontrar las direcciones IP de un sitio web. Por ejemplo, ve a la [herramienta de búsqueda de DNS de NsLookup.io](https://www.nslookup.io/website-to-ip-lookup/), escribe `developer.mozilla.org` y pulsa el botón.

## Explicación de los paquetes

Antes usamos el término «paquetes» para describir el formato en el que se transfieren los datos entre el cliente y el servidor. ¿Qué queremos decir con esto?

Cuando se envían datos por la web, se envían en varios fragmentos pequeños llamados paquetes. Cada paquete contiene:

- Una **cabecera**, que incluye detalles como las direcciones IP del servidor y del cliente, el número del paquete, el número total de paquetes de la transmisión y detalles de los protocolos usados en la transmisión.
- Una **carga útil**, que contiene los datos reales que se envían en el paquete.

Hay varios motivos por los que los datos se envían en paquetes pequeños, pero los más importantes son:

- A veces se pierden o se corrompen y, cuando eso ocurre, es más rápido y sencillo que el cliente pida los paquetes que faltan en lugar de un archivo entero.
- Los paquetes pueden enviarse por rutas distintas, lo que hace que la transmisión sea lo más eficiente posible y reduce la posibilidad de ralentizar la red, sobre todo cuando muchos usuarios piden el mismo recurso a la vez. Los paquetes pueden llegar desordenados, pero el cliente puede usar la información de sus cabeceras para asegurarse de ensamblarlos en el orden correcto.

## Conceptos básicos de HTTP

HTTP usa un lenguaje sencillo de verbos para realizar acciones como hacer solicitudes (consulta [Métodos de solicitud HTTP](/es/docs/Web/HTTP/Reference/Methods)). El método HTTP [`GET`](/es/docs/Web/HTTP/Reference/Methods/GET) es el que se usa normalmente para hacer solicitudes HTTP del tipo descrito antes. Por ejemplo, una solicitud de la página de inicio de MDN podría ser así:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

La respuesta que envía el servidor podría ser algo así:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (los 45227 bytes del HTML de la página web solicitada)
```

La respuesta completa es más compleja, pero hemos omitido la mayor parte para abreviar. Las partes principales son las siguientes:

- `HTTP/2 200`
  - : La versión de HTTP que usa el servidor para enviar la respuesta, en este caso HTTP/2, seguida de un [código de estado](/es/docs/Web/HTTP/Reference/Status) que indica si la solicitud tuvo éxito. `200` indica éxito.
- `date`, `expires`, etc.
  - : [Cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers) que contienen información adicional sobre la respuesta (ten en cuenta que las solicitudes también pueden tener cabeceras), que aportan información extra o modifican su comportamiento.
- `<!doctype html>`, etc.
  - : El cuerpo de la respuesta, que en este caso contiene el documento HTML de la página de inicio de MDN.

> [!NOTE]
> Si tienes curiosidad, consulta la [referencia de HTTP](/es/docs/Web/HTTP) de MDN para ver muchos más detalles sobre HTTP. [Una descripción general de HTTP](/es/docs/Web/HTTP/Guides/Overview) es un buen punto de partida.

### Otros códigos de estado

Antes vimos el [código de estado](/es/docs/Web/HTTP/Reference/Status) `200`, que indica que la solicitud HTTP tuvo éxito. Hay muchos códigos de estado HTTP con significados y usos concretos, pero solo verás unos pocos con frecuencia:

- `301`
  - : El recurso solicitado se ha movido de forma permanente a una nueva ubicación, que se indica en la respuesta. Se usa para redirigir el contenido cuando se mueve.
- `400`
  - : El servidor no puede procesar la solicitud. Suele ocurrir cuando la solicitud no tiene un formato que el servidor entienda o contiene errores.
- `403`
  - : El servidor no dará al cliente acceso al recurso solicitado. Suele ocurrir cuando el servidor sabe quién es el cliente, pero este no tiene permiso para acceder a la página solicitada.
- `404`
  - : El servidor no encuentra el recurso solicitado. Este estado se devuelve habitualmente si la URL es incorrecta o si se elimina contenido sin crear una redirección.
- `503`
  - : La solicitud no se puede atender debido a un problema con el servidor. Es habitual cuando los servidores están fuera de línea por mantenimiento, y se espera que sea temporal.

## Componentes de una URL

Técnicamente, las direcciones web que escribes en la barra de direcciones del navegador forman parte de los **localizadores uniformes de recursos** (**URL**, por sus siglas en inglés). Las URL definen la ubicación de recursos únicos en internet.

Una URL es una dirección web más un protocolo: por ejemplo, si abres una pestaña nueva en tu navegador, escribes `developer.mozilla.org` en la barra de direcciones y pulsas <kbd>Intro</kbd>/<kbd>Return</kbd>, se te redirigirá a una URL como la siguiente:

```plain
https://developer.mozilla.org/en-US/
```

Las partes principales de la URL son:

- `https`
  - : El **protocolo** que se usa para enviar la solicitud. En este caso usamos [HTTPS](/es/docs/Glossary/HTTPS), una versión segura de HTTP que impide que personas malintencionadas lean tus datos mientras se transportan. En la web moderna, prácticamente todos los servidores usan HTTPS, así que si no lo incluyes de forma explícita, el navegador supone que es lo que usas y lo añade por ti.
- `developer.mozilla.org`
  - : El [**nombre de dominio**](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) de la URL, que representa la ubicación de nivel superior del servidor al que te conectas. En este caso, la dirección web que escribiste es igual al nombre de dominio, pero no siempre es así: podrías escribir una dirección web más complicada. Ten en cuenta que la parte `developer` es un **subdominio** (un área de contenido diferenciada) del dominio `mozilla.org` de Mozilla. En el sitio de Mozilla hay otros subdominios que alojan contenido diferenciado; consulta, por ejemplo, [support.mozilla.org](https://support.mozilla.org/) y [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).
- `/en-US/`
  - : La **ruta** al recurso del servidor al que accedes. MDN guarda todo su contenido en inglés de Estados Unidos en una carpeta llamada `en-US`, que es a la que apunta esta URL.

    Si tienes el navegador configurado para preferir el contenido en inglés de forma predeterminada, esta es la URL a la que se te redirigirá al escribir `developer.mozilla.org`. Si lo tienes configurado para preferir otro idioma que MDN admite, como el francés, se te redirigirá a otra URL, como `https://developer.mozilla.org/fr/`. Esto no está disponible de forma predeterminada en todos los sitios web; los desarrolladores de MDN lo configuraron así para que la gente pueda acceder fácilmente al idioma que prefiere.

> [!NOTE]
> Hay muchos más componentes que pueden aparecer en las URL. Consulta [¿Qué es una URL?](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) para obtener más detalles.

## Véase también

- [Cómo funciona internet](/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Créditos

Foto de la calle: [Street composing](https://www.pinterest.com/pin/400538960580676851/), de [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
