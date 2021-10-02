---
title: AuthenticatorAssertionResponse.authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
tags:
  - API
  - Propriété
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/AuthenticatorAssertionResponse/authenticatorData
---
<p>{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}</p>

<p>La propriété <code><strong>authenticatorData</strong></code> (rattachée à  l'interface {{domxref("AuthenticatorAssertionResponse")}}) fournit un {{jsxref("ArrayBuffer")}} qui contient les informations relatives à l'authenticateur tels que :</p>

<ul>
 <li>l'empreinte d'identifiant (rpIdHash pour <em>Relying Party ID Hash</em>)</li>
 <li>un compteur de signature</li>
 <li>un test quant à la présence de l'utilisateur</li>
 <li>des marqueurs (<em>flags</em>) de vérification de l'utilisateur</li>
 <li>les éventuelles extensions traitées par l'authenticateur</li>
</ul>

<p>Cette propriété est signée par l'authenticateur (c'est l'un des deux champs qui est signé).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var authnrData = assertion.response.authnrData;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{jsxref("ArrayBuffer")}} dont la propriété {{jsxref("ArrayBuffer.byteLength")}} indique qu'il mesure au moins 37 octets et qui contient les champs suivants :</p>

<ul>
 <li><code><strong>rpIdHash</strong></code> (32 octets) - Une empreinte SHA256 de l'identifiant de la partie fiable (i.e. - le domaine) tel que vu par le navigateur. Le serveur s'assurera ensuite que cette empreinte correspond à sa propre origine afin d'empêcher les tentatives de hameçonnage (<em>phishing</em>) ou d'autres attaques de l'homme du milieu (<em>man-in-the-middle</em>).</li>
 <li><code><strong>flags</strong></code> (1 octet) - Une série de bits qui indique les différents attributs validés par l'authenticateur. Les bits sont décrits comme suit (où le bit 0 correspond au bit de poids faible) (tous les bits ne sont pas mentionnés car certains sont réservés pour une utilisation future) :
  <ul>
   <li>Bit 0 : Présence de l'utilisateur (<em>User Presence</em> - UP) : si ce bit est actif, cela signifie que l'authenticateur a validé la présence de l'utilisateur par un test de présence (<em>Test of User Presence</em> - TUP). Cela peut notamment correspondre à l'appui sur un bouton de l'authenticateur.</li>
   <li>Bit 2 : Vérification de l'utilisateur (<em>User Verification</em> - UV) : si ce bit est actif, cela signifie que l'authenticateur a vérifié l'utilisateur en question via une méthode d'authentification (biométrique, code PIN, autre).</li>
   <li>Bit 6 : Présence des données d'authentification vérifiées (<em>Attested Credential Data </em>- AT) : si ce bit est actif, le champ <code>attestedCredentialData</code> suivra immédiatement après les 37 premiers octets de cet objet.</li>
   <li>Bit 7 : Présence des données d'extension (<em>Extension data</em> - ED) : si ce bit est actif, les données d'extensions suivront le champ <code>attestedCredentialData</code> s'il est présent ou seront situées après les 37 premiers octets de cet objet sinon.</li>
  </ul>
 </li>
 <li><code><strong>signCount</strong></code> (4 octets) : un compteur de signature provenant de l'authenticateur. Cela permet au serveur de détecter un éventuel clonage de l'authenticateur.</li>
 <li><code><strong>attestedCredentialData</strong></code> (longueur variable) : les informations d'authentification qui ont été créées. Ce champ est uniquement présent lors d'un appel à <code>navigator.credentials.create()</code>. Ces informations sont représentées par une séquence d'octets au format suivant :
  <ul>
   <li><code><strong>AAGUID</strong></code> (16 octets) - <em>Authenticator Attestation Globally Unique Identifier</em>, un identifiant universel unique pour l'attestation de l'authenticateur qui identifie le modèle de l'authenticateur (pas cet exemplaire en particulier) afin qu'une autre partie puisse comprendre les caractéristiques de l'authenticateur en consultant ses méta-données.</li>
   <li><code><strong>credentialIdLength</strong></code> (2 octets) - la longueur, en octets, de l'identifiant d'authentification qui suit ces octets.</li>
   <li><code><strong>credentialId</strong></code> (longueur variable) - un identifiant unique pour ces informations d'authentification et qui pourra être demandé pour de futures authentifications. Cette information mesure <code>credentialIdLength</code> octets.</li>
   <li><code><strong>credentialPublicKey</strong></code> (longueur variable) - une clé publique encodée au format <a href="https://tools.ietf.org/html/rfc8152">COSE</a>. Cette clé publique sera stockée sur le serveur et associée au compte de l'utilisateur afin d'être utilisée pour de futures authentifications.</li>
  </ul>
 </li>
 <li><code><strong>extensions</strong></code> (longueur variable) - Une carte optionnelle, encodée au format <a href="https://tools.ietf.org/html/rfc7049">CBOR</a>, et qui contient les extensions de l'authenticateur.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>TBD</p>

<h2 id="Specifications">Specifications</h2>

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
