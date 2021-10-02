---
title: PasswordCredential
slug: Web/API/PasswordCredential
tags:
  - API
  - Credential Management API
  - Interface
  - PasswordCredential
  - Reference
translation_of: Web/API/PasswordCredential
---
<p>{{SeeCompatTable}}{{APIRef("Credential Management API")}}</p>

<p>L'interface <code><strong>PasswordCredential</strong></code>, rattachée à l'<a href="/fr/docs/Web/API/Credential_Management_API">API Credential Management</a>, fournit des informations quant à un couple nom d'utilisateur/mot de passe. Pour les navigateurs qui prennent en charge cette fonctionnalité, une instance de cette interface peut être passée comme propriété <code>credential</code> de l'objet <code>init</code> utilisé comme argument de la méthode globale {{domxref('fetch')}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("PasswordCredential.PasswordCredential()","PasswordCredential()")}}</dt>
 <dd>Crée un nouvel objet <code>PasswordCredential</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de l'interface parente, {{domxref("Credential")}}.</em></p>

<dl>
 <dt>{{domxref("PasswordCredential.additionalData")}} {{deprecated_inline()}}</dt>
 <dd>Une instance {{domxref("FormData")}} ou une instance {{domxref("URLSearchParams")}} ou {{jsxref("null")}}. Les données de cet objet seront ajoutées au corps de la requête et envoyées au point distant avec les informations d'authentification.</dd>
 <dt>{{domxref("PasswordCredential.iconURL")}} {{readonlyinline}}</dt>
 <dd>Une chaîne de caractères {{domxref("USVString")}} contenant une URL qui pointe vers une image servant d'icône. Cette image est destinée à être utilisée dans le sélecteur d'informations d'authentification. L'URL doit être accessible sans authentification.</dd>
 <dt>{{domxref("PasswordCredential.idName")}} {{deprecated_inline()}}</dt>
 <dd>Une chaîne de caractères {{domxref("USVString")}} contenant le nom qui sera uitlisé pour le champ d'identifiant lorsque l'objet courant sera envoyé au point distant grâce à {{domxref("fetch")}}. La valeur par défaut correspond à <code>"username"</code> mais il est possible de surcharger cette valeur afin qu'elle corresponde à ce qui est attendu par le service distant.</dd>
 <dt>{{domxref("PasswordCredential.name")}} {{readonlyinline}}</dt>
 <dd>Une chaîne de caractères {{domxref("USVString")}} qui contient un nom public, lisible par un humain et qui sera affiché dans le sélecteur d'informations d'authentification.</dd>
 <dt>{{domxref("PasswordCredential.password")}} {{readonlyinline}}</dt>
 <dd>Une chaîne de caractères {{domxref("USVString")}} qui contient le mot de passe associé aux informations d'authentification.</dd>
 <dt>{{domxref("PasswordCredential.passwordName")}} {{deprecated_inline()}}</dt>
 <dd>Une chaîne de caractères {{domxref("USVString")}} qui représente le nom utilisé pour le mot de passe lorsque l'objet courant est envoyé au point distant avec {{domxref("fetch")}}. Par défaut, cette propriété vaut <code>"password"</code> mais elle peut être surchargée afin que sa valeur corresponde à ce qui est attendu par le service distant.</dd>
</dl>

<h3 id="Gestionnaires_d'évènement">Gestionnaires d'évènement</h3>

<p>Aucun.</p>

<h2 id="Méthodes">Méthodes</h2>

<p>Aucune.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var cred = new PasswordCredential({
  id: id,
  password: password,
  name: name,
  iconURL: iconUrl
});

navigator.credentials.store(cred)
 .then(function() {
 // Faire quelque chose avec.
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Credential Management')}}</td>
   <td>{{Spec2('Credential Management')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PasswordCredential")}}</p>
