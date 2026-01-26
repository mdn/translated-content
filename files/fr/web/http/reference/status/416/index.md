---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`416 Range Not Satisfiable`** indique que le serveur n'a pas pu servir les plages demandées.
La raison la plus probable de cette réponse est que le document ne contient pas de telles [plages](/fr/docs/Web/HTTP/Guides/Range_requests), ou que la valeur de l'en-tête {{HTTPHeader("Range")}}, bien que syntaxiquement correcte, n'a pas de sens.

Le message de réponse `416` doit contenir un en-tête {{HTTPHeader("Content-Range")}} indiquant une plage non satisfaite (c'est-à-dire un `'*'`) suivi d'un `'/'` et de la longueur actuelle de la ressource, par exemple `Content-Range: bytes */12777`

Lorsqu'il rencontre cette erreur, le navigateur interrompt généralement l'opération (par exemple, un téléchargement sera considéré comme non reprenable) ou demande à nouveau l'intégralité du document sans plages.

## Statut

```http
416 Range Not Satisfiable
```

## Exemples

### Requête de plage mal formée

La requête suivante demande une plage de 1000 à 1999 octets dans un fichier texte.
La première position (1000) est supérieure à la taille réelle de la ressource sur le serveur (800 octets)&nbsp;:

```http
GET /files/prose.txt HTTP/1.1
Host: exemple.com
Range: bytes=1000-1999
```

Le serveur prend en charge les requêtes de plage et renvoie la longueur actuelle de la représentation sélectionnée dans l'en-tête {{HTTPHeader("Content-Range")}}&nbsp;:

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("206", "206 Partial Content")}}
- [Les requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests)
- L'en-tête HTTP {{HTTPHeader("Content-Range")}}
- L'en-tête HTTP {{HTTPHeader("Range")}}
