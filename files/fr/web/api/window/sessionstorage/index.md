---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
tags:
  - API
translation_of: Web/API/Window/sessionStorage
---
<p>{{APIRef}}</p>

<p>La propriété <code>sessionStorage</code> permet d'utiliser un objet {{domxref("Storage")}} valable pour la session de navigation en cours et pour les pages du même domaine que la page actuelle. L'objet global <code>sessionStorage</code> est similaire à {{domxref("Window.localStorage")}}, à la différence que les données enregistrées dans <code>sessionStorage</code> ont une durée vie limitée et expirent à la fin de la session de navigation actuelle. Une session de navigation dure aussi longtemps que le navigateur est ouvert et s'étend sur plusieurs chargements, rechargements et restaurations de pages. En revanche, une session de navigation n'est valable que pour le contexte de navigation actuel, c'est-à-dire que le fait d'<strong>ouvrir une page dans un nouvel onglet ou dans une nouvelle fenêtre provoquera l'initialisation d'une nouvelle session de navigation</strong>, ce qui diffère du comportement des sessions utilisant des cookies.</p>

<p>Il est à noter que les données stockées dans sessionStorage ou localStorage sont <strong>spécifiques au protocole de la page.</strong></p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">// Enregistrer des données dans sessionStorage
sessionStorage.setItem('clé', 'valeur');

// Récupérer des données depuis sessionStorage
<code>var data = sessionStorage.getItem('clé');

// Supprimer des données de sessionStorage
sessionStorage.removeItem('clé');

// Supprimer toutes les données de sessionStorage
sessionStorage.clear();</code>
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{domxref("Storage")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple de code suivant accède à l'objet de stockage de session associé au domaine actuel et y ajoute une donnée à l'aide de {{domxref("Storage.setItem()")}}.</p>

<pre class="brush: js">sessionStorage.setItem('myCat', 'Tom');</pre>

<p>L'exemple suivant sauvegarde automatiquement le contenu d'un champ textuel. Si la page est accidentellement rafraîchie, le contenu du champ est restauré de sorte qu'aucune saisie n'est perdue.</p>

<pre class="brush: js">// Récupération du champ à enregistrer
var champ = document.getElementById("champ");

// Vérification de l'existence d'une donnée enregistrée auparavant
// (ce ne sera le cas que si la page a été rafraîchie)
if (sessionStorage.getItem("autosave")) {
  // Restauration du contenu du champ
  champ.value = sessionStorage.getItem("autosave");
}

// Écoute des changements de valeur du champ
champ.addEventListener("change", function() {
  // Enregistrement de la saisie utilisateur dans le stockage de session
  sessionStorage.setItem("autosave", champ.value);
});</pre>

<div class="note">
<p><strong>Note :</strong> Veuillez vous référer à l'article <a href="/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Utilisation de l'API Web Storage</a> pour des exemples plus complets.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "webstorage.html#dom-sessionstorage", "sessionStorage")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatilibité_des_navigateurs">Compatilibité des navigateurs</h2>

<p>{{Compat("api.Window.sessionStorage")}}</p>

<p>Chaque navigateur attribue des capacités de stockage limitées pour <code>localStorage</code> et <code>sessionStorage</code>. Vous en trouverez certaines dans ce <a href="http://dev-test.nemikor.com/web-storage/support-test/">récapitulatif de tests des capacités de stockage attribuées en fonction du navigateur</a>.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Utilisation de l'API Web Storage</a></li>
 <li>{{domxref("Window.localStorage")}}</li>
</ul>
