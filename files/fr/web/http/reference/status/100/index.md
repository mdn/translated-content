---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse informative](/fr/docs/Web/HTTP/Reference/Status#réponses_informatives) HTTP **`100 Continue`** indique que la première partie d'une requête a été reçue et n'a pas encore été rejetée par le serveur.
Le client doit poursuivre la requête ou ignorer la réponse 100 si la requête est déjà terminée.

Lorsqu'une requête comporte un en-tête {{HTTPHeader("Expect", "Expect: 100-continue")}}, la réponse 100 Continue indique que le serveur est prêt ou capable de recevoir le contenu de la requête.
Attendre une réponse 100 Continue peut être utile si le client anticipe une erreur probable, par exemple lors de l'envoi d'opérations modifiant l'état sans avoir préalablement vérifié les informations d'authentification.

## Statut

```http
100 Continue
```

## Exemples

### Requête PUT avec 100 Continue

La requête {{HTTPMethod("PUT")}} suivante envoie des informations à un serveur pour un téléversement de fichier.
Le client indique qu'il poursuivra l'envoi du contenu s'il reçoit une réponse 100, afin d'éviter d'envoyer des données sur le réseau qui pourraient entraîner une erreur comme {{HTTPStatus("405")}}, {{HTTPStatus("401")}} ou {{HTTPStatus("403")}}.
Dans un premier temps, le client envoie uniquement les en-têtes, dont un en-tête {{HTTPHeader("Expect", "Expect: 100-continue")}}&nbsp;:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 123456789
Expect: 100-continue
```

Le serveur indique que la requête peut continuer&nbsp;:

```http
HTTP/1.1 100 Continue
```

Le client termine la requête en envoyant les données réelles&nbsp;:

```http
[Données vidéo en contenu de la requête PUT]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Expect")}}
- Le code de statut HTTP {{HTTPStatus(417)}}
