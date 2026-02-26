---
title: 207 Multi-Status
slug: Web/HTTP/Reference/Status/207
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`207 Multi-Status`** indique un mélange de réponses.
Cette réponse est utilisée exclusivement dans le contexte de <i lang="en">Web Distributed Authoring and Versioning</i> ({{Glossary("WebDAV")}}).

Le corps de la réponse est une entité HTTP `text/xml` ou `application/xml` avec un élément racine `multistatus` qui liste les codes de réponse individuels.

> [!NOTE]
> Les navigateurs accédant à des pages web ne rencontreront jamais ce code de statut.
> La capacité à retourner une _collection de ressources_ fait partie du protocole {{Glossary("WebDAV")}} et n'est rencontrée que par les applications web qui accèdent à un serveur WebDAV.

## Statut

```http
207 Multi-Status
```

## Exemples

### Réception d'une réponse `207` dans un contexte WebDAV

La réponse suivante est un exemple de réponse `207` qu'un serveur {{Glossary("WebDAV")}} envoie à un client.
Il y a un élément racine `multistatus` avec les détails des collections individuelles&nbsp;:

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"
Content-Length: 1241

<?xml version="1.0" encoding="utf-8" ?>
<D:multistatus xmlns:D="DAV:">
  <D:response>
    <D:href>http://www.exemple.com/Coll/</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Boucle de démonstration</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.exemple.com/Coll/Toto</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Boucle de démonstration</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 208 Already Reported</D:status>
    </D:propstat>
  </D:response>
</D:multistatus>
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le code de statut HTTP {{HTTPStatus("204")}}
- Le code de statut HTTP {{HTTPStatus("403")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
