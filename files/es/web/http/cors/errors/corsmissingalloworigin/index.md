---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' missing'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
tags:
  - Cabeceras
  - Seguridad
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="Motivo">Motivo</h2>

<pre class="syntaxbox">Motivo: Hace falta la cabecera CORS 'Access-Control-Allow-Origin'</pre>

<h2 id="¿Qué_salió_mal">¿Qué salió mal?</h2>

<p>A la respuesta de la solicitud {{Glossary("CORS")}} le falta la requerida cabecera {{HTTPHeader("Access-Control-Allow-Origin")}}, la cual se utiliza para determinar si el recurso puede o no ser accedido por el contenido dentro del origen actual.</p>

<p>Si el servidor está bajo su control, agregue el origen del sitio solicitado al conjunto de dominios con acceso permitido agregándolo al valor de la cabecera <code>Access-Control-Allow-Origin</code>.</p>

<p>Por ejemplo, para permitir a un sitio como https://amazing.site acceder al recurso usando CORS, la cabecera deberia ser:</p>

<pre>Access-Control-Allow-Origin: https://amazing.site</pre>

<p>También puede configurar un sitio para permitirle el acceso desde cualquier otro sitio usando el comodín <code>"*"</code>. Solamente debería usar esto para APIs públicas. Las APIs privadas nunca deberían usar este comodín, en lugar de eso, se debería especificar un dominio o conjunto de dominios. Adicionalmente, el comodín solamente funciona para consultas con el atributo {{htmlattrxref("crossorigin")}}  establecido en <code>"anonymous"</code>.</p>

<pre>Access-Control-Allow-Origin: *</pre>

<div class="warning">
<p><strong>Advertencia:</strong> Utilizar el comodín para permitir que todos los sitios accedan a una API privada es una mala idea.</p>
</div>

<p>Para permitir que cualquier sitio realice peticiones CORS <em>sin </em>usar el comodín <code>*</code> (por ejemplo, para activar credenciales), su servidor deberá leer el valor la cabecera <code>Origin</code> de la petición y usar dicho valor para <code>Access-Control-Allow-Origin</code> y además declarar una cabecera <code>Vary: Origin</code> para indicar que algunas cabeceras están siendo dinámicamente declaradas dependiendo del origen.</p>

<p>El protocolo para administrar estas cabeceras depende de tu servidor web. Por ejemplo, en Apache, agrega una línea como la siguiente a la configuración del servidor (Con las secciones <code>&lt;Directory&gt;</code>, <code>&lt;Location&gt;</code>,<code> &lt;Files&gt;</code> o <code>&lt;VirtualHost&gt;</code> apropiadas). La configuración, suele encontrarse en un archivo <code>.conf</code> (<code>httpd.conf</code> y <code>apache.conf</code> son nombres comunes para este tipo de archivos), o en un archivo <code>.htaccess</code>.</p>

<pre>Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>Para Nginx, el comando para configurar esta cabecera es:</p>

<pre>add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>"</pre>

<h2 id="Vea_tambien">Vea tambien</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
