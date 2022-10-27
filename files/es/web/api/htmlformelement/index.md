---
title: form
slug: Web/API/HTMLFormElement
tags:
  - DOM
  - Referencia_DOM_de_Gecko
  - Todas_las_Categorías
translation_of: Web/API/HTMLFormElement
---
<div>{{APIRef("HTML DOM")}}</div>
<h3 id="Interfaz_del_elemento_formulario_de_HTML" name="Interfaz_del_elemento_formulario_de_HTML">Interfaz del elemento formulario de HTML</h3>

<p>Los elementos <code>FORM</code> comparten todas las propiedades y métodos de los otros elementos HTML descritos en el capítulo del <a href="es/DOM/element">elemento</a>. También tienen la interfaz especial <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-40002357">HTMLFormElement</a>.</p>

<p>Esta interfaz proporciona métodos para crear y modificar los elementos <code>FORM</code> usando el DOM. El siguiente ejemplo muestra como crear un nuevo formulario, como modificar sus atributos y enviarlo:</p>

<pre>// Crea un formulario
var f = document.createElement("form");

// Lo añade en el cuerpo ('body') del documento
document.body.appendChild(f);

// Añade los atributos de acción y método
f.action = "/cgi-bin/some.cgi";
f.method = "POST"

// Llama el método de enviar el formulario
f.submit();
</pre>

<p>Además, el siguiente documento HTML muestra como se puede extraer información de un formulario y cambiar algunos de sus atributos.</p>

<pre>&lt;title&gt;Ejemplo de formulario&lt;/title&gt;
&lt;script type="text/javascript"&gt;
  function getFormInfo() {
    var info;

    // Obtiene una referencia utilizando la colección de formularios
    var f = document.forms["formularioA"];
    info = "f.elements: " + f.elements + "\n"
         + "f.length: " + f.length + "\n"
         + "f.name: " + f.elements + "\n"
         + "f.acceptCharset: " + f.acceptCharset + "\n"
         + "f.action: " + f.action + "\n"
         + "f.enctype: " + f.enctype + "\n"
         + "f.encoding: " + f.encoding + "\n"
         + "f.method: " + f.method + "\n"
         + "f.target: " + f.target;
    document.forms["formularioA"].elements['tex'].value = info;
  }

  // Se pasa la referencia al formulario desde el
  // atributo al hacer clic ('onclick') del botón con la ayuda de este.formulario ('this.form')
  function setFormInfo(f) {
    f.method = "GET";
    f.action = "/cgi-bin/evil_executable.cgi";
    f.name   = "totally_new";
  }
&lt;/script&gt;

&lt;h1&gt;Ejemplo de formulario&lt;/h1&gt;

&lt;form name="formularioA" id="formularioA"
 action="/cgi-bin/test" method="POST"&gt;
 &lt;p&gt;Haga clic en "Info" para ver informaciones de este formulario.
    Haga clic en "Set" para cambiar los parámetros y otra vez en "Info" para ver los efectos&lt;/p&gt;
 &lt;p&gt;
  &lt;input type="button" value="Info"
   onclick="getFormInfo();"&gt;
  &lt;input type="button" value="Set"
   onclick="setFormInfo(this.form);"&gt;
  &lt;input type="reset" value="Reset"&gt;
  &lt;br&gt;
  &lt;textarea id="tex" style="height:15em; width:20em"&gt;
 &lt;/p&gt;
&lt;/form&gt;
</pre>

<h3 id="Propiedades" name="Propiedades">Propiedades</h3>

<dl>
 <dt><a href="es/DOM/form.elements">form.elements</a> (todos los elementos del formulario) </dt>
 <dd><code>.elements</code> devuelve una colección de todos los controles que hay en el formulario <code>FORM</code>.</dd>
 <dt><a href="es/DOM/form.length">form.length</a></dt>
 <dd><code>.length</code> devuelve la cantidad de controles que hay en el formulario</dd>
 <dt><a href="es/DOM/form.name">form.name</a></dt>
 <dd><code>.name</code> devuelve el nombre del formulario actual en forma de cadena.</dd>
 <dt><a href="es/DOM/form.acceptCharset">form.acceptCharset</a></dt>
 <dd><code>.acceptCharset</code> devuelve una lista del conjunto de caracteres soportados para el actual elemento <code>FORM</code>.</dd>
 <dt><a href="es/DOM/form.action">form.action</a></dt>
 <dd><code>.action</code> obtiene/configura la acción del elemento <code>FORM</code>.</dd>
 <dt><a href="es/DOM/form.enctype">form.enctype</a></dt>
 <dd><code>.enctype</code> gets/sets the content type of the <code>FORM</code> element.</dd>
 <dt><a href="es/DOM/form.encoding">form.encoding</a></dt>
 <dd><code>.encoding</code> gets/sets the content type of the <code>FORM</code> element.</dd>
 <dt><a href="es/DOM/form.method">form.method</a></dt>
 <dd><code>.method</code> obtiene/configura el método HTTP utilizado para enviar el formulario.</dd>
 <dt><a href="es/DOM/form.target">form.target</a></dt>
 <dd><code>.target</code> obtiene/configura el objetivo de la acción (i.e., the frame to render its output in).</dd>
</dl>

<h3 id="M.C3.A9todos" name="M.C3.A9todos">Métodos</h3>

<dl>
 <dt><a href="es/DOM/form.submit">form.submit</a></dt>
 <dd>submit() manda el formulario.</dd>
 <dt><a href="es/DOM/form.reset">form.reset</a></dt>
 <dd>reset() restaura el formulario, lo devuelve al estado inicial.</dd>
</dl>
