---
title: En-tête Sec-Redemption-Record
short-title: Sec-Redemption-Record
slug: Web/HTTP/Reference/Headers/Sec-Redemption-Record
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{SeeCompatTable}}

{{Glossary("Fetch Metadata Request Header", "L'en-tête de métadonnées de requête de récupération")}} HTTP **`Sec-Redemption-Record`** est utilisé par [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) lorsqu'elle [transmet des registres d'échange](/fr/docs/Web/API/Private_State_Token_API/Using#utiliser_le_registre_déchange_2). L'en-tête contient une liste de paires émetteur et enregistrement de échange correspondant à chaque enregistrement d'échange.

Notez qu'un·e développeur·euse n'est pas censé·e générer des en-têtes de requête `Sec-Redemption-Record` — ceux-ci sont créés automatiquement par le navigateur lors de l'invocation des requêtes de récupération `send-redemption-record` du jeton d'état privé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de métadonnées de requête de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Redemption-Record: <string>
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

- `<string>`
  - : Une chaîne de caractères contenant des paires émetteur et registre d'échange.

## Exemples

```http
Sec-Redemption-Record: "https://redeemer.example";redemption-record="eyJwdWJsaWNfbWV0YWR...
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-Private-State-Token")}}
- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Crypto-Version")}}
- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Lifetime")}}
- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
