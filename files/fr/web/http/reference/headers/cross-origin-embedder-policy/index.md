---
title: En-tête Cross-Origin-Embedder-Policy (COEP)
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Cross-Origin-Embedder-Policy`** (COEP) configure la politique du document courant pour le chargement et l'intégration de ressources d'origine croisée.

La politique définissant si une ressource particulière peut être intégrée en cross-site peut être définie pour cette ressource à l'aide de l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) lors d'une requête `no-cors`, ou en utilisant [CORS](/fr/docs/Web/HTTP/Guides/CORS).
Si aucune de ces politiques n'est définie, alors par défaut, les ressources peuvent être chargées ou intégrées dans un document comme si elles avaient une valeur CORP de `cross-origin`.

L'en-tête **`Cross-Origin-Embedder-Policy`** permet d'exiger que les en-têtes CORP ou CORS soient définis pour charger des ressources d'origine croisée dans le document courant.
Vous pouvez aussi définir la politique pour conserver le comportement par défaut, ou autoriser le chargement des ressources mais en supprimant les éventuels identifiants qui auraient pu être envoyés.
La politique s'applique aux ressources chargées, ainsi qu'aux ressources dans les {{HTMLElement("iframe")}} et les cadres imbriqués.

> [!NOTE]
> L'en-tête `Cross-Origin-Embedder-Policy` ne remplace ni n'affecte le comportement d'intégration d'une ressource pour laquelle CORP ou CORS a été défini.
> Si CORP restreint une ressource à une intégration uniquement `same-origin`, elle ne sera pas chargée en cross-origin dans une ressource, quel que soit la valeur de COEP.

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
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Directives

- `unsafe-none`
  - : Autorise le document à charger des ressources d'origine croisée **sans** autorisation explicite via le protocole CORS ou l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    Il s'agit de la valeur par défaut.
- `require-corp`
  - : Un document ne peut charger que des ressources de même origine, ou des ressources explicitement marquées comme chargeables depuis une autre origine.

    Le chargement de ressources d'origine croisée sera bloqué par COEP sauf si&nbsp;:
    - La ressource est demandée en mode `no-cors` et la réponse inclut un en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}} qui autorise son chargement dans l'origine du document.
    - La ressource est demandée en mode `cors` et la ressource prend en charge et autorise CORS.
      Cela peut se faire, par exemple, en HTML avec l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin), ou en JavaScript en effectuant une requête avec [`{mode="cors"}`](/fr/docs/Web/API/RequestInit#cors).

- `credentialless`
  - : Un document peut charger des ressources d'origine croisée demandées en [mode `no-cors`](/fr/docs/Web/API/Request/mode) **sans** autorisation explicite via l'en-tête {{HTTPHeader("Cross-Origin-Resource-Policy")}}.
    Dans ce cas, les requêtes sont envoyées sans identifiants&nbsp;: les cookies sont omis dans la requête et ignorés dans la réponse.

    Le comportement de chargement cross-origin pour les autres [modes de requête](/fr/docs/Web/API/Request/mode#cors) est identique à celui de [`require-corp`](#require-corp).
    Par exemple, une ressource d'origine croisée demandée en mode `cors` doit prendre en charge (et autoriser) CORS.

## Exemples

### Fonctionnalités dépendant de l'isolation inter-origines

Certaines fonctionnalités, comme l'accès aux objets {{JSxRef("SharedArrayBuffer")}} ou l'utilisation de {{DOMxRef("Performance.now()")}} avec des minuteurs non limités, ne sont disponibles que si votre document est {{DOMxRef("Window.crossOriginIsolated","isolé inter-origines","","nocode")}}.

Pour utiliser ces fonctionnalités dans un document, vous devez définir l'en-tête COEP avec la valeur `require-corp` ou `credentialless`, et l'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}} à `same-origin`.
De plus, la fonctionnalité ne doit pas être bloquée par {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}}.

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

- L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- Les propriétés API {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}}
- [Cross Origin Opener Policy <sup>(angl.)</sup>](https://web.dev/articles/why-coop-coep#coep) dans _Why you need "cross-origin isolated" for powerful features_ sur web.dev (2020)
- [COOP et COEP expliqué&nbsp;: Artur Janc, Charlie Reis, Anne van Kesteren <sup>(angl.)</sup>](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
