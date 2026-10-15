---
title: En-tête X-Forwarded-Proto
short-title: X-Forwarded-Proto
slug: Web/HTTP/Reference/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`X-Forwarded-Proto`** (XFP) est un en-tête standard de facto permettant d'identifier le protocole (HTTP ou HTTPS) utilisé par un client pour se connecter à un {{Glossary("Proxy_server", "mandataire")}} ou à un équilibreur de charge.

Les journaux d'accès du serveur contiennent le protocole utilisé entre le serveur et l'équilibreur de charge, mais pas le protocole utilisé entre le client et l'équilibreur de charge.
Pour déterminer le protocole utilisé entre le client et l'équilibreur de charge, l'en-tête de requête `X-Forwarded-Proto` peut être utilisé.

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
X-Forwarded-Proto: <protocol>
```

## Directives

- `<protocol>`
  - : Le protocole transféré (`http` ou `https`).

## Exemples

### Protocole client `X-Forwarded-Proto`

L'en-tête suivant indique que la requête originale a été effectuée par HTTPS avant d'être transférée par un mandataire ou un équilibreur de charge&nbsp;:

```http
X-Forwarded-Proto: https
```

### Formes non standard

Les formes suivantes peuvent être vues dans les en-têtes de requête&nbsp;:

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Spécifications

Ne fait pas partie de spécifications actuelles. La version standardisée de cet en-tête est {{HTTPHeader("Forwarded")}}.

## Voir aussi

- Les en-têtes {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}
- L'en-tête {{HTTPHeader("Forwarded")}}
