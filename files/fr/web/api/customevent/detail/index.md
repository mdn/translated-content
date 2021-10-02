---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
tags:
  - API
  - DOM
  - Propriétés
  - Évènement personnalisé
translation_of: Web/API/CustomEvent/detail
---
{{APIRef("DOM")}}

Le **`detail`** de la propriété en lecture seule de l'interface {{domxref("CustomEvent")}} renvoie toutes les données transmises lors de l'initialisation de l'évènement.

{{AvailableInWorkers}}

## Syntaxe

     let myDetail = customEventInstance.detail;

### Valeur retournée

Toute donnée initialisée avec l'évènement.

## Exemple

```js
// ajoute un écouteur d'évènement approprié
obj.addEventListener("cat", function(e) { process(e.detail) });

// crée et distribue l'évènement
let event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);

// Retournera un objet contenant la propriété hazcheeseburger
let myDetail = event.detail;
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#dom-customeventinit-detail','detail')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.CustomEvent.detail")}}

## Voir aussi

- {{domxref("CustomEvent")}}
