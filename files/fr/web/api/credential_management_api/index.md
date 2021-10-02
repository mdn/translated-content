---
title: Credential Management API
slug: Web/API/Credential_Management_API
tags:
  - API
  - Credential Management API
  - Landing
  - Reference
  - Web Authentification API
  - WebAuthn
translation_of: Web/API/Credential_Management_API
---
<div>
<p>{{APIRef("Credential Management API")}}{{ SeeCompatTable() }}</p>

<p>L'API <strong>Credential Management</strong> (en français : gestion des informations d'authentification) permet à un site web d'enregistrer et de récupérer des informations d'authentifications pour un utilisateur (qu'elles soient fédérées, utilisent un mot de passe ou une paire de clés asymétrique). Un utilisateur peut ainsi se connecter à un service sans avoir à saisir de mot de passe, de voir le compte fédéré utilisé pour se connecter à un site, de rouvrir une session sans avoir à se reconnecter après une session expirée.</p>

<h2 id="Concepts_et_utilisation_de_l'API_Credential_Management">Concepts et utilisation de l'API <em>Credential Management</em></h2>

<p>Cette API permet aux sites web d'interagir avec le système de mots de passe de l'agent utilisateur afin que les sites web puissent gérer de façon uniforme les informations d'authentification. Ainsi, les sites et agents utilisateur peuvent mieux communiquer sur ces aspects.</p>

<p>Ainsi, sans cette API, un agent utilisateur pourra rencontrer certaines difficultés à gérer des fournisseurs d'identité fédérée ou d'autres mécanismes de connexion.</p>

<div class="note">
<p><strong>Note :</strong> Cette API est restreinte aux contextes de plus haut niveau. Les appels à <code>get()</code> et <code>store()</code> depuis une {{HTMLElement("iframe")}} seront résolus sans aucun effet.</p>
</div>

<h3 id="Informations_d'authentification_partagées_entre_les_sous-domaines">Informations d'authentification partagées entre les sous-domaines</h3>

<p>Les versions les plus récentes de la spécification permettent de récupérer les informations relatives à un sous-domaine différent. Ainsi, un mot de passe enregistré pour <code>login.example.com</code> pourrait être utilisé pour se connecter à <code>www.example.com</code>. Pour permettre cela, le mot de passe doit explicitement être stocké en appelant {{domxref("CredentialsContainer.store()")}}. Ce comportement est parfois intitulé <em>Public suffix list (PSL) matching</em> (correspondance des listes de suffixes publics). Toutefois, la spécification ne fait que recommander l'utilisation du PSL pour déterminer la portée des informations d'authentification. Formellement, le PSL n'est pas obligatoire. Les navigateurs peuvent donc varier dans leurs implémentations.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("Credential")}}</dt>
 <dd>Cette interface fournit des informations relatives à une entité qui seront utilisées comme prérequis à l'établissement d'une relation de confiance.</dd>
 <dt>{{domxref("CredentialsContainer")}}</dt>
 <dd>Cette interface expose des méthodes pour récupérer des informations d'authentification et notifier l'agent utilisateur lorsque des évènements pertinents se produisent (connexion ou déconnexion réussies par exemple). Cette interface est accessible via <code>navigator.credentials</code>.</dd>
 <dt>{{domxref("FederatedCredential")}}</dt>
 <dd>Cette interface fournit des informations relatives à des informations d'authentifcation provenant d'un fournisseur d'identité fédéré (c'est une entité à laquelle un site web fait confiance pour authentifier un utilisateur et qui fournit une API à cet effet). Le <em>framework</em> <a href="http://openid.net/developers/specs/">OpenID Connect</a> est un exemple d'un tel cas de figure.</dd>
 <dt>{{domxref("PasswordCredential")}}</dt>
 <dd>Cette interface fournit des informations à propos d'un couple nom d'utilisateur / mot de passe.</dd>
 <dt>{{domxref("PublicKeyCredential")}}</dt>
 <dd>Cette interface fournit des informations d'authentification pour se connecter à l'aide d'une paire de clés asymétrique (permettant d'éviter le hameçonnage et la fuite de données) plutôt qu'avec un mot de passe.</dd>
</dl>

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
