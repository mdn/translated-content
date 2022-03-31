---
title: Request.mode
slug: Web/API/Request/mode
translation_of: Web/API/Request/mode
---
{{APIRef("Fetch")}}{{SeeCompatTable}}

La propriété **`mode`** (en lecture seule) de l’interface {{domxref("Request")}} contient le mode de la requête (e.g., `cors`, `no-cors`, `cors-with-forced-preflight`, `same-origin`, or `navigate`.) Ceci est utilisé pour déterminer si les requêtes différentes de l’origine (cross-origin) mèneront à des réponses valides, et quelles propriétés de la réponse seront lisibles:

- `same-origin` — Avec ce mode défini, si la requête est faite vers une autre origine, le résultat sera une erreur. Vous pouvez utiliser ceci afin de vous assurer que la requête sera toujours faites vers votre origine.
- `no-cors` — Prévient la méthode d’une utilisation autre que `HEAD`, `GET` ou `POST`. Si un ServiceWorkers interceptait ces requêtes, il ne pourrait pas ajouter ou réécrire ces en-têtes excepté pour [ceci](https://fetch.spec.whatwg.org/#simple-header). De plus, JavaScript ne peut accéder à aucune propriété de la {{domxref("Response")}}. Cela vous assure que les ServiceWorkers n’affecteront pas la sémantique du Web et prévient pour des raisons de sécurité et de confidentialité pouvant mener à la fuite de données à travers les domaines.
- `cors` — Permet les requêtes cross-origin pour, par exemple, accéder à diverses APIs fournies par de tierces parties. Ces derniers sont censés adhérer au [protocole CORS](/en-US/docs/Web/HTTP/Access_control_CORS). Seul un [jeu limité](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) d’en-têtes est exposé dans la {{domxref("Response")}}, mais le corps (body) est lisible.
- `navigate` — Un mode pour supporter la navigation. La valeur `navigate` est destinée à être utilisée seulement par la navigation HTML. Une requête navigate est créée seulement lorsqu’on navigue entre des documents.

## Syntaxe

    var myMode = request.mode;

### Valeur

Une valeur {{domxref("RequestMode")}}.

## Exemple

Dans le bout de code suivant, nous créons une nouvelle requête en utilisant le constructeur {{domxref("Request.Request()")}}  (pour une image située dans le même répertoire que le script), puis on stocke le mode de la requête dans une variable:

```js
var myRequest = new Request('flowers.jpg');
var myMode = myRequest.mode; // returns "cors" by default
```

## Spécifications

| Spécification                                                    | État                     | Commentaires        |
| ---------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('Fetch','#dom-request-mode', 'mode')}} | {{Spec2('Fetch')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Request.mode")}}

## Voir aussi

- [L'API ServiceWorker](/en-US/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/en-US/docs/Web/HTTP)
