---
title: En-tête Integrity-Policy-Report-Only
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Integrity-Policy-Report-Only`** permet aux administrateur·ice·s de site web de signaler les ressources chargées par l'agent utilisateur qui violeraient les garanties de [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) si la politique d'intégrité était appliquée (en utilisant l'en-tête {{HTTPHeader("Integrity-Policy")}}).

Des rapports peuvent être générés pour les requêtes sur les [destinations de requête](#blocked-destinations) définies qui omettent les métadonnées d'intégrité, ou qui sont effectuées en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors).
Pour que les rapports soient envoyés à un point de terminaison de rapport, l'en-tête `Integrity-Policy-Report-Only` doit définir un nom de point de terminaison de rapport valide qui correspond à un point de terminaison déclaré à l'aide de l'en-tête {{HTTPHeader("Reporting-Endpoints")}}.
Les rapports sont générés à l'aide de [l'API Reporting](/fr/docs/Web/API/Reporting_API) et peuvent également être observés dans la page pour laquelle la politique d'intégrité est signalée, à l'aide d'un [`ReportingObserver`](/fr/docs/Web/API/ReportingObserver).
Le format du corps du rapport est donné par le dictionnaire {{DOMxRef("IntegrityViolationReportBody")}} (une forme sérialisée en JSON de ce corps est envoyée en POST aux points de terminaison du serveur de rapport).

Cet en-tête permet aux développeur·euse·s de tester les [politiques d'intégrité](/fr/docs/Web/Security/Defenses/Subresource_Integrity#politiques_dintégrité) et de corriger les problèmes de contenu avant de déployer finalement un en-tête {{HTTPHeader("Integrity-Policy")}} pour appliquer la politique.

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
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

Les valeurs de l'en-tête sont définies comme des dictionnaires de champs structurés avec les clés suivantes&nbsp;:

- `blocked-destinations`
  - : Une liste de [destinations de requête](/fr/docs/Web/API/Request/destination) qui doivent inclure des métadonnées d'intégrité valides.
    Les valeurs autorisées sont&nbsp;:
    - `script`
      - : Ressources de script.
    - `style` {{Experimental_Inline}}
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

### Signaler lorsque les scripts n'ont pas de métadonnées d'intégrité

Cet exemple montre un document qui signale lorsque l'élément HTML {{HTMLElement("script")}} (ou `HTMLScriptElement`) ne définit pas d'attribut `integrity`, ou lorsqu'une ressource de script est demandée en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors).

Notez que le `integrity-endpoint` utilisé dans `Integrity-Policy-Report-Only` est défini dans l'en-tête {{HTTPHeader("Reporting-Endpoints")}}.

```http
Reporting-Endpoints: integrity-endpoint=https://exemple.com/integrity, backup-integrity-endpoint=https://report-provider.exemple/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
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

- L'en-tête {{HTTPHeader("Integrity-Policy")}}
- L'en-tête {{HTTPHeader("Reporting-Endpoints")}}
- [Politique d'intégrité](/fr/docs/Web/Security/Defenses/Subresource_Integrity#politique_dintégrité)
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
