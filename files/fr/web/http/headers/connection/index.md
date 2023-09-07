---
title: Connection
slug: Web/HTTP/Headers/Connection
---

{{HTTPSidebar}}

L'en-tête général **`Connection`** contrôle la façon dont la connexion reste ouverte ou non après que la transaction courante soit terminée. Si la valeur envoyée est `keep-alive`, la connexion est persistente et n'est pas fermée, permettant aux requêtes qui suivent et s'adressent au même serveur d'être envoyées.

> **Note :** [Les champs d'en-tête spécifiques à la connexion (tels que `Connection`) ne doivent pas être utilisés avec HTTP/2.](https://tools.ietf.org/html/rfc7540#section-8.1.2.2)

Except for the standard hop-by-hop headers ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} and {{HTTPHeader("Proxy-Authenticate")}}), any hop-by-hop headers used by the message must be listed in the `Connection` header, so that the first proxy knows it has to consume them and not forward them further. Standard hop-by-hop headers can be listed too (it is often the case of {{HTTPHeader("Keep-Alive")}}, but this is not mandatory).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossaire/General_header">En-tête général</a></td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossaire/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Connection: keep-alive
Connection: close
```

## Directives

- `close`
  - : Indique que le client ou que le serveur souhaite fermer la connexion. C'est la valeur par défaut pour les requêtes en HTTP/1.0.
- Une liste d'en-têtes HTTP séparés par des virgules (généralement, la valeur `keep-alive` seule)
  - : Indique que le client souhaite que la connexion reste ouverte. Une connexion persistente est le comportement par défaut pour les requêtes HTTP/1.1. La liste des en-têtes sont le nom des en-têtes à retirer par le premier proxy ou cache non-transparent entre le client et le serveur : ces en-tête définissent la connexion entre l'émetteur et la première entité (pas jusqu'au nœud de destination).

## Compatibilité des navigateurs

{{Compat}}
