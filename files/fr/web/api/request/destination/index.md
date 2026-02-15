---
title: "Request : propriété destination"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`destination`** de l'interface {{DOMxRef("Request")}} retourne une chaîne de caractères décrivant le type de contenu demandé.

La chaîne doit être soit `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `track`, `video`, `worker` ou `xslt`, ou la chaîne vide, qui est la valeur par défaut.

La propriété `destination` est utilisée par {{Glossary("user agent", "l'agent utilisateur")}} pour, par exemple, aider à déterminer quel ensemble de règles suivre pour le CORS, ou comment naviguer dans les chemins de code complexes qui affectent la gestion de certains types de requêtes.

Ces destinations varient considérablement dans leur fonctionnement. Certaines sont des réceptacles de données, où les données reçues sont stockées pour un traitement ultérieur. D'autres sont basées sur des scripts, auquel cas les données reçues sont transmises à un script en l'appelant et en lui passant les données.
Les destinations basées sur des scripts incluent les éléments {{HTMLElement("script")}}, ainsi que toutes les destinations basées sur {{DOMxRef("Worklet")}} (y compris les sous-classes comme {{DOMxRef("AudioWorklet")}}), et les destinations basées sur {{DOMxRef("Worker")}}, y compris {{DOMxRef("ServiceWorker")}} et {{DOMxRef("SharedWorker")}}.

## Valeur

Une chaîne de caractères qui indique le type de contenu demandé par la requête. Ce type est bien plus large que les valeurs habituelles de type de document (comme `"document"` ou `"manifest"`), et peut inclure des indices contextuels comme `"image"`, `"worker"` ou `"audioworklet"`.

Les valeurs possibles sont&nbsp;:

- `""`
  - : La chaîne vide est la valeur par défaut, et est utilisée pour les destinations qui n'ont pas leur propre valeur. C'est la valeur lorsque les requêtes sont effectuées avec les API suivantes (entre autres)&nbsp;:
    - [`<a ping>`](/fr/docs/Web/HTML/Element/a#ping)
    - [`<area ping>`](/fr/docs/Web/HTML/Element/area#ping)
    - {{DOMxRef("Cache")}}
    - {{DOMxRef("EventSource")}}
    - {{DOMxRef("Window/fetch", "fetch()")}}
    - {{DOMxRef("navigator.sendBeacon()")}}
    - {{DOMxRef("WebSocket")}}
    - {{DOMxRef("XMLHttpRequest")}}

- `"audio"`
  - : La cible est une donnée audio.
- `"audioworklet"`
  - : La cible est une donnée récupérée pour être utilisée par un audio worklet.
- `"document"`
  - : La cible est un document (HTML ou XML).
- `"embed"`
  - : La cible est un contenu embarqué.
- `"fencedframe"`
  - : La cible est un [cadre protégé](/fr/docs/Web/API/Fenced_frame_API).
- `"font"`
  - : La cible est une police de caractères.
- `"image"`
  - : La cible est une image.
- `"json"`
  - : La cible est un fichier JSON.
- `"manifest"`
  - : La cible est un manifeste.
- `"object"`
  - : La cible est un objet.
- `"paintworklet"`
  - : La cible est un paint worklet.
- `"report"`
  - : La cible est un rapport.
- `"script"`
  - : La cible est un script.
- `"serviceworker"`
  - : La cible est un service worker.
- `"sharedworker"`
  - : La cible est un shared worker.
- `"speculationrules"` {{Experimental_Inline}}
  - : La cible est un document JSON de [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API).
- `"style"`
  - : La cible est une feuille de style.
- `"track"`
  - : La cible est un élément HTML {{HTMLElement("track")}}.
- `"video"`
  - : La cible est une donnée vidéo.
- `"worker"`
  - : La cible est un worker.
- `"xslt"`
  - : La cible est une transformation XSLT.

## Exemples

Dans l'extrait de code suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous enregistrons la destination de la requête&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const maDestination = maRequete.destination; // retourne la chaîne vide par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
