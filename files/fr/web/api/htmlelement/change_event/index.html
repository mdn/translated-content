---
title: change
slug: Web/API/HTMLElement/change_event
tags:
  - Change
  - DOM
  - Event
  - HTML
  - Reference
  - Web
  - Élément HTML
translation_of: Web/API/HTMLElement/change_event
---
<p>{{APIRef}}</p>

<p>L'événement <strong>change</strong> est déclenché pour les éléments {{HTMLElement("input")}} <em>(entrée)</em>, {{HTMLElement("select")}} <em>(sélection)</em> et {{HTMLElement("textarea")}} <em>(zone de texte)</em> lorsqu'un changement de leur valeur est réalisé par l'utilisateur. Contrairement à l'événement {{event("input")}}, <strong>change</strong> n'est pas nécessairement déclenché pour chaque changement de valeur.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Propagation</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Gestionnaire d'événements</th>
   <td>{{domxref("GlobalEventHandlers/onchange", "onchange")}}</td>
  </tr>
 </tbody>
</table>

<p>En fonction du type d'élément de formulaire modifié et de la manière dont l'utilisateur interagit avec cet élément, l'événement <strong>change</strong> se déclenche à un moment différent :</p>

<ul>
 <li>Quand l'élément est activé (en cliquant ou en utilisant le clavier) pour <code>&lt;input type="radio"&gt;</code> et <code>&lt;input type="checkbox"&gt;</code><em>(case à cocher</em>).</li>
 <li>Quand l'utilisateur réalise le changement de manière explicite (par exemple, en sélectionnant une valeur venant d'un {{HTMLElement("select")}} d'un menu déroulant avec le clic d'une souris, en sélectionnant une date d'un "date picker" <em>(sélecteur de date)</em> pour <code>&lt;input type="date"&gt;</code>, en sélectionnant un fichier d'un "file picker" <em>(sélecteur de fichier)</em> pour <code>&lt;input type="file"&gt;</code>, etc.).</li>
 <li>Quand l'élément perd le focus après que sa valeur a été changée, mais pas validée (par exemple, après l'édition d'une valeur de {{HTMLElement("textarea")}} ou <code>&lt;input type="text"&gt;</code>).</li>
</ul>

<p>Les différents navigateurs ne sont pas toujours d'accord sur le fait que l'événement <strong>change</strong> doit être déclenché pour certains types d'interactions. Par exemple, la navigation avec le clavier dans les éléments {{HTMLElement("select")}} ne déclenche jamais l'événement dans Gecko jusqu'à ce que l'utilisateur appuie sur la touche Entrée ou déplace le focus en dehors du &lt;select&gt; (voir {{bug("126379")}}).</p>

<p><a href="https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply">La spécification HTML répertorie les types <code>&lt;input&gt;</code> qui doivent déclencher l'événement <code>change</code>.</a></p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Lélément_&lt;select>">L'élément &lt;select&gt;</h3>

<p>Le code suivant gère l'événement <strong>change</strong> sur {{HTMLElement("select")}} en appellant la fonction <code>changeEventHandler() </code>dans<code> l'attribut <em>onchange</em>. Il lit la valeur de la cible de l'événement et la montre dans une alerte.</code></p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;label&gt;Choose an ice cream flavor:
  &lt;select class="ice-cream" name="ice-cream"&gt;
    &lt;option value=""&gt;Select One …&lt;/option&gt;
    &lt;option value="chocolate"&gt;Chocolate&lt;/option&gt;
    &lt;option value="sardine"&gt;Sardine&lt;/option&gt;
    &lt;option value="vanilla"&gt;Vanilla&lt;/option&gt;
  &lt;/select&gt;
&lt;/label&gt;

&lt;div class="result"&gt;&lt;/div&gt;</pre>

<pre class="brush: css hidden">body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}</pre>

<h4 id="Javascript">Javascript</h4>

<pre class="brush: js">const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) =&gt; {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{ EmbedLiveSample('Lélément_&lt;select&gt;', '100%', '75px') }}</p>

<h3 id="Lélément_dentrée_de_texte">L'élément d'entrée de texte</h3>

<p>Pour certains éléments, notamment <code>&lt;input type="text"&gt;</code>, l'événement de changement ne se déclenche pas tant que le contrôle ne perd pas le focus. Essayez de saisir quelque chose dans le champ ci-dessous, puis cliquez ailleurs pour déclencher l'événement.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;input placeholder="Enter some text" name="name"/&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{ EmbedLiveSample('Lélément_dentrée_de_texte', '100%', '75px') }}</p>

<ul>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "indices.html#event-change", "change")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "webappapis.html#handler-onchange", "change")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-eventgroupings-htmlevents", "change")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_navigateurs">Compatibilités navigateurs</h2>



<p>{{Compat("api.GlobalEventHandlers.onchange")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>Cet événement est aussi déclenché dans plusieurs API non-standard:</p>

<ul>
 <li>{{domxref("NetworkInformation.connection")}} déclenche l'événement <strong>change</strong> lorsque les informations de connexions changent.</li>
 <li>{{domxref("DeviceStorageChangeEvent")}} est déclenché à chaque fois qu'un fichier est créé, modifié, ou supprimé du système de stockage du périphérique.</li>
</ul>
