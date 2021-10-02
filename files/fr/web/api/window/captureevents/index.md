---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
tags:
  - API
  - Gecko
  - HTML DOM
  - Méthode
  - Non-standard
translation_of: Web/API/Window/captureEvents
---
<div>{{ ApiRef() }} {{deprecated_header(1.9)}} {{Non-standard_header}}</div>

<p>La méthode <code><strong>Window.captureEvents()</strong></code> enregistre la fenêtre pour capturer tous les événements du type spécifié.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">window.captureEvents(<em>eventType</em>)
</pre>

<p><code>eventType</code> est une combinaison des valeurs suivantes: <code>Event.ABORT</code>, <code>Event.BLUR</code>, <code>Event.CLICK</code>, <code>Event.CHANGE</code>, <code>Event.DBLCLICK</code>, <code>Event.DRAGDDROP</code>, <code>Event.ERROR</code>, <code>Event.FOCUS</code>, <code>Event.KEYDOWN</code>, <code>Event.KEYPRESS</code>, <code>Event.KEYUP</code>, <code>Event.LOAD</code>, <code>Event.MOUSEDOWN</code>, <code>Event.MOUSEMOVE</code>, <code>Event.MOUSEOUT</code>, <code>Event.MOUSEOVER</code>, <code>Event.MOUSEUP</code>, <code>Event.MOVE</code>, <code>Event.RESET</code>, <code>Event.RESIZE</code>, <code>Event.SELECT</code>, <code>Event.SUBMIT</code>, <code>Event.UNLOAD</code>.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
&lt;!-- ... --&gt;
&lt;script&gt;
function reg() {
  window.captureEvents(Event.CLICK);
  window.onclick = page_click;
}

function page_click() {
  alert('événement de clic sur la page détecté!');
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body onload="reg();"&gt;
&lt;p&gt;cliquez n'importe où sur cette page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>Les événements déclenchés dans le DOM par l'activité de l'utilisateur (tels que cliquer sur des boutons ou déplacer le focus loin du document actuel) passent généralement par la <a href="/en-US/docs/Web/API/Window"><code>window</code></a> de haut niveau et les objets de<code> </code><a href="/en-US/docs/Web/API/document"><code>document</code></a> avant d'arriver à l'objet qui a déclenché l'événement.</p>

<p>Lorsque vous appelez la méthode <code>captureEvents()</code> sur <a href="/en-US/docs/Web/API/Window"><code>window</code></a>, événements du type que vous spécifier (par exemple, <code>Event.CLICK</code>) ne passe plus par les objets "inférieurs" de la hiérarchie. Pour que les événements "bouillonnent" comme ils le font normalement, vous devez appeler<code> </code><a href="/en-US/docs/Web/API/window.releaseEvents"><code>window.releaseEvents()</code></a> ({{deprecated_inline}}) sur la fenêtre pour l'empêcher de piéger les événements.</p>

<p>Notez que vous pouvez transmettre une liste d'événements à cette méthode en utilisant la syntaxe suivante : <code>window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)</code>.</p>

<h2 id="Spécification">Spécification</h2>

<p>Cela ne fait partie d'aucune spécification.</p>
