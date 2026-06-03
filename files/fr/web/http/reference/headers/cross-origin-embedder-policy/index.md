---
title: En-tête Cross-Origin-Embedder-Policy (COEP)
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 2d0aa21573c6ceb33aeadf94ce6cd84588b74123
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Cross-Origin-Embedder-Policy`** (COEP) configure la politique du document courant pour le chargement et l'intégration de ressources d'origine croisée demandées en mode `no-cors`.

Notez que la politique d'intégration pour les requêtes effectuées en mode `cors` est contrôlée par [CORS](/fr/docs/Web/HTTP/Guides/CORS).

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
Cross-Origin-Embedder-Policy: <token>; <parameter>
```

### Directives

L'en-tête ne doit être défini qu'avec un seul jeton et un point de terminaison `report-to` optionnel.
Définir l'en-tête plus d'une fois ou avec plusieurs jetons équivaut à définir `unsafe-none`.

La valeur `<token>` peut être l'une des suivantes&nbsp;:

- `unsafe-none`
  - : Autorise le document à charger des ressources d'origine croisée demandées en mode `no-cors` **sans** autorisation explicite via le protocole CORS ou l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    Il s'agit de la valeur par défaut.

- `require-corp`
  - : Un document ne peut charger que des ressources demandées en mode `no-cors` depuis la même origine, ou des ressources qui ont explicitement défini l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} à une valeur qui permet leur intégration.

    Le chargement de ressources d'origine croisée est bloqué par COEP sauf si&nbsp;:
    - La ressource est demandée en mode `no-cors` et la réponse inclut un en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} qui autorise son chargement dans l'origine du document.
    - La ressource est demandée en mode `cors`&nbsp;; par exemple, en HTML avec l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin), ou en JavaScript en effectuant une requête avec [`{mode="cors"}`](/fr/docs/Web/API/RequestInit#cors).
      Notez que les requêtes effectuées en mode `cors` ne seront pas bloquées par COEP et ne déclencheront pas de violations COEP, mais doivent toujours être autorisées par CORS.

- `credentialless`
  - : Un document peut charger des ressources d'origine croisée demandées en [mode `no-cors`](/fr/docs/Web/API/Request/mode) **sans** autorisation explicite via l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    Dans ce cas, les requêtes sont envoyées sans identifiants&nbsp;: les cookies sont omis dans la requête et ignorés dans la réponse.

    Le comportement de chargement cross-origin pour les autres [modes de requête](/fr/docs/Web/API/Request/mode#cors) est identique à celui de [`require-corp`](#require-corp).
    Par exemple, une ressource d'origine croisée demandée en mode `cors` doit prendre en charge (et autoriser) CORS.

Le `<parameter>` est optionnel et peut être l'un des suivants&nbsp;:

- `report-to <endpoint_name>` {{Optional_Inline}}
  - : `<endpoint_name>` est le nom du point de terminaison vers lequel les violations de la politique sont envoyées.
    La correspondance entre le nom et un point de terminaison particulier est définie séparément dans l'en-tête HTTP {{HTTPHeader("Reporting-Endpoints")}}.

## Description

La politique concernant la possibilité pour une ressource particulière d'être intégrée en inter-site peut être définie pour cette ressource en utilisant l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) dans une réponse à une requête `no-cors`, ou en utilisant le [CORS](/fr/docs/Web/HTTP/Guides/CORS).
Si aucune de ces politiques n'est définie, par défaut, les ressources peuvent être chargées ou intégrées dans un document comme si elles ont une valeur CORP de `cross-origin` (ce qui signifie qu'elles _peuvent_ être chargées inter-origine).

La **`Cross-Origin-Embedder-Policy`** permet d'exiger que les en-têtes CORP soient définis, dans les réponses aux requêtes `no-cors`, afin de charger des ressources inter-origine dans le document actuel.
Vous pouvez également définir la politique pour conserver le comportement par défaut, ou pour permettre le chargement des ressources, mais en supprimant les identifiants qui peuvent autrement être envoyés.
La politique s'applique aux ressources chargées, ainsi qu'aux ressources dans les {{HTMLElement("iframe")}} et les cadres imbriqués.

> [!NOTE]
> Une `Cross-Origin-Embedder-Policy` ne remplace pas et n'affecte pas le comportement d'intégration pour une ressource pour laquelle CORP ou CORS a été défini.
> Si CORP restreint une ressource à être intégrée uniquement `same-origin`, elle n'est pas chargée inter-origine dans une ressource — indépendamment de la valeur COEP.

### Isolation inter-origines

COEP et CORS ensemble garantissent que le processus du navigateur ne contient que des ressources qui ont consenti à être partagées, ou qui ne contiennent pas de données privées.
C'est l'une des conditions nécessaires pour qu'un document soit [isolé inter-origines](/fr/docs/Web/API/Window/crossOriginIsolated).

### Rapports de violation

Les violations de la politique peuvent être signalées en utilisant [l'API de rapport](/fr/docs/Web/API/Reporting_API).
Les rapports peuvent être observés dans la page pour laquelle la politique est définie en utilisant un [`ReportingObserver`](/fr/docs/Web/API/ReportingObserver), et envoyés aux points de terminaison du serveur définis dans un en-tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}} et sélectionnés en utilisant le paramètre [`report-to`](#report-to_endpoint_name).
Pour plus d'informations, voir {{DOMxRef("COEPViolationReport")}}.

## Exemples

### Bloquer et signaler lorsque les ressources ne définissent pas les en-têtes CORP

Cet exemple montre un document qui bloque le chargement des ressources demandées en mode [no-cors](/fr/docs/Web/API/Request/mode#no-cors) qui ne définissent pas un en-tête CORP approprié.

Le document est un fichier HTML hébergé sur l'origine `https://exemple.com`, et inclut dans son corps un élément HTML {{HTMLElement("img")}} qui définit comme source la ressource (inter-origine) `une-image.png`.
Comme l'élément n'a pas [l'attribut `cross-origin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin), il est demandé en mode `no-cors`&nbsp;:

```html
<img src="https://autre-exemple.com/une-image.png" />
```

L'en-tête de réponse pour le document définit les en-têtes `Cross-Origin-Embedder-Policy` et {{HTTPHeader("Reporting-Endpoints")}} comme indiqué ci-dessous.
Comme la directive `require-corp` est définie, toutes les ressources inter-origines demandées en mode `no-cors` doivent être servies avec l'en-tête CORP.
Le paramètre `report-to` définit le nom `"coep-endpoint"` comme nom du point de terminaison où les rapports doivent être envoyés, et `Reporting-Endpoints` définit comment ce nom est mis en correspondance à une URL particulière.

```http
Reporting-Endpoints: coep-endpoint="https://un-exemple.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

Pour que `une-image.png` soit chargée sans déclencher de violation, elle doit définir {{HTTPHeader("Cross-Origin-Resource-Policy")}} sur `cross-origin`.
Si l'on omet l'en-tête ou qu'on ne l'inclut pas en tant que `cross-origin`, une violation se produit.

Le rapport envoyé dans la requête `POST` de rapport sera similaire à l'objet JSON montré ci-dessous&nbsp;:

```json
[
  {
    "age": 717139,
    "body": {
      "blockedURL": "https://autre-exemple.com/une-image.png",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://exemple.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

Le `type` du rapport est `coep`, et son `url` est le document dans lequel la violation s'est produite.
Le `body` du rapport fournit l'URL de la ressource bloquée (`blockedURL`), sa destination (`image`), le type de violation (`corp`), et indique que le rapport concernait une violation appliquée (`disposition`).

### Fonctionnalités dépendant de l'isolation inter-origines

Certaines fonctionnalités, comme l'accès aux objets {{JSxRef("SharedArrayBuffer")}} ou l'utilisation de {{DOMxRef("Performance.now()")}} avec des minuteurs non limités, ne sont disponibles que si votre document est {{DOMxRef("Window.crossOriginIsolated", "isolé inter-origines" ,"", 1)}}.

Pour utiliser ces fonctionnalités dans un document, vous devez définir l'en-tête COEP avec la valeur `require-corp` ou `credentialless`, et l'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}} à `same-origin`.
De plus, la fonctionnalité ne doit pas être bloquée par {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "Permissions-Policy : cross-origin-isolated")}}.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Vous pouvez utiliser les propriétés {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}} pour vérifier si les fonctionnalités sont restreintes respectivement dans les contextes window et worker&nbsp;:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### Éviter le blocage COEP avec CORS

Si vous activez COEP avec `require-corp` et souhaitez intégrer une ressource d'origine croisée qui prend en charge [CORS](/fr/docs/Web/HTTP/Guides/CORS), vous devrez explicitement indiquer qu'elle est demandée en mode `cors`.

Par exemple, pour récupérer une image déclarée en HTML depuis un site tiers qui prend en charge CORS, vous pouvez utiliser l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) afin qu'elle soit demandée en mode `cors`&nbsp;:

```html
<img src="https://tiercepartie.com/img.png" crossorigin />
```

Vous pouvez de la même façon utiliser l'attribut {{DOMxRef("HTMLScriptElement.crossOrigin")}} ou effectuer une requête avec `{ mode: 'cors' }` pour demander un fichier en mode CORS en JavaScript.

Si CORS n'est pas pris en charge pour certaines images, une valeur COEP de `credentialless` peut être utilisée comme alternative pour charger l'image sans consentement explicite du serveur distant, au prix d'une requête sans cookies.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}
- L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- Les propriétés API {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}}
- L'interface API {{DOMxRef("ReportingObserver")}}
- L'interface API {{DOMxRef("COEPViolationReport")}}
- [L'API Reporting](/fr/docs/Web/API/Reporting_API)
- [Cross Origin Opener Policy <sup>(angl.)</sup>](https://web.dev/articles/why-coop-coep#coep) dans _Why you need "cross-origin isolated" for powerful features_ sur web.dev (2020)
- [COOP et COEP expliqué&nbsp;: Artur Janc, Charlie Reis, Anne van Kesteren <sup>(angl.)</sup>](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
