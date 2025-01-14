---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
---

{{APIRef("DOM")}}

Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.

## Syntaxe

```js
event.stopPropagation();
```

## Exemple

Voir la section Exemple 5 : [Propagation d'évènements](/fr/docs/Web/API/Document_Object_Model/Exemples#Exemple_5_:_propagation_d%27évènements) dans le chapitre Exemples pour un exemple plus détaillé de cette méthode et de la propagation d'évènements dans le DOM.

## Notes

Voir [DOM specification](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) (en) pour une explication du flux d'évènements. (Une illustration est disponible dans le brouillon [DOM Level 3 Event draft](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) (en)).

[preventDefault](/fr/docs/Web/API/Event/preventDefault) est une méthode complémentaire qui peut être utilisée pour empêcher l'action par défaut de l'évènement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
