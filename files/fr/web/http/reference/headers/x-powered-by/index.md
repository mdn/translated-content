---
title: En-tête X-Powered-By
short-title: X-Powered-By
slug: Web/HTTP/Reference/Headers/X-Powered-By
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`X-Powered-By`** est un en-tête non standard permettant d'identifier l'application ou le cadriciel qui a généré la réponse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "Nom d'en-tête de réponse interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
X-Powered-By: <application>
```

## Directives

- `<application>`
  - : Une chaîne de caractères décrivant l'application serveur ou le cadriciel.

## Exemples

### L'en-tête `X-Powered-By` dans Express

Les applications Express incluent généralement l'en-tête `X-Powered-By` dans les réponses avec la chaîne de caractères `express` comme valeur du champ&nbsp;:

```http
X-Powered-By: express
```

## Spécifications

Ne fait partie d'aucune spécification actuelle.

## Voir aussi

- Les en-têtes {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}}
- L'en-tête {{HTTPHeader("Via")}}
- L'en-tête {{HTTPHeader("Forwarded")}}
