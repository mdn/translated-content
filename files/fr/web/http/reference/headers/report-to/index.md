---
title: En-tête Report-To
short-title: Report-To
slug: Web/HTTP/Reference/Headers/Report-To
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Deprecated_Header}}{{Non-standard_Header}}

> [!WARNING]
> Cet en-tête a été remplacé par l'en-tête HTTP {{HTTPHeader("Reporting-Endpoints")}}.
> Il fait partie d'une version antérieure de la spécification de [l'API Reporting](/fr/docs/Web/API/Reporting_API) et est obsolète.

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Report-To`** permet aux administrateur·ice·s de sites de définir des groupes nommés de points de terminaison pouvant servir de destination pour les rapports d'avertissement et d'erreur, tels que les rapports d'infraction CSP, les rapports {{HTTPHeader("Cross-Origin-Opener-Policy")}}, les rapports de dépréciation, ou d'autres violations génériques.

`Report-To` est souvent utilisé conjointement avec d'autres en-têtes qui sélectionnent un groupe de points de terminaison à utiliser pour un type particulier de rapport.
Par exemple, la directive {{CSP("report-to")}} de l'en-tête {{HTTPHeader("Content-Security-Policy")}} peut être utilisée pour sélectionner le groupe utilisé pour signaler les violations CSP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Report-To: <json-field-value>
```

- `<json-field-value>`
  - : Une ou plusieurs définitions de groupes de points de terminaison, définies comme un tableau JSON sans les crochets `[` et `]` entourants.
    Chaque objet du tableau comporte les membres suivants&nbsp;:
    - `group`
      - : Le nom du groupe de points de terminaison.
    - `max_age`
      - : La durée en secondes pendant laquelle le navigateur doit mettre en cache la configuration de signalement.
    - `endpoints`
      - : Un tableau contenant une ou plusieurs URL vers lesquelles les rapports du groupe doivent être envoyés.

## Exemples

### Définir un point de terminaison de rapport d'infraction CSP

Cet exemple montre comment un serveur peut utiliser `Report-To` pour définir un groupe de points de terminaison, puis définir ce groupe comme destination des rapports d'infraction CSP.

Un serveur peut d'abord envoyer une réponse contenant l'en-tête de réponse HTTP `Report-To` comme indiqué ci‑dessous.
Cela définit un groupe de points de terminaison `url` identifié par le nom de groupe `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://exemple.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

Le serveur peut ensuite définir que ce groupe doit être la cible pour l'envoi des rapports d'infraction CSP en utilisant le nom du groupe comme valeur de la directive {{CSP("report-to")}}&nbsp;:

```http
Content-Security-Policy: script-src https://exemple.com/; report-to csp-endpoints
```

L'en-tête ci-dessus montre que toute violation de CSP sur `script-src` entraînerait l'envoi de rapports de violation vers les deux URL listées dans `Report-To`.

### Définir plusieurs groupes de signalement

L'exemple ci‑dessous illustre un en-tête `Report-To` qui définit plusieurs groupes de points de terminaison.
Remarquez que chaque groupe possède un nom unique et que les groupes ne sont pas délimités par des crochets de tableau.

```http
Report-To: { "group": "csp-endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://exemple.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://exemple.com/hpkp-reports" }
              ] }
```

On peut sélectionner un groupe de points de terminaison comme cible des rapports d'infraction en utilisant son nom, de la même manière que dans l'exemple précédent&nbsp;:

```http
Content-Security-Policy: script-src https://exemple.com/; report-to csp-endpoint-1
```

## Spécifications

Cet en-tête ne fait plus partie d'aucune spécification.
Il faisait auparavant partie de [l'API Reporting](/fr/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Reporting](/fr/docs/Web/API/Reporting_API) et l'en-tête {{HTTPHeader("Reporting-Endpoints")}}
- La directive CSP {{CSP("report-to")}}
- Les en-têtes {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- Le guide [sur la Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guides/CSP#violation_reporting)
