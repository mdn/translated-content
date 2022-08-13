---
title: Autenticación HTTP
slug: Web/HTTP/Authentication
tags:
  - Acceso de control
  - Autenticación
  - Guía
  - HTTP
  - HTTP Basic
translation_of: Web/HTTP/Authentication
---
<p>{{HTTPSidebar}}</p>

<p>HTTP nos brinda un marco general para el control de acceso y de autenticación. El esquema de autenticación HTTP más común es la autenticación "Basic". Esta página presenta el framework general de autenticación HTTP y muestra cómo restringir el acceso a tu servidor con la autenticación HTTP <em>Basic</em>.</p>

<h2 id="El_marco_general_de_autenticación_HTTP">El marco general de autenticación HTTP</h2>

<p>{{RFC("7235")}} define el marco de autenticación HTTP que puede ser usado por un servidor para revisar la solicitud de un cliente y por un cliente para proveer información de autenticación. El flujo de la revisión y la respuesta funciona de la siguiente manera: El servidor responde al cliente con un estado de respuesta {{HTTPStatus("401")}} (Unauthorized) y devuelve al cliente información sobre cómo autorizarse con un encabezado de respuesta {{HTTPHeader("WWW-Authenticate")}} que contiene al menos una revisión. Un cliente que quiera autenticarse con un servidor puede hacerlo incluyendo un encabezado de solicitud {{HTTPHeader("Authorization")}}  con sus credenciales. Normalmente un cliente hará una solicitud de contraseña al usuario y luego enviará la solicitud incluyendo el encabezado <code>Authorization</code> correcto al servidor.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14689/HTTPAuth.png" style="height: 335px; width: 710px;"></p>

<p>En el caso de una autenticación "Basic" como la mostrada en la figura, el intercambio se <strong>debe</strong> realizar sobre una conexión HTTPS (TLS) para que sea seguro.</p>

<h3 id="Autenticación_Proxy_Proxy_Authentication">Autenticación Proxy (Proxy Authentication)</h3>

<p>El mismo mecanismo de desafío y respuesta puede ser usada para <em>autenticación por proxy. </em>En este caso, es el proxy el que hace de intermediario y requiere la autenticación. Ambas autenticaciones (autenticación del recurso y autenticación en el proxy) pueden coexistir juntas, pero entonces es necesario un conjunto de cabeceras y códigos de estado diferentes. En el caso de los proxys, el código de estado para requerir autenticación es {{HTTPStatus("407")}}  (Proxy Authentication Required), la cabecera de respuesta {{HTTPHeader("Proxy-Authenticate")}} contiene al menos un requerimiento aplicable en el proxy, y la cabecera de petición {{HTTPHeader("Proxy-Authorization")}} es usada para proveer la credencial en el servidor proxy.</p>

<h3 id="Prohibición_de_Acceso_Access_Forbbiden">Prohibición de Acceso (Access Forbbiden)</h3>

<p>Si el servidor proxy recibe unas credenciales válidas que no son adecuadas para acceder a un determinado recurso, el servidor respondera con el código de estado {{HTTPStatus("403")}} <code>Forbidden.</code>Diferente al código de estado {{HTTPStatus("401")}} <code>Unauthorized</code> o {{HTTPStatus("407")}} <code>Proxy Authentication Required, </code>donde la autenticación es imposible para ese usuario.</p>

<h3 id="Cabeceras_WWW-Authenticate_y_Proxy-Authenticate">Cabeceras <code>WWW-Authenticate</code> y <code>Proxy-Authenticate</code> </h3>

<p>Las cabeceras de respuesta {{HTTPHeader("WWW-Authenticate")}} y {{HTTPHeader("Proxy-Authenticate")}} definen el método de autenticación que debe ser usado para obtener acceso a un recurso. Ellas especifican que esquema de autenticación debe ser usado para que el cliente que quiera autenticarse sepa como hacerlo. La síntaxis para estas cabeceras es la siguiente:</p>

<pre>WWW-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
Proxy-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
</pre>

<p>En el ejemplo, <code>&lt;type&gt; </code>es el esquema de autenticación ("Basic" es el esquema de autenticación mas usado e introducido en <a href="/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme">esta página mas abajo</a>)<font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">. </span></font>La palabra <em>realm</em> es usada para describir el área que protegida o para indicar el alance de la protección. Puede ser un mensaje como "Access to the staging site" o algo similar, pero que sea explicativo para que el usuario sepa que espacio intenta acceder.</p>



<h3 id="Cabeceras_Authorization_y_Proxy-Authorization"><code><font face="x-locale-heading-primary, zillaslab, Palatino, Palatino Linotype, x-locale-heading-secondary, serif"><span style="background-color: #333333;">Cabeceras </span></font>Authorization</code> y <code>Proxy-Authorization</code></h3>

<p>La cabecera de consulta {{HTTPHeader("Authorization")}} y {{HTTPHeader("Proxy-Authorization")}} contiene las credenciales para autenticar a un user agent con un servidor (proxy). Aquí, el tipo es necesario necesario siguiendo las credenciales que pueden estar codificadas o encriptadas dependiendo de que tipo de esquema de autenticación se esté usando:</p>

<pre>Authorization: &lt;type&gt; &lt;credentials&gt;
Proxy-Authorization: &lt;type&gt; &lt;credentials&gt;
</pre>

<h3 id="Esquemas_de_autenticación">Esquemas de autenticación</h3>

<p>El marco general de autenticación HTTP es usado por varios esquemas de autenticación. Los esquemas pueden diferenciarse por la dureza en la seguridad y en su disponibilidad en software de clientes o servidores.</p>

<p>El esquema de autenticaón mas común es "Basic", que es introducido con mas detalle abajo. IANA mantiene una <a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">lista de esquemas de autenticación</a>, pero existen otros esquemas ofrecidos por proveedores de servicios, como Amazon AWS. Los esquemas de autenticación incluídas:</p>

<ul>
 <li><strong>Basic</strong> (ver {{rfc(7617)}}, credenciales codificadas en base64 . Ver mas abajo para mas información.),</li>
 <li><strong>Bearer</strong> (ver {{rfc(6750)}}, bearer tokens de acceso en recursos protegidos mediante OAuth 2.0),</li>
 <li><strong>Digest</strong> (ver {{rfc(7616)}}, has MD5 solo soportado en Firefox, ver {{bug(472823)}} para encriptado SHA),</li>
 <li><strong>HOBA</strong> (ver {{rfc(7486)}} (borrador), <strong>H</strong>TTP <strong>O</strong>rigin-<strong>B</strong>ound <strong>A</strong>uthentication, basado en firma digital),</li>
 <li><strong>Mutual</strong> (ver <a href="https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11">draft-ietf-httpauth-mutual</a>),</li>
 <li>
  <p><strong>AWS4-HMAC-SHA256</strong> (ver <a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">AWS docs</a>).</p>
 </li>
</ul>

<h2 id="Esquema_de_autenticación_Basic">Esquema de autenticación Basic</h2>

<p>El esquema de autenticación HTTP "Basic" está definido en {{rfc(7617)}}, que transmite las credenciales como un par usuario/contraseña codificado usando base64.</p>

<h3 id="Seguridad_de_la_autenticación_básica">Seguridad de la autenticación básica</h3>

<p>Como el usuario y la contraseña son pasados a través de la red como texto plano (éste es codificado en base64, pero base64 puede ser decodificado), el esquema de autenticación básico no es seguro. HTTPS / TLS debe ser usado junto a la autenticación básica. Sin éstas mejoras de seguridad, la autenticación básica no debe ser usada para proteger información sensible o valiosa.</p>

<h3 id="Restringiendo_acceso_con_Apache_y_autenticación_básica">Restringiendo acceso con Apache y autenticación básica</h3>

<p>Para proteger por contraseña un directorio en un servidor Apache, necesitas usar los ficheros .htaccess y .htpasswd.</p>

<p>El fichero .htaccess normalmente tiene esta forma:</p>

<pre>AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user</pre>

<p>El fichero .htaccess hace una referencia al fichero .htpasswd, que contiene en cada línea un nombre de usuario y su respectiva contraseña separadas por dos puntos (":"). En este ejemplo no puedes ver la contraseña porque está <a href="https://httpd.apache.org/docs/2.4/misc/password_encryptions.html">encriptada </a>(utilizando md5 en este caso). Además, puedes nombrar el fichero .htpasswd de forma diferente si tu quieres, pero teniendo en cuenta que no debería ser accesible por nadie. (Apache está configurado normalmente para prevenir el acceso a ficheros .ht*).</p>

<pre>aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
</pre>

<h3 id="Restringiendo_acceso_con_nginx_y_autenticación_básica">Restringiendo acceso con nginx y autenticación básica</h3>

<p>En el caso de nginx necesitarás especificar la localización a proteger y usar la directiva <strong>auth_basic</strong>, que provee el nombre del área protegida. La directiva <strong>auth_basic_user_file </strong>apunta al fichero .htpasswd que contiene las credenciales de usuario encriptadas, como en el ejemplo de Apache de mas arriba.</p>

<pre>location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}</pre>

<h3 id="Acceso_usando_credenciales_en_la_URL">Acceso usando credenciales en la URL</h3>

<p>Muchos clientes también le permiten evitar el mensaje de inicio de sesión enviando el usuario y la contraseña codificados por la URL.</p>

<pre>https://username:password@www.example.com/</pre>

<p><strong>El uso de estas URLs está obsoleto.</strong> En Chrome, la cadena usuario:contraseña@ dentro de URLs incluso es <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7">cortada </a>por razones de seguridad. En Firefox se comprueba si el sitio actualmente requiere una autenticación, y de no ser así, Firefox avisará al usuario con un mensaje "Está a punto de iniciar sesión en el sitiio "www.example.com" con el usuario "username", pero el sitiio web no requiere autenticación. Puede ser un intento de engañarlo.".</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
