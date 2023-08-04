---
title: InputEvent
slug: Web/API/InputEvent
---

{{APIRef("DOM Events")}} {{SeeCompatTable}}

L'interface **`InputEvent`** représente un évènement notifiant la modification d'un contenu éditable.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("InputEvent.InputEvent", "InputEvent()")}}
  - : Crée un objet `InputEvent`.

## Propriétés

Cette interface hérite des propriétés de ses parents, {{domxref("UIEvent")}} et {{domxref("Event")}}.

- {{domxref("InputEvent.data")}}{{readOnlyInline}}
  - : Retourne une {{domxref("DOMString")}} avec les caractères insérést. Cela peut être une chaîne vide si la modification n'insère pas de texte (comme la suppression de caractères, par exemple).
- {{domxref("InputEvent.dataTransfer")}}{{readonlyinline}}
  - : Retourne un objet {{domxref("DataTransfer")}} contenant des informations sur des données de texte riche (_richtext_) ou brut (_plaintext_) étant ajoutées ou supprimées du contenu éditable.
- {{domxref("InputEvent.inputType")}}{{readonlyinline}}
  - : Retourne le type de modification du le contenu éditable tel que, par exemple, l'insertion, la suppression ou le formatage de texte. Voir la page de la propriété pour une liste complète des types de modification.
- {{domxref("InputEvent.isComposing")}}{{readOnlyInline}}
  - : Retourne une valeur {{jsxref("Boolean", "booléenne")}} indiquant si l'évènement est émis après [`compositionstart`](/fr/docs/Web/API/Element/compositionstart_event) et avant [`compositionend`](/fr/docs/Web/API/Element/compositionend_event).

## Méthodes

Cette interface hérite des méthodes de ses parents, {{domxref("UIEvent")}} et {{domxref("Event")}}.

- {{domxref('InputEvent.getTargetRanges()')}}
  - : Retourne un tableau de {{domxref("Range", "ranges")}} statiques qui seront affectés par une modification du DOM si l'évènement input n'est pas annulé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`beforeinput`](/fr/docs/Web/API/HTMLElement/beforeinput_event)
- L'évènement [`input`](/fr/docs/Web/API/HTMLElement/input_event)
