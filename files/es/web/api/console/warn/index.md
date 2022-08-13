---
title: Console.warn()
slug: Web/API/Console/warn
tags:
  - Desarrollo web
translation_of: Web/API/Console/warn
---
<div>{{APIRef("Console API")}}</div>

<p>Imprime un mensaje de advertencia en la Consola Web.</p>

<p>{{AvailableInWorkers}}</p>

<p>{{Note("En Firefox, las advertencias tienen un pequeño icono de signo de exclamación junto a estas en el registro de la Consola Web.")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">console.warn(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.warn(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h2 id="Parámetros">Parámetros</h2>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Una lista de objetos JavaScript para ser emitidos en la Consola Web. Las representaciones como string de cada uno de estos objetos son anexados juntos en el orden listado e impresos.</dd>
 <dt><code>msg</code></dt>
 <dd>Un string JavaScript que contiene cero o más strings de sustitución.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Objetos JavaScript con los cuales se reemplaza los strings de sustitución dentro de <code>msg</code>. Esto le proporciona un control adicional sobre el formato de salida.</dd>
</dl>

<p>Vea <a href="/en-US/docs/Web/API/console#Outputting_text_to_the_console">Outputting text to the console</a> en la documentación de {{domxref("console")}} para mas detalles.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estatus</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#warn", "console.warn()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Definición Inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_Navegador">Compatibilidad del Navegador</h2>

<p>{{Compat("api.Console.warn")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a class="external" href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a class="external" href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
</ul>
