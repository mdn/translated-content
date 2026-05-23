---
title: En-tête Sec-CH-UA
short-title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA`** est une [indication client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui fournit les informations de marque et de version significative de l'agent utilisateur.

L'en-tête `Sec-CH-UA` fournit la marque et la version significative pour chaque marque associée au navigateur dans une liste séparée par des virgules.
L'en-tête permet donc au serveur de personnaliser sa réponse en fonction des marques partagées et des personnalisations particulières dans leurs versions respectives.

`Sec-CH-UA` est une [indication à faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie).
Sauf blocage explicite par une politique de permission de l'agent utilisateur, il est envoyé par défaut, sans que le serveur ait besoin de s'inscrire en envoyant {{HTTPHeader("Accept-CH")}}.

L'en-tête peut inclure des marques «&nbsp;fausses&nbsp;» à n'importe quelle position et avec n'importe quel nom.
C'est une fonctionnalité conçue pour empêcher les serveurs de rejeter complètement les agents utilisateurs inconnus, obligeant ainsi les agents utilisateurs à mentir sur leur identité de marque.

> [!NOTE]
> L'en-tête {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} est identique à `Sec-CH-UA`, mais inclut le numéro de version complet plutôt que le numéro de version significatif pour chaque marque.

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
Sec-CH-UA: "<brand>";v="<significant version>", …
```

La valeur est une liste séparée par des virgules des marques dans la liste des marques de l'agent utilisateur, et de leur numéro de version significatif associé.

### Directives

- `<brand>`
  - : Une marque associée à l'agent utilisateur, comme «&nbsp;Chromium&nbsp;», «&nbsp;Google Chrome&nbsp;», ou une marque intentionnellement incorrecte comme `"Not A;Brand"`.
- `<significant version>`
  - : Le numéro de version «&nbsp;marketing&nbsp;» associé aux fonctionnalités distinctives exposées sur le web.

## Description

Une marque est un nom commercial pour l'agent utilisateur, comme&nbsp;: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox et Safari.
Un agent utilisateur peut avoir plusieurs marques associées.
Par exemple, Opera, Chrome et Edge sont tous basés sur Chromium, et fourniront donc les deux marques dans l'en-tête `Sec-CH-UA`.

Le _numéro de version significatif_ est l'identifiant de version «&nbsp;marketing&nbsp;» utilisé pour distinguer les principales versions de la marque.
Par exemple, une build de Chromium avec un _numéro de version complet_ «&nbsp;96.0.4664.45&nbsp;» a un numéro de version significatif de «&nbsp;96&nbsp;».

## Exemples

### Différentes marques `Sec-CH-UA`

`Sec-CH-UA` est une [indication de faible entropie](/fr/docs/Web/HTTP/Guides/Client_hints#indications_à_faible_entropie).
Sauf blocage explicite par une politique de l'agent utilisateur, elle est envoyée dans toutes les requêtes (sans que le serveur ait à s'inscrire en envoyant {{HTTPHeader("Accept-CH")}}).

Les chaînes provenant des navigateurs de bureau Chromium, Chrome, Edge et Opera sont affichées ci-dessous.
Notez qu'ils partagent tous la marque «&nbsp;Chromium&nbsp;», mais ont une marque supplémentaire indiquant leur origine.
Ils ont également une chaîne de caractères de marque intentionnellement incorrecte, qui peut apparaître à n'importe quelle position et avoir un texte différent.

```http
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```http
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
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
