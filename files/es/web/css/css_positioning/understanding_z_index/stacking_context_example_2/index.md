---
title: Ejemplo 2 del contexto de apilamiento
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
original_slug: >-
  Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento
---
<p>« <a href="/es/CSS" title="CSS">CSS</a> « <a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index" title="Understanding CSS z-index">ENTENDIENDO LA PROPIEDAD CSS Z-INDEX</a></p>

<h3 id="Ejemplo_2_del_contexto_de_apilamiento">Ejemplo 2 del contexto de apilamiento</h3>

<p>Este es un ejemplo muy simple, pero es la clave para entender el concepto de <em>contexto de apilamiento. </em>Tenemos los mismos 4 DIVs del ejemplo previo, pero ahora las propiedades z-index son asignadas en ambos niveles de la jerarquía.</p>

<p>{{ EmbedLiveSample('Example_source_code', '352', '270', '', 'Web/Guide/CSS/Understanding_z_index/Stacking_context_example_2') }}</p>

<p>Puedes ver que el DIV #2 (z-index: 2) está encima del DIV #3 (z-index: 1), porque ambos pertenecen al mismo contexto de apilamiento (el contexto raíz), así que los valores z-index indican cómo son apilados los elementos.</p>

<p>Lo que puede ser considerado extraño es que el DIV #2 (z-index: 2) está encima del DIV #4 (z-index: 10), a pesar de sus valores z-index. La razón es que ellos no pertenecen al mismo contexto de apilamiento. El DIV #4 pertenece al contexto de apilamiento creado por el DIV #3, y como explicamos previamente el DIV #3 (y todos su contenido) está debajo del DIV #2.</p>

<p>Para entender mejor esta situación, esta es la jerarquía del contexto de apilamiento:</p>

<ul>
 <li>contexto de apilamiento raíz
  <ul>
   <li>DIV #2 (z-index 2)</li>
   <li>DIV #3 (z-index 1)
    <ul>
     <li>DIV #4 (z-index 10)</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>

<div class="note"><strong>Nota:</strong>  Vale la pena recordar que en general la jerarquía HTML es diferente de la jerarquía del contexto de apilamiento. En la jerarquía del contexto de apilamiento, los elementos que no crean un contexto de apilamiento son colapsados en sus padres.</div>

<h3 id="Código_fuente_de_ejemplo"><strong>Código fuente de ejemplo</strong></h3>

<pre class="brush: html">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html&gt;
&lt;head&gt;&lt;style type="text/css"&gt;

div { font: 12px Arial; }

span.bold { font-weight: bold; }

#div2 { z-index: 2; }
#div3 { z-index: 1; }
#div4 { z-index: 10; }

#div1,#div3 {
   height: 80px;
   position: relative;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#div2 {
   opacity: 0.8;
   position: absolute;
   width: 150px;
   height: 200px;
   top: 20px;
   left: 170px;
   border: 1px dashed #990000;
   background-color: #ffdddd;
   text-align: center;
}

#div4 {
   opacity: 0.8;
   position: absolute;
   width: 200px;
   height: 70px;
   top: 65px;
   left: 50px;
   border: 1px dashed #000099;
   background-color: #ddddff;
   text-align: left;
   padding-left: 10px;
}


&lt;/style&gt;&lt;/head&gt;

&lt;body&gt;

    &lt;br /&gt;

    &lt;div id="div1"&gt;&lt;br /&gt;
        &lt;span class="bold"&gt;DIV #1&lt;/span&gt;&lt;br /&gt;
        position: relative;
        &lt;div id="div2"&gt;&lt;br /&gt;
            &lt;span class="bold"&gt;DIV #2&lt;/span&gt;&lt;br /&gt;
            position: absolute;&lt;br /&gt;
            z-index: 2;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;br /&gt;

    &lt;div id="div3"&gt;&lt;br /&gt;
        &lt;span class="bold"&gt;DIV #3&lt;/span&gt;&lt;br /&gt;
        position: relative;&lt;br /&gt;
        z-index: 1;
        &lt;div id="div4"&gt;&lt;br /&gt;
            &lt;span class="bold"&gt;DIV #4&lt;/span&gt;&lt;br /&gt;
            position: absolute;&lt;br /&gt;
            z-index: 10;
        &lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="También_puedes_ver">También puedes ver</h3>

<ul>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index" title="  javichito Apilando sin z-index">Apilando sin z-index</a> : Reglas de apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float" title="Apilamiento y float">Apilamiento y float</a> : Cómo son manejados los elementos flotantes</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index" title="Agregando z-index">Agregando z-index</a> : Usando z-index para cambiar el apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento" title="El contexto de apilamiento">El contexto de apilamiento</a> : Notas sobre el contexto de apilamiento</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento" title="Ejemplo 1 del contexto de apilamiento">Ejemplo 1 del contexto de apilamiento</a> : Jerarquía HTML de 2 niveles, z-index en el último nivel</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento" title="Ejemplo 3 del contexto de apilamiento">Ejemplo 3 del contexto de apilamiento</a> : Jerarquía HTML de 3 niveles, z-index en el segundo nivel</li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Información del documento original</h3>

<ul>
 <li>Autor(es): Paolo Lombardi</li>
 <li>Este artículo es una traducción al inglés de un artículo que escribí en italiano para <a href="http://www.yappy.it">YappY</a>. He dado el derecho de compartir el contenido bajo <a href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a></li>
 <li>Last Updated Date: July 9th, 2005</li>
</ul>
</div>
