---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
tags:
  - DOM
  - Referencia_DOM_de_Gecko
  - Todas_las_Categorías
  - para_revisar
translation_of: Web/API/HTMLStyleElement
---
<div>
<div>{{APIRef("HTML DOM")}}</div>
</div>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Vea las siguientes páginas para información sobre alguno de los objetos utilizados para manipular propiedades CSS especificadas utilizando el DOM:</p>

<ul>
 <li><a href="/Es/DOM/Element.style" title="es/DOM/element.style">Objeto DOM element.style</a></li>
 <li><a href="/Es/DOM/Stylesheet" title="es/DOM/stylesheet">Objeto DOM stylesheet</a></li>
 <li><a href="/Es/DOM/CssRule" title="es/DOM/cssRule">Objeto DOM cssRule</a></li>
 <li><a href="/Es/DOM/CSS" title="es/DOM/CSS">Lista de Propiedades DOM CSS</a></li>
</ul>

<h3 id="Material_que_se_mover.C3.A1_a_otras_p.C3.A1ginas" name="Material_que_se_mover.C3.A1_a_otras_p.C3.A1ginas">Material que se moverá a otras páginas</h3>

<p>El objeto básico <code>style</code>, presenta los estilos definidos para el DOM en su especificación de nivel 2. Los estilos se definen mediante <code>las interfaces StyleSheet </code>y <code>CSSStyleSheet</code>. Estas interfaces contienen  miembros tales como <code>insertRule</code>, <code>selectorText</code>, y <code>parentStyleSheet</code> que permiten acceder y manipular las reglas de estilo individuales de que se compone una hoja de estilos CSS.</p>

<p>Para obtener los objetos <code>style </code>de un <code>document</code>, podemos usar la propiedad <code>document.styleSheets</code> y llegar a los distintos objetos por su índice (por ejemplo: <code>document.styleSheets{{ mediawiki.external(0) }}</code> es la primer stylesheet definida en el documento, etc.). Aunque hay varias formas y sintaxis para expresar una stylsheet para un documento, Netscape implementa exclusivamente, CSS, de manera que el objeto <code>style </code>obtenido por este método, es a la vez StyleSheet y CSSStyleSheet.</p>

<pre class="eval">var ss = document.styleSheets[1];
ss.cssRules[0].style.backgroundColor="blue";
</pre>

<p>La lista de propiedades disponibles en el DOM se encuentra en la página: <a href="/Es/DOM/CSS" title="es/DOM/CSS">DOM CSS Properties List</a>.</p>

<p>El elemento propiedad <a href="/es/DOM/style" title="es/DOM/style">style</a> puede ser usado también para leer o establecer el estilo de un elemento. Sin embargo, esta propiedad solo devuelve atributos de estilo que han sido establecidos in-line (por ejemplo: &lt;td style="background-color: lightblue"&gt; devuelve la cadena "background-color: lightblue" o directamente para ese elemento usando element.style.propertyName, aún si hay otros estilos definidos para ese elemento en un stylesheet).</p>

<p>De igual manera, cuando establecemos esa propiedad en un elemento, sobreescribimos y borramos cualquier estilo que hubiera sido fijado en alguna otra parte para la propiedad particular de ese elemento que estamos estableciendo. Por ejemplo, estableciendo la propiedad border sobreescribimos cualquier asignación que se establezca en la sección principal o en una hoja de estilo externa, sobre la propiedad border del elemento. Sin embargo, esto no afectará ninguna otra declaración de propiedad que se haga para el estilo del elemento, tales como padding o margin o font-size, por ejemplo.</p>

<p>Para cambiar el estilo de un elemento en particular, podemos adaptar el siguiente ejemplo para el elemento al que quieres cambiar su estilo/s.</p>

<pre>&lt;html&gt;
&lt;head&gt;
&lt;title&gt;ejemplo simple de estilo&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function alterStyle(elem) {
  elem.style.background = 'green';
}

function resetStyle(elemId) {
  elem = document.getElementById(elemId);
  elem.style.background = 'white';
}
&lt;/script&gt;

&lt;style type="text/css"&gt;
#p1 {
 border: solid blue 2px;
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;!-- pasar la referencia al objeto del elemento, como parámetro 'this'. --&gt;
&lt;p id="p1" onclick="alterStyle(this)";&gt;
 Haz clic aquí para cambiar el color de fondo. &lt;/p&gt;

&lt;!-- pasar el identificador 'pl' de otro elemento a modificar. --&gt;
&lt;button onclick="resetStyle('p1');"&gt;Volver al color de fondo original&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>El método <code>getComputedStyle()</code> en el objeto <code>document.defaultView</code> devuelve todos los estilos que han sido asignados al elemento. Para una explicación del uso de este método, consulta el capítulo de ejemplos en: <a href="/en/Gecko_DOM_Reference/Examples#Example_6:_getComputedStyle" title="en/Gecko_DOM_Reference/Examples#Example_6:_getComputedStyle">Example 6: getComputedStyle</a> (en).</p>

<h4 id="El_objeto_estilo_.28style.29_de_DOM" name="El_objeto_estilo_.28style.29_de_DOM">El objeto estilo (<code>style</code>) de DOM</h4>

<p>El objeto <code>style</code> representa una sentencia de estilo individual. Al contrario de las reglas individuales disponibles en la colección: <code><a href="/Es/DOM/Document.styleSheets" title="es/DOM/document.styleSheets">document.styleSheets</a></code>, se accede al objeto style a partir del <code>document</code> o desde el elemento para el cual se aplica el estilo. Representa pues, el estilo <em>in-line</em> de ese elemento.</p>

<p>Más importante que los dos procedimientos que señalamos aquí, es el uso del objeto <code>style </code>para establecer las propiedades de un elemento:</p>

<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;
&lt;html&gt;
 &lt;head&gt;
  &lt;title&gt;Ejemplo de la Propiedad style&lt;/title&gt;
  &lt;link rel="StyleSheet" href="example.css" type="text/css"&gt;
  &lt;script type="text/javascript"&gt;
    function stilo()
    {
      document.getElementById("d").style.color = "orange";
    }
  &lt;/script&gt;
 &lt;/head&gt;

 &lt;body&gt;
  &lt;div id="d" class="thunder"&gt;Trueno&lt;/div&gt;
  &lt;button onclick="stilo()"&gt;ss&lt;/button&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Los atributos <strong>media </strong>y <strong>type </strong>de style pueden o no estar presentes. Ten en cuenta que también puedes cambiar el estilo de un elemento haciendo una referencia a él y luego usando el método <code><a href="/Es/DOM/Element.setAttribute" title="es/DOM/element.setAttribute">setAttribute</a></code> para especificar la propiedad CSS y su valor.</p>

<pre>var el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
</pre>

<p>Ten presente, si embargo, que el método <code>setAttribute </code>eliminará cualquier otra propiedad que haya podido ser definida en el estilo del objeto. Si el elemento some-element arriba, tenia un atributo de estilo in-line como <code>style="font-size: 18px"</code>, ese valor habrá sido eliminado por el uso de <code>setAttribute</code>.</p>

<h5 id="Propiedades" name="Propiedades">Propiedades</h5>

<dl>
 <dt><a href="/Es/DOM/Style.media" title="es/DOM/style.media">style.media</a> </dt>
 <dd>Especifica el destino intencionado de la información de estilo</dd>
 <dt><a href="/Es/DOM/Style.type" title="es/DOM/style.type">style.type</a> </dt>
 <dd>Devuelve el tipo de estilo que esta siendo aplicado por esta declaración.</dd>
</dl>

<p>{{ languages( { "en": "en/DOM/style", "fr": "fr/DOM/style", "pl": "pl/DOM/style" } ) }}</p>
