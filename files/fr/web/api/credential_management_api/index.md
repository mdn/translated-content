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
{{APIRef("Credential Management API")}}{{ SeeCompatTable() }}

L'API **Credential Management** (en français : gestion des informations d'authentification) permet à un site web d'enregistrer et de récupérer des informations d'authentifications pour un utilisateur (qu'elles soient fédérées, utilisent un mot de passe ou une paire de clés asymétrique). Un utilisateur peut ainsi se connecter à un service sans avoir à saisir de mot de passe, de voir le compte fédéré utilisé pour se connecter à un site, de rouvrir une session sans avoir à se reconnecter après une session expirée.

## Concepts et utilisation de l'API _Credential Management_

Cette API permet aux sites web d'interagir avec le système de mots de passe de l'agent utilisateur afin que les sites web puissent gérer de façon uniforme les informations d'authentification. Ainsi, les sites et agents utilisateur peuvent mieux communiquer sur ces aspects.

Ainsi, sans cette API, un agent utilisateur pourra rencontrer certaines difficultés à gérer des fournisseurs d'identité fédérée ou d'autres mécanismes de connexion.

> **Note :** Cette API est restreinte aux contextes de plus haut niveau. Les appels à `get()` et `store()` depuis une {{HTMLElement("iframe")}} seront résolus sans aucun effet.

### Informations d'authentification partagées entre les sous-domaines

Les versions les plus récentes de la spécification permettent de récupérer les informations relatives à un sous-domaine différent. Ainsi, un mot de passe enregistré pour `login.example.com` pourrait être utilisé pour se connecter à `www.example.com`. Pour permettre cela, le mot de passe doit explicitement être stocké en appelant {{domxref("CredentialsContainer.store()")}}. Ce comportement est parfois intitulé _Public suffix list (PSL) matching_ (correspondance des listes de suffixes publics). Toutefois, la spécification ne fait que recommander l'utilisation du PSL pour déterminer la portée des informations d'authentification. Formellement, le PSL n'est pas obligatoire. Les navigateurs peuvent donc varier dans leurs implémentations.

## Interfaces

- {{domxref("Credential")}}
  - : Cette interface fournit des informations relatives à une entité qui seront utilisées comme prérequis à l'établissement d'une relation de confiance.
- {{domxref("CredentialsContainer")}}
  - : Cette interface expose des méthodes pour récupérer des informations d'authentification et notifier l'agent utilisateur lorsque des évènements pertinents se produisent (connexion ou déconnexion réussies par exemple). Cette interface est accessible via `navigator.credentials`.
- {{domxref("FederatedCredential")}}
  - : Cette interface fournit des informations relatives à des informations d'authentifcation provenant d'un fournisseur d'identité fédéré (c'est une entité à laquelle un site web fait confiance pour authentifier un utilisateur et qui fournit une API à cet effet). Le _framework_ [OpenID Connect](http://openid.net/developers/specs/) est un exemple d'un tel cas de figure.
- {{domxref("PasswordCredential")}}
  - : Cette interface fournit des informations à propos d'un couple nom d'utilisateur / mot de passe.
- {{domxref("PublicKeyCredential")}}
  - : Cette interface fournit des informations d'authentification pour se connecter à l'aide d'une paire de clés asymétrique (permettant d'éviter le hameçonnage et la fuite de données) plutôt qu'avec un mot de passe.

## Spécifications

| Spécification                                    | État                                         | Commentaires         |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | Définition initiale. |
| {{SpecName('WebAuthn')}}                 | {{Spec2('WebAuthn')}}                 | Définition initiale. |
