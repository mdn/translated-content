---
title: En-tête Trailer
short-title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Trailer`** permet à l'expéditeur d'inclure des champs supplémentaires à la fin des blocs de messages afin de fournir des métadonnées qui peuvent être générées de manière dynamique pendant l'envoi du corps du message.

> [!NOTE]
> L'en-tête de requête {{HTTPHeader("TE")}} doit être défini sur `trailers` pour autoriser les champs de type «&nbsp;remorque&nbsp;».

> [!WARNING]
> Les développeur·euse·s ne peuvent pas accéder aux remorques HTTP par l'API Fetch ou XHR.
> De plus, les navigateurs ignorent les remorques HTTP, à l'exception de {{HTTPHeader("Server-Timing")}}.
> Voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}},
        {{Glossary("Content header", "En-tête de contenu")}}
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
Trailer: header-names
```

## Directives

- `header-names`
  - : Les champs d'en-tête HTTP qui sont présents dans la partie remorque des messages en tranche.
    Les noms d'en-tête suivants sont **interdits**&nbsp;:
    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, et `Trailer`
    - Les en-têtes d'authentification (par exemple, {{HTTPHeader("Authorization")}} ou {{HTTPHeader("Set-Cookie")}})
    - Les en-têtes de cadrage des messages (par exemple, {{HTTPHeader("Transfer-Encoding")}} et {{HTTPHeader("Content-Length")}})
    - Les en-têtes de routage (par exemple, {{HTTPHeader("Host")}})
    - Les modificateurs de requête (par exemple, les contrôles et conditionnels, comme {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}} ou {{HTTPHeader("TE")}})

## Exemples

### `Server-Timing` en tant que remorque HTTP

Certains navigateurs prennent en charge l'affichage des données de chronométrage du serveur dans les outils de développement lorsque l'en-tête {{HTTPHeader("Server-Timing")}} est envoyé en tant que remorque.
Dans la réponse suivante, l'en-tête `Trailer` est utilisé pour indiquer qu'un en-tête `Server-Timing` suit le corps de la réponse.
Une métrique `custom-metric` avec une durée de `123.4` millisecondes est envoyée&nbsp;:

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- corps de la réponse ---
Server-Timing: custom-metric;dur=123.4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Server-Timing")}}
- L'en-tête {{HTTPHeader("Transfer-Encoding")}}
- L'en-tête {{HTTPHeader("TE")}}
- [Encodage de transfert en tranches <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
