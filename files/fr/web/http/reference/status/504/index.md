---
title: 504 Gateway Timeout
slug: Web/HTTP/Reference/Status/504
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`504 Gateway Timeout`** indique que le serveur, agissant en tant que passerelle ou {{Glossary("Proxy_server", "serveur mandataire")}}, n'a pas reçu de réponse à temps du serveur en amont pour compléter la requête.
Cela est similaire à {{HTTPStatus("502", "502 Bad Gateway")}}, sauf que dans le cas d'un code `504`, le proxy ou la passerelle n'a reçu aucune réponse HTTP de l'origine dans le délai imparti.

Il existe de nombreuses causes d'erreurs `504`, et la résolution de ces problèmes nécessite probablement une investigation et un débogage par les administrateur·ice·s du serveur, ou le site peut fonctionner à nouveau plus tard.
Les exceptions sont les erreurs réseau côté client, en particulier si le service fonctionne pour d'autres visiteur·euse·s, et si les clients utilisent des VPN ou d'autres configurations réseau personnalisées.
Dans ces cas, les clients doivent vérifier les paramètres réseau, la configuration du pare-feu, les paramètres du proxy, la configuration DNS, etc.

## Statut

```http
504 Gateway Timeout
```

## Exemples

### Réponse d'expiration de la passerelle 504

La requête suivante tente d'obtenir une page web, mais reçoit en retour une réponse `504`.
Le corps de la réponse contient une page décrivant l'état du serveur avec un lien vers une page d'assistance pour les visiteurs.

```http
GET /highlights HTTP/1.1
Host: exemple.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="fr">
<head>
  <title>504 Gateway Timeout</title>
</head>
<body>
  <h1>Expiration de la passerelle</h1>
  <p>Le serveur n'a pas répondu à temps. Veuillez réessayer plus tard.</p>
  <p>Si ce problème persiste, veuillez <a href="https://exemple.com/support">contacter le support</a>.</p>
</body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [HTTP response status codes](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("502", "502 Bad Gateway")}}
