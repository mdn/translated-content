---
title: Usando Objetos FormData
slug: Web/API/FormData/Using_FormData_Objects
translation_of: Web/API/FormData/Using_FormData_Objects
translation_of_original: Web/Guide/Using_FormData_Objects
original_slug: Web/Guide/Usando_Objetos_FormData
---
<p>Los objetos <code><a href="/es/docs/XMLHttpRequest/FormData" title="en/DOM/XMLHttpRequest/FormData">FormData</a> </code>le permiten compilar un conjunto de pares clave/valor para enviar mediante <code>XMLHttpRequest</code>. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados. Los datos transmitidos estarán en el mismo formato que usa el método <code>submit() </code>del formulario para enviar los datos si el tipo de codificación del formulario se establece en "multipart/form-data".</p>

<h2 id="Creación_de_un_objeto_FormData_desde_cero">Creación de un objeto FormData desde cero</h2>

<p>Usted mismo puede construir un objeto <code>FormData</code> instanciándolo y después añadiendo campos a la instancia usando su método  <a href="/en/DOM/XMLHttpRequest/FormData#append()" title="en/XMLHttpRequest/FormData#append()"><code>append()</code></a> , tal y como se muestra:</p>

<pre class="brush: js">var formData = new FormData();

<span style="line-height: normal;">formData</span>.append("username", "Groucho");
<span style="line-height: normal;">formData</span>.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

// HTML file input user's choice...
<span style="line-height: normal;">formData</span>.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object...
var content = '&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;'; // the body of the new file...
var blob = new Blob([<span style="line-height: normal;">content</span><span style="line-height: normal;">], { type: "text/xml"});</span>

formData.append("webmasterfile", <span style="line-height: normal;">blob</span><span style="line-height: normal;">);</span>

var request = new XMLHttpRequest();
<span style="line-height: normal;">request</span>.open("POST", "http://foo.com/submitform.php");
<span style="line-height: normal;">request</span>.send(formData);
</pre>

<div class="note"><strong>Nota:</strong> Los campos "userfile" y "webmasterfile" contienen ambos un archivo. El número asignado al campo "accountnum" es inmediatamente convertido a string por el método <a href="/en/DOM/XMLHttpRequest/FormData#append()" title="en/XMLHttpRequest/FormData#append()"><code>FormData.append()</code></a> (el valor del campo puede ser un {{ domxref("Blob") }}, {{ domxref("File") }}, o una cadena de texto; <strong>si el valor no es ni un Blob, ni un File, será convertido a un string</strong>).</div>

<p>Este ejemplo construye una instancia de <code>FormData</code> que almacenará los valores de los campos "username", "accountnum", "userfile" y "webmasterfile", entonces usará el método <a href="/en/DOM/XMLHttpRequest#send()" title="en/XMLHttpRequest#send()"><code>send()</code></a> de <code>XMLHttpRequest</code> para enviar los datos del formulario. El campo "webmasterfile" es un <a href="/en/DOM/Blob" title="en/DOM/Blob"><code>Blob</code></a>. Un objeto <a href="/en/DOM/Blob" title="en/DOM/Blob"><code>Blob</code></a> representa un objeto de tipo similar a un fichero que es inalterable y que almacenará datos en formato raw. Los Blobs representan datos que no necesariamente tendrán un formato Javascript nativo. La interfaz {{ domxref("File") }} está basada en <a href="/en/DOM/Blob" title="en/DOM/Blob"><code>Blob</code></a>, y hereda su funcionalidad y la amplía para dar soporte a archivos que estén en el sistema del usuario. Para construir un <code><a href="/en/DOM/Blob" title="en/DOM/Blob">Blob</a></code>, puede invocar <a href="/en/DOM/Blob#Constructor" title="en/DOM/Blob#Constructor"><code>al constructor del objeto Blob</code></a>.</p>

<h2 id="Recuperando_un_objeto_FormData_de_un_formulario_HTML">Recuperando un objeto FormData de un formulario HTML </h2>

<p>Para construir un objeto <code>FormData</code> que contenga los datos de un {{ HTMLElement("form") }} existente, especifique ese elemento form cuando cree el objeto <code>FormData</code>:</p>

<pre class="brush: js">var <span style="line-height: normal;">formData</span><span style="line-height: normal;"> = new FormData(someFormElement);</span>
</pre>

<p>Por ejemplo:</p>

<pre class="brush: js">var formElement = document.getElementById("myFormElement");
var request = new XMLHttpRequest();
<span style="line-height: normal;">request</span>.open("POST", "submitform.php");
<span style="line-height: normal;">request</span>.send(new FormData(formElement));
</pre>

<p>También puede añadir datos adicionales al objeto <code>FormData</code> antes de enviarlo. Así:</p>

<pre class="brush: js">var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
formData.append("serialnumber", serialNumber++);
<span style="line-height: normal;">request</span>.send(formData);</pre>

<p>Esto le permite aumentar los datos del formulario antes de enviarlos para incluir información adicional que no necesariamente debiera ser editable por el usuario en el formulario.</p>

<h2 id="Enviando_archivos_usando_objetos_FormData">Enviando archivos usando objetos FormData</h2>

<p>También puede enviar archivos usando <code>FormData</code>. Simplemente incluye un elemento {{ HTMLElement("input") }} de tipo {{ domxref("File") }}:</p>

<pre class="brush: html">&lt;form enctype="multipart/form-data" method="post" name="fileinfo"&gt;
  &lt;label&gt;Your email address:&lt;/label&gt;
  &lt;input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /&gt;&lt;br /&gt;
  &lt;label&gt;Custom file label:&lt;/label&gt;
  &lt;input type="text" name="filelabel" size="12" maxlength="32" /&gt;&lt;br /&gt;
  &lt;label&gt;File to stash:&lt;/label&gt;
  &lt;input type="file" name="file" required /&gt;
  &lt;input type="submit" value="Stash the file!" /&gt;
&lt;/form&gt;
&lt;div id="output"&gt;&lt;/div&gt;
</pre>

<p>Luego puede enviarlo usando código como el siguiente:</p>

<pre class="brush: js">var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var
    oOutput = document.getElementById("output"),
    oData = new FormData(document.forms.namedItem("fileinfo"));

  oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred uploading your file.&lt;br \/&gt;";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
</pre>

<div class="note">
<p><strong>Nota</strong>: el método especificado en el formulario será usado por encima del método utilizado en en la llamada a open().</p>
</div>

<p>También puede añadir un {{ domxref("File") }} o un {{ domxref("Blob") }} directamente al objeto {{ domxref("XMLHttpRequest/FormData", "FormData") }} de la siguiente manera:</p>

<pre class="brush: js">data.append("myfile", myBlob, "filename.txt");
</pre>

<p>Cuando se usa el método <code>append</code> es posible usar, de manera opcional, un tercer parámetro para pasarle un nombre de fichero dentro de la cabecera <code>Content-Disposition </code>que será enviada al servidor. Cuando no se especifica (o el parámetro no es soportado), el nombre "blob" es el que será utilizado.</p>

<p>Además, puede usar FormData con jQuery si asigna las opciones correctas:</p>

<pre class="brush: js">var fd = new FormData(document.getElementById("fileinfo"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false,  // tell jQuery not to process the data
  contentType: false   // tell jQuery not to set contentType
});
</pre>

<h2 id="Envío_de_formularios_y_carga_de_archivos_vía_AJAX_sin_objetos_FormData">Envío de formularios y carga de archivos vía AJAX <em>sin</em>  objetos <code style="font-size: 30px; font-weight: 700;">FormData</code></h2>

<p>Si quiere saber cómo serializar y enviar vía <a href="/en-US/docs/AJAX" title="/en-US/docs/AJAX">AJAX</a> un formulario <em>sin </em>utilizar objetos FormData, por favor leer <a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files" title="/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files">este párrafo</a> .</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li><a href="/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest" title="/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest">Usando XMLHttpRequest</a></li>
 <li><a href="/en-US/docs/DOM/HTMLFormElement" title="/en-US/docs/DOM/HTMLFormElement"><code>HTMLFormElement</code></a></li>
 <li><a href="/en-US/docs/DOM/Blob" title="/en-US/docs/DOM/Blob"><code>Blob</code></a></li>
 <li><a href="/en-US/docs/JavaScript/Typed_arrays" title="/en-US/docs/JavaScript/Typed_arrays">Typed Arrays</a></li>
</ul>
