---
title: "Element : évènement click"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Un élément reçoit un évènement **`click`** lorsque l'une des situations suivantes se produit&nbsp;:

- Un bouton d'un dispositif de pointage (comme le bouton principal d'une souris) est à la fois pressé et relâché alors que le pointeur se trouve à l'intérieur de l'élément.
- Un geste tactile est effectué sur l'élément.
- Toute interaction utilisateur·ice équivalente à un clic, comme appuyer sur la touche <kbd>Espace</kbd> ou <kbd>Entrer</kbd> lorsque l'élément est sélectionné. Notez que cela ne s'applique qu'aux éléments avec un gestionnaire d'évènements clavier par défaut, et exclut donc les autres éléments qui ont été rendus sélectionnables en définissant l'attribut [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex).

- Si le bouton est pressé sur un élément et que le pointeur est déplacé en dehors de l'élément avant que le bouton ne soit relâché, l'évènement est déclenché sur l'ancêtre le plus spécifique qui contenait les deux éléments.

`click` se déclenche après que les évènements {{DOMxRef("Element/mousedown_event", "mousedown")}} et {{DOMxRef("Element/mouseup_event", "mouseup")}} se soient produits, dans cet ordre.

L'évènement est indépendant du dispositif — cela signifie qu'il peut être activé par le toucher, le clavier, la souris et tout autre mécanisme fourni par la technologie d'assistance.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> Dans les versions antérieures de la spécification, le type d'évènement pour cet évènement était un {{DOMxRef("MouseEvent")}}. Consultez la [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

## Propriétés de l'évènement

_Cette interface hérite des propriétés de {{DOMxRef("MouseEvent")}} et {{DOMxRef("Event")}}._

- {{DOMxRef("PointerEvent.altitudeAngle")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Représente l'angle entre l'axe d'un transducteur (un pointeur ou un stylet) et le plan X-Y de l'écran d'un dispositif.
- {{DOMxRef("PointerEvent.azimuthAngle")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Représente l'angle entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (pointeur ou stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.pointerId")}} {{ReadOnlyInline}}
  - : Identifiant unique du pointeur à l'origine de l'évènement.
- {{DOMxRef("PointerEvent.width")}} {{ReadOnlyInline}}
  - : La largeur (amplitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.height")}} {{ReadOnlyInline}}
  - : La hauteur (amplitude sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.pressure")}} {{ReadOnlyInline}}
  - : La pression normalisée de l'entrée du pointeur comprise entre `0` et `1`, où `0` et `1` représentent respectivement la pression minimale et maximale que le matériel est capable de détecter.
- {{DOMxRef("PointerEvent.tangentialPressure")}} {{ReadOnlyInline}}
  - : La pression tangentielle normalisée de l'entrée du pointeur (également appelée «&nbsp;pression du canon&nbsp;» ou [contrainte cylindrique <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Cylinder_stress)) comprise entre `-1` et `1`, où `0` représente la position neutre du contrôle.
- {{DOMxRef("PointerEvent.tiltX")}} {{ReadOnlyInline}}
  - : L'angle plan (en degrés, compris entre `-90` et `90`) entre le plan Y-Z et le plan contenant à la fois l'axe du pointeur (par exemple, un stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.tiltY")}} {{ReadOnlyInline}}
  - : L'angle plan (en degrés, compris entre `-90` et `90`) entre le plan X-Z et le plan contenant à la fois l'axe du pointeur (par exemple, un stylet) et l'axe X.
- {{DOMxRef("PointerEvent.twist")}} {{ReadOnlyInline}}
  - : La rotation dans le sens des aiguilles d'une montre du pointeur (par exemple, un stylet) autour de son axe principal en degrés, avec une valeur comprise entre `0` et `359`.
- {{DOMxRef("PointerEvent.pointerType")}} {{ReadOnlyInline}}
  - : Indique le type de dispositif à l'origine de l'évènement (souris, stylet, tactile, etc.).
- {{DOMxRef("PointerEvent.isPrimary")}} {{ReadOnlyInline}}
  - : Indique si le pointeur représente le pointeur principal de ce type de pointeur.

## Notes d'utilisation

L'objet {{DOMxRef("PointerEvent")}} passé au gestionnaire d'évènements pour `click` a sa propriété {{DOMxRef("UIEvent/detail", "detail")}} définie sur le nombre de fois que la {{DOMxRef("Event.target", "target")}} a été cliqué. En d'autres termes, `detail` est 2 pour un double-clic, 3 pour un triple-clic, et ainsi de suite. Ce compteur se réinitialise après un court intervalle sans clics&nbsp;; la durée exacte de cet intervalle peut varier d'un navigateur à l'autre et selon les plateformes. L'intervalle est également susceptible d'être affecté par les préférences de l'utilisateur·ice&nbsp;; par exemple, les options d'accessibilité peuvent prolonger cet intervalle pour faciliter les clics multiples avec des interfaces adaptatives.

## Exemples

Dans cet exemple, on affiche le nombre de clics consécutifs sur un bouton HTML ({{HTMLElement("button")}}).

### HTML

```html
<button>Cliquer ici</button>
```

### JavaScript

```js
const bouton = document.querySelector("button");

bouton.addEventListener("click", (event) => {
  bouton.innerHTML = `Nombre de clics : ${event.detail}`;
});
```

### Résultat

Essayez de cliquer rapidement sur le bouton pour augmenter le nombre de clic. Après une pause, le compteur est remis à zéro.

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/auxclick_event", "auxclick")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
- L'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}
