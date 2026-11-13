---
title: En-tête Sec-CH-UA-Form-Factors
short-title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-UA-Form-Factors`** est une [indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lagent_utilisateur) qui fournit des informations sur le facteur de forme de l'appareil de l'agent utilisateur.

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
Sec-CH-UA-Form-Factors: <form-factor>
Sec-CH-UA-Form-Factors: <form-factor>, …, <form-factor>
```

### Directives

- `<form-factor>`
  - : Une chaîne de caractères indiquant un facteur de forme d'appareil courant.
    Tous les facteurs de forme applicables peuvent être inclus.
    Les significations des valeurs autorisées sont&nbsp;:
    - `"Desktop"`
      - : Un agent utilisateur fonctionnant sur un ordinateur personnel.
    - `"Automotive"`
      - : Un agent utilisateur intégré dans un véhicule, où l'utilisateur·ice peut être responsable de la conduite du véhicule et avoir une capacité limitée d'interaction.
    - `"Mobile"`
      - : Petit appareil orienté tactile, généralement porté sur la personne de l'utilisateur·ice.
    - `"Tablet"`
      - : Appareil orienté tactile plus grand que `"Mobile"` et généralement non porté sur la personne de l'utilisateur·ice.
    - `"XR"`
      - : Appareils immersifs qui augmentent ou remplacent l'environnement autour de l'utilisateur·ice.
    - `"EInk"`
      - : Appareil caractérisé par des mises à jour d'écran lentes et une résolution de couleur limitée ou inexistante.
    - `"Watch"`
      - : Appareil mobile avec un écran minuscule (généralement moins de 2 pouces), porté de manière à ce que l'utilisateur·ice puisse le consulter rapidement.

## Exemples

### Utiliser `Sec-CH-UA-Form-Factors`

Un serveur demande l'en-tête `Sec-CH-UA-Form-Factors` en incluant {{HTTPHeader("Accept-CH")}} dans une _réponse_ à toute requête du client, en utilisant le nom de l'en-tête souhaité comme jeton&nbsp;:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Le client peut choisir de fournir l'indication et d'ajouter l'en-tête `Sec-CH-UA-Form-Factors` aux requêtes suivantes.
Par exemple, le client pourrait ajouter l'en-tête comme suit&nbsp;:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

Dans ce cas, `"EInk"` signifie que l'appareil est caractérisé par des mises à jour d'écran lentes et une résolution de couleur limitée, et, en tant que tel, les réponses peuvent différer en fonction de cette indication.

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
