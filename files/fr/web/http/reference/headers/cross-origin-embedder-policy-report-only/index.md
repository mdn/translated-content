---
title: En-tête Cross-Origin-Embedder-Policy-Report-Only (COEP)
short-title: Cross-Origin-Embedder-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy-Report-Only
l10n:
  sourceCommit: 2d0aa21573c6ceb33aeadf94ce6cd84588b74123
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Cross-Origin-Embedder-Policy-Report-Only`** (COEP) définit la politique _rapport seulement_ du document actuel pour le chargement et l'intégration de ressources inter-origines demandées en mode `no-cors`.

Cet en-tête permet aux administrateur·ice·s de sites web de signaler les ressources qui seraient bloquées par {{HTTPHeader("Cross-Origin-Embedder-Policy")}}, sans pour autant empêcher leur chargement.
Cela permet une mise en œuvre progressive de cette restriction.

Les violations de la politique peuvent être signalées à l'aide de [l'API Reporting](/fr/docs/Web/API/Reporting_API).
Les rapports peuvent être consultés sur la page pour laquelle la politique est définie à l'aide d'un objet {{DOMxRef("ReportingObserver")}}, puis envoyés vers les points de terminaison serveur définis dans l'en-tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}} et sélectionnés à l'aide du paramètre [`report-to`](#report-to_endpoint_name).
Pour plus d'informations, voir {{DOMxRef("COEPViolationReport")}}.

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
Cross-Origin-Embedder-Policy-Report-Only: <token>; <parameter>
```

### Directives

L'en-tête ne doit être défini qu'avec un seul jeton et un point de terminaison `report-to`.

Définir l'en-tête plus d'une fois ou avec plusieurs jetons équivaut à définir `unsafe-none`.
Omettre `report-to` rend l'en-tête fonctionnellement inactif.

La valeur `<token>` peut être l'une des suivantes&nbsp;:

- `unsafe-none`
  - : Permet au document de charger des ressources inter-origines demandées en mode `no-cors` **sans** donner une permission explicite via l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    C'est la valeur par défaut.

- `require-corp`
  - : Un document ne peut charger des ressources demandées en mode `no-cors` que depuis la même origine, ou des ressources qui ont explicitement défini l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} à une valeur qui permet leur intégration.

    Le chargement de ressources inter-origines sera bloqué par COEP sauf si&nbsp;:
    - La ressource est demandée en mode `no-cors` et la réponse inclut un en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} qui permet de la charger dans l'origine du document.
    - La ressource est demandée en mode `cors`&nbsp;; par exemple, en HTML en utilisant l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin), ou en JavaScript en effectuant une requête avec [`{mode="cors"}`](/fr/docs/Web/API/RequestInit#cors).
      Notez que les requêtes effectuées en mode `cors` ne seront pas bloquées par COEP ni ne déclencheront des violations COEP, mais doivent toujours être autorisées par CORS.

- `credentialless`
  - : Un document peut charger des ressources inter-origines demandées en mode [`no-cors`](/fr/docs/Web/API/Request/mode) **sans** donner une permission explicite par l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    Dans ce cas, les requêtes sont envoyées sans informations d'identification&nbsp;: les cookies sont omis dans la requête et ignorés dans la réponse.

    Le comportement de chargement inter-origines pour les autres [modes de requête](/fr/docs/Web/API/Request/mode#cors) est le même que pour [`require-corp`](#require-corp).
    Par exemple, une ressource inter-origine demandée en mode `cors` doit être prise en charge (et autorisée) par CORS.

Le `<parameter>` est optionnel et peut être l'un des suivants&nbsp;:

- `report-to <endpoint_name>` {{Optional_Inline}}
  - : `<endpoint_name>` est le nom du point de terminaison vers lequel les violations de la politique seront envoyées.
    La correspondance entre le nom et un point de terminaison particulier est définie séparément dans l'en-tête HTTP {{HTTPHeader("Reporting-Endpoints")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- Les propriétés API {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}}
- L'interface {{DOMxRef("ReportingObserver")}}
- L'interface {{DOMxRef("COEPViolationReport")}}
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
- [La politique Cross Origin Opener <sup>(angl.)</sup>](https://web.dev/articles/why-coop-coep#coep) dans <i lang="en">Why you need "cross-origin isolated" for powerful features</i> sur web.dev (2020)
- [COOP et COEP expliqués&nbsp;: Artur Janc, Charlie Reis, Anne van Kesteren <sup>(angl.)</sup>](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
