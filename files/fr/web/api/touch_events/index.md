---
title: Événements tactiles / Touch events
slug: Web/API/Touch_events
tags:
  - Tactile
  - touch
translation_of: Web/API/Touch_events
original_slug: Web/Guide/DOM/Events/Touch_events
---
{{DefaultAPISidebar("Touch Events")}}

Afin de fournir un support de qualité pour les interfaces tactiles, les événements tactiles (_touch events_) permettent d'interpréter les interactions tactiles (sur les écrans ou trackpads).

## Définitions

- Surface
  - : La surface tactile. Cela peut être un écran ou un trackpad.
- Point de toucher (_Touch point_)
  - : Le point de contact avec la surface. Cela peut être un doigt ou un stylet (ou un coude, une oreille, un nez... enfin il y a quand même des chances que cela soit un doigt).

## Interfaces

- {{ domxref("TouchEvent") }}
  - : Représente l'événement qui se produit quand l'action de toucher change.
- {{ domxref("Touch") }}
  - : Représente un point unique de contact entre l'utilisateur et la surface tactile.
- {{ domxref("TouchList") }}
  - : Représente un groupe de plusieurs interactions tactiles. Cela peut par exemple être le cas quand l'utilisateur utilise plusieurs doigts pour toucher simultanément la même surface.
- {{ domxref("DocumentTouch") }}
  - : Contient des méthodes permettant de créer les objets  {{ domxref("Touch") }} et {{ domxref("TouchList") }}.

## Exemple

Cet exemple permet de gérer un toucher multiple (plusieurs contacts simultanés), permettant ainsi à l'utilisateur de dessiner dans un {{ HTMLElement("canvas") }} avec plusieurs doigts. Cela ne fonctionne qu'avec les navigateurs supportant les interactions tactiles.

> **Note :** Le texte qui suit utilisera le terme de « doigt » pour désigner le point de toucher entre l'utilisateur et la surface. Bien entendu, cela est transposable avec une autre méthode de toucher (stylet...).

### Initialiser les gestionnaires d'événements

Quand la page charge, la fonction `startup()` décrite ci-dessous est appelée par l'attribut `onload` de l'élément {{ HTMLElement("body") }}.

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleLeave, false);
  el.addEventListener("touchmove", handleMove, false);
}
```

Cela permet simplement d'initialiser les observateurs d'événements pour l'élément {{ HTMLElement("canvas") }} afin de pouvoir gérer ceux-ci lorsqu'ils se produisent.

### Gérer les nouveaux touchers

Quand un événement `touchstart` se produit, cela indique qu'un nouveau toucher s'est produit. La fonction `handleStart()` est alors appelée.

```js
function handleStart(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i=0; i<touches.length; i++) {
    ongoingTouches.push(touches[i]);
    var color = colorForTouch(touches[i]);
    ctx.fillStyle = color;
    ctx.fillRect(touches[i].pageX-2, touches[i].pageY-2, 4, 4);
  }
}
```

Cette fonction appelle {{ domxref("event.preventDefault()") }}, ce qui évite au navigateur de continuer à traiter cet événement (le début du toucher). Cela permet aussi de ne pas déclencher d'événement de souris. On obtient ensuite le contexte, duquel on peut obtenir une liste des changements des points de toucher grâce à la propriété {{ domxref("TouchEvent.changedTouches") }} de l'événement.

Après quoi, on fait une boucle sur les différents objets {{ domxref("Touch") }} de la liste. puis on les stocke dans un tableau pour ensuite dessiner les points (on souhaite peindre une ligne large de 4 pixels, on dessinera donc des points comme des carrés mesurant 4x4 pixels).

### Dessiner avec les déplacements

Chaque fois que le(s) doigt(s) bouge(nt), un événement `touchmove` est déclenché, ce qui provoque l'appel de la fonction `handleMove()` que l'on a créée. Son rôle, dans cet exemple, est d'actualiser les informations mises en cache sur les informations tactiles et de dessiner une ligne entre la position précédente et la position actuelle pour chacune des touches.

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ctx.closePath();
    ctx.stroke();
    ongoingTouches.splice(idx, 1, touches[i]);  // mettre à jour la liste des touchers
  }
}
```

Cette fonction boucle également sur les changements de touchers. Elle consulte toutefois les informations en cache dans le tableau pour déterminer le point de départ de chaque nouveau segment. Cela se fait en consultant la propriété {{ domxref("Touch.identifier") }}. Cette propriété est un entier unique pour chaque touche, cet entier reste le même pour chaque événement tant que le doigt est en contact avec la surface.

Cela permet d'obtenir les précédentes coordonnées pour chaque toucher et ainsi d'utiliser la méthode adaptée pour dessiner le segment reliant les deux positions.

Une fois le segment dessiné, on appelle [`Array.splice()`](/fr/JavaScript/Reference/Global_Objects/Array/splice) pour remplacer les informations précédentes sur les points de toucher par les informations courantes contenues dans le tableau `ongoingTouches`.

### Gérer la fin d'un toucher

Lorsqu'un utilisateur enlève son doigt de la surface, un événement `touchend` est envoyé. De la même manière, un événement `touchleave` sera envoyé si le doigt sort du canvas. Ici, les deux événements sont gérés en commun avec la fonction `handleEnd()` ci-dessous. Son rôle est de dessiner le dernier segment pour chaque toucher qui s'est fini et de retirer le point de contact de la liste.

```js
function handleEnd(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[i].pageX, ongoingTouches[i].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ongoingTouches.splice(i, 1);  // On enlève le point
  }
}
```

Cette fonction ressemble beaucoup à la précédente sauf qu'ici en appelant [`Array.splice()`](/en/JavaScript/Reference/Global_Objects/Array/splice), on retire simplement l'ancien point sans ajouter un point mis à jour. On arrête donc de « suivre » ce point.

### Gérer l'annulation d'un toucher

Si le doigt de l'utilisateur se balade dans l'interface du navigateur ou si un toucher doit être annulé, l'événement `touchcancel` est envoyé et on appelle alors la fonction `handleCancel()`.

```js
function handleCancel(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;

  for (var i=0; i<touches.length; i++) {
    ongoingTouches.splice(i, 1);  // on retire le point
  }
}
```

L'idée est ici la même que pour la fin d'un toucher, on retire simplement le point de la liste. Ici on ne dessine pas le dernier segment.

### Fonctions auxiliaires

Cet exemple utilise deux fonctions auxiliaires qu'il est conseillé de lire rapidement afin de mieux comprendre le reste du code.

#### Sélectionner une couleur pour chaque toucher

Afin que chaque contact soit différent, on utilisera la fonction `colorForTouch()` pour choisir un couleur unique pour chacun, basée sur l'identifiant du toucher. Cet identifiant sera toujours compris entre 0 et le nombre de touchers moins 1. Imaginons que personne n'utilisera plus de 16 touchers simultanés, on peut alors directement convertir les identifiants en niveaux de gris.

```js
function colorForTouch(touch) {
  var id = touch.identifier;
  id = id.toString(16); // creer un nombre hexadécimal
  return "#" + id + id + id;
}
```

Le résultat de cette fonction sera une chaîne de caractères qui pourra être utilisée par les fonctions de l'élément {{ HTMLElement("canvas") }} pour dessiner les couleurs. Ainsi avec un identifiant initial {{ domxref("Touch.identifier") }} de 10, le résultat de cette fonction sera la chaîne "#aaa".

#### Retrouver un toucher en cours

La fonction `ongoingTouchIndexById()` analyse le tableau `ongoingTouches` pour trouver le toucher correspondant à l'identifiant donné. Elle retourne alors l'indice du toucher dans le tableau.

```js
function ongoingTouchIndexById(idToFind) {
  for (var i=0; i<ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // toucher non trouvé
}
```

[Voir l'exemple sur une page](/samples/domref/touchevents.html)

## Astuces supplémentaires

Cette section fournit quelques astuces supplémentaires pour gérer les événements tactiles au sein de votre application web.

### Gérer les clics

Étant donné que l'appel de la méthode `preventDefault()` sur l'événement  `touchstart` ou le premier événement `touchmove` de la série empêche la saisie d'événements en provenance de la souris, on appelle souvent  `preventDefault()` sur `touchmove` plutôt que sur `touchstart`. Ainsi, les événements de la souris peuvent continuer à se déclencher et le reste du site fonctionnera de manière habituelle. Une autre méthode parfois utilisée est de déclencher des événements de souris à partir des événements tactiles. (L'exemple qui suit représente seulement une indication. La logique a été simplifiée et ce code, tel quel, aura un comportement étrange.)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;
  switch (event.type) {
    case "touchstart": type = "mousedown"; touch = event.changedTouches[0];
    case "touchmove":  type = "mousemove"; touch = event.changedTouches[0];
    case "touchend":   type = "mouseup"; touch = event.changedTouches[0];
  }
  newEvt.initMouseEvent(type, true, true, event.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shirtKey, evt.metaKey, 0, null);
  event.originalTarget.dispatchEvent(newEvt);
}
```

### Appeler preventDefault() uniquement pour un deuxième toucher

Pour éviter que des événements de zoom (comme `pinchZoom`) ne se produisent sur la page, il est possible d'appeler la méthode `preventDefault()` sur le deuxième toucher de la série. Ce comportement n'est pas encore parfaitement défini dans les différentes spécifications. Différents résultats se produisent sur les différents navigateurs (ainsi iOS empêchera le zoom mais continuera à autoriser le déroulement de la page avec deux doigts, Android autorisera le zoom mais pas le déroulement, Opera et Firefox empêcheront ces deux opérations). Il est actuellement déconseillé d'être dépendant d'un de ces comportements en particulier. Il faut plutôt utiliser les méta-données concernant la vue virtuelle (_viewport_) pour éviter un zoom quelconque.

## Compatibilité des navigateurs

{{Compat("api.Touch")}}

### Notes relatives à Gecko

Le paramètre `dom.w3c_touch_events.enabled` peut être utilisé avec ses trois états pour désactiver (0), activer (1) et détecter automatiquement (2) le support des événements tactiles. La valeur par défaut est la détection automatique (2). Une fois que le paramètre a été changé, il est nécessaire de redémarrer le navigateur.

{{ gecko_callout_heading("12.0") }}

Avant Gecko 12.0 {{ geckoRelease("12.0") }}, Gecko ne supportait pas les contacts multiples simultanés. Seul un toucher à la fois était supporté.

> **Note :** Avant Gecko 6.0 {{ geckoRelease("6.0") }}, Gecko permettait d'utiliser une [API propriétaire pour les événements tactile.](</en/DOM/Touch_events_(Mozilla_experimental)>) Cette API est maintenant dépréciée, celle-ci doit être utilisée à la place.
