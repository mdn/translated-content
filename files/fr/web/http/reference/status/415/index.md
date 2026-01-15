---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`415 Unsupported Media Type`** indique que le serveur a refusé d'accepter la requête car le format du {{Glossary("HTTP Content", "contenu")}} du message n'est pas pris en charge.

Le problème de format peut provenir de l'en-tête {{HTTPHeader("Content-Type")}} ou {{HTTPHeader("Content-Encoding")}} indiqué dans la requête, ou résulter du traitement du contenu du message de la requête.
Certains serveurs peuvent être stricts sur le `Content-Type` attendu des requêtes.
Par exemple, envoyer `UTF8` au lieu de `UTF-8` pour définir le jeu de caractères {{Glossary("UTF-8")}} peut amener le serveur à considérer le type de média comme invalide.

## Statut

```http
415 Unsupported Media Type
```

## Exemples

### Type de contenu manquant

Dans l'exemple suivant, l'en-tête {{HTTPHeader("Content-Type")}} est totalement absent&nbsp;:

```http
POST /comments HTTP/1.1
Host: exemple.com
Content-Length: 23

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

Si l'implémentation du serveur attend au moins un type MIME `Content-Type: application/json;` pour la requête à cet endpoint, elle peut envoyer la réponse suivante&nbsp;:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Type de contenu invalide

Dans l'exemple suivant, l'en-tête {{HTTPHeader("Content-Type")}} est incorrectement défini sur des données de formulaire encodées en URL alors que le {{Glossary("HTTP Content", "contenu")}} se trouve dans le corps de la requête&nbsp;:

```http
POST /comments HTTP/1.1
Host: exemple.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

Dans ce cas, le serveur répond avec un code 415, en indiquant le type de contenu requis pour la requête dans l'en-tête {{HTTPHeader("Accept-Post")}}&nbsp;:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Content-Type")}}
- L'en-tête HTTP {{HTTPHeader("Content-Encoding")}}
- L'en-tête HTTP {{HTTPHeader("Accept-Post")}}
