---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
tags:
  - API
  - DOM
  - Event
  - Method
  - Reference
translation_of: Web/API/Event/preventDefault
browser-compat: api.Event.preventDefault
---
<div>{{apiref("DOM")}}</div>

<p>La méthode <strong><code>preventDefault()</code></strong>, rattachée à l'interface <a href="/fr/docs/Web/API/Event"><code>Event</code></a>, indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.</p>

<p>L'évènement continue sa propagation habituelle à moins qu'un des gestionnaires d'évènement invoque <a href="/fr/docs/Web/API/Event/stopPropagation"><code>stopPropagation()</code></a> ou <a href="/fr/docs/Web/API/Event/stopImmediatePropagation"><code>stopImmediatePropagation()</code></a> pour interrompre la propagation.</p>

<p>Comme indiqué ci-après, appeler <code><strong>preventDefault()</strong></code> n'aura aucun effet pour un évènement qui ne peut être annulé (comme ceux émis par <a href="/fr/docs/Web/API/EventTarget/dispatchEvent"><code>EventTarget.dispatchEvent()</code></a> sans avoir indiqué <code>cancelable: true</code>).</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js"><var>event</var>.preventDefault();</pre>

<h2 id="examples">Exemples</h2>

<h3 id="blocking_default_click_handling">Bloquer la gestion du clic par défaut</h3>

<p>Lorsqu'on clique sur une case à cocher, par défaut, cela coche ou décoche la case. Dans cet exemple, on illustre comment bloquer ce comportement par défaut :</p>

<h4 id="javascript">JavaScript</h4>

<pre class="brush: js">document.querySelector("#id-checkbox").addEventListener("click", function(event) {
  console.log("Désolé ! preventDefault() ne vous laissera pas cocher ceci.");
  event.preventDefault();
}, false);</pre>

<h4 id="html">HTML</h4>

<pre class="brush: html">&lt;p&gt;Essayez de cliquer sur la case à cocher.&lt;/p&gt;

&lt;form&gt;
  &lt;label for="id-checkbox"&gt;Checkbox:&lt;/label&gt;
  &lt;input type="checkbox" id="id-checkbox"/&gt;
&lt;/form&gt;</pre>

<h4 id="result">Résultat</h4>

<p>{{EmbedLiveSample("blocking_default_click_handling")}}</p>

<h3 id="stopping_keystrokes_from_reaching_an_edit_field">Empêcher les pressions du clavier sur un champ texte</h3>

<p>Dans l'exemple qui suit, on démontre comment empêcher d'écrire au clavier dans un champ texte grâce à <code>preventDefault()</code>.</p>

<h4 id="html_2">HTML</h4>

<p>Voici le formulaire contenant le champ texte :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;label&gt;Un champ texte
    &lt;input type="text" id="mon-champ-texte"&gt;
  &lt;/label&gt;
&lt;/form&gt;</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<p>Et voici le fragment de code JavaScript qui s'occupe de la logique principale. On commence par enregistrer un gestionnaire d'évènement pour <a href="/fr/docs/Web/API/Element/keypress_event"><code>keypress</code></a> :</p>

<pre class="brush: js">let monChampTexte = document.getElementById('mon-champ-texte');
monChampTexte.addEventListener('keypress', bloqueSaisie, false);</pre>

<p>La fonction <code>bloqueSaisie()</code> empêche toute saisie au clavier :</p>

<pre class="brush: js">function bloqueSaisie(evt) {
  evt.preventDefault();
  console.log("Une saisie a été empêchée.");
};</pre>

<h4 id="result_2">Résultat</h4>

<p>{{EmbedLiveSample('stopping_keystrokes_from_reaching_an_edit_field', 600, 200)}}</p>

<h2 id="notes">Notes</h2>

<p>Invoquer <code>preventDefault()</code> à n'importe quel moment du cycle de vie d'un évènement annulera cet évènement. Cela signifie que toute action par défaut, normalement exécutée par le navigateur, n'aura pas lieu.</p>

<p>On peut utiliser la propriété <a href="/fr/docs/Web/API/Event/cancelable"><code>Event.cancelable</code></a> afin de vérifier si un évènement est annulable. Invoquer <code>preventDefault()</code> sur un évènement non-annulable n'aura aucun effet.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
