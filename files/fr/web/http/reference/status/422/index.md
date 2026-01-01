---
title: 422 Unprocessable Entity
slug: Web/HTTP/Reference/Status/422
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`422 Unprocessable Content`** indique que le serveur a compris le type de contenu de la requête et que la syntaxe du contenu était correcte, mais qu'il n'a pas pu traiter les instructions qu'il contenait.

Les clients qui reçoivent une réponse `422` doivent s'attendre à ce que répéter la requête sans modification échoue avec la même erreur.

## Statut

```http
422 Unprocessable Content
```

## Exemples

### Échec de validation SHA

L'exemple suivant effectue une requête pour mettre à jour le contenu d'un fichier ([basé sur l'API GitHub <sup>(angl.)</sup>](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)).
Le champ `content` est encodé en {{Glossary("Base64")}} et utilise des sauts de ligne `\n` tous les 60 caractères, avec un saut de ligne final&nbsp;:

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.exemple.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

Dans cette implémentation, le serveur attend un contenu encodé en Base64 strictement conforme à la {{RFC("4648")}} (en utilisant des [méthodes d'encodage strictes <sup>(angl.)</sup>](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)).
Une réponse `422 Unprocessable Content` est retournée et le champ `message` fournit un contexte sur l'erreur de validation&nbsp;:

```http
HTTP/1.1 422 Unprocessable Content
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "content is not valid Base64",
  "documentation_url": "https://docs.exemple.com/en/rest/repos/contents"
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
