---
title: En-tête Sec-CH-UA-Platform-Version
short-title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Platform-Version`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui fournit la version du système d'exploitation sur lequel l'agent utilisateur s'exécute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indication du client</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-CH-UA-Platform-Version: <version>
```

### Directives

- `<version>`
  - : La chaîne de caractères de version contient généralement la version du système d'exploitation sous forme de chaîne de caractères, composée de numéros de version majeurs, mineurs et de correctifs séparés par des points, par exemple `"11.0.0"`.
    La chaîne de caractères de version sur Linux est toujours vide.

## Exemples

### Utiliser `Sec-CH-UA-Platform-Version`

Un serveur demande l'en-tête `Sec-CH-UA-Platform-Version` en incluant {{HTTPHeader("Accept-CH")}} dans une _réponse_ à toute requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Le client peut choisir de fournir l'indication et d'ajouter l'en-tête `Sec-CH-UA-Platform-Version` aux requêtes suivantes.
Par exemple, les en-têtes de requête suivants pourraient être envoyés depuis un navigateur fonctionnant sous Windows 10.

```http
GET /ma/page HTTP/1.1
Host: exemple.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Indications du client](/fr/docs/Web/HTTP/Guides/Client_hints)
- [L'API d'indications de l'agent utilisateur du client](/fr/docs/Web/API/User-Agent_Client_Hints_API)
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
