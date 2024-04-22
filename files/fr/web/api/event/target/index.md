---
title: Event.target
slug: Web/API/Event/target
---

{{ ApiRef("DOM") }}

C'est une référence à l'objet qui a envoyé l'événement. C'est une propriété différente de {{domxref("event.currentTarget")}} lorsque le gestionnaire d'événements est appelé au cours de la phase de propagation ou de la phase de capture de l'événement.

## Syntaxe

```js
laCible = event.target;
```

## Exemple

La propriété `event.target` peut être utilisée pour implémenter la **délégation d'événements**.

```js
// Produit une liste
var ul = document.createElement("ul");
document.body.appendChild(ul);

var li1 = document.createElement("li");
var li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e) {
  // e.target se réfère à l'élément <li> cliqué
  // C'est différent de e.currentTarget qui doit faire référence au parent <ul> dans ce contexte
  e.target.style.visibility = "hidden";
}

// Attache l'écouteur à la liste
// Il se déclenche pour chaque <li> clické
ul.addEventListener("click", hide, false);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

[Comparaison des cibles d'évènements](/fr/docs/Web/API/Event/Comparaison_des_cibles_d_évènements)
