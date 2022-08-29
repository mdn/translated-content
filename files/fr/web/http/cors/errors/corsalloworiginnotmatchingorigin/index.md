---
title: "Raison : l'en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à « xyz »"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
translation_of: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
original_slug: Web/HTTP/CORS/Errors/CORSAllowOriginNeCorrespondPas
---
{{HTTPSidebar}}

## Message

```http
Raison : l'en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à « xyz »
```

En anglais&nbsp;:

```http
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## Quel est le problème&nbsp;?

L'origine de la demande ne correspond à aucune des origines autorisées par l'en-tête [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin). Cette erreur peut également se produire si la réponse contient plus d'un en-tête `Access-Control-Allow-Origin`.

Si vous contrôlez le serveur auquel votre code accède via une requête CORS, assurez-vous qu'il soit configuré pour mentionner votre origine dans son en-tête `Access-Control-Allow-Origin`, et qu'un seul en-tête de ce type est fourni dans les réponses et qu'il contient une seule origine.

Par exemple, dans Apache, ajoutez une ligne comme celle qui suit à la configuration du serveur (dans la section appropriée `<Directory>`, `<Location>`, `<Files>`, ou `<VirtualHost>`). La configuration se trouve généralement dans un fichier `.conf` (`httpd.conf` et `apache.conf` sont des noms couramment attribués à ces fichiers), ou dans un fichier `.htaccess`.

```
Header set Access-Control-Allow-Origin 'origin'
```

Pour Nginx, la commande pour mettre en place cet en-tête est&nbsp;:

```
add_header 'Access-Control-Allow-Origin' 'origin'
```

## Voir aussi

- [Les erreurs relatives au CORS](/fr/docs/Web/HTTP/CORS/Errors)
- Glossaire&nbsp;: [CORS](/fr/docs/Glossary/CORS)
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
- [Activer CORS&nbsp;: je souhaite activer la prise en charge du CORS sur mon serveur (en anglais)](https://enable-cors.org/server.html)
