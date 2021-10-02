---
title: CredentialsContainer.store()
slug: Web/API/CredentialsContainer/store
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Méthode
  - Reference
translation_of: Web/API/CredentialsContainer/store
---
<p>{{APIRef("")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>store()</code></strong>, rattachée à l'interface {{domxref("CredentialsContainer")}}, enregistre un ensemble d'informations d'authentification pour l'utilisateur dans une instance {{domxref("Credential")}} et renvoie cette instance au travers d'une promesse ({{domxref("Promise")}}).</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode ne peut être utilisé que pour les contextes de navigation les plus hauts. Les appels lancés depuis une {{HTMLElement("iframe")}} résoudront la promesse sans aucun effet.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">CredentialsContainer.store(cred).then(function(credRes) { ... } )</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cred</code></dt>
 <dd>Une instance valide de {{domxref("Credential")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{domxref("Promise")}}) qui sera résolue avec l'instance de {{domxref("Credential")}} passée en argument.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// TBD</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Credential Management')}}</td>
   <td>{{Spec2('Credential Management')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CredentialsContainer.store")}}</p>
