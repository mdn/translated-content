---
title: Comparativo entre Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
tags:
  - DOM
  - Event
  - event target
translation_of: Web/API/Event/Comparison_of_Event_Targets
original_slug: Web/API/Event/Comparativo_entre_Event_Targets
---
<div>{{ ApiRef() }}</div>

<h3 id="Event_targets">Event targets</h3>

<p>É facil se confundir sobre o tipo de alvo (<em>target</em>) que deseja-se examinar ao criar um manipulador de eventos (<em>event handler</em>). Este artigo se propõe a esclarecer o uso da propriedade <em>target</em>.</p>

<p>Há 5 tipos de <em>targets</em> a se considerar:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Propriedade</th>
   <th>Definido em</th>
   <th>Objetivo</th>
  </tr>
  <tr>
   <td><a href="/en/DOM/event.target" title="en/DOM/event.target">event.target</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a></td>
   <td>
    <p>O elemento do DOM à esquerda da chamada que disparou este evento, por exemplo:</p>

    <pre class="eval">
<em>element</em>.dispatchEvent(<em>event</em>)
</pre>
   </td>
  </tr>
  <tr>
   <td><a href="/en/DOM/event.currentTarget" title="en/DOM/event.currentTarget">event.currentTarget</a></td>
   <td><a class="external" href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a></td>
   <td>O <a class="external" href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"><code>EventTarget</code></a> do qual o <a class="external" href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"><code>EventListeners</code></a> está sendo atualmente processado. Logo que a captura e a subida do evento ocorre a mudança deste valor.</td>
  </tr>
  <tr>
   <td><a href="/en/DOM/event.relatedTarget" title="en/DOM/event.relatedTarget">event.relatedTarget</a></td>
   <td><a class="external" href="http://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent">DOM MouseEvent Interface</a></td>
   <td>Identifica um alvo secundário para o evento.</td>
  </tr>
  <tr>
   <td><a href="/en/DOM/event.explicitOriginalTarget" title="en/DOM/event.explicitOriginalTarget">event.explicitOriginalTarget</a></td>
   <td>{{ Source("/dom/public/idl/events/nsIDOMNSEvent.idl", "nsIDOMNSEvent.idl") }}</td>
   <td>{{ Non-standard_inline() }} Se o evento foi redirecionado por alguma outra razão senão o cruzamento de uma fronteira anônima, este evento será colocado no alvo antes que o redirecionamento ocorra. por exemplo, eventos do mouse são redirecionados à seus elementos pais quando acontecem sobre nós de texto ({{ Bug("185889") }}), e neste caso .target mostrará o nó pai e <code>.explicitOriginalTarget</code> mostrará o nó texto. Diferente de <code>.originalTarget</code>, <code>.explicitOriginalTarget</code> nunca irá conter um conteúdo anônimo.</td>
  </tr>
  <tr>
   <td><a href="/en/DOM/event.originalTarget" title="en/DOM/event.originalTarget">event.originalTarget</a></td>
   <td>{{ Source("/dom/public/idl/events/nsIDOMNSEvent.idl", "nsIDOMNSEvent.idl") }}</td>
   <td>{{ Non-standard_inline() }} O alvo original do evento, antes de qualquer redirecionamento. Veja <a href="/en-US/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting" title="en/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting">Anonymous Content#Event_Flow_and_Targeting</a> para mais detalhes.</td>
  </tr>
 </tbody>
</table>

<h3 id="Uso_de_explicitOriginalTarget_e_originalTarget">Uso de <code>explicitOriginalTarget</code> e <code>originalTarget</code></h3>

<p>TODO: Disponível apensas em navegadores Mozilla-based?</p>

<p>TODO: Adequado apenas para desenvolvedores de extensões?</p>

<h3 id="Exemplos">Exemplos</h3>

<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;title&gt;Comparison of Event Targets&lt;/title&gt;
    &lt;style&gt;
        table {
            border-collapse: collapse;
            height: 150px;
            width: 100%;
        }
        td {
            border: 1px solid #ccc;
            font-weight: bold;
            padding: 5px;
            min-height: 30px;
        }
        .standard {
            background-color: #99ff99;
        }
        .non-standard {
            background-color: #902D37;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;td class="standard"&gt;Original target dispatching the event &lt;small&gt;event.target&lt;/small&gt;&lt;/td&gt;
            &lt;td class="standard"&gt;Target who's event listener is being processed &lt;small&gt;event.currentTarget&lt;/small&gt;&lt;/td&gt;
            &lt;td class="standard"&gt;Identify other element (if any) involved in the event &lt;small&gt;event.relatedTarget&lt;/small&gt;&lt;/td&gt;
            &lt;td class="non-standard"&gt;If there was a retargetting of the event for some reason &lt;small&gt; event.explicitOriginalTarget&lt;/small&gt; contains the target before retargetting (never contains anonymous targets)&lt;/td&gt;
            &lt;td class="non-standard"&gt;If there was a retargetting of the event for some reason &lt;small&gt; event.originalTarget&lt;/small&gt; contains the target before retargetting (may contain anonymous targets)&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tr&gt;
        &lt;td id="target"&gt;&lt;/td&gt;
        &lt;td id="currentTarget"&gt;&lt;/td&gt;
        &lt;td id="relatedTarget"&gt;&lt;/td&gt;
        &lt;td id="explicitOriginalTarget"&gt;&lt;/td&gt;
        &lt;td id="originalTarget"&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
&lt;p&gt;Clicking on the text will show the difference between explicitOriginalTarget, originalTarget and target&lt;/p&gt;
&lt;script&gt;
    function handleClicks(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('currentTarget').innerHTML = e.currentTarget;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
        document.getElementById('explicitOriginalTarget').innerHTML = e.explicitOriginalTarget;
        document.getElementById('originalTarget').innerHTML = e.originalTarget;
    }

    function handleMouseover(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
    }

    document.addEventListener('click', handleClicks, false);
    document.addEventListener('mouseover', handleMouseover, false);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3 id="Uso_de_target_e_relatedTarget">Uso de <code>target</code> e <code>relatedTarget</code></h3>

<p>A propriedade <code>relatedTarget</code> do evento de <code>mouseover</code> mantém o nó de onde o mouse estava sobre anteriormente. Para o evento de <code>mouseout</code>, mantém o nó para onde o mouse se moveu.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Tipo de Evento</th>
   <th><a href="/en/DOM/event.target" title="en/DOM/event.target">event.target</a></th>
   <th><a href="/en/DOM/event.relatedTarget" title="en/DOM/event.relatedTarget">event.relatedTarget</a></th>
  </tr>
  <tr>
   <td><code>mouseover</code></td>
   <td>O EventTarget do qual o dispositivo apontador entrou.</td>
   <td>O EventTarget do qual o dispositivo apontador saiu.</td>
  </tr>
  <tr>
   <td><code>mouseout</code></td>
   <td>O EventTarget do qual o dispositivo apontador saiu.</td>
   <td>O EventTarget do qual o dispositivo apontador entrou.</td>
  </tr>
 </tbody>
</table>

<p>TODO: Necessário descrição complemento sobre eventos de <code>dragenter</code> e <code>dragexit</code>.</p>

<h4 id="Exemplo">Exemplo</h4>

<pre class="eval">&lt;hbox id="outer"&gt;
  &lt;hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' &gt; ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' &gt; ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" /&gt;
&lt;/hbox&gt;
</pre>
