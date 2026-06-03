---
title: En-tête Reporting-Endpoints
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Reporting-Endpoints`** permet aux administrateur·ice·s de sites de définir un ou plusieurs points de terminaison vers lesquels peuvent être envoyés des rapports générés par [l'API Reporting](/fr/docs/Web/API/Reporting_API).

Les points de terminaison peuvent être utilisés, par exemple, comme cibles pour l'envoi de rapports de plantage, de rapports de dépréciation, de rapports d'infraction de la [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP#signaler_une_violation), de rapports {{HTTPHeader("Cross-Origin-Opener-Policy")}}, et ainsi de suite.

> [!NOTE]
> Cet en-tête remplace {{HTTPHeader("Report-To")}} {{Deprecated_Inline}} pour déclarer des points de terminaison, et doit être utilisé de préférence.

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
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, …, <endpointN>
```

- `<endpoint>`
  - : Un point de terminaison de signalement au format `<endpoint-name>="<URL>"`.
    Les points de terminaison doivent posséder des URI valides dans des chaînes de caractères entre guillemets (par exemple, `my-endpoint="https://exemple.com/rapports"`) et les points de terminaison non sécurisés sont ignorés.
    Une liste de points de terminaison séparés par des virgules peut être fournie.

## Description

L'en-tête **`Reporting-Endpoints`** définit la correspondance entre un nom de point de terminaison et une URL.

Ce nom peut être utilisé pour identifier le point de terminaison de signalement pour les violations de politique dans certains en-têtes HTTP.
Par exemple, l'en-tête {{HTTPHeader("Content-Security-Policy")}} permet de définir le nom du point de terminaison de signalement dans sa directive {{CSP("report-to")}}, tandis que la clé [`endpoints`](/fr/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) sert le même objectif pour les violations de {{HTTPHeader("Integrity-Policy")}}.

### Point de terminaison de rapport par défaut

Le point de terminaison de rapport par défaut est simplement un rapport avec le nom `"default"`, comme indiqué&nbsp;:

```http
Reporting-Endpoints: default="https://exemple.com/rapports"
```

Cela _peut_ être utilisé comme point de terminaison de signalement pour les cas où l'en-tête HTTP qui déclenche un rapport n'a pas de mécanisme pour signaler le point de terminaison, comme l'en-tête {{HTTPHeader("Permissions-Policy")}}.
Il peut également être utilisé comme point de terminaison pour les rapports où il n'y a pas d'en-tête HTTP associé, comme pour les [rapports de dépréciation](/fr/docs/Web/API/DeprecationReport).

## Exemples

### Définir un point de terminaison de rapport d'infraction CSP

L'exemple suivant montre comment l'en-tête de réponse `Reporting-Endpoints` est utilisé conjointement avec l'en-tête {{HTTPHeader("Content-Security-Policy")}} pour indiquer où les rapports d'infraction CSP sont envoyés&nbsp;:

```http
Reporting-Endpoints: csp-endpoint="https://exemple.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Définir plusieurs points de terminaison de signalement

Il est possible de définir plusieurs points de terminaison pouvant être utilisés pour différents types de rapports de violation.

```http
Reporting-Endpoints: csp-endpoint="https://exemple.com/csp-reports",
                     permissions-endpoint="https://exemple.com/permissions-policy-reports"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
- [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP#signaler_une_violation) guide
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("report-to")}}
