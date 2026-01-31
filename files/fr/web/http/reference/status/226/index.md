---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`226 IM Used`** indique que le serveur retourne un {{Glossary("delta")}} en réponse à une requête {{HTTPMethod("GET")}}.
Il est utilisé dans le contexte des _encodages delta HTTP_.

IM signifie _instance manipulation_ (manipulation d'instance), ce qui fait référence à l'algorithme générant un _delta_.
En encodage delta, un client envoie une requête {{HTTPMethod("GET")}} avec deux en-têtes&nbsp;: `A-IM:`, qui indique une préférence pour un algorithme de différenciation, et {{HTTPHeader("If-None-Match")}}, qui spécifie la version d'une ressource qu'il possède.
Le serveur répond avec des deltas relatifs à un document de base donné, plutôt que le document complet.
Cette réponse utilise le code de statut `226`, un en-tête `IM:` qui décrit l'algorithme de différenciation utilisé, et peut inclure un en-tête `Delta-Base:` avec le {{HTTPHeader("ETag")}} correspondant au document de base associé au delta.

> [!WARNING]
> Le faible support des encodages delta HTTP fait qu'il existe peu d'implémentations.
> La plupart des systèmes s'appuient uniquement sur les [méthodes de compression](/fr/docs/Web/HTTP/Guides/Compression) pour réduire la bande passante, bien qu'une combinaison de compression et d'encodages delta soit possible.
>
> Même si le client et le serveur prennent en charge les encodages delta, les mandataires ou les caches peuvent ne pas le faire, et la complexité d'ajouter les encodages delta HTTP à un système peut dépasser les bénéfices.

## Statut

```http
226 IM Used
```

## Exemples

### Réception d'un `208` avec l'algorithme delta `vcdiff`

Dans la requête `GET` suivante, un client demande une ressource et possède une version en cache avec l'ETag `abcd123`.
L'en-tête `A-IM:` indique une préférence pour les algorithmes delta `vcdiff` et `diffe`&nbsp;:

```http
GET /resource.txt HTTP/1.1
Host: exemple.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

En supposant que le serveur prend en charge les encodages delta, il répond avec la différence depuis la version avec l'ETag `abcd123`.
L'en-tête `IM` indique que l'algorithme `vcdiff` est utilisé, et l'en-tête `Delta-Base:` indique que la différence est basée sur une ressource avec l'ETag `abcd123`.

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de statut HTTP {{HTTPStatus("200")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Les deltas de flux de syndication aident à réduire les coûts de bande passante des abonnements <sup>(angl.)</sup>](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
