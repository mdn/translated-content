---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
translation_of: Web/HTTP/Headers/X-Forwarded-For
---
<div>{{HTTPSidebar}}</div>

<p>La cabecera <span><code><strong>X-Forwarded-For</strong></code></span> (XFF) es un estándar de facto para identificar el origen de la dirección IP de un cliente conectado a un servidor web a través de un proxy HTTP o un balanceador de carga. Cuando se intercepta el tráfico entre cliente y servidores, los registros de los servidores de acceso contienen sólo la dirección IP del proxy o del balanceador de carga. Para ver la dirección IP original del cliente, se utiliza la cabecera <code>X-Forwarded-For</code>.</p>

<p>Esta cabecera se usa para la depuración, estadísticas, y la generación de contenido dependiente de la ubicación. De forma deliberada, expone información privada sensible como la dirección IP del cliente. Por lo tanto, debe tenerse en cuenta la privacidad del usuario a la hora de publicar esta cabecera.</p>

<p>Una versión estandarizada de esta cabecera es la cabecera HTTP {{HTTPHeader("Forwarded")}}.</p>

<p><code>X-Forwarded-For</code> es también una cabecera de correo electrónico que indica que el mismo fue reenviado desde otra cuenta.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">X-Forwarded-For: &lt;client&gt;, &lt;proxy1&gt;, &lt;proxy2&gt;
</pre>

<h2 id="Directivas">Directivas</h2>

<dl>
 <dt>&lt;cliente&gt;</dt>
 <dd>La dirección IP del cliente</dd>
 <dt>&lt;proxy1&gt;, &lt;proxy2&gt;</dt>
 <dd>Si una solicitud pasa por varios proxies, las direcciones IP de cada proxy se listan en forma sucesiva. Esto significa que la IP de más a la derecha es la IP del proxy más reciente, y la IP de más a la izquierda es la IP del cliente originador. </dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre>X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
</pre>

<p>Otras formas no estándar:</p>

<pre># Usado para algunos servicios de Google
X-ProxyUser-Ip: 203.0.113.19</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<p>No es parte de especificación actual alguna. La versión estandarizada de este cabezal es {{HTTPHeader("Forwarded")}}.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("http.headers.X-Forwarded-For")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Forwarded")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}}</li>
</ul>
