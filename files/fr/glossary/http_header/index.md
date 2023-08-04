---
title: En-tête
slug: Glossary/HTTP_header
---

Un **en-tête HTTP** est un champ de requête ou de réponse HTTP permettant de transmettre des informations supplémentaires modifiant ou précisant la sémantique du message ou de son contenu. Les en-têtes ne sont pas sensibles à la casse, commencent au début d'une ligne et sont immédiatemment suivis d'un '`:`' et d'une valeur dépendant de l'en-tête en question. La valeur se termine au retour chariot suivant ou à la fin du message.

Traditionnellement, les en-têtes sont classés en catégories, mais cette classification ne fait plus partie d'aucune spécification :

- {{Glossary("General header","en-tête général")}} : en-têtes applicables à la fois aux requêtes et aux réponses, mais sans lien avec les données eventuellement transmises dans le corps du message.
- {{Glossary("Request header","en-tête de requête")}} : en-têtes contenant des informations supplémentaires sur la ressource à récupérer ou sur le client lui-même.
- {{Glossary("Response header","en-tête de réponse")}} : en-têtes contenant des informations supplémentaires à propos de la réponse, telles que son emplacement, ou à propos du serveur lui-même (nom, version...).
- {{Glossary("Entity header","en-tête d'entité")}} : en-têtes contenant des informations supplémentaires sur le corps de l'entité, telles que la taille de son contenu ou son type MIME.

Requête basique avec un seul en-tête :

```
GET /example.http HTTP/1.1
Host: example.com
```

Les redirections ont des en-têtes obligatoires ({{HTTPHeader("Location")}}) :

```
302 Found
Location: /NewPage.html
```

Un ensemble d'en-têtes typique :

```
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

## Voir aussi

### Culture générale

- Syntaxe des [en-têtes](https://tools.ietf.org/html/rfc7230#section-3.2) dans la spécification HTTP.

### Informations techniques

- [Liste de tous les en-têtes HTTP](/fr/docs/HTTP/Headers)
