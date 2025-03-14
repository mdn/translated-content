---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

L'en-tête de requête **`Host`** spécifie le nom de domaine du serveur (pour de l'hébergement virtuel), et (optionnellement) le numéro du port TCP sur lequel le serveur écoute.

Si aucun port n'est donné, le port par défaut du service demandé sera utilisé (par exemple, "80" pour une URL HTTP).

Un champ d'en-tête `Host` doit être envoyé dans tous les messages de requête HTTP/1.1. Un code HTTP {{HTTPStatus("400")}} (Bad Request) sera envoyé à tout message de requette HTTP/1.1 ne contenant pas un champ d'en-tête `Host` ou qui en contient plus d'un.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header","En-tête de requête")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name"," Nom d'en-tête interdit ")}}
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Host: <host>:<port>
```

## Directives

- \<host>
  - : le nom de domaine du serveur (pour de l'hébergement virtuel).
- \<port> {{optional_inline}}
  - : numéro de port TCP sur lequel le serveur écoute.

## Exemples

```
Host: developer.mozilla.org
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
