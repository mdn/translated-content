---
title: Que es un servidor WEB?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
---

En este articulo veremos que son los servidores, cómo funcionan y por qué son importantes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Debes saber
        <a href="/es/docs/Learn/How_the_Internet_works"
          >como funciona internet</a
        >, y
        <a href="/es/docs/Learn/page_vs_site_vs_server_vs_search_engine"
          >entendiendo la diferencia entre pagina web, sitio web, servidor y
          motor de busqueda</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender qué es un servidor web y comprender cómo funciona.</td>
    </tr>
  </tbody>
</table>

## Sumario

Con "Servidor web" podemos referirnos a hardware o software, o a ambos trabajando juntos.

1. En cuanto a hardware, un servidor web es una computadora que almacena el software de servidor web, y los archivos que componen un sitio web (por ejemplo, documentos HTML, imágenes, hojas de estilos CSS y archivos JavaScript). Un servidor web -hardware- se conecta a internet y mantiene el intercambio de datos con otros dispositivos conectados a la web.
2. En cuanto a software, un servidor web tiene muchas partes que controlan cómo los usuarios de la web obtienen acceso a los archivos alojados en el servidor; es decir, mínimamente, un _servidor HTTP_. Un servidor HTTP es una pieza de software capaz de comprender {{Glossary("URL","URLs")}} (direcciones web) y {{Glossary("HTTP")}} (el protocolo que tu navegador usa para obtener las páginas web). Un servidor HTTP puede ser accedido a través de los nombres de dominio de los sitios web que aloja, y entrega el contenido de esos sitios web alojados al dispositivo del usuario final.

Al nivel más básico, cuando un navegador necesita un archivo que está almacenado en un servidor web, el navegador requerirá el archivo al servidor mediante el protocolo HTTP. Cuando la petición alcanza al servidor web correcto (hardware), el _servidor HTTP_ (software) acepta la solicitud, encuentra el documento requerido y lo envía de regreso al navegador, tambien a través de HTTP. (Si el servidor no encuentra el documento requerido, devuelve una respuesta [404](/es/docs/Web/HTTP/Status/404) en su lugar.)

![Representación básica de una conexión cliente/servidor a través de HTTP](web-server.svg)

Para publicar un sitio web, necesitarás un servidor web estático o dinámico.

Un **servidor web estático**, o pila, consiste en una computadora (hardware) con un servidor HTTP (software). Llamamos a "estático" a este servidor porque envía los archivos que aloja "tal como se encuentran" (sin modificarlos) a tu navegador.

Un **servidor web dinámico** consiste en un servidor web estático con software adicional, habitualmente una _aplicación servidor_ y una _base de datos_. Llamamos "dinámico" a este servidor porque la _aplicacion servidor_ actualiza los archivos alojados, antes de enviar el contenido a tu navegador mediante el _servidor HTTP_.

Por ejemplo, para producir las páginas web que finalmente ves en tu navegador, la _aplicación servidor_ podría llenar una plantilla HTML con contenido obtenido de una base de datos. Sitios como MDN o Wikipedia tienen miles de páginas web, que no son realmente archivos HTML. Típicamente, este tipo de sitios se componen de unas pocas plantillas HTML y una gigantesca base de datos, en vez de miles de documentos HTML estáticos. Esto hace mas fácil el mantenimiento y entrega del contenido.

## Aprendizaje activo

_No hay aprendizaje activo disponible. [**Por favor, considere colaborar.**](/es/docs/MDN/Getting_started)_

## Inmersión más profunda

Recapitulando: para obtener una página web, como ya dijimos, tu navegador envía una solicitud al servidor web, que procede a buscar el archivo solicitado en su propio espacio de almacenamiento. Encontrado el archivo, el servidor lo lee, lo procesa según sea necesario y lo envía al navegador. Veamos esos pasos con más detalle.

### Alojamiento de archivos (Hosting)

Un servidor web primero debe almacenar los archivos del sitio web, es decir, todos los documentos HTML y sus medios relacionados, incluidas las imágenes, las hojas de estilo CSS, los archivos JavaScript, las fuentes y videos.

Técnicamente, puede alojar todos esos archivos en su propia computadora, pero es mucho más conveniente almacenarlos en un servidor web dedicado que:

- siempre está funcionando.
- siempre está conectado a internet.
- tiene la misma dirección IP todo el tiempo.
- es mantenido por un proveedor externo.

Por todas estas razones, encontrar un buen proveedor de alojamiento es una parte clave del desarrollo de su sitio web. Investigue a través de los diversos servicios que ofrecen las compañías y elija uno que se ajuste a sus necesidades y a su presupuesto (los servicios van desde los gratuitos hasta los miles de dólares al mes). Puede encontrar mas información [en este artículo](/es/Learn/How_much_does_it_cost#Hosting).

Una vez que configura una solución de alojamiento web, solo tiene que [cargar sus archivos en su servidor web](/es/docs/Learn/Upload_files_to_a_web_server).

### Comunicación a través de HTTP

En segundo lugar, un servidor web brinda soporte para HTTP (**H**yper**t**ext **T**ransfer **P**rotocol ó Protocolo de Transferencia de Hipertexto). Como su nombre lo indica, HTTP especifica cómo transferir hypertext (es decir, documentos web vinculados) entre dos computadoras.

Un _protocolo_ es un conjunto de reglas para la comunicación entre dos computadoras. HTTP es un protocolo textual, sin estado.

- Textual
  - : Todos los comandos son de texto plano y legible para ser leído por humanos.
- Sin estado
  - : Ni el servidor ni el cliente recuerdan las comunicaciones anteriores. Por ejemplo, al confiar solo en HTTP, un servidor no puede recordar la contraseña que ingresó ni el paso que está realizando en una transacción. Necesita un servidor de aplicaciones para tareas como esa. (Cubriremos ese tipo de tecnología en otros artículos).

HTTP proporciona reglas claras sobre cómo se comunican un cliente y un servidor. Cubriremos el propio HTTP en un [artículo técnico](/es/docs/Web/HTTP) más adelante. Por ahora, sólo sé consciente de estas cosas:

- Solo los clientes pueden hacer solicitudes HTTP a los servidores. Los servidores solo pueden responder a la solicitud HTTP de un cliente.
- Al solicitar un archivo a través de HTTP, los clientes deben proporcionar la URL del archivo.
- El servidor web debe responder a todas las solicitudes HTTP, al menos con un mensaje de error.

[![The MDN 404 page as an example of such error page](mdn-404.jpg)](/es/404) En un servidor web, el servidor HTTP es responsable de procesar y responder las solicitudes entrantes.

1. Al recibir una solicitud, un servidor HTTP primero verifica si la URL solicitada coincide con un archivo existente.
2. Si es así, el servidor web envía el contenido del archivo de nuevo al navegador. Si no, un servidor de aplicaciones construye el archivo necesario.
3. Si ninguno de los procesos es posible, el servidor web devuelve un mensaje de error al navegador, generalmente "404 Not Found". ( Ese error es tan común que muchos diseñadores web pasan bastante tiempo diseñando páginas de error 404.)

### Contenido Estático vs. Dinámico

En términos generales, un servidor puede entregar contenido estático o dinámico. "Estático" significa "servido como está". Los sitios web estáticos son los más fáciles de configurar, por lo que le sugerimos que convierta su primer sitio en un sitio estático.

"Dinámico" significa que el servidor procesa el contenido o incluso lo genera desde una base de datos. Esta solución proporciona más flexibilidad, pero se vuelve más difícil de manejar, lo que hace que sea mucho más complejo desarrollar el sitio web.

Tomemos por ejemplo la página que estás leyendo en este momento. En el servidor web que lo aloja, hay un servidor de aplicaciones que toma el contenido del artículo de una base de datos, lo formatea, lo coloca dentro de algunas plantillas HTML y le envía los resultados. En este caso, el servidor de aplicaciones se llama [Kuma](/es/docs/MDN/Kuma) y está desarrollado con Python (utilizando el framework [Django](https://www.djangoproject.com/)). El equipo de Mozilla creó Kuma para las necesidades específicas de MDN, pero hay muchas aplicaciones similares basadas en otras tecnologías.

Hay tantos servidores de aplicaciones que es resulta difícil sugerir uno en particular. Algunos servidores de aplicaciones se adaptan a categorías específicas de sitios web como blogs, wikis o tiendas electrónicas; otros, llamados CMS (Content Management Systems ó Sistemas de Gestión de Contenidos), son más genéricos. Si está desarrollando un sitio web dinámico, tómese el tiempo para elegir una herramienta que se adapte a sus necesidades. A menos que desee aprender algo de programación de servidores web (¡es un área emocionante!), no necesita crear su propio servidor de aplicaciones.

## Próximos pasos

Ahora que estás familiarizado con los servidores web, podrías:

- leer sobre [cuánto cuesta hacer algo en la web](/es/docs/Learn/How_much_does_it_cost)
- consultar otros artículos relacionados con[los diferentes software que puedes utilizar para crear un sitio web](/es/docs/Learn/What_software_do_I_need)
- pasar a algo práctico tipo: [¿cómo subir archivos al servidor?](/es/docs/Learn/Upload_files_to_a_web_server).
