---
title: En-tête Preference-Applied
short-title: Preference-Applied
slug: Web/HTTP/Reference/Headers/Preference-Applied
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

L'en-tête HTTP **`Preference-Applied`** informe le client des préférences du client, issues de l'en-tête de requête {{HTTPHeader("Prefer")}}, qui ont été appliquées par le serveur.

Le serveur indique si une préférence est appliquée à une réponse, dans le cas où c'est ambigu pour le client.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Preference-Applied: <preference>
```

## Exemples

### Appliquer les préférences de fuseau horaire

La requête suivante indique que le client préfère que les évènements soient représentés dans un certain fuseau horaire&nbsp;:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: timezone=America/Los_Angeles
```

Le serveur prend en charge la préférence et retourne le contenu avec un en-tête `Preference-Applied`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Preference-Applied: timezone=America/Los_Angeles

[
  {"t":"2023-10-18T05:37:59.611-07:00"},
  {"t":"2023-10-18T07:37:59.611-07:00"},
  {"t":"2023-10-18T09:37:59.611-07:00"}
]
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête {{HTTPHeader("Prefer")}}
- [L'en-tête `Prefer` <sup>(angl.)</sup>](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) sur docs.oasis-open.org
- [L'en-tête `Prefer` <sup>(angl.)</sup>](https://docs.postgrest.org/en/v12/references/api/preferences.html) sur docs.postgrest.org
