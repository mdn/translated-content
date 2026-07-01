---
title: En-tête Sec-CH-UA-Mobile
short-title: Sec-CH-UA-Mobile
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Mobile`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui indique si le navigateur est sur un appareil mobile.
Il peut également être utilisé par un navigateur de bureau pour indiquer une préférence pour une expérience utilisateur sur «&nbsp;mobile&nbsp;».

`Sec-CH-UA-Mobile` est une [indication à faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie).
Sauf blocage par une politique de permission de l'agent utilisateur, elle est envoyée par défaut, sans que le serveur n'ait besoin de s'inscrire en envoyant {{HTTPHeader("Accept-CH")}}.

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
Sec-CH-UA-Mobile: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indique que l'agent utilisateur préfère une expérience mobile (vrai).
    `?0` indique que l'agent utilisateur ne préfère pas une expérience mobile (faux).

## Exemples

### Utiliser `Sec-CH-UA-Mobile`

Comme `Sec-CH-UA-Mobile` est une [indication à faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie), elle est généralement envoyée dans toutes les requêtes.
Un navigateur de bureau envoie généralement des requêtes avec l'en-tête suivant&nbsp;:

```http
Sec-CH-UA-Mobile: ?0
```

Un navigateur sur un appareil mobile envoie généralement des requêtes avec l'en-tête suivant&nbsp;:

```http
Sec-CH-UA-Mobile: ?1
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
