---
title: AbortSignal
slug: Web/API/AbortSignal
tags:
  - API
  - AbortSignal
  - DOM
  - Interfaces
  - Reference
translation_of: Web/API/AbortSignal
---
{{APIRef("DOM")}}{{SeeCompatTable}}

L'interface **`AbortSignal`** représente un objet signal qui vous permet de communiquer avec une requête DOM (telle que Fetch) et de l'annuler si nécessaire par un objet {{domxref("AbortController")}}.

## Propriétés

_L'interface AbortSignal hérite des propriétés de son interface parent {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : Un {{domxref("Boolean")}} (_booléen_) qui indique si les requêtes avec lesquelles le signal communique sont annulées (`true`) ou non (`false`).

### Gestionnaire d'évènement

- {{domxref("AbortSignal.onabort")}}
  - : appelé quand un évènement {{event("abort_(dom_abort_api)", "abort")}} est lancé, c'est-à-dire quand les requêtes DOM avec lesquelles le signal communique sont annulées.

## Méthodes

_L'interface AbortSignal hérite des méthodes de son interface parent {{domxref("EventTarget")}}._

## Exemples

Dans l'extrait suivant, nous visons à télécharger une vidéo en utilisant l'[API Fetch](/fr/docs/Web/API/Fetch_API).

Tout d'abord, nous créons un contrôleur en utilisant le constructeur {{domxref("AbortController.AbortController","AbortController()")}}, puis nous saisissons une référence associée à son objet {{domxref("AbortSignal")}} au moyen de la propriété {{domxref("AbortController.signal")}}.

Lorsque la  [requête fetch](/fr/docs/Web/API/GlobalFetch/fetch) (_extraction_) est lancée, nous transmettons le paramètre `AbortSignal` en tant qu'option dans l'objet d'options de la requête (voir `{signal}` ci-dessous). Cela associe le signal et le contrôleur à la requête d'extraction et nous permet de l'annuler en appelant {{domxref("AbortController.abort()")}}, comme indiqué ci-dessous dans le second écouteur d'événements.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **Note :** Lorsque `abort()` est appelé, la réponse `fetch()` rejette avec une erreur `AbortError`.

vous pouvez trouver un exemple de travail complet sur GitHub — voir [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([voir cas d'usage concret](https://mdn.github.io/dom-examples/abort-api/)).

## Spécifications

| Spécification                                                                            | Status                           | Comment             |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#interface-AbortSignal', 'AbortSignal')}} | {{Spec2('DOM WHATWG')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.AbortSignal")}}

## Voir aussi

- [API Fetch](/fr/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) par Jake Archibald (en)
