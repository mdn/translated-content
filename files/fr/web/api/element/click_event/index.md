---
title: "Element : évènement click"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
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
