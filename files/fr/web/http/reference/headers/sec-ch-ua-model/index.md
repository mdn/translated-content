---
title: En-tête Sec-CH-UA-Model
short-title: Sec-CH-UA-Model
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Model
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Model`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui indique le modèle de l'appareil sur lequel le navigateur s'exécute.

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
Sec-CH-UA-Model: <device-version>
```

### Directives

- `<device-version>`
  - : Une chaîne de caractères contenant la version de l'appareil. Par exemple «&nbsp;Pixel 3&nbsp;».

## Exemples

### Utiliser `Sec-CH-UA-Model`

Un serveur demande l'en-tête `Sec-CH-UA-Model` en incluant {{HTTPHeader("Accept-CH")}} dans une _réponse_ à toute requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Model
```

Le client peut choisir de fournir l'indication et d'ajouter l'en-tête `Sec-CH-UA-Model` aux requêtes suivantes.
Par exemple, sur un téléphone mobile, le client peut ajouter l'en-tête comme suit&nbsp;:

```http
GET /ma/page HTTP/1.1
Host: exemple.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Bitness: "64"
Sec-CH-UA-Model: "Pixel 3 XL"
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
