---
title: "Raison : L'en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à « xyz »"
slug: Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : L'en-tête CORS « Access-Control-Allow-Origin » ne correspond pas à « xyz »
```

En anglais&nbsp;:

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## Quel est le problème ?

La source effectuant la requête ne correspond pas à la source autorisée par l'en-tête {{HTTPHeader("Access-Control-Allow-Origin")}}. Cette erreur peut également se produire si la réponse inclut plus d'un en-tête `Access-Control-Allow-Origin`.

Si le service auquel votre code accède utilise une requête CORS sous votre contrôle, assurez-vous qu'il est configuré pour inclure votre origine dans son en-tête `Access-Control-Allow-Origin`. De plus, confirmez qu'un seul de ces en-têtes est inclus dans les réponses et qu'il inclut uniquement une seule origine.

Par exemple, dans Apache, ajoutez une ligne telle que la suivante à la configuration du serveur (dans la section `<Directory>`, `<Location>`, `<Files>` ou `<VirtualHost>` appropriée). La configuration se trouve généralement dans un fichier `.conf` (`httpd.conf` et `apache.conf` sont des noms courants pour ces fichiers), ou dans un fichier `.htaccess`.

> [!WARNING]
> Vous devez inclure les protocoles HTTPS ou HTTP dans l'origine.

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

Pour Nginx, la commande pour configurer cet en-tête est&nbsp;:

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Activer CORS&nbsp;: je souhaite activer la prise en charge du CORS sur mon serveur <sup>(angl.)</sup>](https://enable-cors.org/server.html)
