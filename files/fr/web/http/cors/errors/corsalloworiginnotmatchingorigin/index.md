---
title: >-
  Raison : l’en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à «
  xyz »
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
tags:
  - CORSAllowOriginNeCorrespondPas
  - Dépannage
  - Erreur
  - Raison
  - Sécurité
translation_of: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
original_slug: Web/HTTP/CORS/Errors/CORSAllowOriginNeCorrespondPas
---
{{HTTPSidebar}}

## Symptomes

    Raison : l’en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à « xyz »

## Quel est le problème ?

En clair, l'origine de la demande ne correspond à aucune des origines autorisées par l'en-tête {{HTTPHeader("Access-Control-Allow-Origin")}}.

Cette erreur peut également se produire si la réponse contient plus d'un en-tête `Access-Control-Allow-Origin`.

Si vous contrôlez le serveur auquel votre code accède via une requête CORS, assurez-vous qu'il est configuré pour mentionner votre origine dans son entête `Access-Control-Allow-Origin`, avec un seul entête de ce type dans les réponses. Cet en-tête accepte une liste d'origines délimitée par des virgules, de sorte que l'ajout d'une nouvelle origine n'est pas difficile.

Par exemple, dans Apache, ajoutez une ligne comme celle qui suit à la configuration du serveur (dans la section appropriée `<Directory>`, `<Location>`, `<Files>`, ou `<VirtualHost>`). La configuration se trouve généralement dans un fichier `.conf` (`httpd.conf` et `apache.conf` sont des noms couramment attribués à ces fichiers), ou dans un fichier `.htaccess`.

    Header set Access-Control-Allow-Origin 'origin-list'

Pour Nginx, la commande pour mettre en place cet entête est :

    add_header 'Access-Control-Allow-Origin' 'origin-list'

## Voir aussi

- [Erreurs CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS/Errors)
- Glossaire : {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
