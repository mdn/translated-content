---
title: En-tête Permissions-Policy-Report-Only
short-title: Permissions-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Permissions-Policy-Report-Only
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{SeeCompatTable}}

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Permissions-Policy-Report-Only`** fournit un mécanisme permettant aux administrateur·ice·s de sites Web de signaler les violations d'une {{HTTPHeader("Permissions-Policy")}} sans les appliquer.
Cela permet de tester et de corriger les problèmes de [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) avant le déploiement d'une politique.

La syntaxe et le comportement sont exactement les mêmes que pour `Permissions-Policy`, sauf que&nbsp;:

- La politique n'est pas appliquée.
- Les objets de rapport de violation de politique ({{DOMxRef("PermissionsPolicyViolationReport")}}) ont une valeur `body.disposition` de `"report"` au lieu de `"enforce"`.

Voir {{HTTPHeader("Permissions-Policy")}} pour plus d'informations (la plupart de son contenu n'a pas été dupliqué ci-dessous).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
# Directive unique
Permissions-Policy-Report-Only: <directive>=<allowlist>

# Directive unique avec point de terminaison de signalement
Permissions-Policy-Report-Only: <directive>=<allowlist>;report-to=<endpoint>

# Directives multiples, avec et sans points de terminaison de signalement
Permissions-Policy-Report-Only: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite désactiver l'API {{DOMxRef("Geolocation")}} dans son application.
Avant de déployer la politique en utilisant `Permissions-Policy`, elle ajoute les en-têtes `Permissions-Policy-Report-Only` et {{HTTPHeader("Reporting-Endpoints")}} comme indiqué ci-dessous&nbsp;:

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy-Report-Only: geolocation=();report-to=geo_endpoint
```

En définissant `geolocation=()` pour la liste d'origines, il s'agit d'une violation pour tout contexte de navigation d'accéder à la géolocalisation (cela inclut les `<iframe>`), quelle que soit l'origine.
Le paramètre `report-to` indique que les rapports seront envoyés au point de terminaison nommé `geo_endpoint`.
La correspondance entre `geo_endpoint` et l'URL où les rapports doivent être envoyés est fournie dans `Reporting-Endpoints`.

Une violation se produit lorsqu'une page tente d'utiliser la fonctionnalité bloquée, par exemple&nbsp;:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Le [contenu du rapport](/fr/docs/Web/API/Reporting_API#points_de_terminaison_du_serveur_de_signalement) envoyé au point de terminaison aura la même structure que l'exemple JSON ci-dessous.
Il s'agit du même rapport que pour `Permissions-Policy`, à l'exception de la valeur de `body.disposition`.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "report", // Une violation qui est signalée mais non appliquée
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> La sérialisation côté serveur des rapports de violation par Chrome utilise `policyId` plutôt que [`featureId`](/fr/docs/Web/API/PermissionsPolicyViolationReport#featureid) pour le nom de la fonctionnalité dans le corps (`body`) d'un rapport serveur.
> Le {{DOMxRef("PermissionsPolicyViolationReport")}} retourné par un [`ReportingObserver`](/fr/docs/Web/API/ReportingObserver) suit la spécification.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- Les interfaces API {{DOMxRef("Document.featurePolicy")}} et {{DOMxRef("FeaturePolicy")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Referrer-Policy")}}
- L'en-tête {{HTTPHeader("Reporting-Endpoints")}}
- L'interface API {{DOMxRef("PermissionsPolicyViolationReport")}}
- L'interface API {{DOMxRef("ReportingObserver")}}
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
