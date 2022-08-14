---
title: Ejemplo 3 del contexto de apilamiento
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
original_slug: >-
  Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento
---
<p>« <a href="/en/CSS" title="CSS">CSS</a> « <a href="/en/CSS/Understanding_z-index" title="Understanding CSS z-index">Understanding CSS z-index</a></p>

<h3 id="Ejemplo_3_del_contexto_de_apilamiento">Ejemplo 3 del contexto de apilamiento</h3>

<p>Este último ejemplo muestra los problemas que surgen cuando se combinan varios elementos posicionados en una jerarquía HTML multi nivel y cuando los valores z-index son asignados usando selectores de clase.</p>

<p>Tomemos como ejemplo un menú jerárquico de tres niveles formado por varios DIVs posicionados. DIVs de segundo y tercer nivel aparecen cuando se pone el cursor encima o se hace clic en sus padres. Usualmente este tipo de menú es generado mediante un script del lado del cliente o del lado del servidor, así que las reglas de estilos son asignadas con un selector de clase en lugar de un selector de id.</p>

<p>Si los tres niveles del menú se superponen parcialmente, entonces gestionar el apilamiento se podría convertir en un problema.</p>

<p>{{ EmbedLiveSample('Example_source_code', '320', '330', '', 'Web/Guide/CSS/Understanding_z_index/Stacking_context_example_3') }}</p>

<p>El menú de primer nivel solo tiene posición relativa, así que ningún contexto de apilamiento es creado.</p>

<p>El menú de segundo nivel tiene posición absoluta dentro del elemento padre. Para colocarlo encima de todos los menus de primer nivel, usamos z-index. El problema es que para cada menú de segundo nivel, un contexto de apilamiento es creado y cada menú de tercer nivel pertenece al contexto de su padre.</p>

<p>De manera que un menú de tercer nivel va a ser apilado bajo los menus de segundo nivel porque todos los menus de segundo nivel comparten el mismo valor z-index y las reglas de apilamiento por defecto son aplicadas.</p>

<p>Para entender mejor la situación, esta es la jerarquía del contexto de apilamiento:</p>

<ul>
 <li>contexto de apilamiento raíz
  <ul>
   <li>NIVEL #1
    <ul>
     <li>NIVEL #2 (z-index: 1)
      <ul>
       <li>NIVEL #3</li>
       <li>...</li>
       <li>NIVEL #3</li>
      </ul>
     </li>
     <li>NIVEL #2 (z-index: 1)</li>
     <li>...</li>
     <li>NIVEL #2 (z-index: 1)</li>
    </ul>
   </li>
   <li>NIVEL #1</li>
   <li>...</li>
   <li>NIVEL #1</li>
  </ul>
 </li>
</ul>

<p>Este problema puede ser evitado al remover la superposición entre menus de diferentes niveles, o usando valores z-index individuales (y diferentes) asignados a través del selector id en lugar de un selector de clase, o aplanando la jerarquía HTML.</p>

<div class="note"><strong>Nota:</strong> En el código fuente vas a ver que los menus de segundo y tercer nivel están hechos de varios DIVs contenidos en un contenedor con posición absoluta. Esto es útil para agrupar y posicionarlos todos a la vez.</div>

<h3 id="Código_fuente_de_ejemplo"><strong>Código fuente de ejemplo</strong></h3>

<pre class="brush: html">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html&gt;
&lt;head&gt;&lt;style type="text/css"&gt;

div { font: 12px Arial; }

span.bold { font-weight: bold; }

div.lev1 {
   width: 250px;
   height: 70px;
   position: relative;
   border: 2px outset #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#container1 {
   z-index: 1;
   position: absolute;
   top: 30px;
   left: 75px;
}

div.lev2 {
   opacity: 0.9;
   width: 200px;
   height: 60px;
   position: relative;
   border: 2px outset #990000;
   background-color: #ffdddd;
   padding-left: 5px;
}

#container2 {
   z-index: 1;
   position: absolute;
   top: 20px;
   left: 110px;
}

div.lev3 {
   z-index: 10;
   width: 100px;
   position: relative;
   border: 2px outset #000099;
   background-color: #ddddff;
   padding-left: 5px;
}

&lt;/style&gt;&lt;/head&gt;

&lt;body&gt;

&lt;br /&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;

   &lt;div id="container1"&gt;

      &lt;div class="lev2"&gt;
      &lt;br /&gt;&lt;span class="bold"&gt;LEVEL #2&lt;/span&gt;
      &lt;br /&gt;z-index: 1;

         &lt;div id="container2"&gt;

            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;

         &lt;/div&gt;

      &lt;/div&gt;

      &lt;div class="lev2"&gt;
      &lt;br /&gt;&lt;span class="bold"&gt;LEVEL #2&lt;/span&gt;
      &lt;br /&gt;z-index: 1;
      &lt;/div&gt;

   &lt;/div&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;/body&gt;&lt;/html&gt;
</pre>

<h3 id="También_puedes_ver">También puedes ver</h3>

<ul>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index" title="  javichito Apilando sin z-index">Apilando sin z-index</a> : Reglas de apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float" title="Apilamiento y float">Apilamiento y float</a> : Cómo son manejados los elementos flotantes</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index" title="Agregando z-index">Agregando z-index</a> : Usando z-index para cambiar el apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento" title="El contexto de apilamiento">El contexto de apilamiento</a> : Notas sobre el contexto de apilamiento</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento" title="Ejemplo 1 del contexto de apilamiento">Ejemplo 1 del contexto de apilamiento</a> : Jerarquía HTML de 2 niveles, z-index en el último nivel</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento" title="Ejemplo 2 del contexto de apilamiento">Ejemplo 2 del contexto de apilamiento</a> : Jerarquía HTML de 2 niveles, z-index en todos los niveles</li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Información del documento original</h3>

<ul>
 <li>Autor(es): Paolo Lombardi</li>
 <li>Este artículo es una traducción al inglés de un artículo que escribí en italiano para <a href="http://www.yappy.it">YappY</a>. He dado el derecho de compartir el contenido bajo <a href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a></li>
 <li>Last Updated Date: July 9th, 2005</li>
</ul>
</div>
