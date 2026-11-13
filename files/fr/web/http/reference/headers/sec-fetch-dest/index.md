---
title: En-tête Sec-Fetch-Dest
short-title: Sec-Fetch-Dest
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

[L'en-tête de métadonnées de requête de récupération](/fr/docs/Web/HTTP/Guides/Fetch_metadata) HTTP **`Sec-Fetch-Dest`** indique la _destination_ de la requête.
C'est l'initiateur de la requête de récupération originale, c'est-à-dire l'endroit (et la manière) où les données récupérées sont utilisées.

Cela permet aux serveurs de déterminer s'ils doivent traiter une requête en fonction de son adéquation avec l'utilisation _prévue_. Par exemple, une requête dont la destination est `audio` doit demander des données audio, et non un autre type de ressource (par exemple, un document contenant des informations sensibles sur l'utilisateur·ice).

L'en-tête n'est inclus que dans les requêtes vers des [URL potentiellement fiables](/fr/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de métadonnées de requête de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Fetch-Dest: audio
Sec-Fetch-Dest: audioworklet
Sec-Fetch-Dest: document
Sec-Fetch-Dest: embed
Sec-Fetch-Dest: empty
Sec-Fetch-Dest: fencedframe
Sec-Fetch-Dest: font
Sec-Fetch-Dest: frame
Sec-Fetch-Dest: iframe
Sec-Fetch-Dest: image
Sec-Fetch-Dest: json
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
Sec-Fetch-Dest: text
Sec-Fetch-Dest: track
Sec-Fetch-Dest: video
Sec-Fetch-Dest: webidentity
Sec-Fetch-Dest: worker
Sec-Fetch-Dest: xslt
```

Les serveurs doivent ignorer cet en-tête s'il contient une autre valeur.

## Directives

> [!NOTE]
> Ces directives correspondent aux valeurs retournées par {{DOMxRef("Request.destination")}}.

- `audio`
  - : La destination est constituée de données audio. Celles-ci peuvent provenir d'une balise HTML {{HTMLElement("audio")}}.
- `audioworklet`
  - : La destination est constituée de données récupérées pour être utilisées par un audio worklet. Celles-ci peuvent provenir d'un appel à {{DOMxRef("Worklet.addModule()", "audioWorklet.addModule()")}}.
- `document`
  - : La destination est un document (HTML ou XML), et la requête est le résultat d'une navigation de premier niveau initiée par l'utilisateur·ice (par exemple, résultant d'un clic de l'utilisateur·ice sur un lien).
- `embed`
  - : La destination est un contenu intégré. Celui-ci peut provenir d'une balise HTML {{HTMLElement("embed")}}.
- `empty`
  - : La destination est la chaîne de caractères vide. Cela est utilisé pour les destinations qui n'ont pas leur propre valeur. Par exemple&nbsp;: {{DOMxRef("Window/fetch", "fetch()")}}, {{DOMxRef("navigator.sendBeacon()")}}, {{DOMxRef("EventSource")}}, {{DOMxRef("XMLHttpRequest")}}, {{DOMxRef("WebSocket")}}, etc.
- `fencedframe` {{Experimental_Inline}}
  - : La destination est un [cadre renfoncé](/fr/docs/Web/API/Fenced_frame_API).
- `font`
  - : La destination est une police. Celle-ci peut provenir d'une règle CSS {{CSSxRef("@font-face")}}.
- `frame`
  - : La destination est un cadre. Celui-ci peut provenir d'une balise HTML {{HTMLElement("frame")}}.
- `iframe`
  - : La destination est un cadre intégré. Celle-ci peut provenir d'une balise HTML {{HTMLElement("iframe")}}.
- `image`
  - : La destination est une image. Celle-ci peut provenir d'une balise HTML {{HTMLElement("img")}}, d'un élément SVG {{SVGElement("image")}}, d'une règle CSS {{CSSxRef("background-image")}}, d'une règle CSS {{CSSxRef("cursor")}}, d'une règle CSS {{CSSxRef("list-style-image")}}, etc.
- `json`
  - : La destination est JSON. Celle-ci peut provenir d'un [`import with { type: "json" }`](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_json_type_json) en JavaScript.
- `manifest`
  - : La destination est un manifeste. Celle-ci peut provenir d'un [`<link rel=manifest>`](/fr/docs/Web/HTML/Reference/Attributes/rel/manifest).
- `object`
  - : La destination est un objet. Celle-ci peut provenir d'une balise HTML {{HTMLElement("object")}}.
- `paintworklet`
  - : La destination est un mini-travailleur (<i lang="en">worklet</i> en anglais) de peinture. Celle-ci peut provenir d'un appel à {{DOMxRef("Worklet.addModule", "CSS.PaintWorklet.addModule()")}}.
- `report`
  - : La destination est un rapport (par exemple, un rapport de politique de sécurité du contenu).
- `script`
  - : La destination est un script. Celle-ci peut provenir d'une balise HTML {{HTMLElement("script")}} ou d'un appel à {{DOMxRef("WorkerGlobalScope.importScripts()")}}.
- `serviceworker`
  - : La destination est un service de travailleur (<i lang="en">service worker</i> en anglais). Celle-ci peut provenir d'un appel à {{DOMxRef("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}}.
- `sharedworker`
  - : La destination est un travailleur partagé (<i lang="en">shared worker</i> en anglais). Celle-ci peut provenir d'un {{DOMxRef("SharedWorker")}}.
- `style`
  - : La destination est un style. Celle-ci peut provenir d'un HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}}, d'une règle CSS {{CSSxRef("@import")}}, ou d'un [`import with { type: "css" }`](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_css_type_css) en JavaScript.
- `text`
  - : La destination est du texte brut. Celle-ci peut provenir d'un [`import with { type: "text" }`](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_text_type_text) en JavaScript.
- `track`
  - : La destination est une piste de texte HTML. Celle-ci peut provenir d'une balise HTML {{HTMLElement("track")}}.
- `video`
  - : La destination est des données vidéo. Celle-ci peut provenir d'une balise HTML {{HTMLElement("video")}}.
- `webidentity`
  - : La destination est un point de terminaison associé à la vérification de l'identité de l'utilisateur·ice. Par exemple, il est utilisé dans [l'API FedCM](/fr/docs/Web/API/FedCM_API) pour vérifier l'authenticité des points de terminaison des fournisseurs d'identité (IdP), protégeant contre les attaques {{Glossary("CSRF")}}.
- `worker`
  - : La destination est un objet {{DOMxRef("Worker")}}.
- `xslt`
  - : La destination est une transformation XSLT.

## Exemples

### Utiliser `Sec-Fetch-Dest`

Une requête inter-site générée par une élément HTML {{HTMLElement("img")}} ce qui donne une requête comportant les en-têtes HTTP suivants (à noter que la destination est `image`)&nbsp;:

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes de métadonnées de requête de récupération {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}}
- [Protéger vos ressources contre les attaques web avec les métadonnées de récupération <sup>(angl.)</sup>](https://web.dev/articles/fetch-metadata) (web.dev)
- [Terrain d'essai des en-têtes de métadonnées de requête de récupération <sup>(angl.)</sup>](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
