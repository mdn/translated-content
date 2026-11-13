---
title: En-tête Via
short-title: Via
slug: Web/HTTP/Reference/Headers/Via
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Via`** est ajouté par les {{Glossary("Proxy_server", "mandataires")}}, à la fois en avant et en arrière.
Il est utilisé pour suivre les transferts de messages, éviter les boucles de requêtes et identifier les capacités du protocole des expéditeurs le long de la chaîne de requête/réponse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Via: [<protocol-name>/]<protocol-version> <host>[:<port>]
Via: [<protocol-name>/]<protocol-version> <pseudonym>
```

## Directives

- `<protocol-name>` {{Optional_Inline}}
  - : Le nom du protocole utilisé, tel que «&nbsp;HTTP&nbsp;».
- `<protocol-version>`
  - : La version du protocole utilisé, telle que «&nbsp;1.1&nbsp;».
- `<host>`
  - : Une URL de mandataire public et un `<port>` optionnel.
    Si un hôte n'est pas fourni, alors un `<pseudonym>` doit être utilisé.
- `<pseudonym>`
  - : Le nom/l'alias d'un mandataire interne.
    Si un pseudonyme n'est pas fourni, alors un `<host>` doit être utilisé.

## Exemples

```http
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("X-Forwarded-For")}}
- [La bibliothèque de mandataire Vegur de Heroku <sup>(angl.)</sup>](https://github.com/heroku/vegur)
