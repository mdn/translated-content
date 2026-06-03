---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

Le code de statut de [réponse informative](/fr/docs/Web/HTTP/Reference/Status#réponses_informatives) HTTP **`102 Processing`** indique au client qu'une requête complète a été reçue et que le serveur est en train de la traiter.
Ce code de statut n'est envoyé que si le serveur prévoit que la requête prendra un temps significatif.

> [!NOTE]
> Les serveurs web classiques ne retournent pas cette réponse.
> Ce code de statut a été introduit initialement dans Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) {{RFC("2518")}}, mais il a été retiré de WebDAV dans {{RFC("4918")}}.

## Statut

```http
102 Processing
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cette fonctionnalité est obsolète et les navigateurs ignorent ce code de statut de réponse.

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("100")}}
- [Notes de suppression du '102 Processing' dans la RFC 4918 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
