---
title: event.cancelable
slug: Web/API/Event/cancelable
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Event/cancelable
---
<div>{{ ApiRef("DOM") }}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Indica si el elemento puede ser cancelado o no.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>bool</i> =
<i>event</i>.cancelable;
</pre>

<p><code>bool</code> tiene valor <code>true</code> o <code>false</code>, dependiendo de si el evento puede ser desactivado.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Si un evento puede ser cancelado o no, es algo que se determina en el momento en que el evento es inicializado.</p>

<p>Para cancelar un evento, llama al método <a href="es/DOM/event.preventDefault">preventDefault</a> en el evento. Esto evita que la tarea de implementación ejecute la acción por defecto asociada con el evento.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-canCancel">DOM Level 2 Events: cancelable</a></p>

<p> </p>

<p> </p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/event.cancelable", "ja": "ja/DOM/event.cancelable", "pl": "pl/DOM/event.cancelable" } ) }}</p>
