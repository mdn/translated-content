---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
---

{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-to`** demande à l'agent utilisateur de rapporter les violations de règles CSP à l'adresse fournie dans un groupe de l'en-tête HTTP `Report-To`.

```
Content-Security-Policy: ...; report-to groupname
```

Cette directive n'a aucun effet en elle-même, mais prend tout son sens en étant combinée à d'autres directives.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Content-Security-Policy: report-to <json-field-value>;
```

## Exemples

Voir {{HTTPHeader("Content-Security-Policy-Report-Only")}} pour plus d'informations et d'exemples.

```
Report-To: { "group": "csp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
Content-Security-Policy: ...; report-to csp-endpoint
```

```
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }

Content-Security-Policy: ...; report-to endpoint-1
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
