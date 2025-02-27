---
title: MouseEvent
slug: Web/API/MouseEvent
---

{{APIRef("UI Events")}}

L'interface **`MouseEvent`** représente les événements qui se produisent lors d'une interaction de l'utilisateur avec un appareil de pointage (tel qu'une souris). Les événements communs utilisant cette interface incluent [`click`](/fr/docs/Web/API/Element/click_event), [`dblclick`](/fr/docs/Web/API/Element/dblclick_event), [`mouseup`](/fr/docs/Web/API/Element/mouseup_event) et [`mousedown`](/fr/docs/Web/API/Element/mousedown_event).

`MouseEvent` dérive de {{domxref("UIEvent")}}, qui lui-même est issu d'{{domxref("Event")}}. Bien que la méthode {{domxref ("MouseEvent.initMouseEvent()")}} soit conservée à des fins de compatibilité descendante, la création d'un objet `MouseEvent` doit être effectuée à l'aide du constructeur {{domxref ("MouseEvent.MouseEvent","MouseEvent()")}}.

Plusieurs événements plus spécifiques sont basés sur `MouseEvent`, y compris {{domxref ("WheelEvent")}} et {{domxref ("DragEvent")}}.

## Constructeur

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : crée un objet `MouseEvent`.

## Propriétés

_Cette interface hérite aussi des propriétés de ses parents_ _{{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{readonlyinline}}

  - : renvoie `true` (_vrai_) si la touche

    <kbd>alt</kbd>

    est pressée lorsque l'événement est lancé.

- {{domxref("MouseEvent.button")}} {{readonlyinline}}
  - : Le chiffre représentant le bouton qui est pressé lorsque l'événement est lancé.
- {{domxref("MouseEvent.buttons")}} {{readonlyinline}}
  - : Les boutons qui sont pressés alors que l'événement est lancé.
- {{domxref("MouseEvent.clientX")}} {{readonlyinline}}
  - : La coordonnée en X du pointeur de la souris dans les coordonnées locales (contenu du DOM).
- {{domxref("MouseEvent.clientY")}} {{readonlyinline}}
  - : La coordonnée en Y du pointeur de la souris dans les coordonnées locales (contenu du DOM).
- {{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}

  - : renvoie `true` si la touche

    <kbd>ctrl</kbd>

    est pressée alors que l'événement est lancé.

- {{domxref("MouseEvent.metaKey")}} {{readonlyinline}}

  - : renvoie `true` si la touche

    <kbd>méta</kbd>

    est pressée alors que l'événement est lancé.

- {{domxref("MouseEvent.movementX")}} {{readonlyinline}}
  - : La coordonnée en X du pointeur de la souris relative à la position de la souris lors du dernier événement [`mousemove`](/fr/docs/Web/API/Element/mousemove_event) lancé.
- {{domxref("MouseEvent.movementY")}} {{readonlyinline}}
  - : La coordonnée en Y du pointeur de la souris relative à la position de la souris lors du dernier événement [`mousemove`](/fr/docs/Web/API/Element/mousemove_event) lancé.
- {{domxref("MouseEvent.offsetX")}} {{readonlyinline}}{{experimental_inline}}
  - : La coordonnée en X du pointeur de la souris relative à la postion du bord de remplissage du noeud cible.
- {{domxref("MouseEvent.offsetY")}} {{readonlyinline}}{{experimental_inline}}
  - : La coordonnée en Y du pointeur de la souris relative à la postion du bord de remplissage du noeud cible.
- {{domxref("MouseEvent.pageX")}} {{readonlyinline}}{{experimental_inline}}
  - : La coordonnée en X du pointeur de la souris relative au document entier.
- {{domxref("MouseEvent.pageY")}} {{readonlyinline}}{{experimental_inline}}
  - : La coordonnée en Y du pointeur de la souris relative au document entier.
- {{domxref("MouseEvent.region")}} {{readonlyinline}}
  - : renvoie l'identifiant de la région touchée par l'évènement. Si aucune région n'est affectée, `null` est retourné.
- {{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}
  - : La seconde cible pour l'événement, s'il y en a une.
- {{domxref("MouseEvent.screenX")}} {{readonlyinline}}
  - : La coordonnée en X du pointeur de la souris de façon globale (par rapport à l'écran).
- {{domxref("MouseEvent.screenY")}} {{readonlyinline}}
  - : La coordonnée en Y du pointeur de la souris de façon globale (par rapport à l'écran).
- {{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}

  - : renvoie `true` si la touche

    <kbd>Maj</kbd>

    est pressée alors que l'événement est lancé.

- {{domxref("MouseEvent.which")}} {{readonlyinline}}
  - : Le bouton qui est pressé alors que l'événement est lancé.
- MouseEvent.mozPressure {{non-standard_inline()}} {{readonlyinline}}
  - : La quantité de pression appliquée à un appareil tactile ou tablette lors de la génération de l'événement ; l'amplitude de cette valeur se situe entre 0.0 (pression minimum) et 1.0 (pression maximum).
- MouseEvent.mozInputSource {{non-standard_inline()}} {{readonlyinline}}
  - : Le type d'appareil qui a généré l'événement (une des constantes `MOZ_SOURCE_*` listées ci-dessous). Ceci permet, par exemple, de déterminer si un événement de pointeur est généré par une souris ou par un événement tactile (qui pourrait affecter le degré de précision avec lequel il est possible d'interpréter les coordonnées associées à l'événement).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : La quantité de pression appliquée en cliquant.
- {{domxref("MouseEvent.x")}} {{experimental_inline}}{{readonlyinline}}
  - : Alias pour {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{experimental_inline}}{{readonlyinline}}
  - : Alias pour {{domxref("MouseEvent.clientY")}}.

## Constantes

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Force minimum nécessaire pour un click normal.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Force minimum nécessaire pour un click fort.

## Les méthodes

_Cette interface hérite aussi des méthodes de ses parents_ _{{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("MouseEvent.getModifierState")}}()
  - : Retourne l'état actuel de la touche de modification spécifiée. Voir {{domxref("KeyboardEvent.getModifierState")}}() pour plus de détails.
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : initialise la valeur de l'`MouseEvent` créé. Si l'évènement a déjà été diffusé, la méthode ne produit rien.

## Exemple

Cet exemple illustre la simulation d'un clic (générant par programmation un événement click) sur une case à cocher en utilisant les méthodes DOM.

```js
function simulateClick() {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  var cb = document.getElementById("checkbox"); //élément pour cliquer
  var canceled = !cb.dispatchEvent(evt);
  if (canceled) {
    // Un gestionnaire appelé preventDefault
    alert("canceled");
  } else {
    // Aucun des gestionnaires n'est appelé preventDefault
    alert("not canceled");
  }
}
document.getElementById("button").addEventListener("click", simulateClick);
```

```html
<p>
  <label><input type="checkbox" id="checkbox" /> Checked</label>
</p>
<p><button id="button">Click me</button></p>
```

Cliquez sur le bouton pour voir comment l'exemple fonctionne :

{{ EmbedLiveSample('Exemple', '', '', '') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Son parent direct, {{domxref("UIEvent")}}.
- {{domxref("PointerEvent")}} : Pour les événements avancés du pointeur, y compris le multi-touch.
