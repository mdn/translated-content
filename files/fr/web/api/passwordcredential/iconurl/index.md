---
title: PasswordCredential.iconURL
slug: Web/API/PasswordCredential/iconURL
tags:
  - API
  - Credential Management API
  - PasswordCredential
  - Propriété
  - Reference
translation_of: Web/API/PasswordCredential/iconURL
---
<p>{{SeeCompatTable}}{{APIRef("")}}</p>

<p>La propriété <strong><code>iconURL</code></strong>, rattachée à l'interface {{domxref("PasswordCredential")}}, est accessible en lecture seule et fournit une chaîne de caractères {{domxref("USVString")}} représentant une URL pointant vers l'image d'une icône. Cette image est destinée à être affichée dans un sélecteur d'authentification. L'URL fournie doit être accessible sans authentification.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>url</em> = <em>passwordCredential</em>.iconURL</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une chaîne de caractères {{domxref("USVString")}} contenant une URL.</p>

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
   <td>{{SpecName('Credential Management','#dom-credentialuserdata-iconurl','iconURL')}}</td>
   <td>{{Spec2('Credential Management')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PasswordCredential.iconURL")}}</p>
