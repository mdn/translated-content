---
title: Événements de pointeur
slug: Web/API/Pointer_events
tags:
  - API
  - NeedsTranslation
  - Overview
  - TopicStub
translation_of: Web/API/Pointer_events
---
{{DefaultAPISidebar("Pointer Events")}}

La plupart du contenu web d'aujourd'hui suppose que le périphérique de pointage de l'utilisateur sera une souris. Cependant, beaucoup d'appareils prennent en charge d'autres types de d'entrée pour pointeur, comme le stylet ou les doigts pour les écrans tactiles. Des extensions aux modèles d'événement de pointage sont nécessaires et les _événements de pointeur_ répondent à ce besoin.

Les événements de pointeur sont des événements DOM déclenché pour tout périphérique de pointage. Ils sont conçus pour créer un modèle unique d'événement DOM pour gérer les périphériques de pointage comme la souris, le stylet ou le toucher (avec un ou plusieurs doigts). Un _[pointeur](#term_pointer)_ est agnostique du type de matériel utilisé pour cibler un endroit sur l'écran.

Avoir un seul modèle pour gérer les événements de pointeur peut simplifier la création de sites web et applications et fournir une bonne expérience utilisateur quelque soit le matériel de l'utilisateur. Toutefois, pour les scénarios dans lesquels une gestion spécifique au périphérique est souhaitée, les événements de pointeur définissent une propriété {{domxref("PointerEvent.pointerType","pointerType")}} qui permet de connaître le type de périphérique ayant déclenché l'événement.

Les événements nécessaires pour gérer les entrées de pointeur génériques sont analogues aux {{domxref("MouseEvent","événements de souris")}}. Par conséquent, les types d'événement de pointeur sont intentionnelement similaires aux événements de souris (`mousedown/pointerdown`, `mousemove/pointermove`, etc). De plus, les événements de pointeur contiennent les propriétés usuelles présentes dans les événements de souris (coordonnées client, élément cible, états des boutons, etc.) ainsi que de nouvelles propriétés pour les autres types d'entrée: pression, géométrie de contact, inclinaison, etc. En fait, l'interface {{domxref("PointerEvent")}} hérite toutes les propriétés de {{domxref("MouseEvent","MouseEvent")}} ce qui facilite la migration des événements souris aux événements de pointeur.

## Terminologie

- pointeur actif
  - : Tout périphérique d'entrée _[pointeur](#term_pointer)_ pouvant produire des événements. Un pointeur est considéré actif s'il peut encore produire des événements. Par exemple, un stylet posé sur l'écran est considéré comme actif puisqu'il peut produire des événements en étant déplacé ou levé.
- numériseur (digitizer)
  - : Un dispositif avec une surface pouvant recevoir et détecter le contact. Le plus souvent, le dispositif est un écran tactile pouvant détecter l'entrée provenant du stylet ou du doigt.
- hit test
  - : Le procédé qu'utilise le navigateur pour détermine l'élément cible de l'événement pointeur. Typiquement, il est déterminé en utilisant l'emplacement du pointeur et la disposition visuelle des éléments dans un document d'un media écran.
- pointeur
  - : Une représentation agnostique du périphérique en entrée pouvant cibler des coordonnées sur un écran. Des exemples d'appareils de _pointeur_ sont la souris, le stylet et la contact tactile.
- capture du pointeur
  - : La capture du pointeur permet aux événements d'être redirigé vers un élément particulier autre que le résultat du hit test.
- événement de pointeur
  - : Un {{domxref("PointerEvent","événement")}} DOM déclenché pour un _pointeur_.

## Interfaces

L'interface principale est l'interface {{domxref("PointerEvent")}}, qui comprend un {{domxref("PointerEvent.PointerEvent","constructeur")}} ainsi que plusieurs événements. L'API ajoute également quelques extensions aux interfaces {{domxref("Element")}} et {{domxref("Navigator")}}. Les sous-sections suivantes décrivent brièvement chaque interface et propriétés liées.

### Interface PointerEvent

L'interface {{domxref("PointerEvent")}} hérite de l'interface {{domxref("MouseEvent")}} et a les propriétés suivantes (toutes sont {{readonlyInline}}).

- {{ domxref('PointerEvent.pointerId','pointerId')}} - un identifiant unique pour le pointeur ayant déclenché l'événement.
- {{ domxref('PointerEvent.width','width')}} - la largeur (ordre de grandeur sur l'axe X), en pixels CSS, du point de contact.
- {{ domxref('PointerEvent.height','height')}} - la hauteur (ordre de grandeur sur l'axe Y), en pixels CSS, du point de contact.
- {{ domxref('PointerEvent.pressure','pressure')}} - la pression du pointeur normalisée sur une échelle entre 0 et 1, où 0 et 1 représentent respectivement la pression minimale et le maximale que l'appareil est capable de détecter.
- {{ domxref('PointerEvent.tiltX','tiltX')}} - l'angle du plan (en degrés, sur une échelle de -90 à 90) entre le plan Y-Z et le plan qui contient l'axe du stylo et l'axe Y.
- {{ domxref('PointerEvent.tiltY','tiltY')}} - l'angle du plan (en degrés, sur une échelle de -90 à 90) entre le plan X-Z et le plan qui contient l'axe du stylo et l'axe X.
- {{ domxref('PointerEvent.pointerType','pointerType')}} - indique le type d'appareil ayant déclenché l'événement (souris, stylet, toucher, etc.)
- {{ domxref('PointerEvent.isPrimary','isPrimary')}} - indique si le pointeur est le pointeur principal de son type (utile dans le cas du multi-touch).

### Types d'événements et gestionnaires d'événements globaux

Il existe dix types d'événement de pointeur, dont sept qui ont la même sémantique que les événements souris (`down, up, move, over, out, enter, leave`). Vous trouverez ci-dessous une courte description de chaque type d'événement et son {{domxref("GlobalEventHandlers","gestionnaire d'événement global")}} associé.

| Event                                    | On Event Handler                                                                             | Description                                                                                                                                                                                                                                   |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{event('pointerover')}}         | {{domxref('GlobalEventHandlers.onpointerover','onpointerover')}}         | déclenché quand un pointeur entre à l'intérieur des limites du [hit test](#term_hit_test) d'un élément.                                                                                                                                       |
| {{event('pointerenter')}}         | {{domxref('GlobalEventHandlers.onpointerenter','onpointerenter')}}     | déclenché quand un pointeur entre à l'intérieur des limites du [hit test](#term_hit_test) d'un élément ou d'un de ses descendants.                                                                                                            |
| {{event('pointerdown')}}         | {{domxref('GlobalEventHandlers.onpointerdown','onpointerdown')}}         | déclenché quand le pointeur devient _actif_ (que le contact est établit).                                                                                                                                                                     |
| {{event('pointermove')}}         | {{domxref('GlobalEventHandlers.onpointermove','onpointermove')}}         | déclenché quand les coordonnées du pointeur changent (que le pointeur bouge).                                                                                                                                                                 |
| {{event('pointerup')}}             | {{domxref('GlobalEventHandlers.onpointerup','onpointerup')}}             | déclenché quand le pointeur n'est plus _actif_ (que le contact est relaché).                                                                                                                                                                  |
| {{event('pointercancel')}}     | {{domxref('GlobalEventHandlers.onpointercancel','onpointercancel')}} | le navigateur déclenche cet événement s'il détecte que le pointeur ne pourra plus générer d'événement (si l'appareil est désactivé par exemple).                                                                                              |
| {{event('pointerout')}}         | {{domxref('GlobalEventHandlers.onpointerout','onpointerout')}}         | déclenché quand le pointeur n'est plus affecté à l'élément: qu'il sort des limites du [hit test](term_hit_test) de l'élément; qu'il déclenche l'événement pointerup ou pointercancel; que le stylet sort de la zone de l'écran de l'appareil. |
| {{event('pointerleave')}}         | {{domxref('GlobalEventHandlers.onpointerleave','onpointerleave')}}     | déclenché quand le pointeur sort des limites du [hit test](term_hit_test) de l'élément. Cet événement est également déclenché lorsqu'on utilise un stylet et qu'il sort de la zone détectable par le numériseur.                              |
| {{event('gotpointercapture')}} | Aucun (voir [Extensions d'Elements](#Extensions_d'Element))                                  | déclenché quand un élément reçoit la capture du pointeur.                                                                                                                                                                                     |
| {{event('lostpointercapture')}} | Aucun (voir [Extensions d'Element](#Extensions_d'Element))                                   | déclenché quand la capture du pointeur est désactivée.                                                                                                                                                                                        |

### Extensions d'Element

Il existe quatre extensions à l'interface {{domxref("Element")}}:

- {{domxref("Element.ongotpointercapture","ongotpointercapture")}} - an EventHandler that returns the event handler (function) for the gotpointercapture event type.
- {{domxref("Element.onlostpointercapture","onlostpointercapture")}} - an EventHandler interface that returns the event handler (function) for the lostpointercapture event type.
- {{domxref("Element.setPointerCapture()","setPointerCapture()")}} - this method designates a specific element as the _capture target_ of future pointer events.
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}} - the method releases (stops) _pointer capture_ that was previously set for a specific pointer event.

### Extension de Navigator

La propriété {{domxref("Navigator.maxTouchPoints")}} est utilisé pour déterminer le nombre maximum de points de contact pris en charge à n'importe quel moment.

## Exemples

Cette section contient des exemples basiques d'utilisation d'interfaces d'événement de pointeur.

### Enregistrer des gestionnaires d'événement

This example registers a handler for every event type for the given element.

```html
<html>
<script>
function over_handler(event) { }
function enter_handler(event) { }
function down_handler(event) { }
function move_handler(event) { }
function up_handler(event) { }
function cancel_handler(event) { }
function out_handler(event) { }
function leave_handler(event) { }
function gotcapture_handler(event) { }
function lostcapture_handler(event) { }

function init() {
 var el=document.getElementById("target");
 // Register pointer event handlers
 el.onpointerover = over_handler;
 el.onpointerenter = enter_handler;
 el.onpointerdown = down_handler;
 el.onpointermove = move_handler;
 el.onpointerup = up_handler;
 el.onpointercancel = cancel_handler;
 el.onpointerout = out_handler;
 el.onpointerleave = leave_handler;
 el.gotpointercapture = gotcapture_handler;
 el.lostpointercapture = lostcapture_handler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

### Propriétés des événements

This example illustrates accessing all of a touch event's properties.

```html
<html>
<script>
var id = -1;

function process_id(event) {
  // Process this event based on the event's identifier
}
function process_mouse(event) {
  // Process the mouse pointer event
}
function process_pen(event) {
  // Process the pen pointer event
}
function process_touch(event) {
  // Process the touch pointer event
}
function process_tilt(tiltX, tiltY) {
  // Tilt data handler
}
function process_pressure(pressure) {
  // Pressure handler
}
function process_non_primary(event) {
  // Pressure handler
}

function down_handler(ev) {
 // Calculate the touch point's contact area
 var area = ev.width * ev.height;

 // Compare cached id with this event's id and process accordingly
 if (id == ev.identifier) process_id(ev);

 // Call the appropriate pointer type handler
 switch (ev.pointerType) {
   case "mouse":
     process_mouse(ev);
     break;
   case "pen":
     process_pen(ev);
     break;
   case "touch":
     process_touch(ev);
     break;
   default:
     console.log("pointerType " + ev.pointerType + " is Not suported");
 }

 // Call the tilt handler
 if (ev.tiltX != 0 && ev.tiltY != 0) process_tilt(ev.tiltX, ev.tiltY);

 // Call the pressure handler
 process_pressure(ev.pressure);

 // If this event is not primary, call the non primary handler
 if (!ev.isPrimary) process_non_primary(evt);
}

function init() {
 var el=document.getElementById("target");
 // Register pointerdown handler
 el.onpointerdown = down_handler;
}
</script>
<body onload="init();">
 <div id="target"> Touch me ... </div>
</body>
</html>
```

## Déterminer le pointeur principal

In some scenarios there may be multiple pointers (for example a device with both a touchscreen and a mouse) or a pointer supports multiple contact points (for example a touchscreen that supports multiple finger touches). The application can use the {{domxref("PointerEvent.isPrimary","isPrimary")}} property to identify a master pointer among the set of _active pointers_ for each pointer type. If an application only wants to support a primary pointer, it can ignore all pointer events that are not primary.

For mouse, there is only one pointer so it will always be the primary pointer. For touch input, a pointer is considered primary if the user touched the screen when there were no other active touches. For pen and stylus input, a pointer is considered primary if the user's pen initially contacted the screen when there were no other active pens contacting the screen.

## Déterminer l'état des boutons

Some pointer devices, such as mouse and pen, support multiple buttons and the button presses can be _chorded_ i.e. depressing an additional button while another button on the pointer device is already depressed. To determine the state of button presses, pointer events uses the {{domxref("MouseEvent.button","button")}} and {{domxref("MouseEvent.buttons","buttons")}} properties of the {{domxref("MouseEvent")}} interface (that {{domxref("PointerEvent")}} inherits from). The following table provides the values of `button` and `buttons` for the various device button states.

| Device Button State                                                       | button | buttons |
| ------------------------------------------------------------------------- | ------ | ------- |
| Mouse move with no buttons pressed                                        | -1     | 0       |
| Left Mouse, Touch Contact, Pen contact (with no modifier buttons pressed) | 0      | 1       |
| Middle Mouse                                                              | 1      | 4       |
| Right Mouse, Pen contact with barrel button pressed                       | 2      | 2       |
| X1 (back) Mouse                                                           | 3      | 8       |
| X2 (forward) Mouse                                                        | 4      | 16      |
| Pen contact with eraser button pressed                                    | 5      | 32      |

## Capture du pointeur

Pointer capture allows events for a particular {{domxref("PointerEvent","pointer event")}} to be re-targeted to a particular element instead of the normal [hit test](#term_hit_test) at a pointer's location. This can be used to ensure that an element continues to receive pointer events even if the pointer device's contact moves off the element (for example by scrolling).

The following example shows pointer capture being set on an element.

```html
<html>
<script>
function downHandler(ev) {
 var el=document.getElementById("target");
 //Element 'target' will receive/capture further events
 el.setPointerCapture(ev.pointerId);
}
function init() {
 var el=document.getElementById("target");
 el.onpointerdown = downHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

The following example shows a pointer capture being released (when a {{event("pointercancel")}} event occurs. The browser does this automatically when a {{event("pointerup")}} or {{event("pointercancel")}} event occurs.

```html
<html>
<script>
function downHandler(ev) {
 var el=document.getElementById("target");
 // Element "target" will receive/capture further events
 el.setPointerCapture(ev.pointerId);
}
function cancelHandler(ev) {
 var el=document.getElementById("target");
 // Release the pointer capture
 el.releasePointerCapture(ev.pointerId);
}
function init() {
 var el=document.getElementById("target");
 // Register pointerdown and pointercancel handlers
 el.onpointerdown = downHandler;
 el.onpointercancel = cancelHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

## Propriété touch-action

The {{cssxref("touch-action")}} CSS property is used to specifiy whether or not the browser should apply its default (_native_) touch behavior (such as zooming or panning) to a region. This property may be applied to all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups.

A value of `auto` means the browser is free to apply its default touch behavior (to the specified region) and the value of `none` disables the browser's default touch behavior for the region. The values `pan-x` and `pan-y`, mean that touches that begin on the specified region are only for horizontal and vertical scrolling, respectively. The value `manipulation` means the browser may consider touches that begin on the element are only for scrolling and zooming.

In the following example, the browser's default touch behavior is disabled for the `div` element.

```html
<html>
<body>
 <div style="touch-action:none;">Can't touch this ... </div>
</body>
</html>
```

In the following example, default touch behavior is disabled for some `button` elements.

```css
button#tiny {
  touch-action: none;
}
```

In the following example, when the `target` element is touched, it will only pan in the horizontal direction.

```css
#target {
  touch-action: pan-x;
}
```

## Compatibilité avec les événements de souris

Although the pointer event interfaces enable applications to create enhanced user experiences on pointer enabled devices, the reality is the vast majority of today's web content is designed to only work with mouse input. Consequently, even if a browser supports pointer events, the browser must still process mouse events so content that assumes mouse-only input will work as is without direct modification. Ideally, a pointer enabled application does not need to explicitly handle mouse input. However, because the browser must process mouse events, there may be some compatibility issues that need to be handled. This section contains information about pointer event and mouse event interaction and the ramifications for application developers.

The browser _may map generic pointer input to mouse events for compatibility with mouse-based content_. This mapping of events is called _compatibility mouse events_. Authors can prevent the production of certain compatibility mouse events by canceling the pointerdown event but note that:

- Mouse events can only be prevented when the pointer is down.
- Hovering pointers (e.g. a mouse with no buttons pressed) cannot have their mouse events prevented.
- The mouseover, mouseout, mouseenter, and mouseleave events are never prevented (even if the pointer is down).

## Bonnes pratiques

Here are some _best practices_ to consider when using pointer events:

- Minimize the amount of work done that is done in the event handlers.
- Add the event handlers to a specific target element (rather than the entire document or nodes higher up in the document tree).
- The target element (node) should be large enough to accommodate the largest contact surface area (typically a finger touch). If the target area is too small, touching it could result in firing other events for adjacent elements.

## Implémentation et déploiement

The [pointer events browser compatibility data](/en-US/docs/Web/API/PointerEvents#Browser_compatibility) indicates pointer event support among desktop and mobile browsers is relatively low, although additional implementations are in progress.

Some new value have been proposed for the {{cssxref("touch-action", "CSS touch-action")}} property as part of [Pointer Events Level 2](https://w3c.github.io/pointerevents/) specification but currently those new values have no implementation support.

## Démos and exemples

- [Touch/pointer tests and demos (by Patrick H. Lauke)](http://patrickhlauke.github.io/touch/)

## Communauté

- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail list](http://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC channel](irc://irc.w3.org:6667/)

## Sujets et ressources liés

- [Touch Events Standard](http://www.w3.org/TR/touch-events/)
