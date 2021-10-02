---
title: Event.target
slug: Web/API/Event/target
tags:
  - API
  - Cible
  - DOM
  - Evènement
  - Propriétés
translation_of: Web/API/Event/target
---
{{ ApiRef("DOM") }}

C'est une référence à l'objet qui a envoyé l'événement. C'est une propriété différente de {{domxref("event.currentTarget")}} lorsque le gestionnaire d'événements est appelé au cours de la phase de propagation ou de la phase de capture de l'événement.

## Syntaxe

    laCible = event.target

## Exemple

La propriété `event.target` peut être utilisée pour implémenter la **délégation d'événements**.

```js
// Produit une liste
var ul = document.createElement('ul');
document.body.appendChild(ul);

var li1 = document.createElement('li');
var li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target se réfère à l'élément <li> cliqué
  // C'est différent de e.currentTarget qui doit faire référence au parent <ul> dans ce contexte
  e.target.style.visibility = 'hidden';
}

// Attache l'écouteur à la liste
// Il se déclenche pour chaque <li> clické
ul.addEventListener('click', hide, false);
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("DOM WHATWG", "#dom-event-target", "Event.target")}}     | {{Spec2("DOM WHATWG")}} |                      |
| {{SpecName("DOM4", "#dom-event-target", "Event.target")}}             | {{Spec2("DOM4")}}         |                      |
| {{SpecName("DOM2 Events", "#Events-Event-target", "Event.target")}} | {{Spec2("DOM2 Events")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Event.target")}}

## Notes concernant la compatibilité

Sur IE6-8, le modèle d'événement est différent. Les écouteurs sont attachés avec la méthode non standard `{{domxref('EventTarget.attachEvent')}}` . Dans ce modèle, l'objet événement a une propriété  `{{domxref('Event.srcElement')}}`, à la place de la propriété `target`, avec la même sémantique que `event.target`.

```js
function hide(e) {
  // Support IE6-8
  var target = e.target || e.srcElement;
  target.style.visibility = 'hidden';
}
```

## Voir aussi

[Comparaison des cibles d'évènements](/fr/docs/Web/API/Event/Comparaison_des_cibles_d_%C3%A9v%C3%A8nements)
