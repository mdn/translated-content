---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
tags:
  - API
  - Interface
  - Reference
  - Web Authentication API
  - Web Authn
translation_of: Web/API/AuthenticatorResponse
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>L'interface <code><strong>AuthenticatorResponse</strong></code>, rattachée à l'<a href="/en-US/docs/Web/API/Web_Authentication_API">API Web Authentication</a>, constitue l'interface de base pour les interfaces qui fournissent une racine cryptographique de confiance pour une paire de clés. Les interfaces filles contiennent des informations relatives au navigateur telles que l'origine du <em>challenge</em> et qui peuvent être renvoyée par {{domxref("PublicKeyCredential.response")}}.</p>

<h2 id="Interfaces_basées_sur_AuthenticatorResponse">Interfaces basées sur <code>AuthenticatorResponse</code></h2>

<p>Voici la liste des interfaces basées sur <code>AuthenticatorResponse</code>.</p>

<ul>
 <li>{{domxref("AuthenticatorAssertionResponse")}}</li>
 <li>{{domxref("AuthenticatorAttestationResponse")}}</li>
</ul>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("AuthenticatorResponse.clientDataJSON")}}</dt>
 <dd>Une chaîne de caractères <a href="/fr/docs/Learn/JavaScript/Objects/JSON">JSON</a> stockée dans un {{domxref("ArrayBuffer")}} et qui représente les données du client passées à {{domxref("CredentialsContainer.create()")}} ou {{domxref("CredentialsContainer.get()")}}.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p>Aucune.</p>

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
   <td>{{SpecName('WebAuthn')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.AuthenticatorResponse")}}</p>
