---
title: TransitionEvent
slug: Web/API/TransitionEvent
translation_of: Web/API/TransitionEvent
---
{{APIRef("CSSOM")}} {{SeeCompatTable}}

L'interface **`TransitionEvent`** représente des événements fournissant des informations relatives aux [transitions](/en-US/docs/Web/Guide/CSS/Using_CSS_transitions) .

## Propriétés

_Hérite également des propriétés de son parent {{domxref("Event")}}_ .

- {{domxref("TransitionEvent.propertyName")}} {{readonlyInline}}
  - : Est-ce qu'un {{domxref("DOMString")}} contient le nom de la propriété CSS associée à la transition.
- {{domxref("TransitionEvent.elapsedTime")}} {{readonlyInline}}
  - : Est- `float`ce que la durée de l'exécution est en cours, en secondes, lorsque cet événement a été déclenché. Cette valeur n'est pas affectée par la propriété {{cssxref ("transition-delay")}}.
- {{domxref("TransitionEvent.pseudoElement")}} {{readonlyInline}}
  - : Est-ce qu'un {{domxref("DOMString")}}, commençant par `'::'`, contenant le nom du [pseudo-élément](/en-US/docs/Web/CSS/Pseudo-elements) sur lequel s'exécute l'animation. Si la transition ne s'exécute pas sur un pseudo-élément mais sur l'élément, une chaîne vide:` ''``. `

## Constructeur

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent ()")}}
  - : Crée un `TransitionEvent`événement avec les paramètres donnés.

## Méthodes

_Hérite également des propriétés de son parent {{domxref("Event")}}_ .

- {{domxref("TransitionEvent.initTransitionEvent ()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Initialise un `TransitionEvent`créé en utilisant la méthode {{domxref("Document.createEvent ()")}} déconseillée.

## Caractéristiques

| spécification                                                                                                        | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName ('Transitions CSS3', '# Événements-TransitionEvent', 'TransitionEvent')}} | {{Spec2 ('Transitions CSS3')}} | Définition initiale. |

## Compatibilité du navigateur

{{Compat}}

## Voir également

- [Utilisation des transitions CSS](/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)
- Propriétés de CSS: {{cssxref ("transition")}}, {{cssxref ("transition-delay")}}, {{cssxref ("transition-duration")}}, {{cssxref ("transition-property") }}, {{Cssxref ("transition-timing-function")}}.
