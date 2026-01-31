---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`421 Misdirected Request`** indique que la requête a été adressée à un serveur qui n'est pas en mesure de produire une réponse.
Cela peut être envoyé par un serveur qui n'est pas configuré pour produire des réponses pour la combinaison de [schéma](/fr/docs/Web/URI/Reference/Schemes) et d'[autorité](/fr/docs/Web/URI/Reference/Authority) inclus dans l'URI de la requête.

Les clients peuvent réessayer la requête sur une autre connexion.

## Statut

```http
421 Misdirected Request
```

## Exemples

### Erreur SNI Apache

Étant donné la requête suivante&nbsp;:

```http
GET / HTTP/1.1
Host: abc.exemple.com
```

Dans des cas comme un certificat générique (`*.exemple.com`) et une connexion réutilisée pour plusieurs domaines (`abc.exemple.com`, `def.exemple.com`), le serveur peut répondre avec un code 421&nbsp;:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Hôtes multiples et requêtes mal dirigées <sup>(angl.)</sup>](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) documentation Apache Server
- [TLS 1.3](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://fr.wikipedia.org/wiki/Server_Name_Indication)
- [Configuration de Transport Layer Security (TLS)](/fr/docs/Web/Security/Practical_implementation_guides/TLS)
