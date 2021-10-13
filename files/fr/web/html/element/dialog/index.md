---
title: '<dialog> : l''élément de boîte de dialogue'
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - Element
  - HTML
  - HTML interactive elements
  - Reference
  - Web
  - polyfill
translation_of: Web/HTML/Element/dialog
browser-compat: html.elements.dialog
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <code><strong>&lt;dialog&gt;</strong></code> représente une boite de dialogue ou un composant interactif (par exemple un inspecteur ou une fenêtre).</p>

<table class="properties">
  <tbody>
   <tr>
    <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
    <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots"> racine de sectionnement</a>.</td>
   </tr>
   <tr>
    <th scope="row">Contenu autorisé</th>
    <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>.</td>
   </tr>
   <tr>
    <th scope="row">Omission de balises</th>
    <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
   </tr>
   <tr>
    <th scope="row">Parents autorisés</th>
    <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>.</td>
   </tr>
   <tr>
    <th scope="row">Rôle ARIA implicite</th>
    <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a></td>
   </tr>
   <tr>
    <th scope="row">Rôles ARIA autorisés</th>
    <td><a href="https://w3c.github.io/aria/#alertdialog"><code>alertdialog</code></a></td>
   </tr>
   <tr>
    <th scope="row">Interface DOM</th>
    <td><a href="/fr/docs/Web/API/HTMLDialogElement"><code>HTMLDialogElement</code></a></td>
   </tr>
  </tbody>
 </table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<div class="warning">
  <p><strong>Attention :</strong> L'attribut <code>tabindex</code> ne doit pas être utilisé sur l'élément <code>&lt;dialog&gt;</code>.</p>
</div>

<dl>
  <dt><code>open</code></dt>
  <dd>Cet attribut indique que la boîte de dialogue est active et peut être utilisée de façon interactive. Si l'attribut n'est pas renseigné, la boîte de dialogue ne doit pas être présentée à l'utilisateur.</dd>
</dl>

<h2 id="usage_notes">Notes d'utilisation</h2>

<ul>
  <li>Les éléments <a href="/fr/docs/Web/HTML/Element/Form"><code>&lt;form&gt;</code></a> peuvent fermer un dialogue s'ils possèdent l'attribut <code>method="dialog"</code>. Lorsqu'un tel formulaire est soumis, le dialogue se ferme avec sa propriété <a href="/fr/docs/Web/API/HTMLDialogElement/returnValue"><code>returnValue</code></a> définie sur la <code>value</code> (valeur) du bouton qui a été utilisé pour soumettre le formulaire.</li>
  <li>Le pseudo-élément CSS <a href="/fr/docs/Web/CSS/::backdrop"><code>::backdrop</code></a> peut être utilisé pour créer un style derrière un élément <code>&lt;dialog&gt;</code> lorsque le dialogue est affiché avec <a href="/fr/docs/Web/API/HTMLDialogElement/showModal"><code>HTMLDialogElement.showModal()</code></a>. Par exemple, pour atténuer le contenu inaccessible derrière la boîte de dialogue modale.</li>
</ul>

<h2 id="examples">Exemples</h2>

<h3 id="simple_example">Exemple simple</h3>

<pre class="brush: html">&lt;dialog open&gt;
  &lt;p&gt;Salutations, à tous et à toutes !&lt;/p&gt;
&lt;/dialog&gt;</pre>

<h3 id="advanced_example">Exemple avancé</h3>

<h4 id="html">HTML</h4>

<pre class="brush: html">&lt;!-- Boîte de dialogue contextuelle simple contenant un formulaire --&gt;
&lt;dialog id="favDialog"&gt;
  &lt;form method="dialog"&gt;
    &lt;p&gt;&lt;label&gt;Animal préféré :
      &lt;select&gt;
        &lt;option&gt;&lt;/option&gt;
        &lt;option&gt;Crevette en saumure&lt;/option&gt;
        &lt;option&gt;Panda rouge&lt;/option&gt;
        &lt;option&gt;Singe-araignée&lt;/option&gt;
      &lt;/select&gt;
    &lt;/label&gt;&lt;/p&gt;
    &lt;menu&gt;
      &lt;button value="cancel"&gt;Annuler&lt;/button&gt;
      &lt;button id="confirmBtn" value="default"&gt;Confirmer&lt;/button&gt;
    &lt;/menu&gt;
  &lt;/form&gt;
&lt;/dialog&gt;

&lt;menu&gt;
  &lt;button id="updateDetails"&gt;Mettre à jour les détails&lt;/button&gt;
&lt;/menu&gt;

&lt;output aria-live="polite"&gt;&lt;/output&gt;</pre>

<h4 id="javascript">JavaScript</h4>

<pre class="brush: js">let updateButton = document.getElementById('updateDetails');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let selectEl = document.querySelector('select');
let confirmBtn = document.getElementById('confirmBtn');

// Le bouton "Mettre à jour les détails" ouvre le &lt;dialogue&gt ; modulaire
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    console.error("L'API &lt;dialog&gt; n'est pas prise en charge par ce navigateur.");
  }
});
// L'entrée "Animal favori" définit la valeur du bouton d'envoi.
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// Le bouton "Confirmer" du formulaire déclenche la fermeture
// de la boîte de dialogue en raison de [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " bouton cliqué - " + (new Date()).toString();
});</pre>

<h4 id="result">Résultat</h3>

<p>{{EmbedLiveSample("advanced_example", "", 300)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="Polyfill">Prothèse d'émulation (polyfill)</h2>

<p>Incluez ce polyfill pour fournir un support aux navigateurs sans élément <code>&lt;dialog&gt;</code> : <a href="https://github.com/GoogleChrome/dialog-polyfill">dialog-polyfill</a>.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>L'évènement <a href="/fr/docs/Web/Reference/HTMLDialogElement/close_event">close</a></li>
 <li>L'évènement <a href="/fr/docs/Web/Reference/HTMLDialogElement/cancel_event">cancel</a></li>
 <li><a href="/fr/docs/Learn/Forms">Guide sur les formulaires HTML</a></li>
 <li>Le pseudo-élément <a href="/fr/docs/Web/CSS/::backdrop"><code>::backdrop</code></a></li>
</ul>
