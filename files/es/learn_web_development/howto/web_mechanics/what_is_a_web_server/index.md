---
title: ¿Qué es un servidor web?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

En este artículo explicamos qué son los servidores web, cómo funcionan y por qué son importantes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Deberías saber ya
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >cómo funciona Internet</a>, y
          <a href="/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          > entender la diferencia entre una página web, un sitio web, un
          servidor web y un motor de búsqueda</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprenderás qué es un servidor web y obtendrás una comprensión general de
        cómo funciona.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

El término _servidor web_ puede referirse a hardware, a software, o a ambos trabajando juntos.

1. En el aspecto del hardware, un servidor web es una computadora que almacena el software del servidor web y los archivos que componen un sitio web (por ejemplo, documentos HTML, imágenes, hojas de estilo CSS y archivos JavaScript). Un servidor web se conecta a Internet y permite el intercambio físico de datos con otros dispositivos conectados a la web.
2. En el aspecto del software, un servidor web incluye varias partes que controlan cómo los usuarios web acceden a los archivos alojados. Como mínimo, esto es un _servidor HTTP_. Un servidor HTTP es un software que entiende {{Glossary("URL","URLs")}} (direcciones web) y {{Glossary("HTTP")}} (el protocolo que tu navegador usa para ver páginas web). Se puede acceder a un servidor HTTP a través de los nombres de dominio de los sitios web que almacena, y entrega el contenido de estos sitios alojados al dispositivo del usuario final.

En el nivel más básico, cada vez que un navegador necesita un archivo alojado en un servidor web, el navegador solicita el archivo mediante HTTP. Cuando la solicitud llega al servidor web (hardware) correcto, el _servidor HTTP_ (software) acepta la solicitud, encuentra el documento solicitado y lo envía de vuelta al navegador, también mediante HTTP. (Si el servidor no encuentra el documento solicitado, devuelve una respuesta [404](/es/docs/Web/HTTP/Reference/Status/404) en su lugar.)

![Representación básica de una conexión cliente/servidor a través de HTTP](web-server.svg)

Para publicar un sitio web, necesitas un servidor web estático o uno dinámico.

Un **servidor web estático**, o pila, consiste en una computadora (hardware) con un servidor HTTP (software). Lo llamamos "estático" porque el servidor envía sus archivos alojados tal cual a tu navegador.

Un **servidor web dinámico** consiste en un servidor web estático más software adicional, comúnmente un _servidor de aplicaciones_ y una _base de datos_. Lo llamamos "dinámico" porque el servidor de aplicaciones actualiza los archivos alojados antes de enviar el contenido a tu navegador a través del servidor HTTP.

Por ejemplo, para producir las páginas web finales que ves en el navegador, el servidor de aplicaciones podría llenar una plantilla HTML con contenido de una base de datos. Sitios como MDN o Wikipedia tienen miles de páginas web. Normalmente, este tipo de sitios está compuesto solo por unas pocas plantillas HTML y una base de datos gigante, en lugar de miles de documentos HTML estáticos. Esta configuración facilita el mantenimiento y la entrega del contenido.

## Análisis más detallado

Para repasar: para obtener una página web, tu navegador envía una solicitud al servidor web, el cual busca el archivo solicitado en su propio espacio de almacenamiento. Al encontrar el archivo, el servidor lo lee, lo procesa según sea necesario y lo envía al navegador. Veamos estos pasos con más detalle

### Alojamiento de archivos

Primero, un servidor web tiene que almacenar los archivos del sitio web, es decir, todos los documentos HTML y sus recursos relacionados, incluyendo imágenes, hojas de estilo CSS, archivos JavaScript, fuentes y video.

Técnicamente, podrías alojar todos esos archivos en tu propia computadora, pero es mucho más conveniente almacenar los archivos en un servidor web dedicado porque:

- Un servidor web dedicado suele estar más disponible (encendido y funcionando).
- Excluyendo tiempos de inactividad y problemas del sistema, un servidor web dedicado siempre está conectado a Internet.
- Un servidor web dedicado puede tener la misma dirección IP todo el tiempo. Esto se conoce como una _dirección IP dedicada_. (No todos los {{Glossary("ISP", "ISP")}} ofrecen una dirección IP fija para las líneas domésticas.)
- Un servidor web dedicado suele ser mantenido por un tercero.

Por todas estas razones, encontrar un buen proveedor de hospedaje es una parte clave para construir tu sitio web. Examina los distintos servicios que ofrecen las empresas. Elige uno que se ajuste a tus necesidades y presupuesto. (Los servicios van desde gratuitos hasta miles de dólares al mes.) Puedes encontrar más detalles [en este artículo](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting).

Una vez que tengas un servicio de hospedaje web, debes [subir tus archivos a tu servidor web](/es/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).

### Comunicación a través de HTTP

Segundo, un servidor web ofrece soporte para {{Glossary("HTTP")}} (Protocolo de Transferencia de Hipertexto). Como su nombre lo indica, HTTP especifica cómo transferir hipertexto (documentos web enlazados) entre dos computadoras.

Un {{Glossary("Protocol", "protocolo")}} es un conjunto de reglas para la comunicación entre dos computadoras. HTTP es un protocolo textual y sin estado.

- Textual
  - : Todos los comandos son texto plano y legible por humanos.
- Sin estado
  - : Ni el servidor ni el cliente recuerdan comunicaciones previas. Por ejemplo, dependiendo solo de HTTP, un servidor no puede recordar una contraseña que escribiste ni recordar tu progreso en una transacción incompleta. Necesitas un servidor de aplicaciones para tareas como esa. (Cubriremos ese tipo de tecnología en otros artículos.)

HTTP proporciona reglas claras sobre cómo se comunican un cliente y un servidor.
Si quieres aprender más, puedes leer la [documentación de HTTP](/es/docs/Web/HTTP).
Por ahora, hay algunas cosas a tener en cuenta:

- Los _clientes_ hacen solicitudes HTTP a los _servidores_. Los servidores _responden_ a la solicitud HTTP de un _cliente_.
- Al solicitar un archivo mediante HTTP, los clientes deben proporcionar la {{Glossary("URL")}} del archivo.
- El servidor web _debe responder_ a cada solicitud HTTP, al menos con un mensaje de error.

En un servidor web, el servidor HTTP es responsable de procesar y responder a las solicitudes entrantes.

1. Al recibir una solicitud, un servidor HTTP verifica si la URL solicitada coincide con un archivo existente.
2. Si es así, el servidor web envía el contenido del archivo de vuelta al navegador. Si no, el servidor verificará si debe generar un archivo de forma dinámica para la solicitud (consulta [Contenido estático vs. dinámico](#contenido_estático_vs._dinámico)).
3. Si ninguna de estas opciones es posible, el servidor web devuelve un mensaje de error al navegador, más comúnmente {{HTTPStatus("404", "404 No encontrado")}}.
   El error 404 es tan común que algunos diseñadores web dedican bastante tiempo y esfuerzo a diseñar páginas de error 404.
   ![La página 404 de MDN como ejemplo de dicha página de error](mdn-404.jpg)

### Contenido estático vs. dinámico

En términos generales, un servidor puede ofrecer contenido estático o dinámico. Recuerda que el término _estático_ significa "servido tal cual". Los sitios web estáticos son los más fáciles de configurar, así que te sugerimos que tu primer sitio sea uno estático.

El término _dinámico_ significa que el servidor procesa el contenido, o incluso lo genera en el momento a partir de una base de datos. Este enfoque brinda más flexibilidad, pero la pila tecnológica es más compleja, lo que hace que construir un sitio web sea mucho más desafiante.

Es imposible sugerir un único servidor de aplicaciones listo para usar que sea la solución correcta para todos los casos posibles. Algunos servidores de aplicaciones están diseñados para alojar y gestionar blogs, wikis o soluciones de comercio electrónico, mientras que otros son más genéricos. Si estás construyendo un sitio web dinámico, tómate el tiempo para investigar tus requisitos y encontrar la tecnología que mejor se ajuste a tus necesidades.

La mayoría de los desarrolladores de sitios web no necesitarán crear un servidor de aplicaciones desde cero, porque existen muchísimas soluciones listas para usar, muchas de ellas altamente configurables.
Pero si necesitas crear tu propio servidor, probablemente querrás usar un framework de servidor, aprovechando su código y bibliotecas existentes, y extendiendo solo las partes que necesites para cumplir con tu caso de uso.
Solo un número relativamente pequeño de desarrolladores debería necesitar desarrollar un servidor completamente desde cero: por ejemplo, para cumplir con restricciones de recursos estrictas en un sistema embebido.
Si te gustaría experimentar creando un servidor, echa un vistazo a los recursos en la ruta de aprendizaje [Programación de sitios web del lado del servidor](/es/docs/Learn_web_development/Extensions/Server-side).

## Próximos pasos

Ahora que ya conoces los servidores web, podrías:

- leer sobre [cuánto cuesta hacer algo en la web](/es/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- aprender más sobre [los diversos programas que necesitas para crear un sitio web](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- pasar a algo práctico como [cómo subir archivos a un servidor web](/es/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
