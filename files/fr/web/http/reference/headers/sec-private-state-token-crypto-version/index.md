---
title: En-tête Sec-Private-State-Token-Crypto-Version
short-title: Sec-Private-State-Token-Crypto-Version
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Crypto-Version
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

{{Glossary("Fetch Metadata Request Header", "L'en-tête de métadonnées de requête de récupération")}} HTTP **`Sec-Private-State-Token-Crypto-Version`** est utilisé par [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) lors des [requêtes d'émission de jetons](/fr/docs/Web/API/Private_State_Token_API/Using#émettre_des_jetons_2) pour indiquer au serveur émetteur quelle version du protocole cryptographique doit être utilisée pour signer les nombres uniques masqués lors de la génération des jetons.

Au moment de la rédaction, une seule version est prise en charge, mais ce mécanisme permet de prendre en charge plusieurs versions à l'avenir.

Notez qu'un·e développeur·euse n'est pas censé·e générer des en-têtes de requête `Sec-Private-State-Token-Crypto-Version` — ceux-ci sont créés automatiquement par le navigateur lors de l'invocation des requêtes fetch `token-request` de l'API Private State Token.

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
Sec-Private-State-Token-Crypto-Version: <string>
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

- `<string>`
  - : Une chaîne de caractères contenant la version du protocole cryptographique qui doit être utilisée par le serveur émetteur pour signer les nombres uniques masqués lors de la génération des jetons.

## Exemples

```http
Sec-Private-State-Token-Crypto-Version: PrivateStateTokenV1VOPRF
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-Private-State-Token")}}
- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Lifetime")}}
- L'en-tête {{HTTPHeader("Sec-Redemption-Record")}}
- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
