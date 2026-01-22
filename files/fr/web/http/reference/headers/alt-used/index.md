---
title: En-tête Alt-Used
short-title: Alt-Used
slug: Web/HTTP/Reference/Headers/Alt-Used
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Alt-Used`** est utilisé pour identifier le service alternatif utilisé, tout comme le champ d'en-tête HTTP {{HTTPHeader("Host")}} identifie l'hôte et le port de l'origine.

Cela permet aux services alternatifs de détecter les boucles, de différencier le trafic à des fins d'équilibrage de charge, et plus généralement de s'assurer qu'il est possible d'identifier la destination prévue du trafic, car introduire cette information après la mise en service d'un protocole s'est avéré problématique.

Lorsqu'un client utilise un service alternatif pour une requête, il peut l'indiquer au serveur à l'aide de l'en-tête HTTP `Alt-Used`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Alt-Used: <host>:<port>
```

## Directives

- `<host>`
  - : Le nom de domaine du serveur.
- `<port>` {{Optional_Inline}}
  - : Le numéro de port TCP sur lequel le serveur écoute.

## Exemples

```http
Alt-Used: alternate.example.net
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Alt-Svc")}}
- L'en-tête HTTP {{HTTPHeader("Host")}}
