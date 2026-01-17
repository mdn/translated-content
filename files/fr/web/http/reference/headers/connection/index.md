---
title: En-tête Connection
short-title: Connection
slug: Web/HTTP/Reference/Headers/Connection
l10n:
  sourceCommit: 0e40ec22841891d42376ad8a6d29135953c5106c
---

L'en-tête HTTP **`Connection`** contrôle la façon dont la connexion reste ouverte ou non après que la transaction courante soit terminée.
Si la valeur envoyée est `keep-alive`, la connexion est persistente et n'est pas fermée, permettant aux requêtes qui suivent et s'adressent au même serveur d'être envoyées.

> [!WARNING]
> Les en‑têtes spécifiques à la connexion, tels que `Connection` et {{HTTPHeader("Keep-Alive")}}, sont interdits dans [HTTP/2 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) et [HTTP/3 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9114.html#header-formatting).
> Chrome et Firefox les ignorent dans les réponses HTTP/2, mais Safari se conforme aux exigences de la spécification HTTP/2 et ne charge aucune réponse qui les contient.

Tous les en‑têtes hop-by-hop, y compris les en‑têtes standard [de point à point](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_point_à_point_hop-by-hop_headers) ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} et {{HTTPHeader("Proxy-Authenticate")}}) doivent être listés dans l'en‑tête `Connection`, afin que le premier proxy sache qu'il doit les consommer et ne pas les transmettre plus loin.

La valeur par défaut de `Connection` a changé entre HTTP/1.0 et HTTP/1.1.
Par conséquent, pour assurer la rétrocompatibilité, les navigateurs envoient souvent explicitement `Connection: keep-alive`, même si c'est la valeur par défaut en HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Connection: keep-alive
Connection: close
```

## Directives

- `close`
  - : Indique que le client ou que le serveur souhaite fermer la connexion.
    C'est la valeur par défaut pour les requêtes en HTTP/1.0.
- Une liste d'en-têtes HTTP séparés par des virgules (généralement, la valeur `keep-alive` seule)
  - : Indique que le client souhaite que la connexion reste ouverte. Une connexion persistente est le comportement par défaut pour les requêtes HTTP/1.1.
    La liste des en-têtes sont le nom des en-têtes à retirer par le premier proxy ou cache non-transparent entre le client et le serveur&nbsp;: ces en-tête définissent la connexion entre l'émetteur et la première entité (pas jusqu'au nœud de destination).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des connexions dans HTTP/1.x](/fr/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
