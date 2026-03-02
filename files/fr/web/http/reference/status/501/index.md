---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`501 Not Implemented`** signifie que le serveur ne prend pas en charge la fonctionnalité requise pour satisfaire la requête.

Une réponse avec ce statut peut également inclure un en-tête {{HTTPHeader("Retry-After")}}, indiquant au client qu'il peut réessayer la requête après le délai défini.
Une réponse `501` est mise en cache par défaut, sauf si des en-têtes de cache en disposent autrement.

`501` est la réponse appropriée lorsque le serveur ne reconnaît pas la méthode de la requête et est incapable de la prendre en charge pour une ressource quelconque.
Les serveurs doivent prendre en charge {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, et ne doivent donc pas retourner `501` en réponse à des requêtes utilisant ces méthodes.
Si le serveur reconnaît la méthode mais ne l'autorise pas intentionnellement, la réponse appropriée est {{HTTPStatus("405", "405 Method Not Allowed")}}.

Si vous avez visité une page web et que vous voyez des erreurs `501`, ces problèmes nécessitent une investigation et une correction par les propriétaires ou administrateur·ice·s du serveur.
Vous pouvez vider le cache de votre navigateur pour le domaine, désactiver les mandataires (<i lang="en">proxies</i> en anglais) si vous en utilisez un, ou réessayer plus tard pour voir si cela fonctionne comme prévu.

Une réponse `501` peut survenir si des mandataires ne peuvent pas gérer les méthodes de requête utilisées dans le contexte d'applications HTTP Extension Framework ({{RFC("2774")}}).
Ce statut peut également survenir dans Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) lorsqu'une méthode de requête (`SEARCH`, `PROPFIND`) n'a pas de gestionnaire d'URL configuré pour la traiter.

## Statut

```http
501 Not Implemented
```

## Exemples

### Méthode d'extension non prise en charge

Dans l'exemple suivant du HTTP Extension Framework, un client envoie une requête avec une extension obligatoire définie dans l'en-tête `C-MAN`.
L'en-tête {{HTTPHeader("Connection")}} indique que ces extensions doivent être traitées sur une base [de point à point](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_point_à_point_hop-by-hop_headers).
Un mandataire refuse de transmettre la méthode `M-GET` et envoie une erreur `501` en réponse&nbsp;:

```http
M-GET /document HTTP/1.1
Host: exemple.com
C-Man: "http://www.exemple.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("510", "510 Not Extended")}}
- [Erreurs HTTP 501 <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) dans la documentation Microsoft ASP.NET
