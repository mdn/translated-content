---
title: En-tête Sec-Private-State-Token
short-title: Sec-Private-State-Token
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SeeCompatTable}}

L'en-tête HTTP **`Sec-Private-State-Token`** existe à la fois en tant qu'en-tête de requête et en tant qu'en-tête de réponse. Il est utilisé par [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) lors des requêtes d'émission et d'échange pour transmettre les données de requête et de réponse.

Lors des [requêtes d'émission de jetons](/fr/docs/Web/API/Private_State_Token_API/Using#émettre_des_jetons_2), l'en-tête de requête `Sec-Private-State-Token` contient une collection de nombres uniques non signés et masqués nécessaires pour générer un jeton d'état privé pour le serveur émetteur. Une réponse réussie doit inclure un en-tête de réponse `Sec-Private-State-Token` contenant des signatures masquées, que le navigateur démasque ensuite et stocke avec les nombres uniques originaux non masqués dans un magasin de jetons sécurisé.

Lors des [requêtes d'échange de jetons](/fr/docs/Web/API/Private_State_Token_API/Using#échanger_des_jetons_2), l'en-tête de requête `Sec-Private-State-Token` contient un jeton unique signé et non masqué ainsi que les métadonnées d'échange associées. Une réponse réussie doit inclure un en-tête de réponse `Sec-Private-State-Token` contenant un enregistrement d'échange signé, qui est à nouveau stocké de manière sécurisée par le navigateur.

Notez qu'un·e développeur·euse n'est pas censé·e générer des en-têtes de requête `Sec-Private-State-Token` — ceux-ci sont créés automatiquement par le navigateur lors de l'invocation des requêtes fetch `token-request` et `token-redemption` de l'API Private State Token.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de métadonnées de requête de récupération")}}, {{Glossary("Response header", "En-tête de réponse")}}</td>
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
Sec-Private-State-Token: <string>
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

- `<string>`
  - : Une chaîne de caractères contenant les données requises pour les requêtes et réponses des opérations d'émission et d'échange de jetons d'état privé.

## Exemples

Exemple d'en-tête de requête envoyé lors de l'émission d'un jeton&nbsp;:

```http
Sec-Private-State-Token: AEB9WGWUx398Pdr0SFE7NDo…
```

Exemple d'en-tête de réponse&nbsp;:

```http
Sec-Private-State-Token: AEB9WGWUxj1085Cuk2qmt3y…
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Crypto-Version")}}
- L'en-tête {{HTTPHeader("Sec-Private-State-Token-Lifetime")}}
- L'en-tête {{HTTPHeader("Sec-Redemption-Record")}}
- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
