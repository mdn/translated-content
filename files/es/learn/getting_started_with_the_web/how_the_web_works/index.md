---
title: Cómo funciona la web
slug: Learn/Getting_started_with_the_web/How_the_Web_works
tags:
  - Cliente
  - DNS
  - HTTP
  - IP
  - Infraestructura
  - Internet
  - Principiante
  - Protocolos
  - Servidor
  - TCP
  - Web
translation_of: Learn/Getting_started_with_the_web/How_the_Web_works
original_slug: Learn/Getting_started_with_the_web/Cómo_funciona_la_Web
---
<div>{{LearnSidebar()}}</div>

<div>{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}</div>

<div class="summary">
<p><em>Cómo funciona la web</em> proporciona una vista simplificada de lo que sucede cuando ves una página web en un navegador web de tu computador o teléfono.</p>
</div>

<p>Esta teoría no es esencial para escribir código web a corto plazo, pero en poco tiempo empezarás a beneficiarte realmente al entender lo que está sucediendo en el fondo.</p>

<h2 id="Los_clientes_y_servidores">Los clientes y servidores</h2>

<p>Las computadoras conectadas a la web se llaman <strong>clientes</strong> y <strong>servidores</strong>. Un diagrama simplificado de cómo interactúan se vería así:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/17299/Cliente-Servidor.png" style="height: 123px; width: 336px;"></p>

<ul>
 <li>Los clientes son dispositivos de los usuarios conectados a Internet (por ejemplo, tu ordenador conectado a la red Wi-Fi o el teléfono conectado a la red de telefonía móvil) y el software que se encuentra disponible y permite acceder a Internet en dichos dispositivos (normalmente, un navegador web como Firefox o Chrome).</li>
 <li>Los servidores son computadores que almacenan páginas web, sitios o aplicaciones. Cuando un dispositivo cliente quiere acceder a una página web, una copia de la página web se descarga desde el servidor en el equipo cliente y se muestra en el navegador web del usuario.</li>
</ul>

<h2 id="Las_otras_partes_de_la_caja_de_herramientas">Las otras partes de la caja de herramientas</h2>

<p>El cliente y el servidor que describimos anteriormente, no cuentan toda la historia. Hay muchas otras partes involucradas y vamos a describirlas a continuación.</p>

<p>Por ahora, imaginemos que la web es un camino. En un extremo de la carretera, está el cliente, que es como tu casa. En el extremo opuesto del camino, está el servidor, que es una tienda en la que deseas comprar algo.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9749/road.jpg" style="display: block; height: 427px; margin: 0px auto; width: 640px;"></p>

<p>Además del cliente y el servidor, también tenemos que saludar a:</p>

<ul>
 <li><strong>Tu conexión a Internet</strong>: permite enviar y recibir datos en la web. Básicamente es el recorrido entre tu casa y la tienda.</li>
 <li><strong>TCP/IP</strong>: <strong>Protocolo de Control de Transmisión</strong> y <strong>Protocolo de Internet</strong>, son los protocolos de comunicación que definen cómo deben viajar los datos a través de la web. Esto es, los medios de transporte que te permiten hacer un pedido, ir a la tienda y comprar los productos. En nuestro ejemplo, podría ser un coche, una bicicleta o tus propios pies.</li>
 <li><strong>DNS: </strong>los servidores del <strong>Sistema de Nombres de Dominio</strong> (DNS, por sus siglas en inglés), son como una libreta de direcciones de sitios web. Cuando escribes una dirección web en el navegador, el navegador busca los DNS antes de recuperar el sitio web. El navegador necesita averiguar en qué servidor vive el sitio web y así enviar los mensajes HTTP al lugar correcto (ver más abajo). Esto es como buscar la dirección de la tienda para que puedas llegar a ella.</li>
 <li><strong>HTTP: </strong><span class="st">el <strong>Protocolo de Transferencia de Hipertexto</strong></span> es un protocolo de aplicación que define un idioma para que los clientes y servidores se puedan comunicar. Esto es como el idioma que utilizas para ordenar tus compras.</li>
 <li><strong>Archivos componentes</strong>: un sitio web se compone de muchos archivos diferentes, que son como las diferentes partes de los productos que comprarás en la tienda. Estos archivos se dividen en dos tipos principales:
  <ul>
   <li><strong>Archivos de código</strong>: los sitios web se construyen principalmente con HTML, CSS y JavaScript, aunque te encontrarás con otras tecnologías más adelante.</li>
   <li><strong>Recursos: </strong>este es un nombre colectivo para el resto de materiales que conforman un sitio web, como imágenes, música, video, documentos de Word, archivos PDF, etc.</li>
  </ul>
 </li>
</ul>

<h2 id="Entonces_¿qué_sucede_exactamente">Entonces, ¿qué sucede exactamente?</h2>

<p>Cuando escribes una dirección web en el navegador (usando nuestra analogía para ir a la tienda):</p>

<ol>
 <li>El navegador va al servidor DNS y encuentra la dirección real del servidor donde el sitio web vive (encontrar la dirección de la tienda).</li>
 <li>El navegador envía un mensaje de petición HTTP al servidor, pidiéndole que envíe una copia de la página web para el cliente (ir a la tienda y hacer un pedido). Este mensaje y todos los datos enviados entre el cliente y el servidor, se envían a través de tu conexión a Internet usando TCP/IP.</li>
 <li>Siempre que el servidor apruebe la solicitud del cliente, el servidor enviará al cliente un mensaje «200 OK», que significa, «¡por supuesto que puedes ver ese sitio web! Aquí está.», y comenzará a enviar los archivos de la página web al navegador como una serie de pequeños trozos llamados <em>paquetes de datos</em> (la tienda te entrega tus productos y los llevas de regreso a casa).</li>
 <li>El navegador reúne los pequeños trozos, forma un sitio web completo y te lo muestra (llegas a casa con tus nuevas compras).</li>
</ol>

<h2 id="Explicación_de_los_DNS">Explicación de los DNS</h2>

<p>Las direcciones webs reales no son las agradables y fácilmente recordables secuencias que tecleas en la barra de direcciones para encontrar tus sitios webs favoritos. En realidad, se trata de secuencias de números, algo como 63.245.217.105.</p>

<p>Lo anterior se llama <a href="/es/docs/Glossary/IP_Address">dirección IP</a> y representa un lugar único en la web. Sin embargo, no es muy fácil de recordar, ¿verdad? Por eso se inventaron los servidores de nombres de dominio. Estos son servidores especiales que hacen coincidir una dirección web tecleada desde tu navegador («mozilla.org», por ejemplo) con la dirección real del sitio web (IP).</p>

<p>Los sitios webs se pueden acceder directamente a través de sus direcciones IP. Intenta acceder a la página web de Mozilla escribiendo <strong><code>63.245.217.105</code></strong> en la barra de dirección de una nueva pestaña en tu navegador. Puedes encontrar la dirección IP de un sitio web escribiendo su dominio en una herramienta como <a href="https://www.nslookup.io/website-to-ip-lookup/">DNS lookup</a>.</p>

<p><img alt="Un nombre de dominio es más que otra forma de una dirección IP" src="https://mdn.mozillademos.org/files/8405/dns-ip.png" style="height: 160px; width: 330px;"></p>

<h2 id="Explicación_de_los_paquetes">Explicación de los paquetes</h2>

<p>Anteriormente hemos utilizado el término <em><strong>paquetes</strong></em> para describir el formato en que los datos se envían desde el servidor al cliente. ¿Qué significa esto? Básicamente, que los datos se envían a través de la web como miles de trozos pequeños, permitiendo que muchos usuarios pueden descargar la misma página web al mismo tiempo. Si los sitios web fueran enviados como grandes trozos, sólo un usuario podría descargarlos a la vez, lo que volvería a la web muy ineficiente y poco divertida.</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/es/docs/Learn/Common_questions/How_does_the_Internet_work">¿Cómo funciona Internet</a></li>
 <li><a href="https://dev.opera.com/articles/http-basic-introduction/">HTTP: Un protocolo de nivel de aplicación </a>(en inglés)</li>
 <li><a href="https://dev.opera.com/articles/http-lets-get-it-on/">HTTP: Trabajemos con él</a> (en inglés)</li>
 <li><a href="https://dev.opera.com/articles/http-response-codes/">Códigos de respuesta: HTTP</a>  (en inglés)</li>
</ul>

<h2 id="Crédito">Crédito</h2>

<p>Foto de la calle: Street Composing, por <a href="https://www.flickr.com/photos/kdigga/">Kevin </a>D.</p>

<p>{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}</p>
