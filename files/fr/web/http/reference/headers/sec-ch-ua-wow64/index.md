---
title: En-tête Sec-CH-UA-WoW64
short-title: Sec-CH-UA-WoW64
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-WoW64`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) indiquant si une application agent utilisateur 32 bits s'exécute sur une machine Windows 64 bits.

[WoW64](https://en.wikipedia.org/wiki/WoW64) est couramment utilisé pour savoir quel installateur de plugin [NPAPI](https://en.wikipedia.org/wiki/NPAPI) doit être proposé au téléchargement.
Cet en-tête d'indication du client est utilisé pour des considérations de compatibilité descendante, afin de fournir une correspondance un-à-un entre la chaîne de caractères d'agent utilisateur de certains navigateurs et les indications de l'agent utilisateur.

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
Sec-CH-UA-WoW64: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indique que le binaire de l'agent utilisateur s'exécute en mode 32 bits sur Windows 64 bits (vrai), tandis que `?0` signifie qu'il ne l'est pas (faux).

## Exemples

### Utiliser `Sec-CH-UA-WoW64`

Un serveur demande l'en-tête `Sec-CH-UA-WoW64` en incluant {{HTTPHeader("Accept-CH")}} dans une _réponse_ à toute requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

Le client peut choisir de fournir l'indication et d'ajouter l'en-tête `Sec-CH-UA-WoW64` aux requêtes suivantes.
Ajouter `Sec-CH-UA-WoW64: ?1` signifie que le binaire de l'agent utilisateur s'exécute en mode 32 bits sur Windows 64 bits&nbsp;:

```http
GET /ma/page HTTP/1.1
Host: exemple.site

Sec-CH-UA-WoW64: ?1
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Form-Factors: "Desktop"
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
