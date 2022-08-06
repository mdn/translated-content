---
title: Primeros Pasos
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
  - API
  - Avanzado
  - Todas_las_Categorías
  - XMLHttpRequest
translation_of: Web/Guide/AJAX/Getting_Started
original_slug: Web/Guide/AJAX/Primeros_Pasos
---
<p> </p>

<p>Este artículo es una guía básica sobre AJAX e incluye dos ejemplos.</p>

<h3 id=".C2.BFQu.C3.A9_es_AJAX.3F" name=".C2.BFQu.C3.A9_es_AJAX.3F">¿Qué es AJAX?</h3>

<p>AJAX (JavaScript Asíncrono y XML) es un término nuevo para describir dos capacidades de los navegadores que han estado presentes por años, pero que habían sido ignoradas por muchos desarrolladores Web, hasta hace poco que surgieron aplicaciones como Gmail, Google suggest y Google Maps.</p>

<p>Las dos capacidades en cuestión son:</p>

<ul>
 <li>La posibilidad de hacer peticiones al servidor sin tener que volver a cargar la página.</li>
 <li>La posibilidad de analizar y trabajar con documentos XML.</li>
</ul>

<h3 id="Primer_Paso_.E2.80.93_C.C3.B3mo_realizar_una_petici.C3.B3n_HTTP_al_servidor" name="Primer_Paso_.E2.80.93_C.C3.B3mo_realizar_una_petici.C3.B3n_HTTP_al_servidor">Primer Paso – Cómo realizar una petición HTTP al servidor</h3>

<p>Para realizar una petición HTTP usando JavaScript, es necesario crear una instancia de una clase que provea esta funcionalidad. Esta clase fue inicialmente introducida en Internet Explorer como un objeto ActiveX, llamado <code>XMLHTTP</code>. Después Mozilla, Safari y otros navegadores lo siguieron, implementando una clase <code>XMLHttpRequest</code> que soportaba los métodos y las propiedades del objeto ActiveX original.</p>

<p>Como resultado, para crear una instancia de la clase requerida que funcione en todos los navegadores, es necesario poner:</p>

<pre>if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    http_request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    http_request = new ActiveXObject("Microsoft.XMLHTTP");
}
</pre>

<p>(El código mostrado es una versión simplificada con fines ilustrativos. Para un ejemplo más realista ver el paso 3 de este artículo.)</p>

<p>Algunas versiones de los navegadores Mozilla no funcionan correctamente si la respuesta del servidor no tiene la cabecera mime de tipo XML. En ese caso es posible usar un método extra que sobreescriba la cabecera enviada por el servidor, en caso que no sea <code>text/xml</code>.</p>

<pre>http_request = new XMLHttpRequest();
http_request.overrideMimeType('text/xml');
</pre>

<p>El próximo paso es decidir qué se hará después de recibir la respuesta del servidor a la petición enviada. A estas alturas sólo es necesario decirle al objeto HTTPrequest qué función de JavaScript se encargará de procesar la respuesta. Para esto se asigna la propiedad <code>onreadystatechange</code> del objeto al nombre de la función de JavaScript que se va a utilizar:</p>

<p><code>http_request.onreadystatechange = nameOfTheFunction;</code></p>

<p>Es importante notar que no hay paréntesis después del nombre de la función y no se pasa ningún parámetro. También es posible definir la función en ese momento, y poner en seguida las acciones que procesarán la respuesta:</p>

<pre>http_request.onreadystatechange = function(){
    // procesar la respuesta
};
</pre>

<p>Después de especificar qué pasará al recibir la respuesta es necesario hacer la petición. Para esto se utilizan los métodos <code>open()</code> y <code>send()</code> de la clase HTTP request, como se muestra a continuación:</p>

<pre>http_request.open('GET', 'http://www.example.org/algun.archivo', true);
http_request.send();
</pre>

<ul>
 <li>El primer parámetro de la llamada a <code>open()</code> es el método HTTP request – GET, POST, HEAD o cualquier otro método que se quiera usar y sea aceptado por el servidor. El nombre del método se escribe en mayúsculas, sino algunos navegadores (como Firefox) podrían no procesar la petición. Para más información sobre los métodos HTTP request visitar <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">W3C specs</a></li>
 <li>El segundo parámetro es el URL de la página que se esta pidiendo. Por medida de seguridad no es posible llamar páginas en dominios de terceras personas. Se debe saber el dominio exacto de todas las páginas o se obtendrá un error de 'permiso denegado' al llamar open(). Una falla común es acceder al sitio por domain.tld e intentar llamar las páginas como www.domain.tld.</li>
 <li>El tercer parámetro establece si la petición es asíncrona. Si se define <code>TRUE</code>, la ejecución de la función de JavaScript continuará aún cuando la respuesta del servidor no haya llegado. Por esta capacidad es la A en AJAX.</li>
</ul>

<p>El parámetro en el método <code>send()</code>puede ser cualquier información que se quiera enviar al servidor si se usa POST para la petición. La información se debe enviar en forma de cadena, por ejemplo:</p>

<p><code>name=value&amp;anothername=othervalue&amp;so=on</code></p>

<p>Si se quiere enviar información de esta forma, es necesario cambiar el tipo MIME de la petición usando la siguiente línea:</p>

<pre>http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
</pre>

<p>De otro modo el servidor descartará la información.</p>

<h3 id="Segundo_Paso_.E2.80.93_Procesando_la_respuesta_del_servidor" name="Segundo_Paso_.E2.80.93_Procesando_la_respuesta_del_servidor">Segundo Paso – Procesando la respuesta del servidor</h3>

<p>Al enviar la petición HTTP es necesario indicar el nombre de la función JavaScript que procesará la respuesta.</p>

<p><code>http_request.onreadystatechange = nameOfTheFunction;</code></p>

<p>A continuación se verá lo que esta función realiza. En primer lugar necesita revisar el estado de la petición. Si el estado tiene el valor 4, significa que la respuesta completa del servidor ha sido recibida y es posible continuar procesándola.</p>

<pre>if (http_request.readyState == 4) {
    // todo va bien, respuesta recibida
} else {
    // aun no esta listo
}
</pre>

<p>La lista completa de valores para la propiedad <code>readyState</code> es:</p>

<ul>
 <li>0 (no inicializada)</li>
 <li>1 (leyendo)</li>
 <li>2 (leido)</li>
 <li>3 (interactiva)</li>
 <li>4 (completo)</li>
</ul>

<p>(<a class="external" href="http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/readystate_1.asp">Source</a>)</p>

<p>Ahora es necesario revisar el código de status de la respuesta HTTP. La lista completa de códigos aparece en el <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">sitio de la W3C</a>. Para el próposito de este artículo sólo es importante el código <code>200 OK</code>.</p>

<pre>if (http_request.status == 200) {
    // perfect!
} else {
    // hubo algún problema con la petición,
    // por ejemplo código de respuesta 404 (Archivo no encontrado)
    // o 500 (Internal Server Error)
}
</pre>

<p>Después de haber revisado el estado de la petición y el código de status de la respuesta, depende de uno hacer cualquier cosa con la información que el servidor ha entregado. Existen dos opciones para tener acceso a esa información:</p>

<ul>
 <li><code>http_request.responseText</code> – regresará la respuesta del servidor como una cadena de texto.</li>
 <li><code>http_request.responseXML</code> – regresará la respuesta del servidor como un objeto <code>XMLDocument</code> que se puede recorrer usando las funciones de JavaScript DOM.</li>
</ul>

<h3 id="Tercer_Paso_.E2.80.93_.22.C2.A1Ahora_todo_junto.21.22_-_Un_sencillo_ejemplo" name="Tercer_Paso_.E2.80.93_.22.C2.A1Ahora_todo_junto.21.22_-_Un_sencillo_ejemplo">Tercer Paso – "¡Ahora todo junto!" - Un sencillo ejemplo</h3>

<p>En este ejemplo se utilizará todo lo que se ha visto para hacer una petición HTTP. Se pedirá un documento HTML llamado <code>test.html</code>, que contiene el texto "Esto es una prueba." y después usaremos la función <code>alert()</code> con el contenido del archivo <code>test.html</code> .</p>

<pre>&lt;script type="text/javascript" language="javascript"&gt;

    var http_request = false;

    function makeRequest(url) {

        http_request = false;

        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            http_request = new XMLHttpRequest();
            if (http_request.overrideMimeType) {
                http_request.overrideMimeType('text/xml');
                // Ver nota sobre esta linea al final
            }
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!http_request) {
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
        http_request.onreadystatechange = alertContents;
        http_request.open('GET', url, true);
        http_request.send();

    }

    function alertContents() {

        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                alert(http_request.responseText);
            } else {
                alert('Hubo problemas con la petición.');
            }
        }

    }
&lt;/script&gt;
&lt;span
    style="cursor: pointer; text-decoration: underline"
    onclick="makeRequest('test.html')"&gt;
        Hacer una petición
&lt;/span&gt;
</pre>

<p>En este ejemplo:</p>

<ul>
 <li>El usuario presiona el vínculo "Hacer una petición" en el navegador;</li>
 <li>Esto llama la función <code>makeRequest()</code> que tiene como parámetro <code>test.html</code> que es un archivo HTML localizado en el mismo directorio;</li>
 <li>La petición es realizada y después (<code>onreadystatechange</code>) la ejecución pasa a <code>alertContents()</code>;</li>
 <li><code>alertContents()</code> verifica si la respuesta fue recibida y si es OK, si es así utiliza <code>alert()</code> con el contenido de <code>test.html</code>.</li>
</ul>

<p>Puedes probar el ejemplo <a class="external" href="http://www.w3clubs.com/mozdev/httprequest_test.html">aquí</a> y puedes ver el archivo de prueba <a class="external" href="http://www.w3clubs.com/mozdev/test.html">aquí</a>.</p>

<p><strong>Nota</strong>: La línea <code> http_request.overrideMimeType('text/xml');</code> arriba causaría problemas en la consola de Javascript de Firefox 1.5b, como esta descrito en <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=311724" rel="freelink">https://bugzilla.mozilla.org/show_bug.cgi?id=311724</a>, si la página llamada por XMLHttpRequest no es XML válido (por ejemplo, si es texto).</p>

<p>Si se obtiene Syntax Error o Not Well Formed Error en el navegador, y no se está intentando cargar una página XML con XMLHttpRequest, se puede eliminar esa línea del código.</p>

<h3 id="Cuarto_Paso_.E2.80.93_Trabajando_con_la_respuesta_XML" name="Cuarto_Paso_.E2.80.93_Trabajando_con_la_respuesta_XML">Cuarto Paso – Trabajando con la respuesta XML</h3>

<p>En el ejemplo anterior se utilizo la propiedad <code>reponseText</code> del objeto pedido para mostrar el contenido de <code>test.html</code> una vez que la respuesta HTTP había sido recibida. En éste se utilizará la propiedad <code>responseXML</code>.</p>

<p>Primero hay que crear un documento de XML válido. El documento (test.xml) contiene lo siguiente:</p>

<pre>&lt;?xml version="1.0" ?&gt;
&lt;root&gt;
    Esto es una prueba.
&lt;/root&gt;
</pre>

<p>Para que funcione el script solo es necesario cambiar la línea de petición por:</p>

<pre>...
onclick="makeRequest('test.xml')"&gt;
...
</pre>

<p>Y en <code>alertContents()</code> es necerario remplazar la línea donde aparece <code>alert(http_request.responseText);</code> por:</p>

<pre>var xmldoc = http_request.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
</pre>

<p>De esta manera se utiliza el objeto <code>XMLDocument</code> dado por <code>responseXML</code> y se usan métodos del DOM para acceder a la información contenida en el documento XML. El archivo <code>test.xml</code> se encuentra <a class="external" href="http://www.w3clubs.com/mozdev/test.xml">aquí</a> y el script actualizado está <a class="external" href="http://www.w3clubs.com/mozdev/httprequest_test_xml.html">aquí</a>.</p>

<p>Para más información sobre los metodos del DOM, visita los documentos de la <a class="external" href="http://www.mozilla.org/docs/dom/">implementación del DOM de Mozilla</a>.</p>

<div class="noinclude"> </div>

<p>{{ languages( { "ca": "ca/AJAX/Primers_passos", "de": "de/AJAX/Getting_Started", "en": "en/AJAX/Getting_Started", "fr": "fr/AJAX/Premiers_pas", "it": "it/AJAX/Iniziare", "ja": "ja/AJAX/Getting_Started", "ko": "ko/AJAX/Getting_Started", "pl": "pl/AJAX/Na_pocz\u0105tek", "pt": "pt/AJAX/Como_come\u00e7ar", "ru": "ru/AJAX/\u0421_\u0447\u0435\u0433\u043e_\u043d\u0430\u0447\u0430\u0442\u044c", "zh-cn": "cn/AJAX/\u5f00\u59cb", "zh-tw": "zh_tw/AJAX/\u4e0a\u624b\u7bc7" } ) }}</p>
