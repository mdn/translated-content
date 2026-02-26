---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`423 Locked`** indique qu'une ressource est _verrouillée_, ce qui signifie qu'elle ne peut pas être accédée.
Le corps de la réponse doit contenir des informations au format XML de {{Glossary("WebDAV")}}.

> [!NOTE]
> La capacité de _verrouiller_ une ressource pour éviter les conflits est propre à certains serveurs {{Glossary("WebDAV")}}.
> Les navigateurs accédant à des pages web ne rencontreront jamais ce code d'état&nbsp;; dans les cas erronés où cela se produit, ils le traiteront comme un code d'état générique {{HTTPStatus(400)}}.

## Statut

```http
423 Locked
```

## Exemples

### Réponse WebDAV 423 Locked

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/web-dav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
