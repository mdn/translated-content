---
title: En-tête Attribution-Reporting-Eligible
short-title: Attribution-Reporting-Eligible
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Deprecated_Header}}

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Attribution-Reporting-Eligible`** indique que la réponse correspondante est éligible à l'enregistrement d'une source ou d'un déclencheur d'attribution.

Cet en-tête n'est jamais défini manuellement et est envoyé par le navigateur en réponse à divers paramètres d'éléments HTML ou de requêtes JavaScript. Selon les enregistrements autorisés définis dans la valeur `Attribution-Reporting-Eligible`, le serveur doit répondre avec un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} pour compléter l'enregistrement d'une source ou d'un déclencheur d'attribution, respectivement.

Voir l'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Attribution-Reporting-Eligible: <allowed-registrations>
```

## Directives

- `<allowed-registrations>`
  - : Un dictionnaire d'en-têtes structurés représentant les enregistrements autorisés dans la réponse correspondante. Les clés possibles sont&nbsp;:
    - `event-source`
      - : Une [source d'attribution basée sur un évènement](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dattribution_basées_sur_des_évènements) peut être enregistrée.
    - `navigation-source`
      - : Une [source d'attribution basée sur la navigation](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#sources_dattribution_basées_sur_la_navigation) peut être enregistrée.
    - `trigger`
      - : Un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers) peut être enregistré.

Chaque réponse dans une chaîne de redirections peut enregistrer au maximum une source ou un déclencheur.

## Exemples

```http
Attribution-Reporting-Eligible: trigger
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- L'en-tête HTTP {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API)
