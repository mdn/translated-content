---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Error
  - Fuente
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">Advertencia: Error de Sintaxis al utilizar //@ para indicar el código fuente de la URL esta obsoleto. En su lugar use //#.

Advertencia: Error de Sintaxis: al utilizar //@ para indicar el mapeo de programas del código fuente de la URL esta obsoleto. En su lugar use //#.
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>Una advertencia ocurrida como esta {{jsxref("SyntaxError")}}. JavaScript no se detendrá.</p>

<h2 id="Descripción_del_error">Descripción del error</h2>

<p>Esta es una sintaxis obsoleta del codigo fuente de mapa en JavaScript.</p>

<p>Las sintaxis de código fuente de mapa en JavaScript se suelen combinar y minificar para hacer que la entrega desde el servidor sea más eficiente. Con los códigos de origen de  mapas, el depurador puede asignar el código que se está ejecutando a los archivos de origen.</p>

<p>La especificación de mapa de código fuente cambió la sintaxis debido a un conflicto con IE  con la versión windows 8.x siempre que se encontró en la página. Despues <code> //@cc_on</code> fue interpretado para activar la compilación condicional en el motor IE  JScript. <a href="https://docs.microsoft.com/en-us/scripting/javascript/reference/at-cc-on-statement-javascript">El comentario de compilación condicional</a> en IE es una característica poco conocida, pero rompió mapas de fuente de origen con <a href="https://bugs.jquery.com/ticket/13274">jQuery</a> y otras bibliotecas.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Sintaxis_obsoleta">Sintaxis obsoleta</h3>

<p>Sintaxis con el signo obsoleto "@".</p>

<pre class="brush: js example-bad">//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
</pre>

<h3 id="Sintaxis_estándar">Sintaxis estándar</h3>

<p>En su lugar use el signo "#".</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>O, alternativamente, puede establecer un encabezado en su archivo JavaScript para evitar tener un comentario de error de sintaxis:</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="Vea_También">Vea También</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">Como utilizar un mapa de Fuentes - Documentación de Herramientas de Firefox</a><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map"> </a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introducción a las fuentes  – HTML5 rocks</a></li>
</ul>
