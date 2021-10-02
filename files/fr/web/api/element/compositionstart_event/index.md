---
title: compositionstart
slug: Web/API/Element/compositionstart_event
tags:
  - Element
  - Event
  - Input method
  - Reference
  - compositionstart
translation_of: Web/API/Element/compositionstart_event
original_slug: Web/Events/compositionstart
---
<div>{{APIRef}}</div>

<p>L'événement <strong><code>compositionstart</code></strong> est déclenché lorsqu'un système de composition de texte tel qu'une {{glossary("input method editor","méthode de saisie")}} démarre une nouvelle session de composition.</p>

<p>Par exemple, cet événement pourrait être déclenché après qu'un utilisateur a commencé à saisir un caractère chinois en utilisant un <a href="https://en.wikipedia.org/wiki/Pinyin">Pinyin</a> IME.</p>

<table class="properties">
  <tbody>
    <tr>
      <th>Propagation</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("CompositionEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété du gestionnaire d'événements</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">Exemples</h2>

<pre class="brush: js">const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener('compositionstart', (event) =&gt; {
  console.log(`generated characters were: ${event.data}`);
});</pre>

<h3 id="Live_example">Exemple concret</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="control"&gt;
  &lt;label for="name"&gt;Sur macOS, cliquez dans la zone de texte ci-dessous,&lt;br&gt; puis tapez &lt;kbd&gt;option&lt;/kbd&gt; + &lt;kbd&gt;`&lt;/kbd&gt;, puis &lt;kbd&gt;a&lt;/kbd&gt; :&lt;/label&gt;
  &lt;input type="text" id="example" name="example"&gt;
&lt;/div&gt;

&lt;div class="event-log"&gt;
  &lt;label&gt;Event log:&lt;/label&gt;
  &lt;textarea readonly class="event-log-contents" rows="8" cols="25"&gt;&lt;/textarea&gt;
  &lt;button class="clear-log"&gt;Clear&lt;/button&gt;
&lt;/div&gt;</pre>

<pre class="brush: css hidden">body {
  padding: .2rem;
  display: grid;
  grid-template-areas: "control  log";
}

.control {
  grid-area: control;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

input[type="text"] {
  margin: .5rem 0;
}

kbd {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
</pre>

<h4 id="JS">JS</h4>

<pre class="brush: js">const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clearLog = document.querySelector('.clear-log');

clearLog.addEventListener('click', () =&gt; {
  log.textContent = '';
});

function handleEvent(event) {
  log.textContent = log.textContent + `${event.type}: ${event.data}\n`;
}

inputElement.addEventListener('compositionstart', handleEvent);
inputElement.addEventListener('compositionupdate', handleEvent);
inputElement.addEventListener('compositionend', handleEvent);
</pre>

<h4 id="Result">Résultat</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '180px') }}</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('UI Events', '#event-type-compositionstart')}}</td>
      <td>{{Spec2('UI Events')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Compatibilités_navigateur">Compatibilités navigateur</h2>

<p>{{Compat("api.Element.compositionstart_event")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>Événements liés : {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}.</li>
</ul>
