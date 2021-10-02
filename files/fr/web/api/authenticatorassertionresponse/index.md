---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
tags:
  - API
  - AuthenticatorAssertionResponse
  - Interface
  - Reference
  - Web Authentification API
  - WebAuthn
translation_of: Web/API/AuthenticatorAssertionResponse
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>L'interface <code><strong>AuthenticatorAssertionResponse</strong></code>, rattachée à l'<a href="/fr/docs/Web/API/Web_Authentication_API">API Web Authentication</a>, est renvoyée par un appel à {{domxref('CredentialsContainer.get()')}} lorsqu'on a passé un objet {{domxref('PublicKeyCredential')}} en argument. Cette interface fournit une preuve à un service que l'objet possède une paire de clé et que la requête d'authentification est valide et approvée.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>AuthenticatorAssertionResponse.clientDataJSON</code></dt>
 <dd>Les données du client pour l'authentification telles que l'origine et le <em>challenge</em>. La propriété {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} est héritée de {{domxref("AuthenticatorResponse")}}.</dd>
 <dt>{{domxref("AuthenticatorAssertionResponse.authenticatorData")}}</dt>
 <dd>Un objet {{jsxref("ArrayBuffer")}} contenant les informations sur l'authenticateur telles que :
 <ul>
  <li>l'empreinte d'identifiant (<em>Relying Party ID Hash</em>) <code>rpidHash</code></li>
  <li>un compteur de signature</li>
  <li>un test de présence d'utilisateur</li>
  <li>des marqueurs de vérification de l'utilisateur</li>
  <li>les éventuelles extensions traitées par l'authentificateur</li>
 </ul>
 Ce champ est l'un des deux champs qui est signé par l'authentificateur.</dd>
 <dt>{{domxref("AuthenticatorAssertionResponse.signature")}}</dt>
 <dd>Une signature d'assertion par rapport à {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} et {{domxref("AuthenticatorResponse.clientDataJSON")}}. La signature d'assertion est créée avec la clé privée de la paire de clés (générée avec l'appel à <code>create()</code>) et est vérifiée avec la clé publique la même paire de clé.</dd>
 <dt>{{domxref("AuthenticatorAssertionResponse.userHandle")}}</dt>
 <dd>Un objet {{jsxref("ArrayBuffer")}} contenant un identifiant opaque pour l'utilisateur.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p>Aucune.</p>

<h2 id="Exemples">Exemples</h2>

<p>TBD</p>

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

<p>{{Compat("api.AuthenticatorAssertionResponse")}}</p>
