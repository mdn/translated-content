---
title: element.dispatchEvent
slug: Web/API/EventTarget/dispatchEvent
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/EventTarget/dispatchEvent
---
<p>{{ ApiRef("DOM Events")}}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Lanza un evento en el sistema de eventos. El evento está sujeto al mismo comportamiento y capacidades que si fuera un evento de lanzamiento directo.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><em>bool</em> = <em>element</em>.dispatchEvent(<em>event</em>)
</pre>

<ul>
 <li><code>element</code> es el objetivo (<code>target</code> en Inglés) del evento.</li>
 <li><code>event</code> es un objeto de tipo <a href="es/DOM/event">event</a> que será lanzado.</li>
 <li>El valor devuelto es <code>false</code>, si al menos uno de los negociadores (en Inglés:<em>handler</em> ) que manejan el evento es <a href="es/DOM/event.preventDefault">preventDefault</a>. En caso contrario, devuelve <code>true</code>.</li>
</ul>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Como se ve en el ejemplo anterior, <code>dispatchEvent</code> es el último paso en el proceso crear-inicializar-lanzar, que se usa para el lanzamiento manual de eventos en el modelo de implementación de eventos.</p>

<p>El evento puede ser creado mediante el método <a href="es/DOM/document.createEvent">document.createEvent</a> e inicializado usando <a href="es/DOM/event.initEvent">initEvent</a> u otro método, más específicamente, métodos de inicialización como <a href="es/DOM/event.initMouseEvent">initMouseEvent</a> o <a href="es/DOM/event.initUIEvent">initUIEvent</a>.</p>

<p>Ver también <a href="es/DOM/event">Event object reference</a>.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-dispatchEvent">DOM Level 2 Events: dispatchEvent</a></p>
