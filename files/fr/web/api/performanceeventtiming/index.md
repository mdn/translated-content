---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
---

{{APIRef("Event Timing API")}}

L'interface `PerformanceEventTiming` des événements de l'`Event Timing API` fournit des informations de chronométrage pour les types d'événements énumérés ci-dessous.

- [`auxclick`](/fr/docs/Web/API/Element/auxclick_event)
- [`beforeinput`](/fr/docs/Web/API/HTMLElement/beforeinput_event)
- [`click`](/fr/docs/Web/API/Element/click_event)
- [`compositionend`](/fr/docs/Web/API/Element/compositionend_event)
- [`compositionstart`](/fr/docs/Web/API/Element/compositionstart_event)
- [`compositionupdate`](/fr/docs/Web/API/Element/compositionupdate_event)
- [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
- [`dragend`](/fr/docs/Web/API/Document/dragend_event)
- [`dragenter`](/fr/docs/Web/API/Document/dragenter_event)
- [`dragleave`](/fr/docs/Web/API/Document/dragleave_event)
- [`dragover`](/fr/docs/Web/API/Document/dragover_event)
- [`dragstart`](/fr/docs/Web/API/Document/dragstart_event)
- [`drop`](/fr/docs/Web/API/Document/drop_event)
- [`input`](/fr/docs/Web/API/HTMLElement/input_event)
- [`keydown`](/fr/docs/Web/API/Document/keydown_event)
- [`keypress`](/fr/docs/Web/API/Document/keypress_event)
- [`keyup`](/fr/docs/Web/API/Document/keyup_event)
- [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
- [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
- [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
- [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
- [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
- [`pointerover`](/fr/docs/Web/API/Document/pointerover_event)
- [`pointerenter`](/fr/docs/Web/API/Document/pointerenter_event)
- [`pointerdown`](/fr/docs/Web/API/Document/pointerdown_event)
- [`pointerup`](/fr/docs/Web/API/Document/pointerup_event)
- [`pointercancel`](/fr/docs/Web/API/Document/pointercancel_event)
- [`pointerout`](/fr/docs/Web/API/Document/pointerout_event)
- [`pointerleave`](/fr/docs/Web/API/Document/pointerleave_event)
- [`gotpointercapture`](/fr/docs/Web/API/Document/gotpointercapture_event)
- [`lostpointercapture`](/fr/docs/Web/API/Document/lostpointercapture_event)
- [`touchstart`](/fr/docs/Web/API/Document/touchstart_event)
- [`touchend`](/fr/docs/Web/API/Document/touchend_event)
- [`touchcancel`](/fr/docs/Web/API/Document/touchcancel_event)

## Propriétés

- [`PerformanceEventTiming.processingStart`](/fr/docs/Web/API/PerformanceEventTiming/processingStart) _lecture seule_ {{ExperimentalBadge}}
  - : Retourne un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure à laquelle la diffusion des événements a commencé.
- [`PerformanceEventTiming.processingEnd`](/fr/docs/Web/API/PerformanceEventTiming/processingEnd) _lecture seule_ {{ExperimentalBadge}}
  - : Retourne un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure à laquelle la diffusion de l'événement s'est terminée.
- [`PerformanceEventTiming.cancelable`](/fr/docs/Web/API/PerformanceEventTiming/cancelable) _lecture seule_ {{ExperimentalBadge}}
  - : Retourne un [`Boolean`](/fr/docs/Web/API/Boolean) représentant l'attribut annulable de l'événement associé.
- [`PerformanceEventTiming.target`](/fr/docs/Web/API/PerformanceEventTiming/target) _lecture seule_ {{NonStandardBadge}}
  - : Retourne un [`Node`](/fr/docs/Web/API/Node) représentant la dernière cible de l'événement associé, si elle n'est pas supprimée.

## Méthodes

- [`PerformanceEventTiming.toJSON()`](</fr/docs/Web/API/PerformanceEventTiming/toJSON()>) {{ExperimentalBadge}}
  - : Convertit l'objet [`PerformanceEventTiming`](/fr/docs/Web/API/PerformanceEventTiming) en JSON.

## Exemples

L'exemple suivant montre comment utiliser l'API pour tous les événements :

```js
const observer = new PerformanceObserver(function (list) {
  const perfEntries = list.getEntries().forEach((entry) => {
    // Durée totale
    const inputDuration = entry.duration;
    // Retard d'entrée (avant l'événement de traitement)
    const inputDelay = entry.processingStart - entry.startTime;
    // Temps de traitement d'un événement synchrone (entre le début et la fin de la diffusion).
    const inputSyncProcessingTime = entry.processingEnd - entry.processingStart;
  });
});
// Enregistre un observateur pour l'événement.
observer.observe({ entryTypes: ["event"] });
```

Nous pouvons également interroger directement le [premier délai d'entrée](https://web.dev/fid). Le premier délai d'entrée ou « FID : First input delay », mesure le temps entre le moment où un utilisateur interagit pour la première fois avec une page (c'est-à-dire lorsqu'il clique sur un lien ou sur un bouton) et le moment où le navigateur est effectivement en mesure de commencer à traiter les gestionnaires d'événements en réponse à cette interaction.

```js
// Pour savoir si (et quand) la page a été masquée pour la première fois, voir :
// https://github.com/w3c/page-visibility/issues/29
// NOTE : idéalement, cette vérification devrait être effectuée dans le <head> du document
// pour éviter les cas où l'état de visibilité change avant l'exécution de ce code.
let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true },
);

// Envoie les données transmises à un point de terminaison analytique. Ce code
// utilise `/analytics` ; vous pouvez le remplacer par votre propre URL.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Utilise `navigator.sendBeacon()` si disponible, en revenant à `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
    fetch("/analytics", { body, method: "POST", keepalive: true });
}

// Utilise un try/catch au lieu de la fonction de détection de la prise en charge de `first-input`
// car certains navigateurs lancent des requêtes lorsqu'ils utilisent la nouvelle option `type`.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  function onFirstInputEntry(entry) {
    // Ne rapporte le FID que si la page n'était pas cachée avant que
    // l'entrée soit envoyée. Cela se produit généralement lorsqu'une
    // page est chargée dans un onglet en arrière-plan.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Rapporte la valeur du FID à un terminal d'analyse.
      sendToAnalytics({ fid });
    }
  }

  // Crée un PerformanceObserver qui appelle `onFirstInputEntry` pour chaque entrée.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe les entrées de type `first-input`, y compris les entrées en mémoire tampon,
  // c'est-à-dire les entrées qui ont eu lieu avant d'appeler `observe()` ci-dessous.
  po.observe({
    type: "first-input",
    buffered: true,
  });
} catch (e) {
  // Ne fait rien si le navigateur ne prend pas en charge cette API.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
