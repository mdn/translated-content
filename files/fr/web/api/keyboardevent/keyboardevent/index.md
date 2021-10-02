---
title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
tags:
  - API
  - Clavier
  - Constructeur
  - DOM
  - évènements
translation_of: Web/API/KeyboardEvent/KeyboardEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p>Le constructeur <strong><code>KeyboardEvent()</code></strong> crée un nouveau {{domxref("KeyboardEvent")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> event = new KeyboardEvent(typeArg, KeyboardEventInit);</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt>typeArg</dt>
 <dd>Une représentation du nom de l'évènement sous forme de {{domxref("DOMString")}}.</dd>
 <dt>KeyboardEventInit{{optional_inline}}</dt>
 <dd><p>Un dictionnaire <code>KeyboardEventInit</code> ayant les champs suivants :</p>
 <ul>
  <li><code>"key"</code>, optionnel et par défaut <code>""</code>, de type {{domxref("DOMString")}}, qui définit la valeur de {{domxref("KeyboardEvent.key")}}.</li>
  <li><code>"code"</code>, optionnel et par défaut <code>""</code>, de type {{domxref("DOMString")}}, qui définit la valeur de {{domxref("KeyboardEvent.code")}}.</li>
  <li><code>"location"</code>, optionnel et par défaut <code>0</code>, de type <code>unsigned long</code>, qui définit la valeur de {{domxref("KeyboardEvent.location")}}.</li>
  <li><code>"ctrlKey"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.ctrlKey")}}.</li>
  <li><code>"shiftKey"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.shiftKey")}}.</li>
  <li><code>"altKey"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.altKey")}}.</li>
  <li><code>"metaKey"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.metaKey")}}.</li>
  <li><code>"repeat"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.repeat")}}.</li>
  <li><code>"isComposing"</code>, optionnel et par défaut <code>false</code>, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.isComposing")}}.</li>
  <li><code>"charCode"</code>, optionnel et par défaut <code>0</code>, de type <code>unsigned long</code>, qui définit la valeur du déprécié {{domxref("KeyboardEvent.charCode")}}.</li>
  <li><code>"keyCode"</code>, optionnel et par défaut <code>0</code>, de type <code>unsigned long</code>, qui définit la valeur du déprécié {{domxref("KeyboardEvent.keyCode")}}.</li>
  <li><code>"which"</code>, optionnel et par défaut <code>0</code>, de type <code>unsigned long</code>, qui définit la valeur du déprécié {{domxref("KeyboardEvent.which")}}.</li>
 </ul>
 </dd>
</dl>

<div class="note">
  <p><strong>Note :</strong> Le dictionnaire <code>KeyboardEventInit</code> accepte aussi les champs des dictionnaires  {{domxref("UIEvent.UIEvent", "UIEventInit")}} et {{domxref("Event.Event", "EventInit")}}.</p>
</div>

<h2 id="Specifications">Spécifications</h2>

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
   <td>{{SpecName('UI Events','#interface-keyboardevent','KeyboardEvent()')}}</td>
   <td>{{Spec2('UI Events')}}</td>
   <td>Définition actuelle.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events','#interface-KeyboardEvent','KeyboardEvent()')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.KeyboardEvent.KeyboardEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("KeyboardEvent")}}, l'interface des objets qu'il construit.</li>
</ul>
