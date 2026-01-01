---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`511 Network Authentication Required`** indique que le client doit s'authentifier pour obtenir l'accès au réseau.
Ce statut n'est pas généré par les serveurs d'origine, mais par des {{Glossary("Proxy_server", "serveurs mandataires")}} d'interception qui contrôlent l'accès à un réseau.

Les opérateurs de réseau exigent parfois une authentification, l'acceptation de conditions ou une autre interaction utilisateur avant d'accorder l'accès (par exemple dans un cybercafé ou à l'aéroport).
Ils identifient souvent les clients qui ne l'ont pas fait à l'aide de leur adresse de contrôle d'accès au média (MAC).

## Statut

```http
511 Network Authentication Required
```

## Exemples

### Réponse 511 pour une requête GET

Dans l'exemple suivant, un client tente d'accéder à une ressource sur un réseau.
La requête n'est pas authentifiée, et un serveur mandataire envoie un code d'état `511` pour inviter le visiteur à se connecter.
Le code `511` garantit que les clients non-navigateurs n'interpréteront pas la réponse comme provenant du serveur d'origine.
Les navigateurs sont redirigés automatiquement via la balise {{HTMLElement("meta")}} après 10 secondes, ou en cliquant sur le lien dans le corps de la réponse&nbsp;:

```http
GET /document HTTP/1.1
Host: exemple.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html lang="fr">
  <head>
    <title>Authentification réseau requise</title>
    <meta http-equiv="refresh" content="10; url=https://login.exemple.net/">
  </head>
  <body>
    <p>Vous devez <a href="https://login.exemple.net/">vous authentifier auprès du réseau local</a> pour obtenir l'accès.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'entrée de glossaire {{Glossary("Proxy server", "Serveur mandataire")}}
