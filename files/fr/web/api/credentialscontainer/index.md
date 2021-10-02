---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
tags:
  - API
  - Credential Management API
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/CredentialsContainer
---
<p>{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}</p>

<p>L'interface <strong><code>CredentialsContainer</code></strong>, rattachée à l'<a href="/en-US/docs/Web/API/Credential_Management_API">API Credential Management</a>, expose des méthodes pour demander l'accès aux informations d'authentification et informer l'agent utilisateur lorsque des évènements pertinents se produisent (connexion et déconnexion réussies par exemple). On peut accéder à cette interface via {{domxref('Navigator.credentials')}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<p>Aucune.</p>

<h3 id="Gestionnaires_d'évènements">Gestionnaires d'évènements</h3>

<p>Aucun.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("CredentialsContainer.create()")}}{{securecontext_inline}}</dt>
 <dd>Cette méthode renvoie une promesse ({{jsxref("Promise")}}) qui est résolue avec une nouvelle instance {{domxref("Credential")}} construite selon les options fournies ou <code>null</code> si aucun objet <code>Credential</code> ne peut être créé.</dd>
 <dt>{{domxref("CredentialsContainer.get()")}}{{securecontext_inline}}</dt>
 <dd>Cette méthode renvoie une promesse ({{jsxref("Promise")}}) qui est résolue avec l'instance de {{domxref("Credential")}} qui correspond aux paramètres fournis.</dd>
 <dt>{{domxref("CredentialsContainer.preventSilentAccess()")}}{{securecontext_inline}}</dt>
 <dd>Cette méthode active un marqueur qui indique si une connexion automatique est autorisée pour les futures visites sur cette origine et renvoie une promesse ({{jsxref("Promise")}}) vide. <br>
 <br>
 On pourra par exemple appeler cette méthode après qu'un utilisateur se soit déconnecté d'un site web pour s'assurer qu'il n'est pas reconnecté à la prochaine visite. Dans des versions antérieures de la spécification, cette méthode était intitulée <code>requireUserMediation()</code>. Voir le tableau de compatibilité ci-après pour plus de détails.</dd>
 <dt>{{domxref("CredentialsContainer.store()")}}{{securecontext_inline}}</dt>
 <dd>Cette méthode enregistre des informations d'authentification pour un utilisateur à partir d'une instance {{domxref("Credential")}} fournie et renvoie cette instance dans une promesse ({{jsxref("Promise")}}).</dd>
</dl>

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
  <tr>
   <td>{{SpecName('WebAuthn')}}</td>
   <td>{{Spec2('WebAuthn')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CredentialsContainer")}}</p>
