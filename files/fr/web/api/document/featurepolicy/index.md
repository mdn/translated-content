---
title: Document.featurePolicy
slug: Web/API/Document/featurePolicy
tags:
  - API
  - Document
  - Feature Policy
  - Feature-Policy
  - Reference
translation_of: Web/API/Document/featurePolicy
---
<p>{{APIRef("Feature Policy")}}</p>

<p>La propriété en lecture seule <strong><code>featurePolicy</code></strong> de l'interface {{domxref("Document")}} retourne l'interface {{domxref("FeaturePolicy")}}, qui fournit une API permettant de consulter facilement les règles de fonctionnalités appliquées sur un document spécifique.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="notranslate">var <var>policy</var> = <var>iframeElement</var>.featurePolicy</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{domxref("FeaturePolicy")}} pouvant être utilisé pour consulter les paramètres de Feature Policy appliqués au document.</p>

<h2 id="Spécification">Spécification</h2>

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
   <td>{{SpecName("Feature Policy")}}</td>
   <td>{{Spec2("Feature Policy")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Document.featurePolicy")}}</p>
