---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
---

{{APIRef("DOM")}}

La propriété **`currentTarget`**, accessible en lecture seule et rattachée à l'interface {{domxref("Event")}}, identifie la cible courante pour l'évènement lorsque celui-ci traverse le DOM. Elle fait toujours référence à l'élément sur lequel le gestionnaire d'évènement a été attaché tandis que {{domxref("Event.target")}} identifie l'élément à partir duquel l'évènement s'est produit (`event.target` peut donc être un descendant de `event.currentTarget`).

## Syntaxe

```js
var currentEventTarget = event.currentTarget;
```

### Valeur

{{domxref("EventTarget")}}

## Exemples

`Event.currentTarget` peut s'avérer utile lorsqu'on attache le même gestionnaire d'évènement à plusieurs éléments.

```js
// Cette fonction masque la cible courante de l'évènement
// et l'affiche dans la console.
function hide(e) {
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
  // Lorsque cette fonction est utilisée en gestionnaire d'évènement
  // on aura this === e.currentTarget
}

var ps = document.getElementsByTagName("p");

for (var i = 0; i < ps.length; i++) {
  // On affiche l'élément <p> qui a été cliqué dans la console
  ps[i].addEventListener("click", hide, false);
}
// On affiche l'élément <body> dans la console
document.body.addEventListener("click", hide, false);
```

> **Note :** La valeur de `event.currentTarget` est **uniquement** disponible lorsque l'évènement est géré. Ainsi, on ne pourra pas observer la valeur de `currentTarget` _a posteriori_ (ex. si on a stocké la valeur d'`event` dans une variable lors de la gestion de l'évènement puis qu'on utilise celle-ci plus tard, `event.currentTarget` aura la valeur `null`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Comparaison des différentes cibles pour les évènements](/fr/docs/Web/API/Event/Comparaison_des_cibles_d_évènements)
