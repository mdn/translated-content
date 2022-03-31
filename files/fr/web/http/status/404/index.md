---
title: 404 Not Found
slug: Web/HTTP/Status/404
translation_of: Web/HTTP/Status/404
browser-compat: http.status.404
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`404 Not Found`** indique qu'un serveur ne peut pas trouver la ressource demandée. Cette réponse est probablement la plus connue du fait de sa fréquence d'apparition sur le Web. Les liens qui entraînent cette erreur sont souvent appelés liens morts ou brisés et conduisent à un [lien rompu](https://fr.wikipedia.org/wiki/Lien_rompu).

Un code de statut 404 n'indique pas si cette absence est temporaire ou permanente. Si le serveur sait que cette condition est permanente, il faudra alors utiliser un code [`410`](/fr/docs/Web/HTTP/Status/410) (Gone) à la place.

## Statut

```
404 Not Found
```

## Pages d'erreur personnalisées

De nombreux sites Web personnalisent le style de la page 404 afin que celle-ci soit plus utile pour l'utilisateur et fournisse une certaine aide. Les serveurs Apache peuvent par exemple être configurés en utilisant un fichier `.htaccess` contenant un fragment de code tel que celui-ci&nbsp;:

```
ErrorDocument 404 /notfound.html
```

Vous pouvez aussi vous inspirer de [la page 404 de MDN](/fr/404).

> **Note :** Le style des pages 404 est [une source d'inspiration infinie](https://www.google.fr/search?q=awesome+404+pages), mais sachez qu'il existe également un [ensemble de meilleurs pratiques](https://alistapart.com/article/perfect404) pour que cette page particulière soit utile pour les utilisateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`410`](/fr/docs/Web/HTTP/Status/410)
- [Wikipédia&nbsp;: Erreur HTTP 404](https://fr.wikipedia.org/wiki/Erreur_HTTP_404)
