---
title: En-tête Sec-Private-State-Token-Lifetime
short-title: Sec-Private-State-Token-Lifetime
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Lifetime
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

{{Glossary("Response Header", "L'en-tête de réponse")}} HTTP **`Sec-Private-State-Token-Lifetime`** est utilisé par [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) lors des [requêtes d'échange de jetons](/fr/docs/Web/API/Private_State_Token_API/Using#échanger_des_jetons_2). Il est envoyé par le serveur d'échange pour indiquer au navigateur combien de temps (en secondes) un enregistrement d'échange doit être mis en cache. L'enregistrement d'échange lui-même est envoyé dans un en-tête de réponse {{HTTPHeader("Sec-Private-State-Token")}}.

Si l'en-tête `Sec-Private-State-Token-Lifetime` est omis, la durée de vie de l'enregistrement d'échange est liée à la durée de vie de la clé de vérification du jeton qui a confirmé l'émission du jeton échangé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response Header", "En-tête de réponse")}}</td>
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
Sec-Private-State-Token-Lifetime: <integer>
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

- `<integer>`
  - : Un entier définissant la durée de vie de l'enregistrement d'échange envoyé en secondes.

## Exemples

```http
Sec-Private-State-Token-Lifetime: 604800
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-Private-State-Token")}}
- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Crypto-Version")}}
- L'en-tête {{HTTPHeader("Sec-Redemption-Record")}}
- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
