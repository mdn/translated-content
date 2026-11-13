---
title: En-tête Sec-CH-UA-Full-Version-List
short-title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Full-Version-List`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui fournit les informations de marque et de version complète de l'agent utilisateur.

L'en-tête **`Sec-CH-UA-Full-Version-List`** fournit les informations de marque et de version complète pour chaque marque associée au navigateur, sous forme de liste séparée par des virgules.

L'en-tête peut inclure des «&nbsp;fausses&nbsp;» marques à n'importe quelle position et avec n'importe quel nom.
C'est une fonctionnalité conçue pour empêcher les serveurs de rejeter directement les agents utilisateurs inconnus, obligeant les agents utilisateurs à mentir sur leur identité de marque.

> [!NOTE]
> Ceci est similaire à {{HTTPHeader("Sec-CH-UA")}}, mais inclut le numéro de version complet au lieu du numéro de version significatif pour chaque marque.

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
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", …
```

La valeur est une liste séparée par des virgules des marques dans la liste des marques de l'agent utilisateur, et de leur numéro de version complet associé.

### Directives

- `<brand>`
  - : Une marque associée à l'agent utilisateur, comme «&nbsp;Chromium&nbsp;», «&nbsp;Google Chrome&nbsp;».
    Il peut s'agir d'une marque intentionnellement incorrecte comme `" Pas Une;Marque"` ou `"(Pas(Une:Marque"` (la valeur réelle est susceptible de changer au fil du temps et d'être imprévisible).
- `<full version>`
  - : Un numéro de version complet, comme «&nbsp;98.0.4750.0&nbsp;».

## Description

Une marque est un nom commercial pour l'agent utilisateur, comme&nbsp;: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox et Safari.
Un agent utilisateur peut avoir plusieurs marques associées.
Par exemple, Opera, Chrome et Edge sont tous basés sur Chromium, et fournissent les deux marques dans l'en-tête `Sec-CH-UA-Full-Version-List`.

L'en-tête permet au serveur de personnaliser sa réponse en fonction des marques partagées et des personnalisations spécifiques dans leurs versions respectives.

## Exemples

### Utiliser `Sec-CH-UA-Full-Version-List`

Un serveur demande l'en-tête `Sec-CH-UA-Full-Version-List` en incluant {{HTTPHeader("Accept-CH")}} dans une _réponse_ à toute requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Le client peut choisir de fournir l'indication et ajouter l'en-tête `Sec-CH-UA-Full-Version-List` aux requêtes suivantes, comme indiqué ci-dessous&nbsp;:

```http
GET /ma/page HTTP/1.1
Host: exemple.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version-List: " Not A;Brand";v="99.0.0.0", "Chromium";v="98.0.4750.0", "Google Chrome";v="98.0.4750.0"
Sec-CH-UA-Platform: "Linux"
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
