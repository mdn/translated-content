---
title: "Content-Security-Policy : directive report-to"
short-title: report-to
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-to`** indique le nom du point de terminaison que le navigateur doit utiliser pour signaler les violations de CSP.

Si une violation de CSP se produit, un rapport est généré contenant une instance d'objet {{DOMxRef("CSPViolationReport")}} sérialisée.
Ce rapport est envoyé à l'URL correspondant au nom du point de terminaison, en utilisant les mécanismes génériques définis dans [l'API Reporting](/fr/docs/Web/API/Reporting_API).

Le serveur doit fournir séparément la correspondance entre les noms de points de terminaison et leurs URL correspondantes dans l'en-tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Reporting directive", "Directive de rapport")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas prise en charge dans l'élément HTML {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` est le nom d'un point de terminaison fourni par l'en-tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}}.
Il peut également s'agir du nom d'un groupe fourni par le serveur dans l'en-tête de réponse HTTP {{HTTPHeader("Report-To")}} {{Deprecated_Inline}}.

### Syntaxe du rapport de violation

Un rapport de violation CSP est un objet {{DOMxRef("CSPViolationReport")}} sérialisé en JSON, avec une propriété `type` ayant pour valeur `"csp-violation"`.
Les rapports sont envoyés au(x) point(s) de terminaison cible avec une opération {{HTTPMethod("POST")}} avec un {{HTTPHeader("Content-Type")}} de `application/reports+json`.

Le JSON pour un seul rapport pourrait ressembler à ceci&nbsp;:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://exemple.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://exemple.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://exemple.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## Notes d'utilisation

La directive `report-to` est destinée à remplacer `report-uri`, et les navigateurs qui prennent en charge `report-to` ignorent la directive `report-uri`.
Cependant, tant que `report-to` n'est pas largement pris en charge, vous pouvez spécifier les deux directives comme suit&nbsp;:

```http
Content-Security-Policy: …; report-uri https://endpoint.exemple.com; report-to endpoint_name
```

Notez que les autres exemples de ce sujet ne montrent pas `report-uri`.

## Exemples

### Définir un point de terminaison de rapport de violation CSP

Un serveur peut définir la correspondance entre les noms de points de terminaison et les URL en utilisant l'en-tête {{HTTPHeader("Reporting-Endpoints")}} dans la réponse HTTP.
Tout nom peut être utilisé&nbsp;: ici, nous avons choisi `name-of-endpoint`.

```http
Reporting-Endpoints: name-of-endpoint="https://exemple.com/csp-reports"
```

Le serveur peut définir ce nom de point de terminaison comme cible pour l'envoi des rapports de violation CSP en utilisant la directive `report-to`&nbsp;:

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Reporting-Endpoints")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
