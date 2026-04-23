---
title: 502 Bad Gateway
slug: Web/HTTP/Reference/Status/502
l10n:
  sourceCommit: dd0fe980a26938d585691d1429c8a941fa6824ff
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`502 Bad Gateway`** indique qu'un serveur agissait en tant que passerelle ou {{Glossary("Proxy_server", "serveur mandataire")}} et qu'il a reçu une réponse non valide du serveur en amont.

Cette réponse est similaire à une réponse {{HTTPStatus("500", "500 Internal Server Error")}} en ce sens qu'il s'agit d'une réponse générique «&nbsp;passe-partout&nbsp;» pour les erreurs serveur.
La différence est qu'elle est spécifique au point de la chaîne de requête où l'erreur s'est produite.
Si le serveur d'origine envoie une réponse d'erreur HTTP valide à la passerelle, la réponse doit être transmise au client au lieu d'un code `502` afin de rendre la raison de l'échec transparente.
Si le proxy ou la passerelle n'a reçu aucune réponse HTTP de l'origine, il envoie à la place un code {{HTTPStatus("504", "504 Gateway Timeout")}} au client.

Il existe de nombreuses causes d'erreurs `502`, et la résolution de ces problèmes nécessite probablement une investigation par les propriétaires ou administrateur·ice·s du serveur.
Les exceptions sont les erreurs réseau côté client, en particulier si le service fonctionne pour d'autres visiteur·euse·s, et si les clients utilisent des VPN ou d'autres configurations réseau personnalisées.
Dans ces cas, les clients doivent vérifier les paramètres réseau, la configuration du pare-feu, les paramètres du proxy, la configuration DNS, etc.

## Statut

```http
502 Bad Gateway
```

## Exemples

### Réponse d'erreur passerelle 502

La requête suivante tente d'obtenir une page web, mais reçoit en retour une réponse `502`.
Le corps de la réponse contient une page décrivant l'état du serveur avec un lien vers une page d'assistance pour les visiteurs.

```http
GET /highlights HTTP/1.1
Host: exemple.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 502 Bad Gateway
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="fr">
<head>
  <title>502 Bad Gateway</title>
</head>
<body>
  <h1>Mauvaise passerelle</h1>
  <p>Le serveur n'a pas pu traiter votre requête. Veuillez réessayer plus tard.</p>
  <p>Si ce problème persiste, veuillez <a href="https://exemple.com/support">contacter le support</a>.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("504", "504 Gateway Timeout")}}
