---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`208 Already Reported`** est utilisé dans une réponse {{HTTPStatus("207", "207 Multi-Status")}} pour économiser de l'espace et éviter les conflits.
Cette réponse est utilisée exclusivement dans le contexte de <i lang="en">Web Distributed Authoring and Versioning</i> ({{Glossary("WebDAV")}}).

Si la même ressource est demandée plusieurs fois (par exemple, dans le cadre d'une collection) avec des chemins différents, seule la première est signalée avec {{HTTPStatus("200")}}.
Les réponses pour tous les autres liens signaleront ce code de statut `208`, afin qu'aucun conflit ne soit créé et que la réponse reste plus courte.

> [!NOTE]
> La capacité de _lier_ une ressource à plusieurs chemins est une extension du protocole {{Glossary("WebDAV")}} (elle peut être reçue par des applications web accédant à un serveur WebDAV).
> Les navigateurs accédant à des pages web ne rencontreront jamais ce code de statut.

## Statut

```http
208 Already Reported
```

## Exemples

### Réception d'un `208` dans une réponse `207 Multi-Status`

Voici un exemple de réponse `207 Multi-Status` d'un serveur WebDAV, qui inclut une réponse `208`.
Remarquez le `208` dans le dernier élément `<D:status>`, qui indique que la ressource nommée «&nbsp;Boucle de démonstration&nbsp;» a déjà été signalée plus haut dans la réponse `207`.

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
        <D:displayname>Inventaire des oiseaux</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.exemple.com/Coll/Tata</D:href>
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

- Le code de statut HTTP {{HTTPStatus("200")}}
- Le code de statut HTTP {{HTTPStatus("508", "508 Loop Detected")}}
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
