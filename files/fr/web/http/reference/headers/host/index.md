---
title: En-tête Host
short-title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Host`** définit le nom d'hôte et le numéro de port du serveur auquel la requête est envoyée.

Si aucun port n'est inclus, le port par défaut pour le service demandé est implicite (par exemple, `443` pour une URL HTTPS, et `80` pour une URL HTTP).

Un champ d'en-tête `Host` doit être envoyé dans tous les messages de requête HTTP/1.1.
Un code d'état {{HTTPStatus("400", "400 Bad Request")}} peut être envoyé à tout message de requête HTTP/1.1 qui n'a pas ou qui contient plus d'un champ d'en-tête `Host`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Host: <host>:<port>
```

## Directives

- `<host>`
  - : Le nom de domaine du serveur (pour de l'hébergement virtuel).
- `<port>` {{Optional_Inline}}
  - : Le numéro de port TCP sur lequel le serveur écoute.

## Exemples

```http
Host: developer.mozilla.org
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("400", "400 Bad Request")}}
- L'élément HTML {{HTMLElement("base")}}
