---
title: "Element : évènement contextmenu"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Pointer Events")}}

L'évènement **`contextmenu`** se déclenche lorsque l'utilisateur·ice tente d'ouvrir un menu contextuel. Cet évènement est généralement déclenché en cliquant sur le bouton droit de la souris ou en appuyant sur la touche du menu contextuel.

Dans ce dernier cas, le menu contextuel s'affiche en bas à gauche de l'élément sélectionné, sauf si l'élément est un arbre, auquel cas le menu contextuel s'affiche en bas à gauche de la ligne courante.

Tout clic droit qui n'est pas désactivé (en appelant la méthode {{DOMxRef("Event.preventDefault", "preventDefault()")}} de l'évènement click) déclenche un évènement `contextmenu` sur l'élément ciblé.

> [!NOTE]
> Une exception à cela dans Firefox&nbsp;: si l'utilisateur·ice maintient la touche <kbd>Shift</kbd> en cliquant avec le bouton droit, le menu contextuel s'affiche sans qu'un évènement `contextmenu` ne soit déclenché.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("contextmenu", (event) => { })

oncontextmenu = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> Dans les premières versions de la spécification, le type d'évènement pour cet évènement était un {{DOMxRef("MouseEvent")}}. Consultez la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

## Propriétés de l'évènement

_Cette interface hérite des propriétés de {{DOMxRef("MouseEvent")}} et {{DOMxRef("Event")}}._

- {{DOMxRef("PointerEvent.altitudeAngle")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Représente l'angle entre l'axe d'un transducteur (un pointeur ou un stylet) et le plan X-Y de l'écran de l'appareil.
- {{DOMxRef("PointerEvent.azimuthAngle")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Représente l'angle entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (un pointeur ou un stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.pointerId")}} {{ReadOnlyInline}}
  - : Un identifiant unique pour le pointeur à l'origine de l'évènement.
- {{DOMxRef("PointerEvent.width")}} {{ReadOnlyInline}}
  - : La largeur (magnitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.height")}} {{ReadOnlyInline}}
  - : La hauteur (magnitude sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.pressure")}} {{ReadOnlyInline}}
  - : La pression normalisée de l'entrée du pointeur dans la plage `0` à `1`, où `0` et `1` représentent respectivement la pression minimale et maximale que le matériel est capable de détecter.
- {{DOMxRef("PointerEvent.tangentialPressure")}} {{ReadOnlyInline}}
  - : La pression tangentielle normalisée de l'entrée du pointeur (également connue sous le nom de pression de la bague ou [contrainte du cylindre <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Cylinder_stress)) dans la plage `-1` à `1`, où `0` est la position neutre du contrôle.
- {{DOMxRef("PointerEvent.tiltX")}} {{ReadOnlyInline}}
  - : L'angle plan (en degrés, dans la plage de `-90` à `90`) entre le plan Y-Z et le plan contenant à la fois l'axe du pointeur (par exemple, le stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.tiltY")}} {{ReadOnlyInline}}
  - : L'angle du plan (en degrés, dans la plage de `-90` à `90`) entre le plan X-Z et le plan contenant à la fois l'axe du pointeur (par exemple, le stylet) et l'axe X.
- {{DOMxRef("PointerEvent.twist")}} {{ReadOnlyInline}}
  - : Rotation dans le sens des aiguilles d'une montre du pointeur (par exemple, un stylet) autour de son axe principal, exprimée en degrés, avec une valeur comprise entre `0` et `359`.
- {{DOMxRef("PointerEvent.pointerType")}} {{ReadOnlyInline}}
  - : Indique le type de périphérique à l'origine de l'évènement (souris, stylet, écran tactile, etc.).
- {{DOMxRef("PointerEvent.isPrimary")}} {{ReadOnlyInline}}
  - : Indique si le pointeur est le pointeur principal de ce type de pointeur.

## Exemples

### Annuler l'évènement `contextmenu`

Dans cet exemple, l'action par défaut de l'évènement `contextmenu` est annulée à l'aide de `preventDefault()` lorsque cet évènement est déclenché sur le premier paragraphe. Par conséquent, un clic droit sur le premier paragraphe n'a aucun effet, tandis que le deuxième paragraphe affiche le menu contextuel standard proposé par votre navigateur.

> [!NOTE]
> Dans Firefox, si vous maintenez la touche <kbd>Maj</kbd> enfoncée tout en cliquant avec le bouton droit, le menu contextuel s'affiche sans que l'évènement `contextmenu` ne soit déclenché. Par conséquent, l'annulation de l'évènement n'empêche pas l'affichage du menu contextuel.

#### HTML

```html
<p id="pasDeMenuContextuel">
  Le menu contextuel a été désactivé sur ce paragraphe.
</p>
<p>Mais il n'a pas été désactivé sur celui-ci.</p>
```

#### JavaScript

```js
const sansContexte = document.getElementById("pasDeMenuContextuel");

sansContexte.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

#### Résultat

{{EmbedLiveSample("Annuler l'évènement `contextmenu`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/auxclick_event", "auxclick")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
- L'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}
