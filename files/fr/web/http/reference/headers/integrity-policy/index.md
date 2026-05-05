---
title: En-tête Integrity-Policy
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Integrity-Policy`** permet aux administrateur·ice·s de site web de s'assurer que toutes les ressources chargées par l'agent utilisateur (d'un certain type) bénéficient des garanties de [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity).

Lorsqu'il est défini, l'agent utilisateur bloquera les requêtes sur les [destinations de requête](#blocked-destinations) définies qui omettent les métadonnées d'intégrité, et bloquera également les requêtes en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors) avant même qu'elles ne soient effectuées.

Ceci aide à se prémunir contre la manipulation de contenu des sous-ressources récupérées.

Les violations de la politique peuvent être signalées à l'aide de [l'API Reporting](/fr/docs/Web/API/Reporting_API).
Les rapports peuvent être observés dans la page pour laquelle la politique est appliquée, à l'aide d'un [`ReportingObserver`](/fr/docs/Web/API/ReportingObserver), et envoyés aux points de terminaison du serveur définis dans un en-tête de réponse {{HTTPHeader("Reporting-Endpoints")}} et sélectionnés à l'aide du champ [`endpoints`](#endpoints).
Pour plus d'informations, voir {{DOMxRef("IntegrityViolationReport")}}.

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
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Les valeurs de l'en-tête sont définies comme des dictionnaires de champs structurés avec les clés suivantes&nbsp;:

- `blocked-destinations`
  - : Une liste de [destinations de requête](/fr/docs/Web/API/Request/destination) qui doivent inclure des métadonnées d'intégrité valides.
    Les valeurs autorisées sont&nbsp;:
    - `script`
      - : Ressources de script.
    - `style`
      - : Ressources de feuille de style.

- `sources` {{Optional_Inline}}
  - : Une liste de sources d'intégrité qui doivent inclure des métadonnées d'intégrité.
    Les valeurs autorisées sont&nbsp;:
    - `inline`
      - : La source des métadonnées d'intégrité est incluse dans le contenu, comme [l'attribut d'intégrité](/fr/docs/Web/API/HTMLScriptElement/integrity).
        Il s'agit de la valeur par défaut.

        Comme il s'agit de la valeur par défaut et de la seule valeur, omettre `sources` équivaut à définir `sources=(inline)`.

- `endpoints` {{Optional_Inline}}
  - : Une liste de [noms de points de terminaison de rapport](/fr/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint) qui indiquent où les rapports seront envoyés.
    Les points de terminaison de rapport doivent être définis dans un en-tête {{HTTPHeader("Reporting-Endpoints")}}.

## Exemples

### Bloquer et signaler lorsque les scripts n'ont pas de métadonnées d'intégrité

Cet exemple montre un document qui bloque et signale à un point de terminaison de serveur lorsque l'élément HTML {{HTMLElement("script")}} (ou `HTMLScriptElement`) ne définit pas d'attribut `integrity`, ou lorsqu'une ressource de script est demandée en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors).

Notez que le `integrity-endpoint` utilisé dans `Integrity-Policy` est défini dans l'en-tête {{HTTPHeader("Reporting-Endpoints")}}.

```http
Reporting-Endpoints: integrity-endpoint="https://exemple.com/integrity", backup-integrity-endpoint="https://report-provider.exemple/integrity"
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint backup-integrity-endpoint)
```

La [charge utile du rapport](/fr/docs/Web/API/Reporting_API#points_de_terminaison_du_serveur_de_rapports) pourrait ressembler à ceci.

```json
{
  "type": "integrity-violation",
  "url": "https://exemple.com",
  "body": {
    "documentURL": "https://exemple.com",
    "blockedURL": "https://exemple.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Integrity-Policy-Report-Only")}}
- L'en-tête {{HTTPHeader("Reporting-Endpoints")}}
- L'interface API {{DOMxRef("ReportingObserver")}}
- L'interface API {{DOMxRef("IntegrityViolationReport")}}
- [Politique d'intégrité](/fr/docs/Web/Security/Defenses/Subresource_Integrity#politique_dintégrité) dans [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
