---
title: "Element : évènement pointermove"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: a0d27fbd56b5327923e072af498c3e8e3252afce
---

{{APIRef("Pointer Events")}}

L'évènement **`pointermove`** se déclenche lorsqu'un dispositif de pointage change de coordonnées, et que le pointeur n'a pas été [annulé](/fr/docs/Web/API/Element/pointercancel_event) par une [action tactile](/fr/docs/Web/CSS/Reference/Properties/touch-action) du navigateur. L'évènement se déclenche également lorsqu'un pointeur change l'une de ses autres propriétés, à condition que ce changement ne produise pas un autre évènement de pointeur. Cela inclut tout changement de pression, de pression tangentielle, d'inclinaison, de rotation, de géométrie du contact (largeur et hauteur), ou de [boutons accordés <sup>(angl.)</sup>](https://w3c.github.io/pointerevents/#dfn-chorded-buttons).

L'évènement **`pointermove`** peut avoir des évènements fusionnés s'il existe déjà un autre évènement `pointermove` avec le même ID de pointeur qui n'a pas encore été distribué dans la boucle d'évènements.
Si les évènements sont fusionnés, la cible (`target`) de l'évènement distribué est la même que celle du dernier évènement fusionné.
Pour des informations sur les évènements fusionnés, voir la documentation de {{DOMxRef("PointerEvent.getCoalescedEvents()")}}.

Cet évènement est très similaire à l'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}, mais avec plus de fonctionnalités. Ces évènements se produisent que des boutons de pointeur soient pressés ou non. Ils peuvent se déclencher à un rythme très élevé, en fonction de la rapidité avec laquelle l'utilisateur·ice déplace le pointeur, de la rapidité de la machine, des autres tâches et processus en cours, etc.

La différence entre {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}} et `pointermove` réside dans leur fréquence de déclenchement.
Un navigateur peut retarder les évènements `pointermove` pour améliorer les performances, tandis que les évènements `pointerrawupdate` sont distribués aussi rapidement et aussi fréquemment que le navigateur peut les produire.
Dans la plupart des cas, vous devez préférer `pointermove` pour éviter des problèmes de performance.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Notes d'utilisation

L'évènement, qui est de type {{DOMxRef("PointerEvent")}}, fournit toutes les informations nécessaires sur l'interaction de l'utilisateur·ice avec le dispositif de pointage, y compris la position, la distance de déplacement, l'état des boutons, et bien plus encore.

## Exemples

Pour ajouter un gestionnaire pour les évènements `pointermove` en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}&nbsp;:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Le pointeur a bougé");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onpointermove`&nbsp;:

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Le pointeur a bougé");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{DOMxRef("Element/mousemove_event", "mousemove")}}
