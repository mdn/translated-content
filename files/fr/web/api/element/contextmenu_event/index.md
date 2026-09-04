---
title: "Element : évènement contextmenu"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
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
