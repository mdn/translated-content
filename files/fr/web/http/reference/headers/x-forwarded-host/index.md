---
title: En-tête X-Forwarded-Host
short-title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`X-Forwarded-Host`** (XFH) est un en-tête standard de facto pour identifier l'hôte d'origine demandé par le client dans l'en-tête de requête HTTP {{HTTPHeader("Host")}}.

Les noms d'hôtes et les ports des {{Glossary("Proxy_server", "mandataires")}} inverses (équilibreurs de charge, CDN) peuvent différer du serveur d'origine traitant la requête, dans ce cas l'en-tête `X-Forwarded-Host` est utile pour déterminer quel `Host` a été utilisé à l'origine.

Une version standardisée de cet en-tête est l'en-tête HTTP {{HTTPHeader("Forwarded")}}, bien qu'il soit beaucoup moins utilisé.

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
X-Forwarded-Host: <host>
```

## Directives

- `<host>`
  - : Le nom de domaine du serveur transféré.

## Exemples

```http
X-Forwarded-Host: id42.example-cdn.com
```

## Spécifications

Ne fait pas partie de spécifications actuelles.

## Voir aussi

- Les en-têtes {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}}
- L'en-tête {{HTTPHeader("Host")}}
- L'en-tête {{HTTPHeader("Forwarded")}}
