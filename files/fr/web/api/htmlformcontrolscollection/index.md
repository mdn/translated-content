---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
l10n:
  sourceCommit: 8626f2e444062fbbf08b8729ab4269cceaf7d1bd
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLFormControlsCollection`** représente une _collection_ _d'éléments de contrôle de formulaires_. Il représente les listes retournées par le {{DOMxRef("HTMLFormElement")}} et le {{DOMxRef("HTMLFieldSetElement")}} de la propriété d'interface {{DOMxRef("HTMLFieldSetElement.elements", "elements")}}.

La collection retournée par {{DOMxRef("HTMLFormElement.elements")}} inclut les éléments de contrôle de formulaire associés et listés du formulaire. Voir {{DOMxRef("HTMLFormElement.elements")}} pour la liste des [éléments de contrôle listés](/fr/docs/Web/API/HTMLFormElement/elements#valeur) et une explication de [l'association de formulaire](/fr/docs/Web/API/HTMLFormElement/elements#contrôles_de_formulaire_associés).

Cette interface remplace une méthode de {{DOMxRef("HTMLCollection")}}, sur laquelle elle est basée.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de son parent {{DOMxRef("HTMLCollection")}}._

## Méthodes d'instance

_Cette interface hérite des méthodes de son parent {{DOMxRef("HTMLCollection")}}._

- {{DOMxRef("HTMLFormControlsCollection.namedItem()")}}
  - : Retourne la {{DOMxRef("RadioNodeList")}} (_liste de noeuds radio_) ou l'{{DOMxRef("Element")}} dans la collection dont le `name` (_nom_) ou l'`id` (_identifiant_) correspond au nom défini, ou `null` si aucun noeud ne correspond. Noter que cette version de `namedItem()` cache celui hérité de {{DOMxRef("HTMLCollection")}}. Comme pour le premier, en JavaScript, en utilisant le crochet de la syntaxe de tableau (_array_) avec une {{JSxRef("String")}} (_chaîne de caractères_), `collection["value"]` est équivalent à `collection.namedItem("value")`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les interfaces {{DOMxRef("HTMLCollection")}}, {{DOMxRef("RadioNodeList")}}, {{DOMxRef("HTMLOptionsCollection")}}
