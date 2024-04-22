---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLFormControlsCollection`** représente une _collection_ _d'éléments de contrôle de formulaires_. Il représente les listes retournées par le {{domxref("HTMLFormElement")}} et le {{domxref("HTMLFieldSetElement")}} de la propriété d'interface {{domxref("HTMLFieldSetElement.elements", "elements")}}.

Cette interface remplace une méthode de {{domxref("HTMLCollection")}}, sur laquelle elle est basée.

{{InheritanceDiagram}}

## Propriétés

_Cette interface hérite des propriétés de son parent {{domxref("HTMLCollection")}}._

## Méthodes

_Cette interface hérite des méthodes de son parent {{domxref("HTMLCollection")}}._

- {{domxref("HTMLFormControlsCollection.namedItem()")}}
  - : Renvoie la {{domxref("RadioNodeList")}} (_liste de noeuds radio_) ou l'{{domxref("Element")}} dans la collection dont le `name` (_nom_) ou l'`id` (_identifiant_) correspond au nom spécifié, ou `null` si aucun noeud ne correspond. Noter que cette version de `namedItem()` cache celui hérité de {{domxref("HTMLCollection")}}. Comme pour le premier, en JavaScript, en utilisant le crochet de la syntaxe de tableau (_array_) avec une {{jsxref("String")}} (_chaîne de caractères_), `collection["value"]` est équivalent à `collection.namedItem("value")`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLCollection")}}, {{domxref("RadioNodeList")}}, {{domxref("HTMLOptionsCollection")}}
