---
title: Gestes pincer et zoomer
slug: Web/API/Pointer_events/Pinch_zoom_gestures
---

{{DefaultAPISidebar("Pointer Events")}}

Ajouter la gestion des _gestes_ à une application peut améliorer de manière significative l'expérience utilisateur. Il existe de nombreux types de gestes, du simple geste _swipe_ (balayage de l'écran) aux gestes plus complexes avec plusieurs doigts comme le _twist_ (rotation), où les points de contact (dits _pointeurs_) bougent dans des directions différentes.

Cet exemple montre comment détecter les gestes de _pinch/zoom_ (pincer/zoomer), en utilisant les {{domxref("Pointer_events","événements de pointeur")}} pour détecter si l'utilisateur bouge deux pointeurs plus proches ou plus loin l'un de l'autre.

> **Note :** Une version _en direct_ de cette application est disponible sur [Github](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html). Le [code source est également disponible sur Github](https://github.com/mdn/dom-examples/blob/master/pointerevents/Pinch_zoom_gestures.html); les pull requests et [bug reports](https://github.com/mdn/dom-examples/issues) sont les bienvenus.

## Exemple

Dans cet exemple, on utilise les {{domxref("Pointer_events","événement de pointeur")}} pour détecter simultanément plusieurs appareils de pointage quel qu'en soit le type, comme les doigts, la souris, et le stylet. Le geste de pincer (zoomer), qui consiste à déplacer deux pointeurs plus près l'un vers l'autre, change la couleur d'arrière-plan de l'élément cible en `lightblue`. Le geste d'étirer (dézoomer), qui consiste à déplacer deux pointeur plus loin l'un de l'autre, change la couleur d'arrière-plan de l'élément cible en `pink`.

### Définir la cible du toucher

L'application utilise un {{HTMLElement("div")}} pour définir la zone cible du pointeur.

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
</style>
```

### État global

Prendre en charge un mouvement à deux pointeurs nécessite de conserver un état des événements du pointeur durant les différentes phases de l'événement. Cette application utilise deux variables globales pour mettre en cache l'état de l'événement.

```js
// Variables globales pour mettre en cache l'état de l'événement
var evCache = new Array();
var prevDiff = -1;
```

### Enregistrer les gestionnaires d'événement

Les gestionnaires d'événement sont enregistrés pour les événements de pointeur suivants: [`pointerdown`](/fr/docs/Web/API/Element/pointerdown_event), [`pointermove`](/fr/docs/Web/API/Element/pointermove_event) et [`pointerup`](/fr/docs/Web/API/Element/pointerup_event). Le gestionnaire pour [`pointerup`](/fr/docs/Web/API/Element/pointerup_event) est utilisé pour les événements [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event), [`pointerout`](/fr/docs/Web/API/Element/pointerout_event) et [`pointerleave`](/fr/docs/Web/API/Element/pointerleave_event) puisque ces quatre événements ont la même sémantique dans cette application.

```js
function init() {
  // Ajoute les gestionnaires d'événements pour la cible du pointeur
  var el = document.getElementById("target");
  el.onpointerdown = pointerdown_handler;
  el.onpointermove = pointermove_handler;

  // Même chose pour les événements pointer{up,cancel,out,leave} puisque
  // la sémantique pour ces événements - dans cette appli - est identique.
  el.onpointerup = pointerup_handler;
  el.onpointercancel = pointerup_handler;
  el.onpointerout = pointerup_handler;
  el.onpointerleave = pointerup_handler;
}
```

### Pointer down

L'événement [`pointerdown`](/fr/docs/Web/API/Element/pointerdown_event) est déclenché quand un pointeur (souris, stylo/stylet ou point de contact sur un écran tactile) entre en contact avec la _surface de contact_. Dans cette application, l'état de l'événement doit être mis en cache dans le cas où il fait partie d'un geste à deux pointeurs pour pincer/zoomer.

```js
function pointerdown_handler(ev) {
  // L'événement pointerdown signale le début d'une interraction de toucher.
  // L'événement est mis en cache pour prendre en charge les gestes à 2 doigts
  evCache.push(ev);
  log("pointerDown", ev);
}
```

### Pointer move

Le gestionnaire d'événement [`pointermove`](/fr/docs/Web/API/Element/pointermove_event) détecte si un utilisateur est en train d'effectuer le geste de pincer/zoomer. Si deux pointeurs sont utilisés, et que la distance entre les pointeurs augmente (ce qui signifie qu'on étire ou dézoome), la couleur d'arrière-plan est changée en `pink`, et si la distance entre les pointeurs diminue (ce qui signifie qu'on pince ou dézoome), la couleur d'arrière-plan est changée en `lightblue`. Dans une application plus sophistiquée, le pincement ou l'étirement pourrait être utilisé pour appliquer une sémantique spécifique à l'application.

Quand cet événement est traité, la bordure de la cible est définie à `dashed` pour fournir une indication visuelle claire que l'élément a reçu un événement de déplacement.

```js
function pointermove_handler(ev) {
  // Cette fonction implémente la détection du mouvement horizontal pincer/zoomer.
  //
  // Si la distance entre les deux pointeurs augmente (zoomer),
  // l'arrière-plan de l'élément cible est changé en "pink" et si la
  // distance diminue (dezoomer), la couleur est changée en "lightblue".
  //
  // Cette fonctionne définie la bordure de l'élément cible à "dashed" pour indiquer
  // visuellement que la cible du pointeur a reçu un événement de déplacement.
  log("pointerMove", ev);
  ev.target.style.border = "dashed";

  // Trouve le pointeur en cours dans le cache et le met à jour avec cet événement
  for (var i = 0; i < evCache.length; i++) {
    if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
      break;
    }
  }

  // Si deux pointeurs sont utilisés, vérifie le geste de pincement
  if (evCache.length == 2) {
    // Calcule la distance entre les deux pointeurs
    var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

    if (prevDiff > 0) {
      if (curDiff > prevDiff) {
        // La distance entre les deux pointeurs a augmenté
        log("Pinch moving OUT -> Zoom in", ev);
        ev.target.style.background = "pink";
      }
      if (curDiff < prevDiff) {
        // La distance entre les deux pointeurs a diminué
        log("Pinch moving IN -> Zoom out", ev);
        ev.target.style.background = "lightblue";
      }
    }

    // Met en cache la distance pour les événements suivants
    prevDiff = curDiff;
  }
}
```

### Pointer up

L'événement [`pointerup`](/fr/docs/Web/API/Element/pointerup_event) est déclenché quand le pointeur est levé de la _surface de contact_. Quand cela arrive, l'événement est retiré du cache et la couleur d'arrière-plan et bordure de la cible sont rétablies à leur valeur d'origine.

Dans cette application, ce gestionnaire est également utilisé pour les événements [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event), [`pointerleave`](/fr/docs/Web/API/Element/pointerleave_event) et [`pointerout`](/fr/docs/Web/API/Element/pointerout_event).

```js
function pointerup_handler(ev) {
  log(ev.type, ev);
  // Retire ce pointeur du cache et rétablit l'arrière-plan et
  // et bordure de la cible
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // Si le nombre de pointeurs restant est inférieur à deux, remet à zéro la différence
  if (evCache.length < 2) prevDiff = -1;
}
```

### Application UI

Cette application utilise un élément {{HTMLElement("div")}} comme zone de toucher et fournit des boutons pour activer et nettoyer les logs.

> **Note :** Pour empêcher que le comportement par défaut du navigateur au toucher surcharge le gestionnaire de l'application, la propriété {{cssxref("touch-action")}} est appliquée à l'élément {{HTMLElement("body")}}.

```html
<body onload="init();" style="touch-action:none">
  <div id="target">
    Touchez l'écran avec deux pointeurs, puis pincez ou étirez.<br />
    La couleur d'arrière-plan changera en rose au pincement (Zoomer) ou en bleu
    clair à l'étirement (Dézoomer).
  </div>
  <!-- UI pour log/debug -->
  <button id="log" onclick="enableLog(event);">
    Démarrer/Stopper les logs
  </button>
  <button id="clearlog" onclick="clearLog(event);">Nettoyer les logs</button>
  <p></p>
  <output></output>
</body>
```

### Fonctions diverses

Ces fonctions prennent en charge l'application mais ne sont pas directement impliquées dans le flux des événements.

#### Gestion du Cache

Cette fonction aide à gérer le cache global des événements, `evCache`.

```js
function remove_event(ev) {
  // Supprime l'événement du cache
  for (var i = 0; i < evCache.length; i++) {
    if (evCache[i].pointerId == ev.pointerId) {
      evCache.splice(i, 1);
      break;
    }
  }
}
```

#### Log des événements

Ces fonctions sont utilisées pour afficher l'activité du pointeur dans la fenêtre de l'application (pour aider à debugger et à apprendre le flux des événements).

```js
// Flag log
var logEvents = false;

// Fonctions Log/debug
function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(prefix, ev) {
  if (!logEvents) return;
  var o = document.getElementsByTagName('output')[0];
  var s = prefix + ": pointerID = " + ev.pointerId +
                " ; pointerType = " + ev.pointerType +
                " ; isPrimary = " + ev.isPrimary;
  o.innerHTML += s + "
";
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
```

## Voir aussi

- [Pointer Events now in Firefox Nightly](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/); Mozilla Hacks; by Matt Brubeck and Jason Weathersby; 2015-Aug-04
- [jQuery Pointer Events Polyfill](https://github.com/jquery/PEP)
- [Gestures](http://www.google.com/design/spec/patterns/gestures.html); Google Design Patterns
