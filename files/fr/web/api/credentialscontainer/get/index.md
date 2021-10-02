---
title: CredentialsContainer.get()
slug: Web/API/CredentialsContainer/get
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Méthode
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/CredentialsContainer/get
---
<p>{{APIRef("Credential Management")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>get()</code></strong>, rattachée à l'interface {{domxref("CredentialsContainer")}}, renvoie une promesse ({{jsxref("Promise")}}) qui est résolue en une instance de {{domxref("Credential")}} correspondant aux paramètres fournis. Si aucune correspondance n'est trouvée, la promesse sera résolue avec la valeur {{jsxref("null")}}.</p>

<p>Cette méthode collecte l'ensemble des informations d'authentification stockées dans l'objet {{domxref("CredentialsContainer")}} et qui respectent les critères indiqués (définis grâce à l'argument <code><strong>options</strong></code>). À partir de cet ensemble, l'agent utilisateur sélectionne la meilleure information d'authentification. Selon les options fournies, l'agent utilisateur pourra afficher une boîte de dialogue et demander à l'utilisateur de sélectionner la bonne information.</p>

<p>Cette méthode récupère les informations d'authentification en appelant la méthode <code>CollectFromCredentialStore</code> pour chaque type d'authentification permis par l'argument <code><strong>options</strong></code>. Ainsi, si la propriété <code>options.password</code> existe dans l'argument passé,   {{domxref("PasswordCredential")}}<code>.[[CollectFromCredentialStore]]</code> sera appelée.</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode ne peut être utilisé que pour les contextes de navigation les plus hauts. Les appels lancés depuis une {{HTMLElement("iframe")}} résoudront la promesse sans aucun effet.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var promise = CredentialsContainer.get([options])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Un objet de type {{domxref("CredentialRequestOptions")}} qui contient les critères de la requête. et les options d'interaction avec l'utilisateur. Cet objet peut contenir les propriétés suivantes :
 <ul>
  <li><code>password</code> : un booléen ({{jsxref("Boolean")}}) qui indique que l'instance {{domxref("Credential")}} renvoyée devrait contenir les informations sur l'utilisateur (contrairement aux informations d'authentification fédérées).</li>
  <li><code>federated</code> : un objet {{domxref("FederatedCredentialRequestOptions")}} qui contient les critères que doivent respecter les informations d'authentification fédérées. Les options disponibles sont :
   <ul>
    <li><code>providers</code> : un tableau de chaînes de caractères {{domxref("DOMString")}} listant les fournisseurs d'identité potentiels</li>
    <li><code>protocols</code> : un tableau de chaînes de caractères {{domxref("DOMString")}} listant les protocoles de fédération à rechercher.</li>
   </ul>
  </li>
  <li><code>publicKey</code> : un objet {{domxref("PublicKeyCredentialRequestOptions")}} contenant les conditions que doivent respecter les informations d'authentification <a href="/fr/docs/Web/API/Web_Authentication_API">WebAuthn</a> qui seront renvoyées.</li>
  <li><code>mediation</code> : une chaîne de caractères {{jsxref("String")}} qui indique si l'utilisateur devra se reconnecter à chaque visite sur le site. Les valeurs valides sont <code>"silent"</code>, <code>"optional"</code> ou <code>"required"</code>.</li>
  <li><code>unmediated</code> : {{deprecated_inline()}} un booléen ({{jsxref("Boolean")}}) qui indique que l'instance {{domxref("Credential")}} renvoyée ne devrait pas nécessiter de médiation avec l'utilisateur.</li>
 </ul>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) qui est résolue avec une instance {{domxref("Credential")}} correspondant aux paramètres fournis. S'il n'est pas possible d'obtenir une seule instance sans ambiguïté, la promesse sera résolue avec la valeur {{jsxref("null")}}.</p>

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
   <td>{{SpecName('Credential Management','#dom-credentialscontainer-get','get()')}}</td>
   <td>{{Spec2('Credential Management')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('WebAuthn')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CredentialsContainer.get")}}</p>
