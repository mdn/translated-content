---
title: 404 Not Found
slug: Web/HTTP/Status/404
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/404
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`404`\*\***` Not Found`\*\* indique qu'un serveur ne peut pas trouver la ressource demandée. Cette réponse est probablement la plus connue du fait de sa fréquence d'apparition sur le Web. Les liens qui entraînent cette erreur sont souvent appelés liens morts ou brisés et conduisent à un [lien rompu](https://fr.wikipedia.org/wiki/Lien_rompu).

Un code de statut 404 n'indique pas si cette absence est temporaire ou permanente. Si le serveur sait que cette condition est permanente, il faudra alors utiliser un code {{HTTPStatus(410)}} (Gone) à la place.

## Statut

    404 Not Found

## Pages d'erreur personnalisées

De nombreux sites Web personnalisent le style de la page 404 afin que celle-ci soit plus utile pour l'utilisateur et fournisse une certaine aide. Les serveurs Apache peuvent par exemple être configurés en utilisant un fichier `.htaccess` contenant un fragment de code tel que celui-ci :

    ErrorDocument 404 /notfound.html

Vous pouvez aussi vous inspirer de [la page 404 de MDN](/fr/404).

> **Note :** le style des pages 404 est [une source d'inspiration infinie](https://www.google.fr/search?q=awesome+404+pages), mais sachez qu'il existe également un [ensemble de meilleurs pratiques](https://alistapart.com/article/perfect404) pour que cette page particulière soit utile pour les utilisateurs.

## Spécifications

| Spécification                                            | Titre                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "404 Not Found" , "6.5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "404")}}

## Voir aussi

- {{HTTPStatus(410)}}
- {{interwiki("wikipedia", "HTTP_404", "Wikipedia: HTTP 404")}}
