---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
tags:
  - CSS
  - No estandar
  - Propiedad CSS
  - Referencia CSS
translation_of: Web/CSS/-moz-image-rect
---
<div>{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("2.0")}}</div>

<h2 id="Resumen">Resumen</h2>

<p>Este valor para la propiedad <a href="/en-US/docs/Web/CSS">CSS</a> {{cssxref("background-image")}} te permite usar una parte de una imagen de gran tamaño como fondo. Esto permitirá, por ejemplo, usar diferentes partes de una imagen grande como si fueran una sóla imagen grande usada como fondo de diferentes partes de tú contenido.</p>

<p>Funciona de manera similar a la propiedad {{cssxref("-moz-image-region")}} , que se usa junto con la propiedad{{cssxref("list-style-image")}} para utilizar partes de imágnes como iconos de listas. Sin embargo puede ser usado para cualquier fondo CSS.</p>

<p>La síntaxis para el rectánigulo es similar a la de la función <a href="/en-US/docs/Web/CSS/shape#Syntax"><code>rect()</code></a> y genera un tipo CSS {{cssxref("&lt;shape&gt;")}} . Los cuatro valores son relativos a la esquina superior izquierda de la imagen.</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="syntaxbox">-moz-image-rect({{cssxref("&lt;uri&gt;")}}, <em>top</em>, <em>right</em>, <em>bottom</em>, <em>left</em>);</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt>{{cssxref("&lt;uri&gt;")}}</dt>
 <dd>La URI de la imagen de la que se cogera una parte.</dd>
 <dt><code>top</code></dt>
 <dd>El borde superior, especificado como  {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.</dd>
 <dt><code>right</code></dt>
 <dd>El borde derecho, especificado como  {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.</dd>
 <dt><code>bottom</code></dt>
 <dd>El borde inferior, especificado como  {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.</dd>
 <dt><code>left</code></dt>
 <dd>El borde izquierdo, especificado como  {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.</dd>
</dl>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Este ejemplo carga una imagen y la usa en cuatro segmento para dibujar el logo de Firefox en cuatro bloques  {{HTMLElement("div")}} blocks. Si hacemos click en el contenedor los cuatro segmentos rotarán cmabiando los valores de la propiedad {{cssxref("background-image")}} entre estos cuatro bloques {{HTMLElement("div")}}.</p>

<h3 id="CSS">CSS</h3>

<p>El CSS define un estilo para el contenedor y, posteriormente los estilos para las cuatro cajas que comprenden la imagen completa.</p>

<p>Para el contenedor:</p>

<pre class="brush: css">#container {
  width:267px;
  height:272px;
  top:100px;
  left:100px;
  position:absolute;
  font-size:16px;
  text-shadow:white 0px 0px 6px;
  text-align:center;
}</pre>

<p>posteriormente las cuatro caja se defines las cajas que especifican los segmentos de la imagen. La vamos a ver una por una.</p>

<pre class="brush: css">#box1 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 50%, 50%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<p>Esta es la esquina superior izquierda de la imagen. Define un rectángulo que contiene el cuartil superior izquierda de la imagen <code>firefox.jpg</code>.</p>

<pre class="brush: css">#box2 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 100%, 50%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<p>Esto define la esquina superior derecha:</p>

<p>Las otras dos siguen un patrón similar:</p>

<pre class="brush: css">#box3 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 50%, 100%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}
#box4 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 100%, 100%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<h3 id="HTML">HTML</h3>

<p>Es bastante simple:</p>

<pre class="brush: html">&lt;div id="container" onclick="rotate()"&gt;
  &lt;div id="box1" style="left:0px;top:0px;"&gt;Top left&lt;/div&gt;
  &lt;div id="box2" style="left:133px;top:0px;"&gt;Top right&lt;/div&gt;
  &lt;div id="box3" style="left:0px;top:136px;"&gt;Bottom left&lt;/div&gt;
  &lt;div id="box4" style="left:133px;top:136px;"&gt;Bottom right&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>Sitúa los 4 segmentos de una imagen en un caja de 2x2 celdas. Estos cuatro elementos están dentro de un bloque {{HTMLElement("div")}} más grande cuya función es recibir eventos click y mandarlos al código JavaScript.</p>

<h3 id="El_codigo_javaScript">El codigo javaScript</h3>

<p>Gestiona el evento click cuando el contenedor recibe un click de ratón</p>

<pre class="brush:js">function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Una vez hemos guardado la última, empezamos a rotar.

  for (var i=1; i&lt;=4; i++) {
    var curId = "box" + i;

    // Permuta las imágenes de fondo.

    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}</pre>

<p>Usa {{domxref("window.getComputedStyle()")}} para establecer el estilo de cada elemento, cambiándolo al elemento posterior. Destacar que, una vez se empieza se guarda una copia del estilo de la última caja ya que será sobreescrito por el tercer elemento. Simplemente copiando los valores de la propiedad {{cssxref("background-image")}} de un elemento al siguiente, cuando hacemos click de ratón, conseguiremos el efecto deseado.</p>

<h3 id="Como_queda">Como queda</h3>

<p>{{EmbedLiveSample("Example","400","400")}}</p>

<h3 id="Bugs">Bugs</h3>

<ul>
 <li>{{WebkitBug(32177)}}</li>
</ul>
