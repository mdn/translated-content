---
title: Optimizar sus páginas para análisis especulativo
slug: Glossary/speculative_parsing
tags:
  - Avanzado
  - Desarrollo web
  - HTML
  - HTML5
translation_of: Glossary/speculative_parsing
original_slug: Web/HTML/Optimizing_your_pages_for_speculative_parsing
---
<p><span class="seoSummary">Tradicionalmente en los navegadores el analizador de HTML corre en el hilo de ejecución principal y se queda bloqueado después de una etiqueta &lt;/script&gt; hasta que el código se haya recuperado y ejecutado. El analizador de HTML de Firefox 4 y posteriores soporta análisis especulativo fuera del hilo de ejecución principal. Este analiza anticipadamente mientras el codigo está siendo descargado y ejecutado. Como en Firefox 3.5 y 3.6, el analizador de HTML es el que inicia la carga especulativa de código, las hojas de estilos y las imagenes que va encontrando en el flujo de la página. Sin embargo en Firefox 4 y posteriores el analizador de HTML también ejecuta el algoritmo especulativo de la construcción del árbol HTML. La ventaja es que cuando lo especulado tiene exito, no hay necesidad de reanalizar la parte del archivo de entrada que ya fue analizada junto la descarga de código,  hojas de estilo y las imágenes. La desventaja es que se ha realizado un trabajo inútil cuando la especulación fracasa.</span></p>

<p>Este documento le ayuda a evitar este tipo de situaciones que hacen que la especulación falle y ralentize la carga de la página.</p>

<h2 id="Haciendo_cargas_especulativas_exitosas">Haciendo cargas especulativas exitosas</h2>

<p>Hay solo una regla para hacer cargas especulativas exitosas en scripts enlazados, hojas de estilo e imagenes:</p>

<ul>
 <li>Si usted usa el elemento &lt;base&gt; para anular la base URI de su pagina, ponga el elemento en la parte no-escrita de el documento. No la añada via document.write() o document.createElement().</li>
</ul>

<h2 id="Evitando_perder_la_salida_del_generador_de_arbol">Evitando perder la salida del generador de arbol</h2>

<p>La generación de árbol especulativo falla cuando <code>document.write()</code> cambia el estado del generador de árbol de tal manera que el estado especulativo después del tag <code>&lt;/script&gt;</code> no se mantiene cuando todo el contenido es inertado por <code>document.write()</code> ha sido analizado. Sin embargo, sólo usos inusuales de <code>document.write()</code> causa problemas. Aquí están las cosas a evitar:</p>

<ul>
 <li>No escriba árboles desbalanceados. <code>&lt;script&gt;document.write("&lt;div&gt;");&lt;/script&gt;</code> está mal. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> es correcto.</li>
 <li>No escriba un token sin finalizar. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div");&lt;/script&gt;</code> esta mal.</li>
 <li>No termine con un carater de retorno de carro. <code>&lt;script&gt;document.write("Hello World!\r");&lt;/script&gt;</code> está mal. <code>&lt;script&gt;document.write("Hello World!\n");&lt;/script&gt;</code> es correcto.</li>
 <li>Note que escribiendo etiquetas balanceadas pueden causarse que se creen otras etiquetas desbalanceadas. Ej. <code>&lt;script&gt;document.write("&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> dentro del elemento <code>head</code> será interpretado como <code>&lt;script&gt;document.write("&lt;/head&gt;&lt;body&gt;&lt;div&gt;&lt;/div&gt;");&lt;/script&gt;</code> el cual está desbalanceado.</li>
 <li>No formatee parte de una tabla. <code>&lt;table&gt;&lt;script&gt;document.write("&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;");&lt;/script&gt;&lt;/table&gt;</code> está mal. Sin embargo, <code>&lt;script&gt;document.write("</code><code>&lt;table&gt;</code><code>&lt;tr&gt;&lt;td&gt;Hello World!&lt;/td&gt;&lt;/tr&gt;</code><code>&lt;/table&gt;</code><code>");&lt;/script&gt;</code> está correcto.</li>
 <li>HAGA: document.write dentro de otro elemento de formateo.</li>
</ul>
