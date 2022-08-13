---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Date
  - JavaScript
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/now
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/now
---
<div>
 {{JSRef("Objetos_globales", "Date")}}</div>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Devuelve el número de milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox">var <em>fechaEnMiliseg</em> = Date.now();
</pre>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>El método <code>now</code> devuelve los milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970 justo hasta ahora como un {{jsxref("Number")}}.</p>
<p>Cuando se usa <code>now</code> para crear registros temporales or identificadores únicos, tenga en cuenta que la precisión de Windows puede ser de 15 milisegundos (vea {{Bug(363258)}}), lo que puede provocar valores iguales si <code>now</code> se llama múltiples veces en un breve intervalo de tiempo.</p>
<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_now" name="Ejemplo:_Usando_now">Ejemplo: Usando <code>now</code></h3>
<p>El siguiente ejemplo usa <code>now</code> para crear un registro temporal.</p>
<pre class="brush:js">var registro = Date.now();
</pre>
<h2 id="Vea_También">Vea También</h2>
<ul>
 <li>{{domxref("window.performance.now")}}</li>
 <li>{{domxref("console.time")}} / {{domxref("console.timeEnd")}}</li>
</ul>
