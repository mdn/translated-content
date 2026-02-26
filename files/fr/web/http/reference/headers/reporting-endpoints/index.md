---
title: En-tête Reporting-Endpoints
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Reporting-Endpoints`** permet aux administrateur·ice·s de sites de définir un ou plusieurs points de terminaison vers lesquels peuvent être envoyés des rapports générés par [l'API Reporting](/fr/docs/Web/API/Reporting_API).

Ces points de terminaison peuvent être utilisés, par exemple, comme cibles pour l'envoi de rapports d'infraction de la Content Security Policy (CSP), des rapports {{HTTPHeader("Cross-Origin-Opener-Policy")}}, ou d'autres violations génériques.

Quand utilisé pour reporter [les politiques de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP#signaler_une_violation), l'en-tête est utilisé en combinaison avec la directive {{CSP("report-to")}} de l'en-tête {{HTTPHeader("Content-Security-Policy")}}.
Pour plus de détails sur la configuration du reporting CSP, consultez la documentation sur la [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP#signaler_une_violation).

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
    Les points de terminaison doivent posséder des URI valides dans des chaînes entre guillemets (par exemple, `my-endpoint="https://example.com/reports"`) et les points de terminaison non sécurisés sont ignorés.
    Une liste de points de terminaison séparés par des virgules peut être fournie.

## Exemples

### Définir un point de terminaison de rapport d'infraction CSP

L'exemple suivant montre comment l'en-tête de réponse `Reporting-Endpoints` est utilisé conjointement avec l'en-tête {{HTTPHeader("Content-Security-Policy")}} pour indiquer où les rapports d'infraction CSP sont envoyés&nbsp;:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Définir plusieurs points de terminaison de signalement

Il est possible de définir plusieurs points de terminaison pouvant être utilisés pour différents types de rapports de violation.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     permissions-endpoint="https://example.com/permissions-policy-reports"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
- [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP#violation_reporting) guide
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("report-to")}}
